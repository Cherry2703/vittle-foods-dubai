import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Award,
  Tag,
  Truck,
  DollarSign,
  HeadphonesIcon,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./WhyChooseUs.css";

const features = [
  { key: "quality", icon: Shield, gradient: "grad-primary" },
  { key: "standards", icon: Award, gradient: "grad-forest" },
  { key: "labeling", icon: Tag, gradient: "grad-turmeric" },
  { key: "supply", icon: Truck, gradient: "grad-earth" },
  { key: "pricing", icon: DollarSign, gradient: "grad-secondary" },
  { key: "support", icon: HeadphonesIcon, gradient: "grad-spice" },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="why-section">
      {/* Decorative blobs */}
      <div className="blob blob-primary" />
      <div className="blob blob-accent" />

      <div className="why-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="why-header"
        >
          <span className="why-eyebrow">Our Advantages</span>
          <h2 className="why-title">{t("why.title")}</h2>
          <p className="why-subtitle">{t("why.subtitle")}</p>
        </motion.div>

        {/* Grid */}
        <div className="why-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="why-card">
                  <div className={`why-icon ${feature.gradient}`}>
                    <Icon />
                  </div>

                  <h3 className="why-card-title">
                    {t(`why.${feature.key}.title`)}
                  </h3>

                  <p className="why-card-desc">
                    {t(`why.${feature.key}.desc`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
