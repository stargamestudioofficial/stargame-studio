# Stargame Studio Website

Youth-powered creative ROBLOX studio. Est. June 2023.

---

## File structure

```
stargame-studio/
├── index.html          ← Main page (everything lives here)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── app.js          ← All interactivity (posts, chat, AI, CMS…)
└── assets/
    ├── logo.png         ← Transparent logo (Transparent_logo_.png)
    └── summer-icon.png  ← Summer artwork (Summer_icon_.png)
```

---

## How to deploy to GitHub Pages (step by step)

### Step 1 — Create the GitHub repository

1. Go to **https://github.com** and sign in.
2. Click the **+** button (top right) → **New repository**.
3. Name it exactly: `stargame-studio`  *(or any name you like)*
4. Set it to **Public**.
5. Do **NOT** tick "Add README" — leave it empty.
6. Click **Create repository**.

---

### Step 2 — Upload your files

**Option A — Via the GitHub website (easiest, no code needed)**

1. On your new empty repo page, click **"uploading an existing file"**.
2. Drag and drop ALL these files/folders at once:
   - `index.html`
   - `css/` folder  (with `style.css` inside)
   - `js/`  folder  (with `app.js` inside)
   - `assets/` folder  (with `logo.png` and `summer-icon.png` inside)
3. Scroll down, type a commit message like `first upload`, click **Commit changes**.

**Option B — Via Git terminal (if you have Git installed)**

```bash
# In your project folder:
git init
git add .
git commit -m "first upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/stargame-studio.git
git push -u origin main
```
Replace `YOUR_USERNAME` with your actual GitHub username.

---

### Step 3 — Enable GitHub Pages

1. In your repository, click **Settings** (top tab).
2. In the left sidebar, click **Pages**.
3. Under **Source**, set:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**.
5. Wait ~60 seconds, then refresh the page.
6. You will see a green banner:
   > **"Your site is live at https://YOUR_USERNAME.github.io/stargame-studio/"**

That URL is your live website. Share it with anyone!

---

## How to connect a custom domain (e.g. stargamestudio.com)

1. Buy a domain at Namecheap, GoDaddy, Google Domains, etc.
2. In GitHub → Settings → Pages → **Custom domain**, type your domain and save.
3. In your domain registrar's DNS settings, add these records:

   | Type  | Name | Value                    |
   |-------|------|--------------------------|
   | A     | @    | 185.199.108.153          |
   | A     | @    | 185.199.109.153          |
   | A     | @    | 185.199.110.153          |
   | A     | @    | 185.199.111.153          |
   | CNAME | www  | YOUR_USERNAME.github.io. |

4. Wait up to 24 hours for DNS to propagate.
5. Tick **Enforce HTTPS** in GitHub Pages settings.

---

## Admin login (demo mode)

When you click **Sign In → Continue with Google**, the demo simulates
signing in as the founder account (`stargamestudioofficial@gmail.com`).

This gives you:
- **+ New Post** button → publish official posts visible to everyone
- **⚙ Edit Site** button → opens the live CMS panel
- **+ Add Artist Feature** on Artists Week page
- Post reactions unlocked

To wire up real Google OAuth:
1. Create a project at https://console.cloud.google.com
2. Enable the Google Identity API
3. Replace the `loginGoogle()` function in `js/app.js` with the real OAuth flow

---

## Wiring up real email for the Contact form

The contact form currently shows a success state on submit.
To actually send emails, use one of these free services:

**Option 1 — EmailJS (no backend needed)**
1. Sign up at https://www.emailjs.com (free tier = 200 emails/month)
2. Create a service connected to stargamestudioofficial@gmail.com
3. In `js/app.js`, replace the `submitContact()` function body with:
```js
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  from_name:  document.getElementById('cfn').value,
  from_email: document.getElementById('cfe').value,
  subject:    document.getElementById('cfs').value,
  message:    document.getElementById('cfd').value,
}).then(() => {
  document.getElementById('cf-form').style.display = 'none';
  document.getElementById('cf-ok').style.display   = 'block';
});
```
4. Add this script tag to `index.html` before your `<script src="js/app.js">`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>emailjs.init('YOUR_PUBLIC_KEY');</script>
```

---

## Updating the site after it's live

Just edit the files and push/upload again — GitHub Pages rebuilds in ~30 seconds.

**Quickest way to edit:** GitHub has a built-in editor.
1. Go to your repo on github.com
2. Click any file (e.g. `index.html`)
3. Click the ✏️ pencil icon
4. Make your changes
5. Click **Commit changes** at the bottom

Your live site updates in under a minute.

---

## SG Assistant (Gemini AI)

The Gemini API key is already wired in `js/app.js`.
The assistant is locked to SG Studio topics via the system context in `SG_CONTEXT`.

---

*Stargame Studio — Dream it. Commission it. We build it. Est. June 2023.*
