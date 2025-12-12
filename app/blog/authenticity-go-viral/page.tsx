// app/blog/authenticity-go-viral/page.tsx
import React from "react";
import styles from "./authenticity.module.css";

export default function AuthenticityGoViral() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <header
        className={styles.hero}
        style={{
          backgroundImage: "url('/blog/Blog 3.svg')",
        }}
      >
        <div className={styles.heroOverlay}>
          <p className={styles.kicker}>Akarsa Curious</p>
          <h1 className={styles.title}>
            Beyond Trends: Can Authenticity Go Viral? A Performance Analysis
          </h1>
          <p className={styles.subtitle}>
            The modern digital landscape is a relentless storm of manufactured moments. Our latest
            analysis reframes viral: authenticity doesn’t chase short spikes — it creates sustainable velocity.
          </p>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className={styles.container}>
        <article className={styles.article}>
          {/* BYLINE */}
          <div className={styles.bylineCard}>
            <div className={styles.bylineInner}>
              <div className={styles.avatarWrap}>
                <img src="/symbol.png" alt="Akarsa" />
              </div>
              <div>
                <div className={styles.byAuthor}>By Akarsa Marketing Insights Team</div>
                <div className={styles.byDate}>Published: Oct 10, 2025</div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <p className={styles.lead}>
            The modern digital landscape is a relentless storm of manufactured moments. Influencer
            campaigns, paid trends, and viral challenges create noise and fleeting spikes. Our analysis
            reframes the question: authenticity isn’t competing on the same terms — it builds resonance,
            conversion and long-term value.
          </p>

          {/* Finding 1 */}
          <h2>Report Finding 1: The "Hype Cycle" of Influencer-Driven Virality</h2>
          <p>
            Influencer-led campaigns generate a huge immediate spike — but our data shows that spike
            collapses quickly. We call it the "Hype Cycle": big peak, fast decay.
          </p>

          <figure className={styles.figure}>
            <img src="/B6.svg" alt="Volatility of Trend-Based Engagement" />
            <figcaption>Graph 1: The Volatility of Trend-Based Engagement (peak then steep decay)</figcaption>
          </figure>

          <p className={styles.strategic}>
            <strong>Strategic takeaway:</strong> this is like renting an audience — great top-of-funnel exposure
            but poor long-term brand equity. ROI is front-loaded and decays rapidly.
          </p>

          {/* Finding 2 */}
          <h2>Report Finding 2: The Compounding Power of Authentic Content</h2>
          <p>
            Authentic content — UGC, transparent founder stories or behind-the-scenes footage — builds
            momentum differently. It grows trust and sustained conversion rather than a one-week spike.
          </p>

          <figure className={styles.figure}>
            <img src="/B7.svg" alt="Sponsored vs Authentic Content" />
            <figcaption>Graph 2: Performance Metrics — Sponsored vs Authentic Content</figcaption>
          </figure>

          <ul className={styles.bullets}>
            <li><strong>4.5x</strong> higher conversion rate on average (authentic vs sponsored).</li>
            <li><strong>70%+</strong> higher reported brand trust in post-campaign surveys.</li>
            <li><strong>3x</strong> higher rate of being shared with a personal comment (deeper resonance).</li>
          </ul>

          <p className={styles.strategic}>
            <strong>Strategic takeaway:</strong> authenticity moves people — it converts and creates long-term loyalty.
          </p>

          {/* Finding 3 */}
          <h2>Report Finding 3: Redefining "Viral" — Resonance vs Reach</h2>
          <p>
            When evaluating business outcomes, noise and truth diverge sharply:
            noise gives many low-intent leads (high CAC). truth yields fewer, high-intent leads (lower CAC, higher CLTV).
          </p>

          <figure className={styles.figure}>
            <img src="/B8.svg" alt="Customer Journey Value: Trend vs Authenticity" />
            <figcaption>Graph 3: Customer Journey Value — Trend-Acquired vs Authenticity-Acquired</figcaption>
          </figure>

          <p>
            Our economic model shows a customer acquired through authenticity has ~60% lower CAC over 12 months
            and ~2× higher CLTV versus trend-acquired customers.
          </p>

          <h2>The Akarsa Verdict: Truth Doesn't Chase Trends — It Creates Gravity</h2>
          <p>
            So — can authenticity go viral? Yes — but not as a one-week spike. Authenticity spreads because people
            believe in it and share it with conviction. At Akarsa we don’t manufacture noise; we find signals and
            amplify them to audiences who already value them.
          </p>

          <p className={styles.conclusion}>
            In the Zero Law Era the loudest voice doesn't win — the truest one does.
          </p>

          <p className={styles.source}>
            Source: Akarsa analysis & internal data .  
          </p>
        </article>
      </main>
    </div>
  );
}