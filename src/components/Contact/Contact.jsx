import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./Contact.css";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [enquiries, setEnquiries] = useState(() => {
    return JSON.parse(localStorage.getItem("vitalfoods_enquiries") || "[]");
  });

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const newErrors = {};

    if (formData.name.length < 2) newErrors.name = "Name is required";
    if (formData.company.length < 2)
      newErrors.company = "Company name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (formData.country.length < 2)
      newErrors.country = "Country is required";
    if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const newEntry = {
      ...formData,
      id: crypto.randomUUID(),
      timestamp: new Date().toLocaleString(),
    };

    const updated = [...enquiries, newEntry];
    setEnquiries(updated);
    localStorage.setItem("vitalfoods_enquiries", JSON.stringify(updated));

    setFormData({
      name: "",
      company: "",
      email: "",
      country: "",
      message: "",
    });

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.subtitle")}</p>
        </motion.div>

        {/* Success */}
        {isSubmitted && (
          <div className="success-box">
            <CheckCircle />
            <span>{t("contact.success")}</span>
          </div>
        )}

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          {errors.name && <small>{errors.name}</small>}

          <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
          {errors.company && <small>{errors.company}</small>}

          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {errors.email && <small>{errors.email}</small>}

          <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
          {errors.country && <small>{errors.country}</small>}

          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
          {errors.message && <small>{errors.message}</small>}

          <button type="submit" disabled={isSubmitting}>
            <Send /> {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>

        {/* TABLE */}
        {enquiries.length > 0 && (
          <div className="table-wrapper">
            <h3>Enquiries</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((e) => (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.company}</td>
                    <td>{e.email}</td>
                    <td>{e.country}</td>
                    <td>{e.message}</td>
                    <td>{e.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
