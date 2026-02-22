import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Law Firm SEO Checklist - Complete 2026 Technical & Content Audit | Attorney Authority",
  description:
    "A complete law firm SEO checklist for 2026. Technical SEO, on-page optimization, Google Business Profile, citation building, E-E-A-T content, link profile, and tracking setup.",
  alternates: {
    canonical: "https://attorneyauthority.com/guides/law-firm-seo-checklist",
  },
  openGraph: {
    title: "Law Firm SEO Checklist - Complete 2026 Technical & Content Audit | Attorney Authority",
    description:
      "A structured audit covering every layer of law firm SEO - from title tags and schema to Core Web Vitals and backlink acquisition. Use this as your quarterly review framework.",
    images: [{ url: "/og/law-firm-seo-checklist.png", width: 1200, height: 630 }],
  },
};

const toc = [
  { id: "technical-seo", label: "Technical SEO checklist" },
  { id: "on-page", label: "On-page optimization checklist" },
  { id: "gbp", label: "Google Business Profile checklist" },
  { id: "citations", label: "Citation and local SEO checklist" },
  { id: "content", label: "Content checklist (E-E-A-T)" },
  { id: "link-profile", label: "Link profile checklist" },
  { id: "tracking", label: "Tracking and reporting checklist" },
];

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-5 h-5 border-2 border-amber-400 rounded shrink-0 mt-0.5 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-sm" />
      </div>
      <span className="text-sm text-gray-700 leading-relaxed">{children}</span>
    </li>
  );
}

function SectionHeader({ id, number, title }: { id: string; number: number; title: string }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
      <span className="w-9 h-9 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center text-base font-bold shrink-0">
        {number}
      </span>
      {title}
    </h2>
  );
}

export default function LawFirmSeoChecklistPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Guides", href: "/guides" },
              { label: "Law Firm SEO Checklist", href: "/guides/law-firm-seo-checklist" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              2026 checklist
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              7 audit categories
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              ~12 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Law Firm SEO Checklist - Complete 2026 Technical &amp; Content Audit
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            A structured audit covering every layer of law firm SEO - from title tags
            and schema markup to Core Web Vitals and backlink acquisition. Use this as
            your quarterly review framework to find and fix the gaps before competitors do.
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section className="py-10 px-4 bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-amber-900 uppercase tracking-wide mb-4">
            Checklist Sections
          </h2>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-amber-800 hover:text-amber-600 flex items-start gap-2"
                >
                  <span className="font-bold shrink-0">{i + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Checklist content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Section 1: Technical SEO */}
          <div id="technical-seo">
            <SectionHeader id="technical-seo" number={1} title="Technical SEO Checklist" />
            <p className="text-gray-600 mb-6 text-sm">
              Technical SEO is the foundation everything else depends on. If Google
              cannot crawl, index, and render your pages correctly, no amount of content
              or links will produce results.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <ul className="space-y-3">
                <CheckItem>
                  <strong>HTTPS everywhere:</strong> All pages load over HTTPS with no mixed
                  content warnings. Non-HTTPS law firm sites are treated as untrusted by
                  browsers and lose Google trust signals.
                </CheckItem>
                <CheckItem>
                  <strong>Sitemap submitted:</strong> XML sitemap is submitted in Google
                  Search Console and contains only indexable pages (no noindex pages, no
                  404 URLs).
                </CheckItem>
                <CheckItem>
                  <strong>Robots.txt verified:</strong> Robots.txt file does not block
                  important pages from being crawled. Check that practice area pages, blog
                  posts, and location pages are accessible.
                </CheckItem>
                <CheckItem>
                  <strong>Core Web Vitals passing:</strong> Check the Core Web Vitals
                  report in Google Search Console. All key pages should show &ldquo;Good&rdquo;
                  status for LCP (Largest Contentful Paint), FID/INP, and CLS (Cumulative
                  Layout Shift).
                </CheckItem>
                <CheckItem>
                  <strong>Mobile usability:</strong> Run key pages through Google&apos;s
                  Mobile Usability test. No touchpoint spacing errors, no content wider
                  than viewport. Legal research increasingly happens on mobile.
                </CheckItem>
                <CheckItem>
                  <strong>Page speed:</strong> Target under 3 seconds load time on mobile
                  connections. Large image files, unused JavaScript, and render-blocking
                  resources are the most common culprits on law firm sites.
                </CheckItem>
                <CheckItem>
                  <strong>Canonical tags:</strong> Every page has a canonical tag pointing
                  to itself (or to the preferred version). Check for duplicate content
                  issues - especially city page variants and practice area page near-duplicates.
                </CheckItem>
                <CheckItem>
                  <strong>Schema markup:</strong> Key pages include appropriate schema:
                  LocalBusiness or LegalService schema on the homepage, Attorney schema on
                  attorney profile pages, FAQPage schema on FAQ sections.
                </CheckItem>
                <CheckItem>
                  <strong>No crawl errors:</strong> Coverage report in Google Search Console
                  shows zero server errors (5xx) and zero soft 404s on important pages.
                </CheckItem>
                <CheckItem>
                  <strong>Internal links to key pages:</strong> Every important practice
                  area page receives internal links from at least 3 other pages on the site
                  with descriptive anchor text.
                </CheckItem>
              </ul>
            </div>
          </div>

          {/* Section 2: On-Page */}
          <div id="on-page">
            <SectionHeader id="on-page" number={2} title="On-Page Optimization Checklist" />
            <p className="text-gray-600 mb-6 text-sm">
              On-page optimization tells Google what your pages are about and signals
              content quality. For YMYL legal pages, these signals are evaluated under
              higher scrutiny.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <ul className="space-y-3">
                <CheckItem>
                  <strong>Title tags include primary keyword:</strong> Each practice area
                  page title tag includes the target keyword near the front of the tag.
                  Format: &ldquo;Practice Area Keyword | Firm Name - City&rdquo; (under 60 characters).
                </CheckItem>
                <CheckItem>
                  <strong>Meta descriptions are unique and compelling:</strong> Every page
                  has a unique meta description that includes the primary keyword and a
                  clear value proposition. No duplicated meta descriptions across location
                  pages or practice area variants.
                </CheckItem>
                <CheckItem>
                  <strong>H1 is present and unique:</strong> One H1 per page, containing
                  the primary keyword. The H1 should directly match search intent for the
                  target query.
                </CheckItem>
                <CheckItem>
                  <strong>H2s create clear page structure:</strong> Subheadings organize
                  content for both readers and Google. Use H2s to cover the key subtopics
                  a searcher would expect to find on the page.
                </CheckItem>
                <CheckItem>
                  <strong>Primary keyword in first 100 words:</strong> The target keyword
                  appears naturally within the first paragraph. This is a basic on-page
                  signal Google has used for decades.
                </CheckItem>
                <CheckItem>
                  <strong>No keyword stuffing:</strong> Keywords appear at a natural density.
                  Reading the content aloud - does it sound like something a lawyer would
                  actually write, or a keyword list with sentences around it?
                </CheckItem>
                <CheckItem>
                  <strong>Image alt text descriptive and accurate:</strong> All images have
                  alt text that accurately describes the image. Do not keyword-stuff alt text.
                </CheckItem>
                <CheckItem>
                  <strong>URL structure is clean and keyword-inclusive:</strong> URLs use
                  hyphens, include the primary keyword, and avoid unnecessary parameters or
                  trailing numbers. Example: /practice-areas/personal-injury-lawyer-chicago.
                </CheckItem>
                <CheckItem>
                  <strong>Content addresses full search intent:</strong> The page answers
                  the questions a prospective client would have, not just the keyword.
                  What happens next? What does it cost? How long does it take?
                </CheckItem>
                <CheckItem>
                  <strong>Phone number and CTA visible above fold:</strong> Practice area
                  pages should have a clear call to action and contact mechanism visible
                  without scrolling on mobile.
                </CheckItem>
              </ul>
            </div>
          </div>

          {/* Section 3: GBP */}
          <div id="gbp">
            <SectionHeader id="gbp" number={3} title="Google Business Profile Checklist" />
            <p className="text-gray-600 mb-6 text-sm">
              Google Business Profile (formerly Google My Business) is the primary driver
              of local map pack rankings. For law firms serving a local market, this is
              often the highest-ROI SEO asset to optimize.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <ul className="space-y-3">
                <CheckItem>
                  <strong>Profile is verified and owned:</strong> Your GBP listing is
                  claimed and verified via postcard, phone, or video verification. Unclaimed
                  listings cannot be edited and may be populated with incorrect information.
                </CheckItem>
                <CheckItem>
                  <strong>Business name exactly matches your official name:</strong> The
                  GBP name must match your website, bar association listing, and all
                  directory citations exactly. Do not add keywords to your business name
                  (a Google quality violation).
                </CheckItem>
                <CheckItem>
                  <strong>Primary and secondary categories set correctly:</strong> Primary
                  category should be the most specific applicable category (e.g., &ldquo;Personal
                  Injury Attorney&rdquo; not just &ldquo;Lawyer&rdquo;). Add relevant secondary categories
                  for additional practice areas.
                </CheckItem>
                <CheckItem>
                  <strong>Service area configured (if applicable):</strong> For firms that
                  serve clients across a region rather than requiring office visits, service
                  area is set and accurate.
                </CheckItem>
                <CheckItem>
                  <strong>Hours are accurate and complete:</strong> Business hours are
                  correct including holiday hours. If you offer 24/7 emergency contact,
                  this is reflected.
                </CheckItem>
                <CheckItem>
                  <strong>All services listed:</strong> Use the Services section to list
                  every practice area. Include brief service descriptions. This directly
                  influences which searches your profile appears for.
                </CheckItem>
                <CheckItem>
                  <strong>Photos uploaded (10+ minimum):</strong> Profile photo, cover
                  photo, office exterior, office interior, and attorney headshots at minimum.
                  GBP listings with more photos receive more profile views.
                </CheckItem>
                <CheckItem>
                  <strong>Review response rate is 100%:</strong> Respond to every review -
                  both positive and negative. Review response is a visible trust signal and
                  a local ranking factor.
                </CheckItem>
                <CheckItem>
                  <strong>Review count and rating competitive:</strong> Check competitor
                  GBP listings in your market. If top competitors have 100+ reviews and
                  you have 15, this is a priority gap. Build a systematic review request
                  process into your intake workflow.
                </CheckItem>
                <CheckItem>
                  <strong>Posts published monthly:</strong> GBP Posts (events, updates,
                  offers) keep your profile active. Publish at least 2-4 posts per month
                  highlighting case results, awards, legal updates, or client resources.
                </CheckItem>
              </ul>
            </div>
          </div>

          {/* Section 4: Citations */}
          <div id="citations">
            <SectionHeader id="citations" number={4} title="Citation and Local SEO Checklist" />
            <p className="text-gray-600 mb-6 text-sm">
              Citations (consistent mentions of your NAP - Name, Address, Phone number
              across directories) are a foundational local ranking signal. Inconsistencies
              between citations and your GBP confuse Google and suppress local rankings.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <ul className="space-y-3">
                <CheckItem>
                  <strong>NAP is consistent everywhere:</strong> Your firm name, address,
                  and phone number are formatted identically across your website, GBP, and
                  all directory listings. Abbreviation inconsistencies (St. vs Street, Ste
                  vs Suite) count as mismatches.
                </CheckItem>
                <CheckItem>
                  <strong>Listed in core legal directories:</strong> Avvo, FindLaw,
                  Martindale-Hubbell, Justia, Lawyers.com, and Super Lawyers profiles are
                  claimed, accurate, and complete.
                </CheckItem>
                <CheckItem>
                  <strong>Listed in major general directories:</strong> Yelp, Bing Places,
                  Apple Maps, Yellow Pages, and Manta at minimum. These aggregate signals
                  reinforce GBP authority.
                </CheckItem>
                <CheckItem>
                  <strong>50+ total citations built:</strong> Firms with fewer than 50
                  directory citations typically rank below competitors who have invested in
                  citation building. This is foundational infrastructure.
                </CheckItem>
                <CheckItem>
                  <strong>Duplicate listings suppressed:</strong> Check Moz Local or
                  BrightLocal for duplicate listings. Multiple GBP listings for the same
                  location, or duplicate Avvo profiles, dilute your citation signals.
                </CheckItem>
                <CheckItem>
                  <strong>Multi-location NAP managed separately:</strong> Each office
                  location has its own GBP listing, its own set of directory citations,
                  and its own location page on your website.
                </CheckItem>
                <CheckItem>
                  <strong>Bar association profile complete:</strong> State bar association
                  attorney profile is current, links to your website, and includes all
                  practice areas. This is a highly trusted legal citation.
                </CheckItem>
              </ul>
            </div>
          </div>

          {/* Section 5: Content */}
          <div id="content">
            <SectionHeader id="content" number={5} title="Content Checklist (E-E-A-T)" />
            <p className="text-gray-600 mb-6 text-sm">
              For YMYL legal content, E-E-A-T compliance is not optional - it is the
              quality standard Google applies to determine whether your content deserves
              to rank.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <ul className="space-y-3">
                <CheckItem>
                  <strong>Practice area pages are comprehensive:</strong> Each practice
                  area page covers the full scope a prospective client would expect: process
                  overview, what to expect, costs/fees, timeline, and why to choose your
                  firm. Minimum 1,000 words; competitive pages often need 1,500-2,500.
                </CheckItem>
                <CheckItem>
                  <strong>Attorney bylines on all content:</strong> Articles and practice
                  area pages are attributed to named attorneys with credentials. Author bio
                  pages exist for each attorney listed as an author.
                </CheckItem>
                <CheckItem>
                  <strong>Author bio pages are substantive:</strong> Each attorney bio page
                  lists education, bar admissions, years of experience, case results, and
                  professional memberships. This is a direct E-E-A-T signal for legal content.
                </CheckItem>
                <CheckItem>
                  <strong>Content is accurate and current:</strong> Legal information
                  changes. Review practice area pages annually to verify that laws, fees,
                  and procedures described are still accurate in your jurisdiction.
                </CheckItem>
                <CheckItem>
                  <strong>Topical authority through content clusters:</strong> Each major
                  practice area has a pillar page plus supporting cluster content (FAQs,
                  specific sub-topics, city variants). Isolated single pages do not build
                  topical authority.
                </CheckItem>
                <CheckItem>
                  <strong>FAQ sections with schema markup:</strong> Practice area pages and
                  blog posts include FAQ sections with FAQPage JSON-LD schema. This enables
                  Google FAQ rich results in SERPs.
                </CheckItem>
                <CheckItem>
                  <strong>Content is human-written:</strong> For YMYL legal content,
                  Google applies heightened scrutiny to automatically generated content.
                  Verify that all published content is written or thoroughly reviewed by
                  human legal writers.
                </CheckItem>
                <CheckItem>
                  <strong>Publishing cadence is consistent:</strong> Fresh content signals
                  an active, maintained website. Aim for at minimum 2-4 new pieces per
                  month - even shorter FAQ or blog posts count.
                </CheckItem>
              </ul>
            </div>
          </div>

          {/* Section 6: Link Profile */}
          <div id="link-profile">
            <SectionHeader id="link-profile" number={6} title="Link Profile Checklist" />
            <p className="text-gray-600 mb-6 text-sm">
              Your backlink profile is the primary off-page ranking factor for competitive
              legal keywords. Use Ahrefs or SEMrush to run these checks quarterly.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <ul className="space-y-3">
                <CheckItem>
                  <strong>Domain Rating benchmarked against competitors:</strong> Pull your
                  DR and compare to the top 3 results for your primary target keyword. The
                  gap tells you how much link building investment is needed to compete.
                </CheckItem>
                <CheckItem>
                  <strong>Referring domain count trending up:</strong> Open the Referring
                  Domains report and verify consistent month-over-month growth. Flat or
                  declining referring domains means you are losing links as fast as you
                  gain them.
                </CheckItem>
                <CheckItem>
                  <strong>DR distribution is natural:</strong> You should have links across
                  DR ranges - not all DR10-20 and not unnaturally concentrated at DR60+.
                  A mix weighted toward lower DR with mid-tier and high-DR links is natural.
                </CheckItem>
                <CheckItem>
                  <strong>Anchor text profile is diverse:</strong> Check the Anchors report.
                  Branded anchors should make up 40-50% of your profile. Exact-match
                  commercial anchors should not exceed 10-15% of total anchors.
                </CheckItem>
                <CheckItem>
                  <strong>No toxic or spammy backlinks:</strong> Review the Backlinks report
                  sorted by DR ascending. Flag any links from obvious spam domains, PBN
                  networks, adult/gambling sites, or sites with zero organic traffic.
                </CheckItem>
                <CheckItem>
                  <strong>Key pages have internal links:</strong> Every important practice
                  area page and every page you are actively trying to rank should have
                  internal links from multiple other pages on the site.
                </CheckItem>
                <CheckItem>
                  <strong>Disavow file current:</strong> If you have previously identified
                  genuinely toxic links, ensure your disavow file in Google Search Console
                  is current and not accidentally including legitimate links.
                </CheckItem>
                <CheckItem>
                  <strong>Monthly link acquisition in progress:</strong> You are actively
                  building 4-15+ quality links per month depending on your competitive
                  target. Link building is not a one-time project.
                </CheckItem>
              </ul>
            </div>
          </div>

          {/* Section 7: Tracking */}
          <div id="tracking">
            <SectionHeader id="tracking" number={7} title="Tracking and Reporting Checklist" />
            <p className="text-gray-600 mb-6 text-sm">
              You cannot optimize what you do not measure. These tools and setups give you
              the visibility to know whether your SEO investment is producing results.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <ul className="space-y-3">
                <CheckItem>
                  <strong>Google Search Console verified and active:</strong> GSC is set up,
                  domain ownership verified, and sitemap submitted. You are reviewing the
                  Performance report at least monthly.
                </CheckItem>
                <CheckItem>
                  <strong>Google Analytics 4 installed and configured:</strong> GA4 is
                  installed on all pages. Key events (contact form submissions, phone number
                  clicks, chat initiations) are tracked as conversion events.
                </CheckItem>
                <CheckItem>
                  <strong>Rank tracking active for 10-20 keywords:</strong> A rank tracking
                  tool (Ahrefs Rank Tracker, SEMrush Position Tracking, or equivalent)
                  monitors your primary target keywords weekly.
                </CheckItem>
                <CheckItem>
                  <strong>Call tracking distinguishes organic from paid:</strong> If you run
                  both organic SEO and paid ads, call tracking with source attribution
                  (CallRail or equivalent) separates organic-sourced calls from paid.
                </CheckItem>
                <CheckItem>
                  <strong>Ahrefs or SEMrush linked to your domain:</strong> You have Ahrefs
                  Webmaster Tools or SEMrush set up for your domain to track DR, referring
                  domains, and new/lost backlinks monthly.
                </CheckItem>
                <CheckItem>
                  <strong>Monthly SEO review cadence:</strong> You review key metrics every
                  month: organic clicks (GSC), average position for target keywords, new
                  referring domains, and contact form/call volume from organic.
                </CheckItem>
                <CheckItem>
                  <strong>Attribution model includes organic touch points:</strong> Your
                  intake team records how new clients found the firm. Organic search should
                  be a tracked intake source so you can calculate organic case acquisition
                  cost versus paid.
                </CheckItem>
              </ul>
            </div>
          </div>

          {/* Summary callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-amber-700" />
              How to prioritize this checklist
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed mb-3">
              Not all checklist items are equal in impact. If you are starting from scratch
              or doing a first audit, prioritize in this order:
            </p>
            <ol className="space-y-1">
              {[
                "Fix technical crawl/index errors (coverage report in GSC)",
                "Set up Google Search Console and Google Analytics 4 if not done",
                "Optimize title tags and H1s on your top 5-10 priority pages",
                "Verify and complete your Google Business Profile",
                "Build citations to 50+ directories",
                "Begin consistent monthly link building",
                "Publish content on a consistent schedule",
              ].map((step, i) => (
                <li key={step} className="text-sm text-amber-800 flex items-start gap-2">
                  <span className="font-bold shrink-0 text-amber-700">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        headline="Ready to close the gaps in your law firm's SEO?"
        subheadline="From keyword research to link building to content writing - transparent per-project pricing with no monthly retainer required."
        primaryCta={{ label: "View All Services", href: "/services/law-firm-link-building" }}
        secondaryCta={{ label: "Browse Pricing", href: "/pricing" }}
      />
    </>
  );
}
