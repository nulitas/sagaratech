import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('../../public/hero.jpg')",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-24">
        <div className="md:w-1/2 text-center md:text-left mx-4 md:mx-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Live Your Best Life Using Your Strengths
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Meet some of the people who have completed the Sagara Technology and
            use their results to maximize their potential at work and everywhere
            else.
          </p>
          <div className="mt-8">
            <button className="bg-[#a51535] text-white px-6 py-3 rounded-md text-lg font-semibold">
              Get Certification
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
