import React, { useState } from "react";
import icon_cube from "/icon_cube.png";
import icon_dashboard from "/icon_dashboard.png";
import icon_user from "/icon_user.png";

type CertificationType =
  | "Front End Developer"
  | "Back End Developer"
  | "Quality Assurance"
  | "UI/UX Design";

const CertificationSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<CertificationType>(
    "Front End Developer"
  );

  const tabs: CertificationType[] = [
    "Front End Developer",
    "Back End Developer",
    "Quality Assurance",
    "UI/UX Design",
  ];

  const certifications: Record<
    CertificationType,
    {
      title: string;
      description: string;
      image: string;
      details: { icon: JSX.Element; text: string }[];
    }
  > = {
    "Front End Developer": {
      title: "Front End Certification",
      description: "",
      image: "/frontend.png",
      details: [
        {
          icon: (
            <img
              src={icon_dashboard}
              alt="Dashboard Icon"
              className="w-6 h-6"
            />
          ),
          text: "Proficiency in frontend programming languages",
        },
        {
          icon: <img src={icon_cube} alt="Cube Icon" className="w-6 h-6" />,
          text: "Recognition as a qualified frontend developer",
        },
        {
          icon: <img src={icon_user} alt="User Icon" className="w-6 h-6" />,
          text: "Enhance your career prospects",
        },
      ],
    },
    "Back End Developer": {
      title: "Back End Certification",
      description: "Description for Back End Developer",
      image: "/frontend.png",
      details: [],
    },
    "Quality Assurance": {
      title: "Quality Assurance Certification",
      description: "Description for Quality Assurance",
      image: "/frontend.png",
      details: [],
    },
    "UI/UX Design": {
      title: "UI/UX Design Certification",
      description: "Description for UI/UX Design",
      image: "/frontend.png",
      details: [],
    },
  };

  const selectedCertification = certifications[selectedTab];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-2">
          <div className="w-16 border-t-4 border-red-700"></div>
        </div>
        <h2 className="text-2xl font-bold text-red-700">
          Empower Yourself with
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
          Our Certification
        </h3>
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-md font-semibold ${
                selectedTab === tab
                  ? "bg-red-700 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={selectedCertification.image}
              alt={selectedCertification.title}
              className="rounded-lg w-[500px]"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
            <h4 className="text-red-700 text-xl font-bold mb-4">
              {selectedCertification.title}
            </h4>
            <p className="text-gray-600 mb-6">
              {selectedCertification.description}
            </p>
            <ul className="space-y-4">
              {selectedCertification.details.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center md:justify-start"
                >
                  <div className="text-red-700 mr-3">{detail.icon}</div>
                  <p className="text-gray-600">{detail.text}</p>
                </li>
              ))}
            </ul>
            <button className="mt-6 px-6 py-2 bg-red-700 text-white rounded-md font-semibold">
              Get Detail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
