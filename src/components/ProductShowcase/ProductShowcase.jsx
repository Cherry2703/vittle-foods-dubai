import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, X, ChevronRight } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

// --- RICE & GRAINS IMAGES ---
import toorDal from "../../assets/products/toor dal.webp";
import basmati from "../../assets/products/basmati.jpg";
import wheatFlour from "../../assets/products/wheat-flour.webp";
import uradDal from "../../assets/products/urad dal.webp";
import brownChana from "../../assets/products/brown-chana.jpg";
import maida from "../../assets/products/maida.jpg";
import riceFlour from "../../assets/products/rice-flour.jpg";
import besan from "../../assets/products/besan.jpg";
import millets from "../../assets/products/millets.jpg";
import rawPeanut from "../../assets/products/peanuts.jpeg";

// --- SPICES & MASALAS IMAGES ---
import turmeric from "../../assets/products/turmeric.jpg";
import cloves from "../../assets/products/cloves.webp";
import cinnamon from "../../assets/products/cinnamon.webp";
import cardamom from "../../assets/products/cardamom.jpg";
import bayLeaf from "../../assets/products/bay-leaf.webp";
import cumin from "../../assets/products/cumin.jpg";
import blackPepper from "../../assets/products/black-pepper.webp";
import greenPepper from "../../assets/products/green-pepper.webp";
import cassia from "../../assets/products/cassia.webp";
import celery from "../../assets/products/celery.jpg";
import chili from "../../assets/products/chili.jpg";
import redChili from "../../assets/products/red-chili.webp";
import coriander from "../../assets/products/coriander.jpg";
import curryPowder from "../../assets/products/curry-powder.jpg";
import mixedMasala from "../../assets/products/mixed-masala.jpg";
import seasonMix from "../../assets/products/season-mix.webp";

// --- DRY FRUITS & DATES IMAGES ---
import walnuts from "../../assets/products/walnuts.jpg";
import cashew from "../../assets/products/cashews.webp";
import almonds from "../../assets/products/almonds.webp";
import anjeer from "../../assets/products/anjeer.jpg";
import pistachios from "../../assets/products/pistha.jpg";
import dates from "../../assets/products/dates.webp";
import dryFruits from "../../assets/products/dry-fruits.jpg";

/* ---------------- DATA ---------------- */

const CATEGORIES = [
  "Rice & Grains",
  "Spices & Masalas",
  "Dry Fruits & Dates"
];

const PRODUCTS = [
  // --- RICE & GRAINS (Includes Pulses) ---
  { id: 1, category: "Rice & Grains", name: "Basmati Rice", description: "Premium long grain aromatic rice", image: basmati },
  { id: 2, category: "Rice & Grains", name: "Wheat Flour", description: "High-grade refined wheat flour", image: wheatFlour },
  { id: 3, category: "Rice & Grains", name: "Maida", description: "Refined wheat flour ideal for baking and cooking", image: maida },
  { id: 4, category: "Rice & Grains", name: "Millets", description: "Nutritious farm-sourced millets", image: millets },
  { id: 5, category: "Rice & Grains", name: "Toor Dal (Pulses)", description: "Premium quality Toor Dal", image: toorDal },
  { id: 6, category: "Rice & Grains", name: "Urad Dal", description: "Premium whole urad dal with rich taste", image: uradDal },
  { id: 7, category: "Rice & Grains", name: "Brown Chana", description: "Naturally sourced brown chana", image: brownChana },
  { id: 8, category: "Rice & Grains", name: "Besan (Gram Flour)", description: "High-protein chickpea flour with rich aroma", image: besan },
  { id: 9, category: "Rice & Grains", name: "Rice Flour", description: "Fine rice flour used in traditional recipes", image: riceFlour },
  { id: 10, category: "Rice & Grains", name: "Raw Peanuts", description: "High-grade raw peanuts ideal for roasting", image: rawPeanut },
  
  // --- SPICES & MASALAS ---
  { id: 101, category: "Spices & Masalas", name: "Black Pepper", description: "Bold and spicy black pepper", image: blackPepper },
  { id: 102, category: "Spices & Masalas", name: "Green Pepper", description: "Freshly dried aromatic green pepper", image: greenPepper },
  { id: 103, category: "Spices & Masalas", name: "Cardamom", description: "High-grade green cardamom with rich fragrance", image: cardamom },
  { id: 104, category: "Spices & Masalas", name: "Cassia", description: "Premium quality cassia bark", image: cassia },
  { id: 105, category: "Spices & Masalas", name: "Celery Seeds", description: "Dried celery seeds for export", image: celery },
  { id: 106, category: "Spices & Masalas", name: "Green Chillies", description: "Dried spicy green chillies", image: chili },
  { id: 107, category: "Spices & Masalas", name: "Red Chillies", description: "Hot dried authentic red chillies", image: redChili },
  { id: 108, category: "Spices & Masalas", name: "Cinnamon", description: "Premium cinnamon sticks with warm aroma", image: cinnamon },
  { id: 109, category: "Spices & Masalas", name: "Cloves", description: "Aromatic whole cloves with strong flavor", image: cloves },
  { id: 110, category: "Spices & Masalas", name: "Coriander", description: "Freshly ground premium coriander", image: coriander },
  { id: 111, category: "Spices & Masalas", name: "Cumin Seeds", description: "Fresh cumin seeds with strong aroma", image: cumin },
  { id: 112, category: "Spices & Masalas", name: "Curry Powder", description: "Authentic blended curry powder", image: curryPowder },
  { id: 113, category: "Spices & Masalas", name: "Mixed Masala", description: "Special export-grade mixed spice blend", image: mixedMasala },
  { id: 114, category: "Spices & Masalas", name: "Seasoning Mix", description: "All-purpose herb and spice seasoning", image: seasonMix },
  { id: 115, category: "Spices & Masalas", name: "Turmeric Powder", description: "High curcumin authentic turmeric", image: turmeric },
  { id: 116, category: "Spices & Masalas", name: "Bay Leaf", description: "Naturally dried bay leaves for authentic flavor", image: bayLeaf },

  // --- DRY FRUITS & DATES ---
  { id: 301, category: "Dry Fruits & Dates", name: "Premium Dates", description: "Export grade authentic Middle Eastern dates", image: dates },
  { id: 302, category: "Dry Fruits & Dates", name: "Walnuts", description: "Premium quality walnuts rich in omega-3", image: walnuts },
  { id: 303, category: "Dry Fruits & Dates", name: "Cashew Nuts", description: "Handpicked cashew nuts with rich taste", image: cashew },
  { id: 304, category: "Dry Fruits & Dates", name: "Almonds", description: "High-grade almonds packed with protein", image: almonds },
  { id: 305, category: "Dry Fruits & Dates", name: "Dried Figs (Anjeer)", description: "Naturally dried figs with sweetness", image: anjeer },
  { id: 306, category: "Dry Fruits & Dates", name: "Pistachios", description: "Premium pistachios with authentic aroma", image: pistachios },
  { id: 307, category: "Dry Fruits & Dates", name: "Mixed Dry Fruits", description: "Assorted high-protein dry fruits mix", image: dryFruits }
];

