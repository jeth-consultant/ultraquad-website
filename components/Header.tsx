"use client";

import { NavItem } from "@/app/types";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-gray-900/40 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="UltraQuad Logo"
              className="h-12 w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item: NavItem) => {
              const isHashLink = item.href.startsWith('#');
              const isActive = !isHashLink && pathname === item.href;
              
              if (isHashLink) {
                const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (pathname !== '/') {
                    e.preventDefault();
                    window.location.href = `/${item.href}`;
                  }
                };
                
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleHashClick}
                    className="text-gray-300 hover:text-sky-400 font-medium transition-colors duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                );
              }
              
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 relative group ${
                    isActive ? 'text-sky-400' : 'text-gray-300 hover:text-sky-400'
                  }`}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-6 text-center">
            {navItems.map((item: NavItem) => {
              const isHashLink = item.href.startsWith('#');
              
              if (isHashLink) {
                const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (pathname !== '/') {
                    e.preventDefault();
                    window.location.href = `/${item.href}`;
                  }
                  setIsOpen(false);
                };
                
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleHashClick}
                    className="text-gray-300 hover:text-sky-400 transition font-medium"
                  >
                    {item.label}
                  </a>
                );
              }
              
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-sky-400 transition font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
