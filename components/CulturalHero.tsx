// components/CulturalHero.tsx
import Image from "next/image";
import React from "react";

export default function CulturalHero() {
  return (
    <header className="service-hero-wrapper">
      <div className="service-hero-banner">
        

        <div className="service-hero-overlay" />

        <div className="service-hero-content">
          <h1 className="hero-title">Cultural Strategy</h1>
          <p className="hero-text">
            We help brands stay relevant by aligning campaigns with cultural trends
            and human behaviour. Our strategies drive authentic engagement across platforms.
          </p>
        </div>
      </div>
    </header>
  );
}