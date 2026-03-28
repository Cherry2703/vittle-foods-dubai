import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#0E1217] relative border-t border-white/5 overflow-hidden">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 MixBlendMode-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl"
        >
          {/* Stunning glowing background inside the card */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-[#0a0d14] to-emerald-900 border border-white/10" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px]" />

          <div className="relative z-10 p-10 md:p-20 text-center">
            <div className="inline-flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
                {t('cta.title1', 'Ready to Supercharge Your')} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
                  {t('cta.title2', 'Global Supply Chain?')}
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Join our network of international distributors and access premium, scalable food supply with uncompromising quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-emerald-500 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  Request Bulk Quote <ArrowRight className="w-5 h-5 ml-1" />
                </button>
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 rounded-xl flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold text-lg border border-white/10 backdrop-blur-md transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5" /> Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
