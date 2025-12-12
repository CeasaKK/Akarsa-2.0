// app/blog/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";
import Cta from "@/components/Cta";

export const metadata = {
  title: "Blog — Akarsa",
  description: "Insights, inspiration and innovations from Akarsa",
};

export default function BlogPage() {
  return (
    <main className="page blog-page">
      <Navbar />
      {/* optional hero (reuse your hero style or component) */}
      <div className="page-hero small-hero">
        <div className="hero-inner">
          <h1>Our Blog</h1>
          <p>Stay updated with the latest in design, branding, web development and AI creativity.</p>
        </div>
      </div>

      {/* Grid of 3 posts (no sidebar) */}
      <BlogGrid />

      <Cta />
      <Footer />
    </main>
  );
}