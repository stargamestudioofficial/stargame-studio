/* ═══════════════════════════════════════════════════
   STARGAME STUDIO — app.js
   All interactive behaviour for the site.
═══════════════════════════════════════════════════ */

'use strict';

// ─────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────
const ADMIN_EMAILS = [
  'stargamestudioofficial@gmail.com',
  'lionelclementofficial@gmail.com'
];
const KNOWN_MEMBERS = [
  'ironlion390','lionelclement','stargamestudioofficial',
  'niamaru87','cigerds','polarplatypus','poleyz','la.poleyz',
  'skyblue','alexishio','alex ishio','m707',
  'ashie_bearz','ashiebearz','mdvrxon','mdvrxon.xx'
];
const GEMINI_KEY  = 'AIzaSyCsZzz5vNN1uOka78bD4fDqqRtYI8Zgdus';
const GEMINI_URL  = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`;

// AI system context — kept long so Gemini stays locked to SG topics
const SG_CONTEXT = `
You are SG Assistant, the exclusive AI for Stargame Studio.
ONLY answer questions about Stargame Studio. If a user asks anything
unrelated to SG Studio (politics, homework, other companies, etc.),
politely decline and redirect them to SG Studio topics.

KEY FACTS:
- Founded: June 2023 by Lionel Clement (Discord: ironlion390)
- Head of Staff: niamaru87
- Designers Dept led by: CigeRDs
- 3rd Anniversary: June 2026
- Artists Week: June 1–7, 2026

GAMES (all target 2027 unless noted):
- Starry Simulator → LIVE at roblox.com/games/88425766393203 (Simulator)
- Rampage Royale → 5v5 PvP, 4 teams: Murderers (knives), Sheriffs (guns), Innocents ×2; Tower Defense mode; first-person
- Relax Hangout → social hangout by Lionel; artists earn 400 Robux/piece
- StarCity → city roleplay, MAIN REVENUE project, PolarPlatypus + Poleyz designing; all contributors get 15K Robux on launch; scripters/UI/builders 200 Robux/item
- Veccera Cafe → cafe sim; SkyBlue + Alex Ishio + M707
- The Outbreak → survival horror; CigeRDs UI
- P.A.S (Project Andularia Stardust) → fantasy adventure

LIVE UGC:
- Astro HoneyBear Space Helmet: roblox.com/catalog/87253929721032
- Crimson Broadsword: roblox.com/catalog/96321796268826
- 5 classic clothing lines on ROBLOX

STATS: 20K+ players/members · 7 games in dev · 300+ members · 120+ assets

