import { motion } from "framer-motion";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./Footer.css";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "why", href: "#why" },
  { key: "global", href: "#global" },
  { key: "contact", href: "#contact" },
];

const Footer = () => {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-header">
              <div className="brand-logo">VF</div>
              <span className="brand-name">Vittle Healthy Foods</span>
            </div>

            <p className="footer-tagline">{t("footer.tagline")}</p>

            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin />
                <span>Mumbai, Maharashtra, India</span>
              </div>

              <div className="footer-contact-item">
                <Mail />
                <a href="mailto:exports@vittlehealthyfoods.in">
                  exports@vittlehealthyfoods.in
                </a>
              </div>

              <div className="footer-contact-item">
                <Phone />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">{t("footer.quickLinks")}</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    whileHover={{ x: isRTL ? -5 : 5 }}
                  >
                    {t(`nav.${link.key}`)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="footer-title">{t("footer.contactUs")}</h4>
            <p className="footer-description">
              For business enquiries and bulk orders, reach out to our export
              team.
            </p>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="footer-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>{t("footer.madeIn")}</span>
            <Heart className="heart-icon" />
            <span>🇮🇳</span>
          </div>

          <p className="footer-copy">
            © {currentYear} Vittle Healthy Foods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
