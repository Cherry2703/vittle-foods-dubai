import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Ship, Plane, Package } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const regions = [
  { name: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman'] },
  { name: 'Europe', countries: ['UK', 'Germany', 'France', 'Netherlands', 'Belgium'] },
  { name: 'Americas', countries: ['USA', 'Canada', 'Brazil', 'Mexico'] },
  { name: 'Africa', countries: ['South Africa', 'Kenya', 'Nigeria', 'Egypt'] },
  { name: 'Asia Pacific', countries: ['Singapore', 'Malaysia', 'Australia', 'Japan'] },
];

const GlobalPresence = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <section id="global" className="section-padding bg-cream-dark relative overflow-hidden mt-10">
      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-bold mb-4 tracking-wider uppercase text-sm">
            Worldwide Reach
          </span>
          <h2 className="section-title">{t('global.title')}</h2>
          <p className="section-subtitle mt-4">{t('global.subtitle')}</p>
        </motion.div>
        
        {/* Globe Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-3xl mx-auto mb-16"
        >
          <div className="relative aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl overflow-hidden">
            {/* Animated Globe Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-forest/30 to-secondary/20 flex items-center justify-center">
                  <Globe className="w-20 h-20 md:w-28 md:h-28 text-primary" />
                </div>
              </motion.div>
            </div>
            
            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 left-10"
            >
              <div className="w-12 h-12 rounded-full bg-accent/80 flex items-center justify-center shadow-lg">
                <Ship className="w-6 h-6 text-accent-foreground" />
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-10 right-10"
            >
              <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center shadow-lg">
                <Plane className="w-6 h-6 text-primary-foreground" />
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-10 left-1/4"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center shadow-lg">
                <Package className="w-6 h-6 text-secondary-foreground" />
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        >
          {t('global.description')}
        </motion.p>
        
        {/* Regions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6  hidden">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="card-premium p-6 text-center group hover:border-primary/30"
            >
              <h4 className="font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {region.name}
              </h4>
              <div className="space-y-1">
                {region.countries.slice(0, 3).map((country) => (
                  <p key={country} className="text-sm text-muted-foreground">
                    {country}
                  </p>
                ))}
                {region.countries.length > 3 && (
                  <p className="text-xs text-primary font-medium">
                    +{region.countries.length - 3} more
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



export default GlobalPresence;