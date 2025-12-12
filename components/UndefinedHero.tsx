// components/UndefinedHero.tsx
import Image from "next/image";
import React from "react";

export default function UndefinedHero() {
  return (
    <header className="service-hero-wrapper">
      <div className="service-hero-banner">
        

        <div className="service-hero-overlay" />

        <div className="service-hero-content">
          <h1 className="hero-title">Something Undefined</h1>
          <p className="hero-text">
            We embrace creativity without limits — share your vision and we’ll co-create something
            truly original. No boxes. No noise. Just work that matters.
          </p>
        </div>
      </div>
    </header>
  );
}