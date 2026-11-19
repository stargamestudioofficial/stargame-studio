import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageBody } from "@/components/sg/Shell";
import { PAGES, ORG_LD, breadcrumbLd, pageHead } from "@/content/site";

const page = PAGES["education"];

export const Route = createFileRoute("/education")({
  head: () =>
    pageHead({
      metaTitle: page.metaTitle,
      description: page.description,
      path: "/education",
      image: page.banner.src,
      jsonLd: [
        ORG_LD,
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Education", path: "/education" },
        ]),
      ],
    }),
  component: () => (
    <Shell>
      <PageBody page={page} />
    </Shell>
  ),
});
