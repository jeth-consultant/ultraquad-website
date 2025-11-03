'use client';

import { TeamMember } from "@/app/types";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers: TeamMember[] = [
  {
    name: "Kiplangat Vincent",
    role: "Chief Executive Officer",
    expertise: "Generative AI Strategy & Business Digital Transformation",
    description:
      "As our visionary Chief Executive Officer, Vincent guides businesses through digital transformation, leveraging AI to drive innovation and operational efficiency.",
    image: "/team/vinn.png",
    linkedin: "https://www.linkedin.com/in/kiplangat-vincent-824066249/",
    twitter: "#",
    github: "https://github.com/balvins435"
  },
  {
    name: "Mwangi Mark",
    role: "Chief Technology Officer",
    expertise: "Machine Learning Architecture & Advanced Data Science",
    description:
      "Mark leads technical innovation, designing and implementing sophisticated machine learning systems that are robust, scalable, and solve complex business challenges.",
    image: "/team/mark.png",
    linkedin: "https://www.linkedin.com/in/mark-mwangi-957591257/",
    twitter: "#",
    github: "https://github.com/Mwangimark"
  },
  {
    name: "Bett Franklin",
    role: "Senior Engineer & HR Lead",
    expertise: "End-to-End System Development & Organizational Culture",
    description:
      "Frank combines fullstack development skills with HR management, creating solutions that are both technically excellent and human-centered.",
    image: "/services/business.png",
    linkedin: "#",
    twitter: "#",
    github: "#"
  },
  {
    name: "Sumbeiywet Jethro",
    role: "Business Analyst",
    expertise: "Enterprise Systems Integration & DevOps Engineering",
    description:
      "Jethro bridges business needs and technical execution, specializing in enterprise-level systems consulting and DevOps practices for seamless deployment and productivity.",
    image: "/services/business.png",
    linkedin: "#",
    twitter: "#",
    github: "#"
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
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
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
            >
              {/* Row 1: Image + Name & Role */}
              <div className="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-2xl object-cover"
                />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-[15px] uppercase text-sky-700 font-semibold tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Row 2: Expertise */}
              <p className="text-gray-800 font-semibold">{member.expertise}</p>

              {/* Row 3: Description */}
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {member.description}
              </p>

              {/* Row 4: Social Links */}
              <div className="flex justify-center space-x-4 p-2 bg-gray-900 border-t border-gray-200 rounded-b-xl">
                <a href={member.linkedin} target="_blank" className="p-2 text-gray-400 hover:text-sky-600 transition-all duration-200">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href={member.twitter} target="_blank" className="p-2 text-gray-400 hover:text-sky-500 transition-all duration-200">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href={member.github} target="_blank" className="p-2 text-gray-400 hover:text-gray-300 transition-all duration-200">
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
