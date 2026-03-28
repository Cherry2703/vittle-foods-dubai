import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, PlaneTakeoff, Factory, Leaf } from "lucide-react";

const steps = [
  { id: "01", title: "Global Sourcing", desc: "Direct partnerships with certified premium farms.", icon: Leaf, status: "completed" },
  { id: "02", title: "Hygienic Processing", desc: "Multi-stage cleaning and quality checks.", icon: Factory, status: "current" },
  { id: "03", title: "Secure Packaging", desc: "Export-grade packing to maintain freshness.", icon: Box, status: "upcoming" },
  { id: "04", title: "Global Export", desc: "Compliant logistics and customs clearance.", icon: PlaneTakeoff, status: "upcoming" }
];

const DashboardProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#0A0D14] text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">You Can Trust</span>
            </h2>
            <p className="text-lg text-slate-400">Experience full visibility over our rigid supply chain and quality control pipeline.</p>
          </motion.div>
        </div>

        {/* Dashboard Frame */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-[#0E1217] rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Dashboard Header */}
          <div className="bg-[#1a2130] px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="text-sm font-medium text-slate-400 bg-black/20 px-4 py-1.5 rounded-full">
              Order #VF-84920
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Quality Assurance Pipeline</h3>
              <p className="text-sm text-slate-400">ISO 9001 & FSSAI Compliant Operations</p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-6 left-0 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={isInView ? { width: "50%" } : {}} 
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400"
                />
              </div>

              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, i) => (
                  <div key={step.id} className="relative">
                    <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center transition-colors border-4 border-[#0E1217]
                      ${step.status === 'completed' ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 
                        step.status === 'current' ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-pulse' : 
                        'bg-[#1a2130] text-slate-500 border-white/5'}`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="text-indigo-400 text-xs font-bold mb-1">STEP {step.id}</div>
                    <h4 className={`font-bold text-base mb-2 ${step.status === 'upcoming' ? 'text-slate-500' : 'text-white'}`}>{step.title}</h4>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardProcess;

