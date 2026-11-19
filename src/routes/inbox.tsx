import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Ban, Bell, Lock, Megaphone, MessageSquare, Send, ShieldAlert, Sparkles } from "lucide-react";
import { Shell } from "@/components/sg/Shell";
import { STUDIO_ASSETS, breadcrumbLd, pageHead } from "@/content/site";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/inbox")({
  head: () =>
    pageHead({
      metaTitle: "Inbox, Direct Messages & Official Updates | Stargame Studio",
      description:
        "Message Stargame Studio members or our official verified studio team, and read every official Stargame Studio update announcement.",
      path: "/inbox",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Inbox", path: "/inbox" },
        ]),
      ],
    }),
  component: InboxPage,
});

export function OfficialLogoBadge({ showLabel = false }: { showLabel?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1 align-middle" title="Official Verified Stargame Studio">
      <img
        src={STUDIO_ASSETS.logo.src}
        alt="Official Stargame Studio Verified"
        className="h-4 w-4 rounded-full border border-primary object-cover"
      />
      {showLabel && (
        <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
          Official
        </span>
      )}
    </span>
  );
}

function InboxPage() {
  const { user, users, dms, updates, siteBanner, sendMessage, publishUpdate, updateSiteBanner, toggleBanUser } =
    useAuth();
  const [tab, setTab] = useState<"messages" | "updates" | "admin">("messages");
  const [activePeerId, setActivePeerId] = useState<string>("sg-official");
  const [msgText, setMsgText] = useState("");

  // Admin states
  const [updVer, setUpdVer] = useState("v3.1");
  const [updTitle, setUpdTitle] = useState("");
  const [updBody, setUpdBody] = useState("");
  const [bannerText, setBannerText] = useState(siteBanner.message);
  const [bannerLevel, setBannerLevel] = useState<"info" | "launch" | "alert">(siteBanner.level);
  const [bannerActive, setBannerActive] = useState(siteBanner.active);
  const [adminNotice, setAdminNotice] = useState("");

  if (!user) {
    return (
      <Shell>
        <div className="mx-auto max-w-xl py-8 text-center">
          <img
            src={STUDIO_ASSETS.logo.src}
            alt="Stargame Studio"
            className="mx-auto h-16 w-16 rounded-full border-2 border-primary object-cover"
          />
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Lock className="h-3.5 w-3.5" /> Sign In to Open Your Inbox
          </span>
          <h1 className="sg-display mt-3 text-3xl text-foreground">Messages & Studio Updates</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Direct message community members or our official verified Stargame Studio team, and get every studio release in your Updates Inbox.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/auth" className="rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground">
              Sign In / Create Account
            </Link>
            <Link to="/artwork" className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground">
              Browse Artwork as Guest
            </Link>
          </div>
        </div>
      </Shell>
    );
  }

  const peers = users.filter((u) => u.id !== user.id && !u.banned);
  const activePeer = peers.find((p) => p.id === activePeerId) ?? peers[0] ?? null;

  const thread = activePeer
    ? dms.filter(
        (m) =>
          (m.fromId === user.id && m.toId === activePeer.id) ||
          (m.fromId === activePeer.id && m.toId === user.id),
      )
    : [];

  return (
    <Shell>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img src={STUDIO_ASSETS.logo.src} alt="SG" className="h-10 w-10 rounded-full border border-primary/50 object-cover" />
          <div>
            <h1 className="sg-display text-2xl text-primary sm:text-3xl">Inbox</h1>
            <p className="text-xs text-muted-foreground">Direct messages & official verified updates</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 rounded-full border border-border bg-card p-1 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setTab("messages")}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 ${
              tab === "messages" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            <MessageSquare className="h-3.5 w-3.5" /> Messages
          </button>
          <button
            type="button"
            onClick={() => setTab("updates")}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 ${
              tab === "updates" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            <Bell className="h-3.5 w-3.5" /> Updates ({updates.length})
          </button>
          {user.isAdmin && (
            <button
              type="button"
              onClick={() => setTab("admin")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 ${
                tab === "admin" ? "bg-primary text-primary-foreground" : "text-primary"
              }`}
            >
              <ShieldAlert className="h-3.5 w-3.5" /> Admin Panel
            </button>
          )}
        </div>
      </div>

      {/* TAB 1: DIRECT MESSAGES (responsive split for Phone, Samsung Tablet & PC) */}
      {tab === "messages" && (
        <div className="mt-6 grid gap-4 md:grid-cols-12">
          <aside className="rounded-xl border border-border bg-card/85 p-3 md:col-span-4">
            <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Members & Official Studio
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible">
              {peers.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePeerId(p.id)}
                  className={`flex shrink-0 items-center gap-2.5 rounded-lg p-2.5 text-left transition-colors md:w-full ${
                    activePeer?.id === p.id
                      ? "border border-primary/50 bg-primary/10"
                      : "hover:bg-background/60"
                  }`}
                >
                  <img src={p.avatar} alt={p.name} className="h-9 w-9 shrink-0 rounded-full border border-border object-cover" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="truncate text-xs font-bold text-foreground">{p.name}</span>
                      {p.isOfficial && <OfficialLogoBadge />}
                    </div>
                    <p className="truncate text-[11px] text-muted-foreground">@{p.handle}</p>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <section className="flex min-h-[380px] flex-col rounded-xl border border-border bg-card/85 md:col-span-8">
            {activePeer ? (
              <>
                <div className="flex items-center gap-2.5 border-b border-border px-4 py-3">
                  <img src={activePeer.avatar} alt={activePeer.name} className="h-9 w-9 rounded-full border border-primary/40 object-cover" />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-foreground">{activePeer.name}</span>
                      {activePeer.isOfficial && <OfficialLogoBadge showLabel />}
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      @{activePeer.handle} {activePeer.role ? `· ${activePeer.role}` : ""}
                    </p>
                  </div>
                </div>

                <div className="flex-1 space-y-3 overflow-y-auto p-4">
                  {thread.length === 0 && (
                    <p className="py-10 text-center text-xs text-muted-foreground">
                      Start a conversation with {activePeer.name}.
                    </p>
                  )}
                  {thread.map((m) => {
                    const isMine = m.fromId === user.id;
                    const sender = users.find((u) => u.id === m.fromId);
                    return (
                      <div key={m.id} className={`flex flex-col ${isMine ? "items-end" : "items-start"}`}>
                        {sender?.isOfficial && !isMine && (
                          <div className="mb-1 flex items-center gap-1 text-[10px] font-semibold text-primary">
                            <OfficialLogoBadge showLabel /> Stargame Studio
                          </div>
                        )}
                        <div
                          className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed sm:text-sm ${
                            isMine
                              ? "bg-primary text-primary-foreground"
                              : "border border-border bg-background text-foreground"
                          }`}
                        >
                          {m.text}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!msgText.trim()) return;
                    sendMessage(activePeer.id, msgText);
                    setMsgText("");
                  }}
                  className="flex gap-2 border-t border-border p-3"
                >
                  <input
                    value={msgText}
                    onChange={(e) => setMsgText(e.target.value)}
                    placeholder={`Message ${activePeer.name}...`}
                    className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
                  >
                    <Send className="h-3.5 w-3.5" /> Send
                  </button>
                </form>
              </>
            ) : (
              <p className="p-8 text-center text-sm text-muted-foreground">No members available yet.</p>
            )}
          </section>
        </div>
      )}

      {/* TAB 2: OFFICIAL UPDATES INBOX */}
      {tab === "updates" && (
        <div className="mt-6 space-y-4">
          {updates.map((u) => (
            <article key={u.id} className="rounded-xl border border-primary/30 bg-card/90 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <OfficialLogoBadge showLabel />
                  <span className="rounded-full bg-background px-2.5 py-0.5 text-[11px] font-bold text-foreground">
                    {u.version}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(u.createdAt).toLocaleDateString()}
                </span>
              </div>
              <h2 className="mt-2.5 text-base font-bold text-foreground sm:text-lg">{u.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
            </article>
          ))}
        </div>
      )}

      {/* TAB 3: ADMIN PANEL (stargamestudioofficial@gmail.com only) */}
      {tab === "admin" && user.isAdmin && (
        <div className="mt-6 space-y-6">
          {adminNotice && (
            <div className="rounded-lg border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary">
              ✓ {adminNotice}
            </div>
          )}

          {/* Website Announcement Banner */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateSiteBanner({ active: bannerActive, message: bannerText, level: bannerLevel, updatedAt: new Date().toISOString() });
              setAdminNotice("Website announcement banner updated live!");
            }}
            className="rounded-xl border border-border bg-card/90 p-5"
          >
            <h2 className="flex items-center gap-2 font-bold text-foreground">
              <Megaphone className="h-4 w-4 text-primary" /> Website Announcement Banner
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">Shows at the top of every page for all visitors and guests.</p>
            <div className="mt-4 grid gap-3">
              <input
                value={bannerText}
                onChange={(e) => setBannerText(e.target.value)}
                placeholder="Banner announcement text..."
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <select
                  value={bannerLevel}
                  onChange={(e) => setBannerLevel(e.target.value as any)}
                  className="rounded-md border border-border bg-background px-3 py-1.5 text-foreground"
                >
                  <option value="launch">Gold / Launch</option>
                  <option value="info">Purple / Info</option>
                  <option value="alert">Red / Alert</option>
                </select>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={bannerActive} onChange={(e) => setBannerActive(e.target.checked)} className="accent-primary" />
                  Banner Visible Site-Wide
                </label>
                <button type="submit" className="ml-auto rounded-md bg-primary px-4 py-2 font-bold text-primary-foreground">
                  Save Banner
                </button>
              </div>
            </div>
          </form>

          {/* Publish Official Update Inbox Announcement */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!updTitle.trim() || !updBody.trim()) return;
              publishUpdate({ version: updVer, title: updTitle, body: updBody });
              setUpdTitle("");
              setUpdBody("");
              setAdminNotice("Published to everyone's Updates Inbox!");
            }}
            className="rounded-xl border border-border bg-card/90 p-5"
          >
            <h2 className="flex items-center gap-2 font-bold text-foreground">
              <Sparkles className="h-4 w-4 text-primary" /> Publish to Updates Inbox
            </h2>
            <div className="mt-4 grid gap-3">
              <div className="grid gap-3 sm:grid-cols-4">
                <input
                  value={updVer}
                  onChange={(e) => setUpdVer(e.target.value)}
                  placeholder="v3.1"
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
                <input
                  required
                  value={updTitle}
                  onChange={(e) => setUpdTitle(e.target.value)}
                  placeholder="Update title (e.g. Discord Bot Dashboard Live!)"
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground sm:col-span-3"
                />
              </div>
              <textarea
                required
                rows={3}
                value={updBody}
                onChange={(e) => setUpdBody(e.target.value)}
                placeholder="Describe what's new in this release..."
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
              <button type="submit" className="w-fit rounded-md bg-primary px-4 py-2 text-xs font-bold text-primary-foreground">
                Publish Official Update
              </button>
            </div>
          </form>

          {/* Manage Accounts (Ban / Unban) */}
          <div className="rounded-xl border border-border bg-card/90 p-5">
            <h2 className="flex items-center gap-2 font-bold text-foreground">
              <Ban className="h-4 w-4 text-destructive" /> Account Moderation (Ban / Unban)
            </h2>
            <div className="mt-4 space-y-2.5">
              {users
                .filter((u) => !u.isAdmin)
                .map((u) => (
                  <div key={u.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-background/70 p-3">
                    <div className="flex items-center gap-2.5">
                      <img src={u.avatar} alt={u.name} className="h-9 w-9 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-bold text-foreground">
                          {u.name} {u.banned && <span className="ml-1 rounded bg-destructive/20 px-1.5 py-0.5 text-[10px] text-destructive">BANNED</span>}
                        </p>
                        <p className="text-xs text-muted-foreground">@{u.handle} · {u.email}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        toggleBanUser(u.id);
                        setAdminNotice(`${u.banned ? "Unbanned" : "Banned"} @${u.handle}`);
                      }}
                      className={`rounded-md px-3.5 py-1.5 text-xs font-bold ${
                        u.banned
                          ? "border border-primary text-primary hover:bg-primary/10"
                          : "bg-destructive text-destructive-foreground hover:opacity-90"
                      }`}
                    >
                      {u.banned ? "Unban Account" : "Ban Account"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}
