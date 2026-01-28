import React, { useState } from 'react';
import { CheckCircle2, Calculator, TrendingUp, DollarSign, BarChart3, ArrowRight } from 'lucide-react';

export const RevenueSection: React.FC = () => {
  const [volume, setVolume] = useState(400000);
  const [price, setPrice] = useState(1.50);

  const monthlySavings = volume * price * 0.005;
  const annualSavings = monthlySavings * 12;

  return (
    <section id="impact" className="py-32 bg-brand-dark relative overflow-hidden text-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#1e40af20_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,#0ea5e915_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-6">
              <TrendingUp className="w-3 h-3" />
              Economic Impact
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
              Turn Your Vapors <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent">
                Into Pure Profit.
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
              Average high-volume stations lose over 0.5% of their product to evaporation. 
              Our VRU technology captures this loss and returns it directly to your bottom line.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Immediate ROI", desc: "Payback in 18-24 months" },
                { title: "Product Recovery", desc: "0.5% - 0.8% total volume" },
                { title: "Carbon Credits", desc: "Eligible for green offsets" },
                { title: "Low Maintenance", desc: "Automated recovery cycle" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{item.title}</div>
                    <div className="text-sm text-slate-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              {/* Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-slate-900 border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 flex items-center justify-center text-brand-cyan">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">ROI Estimator</h3>
                      <p className="text-slate-500 text-sm">Real-time recovery analysis</p>
                    </div>
                  </div>
                  <BarChart3 className="w-6 h-6 text-slate-700" />
                </div>

                <div className="space-y-10 mb-12">
                  {/* Volume Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Monthly Sales (Liters)</label>
                      <div className="text-2xl font-mono font-bold text-white">
                        {volume.toLocaleString()}
                      </div>
                    </div>
                    <input
                      type="range"
                      min="50000"
                      max="1000000"
                      step="10000"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                    />
                  </div>

                  {/* Price Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Price per Liter ($)</label>
                      <div className="text-2xl font-mono font-bold text-white">
                        ${price.toFixed(2)}
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0.50"
                      max="3.00"
                      step="0.05"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/5 rounded-3xl p-6">
                    <div className="text-slate-500 text-xs uppercase font-bold mb-1">Monthly Savings</div>
                    <div className="text-2xl md:text-3xl font-display font-bold text-brand-cyan">
                      ${monthlySavings.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </div>
                  </div>
                  <div className="bg-brand-blue/20 border border-brand-blue/20 rounded-3xl p-6">
                    <div className="text-brand-cyan text-xs uppercase font-bold mb-1">Annual Profit</div>
                    <div className="text-2xl md:text-3xl font-display font-bold text-white">
                      ${annualSavings.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
