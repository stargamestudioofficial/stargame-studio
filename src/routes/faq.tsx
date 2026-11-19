import { createFileRoute } from "@tanstack/react-router";
import { HelpCircle } from "lucide-react";
import { Shell } from "@/components/sg/Shell";
import { FAQ, STUDIO_ASSETS, breadcrumbLd, pageHead } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageHead({
      metaTitle: "FAQ — Stargame Studio (SG), Trinidad and Tobago",
      description:
        "Straight answers about Stargame Studio: who we are, commission pricing, 5K medal design, Roblox UGC & clothing, and our strict human-art policy.",
      path: "/faq",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]),
      ],
    }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useI18n();

  return (
    <Shell>
      <div className="flex items-center gap-3">
        <img
          src={STUDIO_ASSETS.logo.src}
          alt={STUDIO_ASSETS.logo.alt}
          className="h-12 w-12 rounded-xl border border-primary/40 object-cover"
        />
        <div>
          <h1 className="sg-display text-3xl text-primary md:text-5xl">{t("faq.heading")}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{t("faq.subtitle")}</p>
        </div>
      </div>

      <dl className="mt-8 space-y-4">
        {FAQ.map((f) => (
          <div key={f.q} className="rounded-xl border border-border bg-card p-5">
            <dt className="flex items-start gap-2.5 font-bold text-foreground">
              <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{f.q}</span>
            </dt>
            <dd className="mt-2 pl-6.5 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
          </div>
        ))}
      </dl>
    </Shell>
  );
}
