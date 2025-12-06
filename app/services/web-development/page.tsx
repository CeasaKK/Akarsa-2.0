// app/services/web-development/page.tsx
import Navbar from "@/components/Navbar";
import WebDevHero from "../../../components/WebDevHero";
import WebDevContent from "../../../components/WebDevContent";
import WebDevSidebar from "../../../components/WebDevSidebar";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Web Development — Akarsa",
  description: "Web Development — responsive, SEO-friendly websites and custom web apps.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="page webdev-page">
        <Navbar />
      <WebDevHero />

      <section className="section webdev-section">
        <div className="page-inner webdev-grid">
          <div className="webdev-left">
            <WebDevContent />
          </div>

          <aside className="webdev-right">
            <WebDevSidebar />
          </aside>
        </div>
      </section>
        <Cta />
        <Footer />
    </main>
  );
}