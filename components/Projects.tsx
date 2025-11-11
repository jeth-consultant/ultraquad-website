import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href="/project"
          className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 via-sky-500 to-indigo-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-teal-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-teal-500 hover:via-sky-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-teal-300"
        >
          View Our Portfolio
        </Link>
        <p className="mt-4 text-gray-600 text-lg">
          Explore our Ultraquad projects and see how we build innovation.
        </p>
      </div>
    </section>
  );
}
