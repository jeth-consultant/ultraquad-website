'use client';

import partners from "@/data/patner-showcase";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PartnersShowcase = () => {
  // Group partners by region
  const partnersByRegion = partners.reduce((acc, partner) => {
    const region = getRegionFromLocation(partner.location);
    if (!acc[region]) acc[region] = [];
    acc[region].push(partner);
    return acc;
  }, {} as Record<string, typeof partners>);

  return (
    <section className="relative bg-gray-50 py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            Trusted Worldwide
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our <span className="text-blue-300">Valued Partners</span>
          </h2>
          <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with industry leaders across the globe
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(partnersByRegion).map(([region, regionalPartners]) => (
            <div key={region} className="space-y-8">
              <div className="flex items-center">
                <div className="w-12 h-0.5 bg-blue-300 mr-4"></div>
                <h3 className="text-2xl font-semibold text-gray-800">{region}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionalPartners.map((partner, index) => (
                  <motion.div
                    key={`${region}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-5">
                      <div className="relative h-14 w-14 flex-shrink-0 rounded-lg border border-gray-200 overflow-hidden">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain bg-white p-1.5"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
                        <p className="text-blue-300 font-medium text-sm">{partner.role}</p>
                        <div className="mt-1 flex items-center text-xs text-gray-500">
                          <svg className="w-3 h-3 mr-1 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {partner.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Link
                        href={partner.caseStudy}
                        className="inline-flex items-center text-sm text-blue-300 hover:text-blue-400 font-medium transition-colors"
                      >
                        View case study
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
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-300 hover:bg-blue-400 transition-colors duration-300"
          >
            Explore all partnerships
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
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to group by region
function getRegionFromLocation(location: string): string {
  const regions: Record<string, string[]> = {
    "Europe": ["Madrid", "Berlin", "Amsterdam", "Firenze"],
    "Africa": ["Nairobi"],
    "Asia": ["Kobe"]
  };

  for (const [region, cities] of Object.entries(regions)) {
    if (cities.includes(location)) return region;
  }
  return "Global";
}

export default PartnersShowcase;