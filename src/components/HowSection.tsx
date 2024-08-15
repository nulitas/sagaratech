import React from "react";
import {
  FaUserEdit,
  FaClipboardList,
  FaCreditCard,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa";

const HowSection: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Register Account",
      description:
        "Begin your journey by creating an account on Sagara IT Certification platform. Simply fill out the registration form to get started.",
      icon: <FaUserEdit />,
    },
    {
      id: 2,
      title: "Select the Type",
      description:
        "Choose from a variety of IT certification options tailored to your career goals and interests. Select the certification that aligns with your expertise.",
      icon: <FaClipboardList />,
    },
    {
      id: 3,
      title: "Register and Pay",
      description:
        "Enroll in your chosen certification program by completing the registration process and making payment securely through our platform.",
      icon: <FaCreditCard />,
    },
    {
      id: 4,
      title: "Take Test",
      description:
        "Prepare for your certification exam and schedule a convenient time to take the test online.",
      icon: <FaLaptopCode />,
    },
    {
      id: 5,
      title: "Get the certificate",
      description:
        "Upon successful completion of the exam, receive your certification digitally, instantly validating your skills and expertise in the chosen IT field.",
      icon: <FaCertificate />,
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col items-center mb-8">
          <div className="w-16 border-t-4 border-red-700 mb-2"></div>
          <h2 className="text-center text-2xl font-bold text-red-700 mb-2">
            How Sagara
          </h2>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-red-700">
            IT-Certification Works
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="../../public/it_guy.png"
              alt="IT Certification"
              className="rounded-full shadow-lg w-[500px]"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center mr-6">
            <div className="relative">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-start mb-8">
                  <div className="relative z-10">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-red-700 text-white">
                      {step.icon}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-red-700 text-lg font-semibold">
                      #{step.id} {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
