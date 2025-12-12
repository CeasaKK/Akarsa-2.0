// components/CompanyHero.tsx
import Image from "next/image";
import React from "react";

export default function CompanyHero() {
  return (
    <header className="company-hero-wrapper">
      <div className="company-hero-banner">
        <Image
          src="/BG Gradient.png"   // put the hero image here
          alt="Team meeting — Why Choose Akarsa"
          fill
          priority
          className="company-hero-bg"
        />

        <div className="company-hero-overlay" />

        <div className="company-hero-content">
          <h1 className="company-hero-title">Why Choose Akarsa</h1>
          <p className="company-hero-sub">
            We combine creativity, strategy, and technology to deliver solutions that not only look great but also drive real business results.
          </p>
        </div>
      </div>
    </header>
  );
}