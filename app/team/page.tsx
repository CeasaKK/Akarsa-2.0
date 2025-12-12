import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import TeamHero from "@/components/TeamHero";
import Team from "@/components/Team";

export const metadata = {
  title: "Portfolio — Akarsa",
  description: "Akarsa portfolio: case studies in design, development and marketing.",
};

export default function PortfolioPage() {
  return (
    <main className="page">
      <Navbar />
      <TeamHero />
      <Team />
      <Cta />
      <Footer />
    </main>
  );
}