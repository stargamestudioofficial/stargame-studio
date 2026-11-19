import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageBody } from "@/components/sg/Shell";
import { PAGES, ORG_LD, breadcrumbLd, pageHead } from "@/content/site";

const page = PAGES["about"];

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      metaTitle: page.metaTitle,
      description: page.description,
      path: "/about",
      image: page.banner.src,
      jsonLd: [
        ORG_LD,
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ],
    }),
  component: () => (
    <Shell>
      <PageBody page={page} />
    </Shell>
  ),
});
