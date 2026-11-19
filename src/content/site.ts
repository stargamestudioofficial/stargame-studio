export const SITE_URL =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_SITE_URL) ||
  "https://stargamestudio.lovable.app";

export function absUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  const cleanBase = SITE_URL.replace(/\/+$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

export const ADMIN_EMAIL = "stargamestudioofficial@gmail.com";

export const STUDIO = {
  name: "Stargame Studio",
  shortName: "SG Studio",
  alt: ["SG Studio", "SG", "Stargame", "Stargame Studios"],
  country: "Trinidad and Tobago & Netherlands",
  regions: ["Trinidad and Tobago", "Netherlands", "Poland (Co-Founder)"],
  tagline: "Original human-crafted art, Roblox UGC, Discord bots, and affordable design—managed across Trinidad & Tobago and the Netherlands.",
  leadership: [
    { name: "Lionel", handle: "ironlion390", role: "Founder", country: "Trinidad and Tobago" },
    { name: "Damian", handle: "niamaru87", role: "Co-Founder", country: "Netherlands" },
    { name: "Charlie", handle: "peachu.dev", role: "Co-Founder #2", country: "Poland" },
    { name: "Mariel", handle: "SGS Design Dept", role: "Chief Designer", country: "International" },
  ],
  discord: [
    "Lionel — ironlion390 (Founder, Trinidad & Tobago)",
    "Damian — niamaru87 (Co-Founder, Netherlands)",
    "Charlie — peachu.dev (Co-Founder #2, Poland)",
    "Mariel (Chief Designer, SGS Design Dept)",
  ],
  email: ADMIN_EMAIL,
  discordInvite: "https://discord.gg/Sbv3XKDbrP",
  discordAltInvite: "https://discord.gg/UbQDpQUGE",
  whatsappCommunity: "https://chat.whatsapp.com/KXdiXEopDN84pGERVFOcQe",
  instagram: "https://www.instagram.com/stargamestudio/",
  tiktok: "https://www.tiktok.com/@stargamestudio",
  youtube: "https://www.youtube.com/@StargameStudioOfficial",
  twitter: "https://x.com/SGStudioTeam",
  googleSite: "https://sites.google.com/view/stargame-studio/home",
  robloxGroupUrl: "https://www.roblox.com/groups/32487083",
  robloxUgcUrl: "https://www.roblox.com/communities/643607189/Stargame-Studio-UGCs",
  starrySimulatorUrl: "https://www.roblox.com/games/88425766393203/Starry-Simulator",
  games: ["StarCity", "The Outbreak", "Starry Simulator"],
  socials: [
    { name: "Instagram", handle: "@stargamestudio", url: "https://www.instagram.com/stargamestudio/" },
    { name: "TikTok", handle: "@stargamestudio", url: "https://www.tiktok.com/@stargamestudio" },
    { name: "YouTube", handle: "@StargameStudioOfficial", url: "https://www.youtube.com/@StargameStudioOfficial" },
    { name: "X (Twitter)", handle: "@SGStudioTeam", url: "https://x.com/SGStudioTeam" },
    { name: "Discord", handle: "SG Community", url: "https://discord.gg/Sbv3XKDbrP" },
    { name: "WhatsApp Community", handle: "No Discord needed", url: "https://chat.whatsapp.com/KXdiXEopDN84pGERVFOcQe" },
    { name: "Roblox Main Group", handle: "Group 32487083", url: "https://www.roblox.com/groups/32487083" },
    { name: "Roblox UGCs", handle: "Stargame Studio UGCs", url: "https://www.roblox.com/communities/643607189/Stargame-Studio-UGCs" },
  ],
};

export type ArtworkItem = {
  src: string;
  alt: string;
  title: string;
  artist: string;
  project?: string;
  aspect?: "square" | "wide";
};

export const STUDIO_ASSETS = {
  logo: {
    src: "/site-assets/img/9c913773c716601b.webp",
    alt: "Stargame Studio official mascot icon designed by Ashy_moonwolf",
    title: "Official Studio Icon",
    artist: "Ashy_moonwolf",
    project: "Studio Branding & Icons",
    aspect: "square" as const,
  },
  clothingIcon: {
    src: "/site-assets/img/d8e8f6cf8c7d6c86.webp",
    alt: "SG Clothing icon illustrated by Alex Ishio",
    title: "SG Clothing Icon",
    artist: "Alex Ishio",
    project: "SG Clothing & UGC",
    aspect: "square" as const,
  },
  mainBanner: {
    src: "/site-assets/img/617c8ba0ed5d0b7c.webp",
    alt: "Stargame Studio official banner featuring original studio characters and SG Studio star logo",
    title: "Official Studio Banner",
    artist: "Stargame Studio",
    project: "Studio Branding & Icons",
    aspect: "wide" as const,
  },
  starCityBanner: {
    src: "/site-assets/img/870add0bd97abcce.webp",
    alt: "StarCity starry night banner art featuring Adularia Stardust designed by la.poleyz",
    title: "StarCity Banner #1 (Adularia)",
    artist: "la.poleyz",
    project: "StarCity",
    aspect: "wide" as const,
  },
  teamBanner: {
    src: "/site-assets/img/c75d496ea1a42672.webp",
    alt: "Stargame Studio character group illustration designed by mdvrxon.xx",
    title: "Studio Crew Banner #2",
    artist: "mdvrxon.xx",
    project: "Studio Branding & Icons",
    aspect: "wide" as const,
  },
  starrySim: {
    src: "/site-assets/img/695b45400199db0b.webp",
    alt: "Starry Simulator Roblox game icon illustrated by mdvrxon.xx",
    title: "Starry Simulator Game Icon",
    artist: "mdvrxon.xx",
    project: "Starry Simulator",
    aspect: "square" as const,
  },
  outbreakChar: {
    src: "/site-assets/img/cb5205ed6d9ab46d.webp",
    alt: "The Outbreak character illustration by Nisha",
    title: "The Outbreak Character Art",
    artist: "Nisha",
    project: "The Outbreak",
    aspect: "square" as const,
  },
  saviorSheet: {
    src: "/site-assets/img/abc0265f5fa4a54f.webp",
    alt: "Void Crystal character turnaround sheet by Ashy_moonwolf",
    title: "Void Crystal Concept Sheet",
    artist: "Ashy_moonwolf",
    project: "Savior",
    aspect: "square" as const,
  },
  outbreakLogo: {
    src: "/site-assets/img/ee8cd04553fa9661.webp",
    alt: "The Outbreak hand-lettered game logo by PolarPlatypus",
    title: "The Outbreak Title Logo",
    artist: "PolarPlatypus",
    project: "The Outbreak",
    aspect: "wide" as const,
  },
  charKilo: {
    src: "/site-assets/img/drive-char-kilo.webp",
    alt: "Kilo (Star Keeper) official StarCity character sheet",
    title: "Kilo — Star Keeper",
    artist: "Stargame Studio",
    project: "StarCity",
    aspect: "wide" as const,
  },
  charAlva: {
    src: "/site-assets/img/drive-char-alva.webp",
    alt: "Alva the Unknown Witch official StarCity character reference sheet by Correll",
    title: "Alva — The Unknown Witch",
    artist: "Correll",
    project: "StarCity",
    aspect: "square" as const,
  },
  charAdularia: {
    src: "/site-assets/img/drive-char-adularia.webp",
    alt: "Adularia Stardust official cosmic character sheet",
    title: "Adularia Stardust",
    artist: "Stargame Studio",
    project: "Character Sheets",
    aspect: "square" as const,
  },
  charByakko: {
    src: "/site-assets/img/drive-char-byakko.webp",
    alt: "Byakko Nekomata official StarCity character sheet",
    title: "Byakko — Nekomata",
    artist: "Stargame Studio",
    project: "StarCity",
    aspect: "square" as const,
  },
  labsIcon: {
    src: "/site-assets/img/drive-sg-labs-icon.webp",
    alt: "Stargame Studio Secure Labs Japanese-styled SG emblem by Ashy_moonwolf",
    title: "SG Secure Labs Badge",
    artist: "Ashy_moonwolf",
    project: "Studio Branding & Icons",
    aspect: "square" as const,
  },
  communityIcon: {
    src: "/site-assets/img/drive-sg-community-icon.webp",
    alt: "Stargame Studio 4-panel chibi community icon by Ashy_moonwolf",
    title: "SG Community Chibi Icon",
    artist: "Ashy_moonwolf",
    project: "Studio Branding & Icons",
    aspect: "square" as const,
  },
  outbreakThumb: {
    src: "/site-assets/img/drive-outbreak-thumb.webp",
    alt: "The Outbreak widescreen atmospheric forest game thumbnail by Nisha",
    title: "The Outbreak Official Thumbnail",
    artist: "Nisha",
    project: "The Outbreak",
    aspect: "wide" as const,
  },
  wasteAketa: {
    src: "/site-assets/img/drive-waste-art.webp",
    alt: "Aketa character portrait in blue kimono illustrated by Waste",
    title: "Aketa Character Portrait",
    artist: "Waste",
    project: "Character Sheets",
    aspect: "square" as const,
  },
  anehckaArt: {
    src: "/site-assets/img/drive-anehcka-art.webp",
    alt: "Original illustration by Anehcka12 for Stargame Studio",
    title: "Anehcka12 Studio Artwork",
    artist: "Anehcka12",
    project: "Character Sheets",
    aspect: "wide" as const,
  },
} satisfies Record<string, ArtworkItem>;

export const ARTWORK_CATALOG: ArtworkItem[] = [
  STUDIO_ASSETS.mainBanner,
  STUDIO_ASSETS.logo,
  STUDIO_ASSETS.communityIcon,
  STUDIO_ASSETS.labsIcon,
  STUDIO_ASSETS.clothingIcon,
  STUDIO_ASSETS.starCityBanner,
  STUDIO_ASSETS.teamBanner,
  STUDIO_ASSETS.charKilo,
  STUDIO_ASSETS.charAdularia,
  STUDIO_ASSETS.charAlva,
  STUDIO_ASSETS.charByakko,
  STUDIO_ASSETS.outbreakThumb,
  STUDIO_ASSETS.outbreakChar,
  STUDIO_ASSETS.outbreakLogo,
  STUDIO_ASSETS.starrySim,
  STUDIO_ASSETS.saviorSheet,
  STUDIO_ASSETS.wasteAketa,
  STUDIO_ASSETS.anehckaArt,
  { src: "/site-assets/img/b46fd260712cf0ba.webp", alt: "Savior character art by Ashy_moonwolf", title: "Savior Concept Piece", artist: "Ashy_moonwolf", project: "Savior" },
  { src: "/site-assets/img/b2d59281ff4c9cbe.webp", alt: "Savior design by la.poleyz", title: "Savior Design Art", artist: "la.poleyz", project: "Savior" },
  { src: "/site-assets/img/258c42f09eeb2742.webp", alt: "Character illustration by la.poleyz", title: "Poleyz Character Piece", artist: "la.poleyz", project: "StarCity" },
  { src: "/site-assets/img/708b5964a0c42cba.webp", alt: "Starry Simulator promo art by mdvrxon.xx", title: "Starry Simulator Promo", artist: "mdvrxon.xx", project: "Starry Simulator" },
  { src: "/site-assets/img/b6d7340127a126a0.webp", alt: "Starry Simulator design by Divine", title: "Starry Simulator Asset", artist: "Divine", project: "Starry Simulator" },
  { src: "/site-assets/img/fe50f600f1828440.webp", alt: "The Outbreak secondary art by Nisha", title: "The Outbreak Promo Art", artist: "Nisha", project: "The Outbreak" },
  { src: "/site-assets/img/9f193f2d64bb67fd.webp", alt: "Discord Bot icon & banner #1 by UnknownFairy", title: "SG Bot Visual #1", artist: "UnknownFairy", project: "Discord Bot Art" },
  { src: "/site-assets/img/3ce31a0a0b35afbd.webp", alt: "Discord Bot icon & banner #2 by UnknownFairy", title: "SG Bot Visual #2", artist: "UnknownFairy", project: "Discord Bot Art" },
  { src: "/site-assets/img/f4165a7c944d5d30.webp", alt: "Discord Bot icon & banner #3 by UnknownFairy", title: "SG Bot Visual #3", artist: "UnknownFairy", project: "Discord Bot Art" },
  { src: "/site-assets/img/7e0d8d072be090a7.webp", alt: "Discord Bot icon & banner #4 by UnknownFairy", title: "SG Bot Visual #4", artist: "UnknownFairy", project: "Discord Bot Art" },
  { src: "/site-assets/img/3fed49d902438e9b.webp", alt: "Archive design by former designer Cleona Coral", title: "Studio Archive Piece #1", artist: "Cleona Coral (Former)", project: "Character Sheets" },
  { src: "/site-assets/img/ded97c02c2234ec2.webp", alt: "Archive design by former designer Liyopy", title: "Studio Archive Piece #2", artist: "Liyopy (Former)", project: "Character Sheets" },
];

export type Section = {
  h: string;
  p: string[];
  list?: string[];
  icon?: "palette" | "medal" | "gamepad" | "monitor" | "users" | "shield" | "sparkles" | "check" | "globe" | "rocket";
};

export type Page = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  banner: ArtworkItem;
  gallery?: ArtworkItem[];
  sections: Section[];
  serviceType?: string;
  startingPrice?: string;
};

