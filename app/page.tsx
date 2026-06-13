import NavBar from "@/app/_component/NavBar";
import HeroSection from "@/app/_component/hero/heroSection";
import CarouselSection from "@/app/_component/hero/CarouselSection";
import ServicesSection from "@/app/_component/hero/ServiceSection";
import AboutPricingSection from "@/app/_component/hero/AboutPricingSection";
import ContactSection from "@/app/_component/hero/ContactSection";
import Footer from "@/app/_component/hero/Footer";
import AppleSection from "./_component/hero/AppleSection";
import BlogHero from "./_component/hero/blog/BlogHero";

export default function Home() {
    return (
        <>
            <NavBar/>
            <HeroSection/>
            <ServicesSection />
            <AppleSection />
            <CarouselSection />
            <AboutPricingSection />
            <BlogHero />
            <ContactSection />
            <Footer />
        </>
    );
}