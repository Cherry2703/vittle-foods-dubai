
import { LanguageProvider } from "../../contexts/LanguageContext";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import ProductShowcase from "../../components/ProductShowcase/ProductShowcase";
import Footer from "../../components/Footer/Footer"
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import GlobalPresence from "../../components/GlobalPresence/GlobalPresence";
import ContactPage from "../../components/ContactPage/ContactPage";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />

        <main>
          <Hero />
          <About />
          <ProductShowcase />
          <WhyChooseUs />
          <GlobalPresence />
          <ContactPage/>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
