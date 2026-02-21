// INTERNAL ONLY  -  fatjoePrice and fatjoeDelivery are stripped at build time.
// Never import this file in client components.

export interface ProductTier {
  name: string;
  fatjoePrice: number; // INTERNAL ONLY  -  never render to client
  ourPrice: number;
  fatjoeDelivery: number; // INTERNAL ONLY  -  never render to client
  ourDelivery: number; // = fatjoeDelivery + 3
  stripePriceId?: string; // Phase 5
  note?: string;        // Short callout shown in pricing table
  mostPopular?: boolean; // Shows "Most Popular" badge on this tier row
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  category: "link-building" | "content" | "pr" | "local-seo" | "video-design";
  tagline: string;
  description: string;
  tiers: ProductTier[];
  features: string[];
  faqs: { q: string; a: string }[];
  relatedProducts: string[]; // slugs
}

// Helper: strip internal fields for client serialization
export type PublicProductTier = Omit<ProductTier, "fatjoePrice" | "fatjoeDelivery">;
export type PublicProduct = Omit<Product, "tiers"> & { tiers: PublicProductTier[] };

export function toPublicProduct(p: Product): PublicProduct {
  return {
    ...p,
    tiers: p.tiers.map(({ name, ourPrice, ourDelivery, stripePriceId, note, mostPopular }) => ({
      name,
      ourPrice,
      ourDelivery,
      stripePriceId,
      note,
      mostPopular,
    })),
  };
}

