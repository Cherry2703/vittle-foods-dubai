import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Globe, Award, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from "../../contexts/LanguageContext";

const stats = [
  { key: 'years', value: '15+', label: 'Years of Excellence', icon: Award, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  { key: 'countries', value: '50+', label: 'Countries Served', icon: Globe, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { key: 'products', value: '100+', label: 'Premium Products', icon: Leaf, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  { key: 'tons', value: '10k+', label: 'Tons Exported', icon: Truck, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
];

const features = [
  { 
    title: 'Global Sourcing', 
    desc: 'Direct partnerships with premium farms and certified suppliers across the globe.',
    icon: Globe 
  },
  { 
    title: 'Quality Assurance', 
    desc: 'Rigorous multi-stage quality checks exceeding international food safety standards.',
    icon: ShieldCheck 
  },
  { 
    title: 'Reliable Logistics', 
    desc: 'End-to-end supply chain management ensuring on-time delivery anywhere.',
    icon: Truck 
  },
];

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <section id="about" className="py-24 bg-[#0E1217] relative overflow-hidden text-slate-300">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full filter blur-[100px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative" ref={ref}>
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>{t('about.badge', 'About Vatan Foods')}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
              {t('about.title1', 'Empowering Global Food')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                {t('about.title2', 'Supply Chains')}
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mb-8">
              {t('about.description', "Vatan Foods is a premier global food supply and export enterprise. We bridge the gap between high-quality agricultural products and international markets, specializing in bulk supply for restaurants, retailers, and distributors worldwide.")}
            </p>
            
            <ul className="space-y-4">
              {[
                t('about.point1', "100% Certified Premium Quality"),
                t('about.point2', "Scalable Bulk Supply Capabilities"),
                t('about.point3', "Dedicated International Support")
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-2xl group hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 mb-4 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-emerald-400 transition-all">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  {t(`about.stat.${stat.key}`, stat.label)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-colors"
            >
              <feature.icon className="w-10 h-10 text-indigo-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {t(`about.feature.${index}.title`, feature.title)}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {t(`about.feature.${index}.desc`, feature.desc)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
