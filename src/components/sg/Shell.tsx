import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  CheckCircle2,
  Gamepad2,
  Globe,
  LogIn,
  Medal,
  Megaphone,
  Menu,
  Monitor,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { LanguagePicker } from "./LanguagePicker";
import { NAV, STUDIO, STUDIO_ASSETS, artFor, type Page, type Section } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";
import { trackEvent } from "@/lib/analytics";

const SECTION_ICONS: Record<NonNullable<Section["icon"]>, typeof Sparkles> = {
  palette: Palette,
  medal: Medal,
  gamepad: Gamepad2,
  monitor: Monitor,
  users: Users,
  shield: ShieldCheck,
  sparkles: Sparkles,
  check: CheckCircle2,
  globe: Globe,
  rocket: Rocket,
};

export function SiteAnnouncementBar() {
  const { siteBanner } = useAuth();
  const [dismissedAt, setDismissedAt] = useState<string>("");

  if (!siteBanner.active || !siteBanner.message.trim() || dismissedAt === siteBanner.updatedAt) {
    return null;
  }

  const tone =
    siteBanner.level === "alert"
      ? "border-destructive/50 bg-destructive/20 text-foreground"
      : siteBanner.level === "info"
        ? "border-accent/50 bg-secondary/80 text-foreground"
        : "border-primary/50 bg-primary/15 text-foreground";

  return (
    <div className={`sg-theme border-b px-4 py-2 text-xs sm:text-sm ${tone}`} role="region" aria-label="Studio announcement">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={STUDIO_ASSETS.logo.src}
            alt="Official Stargame Studio"
            className="h-5 w-5 shrink-0 rounded-full border border-primary object-cover"
          />
          <Megaphone className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          <p className="truncate font-medium sm:whitespace-normal">{siteBanner.message}</p>
        </div>
        <button
          type="button"
          onClick={() => setDismissedAt(siteBanner.updatedAt)}
          className="shrink-0 rounded p-1 text-muted-foreground hover:text-foreground"
          aria-label="Dismiss announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function SiteFooterNav() {
  const { t } = useI18n();

  return (
    <footer className="sg-theme border-t border-border bg-background px-5 py-10 text-foreground sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center gap-3">
          <img
            src={STUDIO_ASSETS.logo.src}
            alt={STUDIO_ASSETS.logo.alt}
            className="h-10 w-10 rounded-full border border-primary/40 object-cover"
            loading="lazy"
          />
          <div>
            <p className="sg-display text-xl text-primary">{STUDIO.name}</p>
            <p className="text-xs text-muted-foreground">Managed in Trinidad & Tobago and the Netherlands · Worldwide Clients</p>
          </div>
        </div>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">{STUDIO.tagline}</p>

        <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
          <Link to="/" className="hover:text-primary">
            {t("nav.home")}
          </Link>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-primary">
              {t(n.labelKey, n.label)}
            </Link>
          ))}
        </nav>

        <div className="mt-5 flex flex-wrap gap-2" aria-label="Official Social Links">
          {STUDIO.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("social_click", { platform: s.name })}
              className="rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {s.name} <span className="text-muted-foreground">· {s.handle}</span>
            </a>
          ))}
        </div>

        <p className="mt-5 text-xs text-muted-foreground">
          Email:{" "}
          <a href={`mailto:${STUDIO.email}`} className="text-primary hover:underline">
            {STUDIO.email}
          </a>{" "}
          · Founder: Lionel (TT) · Co-Founders: Damian (NL) & Charlie (PL)
        </p>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();
  const { user } = useAuth();
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  return (
    <div
      className="sg-theme min-h-screen bg-background bg-cover bg-center text-foreground"
      style={{
        backgroundImage: `linear-gradient(color-mix(in oklab, var(--background) 84%, transparent), color-mix(in oklab, var(--background) 94%, transparent)), url(${artFor(pathname + "bg")})`,
      }}
    >
      <SiteAnnouncementBar />
      <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2.5 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
            <img
              src={STUDIO_ASSETS.logo.src}
              alt={STUDIO_ASSETS.logo.alt}
              className="h-9 w-9 rounded-full border border-primary/50 object-cover"
            />
            <span className="sg-display text-base text-primary sm:text-lg">{STUDIO.name}</span>
          </Link>

          <nav className="hidden items-center gap-x-3 text-xs xl:flex" aria-label="Main">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="whitespace-nowrap transition-colors hover:text-primary"
                activeProps={{ className: "font-semibold text-primary" }}
              >
                {t(n.labelKey, n.label)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguagePicker />
            {user ? (
              <Link
                to="/profile"
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-primary/50 bg-card px-2.5 py-1 text-xs font-semibold text-foreground hover:border-primary"
              >
                <img src={user.avatar} alt={user.name} className="h-6 w-6 rounded-full object-cover" />
                <span className="hidden max-w-[90px] truncate sm:inline">{user.name}</span>
                {user.isOfficial && (
                  <img
                    src={STUDIO_ASSETS.logo.src}
                    alt="Official"
                    className="h-3.5 w-3.5 rounded-full border border-primary object-cover"
                  />
                )}
              </Link>
            ) : (
              <Link
                to="/auth"
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-primary/60 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <LogIn className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Sign In</span>
              </Link>
            )}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center rounded-md border border-border bg-card p-2 text-foreground hover:border-primary xl:hidden"
              aria-label={menuOpen ? t("nav.closeMenu") : t("nav.menu")}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-border bg-background/95 px-4 py-3 backdrop-blur xl:hidden"
            aria-label="Mobile & Tablet"
          >
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm hover:bg-card hover:text-primary"
              >
                {t("nav.home")}
              </Link>
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm hover:bg-card hover:text-primary"
                  activeProps={{ className: "bg-card font-semibold text-primary" }}
                >
                  {t(n.labelKey, n.label)}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-5xl px-3 py-8 sm:px-6 md:py-12">
        <div className="rounded-2xl border border-border bg-background/85 p-4 shadow-2xl backdrop-blur sm:p-7 md:p-10">
          {children}
        </div>
      </main>
      <SiteFooterNav />
    </div>
  );
}

