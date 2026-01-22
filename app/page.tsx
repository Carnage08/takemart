import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { AboutFranchise } from "@/components/home/AboutFranchise";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Partners } from "@/components/home/Partners";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { CTABanner } from "@/components/home/CTABanner";
import { Testimonials } from "@/components/home/Testimonials";
import { Insights } from "@/components/home/Insights";
import { FAQ } from "@/components/home/FAQ";
import { Footer } from "@/components/home/Footer";
import Navbar from "@/components/homes/NavBar";
import HeroSection from "@/components/homes/HeroSection";
import CategorySection from "@/components/homes/CategorySection";
import PerformanceStats from "@/components/homes/PerformanceStats";
import AboutSection from "@/components/homes/AboutSection";
import HowItWorks from "@/components/homes/HowItWorks";

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
