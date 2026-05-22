import { useLanguage } from "../../contexts/LanguageContext";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "global", href: "#global" }
];

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A0D14] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center font-bold text-white text-xs">
                VF
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">Vatan Foods</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Premium global food supply and export enterprise. Empowering international scale through quality and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                  >
                    {t(`nav.${link.key}`) || link.key.charAt(0).toUpperCase() + link.key.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">Hyderabad, Telangana, India</li>
              <li><a href="mailto:vatanfoods1200@gmail.com" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">vatanfoods1200@gmail.com</a></li>
              <li><a href="tel:+917306969299" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">+91 7306969299</a></li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-white font-bold mb-6">Compliance</h4>
            <div className="bg-[#1a2130]/50 border border-white/5 rounded-xl p-4 mb-4">
               <div className="flex items-center gap-2 mb-2">
                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                 <span className="text-white font-bold text-sm">FSSAI Certified</span>
               </div>
               <p className="text-slate-400 text-xs font-mono mb-3">Lic: 13620010000206</p>
               <button 
                  onClick={() => scrollToSection("#certifications")}
                  className="w-full py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-lg transition-colors border border-emerald-500/20"
               >
                 View Certificate
               </button>
            </div>
            <ul className="space-y-2">
              <li><a href="#/" className="text-slate-500 hover:text-indigo-400 text-xs transition-colors">Trade Compliance</a></li>
              <li><a href="#/" className="text-slate-500 hover:text-indigo-400 text-xs transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Vatan Foods Dashboard. All rights reserved.
          </p>
          <span className="text-slate-400 text-sm font-medium">Website developed by Ram Charan Teja . [ramcharanteja2703@gmail.com]</span>

          <div className="flex gap-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] self-center animate-pulse" />
            <span className="text-slate-400 text-sm font-medium">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
