// components/CompanyContent.tsx
import React from "react";

export default function CompanyContent() {
  return (
    <section className="company-content">
      <div className="company-container">
        <div className="company-intro">
          <p className="eyebrow">Why Choose Akarsa</p>
          <h2 className="company-h2">Why Akarsa is the Partner Your Brand Deserves</h2>
          <p className="company-lead">
            At Akarsa, we don’t just provide services — we create impactful digital experiences that drive growth, engagement, and long-term success.
          </p>
        </div>

        <div className="company-rows">

          {/* Row 1 */}
          <div className="company-row" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div className="company-media" style={{ flex: "1" }}>
              <img src="/Nexa Digital Campaign.svg" alt="Creative Excellence" className="company-img" />
            </div>

            <article className="feature" style={{ flex: "1" }}>
              <h3 className="feature-title">1. Creative Excellence</h3>
              <p className="feature-text">
                We combine design thinking with practical solutions to craft visually compelling and user-friendly experiences.
              </p>
              <ul className="feature-list">
                <li>Innovative concepts tailored to brand identity.</li>
                <li>Balance of creativity and usability for real impact.</li>
                <li>Expertise across digital & print assets.</li>
              </ul>
            </article>
          </div>

          {/* Row 2 */}
          <div className="company-row" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div className="company-media" style={{ flex: "1" }}>
              <img src="/Proven Results & Client Success.svg" alt="Technology Solutions" className="company-img" />
            </div>

            <article className="feature" style={{ flex: "1" }}>
              <h3 className="feature-title">2. Technology-Driven Solutions</h3>
              <p className="feature-text">
                From responsive websites to AI-driven creative tools, we deliver scalable and secure digital solutions.
              </p>
              <ul className="feature-list">
                <li>SEO-optimized, performance-first development.</li>
                <li>Secure coding & modern frameworks.</li>
                <li>Future-ready solutions built for growth.</li>
              </ul>
            </article>
          </div>

          {/* Row 3 */}
          <div className="company-row" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div className="company-media" style={{ flex: "1" }}>
              <img src="/Creative Excellence (1).svg" alt="Brand Strategies" className="company-img" />
            </div>

            <article className="feature" style={{ flex: "1" }}>
              <h3 className="feature-title">3. Brand-Focused Strategies</h3>
              <p className="feature-text">
                We develop strategies that align with business goals and resonate with your audience.
              </p>
              <ul className="feature-list">
                <li>Data-driven market research & positioning.</li>
                <li>Story-driven creative that connects emotionally.</li>
                <li>Long-term brand building, not short-term noise.</li>
              </ul>
            </article>
          </div>

          {/* Row 4 */}
          <div className="company-row" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div className="company-media" style={{ flex: "1" }}>
              <img src="W1.svg" alt="Proven Results" className="company-img" />
            </div>

            <article className="feature" style={{ flex: "1" }}>
              <h3 className="feature-title">4. Proven Results & Support</h3>
              <p className="feature-text">
                Our portfolio demonstrates measurable impact: better engagement, faster pages, and increased conversions.
              </p>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}