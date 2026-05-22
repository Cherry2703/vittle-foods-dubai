import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Globe2, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

import heroWheat from '../../assets/hero-wheat.jpg';
import heroSpices from '../../assets/hero-spices.jpg';
import heroPulses from '../../assets/hero-pulses.jpg';

const heroImages = [heroWheat, heroSpices, heroPulses];

const floatingStats = [
  { icon: <Globe2 className="w-5 h-5 text-indigo-400" />, text: "50+ Countries Exported", x: "-10%", y: "20%", delay: 0 },
  { icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, text: "Premium Quality Assured", x: "85%", y: "30%", delay: 2 },
  { icon: <TrendingUp className="w-5 h-5 text-indigo-400" />, text: "Bulk Supply Ready", x: "75%", y: "60%", delay: 1 },
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Images with Heavy Dark Overlay to feel SaaS-like */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}F
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentImage]}
            alt="Vatan Foods Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0E1217]/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E1217]" />
        </motion.div>
      </AnimatePresence>
      
      {/* Abstract Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000" />
      
      {/* Floating Stat Cards for SaaS feel */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none max-w-7xl mx-auto">
        {floatingStats.map((stat, index) => (
          <motion.div
            key={index}
            className="absolute glass px-4 py-3 rounded-2xl flex items-center gap-3 shadow-2xl"
            style={{ left: stat.x, top: stat.y }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              delay: stat.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="bg-white/10 p-2 rounded-xl">
              {stat.icon}
            </div>
            <span className="text-white font-medium text-sm">{stat.text}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <motion.a
            href="#products"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-8 transition-colors"
          >
            <span className="bg-gradient-to-r from-indigo-500 to-emerald-500 text-transparent bg-clip-text font-semibold text-sm">
              {t('hero.badge', 'New: Global Bulk Supply Program')}
            </span>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </motion.a>
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            {t('hero.title', 'Premium Food Products')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              {t('hero.subtitle', 'Exported Worldwide 🌍')}
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          >
            {t('hero.description', 'Bulk food supply for restaurants, retailers, and distributors across the globe. Unmatched quality, reliable logistics, and competitive pricing.')}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}
          >
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.cta1', 'Request Quote')}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={scrollToProducts}
              className="w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.explore', 'View Products')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentImage === index 
                ? 'w-8 bg-indigo-500' 
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;