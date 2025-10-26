export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 relative pt-20 overflow-hidden"
    >
      {/* Glow Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-gray-900 to-black"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Tagline */}
        <p className="text-sky-400 font-medium tracking-widest uppercase mb-4">
          UltraQuad IT Consulting
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Building Intelligent Solutions<br />
          <span className="text-sky-400">for the Future</span>
        </h1>

        {/* Sub Text */}
        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Empowering businesses through world-class software, AI, and automation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 shadow-lg hover:shadow-sky-500/30 transition-all duration-300 font-semibold"
          >
            Get in Touch
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-full border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition-all duration-300 font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-sky-400 rounded-full flex justify-center items-start p-2">
          <div className="w-1 h-2 bg-sky-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
