// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import toorDal from "../../assets/products/toor-dal.jpg";
// import basmati from "../../assets/products/basmati.jpg";
// import dryFruits from "../../assets/products/dry-fruits.jpg";
// import turmeric from "../../assets/products/turmeric.jpg";
// import wheatFlour from "../../assets/products/maida.jpg";
// import "./ProductShowcase.css";

// /* ---------------- API / CMS READY DATA ---------------- */

// const PRODUCTS = [
//   {
//     id: 1,
//     category: "Pulses",
//     name: "Toor Dal",
//     description: "Premium quality pigeon peas, hygienically packed",
//     image: toorDal,
//   },
//   {
//     id: 2,
//     category: "Rice",
//     name: "Basmati Rice",
//     description: "Long grain aromatic basmati rice",
//     image: basmati,
//   },
//   {
//     id: 3,
//     category: "Spices",
//     name: "Turmeric Powder",
//     description: "High curcumin turmeric sourced from farms",
//     image: turmeric,
//   },
//   {
//     id: 4,
//     category: "Dry Fruits",
//     name: "Dry Fruits",
//     description: "Premium quality dry fruits, hygienically packed",
//     image: dryFruits,
//   },
//   {
//     id: 5,
//     category: "Flours",
//     name: "Wheat Flour",
//     description: "Premium quality wheat flour, hygienically packed",
//     image: wheatFlour,
//   },
//   // 👉 Add top 15 only here
// ];

// const Filters = [
//      {
//           id:1,
//           name:"Pulses"
//      },
//      {
//           id:2,
//           name : "Floures"
//      },
//      {
//           id:3,
//           name : "Dry Fruits"
//      },
//      {
//           id:4,
//           name : "Spices"
//      },
//      {
//           id:5,
//           name : "Rice"
//      }
// ]

// /* ---------------- COMPONENT ---------------- */

// const ProductShowcase = () => {
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const containerRef = useRef(null);

//   /* -------- AUTO ROTATION -------- */
//   useEffect(() => {
//     if (paused) return;
//     const interval = setInterval(() => {
//       setIndex((i) => (i + 1) % PRODUCTS.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, [paused]);

//   /* -------- TOUCH SWIPE -------- */
//   let startX = 0;

//   const onTouchStart = (e) => {
//     startX = e.touches[0].clientX;
//   };

//   const onTouchEnd = (e) => {
//     const diff = startX - e.changedTouches[0].clientX;
//     if (diff > 50) next();
//     if (diff < -50) prev();
//   };

//   const next = () =>
//     setIndex((i) => (i + 1) % PRODUCTS.length);
//   const prev = () =>
//     setIndex((i) => (i - 1 + PRODUCTS.length) % PRODUCTS.length);

//   return (
//     <section className="product-showcase">
//       {/* CENTER HEADING */}
//       <div className="showcase-heading">
//         <h2>Our Premium Products</h2>
//         <p>
//           Explore our range of authentic Indian groceries, sourced with care and
//           exported with excellence
//         </p>
//       </div>


// {/* filters container */}
//       <div
//         className="circle-wrapper"
//         ref={containerRef}
//         onMouseEnter={() => setPaused(true)}
//         onMouseLeave={() => setPaused(false)}
//         onTouchStart={onTouchStart}
//         onTouchEnd={onTouchEnd}
//       >
//         {/* OUTER GLOW CIRCLE */}
//         <div className="outer-circle" />
//         <div className="inner-circle" />

//         {/* ROTATING PRODUCTS */}
//         {Filters.map((filter, i) => {
//           const angle =
//             ((360 / Filters.length) * (i - index)) * (Math.PI / 180);
//           const radius = 220;

//           return (
//             <motion.p
//               key={filter.id}
//               src={filter.image}
//               className="circle-product"
//               style={{
//                 transform: `
//                   translate(-50%, -50%)
//                   translate(${Math.cos(angle) * radius}px,
//                             ${Math.sin(angle) * radius}px)
//                   scale(${i === index ? 1.3 : 0.8})
//                 `,
//                 zIndex: i === index ? 10 : 1,
//                 opacity: i === index ? 1 : 0.5,
//               }}
//               transition={{ type: "spring", stiffness: 80 }}
//             />
//           );
//         })}

