import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Globe, Award, Truck, Shield } from 'lucide-react';
import { useLanguage } from "../../contexts/LanguageContext";

const stats = [
  { key: 'years', value: '15+', icon: Award },
  { key: 'countries', value: '', icon: Globe },
  { key: 'products', value: '', icon: Leaf },
  { key: 'tons', value: '100+', icon: Truck },
];

const features = [
  { key: 'sourcing', icon: Leaf },
  { key: 'quality', icon: Shield },
  { key: 'logistics', icon: Truck },
];

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <section id="about" className="section-padding bg-gradient-warm relative overflow-hidden mt-10">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary mb-4 tracking-wider uppercase text-sm font-bold">
            Our Story
          </span>
          <h2 className="section-title">{t('about.title')}</h2>
          {/* <p className="section-subtitle mt-4">{t('about.subtitle')}</p> */}
        </motion.div>
        
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card-premium p-6 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {t(`about.${stat.key}`)}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="card-feature text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-saffron-light flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {t(`about.${feature.key}`)}
              </h3>
              <p className="text-muted-foreground">
                {t(`about.${feature.key}Desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default About;
