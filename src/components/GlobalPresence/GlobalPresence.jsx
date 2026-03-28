import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe2, Ship, Plane, Navigation } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const regions = [
  { name: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait'], position: { top: '40%', right: '35%' }, delay: 0 },
  { name: 'Europe', countries: ['UK', 'Germany', 'France', 'Netherlands'], position: { top: '30%', right: '45%' }, delay: 0.2 },
  { name: 'Americas', countries: ['USA', 'Canada', 'Brazil', 'Mexico'], position: { top: '45%', left: '20%' }, delay: 0.4 },
  { name: 'Asia Pacific', countries: ['Singapore', 'Australia', 'Japan', 'Malaysia'], position: { top: '60%', right: '15%' }, delay: 0.6 },
  { name: 'Africa', countries: ['South Africa', 'Kenya', 'Nigeria'], position: { top: '65%', right: '40%' }, delay: 0.8 },
];

const GlobalPresence = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <section id="global" className="py-24 bg-[#0A0D14] relative overflow-hidden border-t border-white/5">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <Globe2 className="w-4 h-4" />
              <span>{t('global.badge', 'Worldwide Operations')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              {t('global.title1', 'Exporting Excellence to')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                {t('global.title2', 'Every Continent')}
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              {t('global.description', "Seamless global logistics, secure packaging, and efficient customs handling to ensure your bulk food supply arrives fresh and on time, anywhere in the world.")}
            </p>
          </motion.div>
        </div>
        
        {/* Abstract World Map Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#0E1217]/50 rounded-3xl border border-white/10 backdrop-blur-md overflow-hidden mb-16 shadow-2xl"
        >
          {/* Central Globe Icon placeholder */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Globe2 className="w-[400px] h-[400px] text-indigo-500" strokeWidth={0.5} />
          </div>

          {/* Logistics Icons Floating */}
          <motion.div animate={{ x: [0, 20, 0], y: [-10, 10, -10] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/3 text-emerald-400/30">
            <Plane className="w-12 h-12" />
          </motion.div>
          <motion.div animate={{ x: [0, -20, 0], y: [10, -10, 10] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-1/3 right-1/4 text-indigo-400/30">
            <Ship className="w-12 h-12" />
          </motion.div>

          {/* Connected Region Pins */}
          {regions.map((region) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + region.delay }}
              className="absolute hidden md:flex flex-col items-center group cursor-pointer"
              style={region.position}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md animate-pulse" />
                <div className="relative w-4 h-4 bg-emerald-400 rounded-full border-2 border-white shadow-lg z-10" />
                
                {/* Connecting Line to center (Simulated) */}
                <svg className="absolute top-2 left-2 w-40 h-40 opacity-20 pointer-events-none -z-10" style={{ transform: 'translate(-50%, -50%)' }}>
                  <line x1="50%" y1="50%" x2="100%" y2="100%" stroke="url(#gradient)" strokeDasharray="4 4" strokeWidth="2" />
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <div className="mt-4 bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none absolute top-full w-48 z-20">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-indigo-400" />
                  {region.name}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {region.countries.map(c => (
                    <span key={c} className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-slate-300 font-medium">{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Mobile Fallback View */}
          <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <Globe2 className="w-24 h-24 text-indigo-500/50 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Global Network</h3>
            <p className="text-slate-400 text-sm">Tap on regions below to explore our worldwide export capabilities.</p>
          </div>
        </motion.div>
        
        {/* Regions Grid for Mobile & Desktop Fallback */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass p-6 text-center rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.02] transition-colors group cursor-pointer"
            >
              <h4 className="font-display font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-emerald-400 transition-all">
                {region.name}
              </h4>
              <div className="space-y-2">
                {region.countries.slice(0, 3).map((country) => (
                  <p key={country} className="text-sm text-slate-400 font-medium">
                    {country}
                  </p>
                ))}
                {region.countries.length > 3 && (
                  <p className="text-xs text-indigo-400 font-bold mt-2">
                    +{region.countries.length - 3} more countries
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