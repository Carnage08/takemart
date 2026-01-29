import Navbar from "@/components/homes/NavBar";
import { Footer } from "@/components/home/Footer";
import ContactHead from "@/components/contact/Contacthead";
import ContactInfoMapSection from "@/components/contact/contact";
import ContactFormSection from "@/components/contact/contactSec";

export default function Home() {
    return (
        <div className="min-h-screen font-sans">
        <Navbar/>
        <main>
        <ContactHead />
        <ContactFormSection />
        <ContactInfoMapSection />
        
        </main>
            <Footer />
        </div>
    );
  }
  