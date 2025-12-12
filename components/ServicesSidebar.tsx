// components/ServicesSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Service = { href: string; label: string };

const SERVICES: Service[] = [
  { href: "/services/graphic-design", label: "Graphic Design" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/web-maintenance", label: "Web Maintenance" },
  { href: "/services/branding-and-strategy", label: "Branding & Strategy" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/services/video-composition", label: "Video Composition" },
  { href: "/services/creative-ai-collaboration", label: "Creative AI Collaboration" },
  { href: "/services/cultural-strategy", label: "Cultural Strategy" },
  { href: "/services/something-undefined", label: "Something Undefined" },
];

export default function ServicesSidebar({
  compact = false,
}: {
  compact?: boolean; // optional prop if you want a smaller variant later
}) {
  const pathname = usePathname() || "";

  return (
    <aside className="branding-sidebar" aria-label="All services">
      <h3 className="branding-sidebar-title">All Services</h3>
      {!compact && <p className="branding-sidebar-sub">Explore what we build for brands</p>}

      <ul className="branding-sidebar-list" role="list">
        {SERVICES.map((s) => {
          // consider active if pathname starts with s.href (so /services/graphic-design/sub works)
          const isActive = pathname.startsWith(s.href);
          return (
            <li
              key={s.href}
              className={`branding-sidebar-item ${isActive ? "is-active" : ""}`}
            >
              <Link href={s.href} className="branding-sidebar-link" aria-current={isActive ? "page" : undefined}>
                <span>{s.label}</span>
                <span className="branding-sidebar-arrow" aria-hidden>
                  ↗
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}