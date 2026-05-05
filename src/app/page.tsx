import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <AboutSection />
        <ClientsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
