// components/VideoCompositionHero.tsx
import Image from "next/image";

export default function VideoCompositionHero() {
  return (
    <header className="service-hero-wrapper">
      <div className="service-hero-banner">
        {/* Background image */}
        

        {/* Gradient overlay */}
        <div className="service-hero-overlay" />

        {/* Centered text */}
        <div className="service-hero-content">
          <h1 className="hero-title">Video Composition</h1>
          <p className="hero-text">
            We create engaging videos that bring your brand story to life. From
            concept to final edit, every frame is designed to captivate and
            connect with your audience.
          </p>
        </div>
      </div>
    </header>
  );
}