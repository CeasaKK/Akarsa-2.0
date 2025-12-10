// components/WebMaintenanceContent.tsx
import Image from "next/image";

export default function WebMaintenanceContent() {
  return (
    <section className="service-detail">
      {/* Top intro block */}
      <header className="service-detail-header">
        <p className="section-heading-eyebrow">Services Detail</p>
        <h2 className="service-detail-title">Web Maintenance</h2>

        <p className="service-detail-subtitle">
          <strong>Keeping What You Built, Alive.</strong>
        </p>

        <p className="service-detail-intro">
          We don’t just design and leave. We{" "}
          <strong>maintain, monitor, and evolve</strong> — because your website deserves
          to perform at its best every single day. Akarsa&apos;s maintenance system keeps
          your digital presence secure, optimized, and future-proof.
        </p>
      </header>

      {/* What we do */}
      <section className="service-detail-section">
        <h3 className="service-detail-section-title">What We Do</h3>
        <ul className="service-detail-list">
          <li>
            <strong>Regular Updates</strong> – Routine theme, CMS, and plugin updates to
            keep your system compatible and smooth.
          </li>
          <li>
            <strong>Security Monitoring</strong> – Continuous scanning and protection
            from malware, spam, and intrusions.
          </li>
          <li>
            <strong>Performance Optimization</strong> – Speed audits, cache tuning, and
            compression for lightning-fast loading.
          </li>
          <li>
            <strong>Bug Fixes &amp; Debugging</strong> – From broken buttons to
            responsiveness issues — fixed before they’re noticed.
          </li>
          <li>
            <strong>Analytics &amp; Reporting</strong> – Monthly insights on uptime,
            traffic, and performance health.
          </li>
          <li>
            <strong>Backup &amp; Recovery</strong> – Automated backups and one-click
            recovery for complete peace of mind.
          </li>
        </ul>
      </section>

      {/* Section: Websites under maintenance */}
      <section className="service-detail-section">
        <h3 className="service-detail-section-title">
          Websites Under Akarsa Maintenance
        </h3>

        {/* 1. Ayala Land Premier */}
        <article className="service-detail-case">
          <h4 className="service-detail-case-title">
            1. Ayala Land Premier Luxury Homes (Philippines)
          </h4>
          <p className="service-detail-case-link">
            Link : <span>www.ayalalandpremierluxuryhomessph.com</span>
          </p>

          <p className="service-detail-case-subtitle">
            <strong>Luxury Real Estate Management &amp; Optimization</strong>
          </p>
          <p className="service-detail-case-text">
            Ongoing speed and SEO improvements for a high-end global property platform.
            Maintaining uptime and secure integrations with regional real estate APIs.
          </p>

          <p className="service-detail-highlight">Highlights:</p>
          <ul className="service-detail-list">
            <li>99.9% uptime since launch</li>
            <li>40% faster load time post-maintenance</li>
          </ul>

          <div className="service-detail-chart">
            <Image
              src="/B1.svg"
              alt="Akarsa Impact – Ayala Land Premier"
              width={1200}
              height={600}
            />
          </div>
        </article>

        {/* 2. Cybrical Technologies */}
        <article className="service-detail-case">
          <h4 className="service-detail-case-title">2. Cybrical Technologies</h4>
          <p className="service-detail-case-link">
            Link : <span>www.cybrical.com</span>
          </p>

          <p className="service-detail-case-subtitle">
            <strong>Tech, AI, and Cybersecurity Infrastructure</strong>
          </p>
          <p className="service-detail-case-text">
            Full-stack maintenance — from security protocols to plugin versioning and
            dashboard refinement. A clean, high-speed experience for a tech brand.
          </p>

          <p className="service-detail-highlight">Highlights:</p>
          <ul className="service-detail-list">
            <li>Real-time monitoring enabled</li>
            <li>0 reported downtime in 12 months</li>
          </ul>

          <div className="service-detail-chart">
            <Image
              src="/B2.svg"
              alt="Akarsa Impact – Cybrical Technologies"
              width={1200}
              height={600}
            />
          </div>
        </article>

        {/* 3. CoPartner India */}
        <article className="service-detail-case">
          <h4 className="service-detail-case-title">3. CoPartner India</h4>
          <p className="service-detail-case-link">
            Link : <span>copartner.in</span>
          </p>

          <p className="service-detail-case-subtitle">
            <strong>Startup Collaboration &amp; Business Services</strong>
          </p>
          <p className="service-detail-case-text">
            Maintaining a dynamic, scalable website that evolves with the startup
            ecosystem. Regular performance audits and UX consistency checks.
          </p>

          <p className="service-detail-highlight">Highlights:</p>
          <ul className="service-detail-list">
            <li>+25% performance boost</li>
            <li>Seamless backend updates across platforms</li>
          </ul>

          <div className="service-detail-chart">
            <Image
              src="/B3.svg"
              alt="Akarsa Impact – CoPartner India"
              width={1200}
              height={600}
            />
          </div>
        </article>

        {/* 4. Pench Safari Adventure */}
        <article className="service-detail-case">
          <h4 className="service-detail-case-title">4. Pench Safari Adventure</h4>
          <p className="service-detail-case-link">
            Link : <span>penchsafariadventure.com</span>
          </p>

          <p className="service-detail-case-subtitle">
            <strong>Tourism &amp; Hospitality Website Maintenance</strong>
          </p>
          <p className="service-detail-case-text">
            We keep the adventure smooth behind the scenes — optimizing booking systems,
            media loads, and SEO for travel visibility.
          </p>

          <p className="service-detail-highlight">Highlights:</p>
          <ul className="service-detail-list">
            <li>Enhanced mobile responsiveness</li>
            <li>Page load reduced from 4.2s to 1.9s</li>
          </ul>

          <div className="service-detail-chart">
            <Image
              src="/B4.svg"
              alt="Akarsa Impact – Pench Safari Adventure"
              width={1200}
              height={600}
            />
          </div>
        </article>

        {/* 5. iVision Consultant */}
        <article className="service-detail-case">
          <h4 className="service-detail-case-title">5. iVision Consultant</h4>
          <p className="service-detail-case-link">
            Link : <span>ivisionconsultant.com</span>
          </p>

          <p className="service-detail-case-subtitle">
            <strong>Consulting &amp; Career Guidance Platform</strong>
          </p>
          <p className="service-detail-case-text">
            Ongoing UI refinement, form validation, and speed optimization. Focus on
            performance and security for educational clients.
          </p>

          <p className="service-detail-highlight">Highlights:</p>
          <ul className="service-detail-list">
            <li>Upgraded contact system</li>
            <li>100% SSL security compliance</li>
          </ul>

          <div className="service-detail-chart">
            <Image
              src="/B5.svg"
              alt="Akarsa Impact – iVision Consultant"
              width={1200}
              height={600}
            />
          </div>
        </article>

        {/* 6. LINQ Digital */}
        <article className="service-detail-case">
          <h4 className="service-detail-case-title">6. LINQ Digital</h4>
          <p className="service-detail-case-link">
            Link : <span>lnq.com/Q4Q1L</span>
          </p>

          <p className="service-detail-case-subtitle">
            <strong>Creative and Tech Integration Platform</strong>
          </p>
          <p className="service-detail-case-text">
            Maintaining embedded link ecosystems and visual consistency for smooth
            redirection and tracking.
          </p>

          <p className="service-detail-highlight">Highlights:</p>
          <ul className="service-detail-list">
            <li>Reduced downtime to near-zero</li>
            <li>Real-time analytics integration</li>
          </ul>

          <div className="service-detail-chart">
            <Image
              src="/B6.svg"
              alt="Akarsa Impact – LINQ Digital"
              width={1200}
              height={600}
            />
          </div>
        </article>
      </section>

      {/* Our process / philosophy */}
      <section className="service-detail-section">
        <h3 className="service-detail-section-title">Our Process</h3>
        <p className="service-detail-case-text">
          <strong>
            Monitor → Diagnose → Optimize → Secure → Report → Repeat
          </strong>
        </p>
        <p className="service-detail-case-text">
          That’s our maintenance rhythm. We believe in quiet precision — the kind that
          keeps websites alive without interruptions or errors.
        </p>

        <h3 className="service-detail-section-title">Philosophy</h3>
        <p className="service-detail-case-text">
          “Design gets attention. Maintenance builds trust.”
        </p>
        <p className="service-detail-case-text">
          Akarsa sees websites as living organisms — evolving with every update,
          secured with every patch, refined with every insight. Our goal is simple:
          make your website work perfectly, forever.
        </p>
      </section>
    </section>
  );
}