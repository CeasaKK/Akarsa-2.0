// components/BlogGrid.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  image: string;
};

const POSTS: Post[] = [
  {
    title: "The Zero Law Era: Decoding the Data Behind Why Traditional Rules No Longer Rule",
    excerpt:
      "At Akarsa, our mission is to seek truth in marketing. The traditional rulebook for brand growth has been digitally shredded — here's why.",
    date: "Oct 10, 2025",
    author: "Akarsa Team",
    slug: "zero-law-era",
    image: "/blog/Blog 1.svg",
  },
  {
    title: "When Philosophy Meets Branding: The Untold Power of Fusing Ideas, Aesthetics, and AI",
    excerpt:
      "A fusion of timeless craft and modern tooling — how creative philosophy + AI creates brand narratives that endure.",
    date: "Oct 10, 2025",
    author: "Akarsa Team",
    slug: "philosophy-meets-branding",
    image: "/blog/Blog 2.svg",
  },
  {
    title: "Beyond Trends: Can Authenticity Go Viral? A Performance-First Take",
    excerpt:
      "Influence has become engineered. We explain a measurable approach to authenticity that scales across platforms and audiences.",
    date: "Oct 10, 2025",
    author: "Akarsa Team",
    slug: "authenticity-go-viral",
    image: "/blog/Blog 3.svg",
  },
];

export default function BlogGrid() {
  return (
    <section className="blog-grid-section">
      <div className="container">
        <div className="blog-grid">
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
              <div className="card-media">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={700}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  unoptimized
                />
              </div>

              <div className="card-body" color="white">
                <div className="card-meta" color="white">
                  <span className="card-author" color="white">By <strong>{p.author}</strong></span>
                  <span className="card-date" color="white"> | {p.date}</span>
                </div>

                <h3 className="card-title" color="white">{p.title}</h3>
                <p className="card-excerpt" color="white">{p.excerpt}</p>

                <div className="card-cta">
                  <span>Read More…</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}