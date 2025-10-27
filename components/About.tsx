interface ValueItem {
  text: string;
}

const values: ValueItem[] = [
  { text: 'Innovation-driven approach' },
  { text: 'Client-centric solutions' },
  { text: 'Cutting-edge technology expertise' },
  { text: 'Scalable and sustainable systems' }
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <p className="text-sky-400 font-medium tracking-widest uppercase mb-4">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            About <span className="text-sky-400">UltraQuad</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technology consulting that transforms businesses for the digital age
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Mission & Values */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              UltraQuad IT Consulting is a technology consulting company that helps organizations 
              build, scale, and innovate using modern software solutions, AI, and cloud technology.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              We believe in the power of technology to transform businesses and create meaningful 
              impact. Our team of experts is dedicated to delivering cutting-edge solutions that 
              drive growth and efficiency.
            </p>
            
            <div className="space-y-4">
              {values.map((value: ValueItem, index: number) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-sky-500 rounded-full mr-4 animate-pulse"></div>
                  <span className="text-gray-300 text-lg">{value.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Visual Card */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 max-w-md">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-sky-900 rounded-2xl flex items-center justify-center border border-gray-700">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-sky-500/30 transition-all duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Digital Transformation</h4>
                  <p className="text-gray-300">Future-proof your business with innovative solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}