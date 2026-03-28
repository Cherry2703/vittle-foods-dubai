import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, MessageCircle, MapPin, Mail, Phone, AlertCircleLoader, Loader2 } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import emailjs from '@emailjs/browser';

// EmailJS Configuration - To be filled by the user
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    businessType: "",
    productInterest: "",
    quantity: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (formData.name.length < 2) newErrors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email required";
    if (formData.phone.length < 5) newErrors.phone = "Valid phone required";
    if (formData.country.length < 2) newErrors.country = "Country is required";
    if (!formData.businessType) newErrors.businessType = "Please select business type";
    if (!formData.productInterest) newErrors.productInterest = "Please select product";
    if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;
    setIsSubmitting(true);
    
    try {
      if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
        // Mock successful submission if keys are not configured yet
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", country: "", businessType: "", productInterest: "", quantity: "", message: "" });
          setIsSubmitted(true);
          setIsSubmitting(false);
          setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
        return;
      }

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      setFormData({ name: "", email: "", phone: "", country: "", businessType: "", productInterest: "", quantity: "", message: "" });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {
      console.error("Submission failed", error);
      setSubmitError("Failed to send message. Please try again or use WhatsApp.");
    } finally {
      if (EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID") {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0D14] text-white relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Let's Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Business</span>
          </h2>
          <p className="text-lg text-slate-400">Submit your bulk requirements and our export team will get back to you with a custom quote within 24 hours.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Info Side */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
              
              <h3 className="text-2xl font-bold text-white mb-8">Global Headquarters</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Address</h4>
                    <p className="text-slate-400 mt-1 leading-relaxed">Hyderabad, Telangana<br />India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Email Us</h4>
                    <a href="mailto:vatanfoods1200@gmail.com" className="text-slate-400 hover:text-emerald-400 mt-1 block transition-colors">vatanfoods1200@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Call Us</h4>
                    <a href="tel:+917306969299" className="text-slate-400 hover:text-indigo-400 mt-1 block transition-colors">+91 7306969299</a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <a 
                  href="https://wa.me/917306969299" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] font-bold border border-[#25D366]/30 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="lg:col-span-3">
            <div className="bg-[#0E1217] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              {isSubmitted && (
                <div className="absolute inset-0 bg-[#0E1217]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-8 rounded-2xl">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                    <CheckCircle className="w-12 h-12 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-3xl font-display font-bold text-white mb-3">Quote Request Sent!</h3>
                  <p className="text-slate-400 text-lg">Our enterprise sales team will contact you shortly.</p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors`} placeholder="John Doe" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Business Email</label>
                    <input name="email" value={formData.email} onChange={handleChange} className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors`} placeholder="john@company.com" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Phone / WhatsApp</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors`} placeholder="+1 234 567 890" />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Destination Country</label>
                    <input name="country" value={formData.country} onChange={handleChange} className={`w-full bg-white/5 border ${errors.country ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors`} placeholder="United States" />
                    {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Business Type</label>
                    <div className="relative">
                      <select name="businessType" value={formData.businessType} onChange={handleChange} className={`w-full bg-[#151b23] border ${errors.businessType ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-indigo-500 transition-colors`}>
                        <option value="" disabled>Select Business Type...</option>
                        <option value="Restaurant Chain">Restaurant Chain</option>
                        <option value="Retail/Supermarket">Retail / Supermarket</option>
                        <option value="Wholesale Distributor">Wholesale Distributor</option>
                        <option value="Importer">Importer</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                    {errors.businessType && <p className="text-red-400 text-xs mt-1">{errors.businessType}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Primary Product Interest</label>
                    <div className="relative">
                      <select name="productInterest" value={formData.productInterest} onChange={handleChange} className={`w-full bg-[#151b23] border ${errors.productInterest ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-indigo-500 transition-colors`}>
                        <option value="" disabled>Select Product Category...</option>
                        <option value="Rice & Grains">Rice & Grains</option>
                        <option value="Pulses & Lentils">Pulses & Lentils</option>
                        <option value="Spices & Masalas">Spices & Masalas</option>
                        <option value="Sweeteners">Sweeteners</option>
                        <option value="Dry Fruits">Dry Fruits & Dates</option>
                        <option value="Mix/Multiple">Mix / Multiple Products</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                    {errors.productInterest && <p className="text-red-400 text-xs mt-1">{errors.productInterest}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Quantity Required & Order Details</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none`} placeholder="e.g. Need 20 tons of Basmati Rice delivered to New York port monthly. Please include estimated shipping costs." />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {submitError && (
                  <div className="text-red-400 bg-red-400/10 border border-red-400/20 px-4 py-3 rounded-xl text-sm">
                    {submitError}
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-emerald-500 text-white font-bold hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Processing Request...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Request Custom Quote</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
