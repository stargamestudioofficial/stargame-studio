import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { CheckCircle2, Mail, Send, Sparkles } from "lucide-react";
import { Shell } from "@/components/sg/Shell";
import { SERVICES, STUDIO, STUDIO_ASSETS, breadcrumbLd, pageHead } from "@/content/site";
import { submitCommission } from "@/lib/commissions.functions";
import { useI18n } from "@/lib/i18n";

type CommissionSearch = {
  service?: string;
  designs?: number;
  budget?: string;
};

export const Route = createFileRoute("/commission")({
  validateSearch: (search: Record<string, unknown>): CommissionSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
    designs: typeof search.designs === "number" || typeof search.designs === "string" ? Math.max(1, Number(search.designs) || 1) : undefined,
    budget: typeof search.budget === "string" ? search.budget : undefined,
  }),
  head: () =>
    pageHead({
      metaTitle: "Request a Commission | Stargame Studio — Human-Made Art",
      description:
        "Order custom Roblox art, UGC accessories, 2D clothing, flyers, logos, and 5K race medals from Stargame Studio. Requests go directly to stargamestudioofficial@gmail.com.",
      path: "/commission",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Commission", path: "/commission" },
        ]),
      ],
    }),
  component: CommissionPage,
});

const field =
  "mt-1.5 w-full rounded-md border border-border bg-card px-3 py-2 text-foreground focus:border-primary focus:outline-none";

