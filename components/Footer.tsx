import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 py-14 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-extrabold text-sky-400 tracking-tight">
            UltraQuad
          </h2>

          {/* Logo below title */}
          <img
            src="/logo.png"
            alt="UltraQuad Logo"
            className="mt-4 h-14 w-40 drop-shadow-md"
          />

          <p className="mt-4 text-gray-400 leading-relaxed">
            Empowering innovation through AI-driven solutions, software
            excellence, and digital transformation across Africa and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Services", "Projects", "About Us", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-sky-400 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-4">
            {/* Email */}
            <li>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-sky-400 w-4 h-4" />
                <span className="font-medium text-white">Email:</span>
              </div>
              <div className="mt-1 space-y-1 ml-6">
                <a
                  href="mailto:vinnbalvins@gmail.com"
                  className="hover:text-sky-400 block"
                >
                  vinnbalvins@gmail.com
                </a>
                <a
                  href="mailto:markcosmars2000@gmail.com"
                  className="hover:text-sky-400 block"
                >
                  markcosmars2000@gmail.com
                </a>
                <a
                  href="mailto:info@ultraquad.com"
                  className="hover:text-sky-400 block"
                >
                  info@ultraquad.com
                </a>
              </div>
            </li>

            {/* Phone */}
            <li>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-sky-400 w-4 h-4" />
                <span className="font-medium text-white">Phone:</span>
              </div>
              <div className="mt-1 ml-6 space-y-1">
                <a href="tel:+254793470022" className="hover:text-sky-400 block">
                  +254 793 470 022
                </a>
                <a href="tel:+254740466295" className="hover:text-sky-400 block">
                  +254 740 466 295
                </a>
              </div>
            </li>

            {/* Location */}
            <li>
              <span className="font-medium text-white">Location:</span>
              <p className="ml-0 mt-1">Nairobi, Kenya</p>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex flex-wrap gap-4 text-2xl">
            <a
              href="#"
              className="hover:text-sky-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@greatmindstech?_r=1&_t=ZM-915bGFlnUy3"
              className="hover:text-sky-400 transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="#"
              className="hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/ultraquad2025?igsh=b3kyMGRmZ3N4bmFp&utm_source=qr"
              className="hover:text-sky-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        © {currentYear} UltraQuad IT Consulting — Crafted with passion by{" "}
        <span className="text-sky-400 font-medium">Mark Mwangi</span>, CTO &
        Co-Founder.
      </div>
    </footer>
  );
}
