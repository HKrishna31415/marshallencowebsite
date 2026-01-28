import React from 'react';
import { MapPin, Globe2 } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  const flags = [
    { code: 'br', alt: 'Brazil' },
    { code: 'cn', alt: 'China' },
    { code: 'us', alt: 'USA' },
    { code: 'kr', alt: 'South Korea' },
    { code: 'jo', alt: 'Jordan' },
    { code: 'az', alt: 'Azerbaijan' },
  ];

  const locations = [
    { id: 'us', top: '35%', left: '22%', label: 'USA' },
    { id: 'br', top: '65%', left: '32%', label: 'Brazil' },
    { id: 'jo', top: '40%', left: '55%', label: 'Jordan' },
    { id: 'az', top: '37%', left: '59%', label: 'Azerbaijan' },
    { id: 'cn', top: '35%', left: '72%', label: 'China' },
    { id: 'kr', top: '36%', left: '80%', label: 'South Korea' },
  ];

  return (
    <section id="locations" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-brand-blue font-bold tracking-wider uppercase text-sm mb-4 justify-center">
            <Globe2 className="w-4 h-4" />
            Global Presence
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Recovering Vapors <br />
            <span className="text-brand-blue">Across The Globe</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Marshall Energy operates in key strategic markets, providing localized support and cutting-edge 
            technology to the world's most demanding energy environments.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-5xl mx-auto mb-32 p-4 md:p-8 bg-slate-50 rounded-[40px] border border-slate-100">
          <div className="relative">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
              alt="World Map" 
              className="w-full h-auto opacity-20 grayscale"
            />
            
            {/* Markers */}
            {locations.map((loc) => (
              <div 
                key={loc.id}
                className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-full group cursor-pointer"
                style={{ top: loc.top, left: loc.left }}
              >
                <div className="relative">
                  <div className="w-4 h-4 md:w-6 md:h-6 bg-brand-blue rounded-full border-4 border-white shadow-xl group-hover:scale-125 transition-transform duration-300" />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-brand-dark text-white text-xs font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl scale-90 group-hover:scale-100 z-10">
                    {loc.label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-dark rotate-45 -mt-1" />
                  </div>

                  {/* Pulse */}
                  <div className="absolute inset-0 bg-brand-blue rounded-full animate-ping opacity-25"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flags Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {flags.map((flag) => (
            <div key={flag.code} className="group flex flex-col items-center gap-4">
              <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                <img 
                  src={`https://flagcdn.com/w160/${flag.code}.png`}
                  alt={flag.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{flag.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