COMMISSION PAYMENTS: USD/PayPal, Robux, revenue share, gift cards, Discord Nitro
APPLY: forms.gle/xdgQPCLsNZ7WyMcp9
CONTACT: stargamestudioofficial@gmail.com · Discord: ironlion390 / niamaru87
APPEALS: discord.gg/CFWv8fZnyY
NO AI ART POLICY — strictly human-made artwork only
AGES 13–19 especially welcomed
`.trim();

// ─────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────
let currentUser   = null;
let isAdmin       = false;
let aiOpen        = false;
let aiHistory     = [];          // Gemini conversation history
let friends       = [];          // { email, name, init }
let chatLogs      = {};          // email -> [{ from:'me'|'them', text }]
let activeFriend  = null;

// Posts — seed from localStorage or use defaults
let posts = loadPosts();

function defaultPosts() {
  return [
    {
      id: 1,
      title: 'Starry Simulator — Live on ROBLOX!',
      desc:  'Our first full game experience is live! Play Starry Simulator now — star-themed simulation with collecting, progression, and more to come.',
      emoji: '⭐', date: 'Recently', author: 'Stargame Studio', official: true,
      reactions: { fire:112, heart:87, star:64, rocket:43 }, userReacts: {}
    },
    {
      id: 2,
      title: 'Two New UGC Items — Astro HoneyBear & Crimson Broadsword',
      desc:  'Both UGC accessories are now available in the ROBLOX catalog! Add the Astro HoneyBear Space Helmet and Crimson Broadsword to your avatar today.',
      emoji: '💎', date: 'Recently', author: 'Stargame Studio', official: true,
      reactions: { fire:95, heart:71, star:52, rocket:88 }, userReacts: {}
    },
    {
      id: 3,
      title: 'StarCity — Development Progress',
      desc:  'StarCity is actively in development. Designs by PolarPlatypus & Poleyz (VY). Target: 2027. All contributors receive 15K Robux on launch. Scripters, UI designers, builders earn 200 Robux per item.',
      emoji: '🌆', date: 'Recently', author: 'Stargame Studio', official: true,
      reactions: { fire:203, heart:158, star:112, rocket:141 }, userReacts: {}
    },
    {
      id: 4,
      title: '🌟 Artists Week 2026 — June 1–7 · 3rd Anniversary!',
      desc:  'This June we celebrate every artist who has poured their heart into Stargame Studio AND our 3rd anniversary since June 2023! Visit the Artists Week page to see our spotlight gallery.',
      emoji: '🌟', date: 'Upcoming · June 2026', author: 'Stargame Studio', official: true,
      reactions: { fire:0, heart:0, star:0, rocket:0 }, userReacts: {}
    }
  ];
}

function loadPosts() {
  try {
    const raw = localStorage.getItem('sg-posts');
    return raw ? JSON.parse(raw) : defaultPosts();
  } catch (_) {
    return defaultPosts();
  }
}
function savePosts() {
  try { localStorage.setItem('sg-posts', JSON.stringify(posts)); } catch (_) {}
}

// ─────────────────────────────────────────────────
// PAGE NAVIGATION
// ─────────────────────────────────────────────────
function sp(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Side-effects per page
  if (id === 'chat') renderChat();
  renderPostsFeed();   // always keep feed up-to-date
}

function st(id) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const el = document.getElementById('nl-' + id);
  if (el) el.classList.add('active');
}

// ─────────────────────────────────────────────────
// AUTH
// ─────────────────────────────────────────────────
function openModal()  { document.getElementById('auth-modal').classList.add('open'); }
function closeModal() { document.getElementById('auth-modal').classList.remove('open'); }

// Close modal if backdrop clicked
document.getElementById('auth-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

function loginGoogle() {
  // In production wire to real Google OAuth; here we simulate the founder account
  currentUser = {
    name:  'Lionel Clement',
    email: 'stargamestudioofficial@gmail.com',
    init:  'LC'
  };
  isAdmin = ADMIN_EMAILS.includes(currentUser.email);
  onLogin();
}

function loginGuest() {
  currentUser = { name: 'Guest', email: 'guest@temp', init: 'G' };
  isAdmin = false;
  onLogin();
}

function logout() {
  currentUser = null;
  isAdmin = false;
  document.getElementById('nav-auth').innerHTML = `
    <button class="pill-btn pill-ghost" onclick="openModal()">Sign in</button>
    <a class="pill-btn pill-gold" href="https://forms.gle/xdgQPCLsNZ7WyMcp9" target="_blank" rel="noopener">Join Studio</a>
  `;
  document.getElementById('admin-post-btn').style.display  = 'none';
  const awBtn = document.getElementById('aw-admin-btn');
  if (awBtn) awBtn.style.display = 'none';
  renderChat();
  renderPostsFeed();
}

function onLogin() {
  closeModal();

  // Render user chip in nav
  document.getElementById('nav-auth').innerHTML = `
    <div style="display:flex;align-items:center;gap:7px;padding:6px 12px;border-radius:100px;
         border:1px solid rgba(232,184,48,0.25);cursor:pointer;font-size:13px;color:#fff;
         font-family:'DM Sans',sans-serif" onclick="logout()">
      <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,var(--purple),var(--gold-d));
           display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;
           font-family:'Space Grotesk',sans-serif">${currentUser.init}</div>
      ${currentUser.name}
      ${isAdmin ? '<span style="background:rgba(232,184,48,0.12);color:var(--gold-l);font-size:10px;padding:2px 7px;border-radius:100px;border:1px solid rgba(232,184,48,0.25);font-weight:700">Admin</span>' : ''}
    </div>
    ${isAdmin ? '<button class="pill-btn pill-ghost" onclick="openCMS()" style="margin-left:6px;font-size:12px">⚙ Edit Site</button>' : ''}
  `;

  // Show admin controls
  if (isAdmin) {
    document.getElementById('admin-post-btn').style.display = 'block';
    const awBtn = document.getElementById('aw-admin-btn');
    if (awBtn) awBtn.style.display = 'block';
  }

  renderPostsFeed();
  renderChat();
  showNotif(`✦ Signed in as ${currentUser.name}${isAdmin ? ' · Admin access unlocked' : ''}`, 'success');
}

// ─────────────────────────────────────────────────
// POSTS FEED
// ─────────────────────────────────────────────────
function renderPostsFeed() {
  const container = document.getElementById('posts-container');
  if (!container) return;
  container.innerHTML = '';

  posts.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post-item' + (post.official ? ' official' : '');
    div.innerHTML = `
      <div class="post-ico" style="background:${post.official ? 'var(--gold-bg)' : 'var(--purple-bg)'}">
        ${post.emoji}
      </div>
      <div style="flex:1">
        <div class="post-meta">
          ${post.official ? '<span class="chip gold" style="font-size:10px">OFFICIAL</span>' : ''}
          <span>${escHtml(post.author)}</span>
          <span>·</span>
          <span>${escHtml(post.date)}</span>
        </div>
        <div class="post-title">${escHtml(post.title)}</div>
        <div class="post-desc">${escHtml(post.desc)}</div>
        <div class="react-row">
          ${['🔥','❤️','⭐','🚀'].map((emoji, i) => {
            const key  = ['fire','heart','star','rocket'][i];
            const isOn = currentUser && post.userReacts[currentUser.email + '-' + key] ? ' on' : '';
            return `<button class="rbtn${isOn}" onclick="react(${post.id},'${key}',this)">
                      ${emoji} <span>${post.reactions[key]}</span>
                    </button>`;
          }).join('')}
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

