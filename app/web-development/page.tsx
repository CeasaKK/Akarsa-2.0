// app/services/web-development/page.tsx
import WebDevHero from "../../components/WebDevHero";
import WebDevContent from "../../components/WebDevContent";
import WebDevSidebar from "../../components/WebDevSidebar";

export const metadata = {
  title: "Web Development — Akarsa",
  description: "Web Development — responsive, SEO-friendly websites and custom web apps.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="page webdev-page">
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
    </main>
  );
}