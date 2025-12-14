// components/UndefinedSidebar.tsx
import Link from "next/link";
import React from "react";

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

export default function UndefinedSidebar() {
  return (
    <aside className="branding-sidebar">
      <h3 className="branding-sidebar-title">All Services</h3>
      <p className="branding-sidebar-sub">Explore the services we craft for brands</p>

      <ul className="branding-sidebar-list">
        {services.map((s) => {
          const isActive = s.href === "/services/something-undefined";
          return (
            <li key={s.href} className={"branding-sidebar-item" + (isActive ? " is-active" : "")}>
              <Link href={s.href} className="branding-sidebar-link">
                <span>{s.label}</span>
                <span className="branding-sidebar-arrow">↗</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}