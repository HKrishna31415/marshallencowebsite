import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Who is Marshall Energy?",
      answer: "Marshall Energy is a pioneer in sustainable energy technology, specializing in high-efficiency vapor recovery units (VRU). We help global industries reduce their environmental footprint while capturing lost product value."
    },
    {
      question: "How does the ENCO VRU system work?",
      answer: "Our system uses advanced condensation and adsorption technology to capture volatile organic compounds (VOCs) that would otherwise evaporate. These vapors are then converted back into high-quality liquid fuel and returned to the storage tank."
    },
    {
      question: "What safety certifications do you hold?",
      answer: "Safety is our top priority. Our units are fully ATEX and IECEx certified for explosive atmospheres. We also hold multiple patents and have been verified by leading international safety auditing firms."
    },
    {
      question: "What is the typical return on investment (ROI)?",
      answer: "Depending on throughput and local fuel prices, most of our clients see a full return on investment within 18 to 24 months. Beyond financial gains, the environmental compliance and safety benefits provide immediate value."
    },
    {
      question: "Can the system be monitored remotely?",
      answer: "Yes, every ENCO unit comes equipped with our proprietary cloud-based monitoring system, allowing you to track recovery rates, system health, and environmental impact from anywhere in the world."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">
                <HelpCircle className="w-4 h-4" />
                Support
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Common <br />
                <span className="text-brand-blue">Questions</span>
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Can't find the answer you're looking for? Reach out to our technical support team for detailed specifications.
              </p>
              <button className="px-8 py-4 border-2 border-brand-blue text-brand-blue rounded-2xl font-bold hover:bg-brand-blue hover:text-white transition-all">
                Contact Support
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`group rounded-[32px] transition-all duration-500 ${
                    isOpen 
                      ? 'bg-slate-900 text-white shadow-2xl' 
                      : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                  >
                    <span className="font-bold text-xl pr-8">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isOpen ? 'bg-brand-cyan text-brand-dark rotate-180' : 'bg-white text-slate-400'
                    }`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg max-w-2xl">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
