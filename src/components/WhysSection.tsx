import React from "react";

const WhysSection: React.FC = () => {
  return (
    <section className="bg-white py-12 mx-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
            WHY SAGARA IT CERTIFICATION?
          </h2>
          <div className="mb-4 flex items-start">
            <img
              src="../../public/3_credibility.svg"
              alt="Global Credibility"
              className="w-8 h-8 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-red-700">
                Global Credibility Boost
              </h3>
              <p className="text-gray-600">
                Our certifications are globally recognized, enhancing your
                credibility, and opening doors to new opportunities.
              </p>
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <img
              src="../../public/3_empowering.svg"
              alt="Empowering Careers"
              className="w-8 h-8 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-red-700">
                Empowering Careers
              </h3>
              <p className="text-gray-600">
                Equipped to advance your career, secure promotions, and pursue
                new job opportunities in the ever-evolving tech industry.
              </p>
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <img
              src="../../public/3_validation.svg"
              alt="Expertise Validation"
              className="w-8 h-8 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-red-700">
                Expertise Validation
              </h3>
              <p className="text-gray-600">
                Showcase your expertise and validate your skills with globally
                recognized certifications that employers trust.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2  mt-8 md:mt-0">
          <img
            src="../../public/certifications.png"
            alt="Certification"
            className="rounded-lg shadow-lg w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhysSection;
