# Stargame Studio: search visibility, services pages and payments

## What you'll get
1. **New pages, each made to be found on Google and AI search (Gemini, AI Overviews, ChatGPT):**
   - /about: who Stargame Studio (SG) is, the team, Trinidad and Tobago roots, games (Starcity, The Outbreak, Starry Simulator)
   - /services: overview of everything you offer
   - /services/graphic-design: flyers, logos, posters
   - /services/event-medals: 5K and fun-run medal designs, event flyers
   - /services/roblox: Roblox games, UGC items, 2D Roblox clothing (shirts and pants)
   - /services/pc-games: PC game development and art
   - /artists: work with or join our artists
   - /investors: vision, games, growth and how to get in touch
   - /education: cybersecurity education (marked "coming soon", with a sign-up interest note)
   - /why-human-art: hand-made, original art vs AI generators (ownership, originality, local Caribbean style)
   - /pay: payment page for art and graphic design orders
   - /faq: plain answers search and AI tools can quote
2. **A shared top menu and footer** linking every page from the home page.
3. **Search setup:** unique titles and descriptions per page, organization details that tell Google and AI tools "Stargame Studio (SG), based in Trinidad and Tobago" is one specific studio, sitemap and robots file once the site is published.

## Honest limits
- No one can guarantee first place on Google or that Gemini picks you over other studios with the same name. This gives you the strongest setup possible; ranking also depends on publishing, a custom domain, Google Search Console, and links from your Roblox group, socials and Discord pointing to the site.
- I'll write the page text from your existing site. Anything I'm unsure about (prices, team names, contact) I'll keep general or ask.

## Payments
- Checkout for art/design orders: customers pick a service (or enter the amount you quoted them) and pay by card.
- I'll first check which built-in payment provider fits, then ask you to confirm before turning it on. A test mode comes first; real money needs account verification.

## Technical details
- New TanStack route files with per-route head() (title, description, og tags, canonical), JSON-LD: Organization + WebSite on home, Service on service pages, FAQPage kept only as content.
- Shared header/footer component added in __root around Outlet; home import markup left untouched except a link to new pages.
- Payments via built-in provider (eligibility check, then enable); Lovable Cloud enabled if orders must be stored.
