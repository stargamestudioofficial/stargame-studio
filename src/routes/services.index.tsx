import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Shell } from "@/components/sg/Shell";
import { ORG_LD, SERVICES, breadcrumbLd, pageHead } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead({
      metaTitle: "Services: Graphic Design, 5K Medals, Roblox & PC Games | Stargame Studio",
      description:
        "Commission Stargame Studio for graphic design, 5K finisher medals, flyers, Roblox games, UGC accessories, 2D clothing, and PC game art. 100% human-made in Trinidad and Tobago.",
      path: "/services",
      jsonLd: [
        ORG_LD,
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ],
    }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();

  return (
    <Shell>
      <h1 className="sg-display text-3xl text-primary md:text-5xl">{t("services.heading")}</h1>
      <p className="mt-4 text-base text-muted-foreground sm:text-lg">{t("services.subtitle")}</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {SERVICES.map((s) => {
          const thumb = s.gallery?.[0] ?? s.banner;
          return (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                <img
                  src={thumb.src}
                  alt={thumb.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {s.startingPrice && (
                  <span className="absolute bottom-2.5 left-2.5 rounded-full bg-background/85 px-2.5 py-0.5 text-xs font-semibold text-primary backdrop-blur">
                    {s.startingPrice}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-foreground group-hover:text-primary">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  {t("services.viewDetails")}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Shell>
  );
}
