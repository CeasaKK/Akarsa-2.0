// app/about/page.tsx
import Navbar from "@/components/Navbar";
import AboutHero from "../../components/AboutHero";
import AboutContent from "../../components/AboutContent";
import Cta from "../../components/Cta"; // you already have this component
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Us — Akarsa",
};

export default function AboutPage() {
  return (
    <main className="page about-page">
        <Navbar />
      <AboutHero />

      <div className="page-inner">
        <AboutContent />

        {/* reuse WhyChoose component (already styled) */}
        <Cta />

        {/* Reuse Team component if you want the team on the about page */}
        <section style={{ paddingTop: 40 }}>
          <div className="card-dark" style={{ padding: "40px" }}>
            <Footer />
          </div>
        </section>
      </div>
    </main>
  );
}