// components/ServicesDetailed.tsx

type DetailedService = {
  title: string;
  text: string;
  colorClass: string;
};

const DETAILED_SERVICES: DetailedService[] = [
  {
    title: "Graphic Design",
    text: "From logos to marketing collateral, we design visual identities that tell your brand’s story with clarity and impact.",
    colorClass: "sd-icon-pink",
  },
  {
    title: "Web Development",
    text: "We build responsive, user-friendly, and SEO-optimized websites that enhance user experience and drive conversions.",
    colorClass: "sd-icon-purple",
  },
  {
    title: "Web Maintenance",
    text: "Keep your website secure, fast, and up to date with our ongoing maintenance and support services.",
    colorClass: "sd-icon-blue",
  },
  {
    title: "Branding & Strategy",
    text: "We cra brand strategies that connect emotionally with your audience and position your business for long-term success.",
    colorClass: "sd-icon-pink-soft",
  },
  {
    title: "Digital Marketing",
    text: "Boost your online presence with our data-driven campaigns in SEO, social media, and performance marketing.",
    colorClass: "sd-icon-purple-soft",
  },
  {
    title: "Video Composition",
    text: "Engage your audience through story-driven video content that elevates your brand communication.",
    colorClass: "sd-icon-blue-soft",
  },
  {
    title: "Creative AI Collaboration",
    text: "We integrate AI creativity tools to co-design innovative solutions that push boundaries and spark new possibilities.",
    colorClass: "sd-icon-pink",
  },
  {
    title: "Cultural Strategy",
    text: "Helping brands align with cultural trends and audience behavior to create authentic, relatable campaigns.",
    colorClass: "sd-icon-purple",
  },
  {
    title: "Something Undefined",
    text: "We love challenges. Share your unique idea and let’s create something extraordinary together.",
    colorClass: "sd-icon-blue",
  },
];

export default function ServicesDetailed() {
  return (
    <section id="services" className="services-detailed">
      <p className="section-heading-eyebrow">Our Services</p>
      <h2 className="section-heading-title">
        End-to-End Digital Solutions
        <br />
        For Modern Businesses
      </h2>

      <div className="services-detailed-grid">
        {DETAILED_SERVICES.map((service) => (
          <article
            key={service.title}
            className="card services-detailed-card"
          >
            <div className={`services-detailed-icon ${service.colorClass}`}>
              {/* placeholder icon – swap with real SVG/image later */}
              <span className="services-detailed-icon-inner">★</span>
            </div>

            <h3 className="services-detailed-title">{service.title}</h3>
            <p className="services-detailed-text">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}