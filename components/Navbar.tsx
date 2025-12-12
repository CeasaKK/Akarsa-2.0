"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type SimpleLink = {
  label: string;
  href: string;
};

type NavItem =
  | {
      type: "link";
      label: string;
      href: string;
    }
  | {
      type: "dropdown";
      label: string;
      items: SimpleLink[];
    };

const NAV_ITEMS: NavItem[] = [
  { type: "link", label: "Home", href: "/" },
  { type: "link", label: "About Us", href: "/about" },
  {
    type: "dropdown",
    label: "Services",
    items: [
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Web Maintenance", href: "/services/web-maintenance" },
      { label: "Branding & Strategy", href: "/services/branding-&-strategy" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Video Composition", href: "/services/video-composition" },
      { label: "Creative AI Collaboration", href: "/services/creative-ai-collaboration" },
      { label: "Cultural Strategy", href: "/services/cultural-strategy" },
    ],
  },
  {
    type: "dropdown",
    label: "Company",
    items: [
      { label: "Why Choose Us", href: "/why-choose" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/career" },
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  { type: "link", label: "Contact", href: "/contact" },
];

export default function Navbar() {
  // which dropdown label is open (null = none)
  const [open, setOpen] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // keyboard: close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="navbar" ref={containerRef}>
      <div className="navbar-inner">
        {/* Left: logo */}
        <div className="navbar-logo" aria-label="Akarsa home">
          <Link href="/" className="logo-link" aria-label="Go to Akarsa Home">
  <img src="/symbol.png" alt="Akarsa Logo" className="logo-symbol" />

</Link>
        </div>

        {/* Center: navigation */}
        <nav className="navbar-nav" role="navigation" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            if (item.type === "link") {
              return (
                <div key={item.label} className="nav-item">
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </div>
              );
            }

            // dropdown
            const isOpen = open === item.label;

            // inside NAV_ITEMS.map(...) where item.type === "dropdown"
return (
  <div
    key={item.label}
    className={`nav-item nav-item-dropdown ${isOpen ? "open" : ""}`}
    onMouseEnter={() => setOpen(item.label)}
    onMouseLeave={() => setOpen(null)}
  >
    <button
      className="nav-link nav-link-dropdown"
      type="button"
      aria-expanded={isOpen}
      aria-haspopup="true"
      onClick={() => setOpen((cur) => (cur === item.label ? null : item.label))}
    >
      {item.label}
      <span className="nav-caret" aria-hidden> ▾ </span>
    </button>

    {/* <-- add handlers on the dropdown itself to keep it open while hovered */}
    <div
      className={`nav-dropdown ${isOpen ? "visible" : "hidden"}`}
      onMouseEnter={() => setOpen(item.label)}
      onMouseLeave={() => setOpen(null)}
    >
      {item.items.map((child) => (
        <Link
          key={child.label}
          href={child.href}
          className="nav-dropdown-item"
          onClick={() => setOpen(null)}
        >
          {child.label}
        </Link>
      ))}
    </div>
  </div>
);
          })}
        </nav>

        {/* Right: CTA button */}
        <div className="navbar-actions">
          <Link href="/contact" className="btn btn-primary navbar-cta">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}