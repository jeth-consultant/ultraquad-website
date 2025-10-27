'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 relative overflow-hidden flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between w-full">
        
        {/* Left Column: Text + Buttons */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Tagline */}
          <p className="text-sky-400 font-medium tracking-widest uppercase mb-4">
            UltraQuad IT Consulting
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            Building Intelligent Solutions <br />
            <span className="text-sky-400">for the Future</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-md md:max-w-lg mx-auto md:mx-0">
            Empowering businesses through world-class software, AI, and automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

        {/* Right Column: Illustration */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
          <img
            src="/hero-ai.png"
            alt="Futuristic AI Illustration"
            className="w-full max-w-md md:max-w-lg animate-fadeIn"
          />
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