// Emoji reaction toggle
function react(postId, key, btn) {
  if (!currentUser || currentUser.email === 'guest@temp') {
    showNotif('Sign in to react to posts!', 'error');
    return;
  }
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  const rKey = currentUser.email + '-' + key;
  if (post.userReacts[rKey]) {
    post.reactions[key]--;
    delete post.userReacts[rKey];
    btn.classList.remove('on');
  } else {
    post.reactions[key]++;
    post.userReacts[rKey] = true;
    btn.classList.add('on');
  }
  btn.querySelector('span').textContent = post.reactions[key];
  savePosts();
}

// Admin: show/hide create post panel
function showCreatePost() {
  if (!isAdmin) { showNotif('Admin access required', 'error'); return; }
  const panel = document.getElementById('create-post-panel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

// Admin: publish a new post
function publishPost() {
  if (!isAdmin) return;
  const title = document.getElementById('pt').value.trim();
  const desc  = document.getElementById('pd').value.trim();
  const emoji = document.getElementById('pe').value;

  if (!title || !desc) { showNotif('Please fill in title and description', 'error'); return; }

  const now = new Date();
  const date = now.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });

  posts.unshift({
    id: Date.now(),
    title, desc, emoji, date,
    author: currentUser.name,
    official: true,
    reactions: { fire:0, heart:0, star:0, rocket:0 },
    userReacts: {}
  });

  savePosts();

  document.getElementById('pt').value  = '';
  document.getElementById('pd').value  = '';
  document.getElementById('create-post-panel').style.display = 'none';
  renderPostsFeed();
  showNotif('✅ Post published and live for all visitors!', 'success');
}

// ─────────────────────────────────────────────────
// SHOWCASE FILTER
// ─────────────────────────────────────────────────
function filterS(cat, btn) {
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#sg .product-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.c === cat) ? '' : 'none';
  });
}

