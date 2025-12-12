// components/teamHero.tsx
import Image from "next/image";
import React from "react";

export default function TeamHero() {
  return (
    <header className="team-hero">
      <div className="team-hero-banner">
        <Image
          src="/BG Gradient.png"
          alt="team hero"
          fill
          priority
          className="team-hero-bg"
        />
        <div className="team-hero-overlay" />
        <div className="team-hero-content">
          <h1 className="team-hero-title">team</h1>
          <p className="team-hero-sub">
            A showcase of work that blends innovation with functionality. See how we help brands grow
            through design and digital excellence.
          </p>
        </div>
      </div>
    </header>
  );
}