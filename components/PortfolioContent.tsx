// components/PortfolioContent.tsx
import React from "react";
import Link from "next/link";

type CaseStudy = {
  id: string;
  title: string;
  description: string;
  img: string;
  reverse?: boolean;
  href?: string;
};

const CASES: CaseStudy[] = [
  {
    id: "case-1",
    title: "Blossom E-Commerce Website",
    description:
      "We developed a fully responsive and SEO-optimized e-commerce platform for Blossom Essentials, designed to offer a smooth and intuitive shopping experience with strong branding and modern UI.",
    img: "/W1.svg",
    href: "https://www.ayalalandpremierluxuryhomesph.com",
  },
  {
    id: "case-2",
    title: "Aurora Branding Identity",
    description:
      "Complete brand system for Aurora — logo family, color systems, and visual language that elevated their presence across digital and print platforms.",
    img: "/W2.svg",
    reverse: true,
    href: "https://l1nq.com/Q4Q1L",
  },
  {
    id: "case-3",
    title: "Nexa Digital Campaign",
    description:
      "Data-driven digital marketing campaign combining social, performance ads and creative content that improved visibility and conversions for Nexa.",
    img: "/Nexa Digital Campaign.svg",
    href: "https://penchsafariadventure.com/",
  },
  {
    id: "case-4",
    title: "Studio Showreel & Production",
    description:
      "Video production & showreel for a creative studio — story-driven short-form content that boosted engagement across socials.",
    img: "/Aurora Branding Identity.svg",
    reverse: true,
    href: "https://ivisionconsultant.com/",
  },
];

export default function PortfolioContent() {
  return (
    <section className="portfolio-content">
      <div className="portfolio-container">
        <div className="portfolio-intro">
          <p className="eyebrow">Our Porolio</p>
          <h2 className="portfolio-h2">Showcasing Our Creative Excellence</h2>
        </div>

        <div className="portfolio-grid">
          {CASES.map((c, idx) => (
            <article
              key={c.id}
              className={`portfolio-card ${c.reverse ? "is-reverse" : ""}`}
            >
              <div className="portfolio-media">
                <img src={c.img} alt={c.title} className="portfolio-img" />
              </div>

              <div className="portfolio-copy">
                <h3 className="portfolio-case-title">{c.title}</h3>
                <p className="portfolio-case-desc">{c.description}</p>
                <div className="portfolio-action">
                  <Link href={c.href || "#"} className="portfolio-cta" aria-label={`View ${c.title}`}>
                    <span className="cta-circle">➜</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}