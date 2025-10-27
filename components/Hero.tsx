'use client';

import { useState, useEffect } from 'react';
import { FaArrowRight, FaPlay, FaStar, FaRocket } from 'react-icons/fa';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-sky-200 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full opacity-10 blur-2xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Trust badge */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-200">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2 font-medium">Trusted by 100+ companies</span>
          </div>
        </div>

        {/* Main heading with animation */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Building{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Intelligent
            </span>{' '}
            Solutions
            <br />
            for the{' '}
            <span className="relative inline-block">
              Future
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-400/30" viewBox="0 0 100 10">
                <path d="M0,5 Q25,0 50,5 T100,5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
        </div>

        {/* Subheading with animation */}
        <div className={`transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses through cutting-edge{' '}
            <span className="font-semibold text-gray-700">software development</span>,{' '}
            <span className="font-semibold text-gray-700">AI solutions</span>, and{' '}
            <span className="font-semibold text-gray-700">digital innovation</span>.
          </p>
        </div>

        {/* Stats section */}
        <div className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Support' },
            { value: '2x', label: 'Growth Guarantee' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons with animation */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="group bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
            <FaRocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Start Your Project
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group bg-white/80 backdrop-blur-sm hover:bg-white text-gray-900 font-semibold py-4 px-8 rounded-2xl border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
            <FaPlay className="w-4 h-4" />
            Watch Demo
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full ml-1">3 min</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}