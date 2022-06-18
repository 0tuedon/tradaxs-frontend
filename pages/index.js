import LandingFooter from "../components/Landing/Footer/LandingFooter";
import HeroSection from "../components/Landing/Hero/HeroSection";
import StartMining from "../components/Landing/Mining/StartMining";
import Stats from "../components/Landing/Statistics/Stats";
import WhyYouShould from "../components/Landing/Statistics/WhyYouShould";
import Trade from "../components/Landing/Trade/Trade";
import PublicLayout from "../components/Layouts/PublicLayout";

export default function Home() {
  return (
    <>
      <PublicLayout>
        <HeroSection />
        <Stats/>
        <WhyYouShould/>
        <Trade/>
        <StartMining/>
        <LandingFooter/>
      </PublicLayout>
    </>
  );
}