const ProductShowcase = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[1]); // Defaulting to Spices
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchFilter = p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchFilter && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="py-24 bg-[#0A0D14] text-white relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
              {t('products.title1', 'Premium')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">{t('products.title2', 'Products Catalog')}</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl">
              {t('products.description', 'Explore our extensive range of high-quality food products ready for global export. Select a category below to view our offerings.')}
            </p>
          </div>
          
          <div className="relative w-full md:w-80 shrink-0 border-t border-white/5 pt-6 md:pt-0 md:border-none">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 md:top-1/2 md:-translate-y-1/2 mt-3 md:mt-0" />
            <input 
              type="text" 
              placeholder={t('products.search', 'Search catalog...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0E1217] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors shadow-inner mt-6 md:mt-0"
            />
          </div>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* CATEGORY SIDEBAR */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="bg-[#0E1217] border border-white/5 rounded-2xl p-4 lg:sticky lg:top-28 shadow-xl">
              <h3 className="text-slate-400 text-xs font-bold tracking-wider uppercase mb-4 px-4 hidden lg:block">Categories</h3>
              
              {/* Mobile Scrollable horizontal Tab list, Desktop Vertical List */}
              <ul className="flex flex-row overflow-x-auto lg:flex-col space-x-3 lg:space-x-0 lg:space-y-2 pb-3 lg:pb-0 scrollbar-hide snap-x">
                {CATEGORIES.map((cat) => (
                  <li key={cat} className="shrink-0 lg:shrink snap-start">
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full flex items-center justify-between px-5 lg:px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm lg:text-base whitespace-nowrap lg:whitespace-normal border ${
                        activeCategory === cat
                          ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 shadow-lg shadow-indigo-500/5"
                          : "text-slate-300 hover:bg-white/5 hover:text-white border-white/5 lg:border-transparent bg-[#131822] lg:bg-transparent"
                      }`}
                    >
                      {cat}
                      {activeCategory === cat && (
                        <motion.div layoutId="active-indicator" className="w-2 h-2 rounded-full bg-indigo-400 hidden lg:block" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="flex-1 min-h-[500px]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <h3 className="text-2xl font-display font-bold text-white">{activeCategory}</h3>
              <span className="text-sm font-medium text-slate-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                {filteredProducts.length} Items
              </span>
            </div>

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="group bg-[#0E1217] rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-indigo-500/10 hover:-translate-y-1"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative h-56 lg:h-48 overflow-hidden bg-white/5 border-b border-white/5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1217] via-transparent to-transparent opacity-90" />
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-indigo-400 text-xs font-semibold mb-2 tracking-wide uppercase">{product.category}</div>
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-400 text-sm line-clamp-2 mb-6 flex-1 pr-4">
                        {product.description}
                      </p>
                      
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-emerald-400 transition-colors">Bulk Pricing</span>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 transition-colors border border-white/10">
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            {filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="w-full flex justify-center items-center py-24 border border-dashed border-white/10 rounded-2xl bg-[#0E1217]"
              >
                <div className="text-center text-slate-500">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/10">
                    <Search className="w-6 h-6 text-slate-400" />
                  </div>
                  <p className="mb-2 text-lg font-medium text-slate-300">No products match your search.</p>
                  <p className="text-sm">Please check out our other categories or contact our global sales team.</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0E1217] rounded-3xl max-w-4xl w-full mx-auto overflow-y-auto max-h-[90vh] flex flex-col md:flex-row border border-white/10 shadow-2xl relative"
            >
              <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto relative bg-[#0A0D14]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                {/* Mobile overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1217] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0E1217]" />
              </div>
              <div className="w-full md:w-1/2 p-8 lg:p-12 relative flex flex-col justify-center bg-[#0E1217]">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10 z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-wider uppercase mb-6 self-start">
                  {selectedProduct.category}
                </div>
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4 leading-tight">{selectedProduct.name}</h3>
                <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                  {selectedProduct.description}
                  <br /><br />
                  <span className="text-sm text-slate-400">
                    Our premium {selectedProduct.name.toLowerCase()} is meticulously processed and packaged for bulk supply, maintaining the highest food safety standards for our global B2B clients.
                  </span>
                </p>
                
                <button 
                  onClick={() => {
                    setSelectedProduct(null);
                    setTimeout(() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full py-4 rounded-xl flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 group"
                >
                  Request Custom Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductShowcase;
