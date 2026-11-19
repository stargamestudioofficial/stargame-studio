import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageBody } from "@/components/sg/Shell";
import { PAGES, ORG_LD, breadcrumbLd, pageHead } from "@/content/site";

const page = PAGES["investors"];

export const Route = createFileRoute("/investors")({
  head: () =>
    pageHead({
      metaTitle: page.metaTitle,
      description: page.description,
      path: "/investors",
      image: page.banner.src,
      jsonLd: [
        ORG_LD,
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Investors", path: "/investors" },
        ]),
      ],
    }),
  component: () => (
    <Shell>
      <PageBody page={page} />
    </Shell>
  ),
});
