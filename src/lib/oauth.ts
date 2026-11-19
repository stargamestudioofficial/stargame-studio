// Official OAuth launcher for Google, Facebook, and Discord.
// Supports either:
//   1) Supabase / Lovable Cloud Auth (set VITE_SUPABASE_URL)
//   2) Direct official provider OAuth Client IDs (VITE_GOOGLE_CLIENT_ID, VITE_FACEBOOK_APP_ID, VITE_DISCORD_CLIENT_ID)
// Never shows a fake/custom OAuth credential prompt.

export type OAuthProvider = "google" | "facebook" | "discord";

const env = (typeof import.meta !== "undefined" ? (import.meta as any).env : {}) || {};
const SUPABASE_URL: string = env.VITE_SUPABASE_URL || "";
const GOOGLE_CLIENT_ID: string = env.VITE_GOOGLE_CLIENT_ID || "";
const FACEBOOK_APP_ID: string = env.VITE_FACEBOOK_APP_ID || "";
const DISCORD_CLIENT_ID: string = env.VITE_DISCORD_CLIENT_ID || "";

export function isProviderConfigured(provider: OAuthProvider): boolean {
  if (SUPABASE_URL) return true;
  if (provider === "google") return Boolean(GOOGLE_CLIENT_ID);
  if (provider === "facebook") return Boolean(FACEBOOK_APP_ID);
  if (provider === "discord") return Boolean(DISCORD_CLIENT_ID);
  return false;
}

export function launchOfficialOAuth(provider: OAuthProvider): boolean {
  if (typeof window === "undefined") return false;
  const redirectUri = encodeURIComponent(`${window.location.origin}/auth`);

  if (SUPABASE_URL) {
    const base = SUPABASE_URL.replace(/\/+$/, "");
    const next = encodeURIComponent(`${window.location.origin}/feed`);
    window.location.href = `${base}/auth/v1/authorize?provider=${provider}&redirect_to=${next}`;
    return true;
  }

  if (provider === "google" && GOOGLE_CLIENT_ID) {
    const scope = encodeURIComponent("openid email profile");
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(GOOGLE_CLIENT_ID)}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}&prompt=select_account`;
    return true;
  }

  if (provider === "facebook" && FACEBOOK_APP_ID) {
    window.location.href = `https://www.facebook.com/v20.0/dialog/oauth?client_id=${encodeURIComponent(FACEBOOK_APP_ID)}&redirect_uri=${redirectUri}&scope=email,public_profile`;
    return true;
  }

  if (provider === "discord" && DISCORD_CLIENT_ID) {
    window.location.href = `https://discord.com/oauth2/authorize?client_id=${encodeURIComponent(DISCORD_CLIENT_ID)}&redirect_uri=${redirectUri}&response_type=token&scope=identify%20email`;
    return true;
  }

  return false;
}
