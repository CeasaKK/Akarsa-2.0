// components/AboutHero.tsx
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-inner card-dark">
        <div className="about-hero-text">
          <p className="section-heading-eyebrow">About Us</p>
          <h1 className="hero-title" style={{ marginBottom: 12 }}>
            We Turn Ideas Into Impactful Digital Experiences
          </h1>
          <p className="hero-text">
            We don’t just create designs — we build experiences. Akarsa helps
            businesses transform ideas into powerful digital identities that
            stand out in today’s competitive world.
          </p>
        </div>

        <div className="about-hero-media">
          <div className="about-hero-image-wrapper">
            <Image
              src="/about-hero.jpg"
              alt="Team collaborating"
              width={1200}
              height={720}
              className="about-hero-image"
            />
            <div className="about-hero-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}