import NavBar from "@/app/_component/NavBar";
import HeroSection from "@/app/_component/hero/heroSection";
import ServicesSection from "@/app/_component/hero/ServiceSection";
import AboutPricingSection from "@/app/_component/hero/AboutPricingSection";
import ContactSection from "@/app/_component/hero/ContactSection";
import Footer from "@/app/_component/hero/Footer";

export default function Home() {
    return (
        <>
            <NavBar/>
            <HeroSection/>
            <ServicesSection />
            <AboutPricingSection />
            <ContactSection />
            <Footer />
        </>
    );
}