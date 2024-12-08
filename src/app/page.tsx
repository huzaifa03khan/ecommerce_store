import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Air_Max from "@/components/section_1";
import Featured from "@/components/featured";
import Gear from "@/components/gear";
import Footer from "@/components/footer"
import Image from "next/image";
import footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Air_Max/>
      <Featured/>
      <Gear/>
      <Footer/>
    </div>
  );
}
