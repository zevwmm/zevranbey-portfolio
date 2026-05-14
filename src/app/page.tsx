import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorWrapper from "@/components/CursorWrapper";
import IntroLoader from "@/components/IntroLoader";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <CursorWrapper />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
