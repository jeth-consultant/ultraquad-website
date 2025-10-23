import { Service } from "@/app/types";

const services: Service[] = [
  {
    title: 'AI Consulting',
    description: 'Leverage the power of artificial intelligence to transform your business processes and decision-making.',
    icon: '🤖'
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions built with modern technologies and best practices.',
    icon: '💻'
  },
  {
    title: 'DevOps',
    description: 'Streamline your development and deployment processes with robust DevOps practices.',
    icon: '⚙️'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern applications.',
    icon: '☁️'
  },
  {
    title: 'IT Strategy',
    description: 'Comprehensive technology roadmaps aligned with your business objectives.',
    icon: '🎯'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service, index: number) => (
            <div key={index} className="card p-8 group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}