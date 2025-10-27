import { Service } from "@/app/types";
import { 
  FaRobot, 
  FaCode, 
  FaCogs, 
  FaCloud, 
  FaChartLine,
  FaArrowRight,
  FaMobile,
  FaPalette
} from "react-icons/fa";

const services: Service[] = [
  {
    title: 'AI Consulting',
    description: 'Leverage the power of artificial intelligence to transform your business processes and decision-making.',
    image: '/services/ai-consulting.png'
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions built with modern technologies and best practices.',
    image: '/services/software.png'
  },
  {
    title: 'Automation & Workflow Optimization',
    description: 'Streamline your development and deployment processes with robust DevOps practices.',
    image: '/services/devops.png'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern applications.',
    image: '/services/cloud.png'
  },
  {
    title: 'Business Technology Solutions',
    description: 'Comprehensive technology roadmaps aligned with your business core objectives.',
    image: '/services/business.png'
  },
  {
  title: 'Cybersecurity Solutions',
  description: 'Protect your business with advanced security strategies and tools.',
  image: '/services/cybersec.png'
}

];

const iconMap = {
  'ai': FaRobot,
  'code': FaCode,
  'devops': FaCogs,
  'cloud': FaCloud,
  'strategy': FaChartLine,
  'mobile': FaMobile,
  'design': FaPalette
};

export default function Services() {
  return (
    <section id="services" className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service: Service, index: number) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-sky-600/30 transition transform hover:-translate-y-2 duration-300 flex flex-col"
            >
              {/* Service Image */}
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-sky-400 mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
