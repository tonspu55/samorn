import Banner from "@/features/components/Banner";
import Footer from "@/features/components/Footer";
import Navbar from "@/features/components/Navbar";
import SectionFour from "@/features/components/SectionFour";
import SectionOne from "@/features/components/SectionOne";
import SectionThree from "@/features/components/SectionThree";
import SectionTwo from "@/features/components/SectionTwo";
const Homepage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
