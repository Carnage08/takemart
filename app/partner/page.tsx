import Navbar from "@/components/homes/NavBar";
import { Footer } from "@/components/home/Footer";
import PartnerInfo from "@/components/partner/partnerInfo";
import PartnerRegistration from "@/components/partner/PartnerRegistration";
import WhoCanPartner from "@/components/partner/partnerWho";
import WhyPartner from "@/components/partner/partnerWhy";
import HowToJoin from "@/components/partner/partnerHow";

export default function Home() {
    return (
        <div className="min-h-screen font-sans">
        <Navbar/>
        <main>
        <PartnerInfo />
        <PartnerRegistration />
        <WhoCanPartner />
        <WhyPartner />
        <HowToJoin />
        </main>
            <Footer />
        </div>
    );
  }