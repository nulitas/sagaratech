import React from "react";
import logoFooter from "/logo.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logoFooter} alt="Sagara Tech Logo" className="mb-4" />
          <p>
            Plan, build, grow digital products. Continuously delivering impact.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-bold mb-4">Pages</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                IT Certification
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms & Condition
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-4">Careers</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Front End Developer
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Back End Developer
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Quality Assurance
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                UI/UX Design
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-4">Contact</h5>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-white">
              📞 +62 856-4097-7356
            </li>
            <li className="text-gray-400 hover:text-white">
              ✉️ consult@sagara.asia
            </li>
            <li className="text-gray-400 hover:text-white">
              📍 South Jakarta and Bandung, Indonesia.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        <p>Copyright © 2024 PT. Sagara Asia Teknologi</p>
      </div>
    </footer>
  );
};

export default Footer;
