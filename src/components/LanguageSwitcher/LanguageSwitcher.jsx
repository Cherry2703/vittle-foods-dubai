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
    <div className="lang-switcher  border-2 border-orange-500 rounded-full p-1">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`lang-btn mr-2 cursor-pointer ${language === lang.code ? 'lang-btn-active' : ''}`}
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
