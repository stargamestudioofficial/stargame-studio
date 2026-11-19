import { useMatches as useImportedMatches, useRouterState } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "../lib/i18n";
import { AuthProvider } from "../lib/auth";
import { initGA4, trackPageView } from "../lib/analytics";

function NotFoundComponent() {
  return (
    <div className="sg-theme flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="max-w-md text-center">
        <h1 className="sg-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="sg-theme flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page did not load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or heading back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#161128" },
      { title: "Stargame Studio (SG) — Human-Made Art, Roblox UGC & Affordable Design" },
      {
        name: "description",
        content:
          "Stargame Studio (SG / SG Studio) from Trinidad and Tobago: affordable human-made art, flyers, 5K medals, Roblox UGC & 2D clothing from US$5–$10.",
      },
      { name: "author", content: "Stargame Studio" },
      { property: "og:site_name", content: "Stargame Studio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Hachi+Maru+Pop&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

declare module "@tanstack/react-router" {
  interface StaticDataRouteOption {
    importedDocument?: {
      html?: import("react").HTMLAttributes<HTMLHtmlElement> & Record<`data-${string}`, string>;
      body?: import("react").HTMLAttributes<HTMLBodyElement> & Record<`data-${string}`, string>;
    };
  }
}

function RootShell({ children }: { children: ReactNode }) {
  const importedDocument = useImportedMatches({
    select: (matches) => matches.at(-1)?.staticData.importedDocument,
  });
  return (
    <html lang="en" {...importedDocument?.html}>
      <head>
        <style href="site-import-inline" precedence="imported-inline">
          {"@layer imported-inline;"}
        </style>
        <HeadContent />
      </head>
      <body {...importedDocument?.body}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function AnalyticsTracker() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  useEffect(() => {
    initGA4();
  }, []);
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <AuthProvider>
          <AnalyticsTracker />
          <Outlet />
        </AuthProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}
