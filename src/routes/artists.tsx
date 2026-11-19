import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageBody } from "@/components/sg/Shell";
import { PAGES, ORG_LD, breadcrumbLd, pageHead } from "@/content/site";

const page = PAGES["artists"];

export const Route = createFileRoute("/artists")({
  head: () =>
    pageHead({
      metaTitle: page.metaTitle,
      description: page.description,
      path: "/artists",
      image: page.banner.src,
      jsonLd: [
        ORG_LD,
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Artists", path: "/artists" },
        ]),
      ],
    }),
  component: () => (
    <Shell>
      <PageBody page={page} />
    </Shell>
  ),
});
