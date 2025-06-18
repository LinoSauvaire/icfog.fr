import NavBar from "@/app/_component/NavBar";
import HeroSection from "@/app/_component/hero/heroSection";
import ServicesSection from "@/app/_component/hero/ServiceSection";
import AboutPricingSection from "@/app/_component/hero/AboutPricingSection";

export default function Home() {
    return (
        <>
            <NavBar/>
            <HeroSection/>
            <ServicesSection />
            <AboutPricingSection />
        </>
    );
}