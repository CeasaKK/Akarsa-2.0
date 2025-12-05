// components/AboutContent.tsx
import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="about-content">
      <div className="card-dark about-card">
        <div className="about-main-grid">
          <div className="about-text-column">
            <p className="section-heading-eyebrow">About Us</p>
            <h2 className="section-heading-title">Redefining Creativity, Strategy And Technology</h2>

            <p className="section-heading-sub">
              At Akarsa, we turn ideas into impactful digital experiences that
              drive growth and connect brands with their audience. We combine
              creativity, strategy, and technology to deliver solutions that
              inspire engagement and build lasting value.
            </p>

            <h3 className="card-title">Who We Are</h3>
            <p className="card-text">
              Akarsa is a full-service digital agency combining design,
              technology, and strategy to deliver innovative solutions for
              modern businesses. From branding and graphic design to web
              development and AI-powered creative collaboration, we empower
              brands to thrive in a competitive digital landscape.
            </p>

            <h3 className="card-title">Our Mission</h3>
            <p className="card-text">
              To help businesses unlock their digital potential by delivering
              solutions that are not only visually stunning but also strategically
              effective.
            </p>

            <h3 className="card-title">Our Vision</h3>
            <p className="card-text">
              To be a leading digital innovation partner — shaping the way brands
              connect with audiences globally through creativity, technology, and culture.
            </p>
          </div>

          <div className="about-visual-column">
            <div className="about-visual-wrapper">
              <Image
                src="/about-illustration.jpg"
                alt="Illustration"
                width={720}
                height={520}
                className="about-visual"
              />
            </div>
          </div>
        </div>

        {/* Features list (re-creates your "what makes us different" block) */}
        <div className="about-different">
          <h3 className="section-heading-title">What Makes Us Different</h3>

          <ul className="about-features">
            <li>
              <strong>Creative Excellence</strong>
              <p className="card-text">We craft design and content solutions tailored to your brand.</p>
            </li>

            <li>
              <strong>Technology-Driven</strong>
              <p className="card-text">Harnessing the latest web technologies and AI tools to deliver future-ready solutions.</p>
            </li>

            <li>
              <strong>Strategic Thinking</strong>
              <p className="card-text">Every project is powered by in-depth research and measurable objectives.</p>
            </li>

            <li>
              <strong>Cultural Relevance</strong>
              <p className="card-text">We align brands with current trends and audience behavior for authentic connections.</p>
            </li>

            <li>
              <strong>End-to-End Solutions</strong>
              <p className="card-text">From concept to execution, we provide comprehensive digital services under one roof.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}