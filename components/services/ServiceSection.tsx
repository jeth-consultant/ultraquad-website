import services from "@/data/servise";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const ServicesSection: NextPage = () => {
  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Professional solutions tailored to your business requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
            >
              <div className="relative h-48 w-full mb-6 overflow-hidden rounded-md">
                <Image
                  src={
                    service.image.startsWith("/")
                      ? service.image
                      : `/${service.image}`
                  }
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 hover:cursor-pointer "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={service.href}
                className="inline-flex items-center text-blue-300 hover:text-blue-400 font-medium transition-colors"
                aria-label={`Learn more about ${service.name}`}
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="px-8 py-3 bg-blue-300 text-white font-medium rounded-md hover:bg-blue-400 inline-flex items-center transition-colors"
          >
            View All Services
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
