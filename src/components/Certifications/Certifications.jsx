import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ShieldCheck, FileText, CheckCircle2, X, ExternalLink, Award } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Modal state can be null, "FSSAI", or "GST"
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="certifications" className="py-24 bg-[#0A0D14] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full filter blur-[100px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Compliance Verified</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
              Trusted & Certified <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
                Food Supplier
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mb-8">
              We operate under the strictest international food safety and taxation standards. Our business is verified by the Government of India to guarantee uninterrupted, legally compliant quality from our farms to your business.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "100% Export Compliant Logistics",
                "Advanced Hygiene & Storage Protocols",
                "Fully Registered & Tax Compliant Entity"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Right Cards (Vertical Stack) */}
          <div className="flex flex-col gap-8 w-full max-w-lg mx-auto lg:ml-auto">
            
            {/* FSSAI Certificate Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0E1217] rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <ShieldCheck className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold tracking-wider uppercase text-emerald-400">Verified</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">FSSAI Certified ✅</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-[#1a2130]/50 p-4 rounded-xl border border-white/5 flex flex-col">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">License No</span>
                    <span className="text-slate-200 font-mono text-lg tracking-wide">13625010001224</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#1a2130]/50 p-4 rounded-xl border border-white/5 flex flex-col">
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Valid Till</span>
                      <span className="text-slate-200 font-medium tracking-wide">2026</span>
                    </div>
                    <div className="bg-[#1a2130]/50 p-4 rounded-xl border border-white/5 flex flex-col">
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Location</span>
                      <span className="text-slate-200 font-medium tracking-wide">Telangana, IN</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveModal("FSSAI")}
                  className="w-full py-4 rounded-xl flex items-center justify-center gap-2 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white font-bold border border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300"
                >
                  <FileText className="w-5 h-5" /> View FSSAI Certificate
                </button>
              </div>
            </motion.div>

            {/* GST Certificate Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#0E1217] rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <Award className="w-7 h-7 text-indigo-400" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-xs font-bold tracking-wider uppercase text-indigo-400">Registered</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">GST Registered ✅</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-[#1a2130]/50 p-4 rounded-xl border border-white/5 flex flex-col">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">GSTIN</span>
                    <span className="text-slate-200 font-mono text-lg tracking-wide">36AJXPK5887B1ZL</span>
                  </div>
                  <div className="grid grid-col-1 gap-4">
                     <div className="bg-[#1a2130]/50 p-4 rounded-xl border border-white/5 flex flex-col">
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Trade Name</span>
                      <span className="text-slate-200 font-medium tracking-wide">M/S VITTLE FOODS</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#1a2130]/50 p-4 rounded-xl border border-white/5 flex flex-col">
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Legal Name</span>
                      <span className="text-slate-200 font-medium text-sm tracking-wide truncate">SURESH KOTHAMASU</span>
                    </div>
                    <div className="bg-[#1a2130]/50 p-4 rounded-xl border border-white/5 flex flex-col">
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">HQ</span>
                      <span className="text-slate-200 font-medium text-sm tracking-wide truncate">Hyderabad, TG</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveModal("GST")}
                  className="w-full py-4 rounded-xl flex items-center justify-center gap-2 bg-indigo-500/10 hover:bg-indigo-500 text-indigo-400 hover:text-white font-bold border border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300"
                >
                  <FileText className="w-5 h-5" /> View GST Certificate
                </button>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>

      {/* Unified Certificate Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a] rounded-3xl max-w-3xl w-full border border-white/10 shadow-2xl overflow-hidden relative"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#0E1217]">
                <div className="flex items-center gap-3">
                  {activeModal === "FSSAI" ? <ShieldCheck className="w-6 h-6 text-emerald-400" /> : <Award className="w-6 h-6 text-indigo-400" />}
                  <h3 className="text-xl font-bold text-white">
                    {activeModal === "FSSAI" ? "FSSAI Food Safety Certificate" : "GST Registration Certificate"}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Stylized Modal Body Based on Type */}
              <div className="p-8 md:p-12 flex justify-center items-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-[#0b0f19]">
                <div className="bg-white p-8 md:p-12 w-full max-w-lg rounded-xl shadow-2xl relative">
                  
                  {activeModal === "FSSAI" ? (
                    // FSSAI Layout
                    <div className="border-[4px] border-double border-emerald-900/20 p-8 text-center text-slate-800">
                      <div className="w-20 h-20 mx-auto mb-6 opacity-80 flex items-center justify-center">
                         <div className="w-16 h-16 rounded-full border-4 border-orange-500/80 flex items-center justify-center">
                            <span className="font-bold text-xl text-orange-600">fssai</span>
                         </div>
                      </div>
                      <h2 className="text-2xl font-bold tracking-widest text-[#1a2130] mb-2 uppercase">Registration Certificate</h2>
                      <p className="text-xs font-semibold text-slate-500 mb-8 uppercase tracking-widest">Food Safety and Standards Authority of India</p>
                      
                      <div className="space-y-4 text-left max-w-sm mx-auto mb-10">
                        <div className="border-b border-slate-200 pb-2">
                          <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Registration Number</span>
                          <span className="font-mono text-lg font-bold text-slate-800">13625010001224</span>
                        </div>
                        <div className="border-b border-slate-200 pb-2">
                          <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Business Name</span>
                          <span className="font-bold text-slate-700">VATAN FOODS</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div className="text-left">
                          <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Valid Until</span>
                          <span className="font-bold text-emerald-600">December 2026</span>
                        </div>
                        <div className="w-24 border-t-2 border-slate-300 pt-2 text-center">
                          <span className="text-[10px] uppercase font-bold text-slate-400">Authorized</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // GST Layout
                    <div className="border-[4px] border-double border-indigo-900/20 p-8 text-center text-slate-800">
                      <div className="w-20 h-20 mx-auto mb-6 opacity-80 flex items-center justify-center">
                         <div className="w-16 h-16 rounded-full border-4 border-slate-800 flex items-center justify-center">
                            <span className="font-bold text-xl text-slate-800">GST</span>
                         </div>
                      </div>
                      <h2 className="text-2xl font-bold tracking-widest text-[#1a2130] mb-2 uppercase">Registration Certificate</h2>
                      <p className="text-xs font-semibold text-slate-500 mb-8 uppercase tracking-widest">Government of India / Government of Telangana</p>
                      
                      <div className="space-y-4 text-left max-w-sm mx-auto mb-10">
                        <div className="border-b border-slate-200 pb-2">
                          <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Registration Number (GSTIN)</span>
                          <span className="font-mono text-lg font-bold text-slate-800">36AJXPK5887B1ZL</span>
                        </div>
                        <div className="border-b border-slate-200 pb-2">
                          <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Legal Name</span>
                          <span className="font-bold text-slate-700">SURESH KOTHAMASU</span>
                        </div>
                        <div className="border-b border-slate-200 pb-2">
                          <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Trade Name</span>
                          <span className="font-bold text-slate-700">M/S VITTLE FOODS</span>
                        </div>
                      </div>
                      
                      <div className="text-center w-32 mx-auto border-t-2 border-slate-300 pt-2">
                         <span className="text-[10px] uppercase font-bold text-slate-400">Verifiable Entity</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-8 py-5 border-t border-white/5 bg-[#0E1217] flex justify-end">
                  <a href="#/" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors">
                    <ExternalLink className="w-4 h-4" /> Open Original PDF Document
                  </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
