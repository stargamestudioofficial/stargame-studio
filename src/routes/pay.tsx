import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy, CreditCard, ExternalLink, Sparkles } from "lucide-react";
import { Shell } from "@/components/sg/Shell";
import { STUDIO, STUDIO_ASSETS, breadcrumbLd, pageHead } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import {
  BASE_PRICE_USD,
  BULK_PRICE_USD,
  BULK_MIN,
  RATES,
  convert,
  customTotalUSD,
  promoDiscount,
  sanitizeQty,
  totalUSD,
  unitPrice,
  type Currency,
} from "@/lib/pricing";

const SYMBOL: Record<Currency, string> = { USD: "US$", TTD: "TT$", EUR: "€", PHP: "₱" };
const fmt = (usd: number, c: Currency) =>
  `${SYMBOL[c]}${convert(usd, c).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const Route = createFileRoute("/pay")({
  head: () =>
    pageHead({
      metaTitle: "Pricing & Payment Calculator | Stargame Studio",
      description:
        "Transparent commission pricing from US$10 per design (US$5 each for 6+ designs). Live estimates in USD, TTD, EUR, and PHP for worldwide clients.",
      path: "/pay",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Pricing & Payment", path: "/pay" },
        ]),
      ],
    }),
  component: PayPage,
});

function PayPage() {
  const { t } = useI18n();
  const [mode, setMode] = useState<"designs" | "custom">("designs");
  const [qty, setQty] = useState(1);
  const [custom, setCustom] = useState("");
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);

  const safeQty = Math.max(1, sanitizeQty(qty));
  const discount = promoDiscount(code);
  const total =
    mode === "designs"
      ? totalUSD(safeQty, code)
      : customTotalUSD(Number(custom) || 0, code);

  async function copyQuoteAndOpenDiscord() {
    const summary =
      mode === "designs"
        ? `Stargame Studio Quote — ${safeQty} design(s) at US$${unitPrice(safeQty)} each${discount ? ` (${Math.round(discount * 100)}% promo ${code.trim().toUpperCase()})` : ""} = ${fmt(total, "USD")}`
        : `Stargame Studio Custom Quote — ${fmt(total, "USD")}${discount ? ` (${Math.round(discount * 100)}% promo ${code.trim().toUpperCase()})` : ""}`;
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored if clipboard blocked
    }
    window.open(STUDIO.discordInvite, "_blank", "noopener,noreferrer");
  }

  return (
    <Shell>
      <div className="flex items-center gap-3">
        <img
          src={STUDIO_ASSETS.clothingIcon.src}
          alt={STUDIO_ASSETS.clothingIcon.alt}
          className="h-12 w-12 rounded-xl border border-primary/40 object-cover"
        />
        <div>
          <h1 className="sg-display text-3xl text-primary md:text-5xl">{t("pay.heading")}</h1>
        </div>
      </div>

      <p className="mt-5 leading-relaxed text-muted-foreground">
        {t("pay.subtitle")} Standard designs are{" "}
        <strong className="text-foreground">US${BASE_PRICE_USD} each</strong>, or{" "}
        <strong className="text-foreground">US${BULK_PRICE_USD} each</strong> when you order more than{" "}
        {BULK_MIN}.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setMode("designs")}
          className={`rounded-lg border px-4 py-3 text-left font-medium transition-colors ${
            mode === "designs"
              ? "border-primary bg-primary/15 text-foreground"
              : "border-border bg-card text-muted-foreground hover:border-primary/50"
          }`}
        >
          {t("pay.perDesign")}
        </button>
        <button
          type="button"
          onClick={() => setMode("custom")}
          className={`rounded-lg border px-4 py-3 text-left font-medium transition-colors ${
            mode === "custom"
              ? "border-primary bg-primary/15 text-foreground"
              : "border-border bg-card text-muted-foreground hover:border-primary/50"
          }`}
        >
          {t("pay.customQuote")}
        </button>
      </div>

      <div className="mt-6 grid gap-4 rounded-xl border border-border bg-card p-6">
        {mode === "designs" ? (
          <label className="flex items-center justify-between gap-4">
            <span>{t("pay.numDesigns")}</span>
            <input
              type="number"
              min={1}
              step={1}
              value={safeQty}
              onChange={(e) => setQty(Math.max(1, sanitizeQty(Number(e.target.value) || 1)))}
              className="w-24 rounded-md border border-input bg-background px-3 py-1.5 text-right"
            />
          </label>
        ) : (
          <label className="flex items-center justify-between gap-4">
            <span>{t("pay.quotedUsd")}</span>
            <input
              type="number"
              min={0}
              step="0.01"
              value={custom}
              onChange={(e) => {
                const raw = e.target.value;
                if (raw === "") return setCustom("");
                const n = Number(raw);
                setCustom(Number.isFinite(n) && n >= 0 ? raw : "0");
              }}
              placeholder="e.g. 75"
              className="w-28 rounded-md border border-input bg-background px-3 py-1.5 text-right"
            />
          </label>
        )}

        <label className="flex items-center justify-between gap-4">
          <span>{t("pay.discountCode")}</span>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="SG2026"
            className="w-32 rounded-md border border-input bg-background px-3 py-1.5 uppercase"
          />
        </label>

        {code.trim() !== "" && (
          <p className={`text-sm ${discount ? "text-primary" : "text-destructive"}`}>
            {discount ? `${t("pay.codeApplied")} ${Math.round(discount * 100)}% off` : t("pay.codeInvalid")}
          </p>
        )}

        {mode === "designs" && (
          <p className="text-sm text-muted-foreground">
            {safeQty} × US${unitPrice(safeQty)} per design
            {safeQty > BULK_MIN ? " (bulk rate active)" : ""}
          </p>
        )}

        <div className="grid grid-cols-2 gap-2.5 border-t border-border pt-4 sm:grid-cols-4">
          {(Object.keys(RATES) as Currency[]).map((c) => (
            <div key={c} className="rounded-lg border border-border/60 bg-muted/70 px-3 py-2.5">
              <p className="text-xs text-muted-foreground">{c}</p>
              <p className="mt-0.5 font-bold text-foreground">{fmt(total, c)}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">{t("pay.approxNote")}</p>
      </div>

      <div className="mt-6 rounded-xl border border-primary/30 bg-card/80 p-5">
        <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
          <CreditCard className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <p>{t("pay.cardSoon")}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/commission"
            search={{
              designs: mode === "designs" ? safeQty : 1,
              budget: fmt(total, "USD"),
            }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {t("pay.continueCommission")} ({fmt(total, "USD")})
          </Link>
          <button
            type="button"
            onClick={copyQuoteAndOpenDiscord}
            className="inline-flex items-center gap-2 rounded-md border border-primary px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/10"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? t("pay.copied") : t("pay.copyDiscord")}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">{t("pay.depositNote")}</p>
    </Shell>
  );
}
