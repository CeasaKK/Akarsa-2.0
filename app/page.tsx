// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import About from "@/components/About";
 import ServicesDetailed from "@/components/ServicesDetailed";
import WhyChoose from "@/components/WhyChoose";
 import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Careers from "@/components/Careers"; import Blog from "@/components/Blog";
 import Faqs from "@/components/Faqs";
  import Cta from "@/components/Cta";
  import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="page">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <About />
       <ServicesDetailed />
      
      <WhyChoose />
      <Portfolio />
     
      <Testimonials />
  
      <Team />
           
      <Careers />
     
      <Blog /> 
      <Faqs/>
      <Cta/>
      <Footer />
    </main>
  );
}