export const SERVICES: Page[] = [
  {
    slug: "graphic-design",
    serviceType: "Graphic design",
    title: "Affordable Graphic Design Commissions",
    metaTitle: "Affordable Graphic Design Commissions (From $5–$10) | Stargame Studio",
    description:
      "Affordable custom flyers, logos, PFPs, posters, thumbnails, and social graphics drawn by real human artists at Stargame Studio (SG) from US$5–$10 (or 400–800 Robux).",
    intro:
      "Looking for affordable design without settling for messy AI generators? Our human artists draw custom flyers, logos, PFPs, thumbnails, banners, and brand graphics starting as low as US$5–$10—and we work with your budget.",
    banner: STUDIO_ASSETS.starCityBanner,
    gallery: [STUDIO_ASSETS.logo, STUDIO_ASSETS.communityIcon, STUDIO_ASSETS.clothingIcon],
    startingPrice: "From US$5–$10 / design (400–800 Robux)",
    sections: [
      {
        h: "What we design (100% human-made)",
        icon: "palette",
        p: ["Clean, print-ready and web-ready files sized for wherever you plan to post or print them."],
        list: [
          "Event, fete, and community flyers",
          "Business logos, mascots, and starter brand kits",
          "Profile pictures (headshots, bust-ups, full-body)",
          "YouTube, Twitch, and Roblox game thumbnails",
          "Banners, wallpapers, comics, and character sheets",
          "School, church, and charity event graphics",
        ],
      },
      {
        h: "How ordering works",
        icon: "check",
        p: [
          "Commissions are open 24/7. Send your idea via our commission form, Discord, WhatsApp Community, or email. We confirm the scope, price (USD or Robux), and turnaround upfront—with drafts to review before final delivery.",
        ],
      },
      {
        h: "Managed in Trinidad & Tobago and the Netherlands",
        icon: "globe",
        p: [
          "Our leadership spans Trinidad & Tobago, the Netherlands, and Poland, serving clients across the Caribbean, Europe, and worldwide with clear USD, TTD, EUR, and PHP estimates.",
        ],
      },
    ],
  },
  {
    slug: "event-medals",
    serviceType: "Medal and event design",
    title: "5K & Run Event Medal Design",
    metaTitle: "5K Medal & Run Event Medal Design | Stargame Studio",
    description:
      "Production-ready finisher medal artwork for 5K, 10K, fun runs, marathons, and charity walks, plus matching race flyers and shirts. Drawn by real artists.",
    intro:
      "A good finisher medal is the part of race day runners keep on their wall. We design original, factory-ready medal artwork alongside matching race flyers so your entire event looks cohesive.",
    banner: STUDIO_ASSETS.mainBanner,
    gallery: [STUDIO_ASSETS.logo, STUDIO_ASSETS.starCityBanner, STUDIO_ASSETS.labsIcon],
    startingPrice: "From US$10 per design",
    sections: [
      {
        h: "Medal artwork built for real manufacturing",
        icon: "medal",
        p: [
          "We prepare clean front, back, and ribbon layouts with readable typography and proper color separation so your medal manufacturer can cast or print it without guesswork.",
        ],
        list: [
          "5K and 10K finisher medals",
          "Fun run and color run medals",
          "Half-marathon and marathon medals",
          "School sports day and charity walk medals",
          "Virtual run keepsake medals",
        ],
      },
      {
        h: "Matching race day graphics",
        icon: "palette",
        p: [
          "Keep your branding consistent with matching registration flyers, sponsor posters, race bibs, countdown graphics, and t-shirt artwork.",
        ],
      },
      {
        h: "Why real artists beat AI for medals",
        icon: "shield",
        p: [
          "AI medal mockups frequently scramble dates, misspell sponsor names, and create impossible 3D details that factories reject. We draw clean, accurate files with your exact race name, distance, and date.",
        ],
      },
    ],
  },
  {
    slug: "roblox",
    serviceType: "Roblox UGC, 2D clothing and game assets",
    title: "Roblox UGC, 2D Clothing & Game Assets",
    metaTitle: "Roblox UGC, 2D Clothing & Game Icon Commissions | Stargame Studio",
    description:
      "Commission Stargame Studio (SG) for custom 3D Roblox UGC accessories, 2D shirts and pants, game icons, thumbnails, UI, and skyboxes. Official Roblox Group 32487083 & Stargame Studio UGCs.",
    intro:
      "Our core Roblox focus is custom 3D UGC accessories (browse Stargame Studio UGCs on Roblox!), 2D clothing drops, and standout game visuals—alongside our studio worlds StarCity, The Outbreak, and Starry Simulator.",
    banner: STUDIO_ASSETS.outbreakThumb,
    gallery: [STUDIO_ASSETS.starrySim, STUDIO_ASSETS.clothingIcon, STUDIO_ASSETS.charKilo],
    startingPrice: "Icons & clothing from US$5–$10 (400–800 Robux)",
    sections: [
      {
        h: "What we craft for Roblox creators",
        icon: "gamepad",
        p: ["Made to stand out in the Roblox Avatar Marketplace and game discovery feeds."],
        list: [
          "Custom 3D UGC accessories & items (see Stargame Studio UGCs community)",
          "Classic 2D Roblox clothing: shirts, pants, and t-shirts",
          "Hand-drawn 512×512 game icons and 1920×1080 thumbnails",
          "Gamepass icons, badges, UI layouts, and skyboxes",
          "Selective Roblox development & scripting partnerships",
        ],
      },
      {
        h: "Explore our Roblox communities",
        icon: "rocket",
        p: [
          "Join our Main Roblox Group (32487083) and our dedicated Stargame Studio UGCs community (643607189) to shop our latest avatar drops.",
        ],
      },
    ],
  },
  {
    slug: "pc-games",
    serviceType: "PC game art, 2D animation and tech",
    title: "PC/Steam Art, 2D Animation & Bots",
    metaTitle: "PC & Steam Game Art, 2D Animation & Discord Bots | Stargame Studio",
    description:
      "Character turnaround sheets, frame-by-frame 2D animation, Steam capsule art, Discord bots, and web tools built by Stargame Studio.",
    intro:
      "As Stargame Studio expands into Unity, Steam, and custom web/Discord software, we partner with indie teams and communities for character concept sheets, 2D animation, Discord bots, and store art.",
    banner: STUDIO_ASSETS.teamBanner,
    gallery: [STUDIO_ASSETS.charAlva, STUDIO_ASSETS.charAdularia, STUDIO_ASSETS.charByakko],
    startingPrice: "Custom project quotes",
    sections: [
      {
        h: "What we build beyond Roblox",
        icon: "monitor",
        p: ["Original art direction paired with practical software engineering."],
        list: [
          "Character turnaround sheets & concept art (Kilo, Alva, Byakko, Adularia, Aketa)",
          "Frame-by-frame 2D animations & PNGTuber templates",
          "Steam capsule art, key art, and 2D game UI",
          "Custom Discord bots, automation, and web dashboards",
        ],
      },
    ],
  },
];

