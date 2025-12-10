// components/VideoCompositionContent.tsx

type VideoItem = {
  title: string;
  client: string;
  description: string;
  youtubeId: string;
};

const videos: VideoItem[] = [
  {
    title: "1. Starbucks",
    client: "Starbucks India",
    description:
      "High–energy vertical video highlighting in-store experience, product shots, and brand warmth for social media campaigns.",
    youtubeId: "YO-cGvfjFy8", // replace with real YouTube ID
  },
  {
    title: "2. Adidas",
    client: "Adidas",
    description:
      "Store walkthrough and product–focused visuals showcasing motion, energy, and the performance feel of the brand.",
    youtubeId: "qPUTyvCxn5c",
  },
  {
    title: "3. Decathlon",
    client: "Decathlon",
    description:
      "Retail storytelling that connects gear, movement, and emotion to show how the brand fits into everyday adventure.",
    youtubeId: "2Kg_WYRzAHM",
  },
  {
    title: "4. The Olympia Gym",
    client: "The Olympia Gym",
    description:
      "Power–driven visuals capturing grit, strength, and community to position the gym as a high–intensity fitness hub.",
    youtubeId: "VujbENoOMe4",
  },
];

export default function VideoCompositionContent() {
  return (
    <section className="service-detail">
      {/* Page intro */}
      <header className="service-detail-header">
        <p className="section-heading-eyebrow">Services Detail</p>
        <h2 className="service-detail-title">Video Composition</h2>

        <p className="service-detail-intro">
          At Akarsa, we don&apos;t just edit clips — we design moving stories.
          Every shot, transition, and sound choice is intentional, crafted to
          match your brand&apos;s voice and the platforms your audience lives on.
        </p>
      </header>

      {/* Videos */}
      <div className="video-list">
        {videos.map((video) => (
          <article key={video.title} className="video-item">
            <h3 className="video-item-title">{video.title}</h3>
            <p className="video-item-meta">{video.client}</p>

            <div className="video-embed">
              {/* 
                NOTE: YouTube embed.
                Replace VIDEO_ID_* above with actual IDs like "dQw4w9WgXcQ".
              */}
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <p className="video-item-desc">{video.description}</p>
          </article>
        ))}
      </div>

      {/* Process / closing section */}
      <section className="service-detail-section">
        <h3 className="service-detail-section-title">Our Video Process</h3>
        <ul className="service-detail-list">
          <li>
            <strong>Discovery</strong> – Understand your brand, audience, and
            campaign goals.
          </li>
          <li>
            <strong>Concept &amp; Script</strong> – Build a narrative that fits
            platform, attention span, and message.
          </li>
          <li>
            <strong>Production</strong> – On–site or studio shoots with a focus
            on lighting, framing, and sound.
          </li>
          <li>
            <strong>Editing &amp; Motion</strong> – Cut, grade, sound design, and
            motion graphics that make every second count.
          </li>
          <li>
            <strong>Platform Adaptation</strong> – Versions optimized for reels,
            stories, YouTube, and ad placements.
          </li>
        </ul>
      </section>
    </section>
  );
}