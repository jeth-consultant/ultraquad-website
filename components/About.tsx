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
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About UltraQuad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technology consulting that transforms businesses for the digital age
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              UltraQuad IT Consulting is a technology consulting company that helps organizations 
              build, scale, and innovate using modern software solutions, AI, and cloud technology.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We believe in the power of technology to transform businesses and create meaningful 
              impact. Our team of experts is dedicated to delivering cutting-edge solutions that 
              drive growth and efficiency.
            </p>
            <div className="space-y-4">
              {values.map((value: ValueItem, index: number) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{value.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card p-8">
            <div className="aspect-video bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Digital Transformation</h4>
                <p className="text-gray-600">Future-proof your business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}