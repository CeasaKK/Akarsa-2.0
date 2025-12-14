// components/VideoCompositionSidebar.tsx
import Link from "next/link";

const services = [
  { href: "/services/graphic-design", label: "Graphic Design" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/web-maintenance", label: "Web Maintenance" },
  { href: "/services/branding-&-strategy", label: "Branding & Strategy" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/services/video-composition", label: "Video Composition" },
  { href: "/services/creative-ai-collaboration", label: "Creative AI Collaboration" },
  { href: "/services/cultural-strategy", label: "Cultural Strategy" },
  { href: "/services/something-undefined", label: "Something Undefined" },
];

export default function VideoCompositionSidebar() {
  return (
    <aside className="branding-sidebar">
      <h3 className="branding-sidebar-title">All Services</h3>
      <p className="branding-sidebar-sub">
        Explore the full spectrum of what we create for brands.
      </p>

      <ul className="branding-sidebar-list">
        {services.map((service) => {
          const isActive = service.href === "/services/video-composition";

          return (
            <li
              key={service.href}
              className={
                "branding-sidebar-item" + (isActive ? " is-active" : "")
              }
            >
              <Link href={service.href} className="branding-sidebar-link">
                <span>{service.label}</span>
                <span className="branding-sidebar-arrow">↗</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}