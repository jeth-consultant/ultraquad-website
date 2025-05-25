import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";
import { footerSections } from "@/data/footerData";

const iconMap = {
  phone: <FaPhone />,
  email: <FaEnvelope />,
  github: <FaGithub />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  x: (
    <Image
      src="/x.png"
      alt="X Logo"
      width={20}
      height={20}
      className="object-contain"
    />
  ),
};

const Footer = () => {
  return (
    <footer className="relative bg-grey from-blue-50 via-white to-blue-100 pt-20 pb-10 overflow-hidden border-t border-gray-200 shadow-inner">
      {/* Overlay Effect (optional if using background image) */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-wide">
                {section.title}
              </h3>

              {typeof section.content === "string" ? (
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              ) : (
                section.content.map((line, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {line}
                  </p>
                ))
              )}

              {section.icons && (
                <div className="mt-4 space-y-2">
                  {/* Non-social */}
                  {section.icons
                    .filter((icon) => icon.type !== "social")
                    .map((icon, i) => (
                      <p
                        key={i}
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {iconMap[icon.type as keyof typeof iconMap]} {icon.value}
                      </p>
                    ))}

                  {/* Social */}
                  <div className="flex gap-4 text-gray-700 text-xl mt-4">
                    {section.icons
                      .filter((icon) => icon.type === "social")
                      .map((icon, i) => (
                        <span
                          key={i}
                          className="hover:text-blue-500 transition-transform transform hover:scale-110"
                        >
                          {iconMap[icon.value as keyof typeof iconMap]}
                        </span>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 mt-16 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ultra Quad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
