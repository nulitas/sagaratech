import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex items-center">
        <div className="w-1/4 flex flex-col items-end pr-6 mr-6">
          <div className="border-t-4 border-gray-600 w-16 mb-2"></div>
          <h2 className="text-gray-800 font-bold">ABOUT US</h2>
        </div>
        <div className="w-3/4 text-left">
          <h2 className="text-red-700 font-bold mb-2">
            SAGARA IT CERTIFICATION
          </h2>
          <h3 className="text-2xl font-bold text-red-700 mb-4">
            Join <span className="text-black">thousands</span> of professionals
            who have elevated their skills and carved out success in the
            technology industry. Start your journey to excellence with us today!
          </h3>
          <p className="text-gray-600">
            Boost your career prospects in the digital era with
            industry-recognized information technology certifications from
            Sagara IT Certification.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