//         {/* CENTER PRODUCT INFO */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={PRODUCTS[index].id}
//             className="center-product"
//             initial={{ opacity: 0, scale: 0.85 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <img alt="image loading..." src={PRODUCTS[index].image} />
//             <h3>{PRODUCTS[index].name}</h3>
//             <p>{PRODUCTS[index].description}</p>

//             <button onClick={() => setShowModal(true)}>
//               Show More
//             </button>
//           </motion.div>
//         </AnimatePresence>

//         {/* CONTROLS */}
//         <button className="nav prev" onClick={prev}>‹</button>
//         <button className="nav next" onClick={next}>›</button>
//       </div>


//       {/* CIRCLE CONTAINER */}
//       <div
//         className="circle-wrapper"
//         ref={containerRef}
//         onMouseEnter={() => setPaused(true)}
//         onMouseLeave={() => setPaused(false)}
//         onTouchStart={onTouchStart}
//         onTouchEnd={onTouchEnd}
//       >
//         {/* OUTER GLOW CIRCLE */}
//         <div className="outer-circle" />
//         <div className="inner-circle" />

//         {/* ROTATING PRODUCTS */}
//         {PRODUCTS.map((product, i) => {
//           const angle =
//             ((360 / PRODUCTS.length) * (i - index)) * (Math.PI / 180);
//           const radius = 220;

//           return (
//             <motion.img
//               key={product.id}
//               src={product.image}
//               className="circle-product"
//               style={{
//                 transform: `
//                   translate(-50%, -50%)
//                   translate(${Math.cos(angle) * radius}px,
//                             ${Math.sin(angle) * radius}px)
//                   scale(${i === index ? 1.3 : 0.8})
//                 `,
//                 zIndex: i === index ? 10 : 1,
//                 opacity: i === index ? 1 : 0.5,
//               }}
//               transition={{ type: "spring", stiffness: 80 }}
//             />
//           );
//         })}

//         {/* CENTER PRODUCT INFO */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={PRODUCTS[index].id}
//             className="center-product"
//             initial={{ opacity: 0, scale: 0.85 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <img alt="image loading..." src={PRODUCTS[index].image} />
//             <h3>{PRODUCTS[index].name}</h3>
//             <p>{PRODUCTS[index].description}</p>

//             <button onClick={() => setShowModal(true)}>
//               Show More
//             </button>
//           </motion.div>
//         </AnimatePresence>

//         {/* CONTROLS */}
//         <button className="nav prev" onClick={prev}>‹</button>
//         <button className="nav next" onClick={next}>›</button>
//       </div>

//       {/* FULLSCREEN MODAL */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="modal"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <button className="close" onClick={() => setShowModal(false)}>×</button>

//             <div className="modal-grid">
//               {PRODUCTS.map((p) => (
//                 <div key={p.id} className="modal-card">
//                   <img alt="image loading..." src={p.image} />
//                   <h4>{p.name}</h4>
//                   <p>{p.description}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }


// export default ProductShowcase;










import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import toorDal from "../../assets/products/toor-dal.jpeg";
import basmati from "../../assets/products/basmati.jpg";
import turmeric from "../../assets/products/turmeric.jpg";
import wheatFlour from "../../assets/products/wheat-flour.jpeg";
import rawPeanut from "../../assets/products/raw-peanut.jpeg";
import uradDal from "../../assets/products/urad-dal.jpeg";
import brownChana from "../../assets/products/brown-chana.jpeg";
import maida from "../../assets/products/maida.jpg";
import riceFlour from "../../assets/products/rice-flour.jpg";
import besan from "../../assets/products/besan.jpg";
import walnuts from "../../assets/products/walnuts.jpg";
import cashew from "../../assets/products/cashews.webp";
import almonds from "../../assets/products/almonds.webp";
import anjeer from "../../assets/products/anjeer.jpg";
import pistachios from "../../assets/products/pistha.jpg";
import cloves from "../../assets/products/cloves.webp";
import cinnamon from "../../assets/products/cinnamon.webp";
import cardamom from "../../assets/products/cardamom.jpg";
import bayLeaf from "../../assets/products/bay-leaf.webp";
import cumin from "../../assets/products/cumin.jpg";
import blackPepper from "../../assets/products/black-pepper.webp";
import "./ProductShowcase.css";

