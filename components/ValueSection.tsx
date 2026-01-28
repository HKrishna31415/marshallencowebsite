import React from 'react';
import { ArrowRight, Fuel, Plane, Factory, FlaskConical, CheckCircle2 } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => (
  <div className="group relative bg-white rounded-[32px] p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,112,184,0.1)] border border-slate-100 flex flex-col h-full overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-[100px] -mr-16 -mt-16 transition-all duration-500 group-hover:bg-brand-blue/10" />
    
    <div className="relative mb-8 w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
      <Icon className="w-8 h-8 text-brand-blue" strokeWidth={1.5} />
    </div>
    
    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">{title}</h3>
    
    <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    
    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
      <span className="text-sm font-bold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn More</span>
      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 rotate-[-45deg] group-hover:rotate-0">
        <ArrowRight className="w-5 h-5" />
      </div>
    </div>
  </div>
);

export const ValueSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Gas Stations",
      description: "Capturing gasoline vapors at the pump and storage tanks, converting them back into sellable liquid fuel instantly.",
      icon: Fuel
    },
    {
      title: "Aviation Fuel",
      description: "Specialized recovery for JP54 and Avgas storage facilities, maintaining high purity and safety standards.",
      icon: Plane
    },
    {
      title: "Industrial Storage",
      description: "Large-scale solutions for refinery tank farms and distribution hubs to eliminate emission losses.",
      icon: Factory
    },
    {
      title: "Chemical Processing",
      description: "Efficient management of volatile chemical vapors and ethanol evaporation in industrial environments.",
      icon: FlaskConical
    }
  ];

  return (
    <section id="solutions" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-2 text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">
              <span className="w-8 h-[2px] bg-brand-blue" />
              Our Solutions
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight">
              Maximum Recovery. <br />
              <span className="text-brand-blue">Minimum Emissions.</span>
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-brand-cyan pl-6">
              Our advanced VRU technology doesn't just filter vapors—it reclaims them, 
              providing immediate financial returns while meeting strict environmental regulations.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>


      </div>
    </section>
  );
};
