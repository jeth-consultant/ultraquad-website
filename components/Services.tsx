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
    icon: 'ai'
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions built with modern technologies and best practices.',
    icon: 'code'
  },
  {
    title: 'DevOps',
    description: 'Streamline your development and deployment processes with robust DevOps practices.',
    icon: 'devops'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern applications.',
    icon: 'cloud'
  },
  {
    title: 'IT Strategy',
    description: 'Comprehensive technology roadmaps aligned with your business objectives.',
    icon: 'strategy'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: 'mobile'
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
    <section id="services" className="section-padding bg-gray-50 mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={index} 
                className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <FaArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all mt-2" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-2 transition-colors group/btn">
                  Learn more
                  <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors font-medium inline-flex items-center gap-3">
            View All Services
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}