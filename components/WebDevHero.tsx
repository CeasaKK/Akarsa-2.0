// components/WebDevHero.tsx
export default function WebDevHero() {
  return (
    <header className="service-hero-wrapper">
      <div className="service-hero-banner">
        <img
          src="/services/hero-webdev.jpg"
          className="service-hero-img"
          alt="Web Development"
        />
        <div className="service-hero-overlay" />
        <div className="service-hero-content">
          <h1 className="hero-title">Web Development</h1>
          <p className="hero-text">
            Building fast, responsive, and SEO-friendly websites that elevate your digital
            presence. We combine design, functionality, and modern tech to create seamless
            online experiences for your audience.
          </p>
        </div>
      </div>
    </header>
  );
}