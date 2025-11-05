import HeroSection from "@/components/hero_section";
import IntroSection from "@/components/intro_section";
import Footer from "@/components/footer";
import MissionStatement from "@/components/mission_statement";
import SubjectsSection from "@/components/subjects";
import VivotaSystem from "@/components/vivota_system";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <MissionStatement/>
      <IntroSection/>
      <SubjectsSection/>
      <VivotaSystem/>
      <Footer/>
    </>
  );
}
