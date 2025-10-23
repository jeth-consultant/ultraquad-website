export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Building Intelligent Solutions for the Future
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Empowering businesses through software, AI, and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a href="#about" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}