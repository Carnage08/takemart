
import { Footer } from "@/components/home/Footer";
import Navbar from "@/components/homes/NavBar";
import HeroSection from "@/components/homes/HeroSection";
import CategorySection from "@/components/homes/CategorySection";
import PerformanceStats from "@/components/homes/PerformanceStats";
import AboutSection from "@/components/homes/AboutSection";
import HowItWorks from "@/components/homes/HowItWorks";
import { Testimonials } from "@/components/homes/Testimonials";
import { ProcessSteps } from "@/components/home/ProcessSteps";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar/>
      <main>
        <HeroSection />
        <CategorySection />
        <HowItWorks/>
        <PerformanceStats />
        <AboutSection/>
        <Testimonials/>
        <ProcessSteps/>
        {/* <Stats />
        <AboutFranchise />
        <WhyChoose />
        <Partners />
        <ProcessSteps />
        <CTABanner />
        <Testimonials />
        <Insights />
        <FAQ /> */}
      </main>
      <Footer />
    </div>
  );
}
