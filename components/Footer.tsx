import React from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12 border-t border-white/5 overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] -mr-64 -mb-64" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <img 
              src="https://i.ibb.co/M5MPr9h2/MElogo.png" 
              alt="Marshall Energy" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-slate-400 leading-relaxed text-lg max-w-md">
              Leading the global transition to efficient, zero-emission fuel handling and vapor recovery.
            </p>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xl font-bold mb-8">Get In Touch</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <a href="mailto:reid@marshallenco.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-cyan group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Email Us</div>
                  <div className="text-white font-medium">reid@marshallenco.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-cyan">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Office</div>
                  <div className="text-white font-medium">Ireland</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Marshall Energy, LLC. All rights reserved.
          </div>
          
          <div className="flex items-center gap-12 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
             <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-xs font-bold text-white uppercase tracking-widest">
               ATEX Certified
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
