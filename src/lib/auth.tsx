import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { ADMIN_EMAIL, STUDIO_ASSETS } from "@/content/site";
import { trackEvent } from "@/lib/analytics";

export type MemberRole = "" | "Founder" | "Co-Founder" | "Viewer" | "SG Developer" | "SG Designer" | "SG Artist" | "Community Member";
export type GenderOption = "" | "Male" | "Female";

export type UserProfile = {
  id: string;
  name: string;
  handle: string;
  email: string;
  passwordHash: string;
  avatar: string;
  role: MemberRole;
  gender: GenderOption;
  country: string;
  age: number;
  bio: string;
  isPublic: boolean;
  isAdmin?: boolean;
  isOfficial?: boolean;
  banned?: boolean;
  provider: "email" | "google";
  createdAt: string;
};

export type FeedComment = {
  id: string;
  authorId: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  authorOfficial?: boolean;
  text: string;
  createdAt: string;
};

export type FeedPost = {
  id: string;
  authorId: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  authorRole?: MemberRole;
  authorOfficial?: boolean;
  pinned?: boolean;
  caption: string;
  tag: "Artwork" | "Game Dev" | "UGC & Clothing" | "Commission" | "Community";
  mediaType?: "image" | "video";
  mediaUrl?: string;
  reactions: { heart: string[]; star: string[]; fire: string[] };
  comments: FeedComment[];
  shares: number;
  createdAt: string;
};

export type DirectMessage = {
  id: string;
  fromId: string;
  toId: string;
  text: string;
  createdAt: string;
  read: boolean;
};

export type StudioUpdate = {
  id: string;
  version: string;
  title: string;
  body: string;
  createdAt: string;
};

export type SiteBanner = {
  active: boolean;
  message: string;
  level: "info" | "launch" | "alert";
  updatedAt: string;
};

const K_USERS = "sg_users_v3";
const K_SESSION = "sg_session_v3";
const K_POSTS = "sg_feed_posts_v3";
const K_FOLLOWS = "sg_follows_v3";
const K_DMS = "sg_dms_v3";
const K_UPDATES = "sg_updates_v3";
const K_BANNER = "sg_site_banner_v3";

function hashLite(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return `sg_${(h >>> 0).toString(16)}`;
}

const SEED_USERS: UserProfile[] = [
  {
    id: "sg-official",
    name: "Stargame Studio",
    handle: "stargamestudio",
    email: ADMIN_EMAIL,
    passwordHash: hashLite("SGAdmin2026!"),
    avatar: STUDIO_ASSETS.logo.src,
    role: "Founder",
    gender: "",
    country: "Trinidad and Tobago & Netherlands",
    age: 20,
    bio: "Official Stargame Studio (SG) admin account. Managed by Lionel (TT), Damian (NL), and Charlie (PL). 100% human-made art & Roblox UGCs.",
    isPublic: true,
    isAdmin: true,
    isOfficial: true,
    banned: false,
    provider: "email",
    createdAt: "2026-08-01T12:00:00Z",
  },
  {
    id: "sg-ashy",
    name: "Ashy_moonwolf",
    handle: "ashy_moonwolf",
    email: "ashy@stargamestudio.local",
    passwordHash: hashLite("seed-only"),
    avatar: STUDIO_ASSETS.communityIcon.src,
    role: "SG Artist",
    gender: "",
    country: "Worldwide",
    age: 19,
    bio: "Illustrator & icon artist at Stargame Studio. Creator of the official SG mascot, Secure Labs badge & Chibi Community icon.",
    isPublic: true,
    provider: "email",
    createdAt: "2026-08-15T12:00:00Z",
  },
  {
    id: "sg-nisha",
    name: "Nisha",
    handle: "nisha_scythe",
    email: "nisha@stargamestudio.local",
    passwordHash: hashLite("seed-only"),
    avatar: STUDIO_ASSETS.outbreakChar.src,
    role: "SG Designer",
    gender: "",
    country: "Worldwide",
    age: 18,
    bio: "Character artist & thumbnail illustrator for The Outbreak.",
    isPublic: true,
    provider: "email",
    createdAt: "2026-09-01T12:00:00Z",
  },
];

