'use client';

import { NavItem } from '@/app/types';
import { useState, useEffect } from 'react';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img src="/logo.png" alt="UltraQuad Logo" className="h-20 w-40" />
            {/* <span className="text-2xl font-bold text-sky-400">UltraQuad</span> */}
          </a>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item: NavItem) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-sky-400 font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-6 text-center">
            {navItems.map((item: NavItem) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-sky-400 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
