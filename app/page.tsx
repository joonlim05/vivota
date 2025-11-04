import HeroSection from "@/components/hero_section";
import IntroSection from "@/components/intro_section";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MissionStatement from "@/components/mission_statement";
import SubjectsSection from "@/components/subjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <MissionStatement/>
      <IntroSection/>
      <SubjectsSection/>
      <Footer/>
    </>
  );
}