/* ---------------- DATA ---------------- */

const PRODUCTS = [
  /* ================= PULSES ================= */
  {
    id: 1,
    category: "Pulses",
    name: "Toor Dal",
    description: "Premium quality pigeon peas",
    image: toorDal,
  },
  {
    id: 3,
    category: "Pulses",
    name: "Brown Chana",
    description: "Naturally sourced brown chana rich in protein",
    image: brownChana,
  },
  {
    id: 4,
    category: "Pulses",
    name: "Urad Dal (Whole)",
    description: "Premium whole urad dal with rich taste",
    image: uradDal,
  },
  {
    id: 6,
    category: "Pulses",
    name: "Raw Peanut",
    description: "High-grade raw peanuts ideal for cooking and roasting",
    image: rawPeanut,
  },

  /* ================= RICE ================= */
  {
    id: 7,
    category: "Rice",
    name: "Basmati Rice",
    description: "Long grain aromatic rice",
    image: basmati,
  },

  /* ================= FLOURS ================= */
  {
    id: 8,
    category: "Flours",
    name: "Wheat Flour",
    description: "Premium wheat flour",
    image: wheatFlour,
  },
  {
    id: 9,
    category: "Flours",
    name: "Maida",
    description: "Refined wheat flour ideal for baking and cooking",
    image: maida,
  },
  {
    id: 10,
    category: "Flours",
    name: "Rice Flour",
    description: "Fine rice flour used in traditional and modern recipes",
    image: riceFlour,
  },
  {
    id: 11,
    category: "Flours",
    name: "Gram Flour (Besan)",
    description: "High-protein chickpea flour with rich aroma",
    image: besan,
  },
  {
    id: 12,
    category: "Flours",
    name: "Sooji Rava",
    description: "Premium sooji rava ideal for traditional cooking",
    image: maida, // ⚠️ Replace with sooji image if available
  },

  /* ================= DRY FRUITS ================= */
  {
    id: 13,
    category: "Dry Fruits",
    name: "Walnuts",
    description: "Premium quality walnuts rich in omega-3 and nutrients",
    image: walnuts,
  },
  {
    id: 14,
    category: "Dry Fruits",
    name: "Cashew Nuts",
    description: "Handpicked cashew nuts with rich taste and crunch",
    image: cashew,
  },
  {
    id: 15,
    category: "Dry Fruits",
    name: "Almonds",
    description: "High-grade almonds packed with protein and energy",
    image: almonds,
  },
  {
    id: 16,
    category: "Dry Fruits",
    name: "Dried Figs (Anjeer)",
    description: "Naturally dried figs with rich fiber and sweetness",
    image: anjeer,
  },
  {
    id: 17,
    category: "Dry Fruits",
    name: "Pistachios",
    description: "Premium pistachios with authentic taste and aroma",
    image: pistachios,
  },

  /* ================= SPICES ================= */
  {
    id: 19,
    category: "Spices",
    name: "Turmeric Powder",
    description: "High curcumin turmeric",
    image: turmeric,
  },
  {
    id: 20,
    category: "Spices",
    name: "Cloves",
    description: "Aromatic whole cloves with strong flavor",
    image: cloves,
  },
  {
    id: 21,
    category: "Spices",
    name: "Cinnamon",
    description: "Premium cinnamon sticks with warm aroma",
    image: cinnamon,
  },
  {
    id: 22,
    category: "Spices",
    name: "Green Cardamom",
    description: "High-grade green cardamom with rich fragrance",
    image: cardamom,
  },
  {
    id: 23,
    category: "Spices",
    name: "Bay Leaf",
    description: "Naturally dried bay leaves for authentic flavor",
    image: bayLeaf,
  },
  {
    id: 24,
    category: "Spices",
    name: "Cumin Seeds",
    description: "Fresh cumin seeds with strong aroma",
    image: cumin,
  },
  {
    id: 25,
    category: "Spices",
    name: "Black Pepper",
    description: "Bold and spicy black pepper",
    image: blackPepper,
  }
];