export const PRODUCTS: Product[] = [
  {
    slug: "blogger-outreach",
    name: "Blogger Outreach Link Building",
    shortName: "Blogger Outreach",
    category: "link-building",
    tagline: "Law-firm-specific backlinks from real DR-verified websites",
    description:
      "Premium blogger outreach placements on editorially controlled websites. Every link is manually vetted for legal-industry relevance, domain authority, and traffic legitimacy. No Private Blog Networks (PBNs). No link farms. Just real editorial coverage that moves the needle for competitive legal keywords.",
    tiers: [
      { name: "DR10+", fatjoePrice: 72,  ourPrice: 144,  fatjoeDelivery: 14, ourDelivery: 17 },
      { name: "DR20+", fatjoePrice: 96,  ourPrice: 192,  fatjoeDelivery: 14, ourDelivery: 17 },
      { name: "DR30+", fatjoePrice: 120, ourPrice: 240,  fatjoeDelivery: 14, ourDelivery: 17, mostPopular: true },
      { name: "DR40+", fatjoePrice: 216, ourPrice: 432,  fatjoeDelivery: 14, ourDelivery: 17 },
      { name: "DR50+", fatjoePrice: 336, ourPrice: 672,  fatjoeDelivery: 14, ourDelivery: 17 },
      { name: "DR60+", fatjoePrice: 456, ourPrice: 912,  fatjoeDelivery: 14, ourDelivery: 17 },
    ],
    features: [
      "Manually vetted publishers - no Private Blog Networks (PBNs) or link farms",
      "Dofollow links from real editorial content",
      "DR verified at time of placement",
      "Law-firm-relevant anchor text strategy",
      "Your Money Your Life (YMYL) - aware content context",
      "Unbranded CSV report: live URL, DR at placement, anchor text, target URL",
      "Lifetime link replacement guarantee",
      "No duplicate domains - unique referring domain per order",
      "Minimum ~500-word article per placement",
      "17-day delivery guarantee",
    ],
    faqs: [
      { q: "What is blogger outreach link building for law firms?", a: "Blogger outreach is the process of securing editorial backlinks from third-party websites through outreach campaigns. For law firms, this means getting your website mentioned in articles published on real, traffic-driven websites  -  not link farms or private blog networks. Each placement includes a dofollow link pointing to your target page, which signals to Google that authoritative third parties vouch for your content." },
      { q: "Why do law firms need blogger outreach specifically?", a: "Legal keywords like 'personal injury lawyer Los Angeles' or 'DUI attorney Chicago' are among the most competitive in all of search. A single case can be worth $50,000–$500,000 in attorney fees, which means every firm with a marketing budget is competing for those top organic positions. Blogger outreach gives your site the domain authority signals Google uses to rank competitive YMYL (Your Money Your Life) queries  -  and without strong backlinks, even great content won't rank against established competitors." },
      { q: "What DR tier should my law firm start with?", a: "It depends on your current domain rating and your target keywords. For firms launching a new site or targeting local long-tail keywords, DR10–DR30 links provide a strong foundation. Firms competing for high-value practice-area keywords in major metros typically need a mix of DR40–DR60 placements to overcome entrenched competitors. We recommend running an audit first to identify your current link profile gaps." },
      { q: "Are these real editorial placements or sponsored posts?", a: "All placements are on real, editorial websites with genuine traffic. We do not use paid link schemes, private blog networks (PBNs), or sites that openly sell links. Every publisher is screened for traffic authenticity, editorial standards, and relevance before we pitch them. The resulting links are editorially placed within relevant content, which is the type Google values most." },
      { q: "How does Google's E-E-A-T requirement affect law firm link building?", a: "Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) guidelines are especially stringent for legal content because it falls under YMYL  -  content that can affect readers' legal rights and finances. Backlinks from authoritative publishers are one of the strongest external signals Google uses to evaluate trustworthiness. A law firm with no high-DR backlinks will struggle to compete against firms with established authority profiles, regardless of how well-written their on-site content is." },
      { q: "Will the content mention my law firm's practice area?", a: "Yes. When we submit our outreach brief, we specify that the linking content should be contextually relevant to your practice area. A personal injury firm's link should appear within content about accident law, safety, liability, or related legal topics  -  not a random lifestyle article. Contextual relevance is a core quality signal we enforce for every placement." },
      { q: "What does the placement report include?", a: "Upon delivery, you receive a report with: the live URL of the published article, the domain rating at time of placement, the referring page URL, your anchor text, and the destination URL the link points to. You can verify every placement independently using Ahrefs, SEMrush, or Moz." },
      { q: "How long until I see ranking improvements from blogger outreach?", a: "Google typically processes new backlinks within 2–8 weeks, though you may see them indexed sooner in Google Search Console. Meaningful ranking improvements for competitive legal keywords typically take 3–6 months of consistent link acquisition  -  this is normal for YMYL niches where Google applies additional scrutiny. A single high-DR link rarely moves rankings alone; consistent monthly acquisition is the strategy that compounds over time." },
    ],
    relatedProducts: ["niche-edits", "digital-pr-campaign", "brand-mentions"],
  },

  {
    slug: "niche-edits",
    name: "Niche Edit Link Building",
    shortName: "Niche Edits",
    category: "link-building",
    tagline: "Backlinks inserted into existing aged content on established sites",
    description:
      "Niche edits (also called link insertions) place your backlink inside existing, already-indexed content on established websites. Because the page has history, it passes authority faster than brand-new articles. Ideal for law firms targeting competitive SERPs who need quick authority gains from aged, high-trust pages.",
    tiers: [
      { name: "DR10+", fatjoePrice: 75,  ourPrice: 150,   fatjoeDelivery: 14, ourDelivery: 17 },
      { name: "DR20+", fatjoePrice: 120, ourPrice: 240,   fatjoeDelivery: 14, ourDelivery: 17 },
      { name: "DR30+", fatjoePrice: 150, ourPrice: 300,   fatjoeDelivery: 14, ourDelivery: 17, mostPopular: true },
      { name: "DR40+", fatjoePrice: 270, ourPrice: 540,   fatjoeDelivery: 14, ourDelivery: 17 },
      { name: "DR50+", fatjoePrice: 420, ourPrice: 840,   fatjoeDelivery: 14, ourDelivery: 17 },
      { name: "DR60+", fatjoePrice: 570, ourPrice: 1140,  fatjoeDelivery: 14, ourDelivery: 17 },
    ],
    features: [
      "Inserted into existing indexed content (aged authority)",
      "Dofollow links with manual anchor text control",
      "Faster authority transfer than new guest posts",
      "DR verified at time of insertion",
      "Contextual relevance screening for legal topics",
      "Unbranded CSV report with live URL, DR snapshot, and anchor confirmation",
      "Lifetime link guarantee + 100% money-back if undelivered",
      "17-day delivery guarantee",
    ],
    faqs: [
      { q: "What are niche edits and how do they differ from blogger outreach?", a: "Niche edits place your backlink inside existing, already-published articles on established websites. Blogger outreach creates a new article to house your link. The key difference: niche edit placements benefit from the existing authority and indexing history of the host page, which means the link often carries more immediate weight than a link in a brand-new article. For law firms in competitive markets, this speed-to-authority advantage matters." },
      { q: "Are niche edits safe for law firm websites?", a: "Yes  -  when done properly. 'Safe' niche edits come from editorially managed sites where the webmaster is willing to add your link because it genuinely adds value to existing content. We screen every insertion opportunity for YMYL compatibility, editorial integrity, and traffic authenticity. We do not participate in link schemes, paid link networks, or sites flagged by Google's manual review process." },
      { q: "Why do law firms benefit from niche edits specifically?", a: "Legal SERPs are dominated by firms and directories that have spent years accumulating authority. Niche edits give newer or mid-authority law firm sites a faster path to competitive link equity because they tap into the existing trust of aged pages. A single DR50+ niche edit on a legal-adjacent page can provide more ranking lift than multiple new guest post placements  -  because authority has already been established with Google." },
      { q: "What DR tier should my firm choose?", a: "Your DR tier choice should be informed by your current domain rating and your target keyword competition. DR10–20 is suitable for low-competition local or long-tail legal keywords. DR30–40 works for moderate competition in mid-size markets. DR50–60 is typically necessary for top-3 rankings in high-value practice areas in major metros (Los Angeles, New York, Chicago). We recommend auditing your current backlink profile before selecting a tier." },
      { q: "How is anchor text handled for law firm niche edits?", a: "Anchor text is one of the most important  -  and most risky  -  factors in niche edit link building. Over-optimized exact-match anchors (like 'personal injury lawyer Los Angeles') can trigger Penguin-style penalties if overdone. We use a mixed anchor strategy: branded, URL-format, partial-match, and occasional exact-match depending on your profile. You can specify preferred anchors and we will advise on whether the profile supports them." },
      { q: "What does the niche edit report include?", a: "You receive: the live URL of the page where your link was inserted, the anchor text used, the destination URL, the domain rating at insertion, and the date of publication. All placements are independently verifiable via Ahrefs, SEMrush, or your preferred SEO tool." },
      { q: "How many niche edits does a law firm need per month?", a: "This depends heavily on the competitiveness of your target keywords and your current DR. For firms competing for top-5 rankings on high-value practice-area keywords, a consistent monthly cadence of 4–10 placements (depending on tier) is common. Lower-competition markets may see meaningful results with 2–4 per month. The key is consistency over time, not one-time bursts." },
      { q: "Can I combine niche edits with blogger outreach?", a: "Yes  -  and for most law firms, this is the recommended strategy. Blogger outreach builds new content that can itself become a referring page over time, while niche edits give you immediate access to established authority. A balanced link profile using both tactics is more natural and resilient than relying on a single link type." },
    ],
    relatedProducts: ["blogger-outreach", "digital-pr-campaign", "content-writing"],
  },

  {
    slug: "content-writing",
    name: "Legal Content Writing",
    shortName: "Content Writing",
    category: "content",
    tagline: "SEO-optimized legal content written by human writers",
    description:
      "Professional legal content written by experienced writers who understand Your Money Your Life (YMYL) standards, practice-area terminology, and the keyword clusters that drive law firm organic traffic. Every article is optimized for natural language processing (NLP) signals, factually reviewed, and delivered ready to publish.",
    tiers: [
      { name: "Per Article", fatjoePrice: 20, ourPrice: 40, fatjoeDelivery: 4, ourDelivery: 7, note: "~1,000 words, Google Doc delivery, human-written" },
    ],
    features: [
      "Human-written by experienced legal content writers",
      "Optimized for natural language processing (NLP) signals and topical authority",
      "Your Money Your Life (YMYL) and E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) compliant",
      "Keyword cluster coverage per article",
      "Internal linking suggestions included",
      "Delivered as Google Doc (paste-ready for any CMS); HTML on request",
      "Unlimited revisions within 10-day amendment window",
      "Grammarly and Copyscape verified - 100% human-written, zero AI",
      "Optional Surfer SEO optimization targeting 80+ content score",
      "7-day delivery",
    ],
    faqs: [
      { q: "What types of legal content do you write?", a: "We write practice area pages, blog posts, FAQ sections, city/location pages, and pillar guides. Every piece is written with the specific legal practice area in mind  -  a personal injury content piece uses different terminology and keyword clusters than a criminal defense piece." },
      { q: "Is the content written by AI or humans?", a: "All content is written by human writers with experience in legal marketing. While we use AI for research and outline assistance, every piece is human-drafted, reviewed, and edited before delivery. This matters for YMYL content because Google applies heightened scrutiny to legal content quality." },
      { q: "How do you handle E-E-A-T for legal content?", a: "We include signals of experience and expertise through specific examples, accurate legal terminology, jurisdiction awareness, and proper attribution. We recommend pairing our content with attorney bylines, author bio pages, and client reviews to fully satisfy E-E-A-T requirements." },
      { q: "What word count do I get per article?", a: "Each article is approximately 800–1,200 words. For pillar pages or long-form guides, we recommend ordering multiple units and specifying a combined word count target. This gives your writer clear scope and allows for proper outline structure." },
      { q: "Can I specify target keywords and internal links?", a: "Yes. When placing your order, you provide your primary keyword, secondary keywords, and any internal linking targets. Our writers integrate these naturally without keyword stuffing." },
      { q: "Do you include FAQs and schema markup?", a: "We include a FAQ section in every piece where appropriate. If you need full FAQ schema markup, our team can deliver it formatted as JSON-LD ready to paste into your page template." },
      { q: "What format is the delivery?", a: "You receive a Word document (.docx) with proper heading hierarchy (H1, H2, H3) and clearly marked internal link suggestions. HTML format is available on request." },
    ],
    relatedProducts: ["content-plan", "keyword-research", "blogger-outreach"],
  },

  {
    slug: "keyword-research",
    name: "Law Firm Keyword Research",
    shortName: "Keyword Research",
    category: "content",
    tagline: "Data-driven keyword strategy for your practice area and market",
    description:
      "A comprehensive keyword research report tailored to your law firm's practice areas and geographic market. Includes volume, difficulty, intent classification, and a prioritized content roadmap so you know exactly which pages to build first.",
    tiers: [
      { name: "Standard", fatjoePrice: 157, ourPrice: 314, fatjoeDelivery: 3, ourDelivery: 6 },
    ],
    features: [
      "Up to 5,000 keywords across 5 topic clusters",
      "Ahrefs-sourced data: search volume, keyword difficulty, Cost Per Click (CPC), SERP features, search intent",
      "Intent classification (informational/navigational/transactional)",
      "Filterable white-label spreadsheet - downloadable from dashboard",
      "Current ranking positions for your domain included",
      "Competitor gap analysis",
      "Prioritized content roadmap",
      "Local and national keyword variants",
      "6-day delivery",
    ],
    faqs: [
      { q: "What does a law firm keyword research report include?", a: "Our report includes your primary and secondary keywords grouped by topic cluster, search volume, keyword difficulty scores, and a recommended prioritization based on your current domain authority and competition level. You also get competitor URL analysis showing which pages are currently ranking." },
      { q: "How is legal keyword research different from general SEO research?", a: "Legal keywords have distinct intent signals, extreme competition in major metros, and YMYL classification that changes how Google evaluates ranking signals. Our research specifically accounts for geo-modifier variants, practice-area sub-topic clusters, and high-value transactional queries that general keyword tools underweight." },
      { q: "How do I use the keyword report?", a: "The report serves as your content roadmap. Each keyword cluster maps to a recommended page type  -  practice area pages, city pages, or blog content. We provide a prioritized sequence based on difficulty and commercial value so you can systematically build topical authority." },
      { q: "Do you include local keyword data?", a: "Yes. Local variants (city + practice area + 'lawyer/attorney/firm') are included alongside national and long-tail variants. Local intent keywords often have lower difficulty and higher conversion rates for law firms serving specific geographic markets." },
      { q: "How fresh is the data?", a: "All research is conducted at time of order using current search volume and difficulty data. We recommend re-running keyword research annually or when entering new practice areas or markets." },
      { q: "Can you research multiple practice areas in one report?", a: "Standard research covers one primary practice area. For firms with multiple practice areas, order one report per area or contact us for a bundled multi-practice research package." },
      { q: "What if I already have an existing SEO strategy?", a: "Provide us with your existing keyword list and we will audit it for gaps, identify quick-win opportunities, and flag any targeting mismatches between what you are ranking for and what actually drives case inquiries." },
    ],
    relatedProducts: ["content-plan", "content-writing", "blogger-outreach"],
  },

  {
    slug: "content-plan",
    name: "Law Firm Content Plan",
    shortName: "Content Plan",
    category: "content",
    tagline: "A 6-12 month editorial calendar built for legal topical authority",
    description:
      "A complete editorial content plan that maps your keyword research into a structured publishing schedule. Includes topic clusters, pillar-cluster hierarchy, recommended word counts, and monthly content targets  -  everything you need to systematically build topical authority.",
    tiers: [
      { name: "Standard", fatjoePrice: 252, ourPrice: 504, fatjoeDelivery: 5, ourDelivery: 8 },
    ],
    features: [
      "Delivered as filterable spreadsheet with full topic cluster map",
      "Pillar page and cluster page hierarchy mapped with recommended word counts",
      "6-month publishing calendar",
      "Internal linking blueprint",
      "Priority sequencing by ROI potential",
      "8-day delivery",
    ],
    faqs: [
      { q: "What is a content plan for law firms?", a: "A content plan is a structured editorial calendar that tells you exactly what to publish, in what order, and at what depth. It is built around keyword clusters and topic hierarchies  -  ensuring that each new piece of content reinforces related pages and systematically builds your site's topical authority in the eyes of Google." },
      { q: "How is this different from keyword research?", a: "Keyword research identifies which terms to target. A content plan tells you how to execute on that data  -  what pages to build first, how they link together, and what format each piece should take. It is the execution layer on top of research." },
      { q: "Do I need keyword research before ordering a content plan?", a: "Ideally yes. If you have existing keyword research, share it with your order and we will build the plan around it. If you do not have research, we recommend ordering keyword research first  -  or ordering both together for a bundled approach." },
      { q: "What does the content plan output look like?", a: "You receive a spreadsheet with your content calendar, a topic cluster map showing pillar-to-cluster relationships, recommended page titles and primary keywords, and a priority score for each piece. This can be handed directly to a content team or writer." },
      { q: "Can the plan include both blog and service page content?", a: "Yes. A comprehensive plan covers practice area pages, location pages, blog articles, and FAQ content  -  sequenced to build topical signals efficiently. The ratio depends on your current site structure and gaps." },
      { q: "How long is the content plan designed to cover?", a: "Standard plans cover 6 months of content. For larger firms or multi-practice-area builds, we can extend to 12 months." },
      { q: "Can I request focus on a specific practice area?", a: "Absolutely. Just specify your primary practice area(s), target cities, and current publishing cadence in your order notes. The plan will be calibrated accordingly." },
    ],
    relatedProducts: ["keyword-research", "content-writing", "blogger-outreach"],
  },

  {
    slug: "citation-building",
    name: "Law Firm Citation Building",
    shortName: "Citation Building",
    category: "local-seo",
    tagline: "NAP-consistent directory citations for local map pack rankings",
    description:
      "Accurate, consistent Name-Address-Phone (NAP) citations across the top legal and local directories. Citation consistency is a foundational local SEO signal that directly impacts your Google Business Profile rankings and local map pack visibility.",
    tiers: [
      { name: "Standard", fatjoePrice: 94, ourPrice: 188, fatjoeDelivery: 7, ourDelivery: 10 },
    ],
    features: [
      "50+ top-tier directory submissions",
      "NAP consistency verification",
      "Legal-specific directories included (Avvo, FindLaw, etc.)",
      "Duplicate citation audit",
      "Submission report with live listings",
      "10-day delivery",
    ],
    faqs: [
      { q: "What are citations and why do law firms need them?", a: "Citations are online mentions of your law firm's Name, Address, and Phone number across directories, legal portals, and review sites. Google uses citation consistency as a local ranking signal  -  firms with consistent, widespread citations rank higher in the local map pack, which drives phone calls and form submissions directly." },
      { q: "Which directories are included?", a: "We submit to 50+ directories including Google Business Profile (if not already claimed), Bing Places, Yelp, Avvo, FindLaw, Martindale-Hubbell, Justia, Lawyers.com, and general directories like Manta, Hotfrog, and YellowPages." },
      { q: "What happens if I already have some citations?", a: "We audit existing citations first and suppress duplicates where possible. Any existing listings with incorrect information are flagged for correction." },
      { q: "How important are citations compared to backlinks?", a: "Citations and backlinks serve different purposes. Citations are a foundational local SEO signal that impacts map pack rankings. Backlinks drive organic (non-map) rankings and domain authority. Most law firms need both  -  citations first for local visibility, then ongoing link building for competitive organic rankings." },
      { q: "How long does it take for citations to affect rankings?", a: "Google typically processes citation signals within 4-12 weeks. Citation building is not a quick-win tactic  -  it is infrastructure that supports your long-term local presence." },
      { q: "Do you handle multi-location firms?", a: "Each location requires a separate citation order, as each office has its own NAP information and should be represented in location-specific directories." },
      { q: "What if my practice area isn't available in Avvo or similar directories?", a: "All major practice areas are covered by the legal directories we submit to. Any site that doesn't support your specific practice area is replaced with a comparable relevant directory." },
    ],
    relatedProducts: ["keyword-research", "content-writing", "blogger-outreach"],
  },

  {
    slug: "press-release",
    name: "Law Firm Press Release Distribution",
    shortName: "Press Release",
    category: "pr",
    tagline: "Credibility signals and branded mentions across news networks",
    description:
      "Professional press release writing and distribution for law firms. Build brand authority, earn news-site mentions, and signal E-E-A-T trustworthiness to Google through legitimate press coverage. Three tiers to match your distribution goals.",
    tiers: [
      { name: "Basic",    fatjoePrice: 119,  ourPrice: 238,  fatjoeDelivery: 7, ourDelivery: 10, note: "50-100 guaranteed news syndications" },
      { name: "Pro",      fatjoePrice: 378,  ourPrice: 756,  fatjoeDelivery: 7, ourDelivery: 10, note: "200+ syndications including AP-style national distribution" },
      { name: "Ultimate", fatjoePrice: 1360, ourPrice: 2720, fatjoeDelivery: 7, ourDelivery: 10, note: "400+ syndications, PR Newswire / Business Wire, multimedia support" },
    ],
    features: [
      "Professional press release writing",
      "Optimized for legal brand mentions",
      "Distribution across AP, PR Newswire, and regional outlets",
      "Permanent indexed news pickups",
      "Full distribution report",
      "10-day delivery",
    ],
    faqs: [
      { q: "What is press release distribution and why do law firms use it?", a: "Press release distribution sends a professionally written announcement to a network of news sites, wire services, and media outlets. For law firms, this creates branded news mentions that signal E-E-A-T authority to Google, build credibility with prospective clients who Google your firm name, and generate indexed backlinks from news domains." },
      { q: "What events warrant a press release for a law firm?", a: "Common law firm press releases cover: new attorney hires or partnerships, major case settlements or verdicts, office openings, community involvement or awards, new practice area launches, and legal commentary on significant local news events." },
      { q: "What is the difference between Basic, Pro, and Ultimate?", a: "The tiers differ primarily in distribution reach and outlet quality. Basic covers regional wire services and 50-100 news sites. Pro adds national AP-style distribution and 200+ pickups including higher-domain outlets. Ultimate includes premium wire services like PR Newswire or Business Wire with 400+ guaranteed placements and multimedia support." },
      { q: "Will the press release link back to my law firm website?", a: "Yes. Every press release includes links to your firm's website within the body content. The number and placement of links depends on the tier and the wire service's editorial guidelines." },
      { q: "Do press release backlinks help SEO directly?", a: "Press release links are typically nofollow or from news aggregation sites  -  they have limited direct ranking value. Their SEO value comes indirectly: brand mention signals, E-E-A-T credibility markers, and in some cases, journalists who pick up the story and write their own articles with dofollow links. The Ultimate tier maximizes this secondary coverage potential." },
      { q: "Do you write the press release or do I provide it?", a: "We write the press release for you. Provide the key facts, quotes, and announcement details and our writers produce a newsworthy release that adheres to AP style and meets wire service requirements." },
      { q: "How many news sites will pick up my press release?", a: "Basic tier: 50-100 guaranteed syndications. Pro tier: 200+ guaranteed. Ultimate tier: 400+ guaranteed. These are syndications to news networks  -  organic editorial pickup by journalists may add additional placements beyond the guarantee." },
    ],
    relatedProducts: ["brand-mentions", "digital-pr-campaign", "blogger-outreach"],
  },

  {
    slug: "brand-mentions",
    name: "Brand Mentions Campaign",
    shortName: "Brand Mentions",
    category: "pr",
    tagline: "Unlinked and linked brand mentions across high-authority publications",
    description:
      "Brand mentions place your law firm name in editorial content across high-authority websites  -  with or without a live hyperlink. Mention signals are a Google ranking factor and build the entity presence that supports long-term E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) authority for Your Money Your Life (YMYL) legal content.",
    tiers: [
      { name: "Standard", fatjoePrice: 2015, ourPrice: 4030, fatjoeDelivery: 14, ourDelivery: 17, note: "10-15 placements on DR30-60 editorial sites" },
    ],
    features: [
      "10-15 brand mention placements across DR30-60 editorial sites",
      "Sites with 1,000+ monthly organic visitors minimum",
      "Approximately 1,000-word articles incorporating your brand",
      "Mix of linked and unlinked mentions",
      "Contextual legal industry relevance",
      "Author attribution where possible",
      "White-label placement report with live URLs",
      "Lifetime replacement guarantee if any placement is removed",
      "17-day delivery",
    ],
    faqs: [
      { q: "What is a brand mention and why does Google care about it?", a: "A brand mention is any instance of your law firm's name appearing on another website  -  even without a hyperlink. Google treats unlinked mentions as implicit signals of brand authority. This is part of the entity-based ranking model where consistent brand mentions across credible sources signal that your firm is a real, trusted entity in the legal space." },
      { q: "Do unlinked mentions actually help rankings?", a: "Yes. Google has confirmed that co-citation and co-occurrence signals contribute to entity understanding and authority. For law firms competing on YMYL keywords, having your brand mentioned alongside relevant legal topics on high-authority sites helps establish topical authority even without direct link equity." },
      { q: "How is a brand mention different from a backlink?", a: "A backlink is a clickable link pointing to your website. A brand mention may or may not include a link  -  but both send authority signals. Brand mentions diversify your authority footprint beyond traditional link building and are harder for competitors to replicate." },
      { q: "What types of publications are used?", a: "We target editorial publications with DR50+ ratings, genuine readership, and content relevance to legal, business, or local market topics. We avoid press release distribution sites, article directories, and sites that openly accept sponsored content without editorial review." },
      { q: "Can I specify my brand name and firm location?", a: "Yes. Provide your exact brand name (as it should appear in citations), primary practice area, and target geography. This ensures mentions are contextually accurate and geo-relevant." },
      { q: "How many mentions are included?", a: "Standard campaign includes 10-15 brand mention placements across DR50+ sites. The exact number varies based on publisher availability and content fit." },
      { q: "How long does it take to see the effect of brand mentions?", a: "Brand mention campaigns typically show entity signals in Google's index within 4-8 weeks. Meaningful ranking impact may take 3-6 months as part of a broader authority-building strategy." },
    ],
    relatedProducts: ["digital-pr-campaign", "press-release", "blogger-outreach"],
  },

  {
    slug: "digital-pr-campaign",
    name: "Digital PR Campaign",
    shortName: "Digital PR",
    category: "pr",
    tagline: "High-authority editorial coverage on national publications",
    description:
      "A full digital PR campaign that earns editorial coverage on major national publications. The highest-authority link acquisition strategy available  -  ideal for law firms competing on the most valuable keywords in personal injury, mass tort, criminal defense, and other high-stakes practice areas.",
    tiers: [
      { name: "Standard", fatjoePrice: 4408, ourPrice: 8816, fatjoeDelivery: 42, ourDelivery: 45, note: "3-5 placements on DR70+ national publications" },
    ],
    features: [
      "3-5 placements on DR70+ national publications",
      "Editorially earned dofollow links",
      "Journalist-pitched story angles",
      "Legal industry expert quotes and data",
      "CSV placement report - white-label compatible",
      "Campaign progress updates throughout 45-day window",
      "45-day delivery",
    ],
    faqs: [
      { q: "What is a digital PR campaign for law firms?", a: "Digital PR is a link building strategy that earns editorial coverage on major publications through newsworthy story pitches rather than direct payment for links. A journalist writes a real article that cites your law firm as an expert source, source of data, or authority commentator  -  producing organic, editorially earned backlinks on sites like Forbes, Bloomberg, USA Today, and similar outlets." },
      { q: "Why is digital PR the most powerful link building strategy?", a: "Links from major publications carry far more ranking authority than any other type of backlink. A single link from a DR80+ publication like Forbes can have more impact than dozens of DR30 blogger outreach placements. For law firms targeting 'personal injury lawyer' or similar $100+ CPC keywords, even one or two digital PR placements can be transformative." },
      { q: "What story angles work for law firms?", a: "The most successful legal digital PR campaigns include: original research or surveys on legal topics, expert commentary on trending legal news, data analysis of court records or case outcomes, and human interest stories tied to significant cases. We develop the angle, write the pitch, and manage journalist outreach." },
      { q: "Is this paid placement or earned media?", a: "Earned media. We pitch journalists and editors with genuine story angles  -  we do not pay for the coverage directly. This produces the editorial links that carry the highest trust signals for Google." },
      { q: "What publications can I expect placement on?", a: "Target publications include major national outlets with DR70+ ratings. Specific placements depend on the story angle and journalist relationships at time of campaign. We provide a list of target publications with your campaign brief." },
      { q: "How many links does a digital PR campaign produce?", a: "A standard campaign targets 3-5 placements on major publications. Quality takes precedence over quantity  -  one Forbes link outweighs fifty DR20 placements in terms of ranking authority." },
      { q: "Why does digital PR take 45 days?", a: "Editorial lead times on major publications are long. Pitching, journalist follow-up, editorial approval, and publication scheduling typically takes 4-8 weeks. We provide campaign progress updates during this window." },
    ],
    relatedProducts: ["brand-mentions", "press-release", "blogger-outreach"],
  },

  {
    slug: "community-mentions",
    name: "Community Mentions",
    shortName: "Community Mentions",
    category: "pr",
    tagline: "Forum and community brand presence for entity authority",
    description:
      "Community mention campaigns build your law firm's brand presence across forums, Q&A platforms, and community sites. These unlinked citations diversify your entity footprint and complement traditional link building with the kind of organic mention patterns real authoritative brands accumulate.",
    tiers: [
      { name: "Standard", fatjoePrice: 630, ourPrice: 1260, fatjoeDelivery: 30, ourDelivery: 33 },
    ],
    features: [
      "Mentions on Reddit, Quora, and niche forums",
      "Natural, contextually integrated placements",
      "Legal topic relevance screening",
      "Brand entity consistency",
      "Full placement report",
      "33-day delivery",
    ],
    faqs: [
      { q: "What are community mentions?", a: "Community mentions are natural brand references placed within forum discussions, Q&A threads, and community platforms like Reddit and Quora. When someone asks about 'best personal injury lawyer in Denver' and your firm is mentioned contextually, this creates an organic citation pattern that reinforces your brand entity for Google." },
      { q: "How do community mentions help law firm SEO?", a: "Google uses entity signals from across the web  -  including community discussions  -  to build its understanding of a brand's relevance and reputation. Community mentions complement your formal link building by creating the kind of organic, user-driven mention patterns that real established firms naturally accumulate." },
      { q: "Are these real discussion placements?", a: "Yes. Placements are made within active community threads where the context is genuinely relevant to your practice area and market. We do not create spam posts or fake threads." },
      { q: "What platforms are used?", a: "Primary platforms include Reddit (legal subreddits, city subreddits), Quora (legal questions), and niche legal community forums. Platform mix is selected based on where your target audience is most active." },
      { q: "Are community mentions do-follow or no-follow?", a: "Most community platforms use nofollow or ugc link attributes. The value of community mentions is not direct link equity  -  it is entity signal diversity and the natural brand mention footprint that reinforces your authority across multiple source types." },
      { q: "Can I specify geographic markets for the mentions?", a: "Yes. Provide your target city and practice area and we will prioritize placement in geographically relevant discussions." },
      { q: "How long does the campaign take?", a: "33 days, including research, opportunity identification, and placement. This extended timeline reflects the need to find and participate in relevant active community discussions rather than creating new ones." },
    ],
    relatedProducts: ["brand-mentions", "press-release", "blogger-outreach"],
  },

  {
    slug: "explainer-videos",
    name: "Legal Explainer Videos",
    shortName: "Explainer Videos",
    category: "video-design",
    tagline: "Professional animated explainer videos for law firm websites",
    description:
      "Professional animated explainer videos that simplify complex legal concepts for prospective clients. Increase on-page dwell time, improve conversion rates on practice area pages, and create shareable video content that builds your firm's digital presence.",
    tiers: [
      { name: "Standard", fatjoePrice: 189, ourPrice: 378, fatjoeDelivery: 7, ourDelivery: 10 },
    ],
    features: [
      "Professional voiceover included",
      "Custom script written for your practice area",
      "Animated motion graphics",
      "HD output (1080p)",
      "Multiple format export (MP4, WebM)",
      "10-day delivery",
    ],
    faqs: [
      { q: "What types of explainer videos work for law firms?", a: "The most effective law firm explainer videos address: what to do after a car accident, how the personal injury process works, what to expect in a criminal defense case, how to choose a lawyer, and practice-area-specific FAQs. These answer questions prospective clients are already searching for." },
      { q: "How do explainer videos help my SEO?", a: "Videos increase average time on page  -  a quality signal Google uses. Video content also appears in Google Video search results and can earn backlinks when shared or embedded by other sites. Adding video to a practice area page can significantly improve its conversion rate alongside its search performance." },
      { q: "Do I provide the script or do you write it?", a: "We write the script based on your practice area and any talking points you provide. You review and approve before production begins." },
      { q: "What is the typical video length?", a: "Standard explainer videos run 60-90 seconds  -  optimal for web embedding and viewer retention. Longer formats are available on request." },
      { q: "Can I use the video on YouTube and social media?", a: "Yes. You receive full rights to the video in multiple formats suitable for website embedding, YouTube, LinkedIn, and social media posting." },
      { q: "Will the video be branded with my law firm's colors and logo?", a: "Yes. Provide your brand assets and we incorporate your color scheme, logo, and firm name into the final production." },
      { q: "Can I get multiple videos at a discount?", a: "Multi-video packages are available. Contact us for pricing on video series orders." },
    ],
    relatedProducts: ["blog-to-video", "infographic-design", "content-writing"],
  },

  {
    slug: "blog-to-video",
    name: "Blog to Video Conversion",
    shortName: "Blog to Video",
    category: "video-design",
    tagline: "Turn your existing blog posts into professional videos",
    description:
      "Convert your existing legal blog posts and articles into professional summary videos. Maximize the ROI from your content investment by repurposing written content into video format for YouTube, social media, and on-page engagement.",
    tiers: [
      { name: "Standard", fatjoePrice: 126, ourPrice: 252, fatjoeDelivery: 7, ourDelivery: 10 },
    ],
    features: [
      "Script adapted from your existing blog post",
      "Professional voiceover narration",
      "On-screen text and motion graphics",
      "HD output (1080p)",
      "YouTube and social media optimized",
      "10-day delivery",
    ],
    faqs: [
      { q: "What is blog to video conversion?", a: "Blog to video conversion takes your existing written content and transforms it into a narrated video summarizing the key points. This is one of the highest-ROI content investments for law firms  -  you have already created the content, now you are extending its reach and longevity." },
      { q: "What types of blog posts work best?", a: "How-to guides, FAQ posts, listicles, and case study narratives convert particularly well to video format. Highly technical legal analysis may need simplification for video consumption." },
      { q: "Do I need to provide any materials?", a: "Just the URL or text of the blog post. We handle script adaptation, voiceover, and production." },
      { q: "How long will the video be?", a: "Videos typically run 1-3 minutes depending on the length of the source article. We condense the core content into the most engaging format for video consumption." },
      { q: "Can I use this for YouTube SEO?", a: "Yes. We include YouTube-optimized titles, descriptions, and tags in your delivery package. Video SEO for legal keywords on YouTube is an underutilized channel with significant opportunity." },
      { q: "Will the video match my firm's branding?", a: "Yes. Provide your logo and brand colors and we incorporate them into the visual design." },
      { q: "Can I order multiple conversions at once?", a: "Yes. If you have a library of blog content, we can batch-process multiple articles. Contact us for volume pricing." },
    ],
    relatedProducts: ["explainer-videos", "infographic-design", "content-writing"],
  },

  {
    slug: "infographic-design",
    name: "Legal Infographic Design",
    shortName: "Infographic Design",
    category: "video-design",
    tagline: "Shareable legal infographics that earn links and engagement",
    description:
      "Professional infographic design for law firm content marketing. Visual data summaries earn more backlinks, social shares, and media coverage than text-only content  -  making infographics one of the most cost-effective linkable asset strategies for legal sites.",
    tiers: [
      { name: "Standard", fatjoePrice: 119, ourPrice: 238, fatjoeDelivery: 7, ourDelivery: 10 },
    ],
    features: [
      "Custom professional design",
      "Data visualization and iconography",
      "Legal industry visual style",
      "High-resolution export (PNG + PDF)",
      "Embed code for easy sharing",
      "10-day delivery",
    ],
    faqs: [
      { q: "Why do law firms use infographics for SEO?", a: "Infographics are highly shareable and linkable  -  which makes them one of the most effective linkable asset types. When you create a visually compelling infographic about 'steps to take after a car accident' or 'how long personal injury cases take,' other websites embed or reference it with a link back to your site. This organic link acquisition compounds over time." },
      { q: "What data or content do I need to provide?", a: "Provide the core data, stats, or process you want visualized. We handle research to supplement your data with publicly available sources where needed, then design the visual layout from scratch." },
      { q: "What infographic formats work best for law firms?", a: "Process infographics (steps to file a lawsuit), statistical infographics (accident statistics by city), timeline infographics (how long a case takes), and comparison infographics (different case types or fee structures) tend to perform best for law firm link building and social engagement." },
      { q: "Can I use the infographic on social media?", a: "Yes. You receive a high-resolution PNG suitable for social media, a PDF for print, and an HTML embed code for website placement." },
      { q: "Do infographic designs include my firm's branding?", a: "Yes. Provide your logo, brand colors, and fonts and we design to your visual identity." },
      { q: "How do I use the infographic for link building?", a: "Beyond embedding on your own site, you can pitch the infographic to legal blogs, local news sites, and industry publications. Including an embed code in an outreach email increases pickup rates significantly." },
      { q: "Can I request revisions?", a: "One round of revisions is included. Additional revisions are available at a flat fee." },
    ],
    relatedProducts: ["explainer-videos", "blog-to-video", "content-writing"],
  },

  {
    slug: "multilingual-links",
    name: "Multilingual Link Building",
    shortName: "Multilingual Links",
    category: "link-building",
    tagline: "DA10+ backlinks from Spanish and multilingual law firm sites",
    description:
      "Multilingual link building places your backlinks on non-English websites  -  primarily Spanish-language sites for law firms serving Latino communities. This opens an underserved authority channel for practices where Spanish-speaking clientele represent a major opportunity.",
    tiers: [
      { name: "DA10+", fatjoePrice: 252, ourPrice: 504, fatjoeDelivery: 21, ourDelivery: 24 },
    ],
    features: [
      "Spanish and multilingual publisher network",
      "Legal and community-relevant sites",
      "Dofollow editorial links",
      "Anchor text in target language",
      "Full placement report",
      "24-day delivery",
    ],
    faqs: [
      { q: "What is multilingual link building for law firms?", a: "Multilingual link building earns backlinks from websites published in languages other than English  -  most commonly Spanish for US law firms. These links come from Hispanic community news sites, Spanish-language legal blogs, and bilingual directories, and they contribute to your overall domain authority while opening a distinct authority channel." },
      { q: "Which law firms benefit most from multilingual link building?", a: "Law firms serving large Spanish-speaking client populations benefit most  -  particularly personal injury, immigration, criminal defense, and workers' compensation practices in states like California, Texas, Florida, and New York where Hispanic communities represent a significant potential client base." },
      { q: "Does Google count links from non-English sites?", a: "Yes. Domain authority and link equity are language-agnostic. A link from a high-authority Spanish-language site passes the same type of authority signal as an equivalent English-language site. There is no SEO disadvantage to multilingual links." },
      { q: "What language is the anchor text?", a: "Anchor text is in the target language by default. We can also accommodate English anchor text in bilingual contexts where it reads naturally." },
      { q: "Do I need Spanish-language content on my site for this to work?", a: "Not necessarily. Your linked target page can be in English. However, if you have Spanish-language pages or a bilingual site, multilingual links pointing to those specific pages are especially powerful for bilingual local SEO." },
      { q: "How does DA differ from DR?", a: "DA (Domain Authority) is a Moz metric; DR (Domain Rating) is an Ahrefs metric. Both measure link authority on a 0-100 scale with similar intent. Our multilingual links are screened using DA, while other products use DR  -  both are legitimate authority signals." },
      { q: "Can I combine multilingual links with English-language link building?", a: "Absolutely. Multilingual links complement English link building by diversifying your backlink profile's geographic and linguistic distribution  -  a pattern associated with naturally authoritative sites." },
    ],
    relatedProducts: ["blogger-outreach", "niche-edits", "brand-mentions"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
