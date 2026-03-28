import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const testimonials = [
  {
    quote: "Vatan Foods transformed our supply chain. Their premium basmati rice quality is unmatched, and their logistics transparency feels like a top-tier software platform.",
    name: "Ahmed Al-Fayed",
    role: "Procurement Director, Dubai Foods LLC",
    initial: "A"
  },
  {
    quote: "We've scaled our spice imports across Europe seamlessly. The custom packaging options and adherence to international standards make them our most reliable partner.",
    name: "Sarah Jenkins",
    role: "Head Buyer, EuroGrocers UK",
    initial: "S"
  },
  {
    quote: "Exceptional service and competitive pricing. The ability to request custom volume quotes easily has saved us countless hours of negotiation.",
    name: "Rajiv Menon",
    role: "Operations Manager, Global Distro",
    initial: "R"
  }
];

const Testimonials = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#0A0D14] text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t('testimonials.title1', 'Trusted by')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">{t('testimonials.title2', 'Global Leaders')}</span>
            </h2>
            <p className="text-lg text-slate-400">Join hundreds of international businesses that rely on Vatan Foods as their primary supply partner.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 relative flex flex-col"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-indigo-500/10 rotate-180" />
              
              <div className="flex-1 mb-8">
                <p className="text-slate-300 text-lg leading-relaxed italic relative z-10">"{testimonial.quote}"</p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center font-bold text-lg text-white font-display shadow-lg">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