// ─────────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────────
function submitContact() {
  const name = document.getElementById('cfn').value.trim();
  const email= document.getElementById('cfe').value.trim();
  const desc = document.getElementById('cfd').value.trim();

  if (!name || !email || !desc) {
    showNotif('Please fill in name, email, and description', 'error');
    return;
  }

  // In production send via a serverless function (Netlify/Vercel) or EmailJS
  document.getElementById('cf-form').style.display = 'none';
  document.getElementById('cf-ok').style.display   = 'block';
  showNotif('✅ Message sent successfully!', 'success');
}

function resetContact() {
  document.getElementById('cf-ok').style.display   = 'none';
  document.getElementById('cf-form').style.display = 'block';
}

// ─────────────────────────────────────────────────
// CHAT
// ─────────────────────────────────────────────────
function renderChat() {
  const wall = document.getElementById('chat-wall');
  const ui   = document.getElementById('chat-ui');
  if (!wall || !ui) return;

  if (!currentUser || currentUser.email === 'guest@temp') {
    wall.style.display = 'block';
    ui.style.display   = 'none';
  } else {
    wall.style.display = 'none';
    ui.style.display   = 'block';
    renderFriends();
  }
}

function addFriend() {
  const input = document.getElementById('fi');
  const email = input.value.trim().toLowerCase();

  if (!email || !email.includes('@')) { showNotif('Enter a valid Gmail address', 'error'); return; }
  if (currentUser && email === currentUser.email) { showNotif("That's your own email!", 'error'); return; }
  if (friends.find(f => f.email === email)) { showNotif('Already added', 'error'); return; }

  const name = email.split('@')[0];
  friends.push({ email, name, init: name[0].toUpperCase() });
  chatLogs[email] = [];
  input.value = '';
  renderFriends();
  showNotif('Friend added! 🎉', 'success');
}

function renderFriends() {
  const list = document.getElementById('fl');
  const count= document.getElementById('fc');
  if (!list) return;

  count.textContent = friends.length ? `(${friends.length})` : '';

  if (!friends.length) {
    list.innerHTML = '<div class="empty-friends">No friends yet — add someone above</div>';
    return;
  }

  list.innerHTML = '';
  friends.forEach(f => {
    const d = document.createElement('div');
    d.className = 'friend-item' + (activeFriend === f.email ? ' active' : '');
    d.innerHTML = `
      <div class="fav">${f.init}</div>
      <div>
        <div class="fnm">${escHtml(f.name)}</div>
        <div class="fem">${escHtml(f.email)}</div>
      </div>
    `;
    d.onclick = () => openConvo(f);
    list.appendChild(d);
  });
}

function openConvo(f) {
  activeFriend = f.email;
  document.getElementById('cav').textContent = f.init;
  document.getElementById('cnm').textContent = f.name;
  document.getElementById('cem').textContent = f.email;
  renderFriends();

  const msgs = document.getElementById('cmsgs');
  msgs.innerHTML = '';
  const history = chatLogs[f.email] || [];

  if (!history.length) {
    const sys = document.createElement('div');
    sys.className = 'cmsg-sys';
    sys.textContent = `Conversation with ${f.name} started`;
    msgs.appendChild(sys);
  } else {
    history.forEach(m => {
      const d = document.createElement('div');
      d.className = 'cmsg-' + (m.from === 'me' ? 'me' : 'them');
      d.textContent = m.text;
      msgs.appendChild(d);
    });
  }
  msgs.scrollTop = msgs.scrollHeight;
}

