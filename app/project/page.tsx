import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaHome, FaChurch } from "react-icons/fa";

const projects = [
  {
    title: "Point of Sale (POS) System",
    description:
      "Empowering small and medium-sized businesses to manage inventory, track sales, and simplify operations with real-time analytics.",
    image: "/services/custom-software.jpg",
    imageAlt: "Dashboard of a retail point of sale system",
    icon: <FaShoppingCart className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    title: "Real Estate Management Platform: BuyKenya Now",
    description:
      "A seamless real estate platform connecting properties buyers/renters and sellers while promoting transparency and trust. Need to rent or buy an apartment? A land? Well, we got you covered.",
    image: "/realScreenshot.png",
    imageAlt: "Interface of the real estate management platform BuyKenya",
    icon: <FaHome className="w-8 h-8" />,
    gradient: "from-teal-500 to-emerald-500",
    bgGradient: "from-teal-50 to-emerald-50",
  },
  {
    title: "Church Offerings and  Events Management System",
    description:
      "Strengthening community engagement by enabling digital offerings, event planning, and member coordination.",
    image: "/services/mobile-apps.jpg",
    imageAlt: "Mobile app interface for church offerings and events",
    icon: <FaChurch className="w-8 h-8" />,
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
  },
];

export default function Projectpage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-50 via-white to-teal-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sky-500 font-semibold tracking-widest uppercase mb-4 text-sm">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What We have <span className="text-sky-500">Built</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              We don't just talk about innovation — we have built it.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our portfolio showcases how technology can make a tangible difference in people's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group flex flex-col gap-12 lg:gap-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center`}
              >
                {/* Content Section */}
                <div className="lg:w-1/2 w-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} text-white shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className={`h-1 w-20 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 w-full">
                  <div className={`relative h-64 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl bg-gradient-to-br ${project.bgGradient}`}>
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="mt-24 mb-16">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-sky-50 to-teal-50 rounded-3xl p-12 border border-sky-100 shadow-lg">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                These projects represent our hands-on experience and our commitment to developing solutions that solve real-world challenges.
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-teal-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-sky-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-sky-600 hover:to-teal-600 focus:outline-none focus:ring-4 focus:ring-sky-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
