import { JSX } from 'react';
import { FaLightbulb, FaUsers, FaBolt, FaChartLine, FaRocket } from 'react-icons/fa';

interface ValueItem {
  text: string;
  icon: JSX.Element;
}

const values: ValueItem[] = [
  { 
    text: 'Innovation-driven approach', 
    icon: <FaLightbulb className="w-5 h-5" />
  },
  { 
    text: 'Client-centric solutions', 
    icon: <FaUsers className="w-5 h-5" />
  },
  { 
    text: 'Cutting-edge technology expertise', 
    icon: <FaBolt className="w-5 h-5" />
  },
  { 
    text: 'Scalable and sustainable systems', 
    icon: <FaChartLine className="w-5 h-5" />
  }
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white relative overflow-hidden flex items-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <p className="text-sky-500 font-semibold tracking-widest uppercase mb-4 text-sm">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-sky-500">UltraQuad</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technology consulting that transforms businesses for the digital age
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission & Values */}
          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              UltraQuad IT Consulting is a technology consulting company that helps organizations 
              build, scale, and innovate using modern software solutions, AI, and cloud technology.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We believe in the power of technology to transform businesses and create meaningful 
              impact. Our team of experts is dedicated to delivering cutting-edge solutions that 
              drive growth and efficiency.
            </p>
            
            <div className="space-y-4">
              {values.map((value: ValueItem, index: number) => (
                <div 
                  key={index} 
                  className="flex items-center group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 text-sky-600">
                    {value.icon}
                  </div>
                  <span className="text-gray-800 text-lg font-medium">{value.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Visual Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 max-w-md w-full group">
              <div className="aspect-square bg-gradient-to-br from-sky-50 via-white to-blue-50 rounded-2xl flex items-center justify-center border border-gray-100 relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-sky-400 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
                </div>
                
                <div className="text-center p-6 relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-105 transition-all duration-500 group-hover:shadow-sky-200">
                    <FaRocket className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Digital Transformation</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Future-proof your business with innovative, scalable solutions that drive growth and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}