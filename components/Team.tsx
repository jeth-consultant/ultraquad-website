'use client';

import { TeamMember } from "@/app/types";
import { FaLinkedin, FaTwitter, FaGithub, FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const teamMembers: TeamMember[] = [
  {
    name: "Vincent Kiplangat",
    role: "Chief Executive Officer (CEO)",
    expertise: "Generative AI Strategy & Business Digital Transformation",
    description:
      "As our visionary CEO, Vincent brings strategic leadership and deep expertise in cutting-edge Generative AI technologies. He specializes in guiding businesses through comprehensive digital transformation journeys, leveraging AI to drive innovation, operational efficiency, and competitive advantage. With a proven track record in technology leadership, Vincent ensures our solutions deliver measurable business impact while staying ahead of industry trends.",
  },
  {
    name: "Mark Mwangi",
    role: "Chief Technology Officer (CTO)",
    expertise: "Machine Learning Architecture & Advanced Data Science",
    description:
      "Mark leads our technical innovation as CTO, with extensive expertise in designing and implementing sophisticated machine learning systems and data science solutions. He oversees our research and development initiatives, ensuring we deliver robust, scalable AI solutions. His deep understanding of algorithms, data pipelines, and AI infrastructure enables us to build cutting-edge systems that solve complex business challenges with precision and reliability.",
  },
  {
    name: "Frank Bett",
    role: "Senior Fullstack Engineer & HR Lead",
    expertise: "End-to-End System Development & Organizational Culture",
    description:
      "Frank excels as both a technical expert and people leader, bringing comprehensive fullstack development skills combined with human resources management. He architects and builds complete digital solutions while fostering a collaborative team environment. His dual expertise ensures our technical delivery is supported by strong team dynamics and effective talent management, creating solutions that are both technically excellent and human-centered.",
  },
  {
    name: "Jethro",
    role: "Information Systems Consultant & Business Analyst",
    expertise: "Enterprise Systems Integration & DevOps Engineering",
    description:
      "Jethro serves as our bridge between business needs and technical execution, specializing in enterprise-level systems consulting and DevOps practices. He analyzes complex business requirements and designs integrated solutions that streamline operations and enhance productivity. His expertise in fullstack development combined with DevOps methodologies ensures seamless deployment, monitoring, and maintenance of robust, scalable systems that drive business growth.",
  },
];

export default function Team() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleMember = (index: number) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 2);

  return (
    <section id="team" className="min-h-screen bg-gray-900 relative overflow-hidden flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <p className="text-sky-400 font-medium tracking-widest uppercase mb-4">
            Our Experts
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Meet Our <span className="text-sky-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The brilliant minds driving innovation and delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {displayedMembers.map((member: TeamMember, index: number) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10 flex flex-col h-full"
            >
              {/* Avatar Section */}
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-sky-500/20 transition-all duration-300">
                  {member.name.charAt(0)}
                </div>
                
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sky-400 text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm font-medium">
                    {member.expertise}
                  </p>
                </div>
              </div>

              {/* Description with See More */}
              <div className="flex-grow">
                <p className={`text-gray-400 text-sm leading-relaxed mb-4 ${
                  expandedMember === index ? '' : 'line-clamp-3'
                }`}>
                  {member.description}
                </p>
                
                <button
                  onClick={() => toggleMember(index)}
                  className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors duration-200 text-sm font-medium"
                >
                  {expandedMember === index ? (
                    <>
                      Show Less
                      <FaChevronUp className="w-3 h-3" />
                    </>
                  ) : (
                    <>
                      Read More
                      <FaChevronDown className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 pt-6 border-t border-gray-700 mt-6">
                <a
                  href="#"
                  className="p-2 text-gray-400 hover:text-sky-400 hover:bg-sky-500/10 rounded-lg transition-all duration-200 border border-transparent hover:border-sky-500/20"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 text-gray-400 hover:text-sky-300 hover:bg-sky-500/10 rounded-lg transition-all duration-200 border border-transparent hover:border-sky-500/20"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-600"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {teamMembers.length > 2 && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition-all duration-300 font-semibold group"
            >
              {showAll ? (
                <>
                  Show Less
                  <FaChevronUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Show More Team Members
                  <FaChevronDown className="w-4 h-4 group-hover:transform group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
            <p className="text-gray-300 font-medium text-lg">
              Ready to work with our expert team?
            </p>
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-3 hover:shadow-lg hover:shadow-sky-500/30">
              Start Project
              <FaArrowRight className="w-4 h-4 group-hover:transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}