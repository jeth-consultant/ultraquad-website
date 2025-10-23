export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-sky-400">UltraQuad</span>
            <p className="text-gray-400 mt-2">
              Building Intelligent Solutions for the Future
            </p>
          </div>
          
          <div className="flex space-x-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-gray-400 hover:text-sky-400 transition-colors duration-300"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} UltraQuad IT Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}