import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

// Product images
import toorDal from '../../assets/products/toor-dal.jpg';
import maida from '../../assets/products/maida.jpg';
import besan from '../../assets/products/besan.jpg';
import turmeric from '../../assets/products/turmeric.jpg';
import dryFruits from '../../assets/products/dry-fruits.jpg';
import chili from '../../assets/products/chili.jpg';
import basmati from '../../assets/products/basmati.jpg';
import cumin from '../../assets/products/cumin.jpg';

const products = [
  { id: 1, name: 'Toor Dal', nameHi: 'तूर दाल', nameAr: 'توور دال', category: 'Pulses', image: toorDal, description: 'Premium quality split pigeon peas' },
  { id: 2, name: 'Premium Maida', nameHi: 'मैदा', nameAr: 'مايدا', category: 'Flour', image: maida, description: 'Fine refined wheat flour' },
  { id: 3, name: 'Besan', nameHi: 'बेसन', nameAr: 'بيسان', category: 'Flour', image: besan, description: 'Pure chickpea flour' },
  { id: 4, name: 'Turmeric Powder', nameHi: 'हल्दी', nameAr: 'كركم', category: 'Spices', image: turmeric, description: 'Golden turmeric from Indian farms' },
  { id: 5, name: 'Mixed Dry Fruits', nameHi: 'सूखे मेवे', nameAr: 'فواكه مجففة', category: 'Dry Fruits', image: dryFruits, description: 'Premium assorted dry fruits' },
  { id: 6, name: 'Red Chili Powder', nameHi: 'लाल मिर्च', nameAr: 'فلفل أحمر', category: 'Spices', image: chili, description: 'Authentic Kashmiri red chili' },
  { id: 7, name: 'Basmati Rice', nameHi: 'बासमती चावल', nameAr: 'أرز بسمتي', category: 'Rice', image: basmati, description: 'Aromatic long-grain basmati' },
  { id: 8, name: 'Cumin Seeds', nameHi: 'जीरा', nameAr: 'كمون', category: 'Spices', image: cumin, description: 'Whole cumin seeds' },
];

const categories = ['All', 'Pulses', 'Flour', 'Spices', 'Rice', 'Dry Fruits'];

const ProductShowcase = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const getProductName = (product) => {
    if (language === 'hi') return product.nameHi;
    if (language === 'ar') return product.nameAr;
    return product.name;
  };

  return (
    <section id="products" className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute inset-0 pattern-lines" />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
            Our Range
          </span>
          <h2 className="section-title">{t('products.title')}</h2>
          <p className="section-subtitle mt-4">{t('products.subtitle')}</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-medium'
                  : 'bg-card text-foreground hover:bg-muted border border-border'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="card-product group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredProduct === product.id ? 1.1 : 1 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-earth/90 via-earth/50 to-transparent flex items-end p-4"
                >
                  <p className="text-primary-foreground text-sm">
                    {product.description}
                  </p>
                </motion.div>

                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {getProductName(product)}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Export Grade Quality
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-saffron"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('products.viewAll')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
