import React from 'react';
import { CheckCircle2, Zap, Award, Target, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-blue/5 rounded-[40px] rotate-2 transition-transform group-hover:rotate-1" />
              <div className="relative rounded-[32px] overflow-hidden h-[600px] w-full shadow-2xl">
                 <img 
                   src="https://i.ibb.co/Sws3JRmg/image-2.png" 
                   alt="Modern Infrastructure" 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
              </div>

              {/* Stats Overlay */}
              <div className="absolute top-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl flex justify-between items-center">
                <div className="text-center">
                  <div className="text-xl font-bold text-brand-blue leading-tight">Representative<br/>Installation</div>
                </div>
                <div className="w-px h-10 bg-slate-200 mx-2" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue">99%</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Uptime</div>
                </div>
                <div className="w-px h-10 bg-slate-200 mx-2" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue">10kL</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Saved / Month</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-brand-blue font-bold tracking-wider uppercase text-sm mb-6">
              <span className="w-8 h-[2px] bg-brand-blue" />
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
              Pioneering Clean <br />
              <span className="text-brand-blue">Energy Since 2020.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Founded with a mission to eliminate fuel waste and reduce carbon emissions, 
              Marshall Energy has become a leader in VRU technology. 
              We provide turnkey solutions for the most demanding fuel handling environments.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {[
                { title: "Zero Emission", desc: "100% vapor capture rate", icon: Zap, color: "blue" },
                { title: "Rapid Deployment", desc: "Modular, skid-mounted design", icon: Target, color: "cyan" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color === 'blue' ? 'bg-brand-blue/5 text-brand-blue' : 'bg-brand-cyan/10 text-brand-cyan'}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-sm font-bold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                ISO 9001:2015
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-sm font-bold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                ATEX Certified
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
