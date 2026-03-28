import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'hi', label: 'हि', name: 'हिंदी' },
  { code: 'ar', label: 'ع', name: 'العربية' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center space-x-1 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-sm">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
            language === lang.code 
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' 
              : 'text-slate-400 hover:text-white hover:bg-white/10'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={lang.name}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
