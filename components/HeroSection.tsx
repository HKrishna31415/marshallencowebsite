import React from 'react';
import { ArrowRight, Play, Shield, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center py-32 overflow-hidden bg-brand-dark">
      {/* Background with subtle animation */}
      <div 
        className="absolute inset-0 z-0 opacity-40 scale-105"
        style={{ 
          backgroundImage: 'url("https://static0.srcdn.com/wordpress/wp-content/uploads/2021/11/ENOC-.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      {/* Animated Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[100px] animate-liquid" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-brand-cyan text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            Next Generation Vapor Recovery
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Save Oil. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent">
              Protect The Planet.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Marshall Energy VRUs convert escaped vapors back into high-quality fuel. 
            Sustainable solutions for gas stations, aviation, and industrial storage.
          </p>

          {/* Trust Badges */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10 animate-in fade-in duration-1000 delay-500">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-brand-cyan" />
              <div>
                <div className="text-white font-bold">100% Compliant</div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">Safety Standards</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-brand-cyan" />
              <div>
                <div className="text-white font-bold">Instant ROI</div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">Recovered Fuel</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Graphic Element */}
      <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-1/3 animate-float">
        <div className="relative">
          <div className="absolute inset-0 bg-brand-blue/30 blur-[100px] rounded-full" />
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="text-white font-bold">Live Recovery Data</div>
              <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">Active</div>
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 flex items-center justify-center">
                    <div className="w-6 h-1 bg-brand-cyan rounded-full" />
                  </div>
                  <div className="flex-grow">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full bg-brand-cyan rounded-full w-[${40 + i * 15}%]`} />
                    </div>
                  </div>
                  <div className="text-white font-mono text-sm">{70 + i * 8}%</div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-slate-400 text-xs uppercase mb-1">Total Savings</div>
                <div className="text-2xl text-white font-bold">$124,500.00</div>
              </div>
              <div className="text-right">
                <div className="text-slate-400 text-xs uppercase mb-1">Carbon Offset</div>
                <div className="text-2xl text-brand-cyan font-bold">12.4t</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
