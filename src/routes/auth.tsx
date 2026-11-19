import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Shell } from "@/components/sg/Shell";
import { RecaptchaWidget } from "@/components/sg/RecaptchaWidget";
import { STUDIO_ASSETS, pageHead } from "@/content/site";
import { useAuth } from "@/lib/auth";
import { useI18n } from "@/lib/i18n";
import { launchOfficialOAuth, type OAuthProvider } from "@/lib/oauth";

export const Route = createFileRoute("/auth")({
  head: () =>
    pageHead({
      metaTitle: "Sign Up or Log In | Stargame Studio",
      description:
        "Sign in with Google, Facebook, Discord, or email to access the Stargame Studio Community Feed and Inbox. Protected by Google reCAPTCHA.",
      path: "/auth",
    }),
  component: AuthPage,
});

function GoogleIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
      <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z" />
      <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z" />
      <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
    </svg>
  );
}

const inputCls =
  "w-full rounded-[6px] border border-[#3a3454] bg-[#120e21] px-3 py-2.5 text-[13px] text-foreground placeholder:text-[#8c84a8] focus:border-primary/80 focus:outline-none";

function AuthPage() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const { user, signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"signup" | "signin">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [birthYear, setBirthYear] = useState("2008");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [oauthNotice, setOauthNotice] = useState("");

  const handleRecaptcha = useCallback((token: string | null) => {
    setRecaptchaToken(token);
  }, []);

  function onProviderClick(provider: OAuthProvider) {
    setError("");
    setOauthNotice("");
    const launched = launchOfficialOAuth(provider);
    if (!launched) {
      const label = provider.charAt(0).toUpperCase() + provider.slice(1);
      setOauthNotice(
        `Official ${label} sign-in opens ${label}'s real account chooser once you add your ${label} OAuth Client ID (or VITE_SUPABASE_URL) on your published domain. Use Email & Password below in local/preview mode.`,
      );
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!recaptchaToken) {
      setError("Please complete the Google reCAPTCHA check before continuing.");
      return;
    }

    if (mode === "signin") {
      const res = signIn(email, password);
      if (!res.ok) return setError(res.error);
      navigate({ to: "/feed" });
      return;
    }

    const age = new Date().getFullYear() - (Number(birthYear) || 2026);
    if (age < 13) {
      setError("You must be at least 13 years old to create an account.");
      return;
    }

    const res = signUp({
      name: fullName.trim() || username.trim() || "Member",
      email,
      password,
      age,
      country: "Trinidad and Tobago",
      role: "Viewer",
      gender: "",
      isPublic: true,
    });
    if (!res.ok) return setError(res.error);
    navigate({ to: "/feed" });
  }

  if (user) {
    return (
      <Shell>
        <div className="mx-auto max-w-sm py-8 text-center">
          <img src={user.avatar} alt={user.name} className="mx-auto h-16 w-16 rounded-full border-2 border-primary object-cover" />
          <h1 className="sg-display mt-3 text-2xl text-primary">{user.name}</h1>
          <p className="mt-1 text-xs text-muted-foreground">@{user.handle} · {user.email}</p>
          <div className="mt-6 flex flex-col gap-2.5">
            <Link to="/feed" className="rounded-lg bg-primary py-2.5 text-sm font-bold text-primary-foreground">
              {t("nav.feed", "Feed")}
            </Link>
            <Link to="/inbox" className="rounded-lg border border-border py-2.5 text-sm font-semibold text-foreground hover:border-primary">
              {t("nav.inbox", "Inbox")}
            </Link>
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="mx-auto w-full max-w-[385px] py-2">
        <div className="rounded-xl border border-[#2f2947] bg-[#161128] px-7 py-8 shadow-xl">
          <div className="text-center">
            <img src={STUDIO_ASSETS.logo.src} alt="Stargame Studio" className="mx-auto h-14 w-14 rounded-full border border-primary/60 object-cover" />
            <h1 className="sg-display mt-3 text-2xl text-foreground">Stargame Studio</h1>
            <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground">
              {mode === "signup"
                ? "Sign up to share artwork, join the feed, and message creators."
                : "Log in to your Stargame Studio account."}
            </p>
          </div>

          <div className="mt-6 space-y-2.5">
            <button
              type="button"
              onClick={() => onProviderClick("google")}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-[13px] font-semibold text-[#1f1f1f] shadow-sm transition-opacity hover:opacity-95"
            >
              <GoogleIcon />
              <span>{mode === "signup" ? "Sign up with Google" : "Sign in with Google"}</span>
            </button>
            <button
              type="button"
              onClick={() => onProviderClick("facebook")}
              className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#1877F2] px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-95"
            >
              <FacebookIcon />
              <span>Continue with Facebook</span>
            </button>
            <button
              type="button"
              onClick={() => onProviderClick("discord")}
              className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#5865F2] px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-95"
            >
              <DiscordIcon />
              <span>Continue with Discord</span>
            </button>
          </div>

          {oauthNotice && (
            <p className="mt-3 rounded-lg border border-primary/35 bg-primary/10 p-3 text-[11px] leading-relaxed text-primary">
              {oauthNotice}
            </p>
          )}

          <div className="my-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#2f2947]" />
            <span className="text-[11px] font-semibold tracking-wider text-muted-foreground">OR</span>
            <div className="h-px flex-1 bg-[#2f2947]" />
          </div>

          <form onSubmit={onSubmit} className="space-y-2.5">
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" autoComplete="email" className={inputCls} />
            <input required type="password" minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete={mode === "signup" ? "new-password" : "current-password"} className={inputCls} />
            {mode === "signup" && (
              <>
                <input required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" autoComplete="name" className={inputCls} />
                <input required value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" autoComplete="username" className={inputCls} />
                <div className="pt-0.5">
                  <label className="mb-1 block text-[11px] text-muted-foreground">Birth year (13+ required)</label>
                  <select value={birthYear} onChange={(e) => setBirthYear(e.target.value)} className={inputCls}>
                    {Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - 13 - i).map((yr) => (
                      <option key={yr} value={yr}>{yr}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <div className="pt-1.5">
              <RecaptchaWidget onVerify={handleRecaptcha} />
            </div>

            {error && <p className="pt-1 text-center text-xs font-medium text-destructive">{error}</p>}

            <button type="submit" className="mt-2 w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
              {mode === "signup" ? "Sign up" : "Log in"}
            </button>
          </form>
        </div>

        <div className="mt-3 rounded-xl border border-[#2f2947] bg-[#161128] px-6 py-4 text-center text-[13px]">
          {mode === "signup" ? (
            <p className="text-muted-foreground">
              Have an account?{" "}
              <button type="button" onClick={() => { setMode("signin"); setError(""); }} className="font-bold text-primary hover:underline">Log in</button>
            </p>
          ) : (
            <p className="text-muted-foreground">
              Don&apos;t have an account?{" "}
              <button type="button" onClick={() => { setMode("signup"); setError(""); }} className="font-bold text-primary hover:underline">Sign up</button>
            </p>
          )}
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Just looking around?{" "}
          <Link to="/" className="text-foreground underline hover:text-primary">Continue as guest</Link>
        </p>
      </div>
    </Shell>
  );
}
