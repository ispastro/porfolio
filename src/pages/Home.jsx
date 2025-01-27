import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;