function sendMsg() {
  if (!activeFriend) return;
  const input = document.getElementById('cinp');
  const text  = input.value.trim();
  if (!text) return;

  input.value = '';
  chatLogs[activeFriend].push({ from: 'me', text });

  const msgs = document.getElementById('cmsgs');
  const d = document.createElement('div');
  d.className   = 'cmsg-me';
  d.textContent = text;
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;

  // Simulated reply (replace with WebSocket / Supabase realtime for true live chat)
  const replies = ['👍','Sounds great!','On it!','Got it!','Cool!','Let me check.','Sure! 🌟','Nice one!'];
  setTimeout(() => {
    const reply = replies[Math.floor(Math.random() * replies.length)];
    chatLogs[activeFriend].push({ from: 'them', text: reply });
    const rd = document.createElement('div');
    rd.className   = 'cmsg-them';
    rd.textContent = reply;
    msgs.appendChild(rd);
    msgs.scrollTop = msgs.scrollHeight;
  }, 500 + Math.random() * 900);
}

// ─────────────────────────────────────────────────
// ARTISTS WEEK
// ─────────────────────────────────────────────────
function showAwUpload() {
  if (!isAdmin) { showNotif('Admin access required', 'error'); return; }
  const p = document.getElementById('aw-upload-panel');
  p.style.display = p.style.display === 'none' ? 'block' : 'none';
}

function addArtistCard() {
  const name  = document.getElementById('aw-nm').value.trim();
  const piece = document.getElementById('aw-piece').value.trim();
  const img   = document.getElementById('aw-img').value.trim();

  if (!name || !piece) { showNotif('Enter artist name and piece title', 'error'); return; }

  const grid = document.getElementById('aw-grid');
  const card = document.createElement('div');
  card.className = 'aw-card';
  const isURL = img.startsWith('http');
  card.innerHTML = `
    <div class="aw-thumb ${isURL ? '' : 'emoji'}">
      ${isURL ? `<img src="${escHtml(img)}" alt="${escHtml(name)} artwork" onerror="this.parentNode.textContent='🎨'">` : (img || '🎨')}
    </div>
    <div class="aw-info">
      <div class="aw-artist">${escHtml(name)}</div>
      <div class="aw-piece">${escHtml(piece)}</div>
    </div>
  `;
  grid.appendChild(card);

  document.getElementById('aw-nm').value    = '';
  document.getElementById('aw-piece').value = '';
  document.getElementById('aw-img').value   = '';
  document.getElementById('aw-upload-panel').style.display = 'none';
  showNotif('✅ Artist added to the gallery!', 'success');
}

// ─────────────────────────────────────────────────
// VERIFY
// ─────────────────────────────────────────────────
function doVerify() {
  const raw = document.getElementById('vi').value.trim().toLowerCase();
  const res = document.getElementById('vr');
  res.style.display = 'block';

  if (!raw) {
    res.textContent = 'Please enter a username or email.';
    res.style.cssText = 'display:block;padding:12px 16px;border-radius:8px;background:rgba(255,255,255,0.03);font-size:13px';
    return;
  }

  const clean = raw.replace('@gmail.com', '').replace('@temp', '');
  const matched = KNOWN_MEMBERS.some(k =>
    k.replace('@gmail.com','').includes(clean) || clean.includes(k.replace('@gmail.com',''))
  );

  if (matched) {
    res.innerHTML = '<span style="color:#5AC476;font-weight:600">✅ Verified Stargame Studio Member</span>';
    res.style.cssText = 'display:block;padding:12px 16px;border-radius:8px;font-size:13px;background:rgba(52,168,83,0.06);border:1px solid rgba(52,168,83,0.2)';
  } else {
    res.innerHTML = `
      <span style="font-weight:600;color:rgba(234,67,53,0.9)">❌ Not a verified member</span><br>
      <span style="font-size:12px;color:var(--text-sec)">Not found in official records.
      Contact <strong>ironlion390</strong> on Discord to confirm manually.</span>
    `;
    res.style.cssText = 'display:block;padding:12px 16px;border-radius:8px;font-size:13px;background:rgba(234,67,53,0.04);border:1px solid rgba(234,67,53,0.15)';
  }
}

