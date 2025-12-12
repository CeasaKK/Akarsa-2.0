// app/services/creative-ai-collaboration/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

import CreativeAIHero from "../../../components/CreativeAIHero";
import CreativeAIContent from "../../../components/CreativeAIContent";
import CreativeAISidebar from "../../../components/CreativeAISidebar";

export const metadata = {
  title: "Creative AI Collaboration — Akarsa",
  description:
    "Akarsa One and Creative AI collaboration services that merge human creativity with AI intelligence for future-ready marketing.",
};

export default function CreativeAICollaborationPage() {
  return (
    <main className="page">
      <Navbar />
      <CreativeAIHero />

      <section className="creative-section">
        <div className="creative-grid">
          <div className="creative-left">
            <CreativeAIContent />
          </div>
          <div className="creative-right">
            <CreativeAISidebar />
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}