const SEED_POSTS: FeedPost[] = [
  {
    id: "post-1",
    authorId: "sg-official",
    authorName: "Stargame Studio",
    authorHandle: "stargamestudio",
    authorAvatar: STUDIO_ASSETS.logo.src,
    authorRole: "Founder",
    authorOfficial: true,
    pinned: true,
    caption:
      "Meet Kilo (Star Keeper) from StarCity! Keeps stars and teleports with his crescent-moon necklace. Check out our new Artwork tab & Stargame Studio UGCs on Roblox!",
    tag: "Artwork",
    mediaType: "image",
    mediaUrl: STUDIO_ASSETS.charKilo.src,
    reactions: { heart: ["sg-ashy", "sg-nisha"], star: ["sg-ashy"], fire: [] },
    comments: [
      {
        id: "c-1",
        authorId: "sg-ashy",
        authorName: "Ashy_moonwolf",
        authorHandle: "ashy_moonwolf",
        authorAvatar: STUDIO_ASSETS.communityIcon.src,
        text: "StarCity character sheets are looking so clean together!",
        createdAt: "2026-11-17T18:20:00Z",
      },
    ],
    shares: 14,
    createdAt: "2026-11-17T16:00:00Z",
  },
  {
    id: "post-2",
    authorId: "sg-nisha",
    authorName: "Nisha",
    authorHandle: "nisha_scythe",
    authorAvatar: STUDIO_ASSETS.outbreakChar.src,
    authorRole: "SG Designer",
    caption:
      "Fresh widescreen thumbnail for The Outbreak! No AI shortcuts—hand-shaded lighting and atmosphere from start to finish.",
    tag: "Game Dev",
    mediaType: "image",
    mediaUrl: STUDIO_ASSETS.outbreakThumb.src,
    reactions: { heart: ["sg-official"], star: ["sg-official", "sg-ashy"], fire: ["sg-official"] },
    comments: [],
    shares: 9,
    createdAt: "2026-11-16T21:10:00Z",
  },
];

const SEED_UPDATES: StudioUpdate[] = [
  {
    id: "upd-3",
    version: "v3.0",
    title: "Artwork Gallery, Official Inbox & Admin Controls Live",
    body: "Explore 30+ studio artworks filtered by Artist & Project in the new Artwork tab, message members or Official Stargame Studio in the new Inbox, browse our Roblox UGCs community, and stay tuned for Discord bot integration next!",
    createdAt: "2026-11-18T14:00:00Z",
  },
  {
    id: "upd-2",
    version: "v2.0",
    title: "Community Feed, Public Profiles & Multi-Engine SEO",
    body: "Launched the Instagram/Threads-style Community Feed, optional 13+ accounts with anti-bot CAPTCHA, Google Analytics 4, and full SEO for Google, Bing/Edge, DuckDuckGo, Brave, and AI Search.",
    createdAt: "2026-11-18T12:30:00Z",
  },
  {
    id: "upd-1",
    version: "v1.0",
    title: "12-Language Translations, 3:1 Hero Banner & Human Copy",
    body: "Replaced the broken translation widget with instant 12-language support (including Arabic RTL), fixed the 3:1 hero banner across all screens, and updated all copy to reflect our real studio.",
    createdAt: "2026-11-18T10:00:00Z",
  },
];

const SEED_BANNER: SiteBanner = {
  active: true,
  message: "Stargame Studio UGCs are live on Roblox! Commissions open 24/7 from US$5–$10 (400–800 Robux).",
  level: "launch",
  updatedAt: "2026-11-18T14:00:00Z",
};

function safeRead<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function safeWrite(key: string, val: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(val));
  } catch {
    // Ignore sandbox storage limits
  }
}

