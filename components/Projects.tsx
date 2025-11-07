import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
};

const projects: Project[] = [
  {
    title: "Point of Sale (POS) System",
    description:
      "Empowering small and medium-sized businesses to manage inventory, track sales, and simplify operations with real-time analytics.",
    image: "/services/custom-software.jpg",
    imageAlt: "Dashboard of a retail point of sale system",
    imagePosition: "left",
  },
  {
    title: "Real Estate Management Platform",
    description:
      "A seamless digital marketplace connecting property buyers and sellers while promoting transparency and trust.",
    image: "/realScreenshot.png",
    imageAlt: "Interface of the real estate management platform",
    imagePosition: "right",
  },
  {
    title: "Church Offerings & Events Management System",
    description:
      "Strengthening community engagement by enabling digital offerings, event planning, and member coordination.",
    image: "/services/mobile-apps.jpg",
    imageAlt: "Mobile app interface for church offerings and events",
    imagePosition: "right",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wide">
            What We’ve Built
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
            We don’t just talk about innovation — we’ve built it.
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Our portfolio showcases how technology can make a tangible
            difference in people’s lives:
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`flex flex-col gap-10 lg:gap-16 ${
                project.imagePosition === "left"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              }`}
            >
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="relative lg:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 space-y-6 max-w-3xl">
          <p className="text-lg text-gray-600">
            These projects represent our hands-on experience and our commitment
            to developing solutions that solve real-world challenges.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-200 transition-transform duration-200 hover:bg-sky-700 hover:-translate-y-0.5"
          >
            Talk to us about these projects
          </Link>
        </div>
      </div>
    </section>
  );
}