export const PAGES = {
  about: {
    slug: "about",
    title: "About Stargame Studio (SG)",
    metaTitle: "About Stargame Studio (SG / SG Studio) — Trinidad & Tobago & Netherlands",
    description:
      "Meet Stargame Studio (SG): an independent art, design, Roblox UGC, and tech collective managed across Trinidad & Tobago and the Netherlands.",
    intro:
      "Stargame Studio (SG / SG Studio) is an international creative collective managed across Trinidad and Tobago and the Netherlands. We bring together artists, designers, animators, and developers to deliver 100% human-made art, Roblox UGC & 2D clothing, Discord bots, and original games.",
    banner: STUDIO_ASSETS.mainBanner,
    gallery: [STUDIO_ASSETS.logo, STUDIO_ASSETS.communityIcon, STUDIO_ASSETS.charAdularia],
    sections: [
      {
        h: "Leadership Team",
        icon: "users",
        p: [
          "Stargame Studio is led by Founder Lionel (ironlion390, Trinidad & Tobago), Co-Founder Damian (niamaru87, Netherlands), and Co-Founder #2 Charlie (peachu.dev, Poland), alongside Chief Designer Mariel leading the SGS Design Dept.",
        ],
        list: [
          "Founder: Lionel (ironlion390) — Trinidad & Tobago",
          "Co-Founder: Damian (niamaru87) — Netherlands",
          "Co-Founder #2: Charlie (peachu.dev) — Poland",
          "Chief Designer: Mariel — SGS Design Dept (co-founded 2025 by Cige & Lionel)",
        ],
      },
      {
        h: "What we focus on today",
        icon: "sparkles",
        p: ["We balance original studio universes with accessible 24/7 client commissions."],
        list: [
          "Original 2D art, character sheets, comics, and 2D animation",
          "Affordable graphic design & 5K finisher medals (from US$5–$10)",
          "Roblox 3D UGC accessories (Group 643607189) & 2D clothing (Group 32487083)",
          "Discord bots, custom websites, and creator automation tools",
          "Original universes: StarCity, The Outbreak, and Starry Simulator",
          "Future physical merch, custom tech accessories, and a real-world cafe",
        ],
      },
      {
        h: "Our strict human-art policy",
        icon: "shield",
        p: [
          "We never pass off AI-generated images as original art. AI is only permitted internally for mundane proofreading or formatting—every illustration, logo, medal, and asset you receive is crafted by a human artist.",
        ],
      },
    ],
  },
  artists: {
    slug: "artists",
    title: "Work With Us as an Artist",
    metaTitle: "Artists: Join or Collaborate with Stargame Studio (SGS Design Dept)",
    description:
      "Illustrators, graphic designers, 2D animators, 3D UGC creators, and Roblox clothing designers can join Stargame Studio's human-first SGS Design Dept.",
    intro:
      "The SGS Design Dept was built so real artists get prominent portfolio credit, real commission opportunities, and a supportive team that refuses to replace human creativity with AI generators.",
    banner: STUDIO_ASSETS.teamBanner,
    gallery: [STUDIO_ASSETS.charAlva, STUDIO_ASSETS.wasteAketa, STUDIO_ASSETS.charByakko],
    sections: [
      {
        h: "Roles we welcome",
        icon: "palette",
        p: ["From rising rookie designers building a portfolio to experienced illustrators and modelers."],
        list: [
          "2D illustrators, character sheet & concept artists",
          "Graphic designers (flyers, logos, event medals, thumbnails)",
          "Frame-by-frame 2D animators & PNGTuber artists",
          "3D modelers and Roblox UGC accessory creators",
          "2D Roblox clothing designers (revenue-split opportunities)",
        ],
      },
      {
        h: "How collaboration & payouts work",
        icon: "check",
        p: [
          "We operate transparently on a milestone and treasury-based model with logged balances, generous commission splits, and guaranteed public credit across every platform we publish on.",
        ],
      },
    ],
  },
  investors: {
    slug: "investors",
    title: "For Partners & Investors",
    metaTitle: "Partner or Invest in Stargame Studio — Caribbean & European Creative Studio",
    description:
      "Stargame Studio is a growing creative collective managed across Trinidad & Tobago and the Netherlands, spanning human-made commissions, Roblox UGC, Discord bots, and future retail.",
    intro:
      "Stargame Studio is building a scalable international creative and tech brand—combining a global human-made commission pipeline, Roblox UGC & 2D fashion, Discord/web software, and a roadmap toward physical merchandise and a studio storefront.",
    banner: STUDIO_ASSETS.starCityBanner,
    gallery: [STUDIO_ASSETS.logo, STUDIO_ASSETS.outbreakThumb, STUDIO_ASSETS.communityIcon],
    sections: [
      {
        h: "Growth pillars",
        icon: "rocket",
        p: ["Multiple complementary revenue tracks under one recognizable brand."],
        list: [
          "24/7 global human-crafted design commissions (from US$5–$10+)",
          "Roblox 3D UGC (Group 643607189) & 2D clothing catalog (Group 32487083)",
          "Discord bots, web tools, and creator community platform",
          "Dropship & physical apparel, custom phone cases, and future cafe concept",
        ],
      },
      {
        h: "Start a conversation",
        icon: "users",
        p: [
          "Email stargamestudioofficial@gmail.com or reach out to Founder Lionel, Co-Founder Damian (niamaru87), or Co-Founder Charlie (peachu.dev) via Discord or WhatsApp Community.",
        ],
      },
    ],
  },
  education: {
    slug: "education",
    title: "Cybersecurity & Tech Education (Coming Soon)",
    metaTitle: "Cybersecurity & Tech Education — Coming Soon | Stargame Studio",
    description:
      "Practical cybersecurity and digital literacy lessons from Stargame Studio Secure Labs for gamers, students, and young creators.",
    intro:
      "Through our Secure Labs initiative, we are building plain-English cybersecurity and tech tutorials tailored for gamers, Discord communities, students, and young creators worldwide.",
    banner: STUDIO_ASSETS.starCityBanner,
    gallery: [STUDIO_ASSETS.labsIcon, STUDIO_ASSETS.starrySim],
    sections: [
      {
        h: "Planned Secure Labs topics",
        icon: "shield",
        p: ["Practical habits anyone can apply right away—zero confusing jargon."],
        list: [
          "Locking down Roblox, Discord, and Gmail accounts",
          "Spotting phishing links, cookie loggers, and alt-account scams",
          "Password hygiene and two-factor authentication",
          "Online privacy for young artists, developers, and streamers",
          "Getting started in cybersecurity and software tech",
        ],
      },
      {
        h: "Get notified when classes open",
        icon: "check",
        p: [
          "Join our Discord or WhatsApp Community, or email stargamestudioofficial@gmail.com to be notified when the first sessions launch.",
        ],
      },
    ],
  },
  "why-human-art": {
    slug: "why-human-art",
    title: "Affordable Human Art vs AI Generators",
    metaTitle: "Affordable Human Artists vs AI Art Generators (From $5–$10) | Stargame Studio",
    description:
      "Thinking of using an AI art generator because you need cheap design? Stargame Studio offers real human artists starting from US$5–$10—accurate text, print-ready files, and real revisions.",
    intro:
      "Most people turn to AI generators because they think real artists are too expensive. At Stargame Studio, human-drawn designs start at just US$5–$10—so you get real originality without AI artifacts.",
    banner: STUDIO_ASSETS.teamBanner,
    gallery: [STUDIO_ASSETS.charKilo, STUDIO_ASSETS.charAlva, STUDIO_ASSETS.wasteAketa],
    sections: [
      {
        h: "What you get with a real artist (from $5–$10)",
        icon: "check",
        p: ["Every pixel, letter, and character detail is drawn and verified by a human."],
        list: [
          "Exact spelling, dates, sponsor logos, and race distances—never garbled AI text",
          "Consistent original characters across banners, icons, comics, and merch",
          "Print-ready and factory-ready files for printers and 5K medal makers",
          "Real revisions with an artist who listens to your exact feedback",
          "Clean commercial usability without scraped-dataset headaches",
          "Budget-friendly pricing starting at US$5 (400 Robux) for bulk/entry work",
        ],
      },
      {
        h: "Our zero-AI-art guarantee",
        icon: "shield",
        p: [
          "Every piece delivered by Stargame Studio is crafted by a human artist on our team. We never sell AI-generated images as original art.",
        ],
      },
    ],
  },
} satisfies Record<string, Page>;

