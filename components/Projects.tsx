import Image from "next/image";
import Link from "next/link";


export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-200 transition-transform duration-200 hover:bg-sky-700 hover:-translate-y-0.5"
          >
            View our portfolio
          </Link>
        </div>
    </section>
  );
}

