import Navbar from "@/components/Navbar";
import GraphicDesignHero from "../../../components/GraphicDesignHero";
import GraphicDesignContent from "../../../components/GraphiDesignContent";
import GraphicDesignSidebar from "../../../components/GraphicDesignSideBar";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Graphic Design — Akarsa",
  description:
    "Graphic design services by Akarsa: branding, print, social media design, and complete identity systems.",
};

export default function GraphicDesignPage() {
  return (
    <main className="page graphic-design-page">
        <Navbar />
      <GraphicDesignHero />

      <section className="section graphic-design-section">
        <div className="page-inner graphic-design-grid">
          <div className="graphic-left">
            <GraphicDesignContent />
          </div>

          <aside className="graphic-right">
            <GraphicDesignSidebar />
          </aside>
        </div>
      </section>
        <Cta />
        <Footer />
    </main>
  );
}