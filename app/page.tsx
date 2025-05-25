export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">TechSphere</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Services</a>
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-gray-900">
        <h2 className="text-5xl font-extrabold mb-6 text-white leading-tight">
          Innovate with <span className="text-blue-400">TechSphere</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Empowering startups and enterprises with cutting-edge web and AI solutions. Build smarter, faster, and better.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition">
            Get Started
          </button>
          <button className="border border-gray-400 px-6 py-3 rounded-full font-semibold hover:border-white transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-20 bg-gray-950">
        {[
          {
            title: 'AI Integration',
            description: 'Leverage machine learning for real-time decisions.',
            icon: '🤖',
          },
          {
            title: 'Cloud Solutions',
            description: 'Deploy fast and scale infinitely with cloud-native tools.',
            icon: '☁️',
          },
          {
            title: 'Web Development',
            description: 'Modern, scalable web apps built with cutting-edge tech.',
            icon: '💻',
          },
        ].map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/20 transition"
          >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} TechSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}