const FILTERS = ["Pulses", "Flours", "Dry Fruits", "Spices", "Rice"];

/* ---------------- COMPONENT ---------------- */

const ProductShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("Pulses");
  const [filterIndex, setFilterIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showModal, setShowModal] = useState(false);

  /* -------- FILTER PRODUCTS -------- */
  const filteredProducts = useMemo(
    () => PRODUCTS.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  /* -------- AUTO ROTATE PRODUCTS -------- */
  useEffect(() => {
    if (paused || filteredProducts.length <= 1) return;
    const interval = setInterval(() => {
      setProductIndex((i) => (i + 1) % filteredProducts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [paused, filteredProducts]);

  /* -------- HANDLERS -------- */
  const selectFilter = (name, i) => {
    setActiveFilter(name);
    setFilterIndex(i);
    setProductIndex(0);
  };

  return (
    <section className="product-showcase">
      <div className="showcase-heading">
        <h2>Our Premium Products</h2>
        <p>Authentic Indian groceries sourced & exported with excellence</p>
      </div>

      {/* ================= FILTER CIRCLE ================= */}
      <div className="circle-wrapper filter-circle">
        <div className="outer-circle small" />
        <div className="inner-circle small" />

        {FILTERS.map((filter, i) => {
          const angle = ((360 / FILTERS.length) * (i - filterIndex)) * (Math.PI / 180);
          const radius = 140;

          return (
            <motion.button
              key={filter}
              className={`filter-item ${filter === activeFilter ? "active" : ""}`}
              onClick={() => selectFilter(filter, i)}
              style={{
                transform: `
                  translate(-50%, -50%)
                  translate(${Math.cos(angle) * radius}px,
                            ${Math.sin(angle) * radius}px)
                  scale(${filter === activeFilter ? 1.2 : 0.8})
                `,
                opacity: filter === activeFilter ? 1 : 0.5,
              }}
            >
              {filter}
            </motion.button>
          );
        })}

        <div className="filter-center">
          <h3>{activeFilter}</h3>
        </div>
      </div>

      {/* ================= PRODUCT CIRCLE ================= */}
      <div
        className="circle-wrapper"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="outer-circle" />
        <div className="inner-circle" />

        {filteredProducts.map((product, i) => {
          const angle = ((360 / filteredProducts.length) * (i - productIndex)) * (Math.PI / 180);
          const radius = 220;

          return (
            <motion.img
              key={product.id}
              src={product.image}
              className="circle-product"
              onClick={() => setProductIndex(i)}
              style={{
                transform: `
                  translate(-50%, -50%)
                  translate(${Math.cos(angle) * radius}px,
                            ${Math.sin(angle) * radius}px)
                  scale(${i === productIndex ? 1.3 : 0.8})
                `,
                opacity: i === productIndex ? 1 : 0.5,
              }}
            />
          );
        })}

        <AnimatePresence mode="wait">
          <motion.div
            key={filteredProducts[productIndex]?.id}
            className="center-product"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <img src={filteredProducts[productIndex]?.image} />
            <h3>{filteredProducts[productIndex]?.name}</h3>
            <p>{filteredProducts[productIndex]?.description}</p>
            <button onClick={() => setShowModal(true)}>Show More</button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {showModal && (
          <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="close" onClick={() => setShowModal(false)}>×</button>
            <div className="modal-grid">
              {filteredProducts.map((p) => (
                <div key={p.id} className="modal-card">
                  <img src={p.image} />
                  <h4>{p.name}</h4>
                  <p>{p.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductShowcase;
