import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

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
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <span className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              UltraQuad
            </span>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Building Intelligent Solutions for the Future. Transforming ideas into powerful digital experiences.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-sky-400 transition-all duration-300 group"
                >
                  <span className="text-sky-400 group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-3 bg-gray-800 rounded-xl hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:scale-110 group shadow-lg"
                  aria-label={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} UltraQuad IT Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-sky-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}