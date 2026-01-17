import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download, Leaf, Wheat } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

import heroWheat from '../../assets/hero-wheat.jpg';
import heroSpices from '../../assets/hero-spices.jpg';
import heroPulses from '../../assets/hero-pulses.jpg';

const heroImages = [heroWheat, heroSpices, heroPulses];

const floatingElements = [
  { icon: '🌾', size: 40, x: '10%', delay: 0 },
  { icon: '🌿', size: 35, x: '85%', delay: 2 },
  { icon: '🍂', size: 30, x: '75%', delay: 4 },
  { icon: '✨', size: 25, x: '20%', delay: 1 },
  { icon: '🌰', size: 28, x: '90%', delay: 3 },
];

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentImage]}
            alt="Vital Foods Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Gradient Overlay */}
      <div className="overlay-gradient" />
      
      {/* Floating Elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none select-none"
          style={{ 
            left: el.x, 
            top: '30%',
            fontSize: el.size,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {el.icon}
        </motion.div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full px-4 py-2 mb-8"
          >
            <Wheat className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Premium Indian Exports Since 1992
            </span>
          </motion.div>
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground mb-6"
          >
            {t('hero.title')}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light mb-6"
          >
            {t('hero.subtitle')}
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10"
          >
            {t('hero.description')}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
          >
            <motion.button
              onClick={scrollToProducts}
              className="btn-hero p-2 flex items-center gap-2 bg-accent text-accent-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Leaf className="w-5 h-5" />
              {t('hero.explore')}
            </motion.button>
            
            <motion.a
              href="#"
              className="btn-hero-outline p-2 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              {t('hero.catalog')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-primary-foreground/60"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
      
      {/* Image Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImage === index 
                ? 'w-8 bg-accent' 
                : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}



export default Hero;