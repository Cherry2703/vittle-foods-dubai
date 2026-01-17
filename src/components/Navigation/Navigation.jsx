import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'products', href: '#products' },
  { key: 'why', href: '#why' },
  { key: 'global', href: '#global' },
  { key: 'contact', href: '#contact' },
];

export function Navigation() {
  const { t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-lg shadow-medium py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg ${
                  isScrolled
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-primary-foreground/90 text-primary'
                }`}
              >
                VF
              </div>
              <span
                className={`font-display font-bold text-xl hidden sm:block ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                Vittle HealthyFoods
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`font-medium  transition-colors ${
                    isScrolled
                      ? 'text-foreground hover:text-primary'
                      : 'text-primary-foreground/90 hover:text-primary-foreground'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {t(`nav.${item.key}`)}
                </motion.a>
              ))}
            </div>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 bg-cream/98 backdrop-blur-lg shadow-strong lg:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border"
                    whileHover={{ x: isRTL ? -10 : 10 }}
                  >
                    {t(`nav.${item.key}`)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


export default Navigation;
