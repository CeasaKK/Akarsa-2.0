// components/Cta.tsx
import Link from "next/link";

export default function Cta() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-card">
        <h2 className="cta-title">Let’s Build Something<br />Remarkable</h2>

        <p className="cta-sub">
          Ready to take your brand to the next level?<br />
          Partner with Akarsa for a future-focused digital journey.
        </p>

        <div className="cta-buttons">
          <Link href="/contact" className="btn btn-primary-cta">
            Contact Us
          </Link>
          <Link href="/proposal" className="btn btn-outline-cta">
            Request a Proposal
          </Link>
        </div>
      </div>
    </section>
  );
}