// components/Portfolio.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type Tile = {
  title: string;
  slug: string;        // used for the link: /portfolio/<slug> or /services/<slug>
  src: string;         // path inside /public, e.g. /portfolio-1.jpg
  alt?: string;
};

const TILES: Tile[] = [
  { title: "Branding & Design", slug: "branding-design", src: "/portfolio-1.jpg", alt: "Designer working on branding" },
  { title: "Web & Product", slug: "web-product", src: "/portfolio-2.jpg", alt: "Code on screen" },
  { title: "Digital Strategy", slug: "digital-strategy", src: "/portfolio-3.jpg", alt: "UI icons overlay" },
  { title: "Social Campaigns", slug: "social-campaigns", src: "/portfolio-4.jpg", alt: "social media hands" },
  { title: "Video & Filmmaking", slug: "video-filmmaking", src: "/portfolio-5.jpg", alt: "camera in studio" },
  { title: "AI & Creative", slug: "ai-creative", src: "/portfolio-6.jpg", alt: "robot and painting" },
  { title: "Collaborations", slug: "collaborations", src: "/portfolio-7.jpg", alt: "team stacking hands" },
  { title: "Workspaces", slug: "workspaces", src: "/portfolio-8.jpg", alt: "team in office" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <p className="section-heading-eyebrow">Our Porolio</p>
      <h2 className="section-heading-title">Our Work Speaks Louder</h2>

      <div className="portfolio-grid">
        {TILES.map((t) => (
          <div key={t.slug} className="portfolio-item">
            {/* Wrap with Link so the whole tile is clickable and keyboard-focusable */}
            <Link href={`/portfolio/${t.slug}`} className="portfolio-link" aria-label={`Open ${t.title} case study`}>
              <div className="portfolio-img-wrap">
                <Image src={t.src} alt={t.alt ?? t.title} width={1200} height={700} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-inner">
                    <div className="portfolio-title">{t.title}</div>
                    <div className="portfolio-cta">View Case</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="portfolio-view-all">
        <Link href="/portfolio" className="btn-outline portfolio-view-all-link">View All →</Link>
      </div>
    </section>
  );
}