import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Tags,
  Truck,
  LineChart,
  Headphones,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const features = [
  { key: "quality", title: "Premium Quality Products", desc: "Rigorous quality checks ensure only the finest grades reach your business.", icon: ShieldCheck, color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { key: "supply", title: "Bulk Supply & Scalability", desc: "Unmatched capacity to handle large-scale orders consistently.", icon: LineChart, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { key: "pricing", title: "Competitive Pricing", desc: "Direct sourcing allows us to offer the best prices in the market.", icon: Tags, color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { key: "logistics", title: "Fast Global Delivery", desc: "Optimized supply chain for rapid international shipping.", icon: Truck, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { key: "standards", title: "International Standards", desc: "100% compliant with global food safety and export regulations.", icon: Award, color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { key: "support", title: "Trusted by Businesses", desc: "24/7 dedicated support for our B2B partners worldwide.", icon: Headphones, color: "text-emerald-400", bg: "bg-emerald-500/10" },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="py-24 bg-[#0E1217] text-white relative border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full filter blur-[100px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>{t('why.badge', 'Why Partner With Us')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              {t('why.title1', 'The Enterprise Standard for')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                {t('why.title2', 'Bulk Food Supply')}
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              {t('why.description', 'We provide the infrastructure, quality, and reliability that global businesses need to scale their operations effortlessly.')}
            </p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
                  {t(`why.${feature.key}.title`, feature.title)}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {t(`why.${feature.key}.desc`, feature.desc)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
