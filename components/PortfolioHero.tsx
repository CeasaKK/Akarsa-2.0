// components/PortfolioHero.tsx
import Image from "next/image";
import React from "react";

export default function PortfolioHero() {
  return (
    <header className="portfolio-hero">
      <div className="portfolio-hero-banner">
        <Image
          src="/BG Gradient.png"
          alt="Portfolio hero"
          fill
          priority
          className="portfolio-hero-bg"
        />
        <div className="portfolio-hero-overlay" />
        <div className="portfolio-hero-content">
          <h1 className="portfolio-hero-title">Portfolio</h1>
          <p className="portfolio-hero-sub">
            A showcase of work that blends innovation with functionality. See how we help brands grow
            through design and digital excellence.
          </p>
        </div>
      </div>
    </header>
  );
}