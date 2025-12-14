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
  { title: "Graphic Design", slug: "", src: "/portfolio2/P1.svg", alt: "Designer working on branding" },
  { title: "Web Development", slug: "", src: "/portfolio2/P2.svg", alt: "Code on screen" },
  { title: "Branding & Strategy", slug: "", src: "/portfolio2/P3.svg", alt: "UI icons overlay" },
  { title: "Digital Marketing", slug: "", src: "/portfolio2/Digital Marketing (2).svg", alt: "social media hands" },
  { title: "Video Composition", slug: "", src: "/portfolio2/Video Composition (1).svg", alt: "camera in studio" },
  { title: "Creative AI Collaboration", slug: "", src: "/portfolio2/Creative AI Collaboration (1).svg", alt: "robot and painting" },
  { title: "Cultural Strategy", slug: "", src: "/portfolio2/Cultural Strategy (1).svg", alt: "team stacking hands" },
  { title: "Something Undefined", slug: "", src: "/portfolio2/Something Undefined (1).svg", alt: "team in office" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <p className="section-heading-eyebrow">Our Portfolio</p>
      <h2 className="section-heading-title">Our Work Speaks Louder</h2>

      <div className="portfolio-grid">
        {TILES.map((t) => (
          <div key={t.slug} className="portfolio-item">
            {/* Wrap with Link so the whole tile is clickable and keyboard-focusable */}
            <Link href={`/portfolio/${t.slug}`} className="portfolio-link" aria-label={`Open ${t.title} case study`}>
              <div className="portfolio-img-wrap">
                <Image
                  src={t.src}
                  alt={t.alt ?? t.title}
                  fill
                  className="portfolio-image"
                />
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