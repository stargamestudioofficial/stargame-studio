import { createFileRoute, notFound } from "@tanstack/react-router";
import { Shell, PageBody } from "@/components/sg/Shell";
import { SERVICES, absUrl, breadcrumbLd, pageHead } from "@/content/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const page = SERVICES.find((s) => s.slug === params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? pageHead({
          metaTitle: loaderData.metaTitle,
          description: loaderData.description,
          path: `/services/${params.slug}`,
          image: loaderData.banner.src,
          jsonLd: [
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: loaderData.title,
              serviceType: loaderData.serviceType,
              description: loaderData.description,
              url: absUrl(`/services/${params.slug}`),
              areaServed: "Worldwide",
              provider: {
                "@type": "Organization",
                "@id": `${absUrl("/")}#organization`,
                name: "Stargame Studio",
                url: absUrl("/"),
                address: { "@type": "PostalAddress", addressCountry: "TT" },
              },
            },
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: loaderData.title, path: `/services/${params.slug}` },
            ]),
          ],
        })
      : { meta: [{ title: "Unavailable — Stargame Studio" }, { name: "robots", content: "noindex" }] },
  component: () => (
    <Shell>
      <PageBody page={Route.useLoaderData()} />
    </Shell>
  ),
});
