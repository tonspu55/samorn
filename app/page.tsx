import Banner from "@/features/components/Banner";
import Footer from "@/features/components/Footer";
import Navbar from "@/features/components/Navbar";
import SectionOne from "@/features/components/SectionOne";
import SectionThree from "@/features/components/SectionThree";
import SectionTwo from "@/features/components/SectionTwo";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {};
const Homepage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner options={OPTIONS}></Banner>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