function CommissionPage() {
  const { t } = useI18n();
  const search = Route.useSearch();
  const sendToSheets = useServerFn(submitCommission);
  const [state, setState] = useState<"idle" | "sending" | "done" | string>("idle");
  const [lastPayload, setLastPayload] = useState<Record<string, string> | null>(null);

  function buildMailto(p: Record<string, string>) {
    const subject = encodeURIComponent(`Commission Request: ${p.service || "Custom"} (${p.designs || 1} design)`);
    const body = encodeURIComponent(
      `Name: ${p.name || ""}\nEmail: ${p.email || ""}\nContact Platform: ${p.contactPlatform || ""}\nContact Handle / Phone: ${p.contactHandle || ""}\nService: ${p.service || ""}\nDesigns: ${p.designs || 1}\nBudget: ${p.budget || "Open"}\n\nDetails:\n${p.details || ""}`,
    );
    return `mailto:${STUDIO.email}?subject=${subject}&body=${body}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (!f.email?.trim() || !f.contactHandle?.trim()) {
      setState("Please provide both your email address and a direct contact handle (Discord, WhatsApp, or Instagram/TikTok) so we can reach you.");
      return;
    }

    setLastPayload(f);
    setState("sending");

    let deliveredToGmail = false;

    // 1. Direct email delivery to stargamestudioofficial@gmail.com via FormSubmit AJAX
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${STUDIO.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[Stargame Studio Commission] ${f.service} — ${f.name}`,
          _replyto: f.email,
          _template: "table",
          Name: f.name,
          Email: f.email,
          ContactPlatform: f.contactPlatform,
          ContactHandle: f.contactHandle,
          Service: f.service,
          Designs: f.designs,
          Budget: f.budget || "Not specified",
          Details: f.details,
        }),
      });
      if (res.ok) deliveredToGmail = true;
    } catch {
      // Fallback handled below
    }

    // 2. Also log to Google Sheets tracker when server keys are configured
    try {
      const r = await sendToSheets({
        data: {
          name: f.name,
          email: f.email,
          discord: `${f.contactPlatform}: ${f.contactHandle}`,
          service: f.service,
          designs: Number(f.designs) || 1,
          budget: f.budget || "",
          details: f.details,
        } as any,
      });
      if (r.ok) deliveredToGmail = true;
    } catch {
      // Ignore if sheets keys not set yet
    }

    if (deliveredToGmail) {
      setState("done");
    } else {
      setState("We couldn't reach the mail server from this browser. Click below to send your pre-filled commission directly to stargamestudioofficial@gmail.com.");
    }
  }

  if (state === "done") {
    return (
      <Shell>
        <div className="py-6 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden="true" />
          <h1 className="sg-display mt-4 text-3xl text-primary md:text-4xl">{t("commission.receivedTitle")}</h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Your commission request has been sent directly to <strong className="text-foreground">{STUDIO.email}</strong>. We will contact you using the email and handle you provided.
          </p>
          <button
            type="button"
            onClick={() => setState("idle")}
            className="mt-6 rounded-md border border-primary px-5 py-2 text-sm font-bold text-primary hover:bg-primary/10"
          >
            {t("commission.sendAnother")}
          </button>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="flex items-center gap-3">
        <img src={STUDIO_ASSETS.logo.src} alt={STUDIO_ASSETS.logo.alt} className="h-12 w-12 rounded-xl border border-primary/40 object-cover" />
        <div>
          <h1 className="sg-display text-3xl text-primary md:text-5xl">{t("commission.heading")}</h1>
        </div>
      </div>

      <p className="mt-4 text-muted-foreground">
        {t("commission.subtitle")} All requests go straight to{" "}
        <a className="text-primary underline" href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>.
      </p>

      <div className="mt-6 rounded-xl border border-primary/25 bg-card/85 p-4 text-sm">
        <p className="flex items-center gap-2 font-semibold text-foreground">
          <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
          {t("commission.quickRates")}
        </p>
        <ul className="mt-2 grid gap-1 text-muted-foreground sm:grid-cols-2">
          <li>• {t("commission.rateSingle")}</li>
          <li>• {t("commission.rateBulk")}</li>
        </ul>
      </div>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium">
            {t("commission.name")} *
            <input name="name" required maxLength={100} className={field} />
          </label>
          <label className="text-sm font-medium">
            {t("commission.email")} * (Required)
            <input name="email" type="email" required maxLength={255} placeholder="you@gmail.com" className={field} />
          </label>
        </div>

        {/* Forced direct contact channel */}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Preferred Contact Platform * (Required)
            <select name="contactPlatform" required className={field}>
              <option value="Discord">Discord</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Instagram">Instagram</option>
              <option value="TikTok">TikTok</option>
              <option value="Email Only">Email Only (Confirm below)</option>
            </select>
          </label>
          <label className="text-sm font-medium">
            Your Handle / WhatsApp Number * (Required)
            <input
              name="contactHandle"
              required
              minLength={2}
              maxLength={100}
              placeholder="e.g. @username or +1-868-..."
              className={field}
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <label className="text-sm font-medium">
            {t("commission.service")} *
            <select name="service" defaultValue={search.service ?? SERVICES[0].title} className={field}>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="Other">{t("commission.otherService")}</option>
            </select>
          </label>
          <label className="text-sm font-medium">
            {t("commission.designs")}
            <input name="designs" type="number" min={1} max={500} defaultValue={search.designs ?? 1} className={field} />
          </label>
          <label className="text-sm font-medium">
            {t("commission.budget")}
            <input name="budget" maxLength={100} defaultValue={search.budget ?? ""} placeholder="e.g. US$10" className={field} />
          </label>
        </div>

        <label className="text-sm font-medium">
          {t("commission.details")} *
          <textarea name="details" required minLength={5} maxLength={3000} rows={5} placeholder={t("commission.detailsPlaceholder")} className={field} />
        </label>

        {state !== "idle" && state !== "sending" && (
          <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
            <p>{state}</p>
            {lastPayload && (
              <a href={buildMailto(lastPayload)} className="mt-2 inline-flex items-center gap-1.5 font-semibold text-primary underline">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {t("commission.emailFallback")} ({STUDIO.email})
              </a>
            )}
          </div>
        )}

        <button disabled={state === "sending"} className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60">
          <Send className="h-4 w-4" aria-hidden="true" />
          {state === "sending" ? t("commission.sending") : `${t("commission.submit")} → ${STUDIO.email}`}
        </button>
      </form>
    </Shell>
  );
}
