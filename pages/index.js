import Boundaries from "../components/Home/Sections/Boundaries";
import Hero from "../components/Home/Sections/Hero";
import StartTrading from "../components/Home/Sections/StartTrading";
import Testimonials from "../components/Home/Sections/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function Home() {


  return (
    <div className="relative max-w-full">
      <Navbar />
      <main className="p-5 md:px-10 md:pt-16">
        <Hero />
        <Boundaries />
        <StartTrading />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
