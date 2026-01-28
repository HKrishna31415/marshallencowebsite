import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12 border-t border-white/5 overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] -mr-64 -mb-64" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-8">
            <img 
              src="https://i.ibb.co/M5MPr9h2/MElogo.png" 
              alt="Marshall Energy" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-slate-400 leading-relaxed text-lg">
              Leading the global transition to efficient, zero-emission fuel handling and vapor recovery.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">Solutions</h4>
            <ul className="space-y-4">
              {['Gas Stations', 'Aviation Fuel', 'Industrial Storage', 'Chemical Processing'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-brand-cyan transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-8">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Case Studies', 'Safety Standards', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-brand-cyan transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold mb-8">Get In Touch</h4>
            <div className="space-y-6">
              <a href="mailto:info@marshallenergy.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-cyan group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Email Us</div>
                  <div className="text-white font-medium">info@marshallenergy.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-cyan">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Office</div>
                  <div className="text-white font-medium">Broken Arrow, Oklahoma</div>
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
             <div className="flex items-center gap-2 font-bold text-white italic tracking-tighter">
               CONTROL<span className="text-brand-cyan">UNION</span>
             </div>
             <div className="w-10 h-10 bg-yellow-400 text-black font-bold flex items-center justify-center rounded-lg text-xs border-2 border-black rotate-45">
               <span className="-rotate-45">Ex</span>
             </div>
             <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center font-serif text-white font-bold text-xs">
               SGS
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
