import { LanguageProvider } from "../../contexts/LanguageContext";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import Certifications from "../../components/Certifications/Certifications";
import About from "../../components/About/About";
import ProductShowcase from "../../components/ProductShowcase/ProductShowcase";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
// import GlobalPresence from "../../components/GlobalPresence/GlobalPresence";
import DashboardProcess from "../../components/DashboardProcess/DashboardProcess";
import Pricing from "../../components/Pricing/Pricing";
import Testimonials from "../../components/Testimonials/Testimonials";
import CTA from "../../components/CTA/CTA";
import ContactPage from "../../components/ContactPage/ContactPage";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0E1217] selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden max-w-[100vw]">
        <Navigation />
 
        <main>
          <Hero />
          <Certifications />
          <About />
          <ProductShowcase />
          {/* <GlobalPresence /> */}
          <WhyChooseUs />
          <DashboardProcess />
          <Pricing />
          <Testimonials />
          <CTA />
          <ContactPage />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