export const FAQ: { q: string; a: string }[] = [
  {
    q: "What is Stargame Studio (SG / SG Studio)?",
    a: "Stargame Studio (SG) is an independent art, graphic design, Roblox UGC, and tech collective managed across Trinidad & Tobago and the Netherlands by Founder Lionel, Co-Founder Damian (niamaru87), and Co-Founder Charlie (peachu.dev).",
  },
  {
    q: "Where can I find Stargame Studio's Roblox UGCs?",
    a: "Browse our dedicated Stargame Studio UGCs community on Roblox at roblox.com/communities/643607189/Stargame-Studio-UGCs, and our main Roblox Group at roblox.com/groups/32487083.",
  },
  {
    q: "How affordable are your commissions compared to AI tools?",
    a: "Entry and bulk designs (6+ items) start at US$5 (or 400 Robux) per design, and standard single designs start at US$10 (or 800 Robux). We work with clients in any country.",
  },
  {
    q: "Can I browse the website without creating an account?",
    a: "Yes! Browsing our artwork gallery, services, pricing calculator, FAQ, and commission form is 100% open to guests. Creating a free 13+ account unlocks the Community Feed, Direct Messages Inbox, Updates Inbox, and customizable public profiles.",
  },
  {
    q: "What if I don't have Discord—how can I contact you?",
    a: "Join our WhatsApp Community (chat.whatsapp.com/KXdiXEopDN84pGERVFOcQe), message our official verified account in the Inbox tab, email stargamestudioofficial@gmail.com, or submit a brief on our Commission page.",
  },
];