type AuthContextValue = {
  user: UserProfile | null;
  users: UserProfile[];
  posts: FeedPost[];
  following: string[];
  dms: DirectMessage[];
  updates: StudioUpdate[];
  siteBanner: SiteBanner;
  signUp: (input: {
    name: string;
    email: string;
    password: string;
    age: number;
    country: string;
    role: MemberRole;
    gender: GenderOption;
    isPublic: boolean;
    provider?: "email" | "google";
  }) => { ok: true } | { ok: false; error: string };
  signIn: (email: string, password: string) => { ok: true } | { ok: false; error: string };
  signInWithGoogle: (input: { name: string; email: string; age: number }) => { ok: true } | { ok: false; error: string };
  signOut: () => void;
  updateProfile: (
    patch: Partial<Pick<UserProfile, "name" | "handle" | "email" | "avatar" | "role" | "gender" | "country" | "age" | "bio" | "isPublic">> & { newPassword?: string },
  ) => { ok: true } | { ok: false; error: string };
  createPost: (input: { caption: string; tag: FeedPost["tag"]; mediaType?: "image" | "video"; mediaUrl?: string }) => void;
  deletePost: (postId: string) => void;
  togglePinPost: (postId: string) => void;
  toggleReaction: (postId: string, kind: "heart" | "star" | "fire") => void;
  addComment: (postId: string, text: string) => void;
  incrementShare: (postId: string) => void;
  toggleFollow: (targetUserId: string) => void;
  toggleBanUser: (targetUserId: string) => void;
  sendMessage: (toId: string, text: string) => void;
  publishUpdate: (input: { version: string; title: string; body: string }) => void;
  updateSiteBanner: (banner: SiteBanner) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<UserProfile[]>(SEED_USERS);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [posts, setPosts] = useState<FeedPost[]>(SEED_POSTS);
  const [followsMap, setFollowsMap] = useState<Record<string, string[]>>({});
  const [dms, setDms] = useState<DirectMessage[]>([]);
  const [updates, setUpdates] = useState<StudioUpdate[]>(SEED_UPDATES);
  const [siteBanner, setSiteBanner] = useState<SiteBanner>(SEED_BANNER);

  useEffect(() => {
    const storedUsers = safeRead<UserProfile[]>(K_USERS, SEED_USERS);
    const merged = [...SEED_USERS];
    for (const u of storedUsers) {
      const idx = merged.findIndex((m) => m.id === u.id);
      if (idx >= 0) merged[idx] = { ...merged[idx], ...u };
      else merged.push(u);
    }
    setUsers(merged);
    setSessionId(safeRead<string | null>(K_SESSION, null));
    setPosts(safeRead<FeedPost[]>(K_POSTS, SEED_POSTS));
    setFollowsMap(safeRead<Record<string, string[]>>(K_FOLLOWS, {}));
    setDms(safeRead<DirectMessage[]>(K_DMS, []));
    setUpdates(safeRead<StudioUpdate[]>(K_UPDATES, SEED_UPDATES));
    setSiteBanner(safeRead<SiteBanner>(K_BANNER, SEED_BANNER));
  }, []);

  const user = useMemo(() => {
    const found = users.find((u) => u.id === sessionId) ?? null;
    if (found?.banned) return null;
    return found;
  }, [users, sessionId]);

  const following = useMemo(() => (user ? followsMap[user.id] ?? ["sg-official"] : []), [user, followsMap]);

  const persistUsers = (next: UserProfile[]) => { setUsers(next); safeWrite(K_USERS, next); };
  const persistPosts = (next: FeedPost[]) => { setPosts(next); safeWrite(K_POSTS, next); };

  const signUp: AuthContextValue["signUp"] = (input) => {
    const email = input.email.trim().toLowerCase();
    if (!email || !email.includes("@")) return { ok: false, error: "Please enter a valid email address." };
    if (input.age < 13 || input.age > 120) return { ok: false, error: "You must be at least 13 years old to create an account." };
    if (input.password.length < 6) return { ok: false, error: "Password must be at least 6 characters." };
    const existing = users.find((u) => u.email.toLowerCase() === email);
    if (existing) {
      if (existing.banned) return { ok: false, error: "This account has been suspended by Stargame Studio." };
      return { ok: false, error: "An account with that email already exists. Try signing in instead." };
    }
    const isAdmin = email === ADMIN_EMAIL;
    const baseHandle = input.name.toLowerCase().replace(/[^a-z0-9_]/g, "").slice(0, 18) || "sgmember";
    const handle = users.some((u) => u.handle === baseHandle) ? `${baseHandle}${Math.floor(10 + Math.random() * 89)}` : baseHandle;
    const created: UserProfile = {
      id: `u-${Date.now()}`,
      name: input.name.trim(),
      handle,
      email,
      passwordHash: hashLite(input.password),
      avatar: STUDIO_ASSETS.logo.src,
      role: isAdmin ? "Founder" : input.role,
      gender: input.gender,
      country: input.country.trim() || "Worldwide",
      age: Math.floor(input.age),
      bio: "",
      isPublic: input.isPublic,
      isAdmin,
      isOfficial: isAdmin,
      banned: false,
      provider: input.provider ?? "email",
      createdAt: new Date().toISOString(),
    };
    persistUsers([...users, created]);
    setSessionId(created.id);
    safeWrite(K_SESSION, created.id);
    // Send automatic official welcome DM from Stargame Studio
    const welcome: DirectMessage = {
      id: `dm-welcome-${Date.now()}`,
      fromId: "sg-official",
      toId: created.id,
      text: `Welcome to Stargame Studio, ${created.name}! This is our official verified inbox. Reply anytime if you have a question about commissions, UGCs, or joining the team.`,
      createdAt: new Date().toISOString(),
      read: false,
    };
    const nextDms = [...dms, welcome];
    setDms(nextDms);
    safeWrite(K_DMS, nextDms);
    trackEvent("sign_up", { method: created.provider });
    return { ok: true };
  };

  const signIn: AuthContextValue["signIn"] = (emailRaw, password) => {
    const email = emailRaw.trim().toLowerCase();
    const found = users.find((u) => u.email.toLowerCase() === email);
    if (!found) return { ok: false, error: "Invalid email or password." };
    if (found.banned) return { ok: false, error: "This account has been banned by Stargame Studio administration." };
    // Allow official admin login with either stored password or any 6+ char password in preview demo
    const valid = found.passwordHash === hashLite(password) || (email === ADMIN_EMAIL && password.length >= 6);
    if (!valid) return { ok: false, error: "Invalid email or password." };
    setSessionId(found.id);
    safeWrite(K_SESSION, found.id);
    trackEvent("login", { method: "email" });
    return { ok: true };
  };

  const signInWithGoogle: AuthContextValue["signInWithGoogle"] = ({ name, email: rawEmail, age }) => {
    const email = rawEmail.trim().toLowerCase();
    if (!email || !email.includes("@")) return { ok: false, error: "Enter a valid Gmail address." };
    if (age < 13) return { ok: false, error: "You must be 13 or older to join." };
    const existing = users.find((u) => u.email.toLowerCase() === email);
    if (existing) {
      if (existing.banned) return { ok: false, error: "This account has been banned by Stargame Studio." };
      setSessionId(existing.id);
      safeWrite(K_SESSION, existing.id);
      trackEvent("login", { method: "google" });
      return { ok: true };
    }
    return signUp({
      name: name.trim() || email.split("@")[0],
      email,
      password: `google-${Date.now()}`,
      age,
      country: "Trinidad and Tobago",
      role: "Viewer",
      gender: "",
      isPublic: true,
      provider: "google",
    });
  };

  const signOut = () => { setSessionId(null); safeWrite(K_SESSION, null); };

  const updateProfile: AuthContextValue["updateProfile"] = (patch) => {
    if (!user) return { ok: false, error: "Not signed in." };
    if (patch.age !== undefined && (patch.age < 13 || patch.age > 120)) return { ok: false, error: "Age must be 13 or older." };
    if (patch.newPassword && patch.newPassword.length < 6) return { ok: false, error: "New password must be at least 6 characters." };
    const updated: UserProfile = {
      ...user,
      name: patch.name !== undefined ? patch.name.trim() || user.name : user.name,
      handle: patch.handle !== undefined ? patch.handle.toLowerCase().replace(/[^a-z0-9_]/g, "") || user.handle : user.handle,
      email: patch.email !== undefined ? patch.email.trim().toLowerCase() || user.email : user.email,
      avatar: patch.avatar !== undefined ? patch.avatar : user.avatar,
      role: patch.role !== undefined ? patch.role : user.role,
      gender: patch.gender !== undefined ? patch.gender : user.gender,
      country: patch.country !== undefined ? patch.country.trim() : user.country,
      age: patch.age !== undefined ? Math.floor(patch.age) : user.age,
      bio: patch.bio !== undefined ? patch.bio : user.bio,
      isPublic: patch.isPublic !== undefined ? patch.isPublic : user.isPublic,
      passwordHash: patch.newPassword ? hashLite(patch.newPassword) : user.passwordHash,
    };
    persistUsers(users.map((u) => (u.id === user.id ? updated : u)));
    persistPosts(posts.map((p) => (p.authorId === user.id ? { ...p, authorName: updated.name, authorHandle: updated.handle, authorAvatar: updated.avatar, authorRole: updated.role } : p)));
    return { ok: true };
  };

  const createPost: AuthContextValue["createPost"] = ({ caption, tag, mediaType, mediaUrl }) => {
    if (!user || user.banned) return;
    const next: FeedPost = {
      id: `post-${Date.now()}`,
      authorId: user.id,
      authorName: user.name,
      authorHandle: user.handle,
      authorAvatar: user.avatar,
      authorRole: user.role,
      authorOfficial: user.isOfficial,
      caption: caption.trim(),
      tag,
      mediaType,
      mediaUrl,
      reactions: { heart: [], star: [], fire: [] },
      comments: [],
      shares: 0,
      createdAt: new Date().toISOString(),
    };
    persistPosts([next, ...posts]);
    trackEvent("create_post", { tag });
  };

  const deletePost = (postId: string) => {
    if (!user) return;
    const target = posts.find((p) => p.id === postId);
    if (!target) return;
    if (!user.isAdmin && target.authorId !== user.id) return;
    persistPosts(posts.filter((p) => p.id !== postId));
  };

  const togglePinPost = (postId: string) => {
    if (!user?.isAdmin) return;
    persistPosts(posts.map((p) => (p.id === postId ? { ...p, pinned: !p.pinned } : p)));
  };

  const toggleReaction: AuthContextValue["toggleReaction"] = (postId, kind) => {
    if (!user) return;
    persistPosts(
      posts.map((p) => {
        if (p.id !== postId) return p;
        const list = p.reactions[kind];
        return { ...p, reactions: { ...p.reactions, [kind]: list.includes(user.id) ? list.filter((id) => id !== user.id) : [...list, user.id] } };
      }),
    );
  };

  const addComment: AuthContextValue["addComment"] = (postId, text) => {
    if (!user || !text.trim()) return;
    const c: FeedComment = {
      id: `c-${Date.now()}`,
      authorId: user.id,
      authorName: user.name,
      authorHandle: user.handle,
      authorAvatar: user.avatar,
      authorOfficial: user.isOfficial,
      text: text.trim(),
      createdAt: new Date().toISOString(),
    };
    persistPosts(posts.map((p) => (p.id === postId ? { ...p, comments: [...p.comments, c] } : p)));
  };

  const incrementShare = (postId: string) => {
    persistPosts(posts.map((p) => (p.id === postId ? { ...p, shares: p.shares + 1 } : p)));
  };

  const toggleFollow = (targetUserId: string) => {
    if (!user || targetUserId === user.id) return;
    const cur = followsMap[user.id] ?? ["sg-official"];
    const nextMap = { ...followsMap, [user.id]: cur.includes(targetUserId) ? cur.filter((id) => id !== targetUserId) : [...cur, targetUserId] };
    setFollowsMap(nextMap);
    safeWrite(K_FOLLOWS, nextMap);
  };

  const toggleBanUser = (targetUserId: string) => {
    if (!user?.isAdmin || targetUserId === user.id) return;
    persistUsers(users.map((u) => (u.id === targetUserId && !u.isAdmin ? { ...u, banned: !u.banned } : u)));
  };

  const sendMessage = (toId: string, text: string) => {
    if (!user || !text.trim()) return;
    const msg: DirectMessage = {
      id: `dm-${Date.now()}`,
      fromId: user.id,
      toId,
      text: text.trim(),
      createdAt: new Date().toISOString(),
      read: false,
    };
    const next = [...dms, msg];
    setDms(next);
    safeWrite(K_DMS, next);
  };

  const publishUpdate = (input: { version: string; title: string; body: string }) => {
    if (!user?.isAdmin) return;
    const upd: StudioUpdate = {
      id: `upd-${Date.now()}`,
      version: input.version.trim() || "Update",
      title: input.title.trim(),
      body: input.body.trim(),
      createdAt: new Date().toISOString(),
    };
    const next = [upd, ...updates];
    setUpdates(next);
    safeWrite(K_UPDATES, next);
  };

  const updateSiteBanner = (banner: SiteBanner) => {
    if (!user?.isAdmin) return;
    const next = { ...banner, updatedAt: new Date().toISOString() };
    setSiteBanner(next);
    safeWrite(K_BANNER, next);
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      users,
      posts,
      following,
      dms,
      updates,
      siteBanner,
      signUp,
      signIn,
      signInWithGoogle,
      signOut,
      updateProfile,
      createPost,
      deletePost,
      togglePinPost,
      toggleReaction,
      addComment,
      incrementShare,
      toggleFollow,
      toggleBanUser,
      sendMessage,
      publishUpdate,
      updateSiteBanner,
    }),
    [user, users, posts, following, dms, updates, siteBanner],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
