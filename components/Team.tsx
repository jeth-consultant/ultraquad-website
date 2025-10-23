import { TeamMember } from "@/app/types";

const teamMembers: TeamMember[] = [
  {
    name: 'Vinn',
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
    name: 'Frank',
    role: 'Fullstack Engineer / HR',
    expertise: 'Fullstack Development and Team Culture',
    description: 'Skilled in Fullstack Development and team culture management.'
  },
  {
    name: 'Jethro Sumbeiywet',
    role: 'Information Systems Consultant',
    expertise: 'Fullstack Development and DevOps',
    description: 'Specializes in Fullstack Development and DevOps.'
  }
];

export default function Team() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experts driving innovation and excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member: TeamMember, index: number) => (
            <div key={index} className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-sky-600 font-semibold mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 mb-3 font-medium">{member.expertise}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}