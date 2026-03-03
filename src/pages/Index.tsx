import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesCards from "@/components/FeaturesCards";
import AboutSection from "@/components/AboutSection";
import BlueprintIntelligence from "@/components/BlueprintIntelligence";
import FeatureShowcase from "@/components/FeatureShowcase";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";
import PricingSection from "@/components/PricingSection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ConstilChatBot from "@/components/ConstilChatBot";

const Index = () => (
  <main className="bg-background min-h-screen scroll-smooth">
    <Navbar />
    <ConstilChatBot />
    <HeroSection />
    <FeaturesCards />
    <AboutSection />
    <BlueprintIntelligence />
    <FeatureShowcase />
    <WhatWeOffer />
    <WhyChooseUs />
    <OurProcess />
    <PricingSection />
    <ContactForm />
    <FAQSection />
    <Footer />
  </main>
);

export default Index;
