import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Palette, Search, Sparkles, X } from "lucide-react";
import { Shell } from "@/components/sg/Shell";
import { FULL_ARTWORK_ARCHIVE, type FullArtworkItem } from "@/content/artworkCatalog";
import { STUDIO, breadcrumbLd, pageHead } from "@/content/site";

export const Route = createFileRoute("/artwork")({
  head: () =>
    pageHead({
      metaTitle: "Full Artwork Archive — Current & Former Artists | Stargame Studio",
      description:
        "Browse 180+ human-made artworks from Stargame Studio: Icons, Banners, StarCity, The Outbreak, Starry Simulator, Savior, Comics, Free Wallpapers, Badges & Gamepasses, Discord Bot Art, Fanart, and Former Artists.",
      path: "/artwork",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Artwork", path: "/artwork" },
        ]),
      ],
    }),
  component: ArtworkPage,
});

function ArtworkPage() {
  const [scope, setScope] = useState<"all" | "current" | "former">("all");
  const [artist, setArtist] = useState("All Artists");
  const [project, setProject] = useState("All Sections");
  const [query, setQuery] = useState("");
  const [lightbox, setLightbox] = useState<FullArtworkItem | null>(null);

  const scoped = useMemo(() => {
    if (scope === "current") return FULL_ARTWORK_ARCHIVE.filter((a) => !a.former);
    if (scope === "former") return FULL_ARTWORK_ARCHIVE.filter((a) => Boolean(a.former));
    return FULL_ARTWORK_ARCHIVE;
  }, [scope]);

  const artists = useMemo(
    () => ["All Artists", ...Array.from(new Set(scoped.map((a) => a.artist)))],
    [scoped],
  );
  const projects = useMemo(
    () => ["All Sections", ...Array.from(new Set(scoped.map((a) => a.project)))],
    [scoped],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return scoped.filter((item) => {
      if (artist !== "All Artists" && item.artist !== artist) return false;
      if (project !== "All Sections" && item.project !== project) return false;
      if (q && !`${item.title} ${item.artist} ${item.project} ${item.alt}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [scoped, artist, project, query]);

  return (
    <Shell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Palette className="h-3.5 w-3.5" /> Complete Studio Archive ({FULL_ARTWORK_ARCHIVE.length} Pieces)
          </span>
          <h1 className="sg-display mt-2 text-3xl text-primary sm:text-5xl">Studio Artwork</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Every section from our original showcase—Icons, Banners, StarCity, The Outbreak, Starry Simulator, Savior, Comics, Free PC & Mobile Wallpapers, Badges & Gamepasses, Discord Bot Art, Fanart, and a dedicated Former Artists archive.
          </p>
        </div>
        <a
          href={STUDIO.robloxUgcUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-primary/60 bg-primary/10 px-4 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Shop Stargame Studio UGCs →
        </a>
      </div>

      {/* Current vs Former Artists switcher */}
      <div className="mt-6 flex flex-wrap gap-2">
        {(
          [
            ["all", `All Artwork (${FULL_ARTWORK_ARCHIVE.length})`],
            ["current", `Current Studio & Projects (${FULL_ARTWORK_ARCHIVE.filter((a) => !a.former).length})`],
            ["former", `Former Artists Archive (${FULL_ARTWORK_ARCHIVE.filter((a) => a.former).length})`],
          ] as const
        ).map(([k, lbl]) => (
          <button
            key={k}
            type="button"
            onClick={() => {
              setScope(k);
              setArtist("All Artists");
              setProject("All Sections");
            }}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
              scope === k
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
            }`}
          >
            {lbl}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3 rounded-xl border border-border bg-card/85 p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by section, character, or artist (e.g. Wallpapers, Comics, Badges, Cigerds, Kilo)..."
            className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm text-foreground focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Section / Project</p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {projects.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setProject(p)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  project === p
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Artist</p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {artists.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setArtist(a)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  artist === a
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Showing <strong className="text-foreground">{filtered.length}</strong> of {scoped.length} artworks
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <button
            key={item.src + item.title}
            type="button"
            onClick={() => setLightbox(item)}
            className="group overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:border-primary"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
              <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-3">
              <span className="inline-block rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                {item.project}
              </span>
              <h2 className="mt-1 truncate text-xs font-bold text-foreground group-hover:text-primary sm:text-sm">
                {item.title}
              </h2>
              <p className="mt-0.5 truncate text-[11px] text-muted-foreground">{item.artist}</p>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div>
                <h3 className="font-bold text-foreground">{lightbox.title}</h3>
                <p className="text-xs text-muted-foreground">Artist: {lightbox.artist} · {lightbox.project}</p>
              </div>
              <button type="button" onClick={() => setLightbox(null)} className="rounded-md p-1.5 text-muted-foreground hover:bg-background hover:text-foreground" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-auto bg-background p-4">
              <img src={lightbox.src} alt={lightbox.alt} className="mx-auto max-h-[62vh] w-auto rounded-lg object-contain" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-3">
              <p className="text-xs text-muted-foreground">{lightbox.former ? "Former Artist Archive Credit" : "100% Human-Crafted Artwork"}</p>
              <Link to="/commission" className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-bold text-primary-foreground">
                <Sparkles className="h-3.5 w-3.5" /> Commission Similar Style
              </Link>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}
