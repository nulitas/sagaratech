import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logoFooter from "/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src={logoFooter}
              alt="Sagara Tech Logo"
              className="mb-4 w-32 md:w-auto"
            />
            <p>
              Plan, build, grow digital products. Continuously delivering
              impact.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
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
      </div>
    </footer>
  );
};

export default Footer;
