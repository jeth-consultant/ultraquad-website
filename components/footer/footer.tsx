// components/Footer.tsx
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; // For the 'X' icon

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="text-xl font-bold">
            <span className="font-serif italic">Designed</span> for companies
          </h3>
          <p className="mt-4 text-gray-300">
            We are a team of passionate people whose goal is to improve
            everyone's life through disruptive products. We build great products
            to solve your business problems. Our products are designed for small
            to individual, medium size companies willing to optimize their
            performance.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Ultra Quad</h4>
          <p className="text-gray-300">
            250 MayFare Parklands Blvd, Westlands <br />
            Nairobi Waiyaki way 20200 <br />
            Kenya
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="flex items-center gap-2 text-gray-300">
            <FaPhone /> +254 724-070-629
          </p>
          <p className="flex items-center gap-2 text-gray-300 mt-2">
            <FaEnvelope /> hello@ultraquad.com
          </p>
          <div className="flex items-center gap-4 mt-4 text-white text-xl">
            <FaGithub />
            <img
              src="/x.png"
              alt="X Logo"
              className="w-6 h-6 object-contain "
            />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        <p>Copyright © Ultra Quad</p>
      </div>
    </footer>
  );
}
