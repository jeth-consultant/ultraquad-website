"use client"; // Needed because we use client-side animations

import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href="/project"
          className="relative inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg shadow-teal-200 
            transition-transform duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-300
            bg-gradient-to-r from-teal-400 via-sky-500 to-indigo-500
            animate-subtle-bounce animate-gradient-x"
        >
          View Our Portfolio
        </Link>
        <p className="mt-4 text-gray-600 text-lg">
          Explore our Ultraquad projects and see how we build innovation.
        </p>
      </div>

      <style jsx>{`
        /* Gradient animation */
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }

        /* Subtle up-down bounce */
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .animate-subtle-bounce {
          animation: subtle-bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
