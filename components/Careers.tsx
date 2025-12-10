// components/Careers.tsx
import Image from "next/image";
import Link from "next/link";

export default function Careers() {
  return (
    <section id="careers" className="careers-section">
      <article className="card-dark careers-card">
        <div className="careers-media">
          <div className="careers-media-grid">
            <div className="careers-media-large">
              <Image
                src="/careers/Brand-Focused Strategies.svg"
                alt="Team member smiling"
                width={700}
                height={520}
                className="careers-img"
              />
            </div>

            <div className="careers-media-column">
              <div className="careers-media-small">
                <Image
                  src="/careers/Collaborative & Transparent Approach.svg"
                  alt="Workspace"
                  width={380}
                  height={248}
                  className="careers-img"
                />
              </div>
              <div className="careers-media-small">
                <Image
                  src="/careers/Tailored for Your Business.svg"
                  alt="Two people discussing"
                  width={380}
                  height={248}
                  className="careers-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="careers-content">
          <p className="section-heading-eyebrow">Careers</p>

          <h2 className="section-heading-title">Join The Akarsa Team</h2>

          <p className="section-heading-sub">
            We&apos;re always on the lookout for creative thinkers, tech innovators,
            and strategic minds. At Akarsa, you&apos;ll work on diverse projects,
            collaborate with global clients, and grow with a culture that values
            innovation and originality.
          </p>

          <div className="careers-ctas">
            <Link href="/careers" className="btn btn-primary">
              Explore Open Roles
            </Link>
            <Link href="/careers/apply" className="btn btn-outline">
              Apply Now
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}