export const NAV = [
  { to: "/artwork", labelKey: "nav.artwork", label: "Artwork" },
  { to: "/services", labelKey: "nav.services", label: "Services" },
  { to: "/feed", labelKey: "nav.feed", label: "Feed" },
  { to: "/inbox", labelKey: "nav.inbox", label: "Inbox" },
  { to: "/about", labelKey: "nav.about", label: "About" },
  { to: "/why-human-art", labelKey: "nav.whyHumanArt", label: "Human vs AI" },
  { to: "/artists", labelKey: "nav.artists", label: "Artists" },
  { to: "/education", labelKey: "nav.education", label: "Education" },
  { to: "/faq", labelKey: "nav.faq", label: "FAQ" },
  { to: "/commission", labelKey: "nav.commission", label: "Commission" },
  { to: "/pay", labelKey: "nav.pay", label: "Pay" },
] as const;

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

export function pageHead(p: {
  metaTitle: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: object[];
}) {
  const canonical = absUrl(p.path);
  const ogImage = absUrl(p.image ?? STUDIO_ASSETS.mainBanner.src);
  return {
    meta: [
      { title: p.metaTitle },
      { name: "description", content: p.description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:site_name", content: STUDIO.name },
      { property: "og:title", content: p.metaTitle },
      { property: "og:description", content: p.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: `${STUDIO.name} — ${p.metaTitle}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@SGStudioTeam" },
      { name: "twitter:title", content: p.metaTitle },
      { name: "twitter:description", content: p.description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: (p.jsonLd ?? []).map((j) => ({
      type: "application/ld+json",
      children: JSON.stringify(j),
    })),
  };
}

export const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${absUrl("/")}#organization`,
  name: STUDIO.name,
  alternateName: STUDIO.alt,
  url: absUrl("/"),
  logo: absUrl(STUDIO_ASSETS.logo.src),
  image: absUrl(STUDIO_ASSETS.mainBanner.src),
  description:
    "Independent art, graphic design, Roblox UGC, and creative tech studio managed across Trinidad & Tobago and the Netherlands. Affordable human-made commissions from US$5–$10. Zero AI art.",
  founders: [
    { "@type": "Person", name: "Lionel (ironlion390)", nationality: "Trinidad and Tobago" },
    { "@type": "Person", name: "Damian (niamaru87)", nationality: "Netherlands" },
    { "@type": "Person", name: "Charlie (peachu.dev)", nationality: "Poland" },
  ],
  address: [
    { "@type": "PostalAddress", addressCountry: "TT" },
    { "@type": "PostalAddress", addressCountry: "NL" },
  ],
  areaServed: "Worldwide",
  email: STUDIO.email,
  sameAs: [
    STUDIO.instagram,
    STUDIO.tiktok,
    STUDIO.youtube,
    STUDIO.twitter,
    STUDIO.discordInvite,
    STUDIO.whatsappCommunity,
    STUDIO.robloxGroupUrl,
    STUDIO.robloxUgcUrl,
    STUDIO.googleSite,
  ],
  knowsAbout: [
    "Affordable graphic design commissions",
    "Human-made art alternative to AI generators",
    "5K race medal design",
    "Roblox UGC and 2D clothing",
    "Roblox game art",
    "2D animation",
    "Discord bots",
    "Cybersecurity education",
  ],
};

export const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${absUrl("/")}#website`,
  name: STUDIO.name,
  alternateName: STUDIO.alt,
  url: absUrl("/"),
  inLanguage: ["en", "es", "fr", "pt", "de", "ru", "ja", "ko", "zh-CN", "ar", "hi", "tl"],
  publisher: { "@id": `${absUrl("/")}#organization` },
};

export const ART_BG = [
  "da7a65c9ca85029f",
  "3a6a0f06b217a2a5",
  "c0e6ba0814b5e894",
  "7ee68b66012d0eed",
  "e44276a32db775f0",
].map((h) => `/site-assets/img/${h}.webp`);

export function artFor(key: string) {
  let n = 0;
  for (const c of key) n = (n * 31 + c.charCodeAt(0)) >>> 0;
  return ART_BG[n % ART_BG.length];
}
