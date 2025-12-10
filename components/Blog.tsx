// components/Blog.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type Post = {
  title: string;
  slug: string;
  excerpt: string;
  img: string;
  author: string;
  date: string;
  authorAvatar?: string;
};

const POSTS: Post[] = [
  {
    title: "The Zero Law Era: Decoding the Data Behind Why Traditi...",
    slug: "",
    excerpt:
      "At Akarsa, our mission is to seek truth in marketing. And the truth, according to our latest market analyses, is that the tradi...",
    img: "/blog/Blog 1.svg",
    author: "Akarsa Team",
    date: "Oct 10,2025",
    authorAvatar: "/symbol2.png",
  },
  {
    title: "When Philosophy Meets Branding: The Untold Power ...",
    slug: "",
    excerpt:
      "In the dynamic chaos of the Zero Law Era – a world where old rules crumble and authenticity reigns – what truly separate...",
    img: "/blog/Blog 2.svg",
    author: "Akarsa Team",
    date: "Oct 10,2025",
    authorAvatar: "/symbol2.png",
  },
  {
    title: "Beyond Trends: Can Authenticity Go Viral? A Per...",
    slug: "",
    excerpt:
      "The modern digital landscape is a relentless storm of manufactured moments. Influencer campaigns, paid tre...",
    img: "/blog/Blog 3.svg",
    author: "Akarsa Team",
    date: "Oct 10,2025",
    authorAvatar: "/symbol2.png",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="blog-section">
      <p className="section-heading-eyebrow">Blog</p>
      <h2 className="section-heading-title">Insights & Inspiration</h2>

      <div className="blog-grid">
        {POSTS.map((p) => (
          <article key={p.slug} className="card blog-card">
            <Link href={`/blog/${p.slug}`} className="blog-link">
              <div className="blog-image-wrap">
                <Image src={p.img} alt={p.title} width={1200} height={700} className="blog-image" />
              </div>

              <div className="blog-body">
                <h3 className="blog-title">{p.title}</h3>
                <p className="blog-excerpt">{p.excerpt}</p>

                <div className="blog-meta">
                  <div className="blog-author">
                    {p.authorAvatar && (
                      <Image src={p.authorAvatar} alt={p.author} width={44} height={44} className="blog-author-avatar" />
                    )}
                    <div>
                      <div className="blog-author-name">By {p.author}</div>
                      <div className="blog-date">{p.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="blog-view-all">
        <Link href="/blog" className="btn-outline">View All →</Link>
      </div>
    </section>
  );
}