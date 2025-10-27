import { TeamMember } from "@/app/types";
import { FaLinkedin, FaTwitter, FaGithub, FaArrowRight } from "react-icons/fa";

const teamMembers: TeamMember[] = [
  {
    name: 'Vincent Kiplangat',
    role: 'CEO',
    expertise: 'Generative AI and Business Transformation',
    description: 'A visionary leader passionate about Generative AI and business transformation.'
  },
  {
    name: 'Mark Mwangi',
    role: 'CTO',
    expertise: 'Machine Learning and Data Science',
    description: 'Expert in Machine Learning and Data Science. Leads innovation and research.'
  },
  {
    name: 'Frank Bett',
    role: 'Fullstack Engineer / HR',
    expertise: 'Fullstack Development and Team Culture',
    description: 'Skilled in Fullstack Development and team culture management.'
  },
  {
    name: 'Jethro',
    role: 'Information Systems Consultant / Business Analyst',
    expertise: 'Fullstack Development and DevOps',
    description: 'Specializes in Fullstack Development and DevOps.'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The brilliant minds driving innovation and delivering exceptional results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member: TeamMember, index: number) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
            >
              {/* Avatar Section */}
              <div className="mb-5">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:shadow-lg transition-shadow">
                  {member.name.charAt(0)}
                </div>
              </div>

              {/* Content Section - Flex grow for consistent height */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  {member.name}
                </h3>
                
                <p className="text-blue-600 text-sm font-medium mb-3">
                  {member.role}
                </p>
                
                <p className="text-sm text-gray-600 mb-3 font-medium leading-tight flex-grow">
                  {member.expertise}
                </p>
                
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                  {member.description}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3 pt-4 border-t border-gray-100 mt-auto">
                <a href="#" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-50 rounded-lg transition-all duration-200">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200">
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-700 font-medium">
              Ready to work with our expert team?
            </p>
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2 whitespace-nowrap">
              Start Project
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}