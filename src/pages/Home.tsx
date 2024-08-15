import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import WhysSection from "../components/WhysSection";
import HowSection from "../components/HowSection";
import CertificationSection from "../components/CertifiactionSection";
import Footer from "../components/Footer";
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
