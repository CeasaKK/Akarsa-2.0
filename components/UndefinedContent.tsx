// components/UndefinedContent.tsx
import React from "react";

export default function UndefinedContent() {
  return (
    <section className="service-detail">
      <header className="service-detail-header">
        <p className="section-heading-eyebrow">Services Detail</p>
        <h2 className="service-detail-title">The Act of Giving</h2>
        <p className="service-detail-intro">
          Because some ideas are meant to be shared, not sold. We believe creativity isn’t currency — it’s energy.
        </p>
      </header>

      <section className="service-detail-section">
        <p className="service-detail-paragraph">
          Akarsa’s next chapter begins with a simple idea: to give marketing as a gift, not as a service.
          To create stories, visuals, and campaigns for those who deserve to be seen.
        </p>

        <p className="service-detail-paragraph">
          No contracts. No expectations. Only creation offered freely, like light.
        </p>

        <p className="service-detail-highlight">
          Soon, Akarsa will give what cannot be bought — attention with soul.
        </p>
      </section>

      <section className="service-detail-section">
        <h3 className="service-detail-section-title">What This Could Mean</h3>
        <ul className="service-detail-list">
          <li>Pro-bono campaigns for deserving causes and cultural projects.</li>
          <li>Experimental collaborations that explore new creative formats.</li>
          <li>Open-source creative assets for community reuse and remix.</li>
        </ul>
      </section>

      <section className="service-detail-section">
        <h3 className="service-detail-section-title">How We Work</h3>
        <p className="service-detail-paragraph">
          We collaborate with organisations and creators who need reach more than exchange.
          If a project resonates on a human level, we design an approach that spreads it.
        </p>
      </section>
    </section>
  );
}