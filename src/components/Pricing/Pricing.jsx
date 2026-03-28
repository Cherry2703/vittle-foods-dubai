import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    "Volume-based tiered discounts",
    "Dedicated account manager",
    "Custom packaging & private labelling",
    "Flexible international shipping terms",
    "Priority customs clearance support"
  ];

  return (
    <section className="py-24 bg-[#0E1217] text-white relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 filter blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-8 md:p-16 border border-white/10 overflow-hidden relative shadow-2xl"
          >
            {/* Background pattern */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  {t('pricing.title1', 'Flexible')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">{t('pricing.title2', 'Custom Pricing')}</span>
                </h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  We understand that every business has unique requirements. Our pricing model is entirely custom, scaled to match your specific bulk quantity, delivery frequency, and geographical location.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1a2130]/80 backdrop-blur-md rounded-2xl p-8 border border-white/5 text-center shadow-xl">
                <div className="text-indigo-400 text-sm font-bold tracking-wider uppercase mb-2">B2B Enterprise</div>
                <div className="text-5xl font-display font-bold text-white mb-6">Custom Quote</div>
                <p className="text-slate-400 text-sm mb-8">Tailored pricing based on current market rates and your logistics needs.</p>
                
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 rounded-xl flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
                >
                  {t('hero.cta1', 'Get Your Custom Quote')} <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
