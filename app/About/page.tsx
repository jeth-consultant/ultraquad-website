export default function About() {
  return (
    <section id="about" className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-sky-400 font-medium tracking-widest uppercase">
          Who We Are
        </p>
        <h2 className="text-4xl font-extrabold text-white mt-2">
          About UltraQuad
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4">
          We are a forward-thinking IT consulting and software company dedicated
          to building intelligent and scalable solutions powered by AI, automation, 
          and modern technology.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        
        {/* Mission */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-sky-600/20 transition">
          <h3 className="text-2xl text-sky-400 font-bold mb-4">Our Mission</h3>
          <p className="text-gray-300 mb-6">
            To empower businesses and teams with intelligent solutions that 
            drive productivity, enhance collaboration, and spark innovation.
          </p>
          <button className="px-6 py-2 rounded-full border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition">
            Learn More
          </button>
        </div>

        {/* Vision */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-sky-600/20 transition">
          <h3 className="text-2xl text-sky-400 font-bold mb-4">Our Vision</h3>
          <p className="text-gray-300 mb-6">
            To become a global innovation hub where AI-driven products and
            automation solutions accelerate digital transformation across industries.
          </p>
          <button className="px-6 py-2 rounded-full border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Image + Story Row */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/about-image.jpg"
            alt="About UltraQuad"
            className="rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Innovation at Our Core</h3>
          <p className="text-gray-300 text-lg mb-6">
            We don't just build systems — we craft intelligent ecosystems.
            From automation to custom applications, our solutions are designed 
            for growth, speed, and long-term impact.
          </p>

          <button className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 shadow-lg transition font-semibold">
            Explore Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
