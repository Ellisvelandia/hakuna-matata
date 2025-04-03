import React from "react";

// Import components
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import TestimonialSection from "../components/home/TestimonialSection";
import ServicesGrid from "../components/home/ServicesGrid";
import LogoSection from "../components/home/LogoSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ServicesLists from "../components/home/ServicesLists";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <div className="w-full relative">
      <HeroSection />
      <AboutSection />
      <TestimonialSection />
      <ServicesGrid />
      <LogoSection />
      <FeaturesSection />
      <ServicesLists />
      <CallToAction />
    </div>
  );
}
