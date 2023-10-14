import Footer from "@/components/home/Footer";
import HeroArea from "@/components/home/HeroArea";
import HeroBottom from "@/components/home/HeroBottom";

import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroArea />
      <HeroBottom />
      <Footer />
    </div>
  );
}
