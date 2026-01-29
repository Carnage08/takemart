import Navbar from "@/components/homes/NavBar";
import { Footer } from "@/components/home/Footer";
import Vendor from "@/components/Sell/vendor";
import VendorRegistration from "@/components/Sell/VendorRegisteration";

export default function Home() {
    return (
        <div className="min-h-screen font-sans">
        <Navbar/>
        <main>
        <Vendor />
        <VendorRegistration />
        </main>
            <Footer />
        </div>
    );
  }