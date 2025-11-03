import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaTwitter className="w-5 h-5" />, 
      name: "Twitter", 
      href: "#" 
    },
    { 
      icon: <FaLinkedin className="w-5 h-5" />, 
      name: "LinkedIn", 
      href: "#" 
    },
    { 
      icon: <FaGithub className="w-5 h-5" />, 
      name: "GitHub", 
      href: "#" 
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      text: "contact@ultraquad.com",
      href: "mailto:contact@ultraquad.com"
    },
    {
      icon: <FaPhone className="w-4 h-4" />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-sky-400">UltraQuad</h2>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Building intelligent and scalable solutions for a digital future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-sky-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-sky-400 transition">Projects</a></li>
            <li><a href="#" className="hover:text-sky-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-sky-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@ultraquad.com</li>
            <li>Phone: +254 700 000 000</li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-5 text-gray-400 text-2xl">
            <a href="#" className="hover:text-sky-400 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-sky-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-sky-400 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-sky-400 transition"><FaGithub /></a>
            <a href="#" className="hover:text-sky-400 transition"><FaInstagram /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
        © {currentYear} UltraQuad IT Consulting. All rights reserved.
      </div>
    </footer>
  );
}
