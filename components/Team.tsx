'use client';

import { TeamMember } from "@/app/types";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers: TeamMember[] = [
  {
    name: "Vincent Kiplangat",
    role: "CEO",
    expertise: "Generative AI Strategy & Business Digital Transformation",
    description:
      "As our visionary CEO, Vincent guides businesses through digital transformation, leveraging AI to drive innovation and operational efficiency.",
    image: '/team/vincent.png'
  },
  {
    name: "Mark Mwangi",
    role: "CTO",
    expertise: "Machine Learning Architecture & Advanced Data Science",
    description:
      "Mark leads technical innovation, designing and implementing sophisticated machine learning systems that are robust, scalable, and solve complex business challenges.",
    image: '/team/mark.png'
  },
  {
    name: "Frank Bett",
    role: "Senior Engineer & HR Lead",
    expertise: "End-to-End System Development & Organizational Culture",
    description:
      "Frank combines fullstack development skills with HR management, creating solutions that are both technically excellent and human-centered.",
    image: '/team/frank.png'
  },
  {
    name: "Jethro",
    role: "Business Analyst",
    expertise: "Enterprise Systems Integration & DevOps Engineering",
    description:
      "Jethro bridges business needs and technical execution, specializing in enterprise-level systems consulting and DevOps practices for seamless deployment and productivity.",
    image: '/team/jethro.png'
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The brilliant minds driving innovation and delivering exceptional results
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col gap-4"
            >
              {/* Row 1: Image + Name & Role */}
              <div className="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-2xl object-cover"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sky-600 font-medium">{member.role}</p>
                </div>
              </div>

              {/* Row 2: Expertise */}
              <p className="text-gray-700 font-medium">{member.expertise}</p>

              {/* Row 3: Description */}
              <p className="text-gray-500 text-sm">{member.description}</p>

              {/* Row 4: Social Links */}
              <div className="flex justify-center space-x-4 pt-2 border-t border-gray-100">
                <a href="#" className="p-2 text-gray-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 text-gray-400 hover:text-sky-400 hover:bg-sky-50 rounded-lg transition-all duration-200">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200">
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
