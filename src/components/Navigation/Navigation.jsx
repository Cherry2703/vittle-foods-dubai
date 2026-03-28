import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'products', href: '#products' },
  { key: 'global', href: '#global' },
  { key: 'pricing', href: '#pricing' },
];

export function Navigation() {
  const { t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E1217]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-lg transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-br from-indigo-500 to-emerald-500 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-white/10 text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                VF
              </div>
              <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-emerald-400 transition-all duration-300">
                Vatan Foods
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                  whileHover={{ y: -1 }}
                >
                  {t(`nav.${item.key}`) || item.key.charAt(0).toUpperCase() + item.key.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Language Switcher & Actions */}
            <div className="hidden lg:flex items-center gap-4 border-l border-white/10 pl-6">
              <LanguageSwitcher />
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="px-5 py-2.5 rounded-lg font-medium text-sm bg-indigo-500 hover:bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
              >
                Request Quote
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 lg:hidden">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`fixed inset-x-0 ${isScrolled ? 'top-[72px]' : 'top-[88px]'} z-40 bg-[#0E1217]/95 backdrop-blur-xl border-b border-white/10 lg:hidden overflow-hidden transition-all duration-300`}
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-lg font-medium text-slate-300 hover:text-white py-3 border-b border-white/5 transition-colors"
                    whileHover={{ x: isRTL ? -10 : 10 }}
                  >
                    {t(`nav.${item.key}`) || item.key.charAt(0).toUpperCase() + item.key.slice(1)}
                  </motion.a>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    scrollToSection('#contact');
                  }}
                  className="mt-4 w-full py-4 rounded-xl font-medium text-base bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                >
                  Request Quote
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
