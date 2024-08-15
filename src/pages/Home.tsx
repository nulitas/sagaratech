import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Navbar from "../components/Home/Navbar";
import AboutSection from "../components/Home/AboutSection";
import WhysSection from "../components/Home/WhysSection";
import HowSection from "../components/Home/HowSection";
import CertificationSection from "../components/Home/CertifiactionSection";
import Footer from "../components/Home/Footer";
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhysSection />
      <HowSection />
      <CertificationSection />
      <Footer />
    </>
  );
};

export default Home;
