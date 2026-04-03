import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PracticalInfo from "@/components/PracticalInfo";
import GettingThere from "@/components/GettingThere";
import Timeline from "@/components/Timeline";
import DressCode from "@/components/DressCode";
import GiftList from "@/components/GiftList";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <PracticalInfo />
        <GettingThere />
        <Timeline />
        <DressCode />
        <GiftList />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
