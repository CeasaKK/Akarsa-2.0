// app/services/video-composition/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

import VideoCompositionHero from "../../../components/VideoCompositionHero";
import VideoCompositionContent from "../../../components/VideoCompositionContent";
import VideoCompositionSidebar from "../../../components/VideoCompositionSidebar";

export const metadata = {
  title: "Video Composition — Akarsa",
  description:
    "Video composition and filmmaking services by Akarsa — engaging brand videos from concept to final cut.",
};

export default function VideoCompositionPage() {
  return (
    <main className="page">
      <Navbar />
      <VideoCompositionHero />

      <section className="video-section">
        <div className="video-grid">
          {/* LEFT: content + embeds (2/3 width) */}
          <div className="video-left">
            <VideoCompositionContent />
          </div>

          {/* RIGHT: sidebar (1/3 width) */}
          <div className="video-right">
            <VideoCompositionSidebar />
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}