// ─────────────────────────────────────────────────
// CMS EDITOR
// ─────────────────────────────────────────────────
function openCMS() {
  if (!isAdmin) { showNotif('Admin access required', 'error'); return; }
  document.getElementById('cms-overlay').classList.add('open');
}
function closeCMS() {
  document.getElementById('cms-overlay').classList.remove('open');
}

function publishCMS() {
  // Persist CMS colour tweaks to localStorage so they survive a refresh
  const purple = document.documentElement.style.getPropertyValue('--purple');
  const gold   = document.documentElement.style.getPropertyValue('--gold');
  const black  = document.documentElement.style.getPropertyValue('--black');
  if (purple) localStorage.setItem('sg-color-purple', purple);
  if (gold)   localStorage.setItem('sg-color-gold',   gold);
  if (black)  localStorage.setItem('sg-color-black',  black);

  // Persist social links
  saveSocials();

  closeCMS();
  const toast = document.getElementById('pub-toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
  showNotif('🚀 Site published and live!', 'success');
}

function saveSocials() {
  const map = {
    discord:   '#cms-discord',
    twitter:   '#cms-twitter',
    youtube:   '#cms-youtube',
    instagram: '#cms-instagram'
  };
  Object.entries(map).forEach(([key, sel]) => {
    const el = document.querySelector(sel);
    if (el && el.value) localStorage.setItem('sg-social-' + key, el.value);
  });
  // Update footer links
  document.querySelectorAll('.spill').forEach((a, i) => {
    const keys = ['discord','twitter','youtube','instagram','tiktok'];
    const url  = localStorage.getItem('sg-social-' + keys[i]);
    if (url) a.href = url;
  });
  showNotif('Social links saved', 'success');
}

function cmsAddArtist() {
  document.getElementById('aw-nm').value    = document.getElementById('cms-aw-nm').value;
  document.getElementById('aw-piece').value = document.getElementById('cms-aw-pc').value;
  document.getElementById('aw-img').value   = document.getElementById('cms-aw-img').value;
  addArtistCard();
  document.getElementById('cms-aw-nm').value  = '';
  document.getElementById('cms-aw-pc').value  = '';
  document.getElementById('cms-aw-img').value = '';
}

function addCustomSection() {
  const title = document.getElementById('cms-cs-t').value.trim();
  const body  = document.getElementById('cms-cs-b').value.trim();
  const bg    = document.getElementById('cms-cs-bg').value;

  if (!title || !body) { showNotif('Enter section title and content', 'error'); return; }

  const themes = {
    light:  { bg: 'var(--surface)', border: 'var(--border)', text: 'var(--text)', subtext: 'var(--text-sec)' },
    dark:   { bg: 'var(--black)',   border: 'rgba(232,184,48,0.12)', text: '#fff', subtext: 'rgba(255,255,255,0.5)' },
    gold:   { bg: 'var(--gold-bg)', border: 'var(--gold-border)',   text: 'var(--text)', subtext: 'var(--text-sec)' },
    purple: { bg: 'var(--purple-bg)', border: 'var(--purple-border)', text: 'var(--text)', subtext: 'var(--text-sec)' }
  };
  const t = themes[bg] || themes.light;

  const section = document.createElement('section');
  section.style.cssText = `background:${t.bg};border-top:1px solid ${t.border};border-bottom:1px solid ${t.border};padding:48px;`;
  section.innerHTML = `
    <div style="max-width:1200px;margin:0 auto">
      <h2 style="font-family:'Space Grotesk',sans-serif;font-size:28px;font-weight:700;
          letter-spacing:-0.5px;margin-bottom:12px;color:${t.text}">${escHtml(title)}</h2>
      <p style="font-size:15px;line-height:1.7;color:${t.subtext}">${escHtml(body)}</p>
    </div>
  `;

  document.querySelector('footer').before(section);
  document.getElementById('cms-cs-t').value = '';
  document.getElementById('cms-cs-b').value = '';
  closeCMS();
  showNotif('✅ Section added to site!', 'success');
}

// ─────────────────────────────────────────────────
// AI ASSISTANT (Gemini)
// ─────────────────────────────────────────────────
function toggleAI() {
  aiOpen = !aiOpen;
  document.getElementById('ai-panel').classList.toggle('open', aiOpen);
}

function askAI(question) {
  document.getElementById('ai-in').value = question;
  sendAI();
}

async function sendAI() {
  const input = document.getElementById('ai-in');
  const text  = input.value.trim();
  if (!text) return;
  input.value = '';

  const msgs = document.getElementById('ai-msgs');

  // User bubble
  const ub = document.createElement('div');
  ub.className   = 'aiu';
  ub.textContent = text;
  msgs.appendChild(ub);

  // Typing indicator
  const typing = document.createElement('div');
  typing.className = 'typing';
  typing.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;

  // Build Gemini contents array — inject context into first user turn
  aiHistory.push({ role: 'user', parts: [{ text }] });

  const contents = aiHistory.map((m, i) => ({
    role: m.role,
    parts: i === 0
      ? [{ text: SG_CONTEXT + '\n\nUser question: ' + m.parts[0].text }]
      : m.parts
  }));

  try {
    const res = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents })
    });
    const data = await res.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm having trouble connecting right now. Please try again!";

    aiHistory.push({ role: 'model', parts: [{ text: reply }] });
    typing.remove();

    const ab = document.createElement('div');
    ab.className   = 'aib';
    ab.textContent = reply;
    msgs.appendChild(ab);
  } catch (_) {
    typing.remove();
    const eb = document.createElement('div');
    eb.className   = 'aib';
    eb.textContent = 'Connection issue — please try again.';
    msgs.appendChild(eb);
  }

  msgs.scrollTop = msgs.scrollHeight;
}

