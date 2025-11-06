export default function About() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About UltraQuad IT Consulting
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At <span className="text-sky-400 font-semibold">UltraQuad IT Consulting</span>, we are a passionate team of technology enthusiasts dedicated to helping organizations build, scale, and innovate through modern software solutions, AI, and cloud technology.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed">
            Our purpose goes beyond code — we exist to use technology as a force for progress, empowerment, and meaningful change.
          </p>
        </div>

        {/* Our Story Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-sky-400">Our Story</h2>
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Founded by a group of four professionals with diverse expertise in software development and IT solutions, UltraQuad began with a shared belief: <em className="text-sky-400">technology should make life simpler, smarter, and more connected</em>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From our humble beginnings as independent innovators, we've grown into a collaborative consulting firm that designs solutions to address real community and business needs. Every project we take on reflects our passion for creativity, reliability, and impact.
            </p>
          </div>
        </section>

        {/* What We've Built Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-sky-400">What We've Built</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            We don't just talk about innovation — we've built it. Our portfolio showcases how technology can make a tangible difference in people's lives:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-sky-600/20 transition">
              <h3 className="text-2xl font-bold text-sky-400 mb-3">Point of Sale (POS) System</h3>
              <p className="text-gray-300 leading-relaxed">
                Empowering small and medium-sized businesses to manage inventory, track sales, and simplify operations with real-time analytics.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-sky-600/20 transition">
              <h3 className="text-2xl font-bold text-sky-400 mb-3">Real Estate Management Platform</h3>
              <p className="text-gray-300 leading-relaxed">
                A seamless digital marketplace connecting property buyers and sellers while promoting transparency and trust.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-sky-600/20 transition">
              <h3 className="text-2xl font-bold text-sky-400 mb-3">Church Offerings & Events Management System</h3>
              <p className="text-gray-300 leading-relaxed">
                Strengthening community engagement by enabling digital offerings, event planning, and member coordination.
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-6 italic">
            These projects represent our hands-on experience and our commitment to developing solutions that solve real-world challenges.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-sky-400">Our Mission</h2>
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <p className="text-2xl text-gray-200 leading-relaxed font-medium">
              To empower organizations and communities through intelligent, reliable, and scalable technology solutions that drive growth, efficiency, and inclusion.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-sky-400">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-sky-400 mb-3">Innovation with Purpose</h3>
              <p className="text-gray-300 leading-relaxed">
                We craft technology that solves real human and business problems.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-sky-400 mb-3">Client-Centric Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                We listen, understand, and deliver beyond expectations.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-sky-400 mb-3">Integrity & Trust</h3>
              <p className="text-gray-300 leading-relaxed">
                We build lasting relationships grounded in transparency and accountability.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-sky-400 mb-3">Collaboration & Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe great ideas are born from teamwork and continuous growth.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-sky-400 mb-3">Sustainability</h3>
              <p className="text-gray-300 leading-relaxed">
                We design systems that scale with time and contribute positively to the digital ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-sky-400">Our Vision (Next 5 Years)</h2>
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              We aim to be one of Africa's most trusted technology partners — known for delivering impactful, data-driven, and scalable solutions across industries.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              By 2030, we envision UltraQuad as a leading innovation hub supporting <strong className="text-sky-400">businesses, startups, and institutions</strong> in their digital transformation journeys, creating opportunities for growth, employment, and technological inclusion.
            </p>
          </div>
        </section>

        {/* Why Choose UltraQuad Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-sky-400">Why Choose UltraQuad?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-sky-400">A diverse team of passionate experts</strong> with proven hands-on experience in web, mobile, and enterprise systems.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-sky-400">Real-world solutions</strong> already making a difference in commerce, real estate, and community engagement.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-sky-400">A transparent, partnership-driven approach</strong> — your goals are our priority.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-sky-400">Commitment to continuous innovation</strong>, reliability, and long-term value creation.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <div className="text-center bg-gray-800 rounded-xl p-8 shadow-lg">
          <p className="text-3xl font-bold text-sky-400 mb-2">UltraQuad IT Consulting</p>
          <p className="text-xl text-gray-300 italic">Building the future, one solution at a time.</p>
        </div>
      </div>
    </main>
  );
}
