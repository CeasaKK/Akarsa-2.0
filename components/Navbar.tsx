"use client";

import Link from "next/link";

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
  {
    type: "link", label: "Home", href: "/"
  },{
    type: "link", label: "About Us", href: "/about" },
  {
    type: "dropdown",
    label: "Services",
    items: [
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Web Development", href: "/web-development" },
      { label: "Web Maintenance", href: "#web-maintenance" },
      { label: "Branding & Strategy", href: "#branding-strategy" },
      { label: "Digital Marketing", href: "#digital-marketing" },
      { label: "Video Composition", href: "#video-composition" },
      { label: "Creative AI Collaboration", href: "#ai-collaboration" },
      { label: "Cultural Strategy", href: "#cultural-strategy" },
    ],
  },
  {
    type: "dropdown",
    label: "Company",
    items: [
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Team", href: "#team" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "FAQs", href: "#faqs" },
    ],
  },
  { type: "link", label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Left: logo */}
        <div className="navbar-logo">
          <span className="logo-symbol">A</span>
          <span className="logo-word">AKARSA</span>
        </div>

        {/* Middle: nav links + dropdowns */}
        <nav className="navbar-nav">
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

            // dropdown item
            return (
              <div
                key={item.label}
                className="nav-item nav-item-dropdown"
              >
                <button
                  className="nav-link nav-link-dropdown"
                  type="button"
                >
                  {item.label}
                  <span className="nav-caret">▼</span>
                </button>

                <div className="nav-dropdown">
                  {item.items.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="nav-dropdown-item"
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
          <button className="btn btn-primary navbar-cta">Get Started</button>
        </div>
      </div>
    </header>
  );
}