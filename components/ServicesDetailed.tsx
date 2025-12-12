import Link from "next/link";

type DetailedService = {
  title: string;
  text: string;
  colorClass: string;
  image: string;
  href: string;
};

const DETAILED_SERVICES: DetailedService[] = [
  {
    title: "Graphic Design",
    text: "From logos to marketing collateral, we design visual identities that tell your brand’s story with clarity and impact.",
    colorClass: "sd-icon-pink",
    image: "Graphic Design.svg",
    href: "/services/graphic-design",
  },
  {
    title: "Web Development",
    text: "We build responsive, user-friendly, and SEO-optimized websites that enhance user experience and drive conversions.",
    colorClass: "sd-icon-purple",
    image: "Web Development.svg",
    href: "/services/web-development",
  },
  {
    title: "Web Maintenance",
    text: "Keep your website secure, fast, and up to date with our ongoing maintenance and support services.",
    colorClass: "sd-icon-blue",
    image: "Web Maintenance.svg",
    href: "/services/web-maintenance",
  },
  {
    title: "Branding & Strategy",
    text: "We cra brand strategies that connect emotionally with your audience and position your business for long-term success.",
    colorClass: "sd-icon-pink-soft",
    image: "Branding & Strategy.svg",
    href: "/services/branding-&-strategy",
  },
  {
    title: "Digital Marketing",
    text: "Boost your online presence with our data-driven campaigns in SEO, social media, and performance marketing.",
    colorClass: "sd-icon-purple-soft",
    image: "Digital Marketing.svg",
    href: "/services/digital-marketing",
  },
  {
    title: "Video Composition",
    text: "Engage your audience through story-driven video content that elevates your brand communication.",
    colorClass: "sd-icon-blue-soft",
    image: "Video Composition.svg",
    href: "/services/video-composition",
  },
  {
    title: "Creative AI Collaboration",
    text: "We integrate AI creativity tools to co-design innovative solutions that push boundaries and spark new possibilities.",
    colorClass: "sd-icon-pink",
    image: "Creative AI Collaboration.svg",
    href: "/services/creative-ai-collaboration",
  },
  {
    title: "Cultural Strategy",
    text: "Helping brands align with cultural trends and audience behavior to create authentic, relatable campaigns.",
    colorClass: "sd-icon-purple",
    image: "Cultural Strategy.svg",
    href: "/services/cultural-strategy",
  },
  {
    title: "Something Undefined",
    text: "We love challenges. Share your unique idea and let’s create something extraordinary together.",
    colorClass: "sd-icon-blue",
    image: "Something Undefined.svg",
    href: "/services/something-undefined",
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
          <Link
            key={service.title}
            href={service.href}
            className="services-detailed-card-link"
          >
            <article className="card services-detailed-card">
              <div className={`services-detailed-icon ${service.colorClass}`}>
                <img
                  src={`/portfolio/${service.image}`}
                  alt={service.title}
                  className="services-detailed-icon-img"
                />
              </div>

              <h3 className="services-detailed-title">{service.title}</h3>
              <p className="services-detailed-text">{service.text}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}