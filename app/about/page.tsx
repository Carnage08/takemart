import Navbar from "@/components/homes/NavBar";
import { Footer } from "@/components/home/Footer";
import AboutSections from "@/components/about/AboutSections";
import AboutDetailsSection from "@/components/about/AboutDetailsSection";
import PurposeSection from "@/components/about/PurposeSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import CallToAction from "@/components/about/CallToAction";
import FounderSection from "@/components/about/FounderSection";
import Achievement from "@/components/about/achievement";

export default function Home() {
    return (
        <div className="min-h-screen font-sans">
        <Navbar/>
        <main>
        <AboutSections />
        <AboutDetailsSection />
        
        <PurposeSection />
        
        <WhyChooseUs />
        <Achievement />
        <CallToAction />
        <FounderSection />
        
      </main>
            <Footer />
        </div>
    );
  }
  