export function PageBody({ page }: { page: Page }) {
  const { t } = useI18n();

  return (
    <article>
      <div className="relative -mx-4 -mt-4 mb-7 overflow-hidden rounded-t-2xl border-b border-border sm:-mx-7 sm:-mt-7 md:-mx-10 md:-mt-10">
        <div className="relative aspect-[3/1] min-h-[160px] w-full bg-card">
          <img
            src={page.banner.src}
            alt={page.banner.alt}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {t("home.heroBadge")}
            </span>
            <h1 className="sg-display mt-2 text-2xl leading-tight text-foreground drop-shadow sm:text-4xl md:text-5xl">
              {page.title}
            </h1>
            {page.startingPrice && (
              <p className="mt-1.5 text-sm font-medium text-primary">{page.startingPrice}</p>
            )}
          </div>
          <span className="absolute right-3 top-3 rounded-full bg-background/75 px-2.5 py-0.5 text-[11px] text-muted-foreground backdrop-blur">
            {t("gallery.artistCredit")} {page.banner.artist}
          </span>
        </div>
      </div>

      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{page.intro}</p>

      {page.gallery && page.gallery.length > 0 && (
        <section className="mt-8" aria-label={t("gallery.title")}>
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-primary">
              {t("gallery.title")}
            </h2>
            <Link to="/artwork" className="text-xs font-semibold text-primary hover:underline">
              View all artwork →
            </Link>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {page.gallery.map((art) => (
              <figure
                key={art.src}
                className="group overflow-hidden rounded-xl border border-border bg-card/90"
              >
                <div className="aspect-square w-full overflow-hidden bg-muted">
                  <img
                    src={art.src}
                    alt={art.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-3 py-2">
                  <p className="truncate text-xs font-semibold text-foreground">{art.title}</p>
                  <p className="truncate text-[11px] text-muted-foreground">
                    {t("gallery.artistCredit")} {art.artist}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {page.sections.map((s) => {
        const Icon = s.icon ? SECTION_ICONS[s.icon] : Sparkles;
        return (
          <section key={s.h} className="mt-10">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <h2 className="text-xl font-bold sm:text-2xl">{s.h}</h2>
            </div>
            {s.p.map((text) => (
              <p key={text} className="mt-3 leading-relaxed text-muted-foreground">
                {text}
              </p>
            ))}
            {s.list && (
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {s.list.map((li) => (
                  <li
                    key={li}
                    className="flex items-start gap-2.5 rounded-lg border border-primary/25 bg-card/85 px-4 py-3 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}

      <div className="mt-12 rounded-xl border border-primary/30 bg-card/90 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <img
            src={STUDIO_ASSETS.logo.src}
            alt={STUDIO_ASSETS.logo.alt}
            className="h-10 w-10 rounded-full border border-primary/40 object-cover"
            loading="lazy"
          />
          <div>
            <p className="font-bold text-foreground">{t("cta.readyTitle")}</p>
            <p className="text-sm text-muted-foreground">{t("cta.readyBody")}</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <a
            href={STUDIO.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary/10"
          >
            {t("cta.joinDiscord")}
          </a>
          <a
            href={STUDIO.whatsappCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-emerald-400/70 px-4 py-2 text-sm font-bold text-emerald-300 transition-colors hover:bg-emerald-400/10"
          >
            WhatsApp Community
          </a>
          <a
            href={STUDIO.robloxUgcUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-purple-400/60 px-4 py-2 text-sm font-bold text-purple-200 transition-colors hover:bg-purple-400/10"
          >
            Roblox UGCs
          </a>
          <Link
            to="/commission"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("cta.requestCommission")}
          </Link>
        </div>
      </div>
    </article>
  );
}
