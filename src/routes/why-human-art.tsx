import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageBody } from "@/components/sg/Shell";
import { PAGES, ORG_LD, breadcrumbLd, pageHead } from "@/content/site";

const page = PAGES["why-human-art"];

export const Route = createFileRoute("/why-human-art")({
  head: () =>
    pageHead({
      metaTitle: page.metaTitle,
      description: page.description,
      path: "/why-human-art",
      image: page.banner.src,
      jsonLd: [
        ORG_LD,
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Human Art vs AI", path: "/why-human-art" },
        ]),
      ],
    }),
  component: () => (
    <Shell>
      <PageBody page={page} />
    </Shell>
  ),
});
