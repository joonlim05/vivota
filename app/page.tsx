import HeroSection from "@/components/hero_section";
import IntroSection from "@/components/intro_section";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <IntroSection/>
      <Footer/>
    </>
  );
}
