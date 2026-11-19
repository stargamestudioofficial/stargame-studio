import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Ban,
  Flame,
  Heart,
  ImagePlus,
  Lock,
  MessageCircle,
  Pin,
  Send,
  Share2,
  Sparkles,
  Star,
  Trash2,
  UserCheck,
  UserPlus,
  Video,
  X,
} from "lucide-react";
import { Shell } from "@/components/sg/Shell";
import { OfficialLogoBadge } from "@/routes/inbox";
import { STUDIO_ASSETS, breadcrumbLd, pageHead } from "@/content/site";
import { useAuth, type FeedPost, type UserProfile } from "@/lib/auth";

export const Route = createFileRoute("/feed")({
  head: () =>
    pageHead({
      metaTitle: "Community Feed — Art, Games & Posts | Stargame Studio",
      description:
        "Share hand-drawn artwork, game updates, and videos on the Stargame Studio Community Feed. React, comment, and follow artists and developers.",
      path: "/feed",
      image: STUDIO_ASSETS.communityIcon.src,
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Community Feed", path: "/feed" },
        ]),
      ],
    }),
  component: FeedPage,
});

function timeAgo(iso: string) {
  const diff = Math.max(0, Date.now() - new Date(iso).getTime());
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h`;
  return `${Math.floor(hrs / 24)}d`;
}

function FeedPage() {
  const {
    user,
    users,
    posts,
    following,
    createPost,
    deletePost,
    togglePinPost,
    toggleReaction,
    addComment,
    incrementShare,
    toggleFollow,
    toggleBanUser,
  } = useAuth();
  const [tab, setTab] = useState<"foryou" | "following">("foryou");
  const [caption, setCaption] = useState("");
  const [tag, setTag] = useState<FeedPost["tag"]>("Artwork");
  const [mediaType, setMediaType] = useState<"image" | "video" | undefined>(undefined);
  const [mediaUrl, setMediaUrl] = useState<string | undefined>(undefined);
  const [openComments, setOpenComments] = useState<Record<string, boolean>>({});
  const [commentDrafts, setCommentDrafts] = useState<Record<string, string>>({});
  const [sharedNotice, setSharedNotice] = useState<string>("");
  const [inspectUser, setInspectUser] = useState<UserProfile | null>(null);

  if (!user) {
    return (
      <Shell>
        <div className="mx-auto max-w-xl py-8 text-center">
          <img
            src={STUDIO_ASSETS.communityIcon.src}
            alt={STUDIO_ASSETS.communityIcon.alt}
            className="mx-auto h-20 w-20 rounded-2xl border border-primary/50 object-cover shadow-lg"
          />
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Lock className="h-3.5 w-3.5" /> Account Required for Community Feed
          </span>
          <h1 className="sg-display mt-3 text-3xl text-foreground sm:text-4xl">Stargame Community Feed</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Post your artwork, devlogs, and videos—react, comment, share, and follow creators across Stargame Studio. Everything else on the site is open to guests, while the Feed requires a free 13+ account.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/auth" className="rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground hover:opacity-90">
              Sign In or Create Free Account
            </Link>
            <Link to="/artwork" className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary">
              Browse Artwork as Guest
            </Link>
          </div>
        </div>
      </Shell>
    );
  }

  function onMediaFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type.startsWith("video/")) {
      setMediaType("video");
      setMediaUrl(URL.createObjectURL(file));
    } else if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setMediaType("image");
          setMediaUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  function submitPost(e: React.FormEvent) {
    e.preventDefault();
    if (!caption.trim() && !mediaUrl) return;
    createPost({ caption, tag, mediaType, mediaUrl });
    setCaption("");
    setMediaType(undefined);
    setMediaUrl(undefined);
  }

  function handleShare(postId: string) {
    incrementShare(postId);
    const url = `${window.location.origin}/feed#${postId}`;
    if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
    setSharedNotice(postId);
    setTimeout(() => setSharedNotice(""), 2000);
  }

  const basePosts =
    tab === "following"
      ? posts.filter((p) => p.authorId === user.id || following.includes(p.authorId))
      : posts;
  const visiblePosts = [...basePosts].sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)));

  return (
    <Shell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={STUDIO_ASSETS.communityIcon.src}
            alt={STUDIO_ASSETS.communityIcon.alt}
            className="h-11 w-11 rounded-xl border border-primary/40 object-cover"
          />
          <div>
            <h1 className="sg-display text-2xl text-primary sm:text-3xl">Stargame Feed</h1>
            <p className="text-xs text-muted-foreground">
              Share human-made art, clips & studio updates {user.isAdmin ? "· Admin Moderation Active" : ""}
            </p>
          </div>
        </div>

        <div className="flex rounded-full border border-border bg-card p-1 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setTab("foryou")}
            className={`rounded-full px-4 py-1.5 ${tab === "foryou" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
          >
            For You
          </button>
          <button
            type="button"
            onClick={() => setTab("following")}
            className={`rounded-full px-4 py-1.5 ${tab === "following" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
          >
            Following ({following.length})
          </button>
        </div>
      </div>

      {/* Composer */}
      <form onSubmit={submitPost} className="mt-6 rounded-2xl border border-border bg-card/90 p-4 sm:p-5">
        <div className="flex gap-3">
          <img src={user.avatar} alt={user.name} className="h-10 w-10 shrink-0 rounded-full border border-primary/40 object-cover" />
          <div className="flex-1">
            <textarea
              rows={2}
              maxLength={600}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder={`Share an artwork, WIP, or update as @${user.handle}...`}
              className="w-full resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            {mediaUrl && (
              <div className="relative mt-2 overflow-hidden rounded-xl border border-border bg-background">
                {mediaType === "video" ? (
                  <video src={mediaUrl} controls className="max-h-72 w-full object-contain" />
                ) : (
                  <img src={mediaUrl} alt="Upload preview" className="max-h-72 w-full object-cover" />
                )}
                <button
                  type="button"
                  onClick={() => {
                    setMediaType(undefined);
                    setMediaUrl(undefined);
                  }}
                  className="absolute right-2 top-2 rounded-full bg-background/85 p-1 text-foreground hover:text-destructive"
                  aria-label="Remove media"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border/70 pt-3">
              <div className="flex flex-wrap items-center gap-2">
                <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary">
                  <ImagePlus className="h-3.5 w-3.5" /> Photo
                  <input type="file" accept="image/*" onChange={onMediaFile} className="hidden" />
                </label>
                <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary">
                  <Video className="h-3.5 w-3.5" /> Video
                  <input type="file" accept="video/*" onChange={onMediaFile} className="hidden" />
                </label>
                <select
                  value={tag}
                  onChange={(e) => setTag(e.target.value as FeedPost["tag"])}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground"
                >
                  <option value="Artwork">Artwork</option>
                  <option value="Game Dev">Game Dev</option>
                  <option value="UGC & Clothing">UGC & Clothing</option>
                  <option value="Commission">Commission</option>
                  <option value="Community">Community</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={!caption.trim() && !mediaUrl}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground hover:opacity-90 disabled:opacity-50"
              >
                <Sparkles className="h-3.5 w-3.5" /> Post
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Feed Stream */}
      <div className="mt-6 space-y-5">
        {visiblePosts.map((post) => {
          const isMe = post.authorId === user.id;
          const isFollowing = following.includes(post.authorId);
          const authorProfile = users.find((u) => u.id === post.authorId) ?? null;
          const hearted = post.reactions.heart.includes(user.id);
          const starred = post.reactions.star.includes(user.id);
          const fired = post.reactions.fire.includes(user.id);

          return (
            <article key={post.id} id={post.id} className="overflow-hidden rounded-2xl border border-border bg-card/90">
              {post.pinned && (
                <div className="flex items-center gap-1.5 border-b border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold text-primary">
                  <Pin className="h-3 w-3" /> Pinned by Stargame Studio
                </div>
              )}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3.5">
                <button
                  type="button"
                  onClick={() => authorProfile?.isPublic && setInspectUser(authorProfile)}
                  className="flex items-center gap-2.5 text-left"
                >
                  <img src={post.authorAvatar} alt={post.authorName} className="h-10 w-10 rounded-full border border-primary/40 object-cover" />
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-sm font-bold text-foreground hover:text-primary">{post.authorName}</span>
                      {post.authorOfficial && <OfficialLogoBadge showLabel />}
                      {post.authorRole && !post.authorOfficial && (
                        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                          {post.authorRole}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      @{post.authorHandle} · {timeAgo(post.createdAt)} · #{post.tag}
                    </p>
                  </div>
                </button>
                <div className="flex items-center gap-1.5">
                  {user.isAdmin && (
                    <>
                      <button
                        type="button"
                        onClick={() => togglePinPost(post.id)}
                        title={post.pinned ? "Unpin post" : "Pin post"}
                        className="rounded-full border border-border p-1.5 text-muted-foreground hover:border-primary hover:text-primary"
                      >
                        <Pin className="h-3.5 w-3.5" />
                      </button>
                      {!isMe && !authorProfile?.isAdmin && (
                        <button
                          type="button"
                          onClick={() => toggleBanUser(post.authorId)}
                          title="Ban account"
                          className="rounded-full border border-border p-1.5 text-muted-foreground hover:border-destructive hover:text-destructive"
                        >
                          <Ban className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </>
                  )}
                  {(user.isAdmin || isMe) && (
                    <button
                      type="button"
                      onClick={() => deletePost(post.id)}
                      title="Delete post"
                      className="rounded-full border border-border p-1.5 text-muted-foreground hover:border-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                  {!isMe && (
                    <button
                      type="button"
                      onClick={() => toggleFollow(post.authorId)}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                        isFollowing
                          ? "border border-border bg-background text-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {isFollowing ? <UserCheck className="h-3.5 w-3.5" /> : <UserPlus className="h-3.5 w-3.5" />}
                      {isFollowing ? "Following" : "Follow"}
                    </button>
                  )}
                </div>
              </div>

              {post.caption && <p className="px-4 pb-3 text-sm leading-relaxed text-foreground/95">{post.caption}</p>}

              {post.mediaUrl && (
                <div className="border-y border-border/60 bg-background/60">
                  {post.mediaType === "video" ? (
                    <video src={post.mediaUrl} controls className="max-h-[460px] w-full object-contain" />
                  ) : (
                    <img src={post.mediaUrl} alt={post.caption || "Community post"} className="max-h-[460px] w-full object-contain" loading="lazy" />
                  )}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2 px-4 py-3 text-xs">
                <button
                  type="button"
                  onClick={() => toggleReaction(post.id, "heart")}
                  className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 font-semibold ${
                    hearted ? "border-rose-400/60 bg-rose-500/15 text-rose-300" : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Heart className={`h-3.5 w-3.5 ${hearted ? "fill-current" : ""}`} /> {post.reactions.heart.length}
                </button>
                <button
                  type="button"
                  onClick={() => toggleReaction(post.id, "star")}
                  className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 font-semibold ${
                    starred ? "border-primary/60 bg-primary/15 text-primary" : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Star className={`h-3.5 w-3.5 ${starred ? "fill-current" : ""}`} /> {post.reactions.star.length}
                </button>
                <button
                  type="button"
                  onClick={() => toggleReaction(post.id, "fire")}
                  className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 font-semibold ${
                    fired ? "border-amber-400/60 bg-amber-500/15 text-amber-300" : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Flame className="h-3.5 w-3.5" /> {post.reactions.fire.length}
                </button>
                <button
                  type="button"
                  onClick={() => setOpenComments((m) => ({ ...m, [post.id]: !m[post.id] }))}
                  className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 font-semibold text-muted-foreground hover:text-foreground"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> {post.comments.length}
                </button>
                <button
                  type="button"
                  onClick={() => handleShare(post.id)}
                  className="ml-auto inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 font-semibold text-muted-foreground hover:text-primary"
                >
                  <Share2 className="h-3.5 w-3.5" /> {sharedNotice === post.id ? "Link copied!" : post.shares}
                </button>
              </div>

              {openComments[post.id] && (
                <div className="border-t border-border/70 bg-background/40 px-4 py-3">
                  <div className="space-y-2.5">
                    {post.comments.map((c) => (
                      <div key={c.id} className="flex items-start gap-2.5 text-xs">
                        <img src={c.authorAvatar} alt={c.authorName} className="h-6 w-6 rounded-full object-cover" />
                        <div className="rounded-lg bg-card px-3 py-2">
                          <span className="font-bold text-foreground">{c.authorName}</span>{" "}
                          {c.authorOfficial && <OfficialLogoBadge />}{" "}
                          <span className="text-muted-foreground">{c.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const txt = commentDrafts[post.id] ?? "";
                      if (!txt.trim()) return;
                      addComment(post.id, txt);
                      setCommentDrafts((d) => ({ ...d, [post.id]: "" }));
                    }}
                    className="mt-3 flex gap-2"
                  >
                    <input
                      value={commentDrafts[post.id] ?? ""}
                      onChange={(e) => setCommentDrafts((d) => ({ ...d, [post.id]: e.target.value }))}
                      placeholder="Write a comment..."
                      className="flex-1 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground"
                    >
                      <Send className="h-3 w-3" /> Reply
                    </button>
                  </form>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Public Profile Modal */}
      {inspectUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setInspectUser(null)}
        >
          <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img src={inspectUser.avatar} alt={inspectUser.name} className="h-14 w-14 rounded-full border-2 border-primary object-cover" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-bold text-foreground">{inspectUser.name}</h2>
                    {inspectUser.isOfficial && <OfficialLogoBadge showLabel />}
                  </div>
                  <p className="text-xs text-muted-foreground">@{inspectUser.handle}</p>
                </div>
              </div>
              <button type="button" onClick={() => setInspectUser(null)} className="text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
              </button>
            </div>
            {inspectUser.bio && <p className="mt-4 text-sm text-muted-foreground">{inspectUser.bio}</p>}
            <p className="mt-3 text-xs text-muted-foreground">
              {inspectUser.country} · Age {inspectUser.age}+
            </p>
            <div className="mt-5 flex gap-2">
              {inspectUser.id !== user.id && (
                <button
                  type="button"
                  onClick={() => toggleFollow(inspectUser.id)}
                  className="flex-1 rounded-md bg-primary py-2 text-xs font-bold text-primary-foreground"
                >
                  {following.includes(inspectUser.id) ? "Following" : "Follow"}
                </button>
              )}
              <Link
                to="/inbox"
                className="flex-1 rounded-md border border-primary py-2 text-center text-xs font-bold text-primary"
              >
                Message
              </Link>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}