// ─────────────────────────────────────────────────
// NOTIFICATIONS
// ─────────────────────────────────────────────────
let notifTimer = null;
function showNotif(message, type = 'success') {
  const el = document.getElementById('notif');
  el.textContent = message;
  el.className   = `notif ${type} show`;
  clearTimeout(notifTimer);
  notifTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

// ─────────────────────────────────────────────────
// ARTISTS WEEK COUNTDOWN
// ─────────────────────────────────────────────────
function updateCountdown() {
  const target = new Date('2026-06-01T00:00:00');
  const now    = new Date();
  const diff   = target - now;

  if (diff <= 0) {
    // Artists Week is happening!
    ['cd-d','cd-h','cd-m','cd-s'].forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) el.textContent = ['🎉','IN','NOW','🎨'][i];
    });
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000)  / 60000);
  const s = Math.floor((diff % 60000)    / 1000);

  const pad = n => String(n).padStart(2, '0');
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };

  set('cd-d', pad(d));
  set('cd-h', pad(h));
  set('cd-m', pad(m));
  set('cd-s', pad(s));
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ─────────────────────────────────────────────────
// TWINKLING STARS (Artists Week background)
// ─────────────────────────────────────────────────
(function spawnStars() {
  const container = document.getElementById('aw-stars');
  if (!container) return;
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'aw-star';
    star.style.left              = Math.random() * 100 + '%';
    star.style.top               = Math.random() * 100 + '%';
    star.style.animationDelay    = Math.random() * 4 + 's';
    star.style.animationDuration = (2 + Math.random() * 2.5) + 's';
    if (Math.random() > 0.5) star.style.background = 'rgba(139,71,196,0.5)';
    container.appendChild(star);
  }
})();

// ─────────────────────────────────────────────────
// RESTORE SAVED COLOURS (CMS persist)
// ─────────────────────────────────────────────────
(function restoreColors() {
  const vars = { '--purple':'sg-color-purple', '--gold':'sg-color-gold', '--black':'sg-color-black' };
  Object.entries(vars).forEach(([prop, key]) => {
    const saved = localStorage.getItem(key);
    if (saved) document.documentElement.style.setProperty(prop, saved);
  });
})();

// ─────────────────────────────────────────────────
// UTILITY
// ─────────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

// ─────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderPostsFeed();
  renderChat();
});
