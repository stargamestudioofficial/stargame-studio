import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Camera, CheckCircle2, Globe, Lock, LogOut, Save, Users } from "lucide-react";
import { Shell } from "@/components/sg/Shell";
import { pageHead } from "@/content/site";
import { useAuth, type GenderOption, type MemberRole } from "@/lib/auth";

export const Route = createFileRoute("/profile")({
  head: () =>
    pageHead({
      metaTitle: "Your Profile & Public Directory | Stargame Studio",
      description:
        "Edit your Stargame Studio profile picture, display name, role, country, age, email, password, and public visibility settings.",
      path: "/profile",
    }),
  component: ProfilePage,
});

const field =
  "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none";

function ProfilePage() {
  const { user, users, following, updateProfile, toggleFollow, signOut } = useAuth();
  const [name, setName] = useState(user?.name ?? "");
  const [handle, setHandle] = useState(user?.handle ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [newPassword, setNewPassword] = useState("");
  const [avatar, setAvatar] = useState(user?.avatar ?? "");
  const [role, setRole] = useState<MemberRole>(user?.role ?? "Viewer");
  const [gender, setGender] = useState<GenderOption>(user?.gender ?? "");
  const [country, setCountry] = useState(user?.country ?? "");
  const [age, setAge] = useState(String(user?.age ?? 16));
  const [bio, setBio] = useState(user?.bio ?? "");
  const [isPublic, setIsPublic] = useState(user?.isPublic ?? true);
  const [status, setStatus] = useState<string>("");

  function onPhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function onSave(e: React.FormEvent) {
    e.preventDefault();
    const res = updateProfile({
      name,
      handle,
      email,
      avatar: avatar || user?.avatar,
      role,
      gender,
      country,
      age: Number(age) || 13,
      bio,
      isPublic,
      newPassword: newPassword.trim() || undefined,
    });
    if (!res.ok) {
      setStatus(`Error: ${res.error}`);
      return;
    }
    setNewPassword("");
    setStatus("Profile saved!");
    setTimeout(() => setStatus(""), 3000);
  }

  if (!user) {
    return (
      <Shell>
        <div className="py-8 text-center">
          <h1 className="sg-display text-3xl text-primary">Create or Edit Your Profile</h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Sign in or register (13+) to customize your avatar, role, bio, and public creator profile.
          </p>
          <div className="mt-6">
            <Link to="/auth" className="rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground">
              Sign In / Create Account
            </Link>
          </div>
        </div>
      </Shell>
    );
  }

  const publicMembers = users.filter((u) => u.isPublic && u.id !== user.id);

  return (
    <Shell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <img
            src={avatar || user.avatar}
            alt={user.name}
            className="h-16 w-16 rounded-full border-2 border-primary object-cover"
          />
          <div>
            <h1 className="sg-display text-2xl text-primary sm:text-3xl">{user.name}</h1>
            <p className="text-xs text-muted-foreground">
              @{user.handle} {user.role ? `· ${user.role}` : ""} · {user.country || "Worldwide"}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={signOut}
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 text-xs font-semibold text-muted-foreground hover:border-destructive hover:text-destructive"
        >
          <LogOut className="h-3.5 w-3.5" /> Sign Out
        </button>
      </div>

      <form onSubmit={onSave} className="mt-8 grid gap-4 rounded-xl border border-border bg-card/85 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-4">
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-primary/60 px-3.5 py-2 text-xs font-semibold text-primary hover:bg-primary/10">
            <Camera className="h-4 w-4" />
            Upload Profile Picture
            <input type="file" accept="image/*" onChange={onPhotoUpload} className="hidden" />
          </label>
          <span className="text-xs text-muted-foreground">JPG, PNG, or WebP</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Display Name
            <input required value={name} onChange={(e) => setName(e.target.value)} className={field} />
          </label>
          <label className="text-sm font-medium">
            Username (@handle)
            <input required value={handle} onChange={(e) => setHandle(e.target.value)} className={field} />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Email / Gmail
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
          </label>
          <label className="text-sm font-medium">
            New Password (leave blank to keep current)
            <input type="password" minLength={6} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="••••••••" className={field} />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-4">
          <label className="text-sm font-medium sm:col-span-2">
            Role (optional)
            <select value={role} onChange={(e) => setRole(e.target.value as MemberRole)} className={field}>
              <option value="">None</option>
              <option value="Viewer">Viewer</option>
              <option value="Community Member">Community Member</option>
              <option value="SG Artist">SG Artist</option>
              <option value="SG Designer">SG Designer</option>
              <option value="SG Developer">SG Developer</option>
            </select>
          </label>
          <label className="text-sm font-medium">
            Gender
            <select value={gender} onChange={(e) => setGender(e.target.value as GenderOption)} className={field}>
              <option value="">Not set</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <label className="text-sm font-medium">
            Age (13+)
            <input required type="number" min={13} max={120} value={age} onChange={(e) => setAge(e.target.value)} className={field} />
          </label>
        </div>

        <label className="text-sm font-medium">
          Country
          <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Trinidad and Tobago" className={field} />
        </label>

        <label className="text-sm font-medium">
          Bio
          <textarea rows={3} maxLength={240} value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Tell the community what you draw, build, or play..." className={field} />
        </label>

        <label className="flex items-center gap-2.5 rounded-lg border border-border bg-background/60 p-3 text-sm">
          <input type="checkbox" checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} className="h-4 w-4 accent-primary" />
          <span className="inline-flex items-center gap-1.5">
            {isPublic ? <Globe className="h-4 w-4 text-primary" /> : <Lock className="h-4 w-4 text-muted-foreground" />}
            <strong>{isPublic ? "Public Profile" : "Private Profile"}</strong> —{" "}
            <span className="text-xs text-muted-foreground">
              {isPublic ? "Anyone on Stargame Studio can view your profile and follow you." : "Hidden from the public directory."}
            </span>
          </span>
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:opacity-90">
            <Save className="h-4 w-4" /> Save Changes
          </button>
          {status && (
            <span className={`inline-flex items-center gap-1 text-sm font-medium ${status.startsWith("Error") ? "text-destructive" : "text-primary"}`}>
              <CheckCircle2 className="h-4 w-4" /> {status}
            </span>
          )}
        </div>
      </form>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Users className="h-5 w-5 text-primary" /> Public Community Profiles
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {publicMembers.map((m) => {
            const isFollowing = following.includes(m.id);
            return (
              <div key={m.id} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-3 min-w-0">
                  <img src={m.avatar} alt={m.name} className="h-11 w-11 shrink-0 rounded-full border border-primary/40 object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-foreground">{m.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      @{m.handle} {m.role ? `· ${m.role}` : ""}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => toggleFollow(m.id)}
                  className={`shrink-0 rounded-full px-3.5 py-1 text-xs font-bold transition-colors ${
                    isFollowing
                      ? "border border-border bg-background text-foreground hover:border-primary"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </Shell>
  );
}
