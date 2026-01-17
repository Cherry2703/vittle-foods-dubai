




import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext(null);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.why': 'Why Us',
    'nav.global': 'Global Reach',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Vittle Healthy Foods',
    'hero.subtitle': 'Delivering Authentic Indian Groceries to the World',
    'hero.description': 'Premium quality grains, spices, and pulses sourced directly from Indian farms. Trusted by distributors in 40+ countries.',
    'hero.explore': 'Explore Products',
    'hero.catalog': 'Download Catalog',
    
    // About
    'about.title': 'About Vittle Healthy Foods',
    'about.subtitle': 'Three Decades of Excellence in Food Export',
    'about.description': 'Since 1992, Vital Foods has been a trusted name in Indian grocery exports. We source directly from farms across India, ensuring the highest quality products reach your markets.',
    'about.years': 'Years of Excellence',
    'about.countries': 'Countries Served',
    'about.products': 'Products Range',
    'about.tons': 'Tons Exported Annually',
    'about.sourcing': 'Direct Farm Sourcing',
    'about.sourcingDesc': 'We partner with over 500 farming communities across India',
    'about.quality': 'Quality Certified',
    'about.qualityDesc': 'ISO 22000, FSSAI, HACCP certified processing facilities',
    'about.logistics': 'Global Logistics',
    'about.logisticsDesc': 'End-to-end supply chain management to your doorstep',
    
    // Products
    'products.title': 'Our Premium Products',
    'products.subtitle': 'Explore our range of authentic Indian groceries, sourced with care and exported with excellence',
    'products.viewAll': 'View All Products',
    
    // Why Choose Us
    'why.title': 'Why Choose Vittle Healthy Foods',
    'why.subtitle': 'Your trusted partner for premium Indian grocery exports',
    'why.quality.title': 'Premium Quality',
    'why.quality.desc': 'Stringent quality control at every stage from farm to shipment',
    'why.standards.title': 'International Standards',
    'why.standards.desc': 'Compliant with global food safety regulations and certifications',
    'why.labeling.title': 'Private Labeling',
    'why.labeling.desc': 'Custom branding and packaging solutions for your market',
    'why.supply.title': 'Reliable Supply Chain',
    'why.supply.desc': 'Consistent availability and on-time delivery worldwide',
    'why.pricing.title': 'Competitive Pricing',
    'why.pricing.desc': 'Direct sourcing enables best-in-class pricing for bulk orders',
    'why.support.title': '24/7 Support',
    'why.support.desc': 'Dedicated account managers for seamless communication',
    
    // Global
    'global.title': 'Global Presence',
    'global.subtitle': 'Connecting Indian farms to tables worldwide',
    'global.description': 'Our extensive logistics network ensures timely delivery to distributors across Middle East, Europe, Americas, Africa, and Asia-Pacific regions.',
    
    // Contact
    'contact.title': 'Business Enquiries',
    'contact.subtitle': 'Connect with our export team for partnership opportunities',
    'contact.name': 'Your Name',
    'contact.company': 'Company Name',
    'contact.email': 'Email Address',
    'contact.country': 'Country',
    'contact.message': 'Your Message',
    'contact.submit': 'Submit Enquiry',
    'contact.success': 'Thank you! Your enquiry has been submitted.',
    
    // Footer
    'footer.tagline': 'Bringing the finest Indian groceries to the world since 1992.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us',
    'footer.madeIn': 'Made in India with',
    'footer.copyright': '© 2024 Vital Foods. All rights reserved.',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.products': 'उत्पाद',
    'nav.why': 'हमें क्यों चुनें',
    'nav.global': 'वैश्विक पहुंच',
    'nav.contact': 'संपर्क करें',
    
    // Hero
    'hero.title': 'वाइटल फूड्स',
    'hero.subtitle': 'प्रामाणिक भारतीय किराना दुनिया भर में',
    'hero.description': 'भारतीय खेतों से सीधे प्राप्त प्रीमियम गुणवत्ता वाले अनाज, मसाले और दालें। 40+ देशों में वितरकों द्वारा विश्वसनीय।',
    'hero.explore': 'उत्पाद देखें',
    'hero.catalog': 'कैटलॉग डाउनलोड करें',
    
    // About
    'about.title': 'वाइटल फूड्स के बारे में',
    'about.subtitle': 'खाद्य निर्यात में तीन दशकों की उत्कृष्टता',
    'about.description': '1992 से, वाइटल फूड्स भारतीय किराना निर्यात में एक विश्वसनीय नाम रहा है। हम पूरे भारत के खेतों से सीधे सोर्सिंग करते हैं।',
    'about.years': 'वर्षों की उत्कृष्टता',
    'about.countries': 'देशों में सेवा',
    'about.products': 'उत्पाद श्रेणी',
    'about.tons': 'टन वार्षिक निर्यात',
    'about.sourcing': 'सीधी खेत सोर्सिंग',
    'about.sourcingDesc': 'हम भारत भर में 500+ कृषि समुदायों के साथ साझेदारी करते हैं',
    'about.quality': 'गुणवत्ता प्रमाणित',
    'about.qualityDesc': 'ISO 22000, FSSAI, HACCP प्रमाणित प्रसंस्करण सुविधाएं',
    'about.logistics': 'वैश्विक लॉजिस्टिक्स',
    'about.logisticsDesc': 'आपके दरवाजे तक एंड-टू-एंड सप्लाई चेन प्रबंधन',
    
    // Products
    'products.title': 'हमारे प्रीमियम उत्पाद',
    'products.subtitle': 'देखभाल से प्राप्त और उत्कृष्टता के साथ निर्यात किए गए प्रामाणिक भारतीय किराने की हमारी श्रेणी देखें',
    'products.viewAll': 'सभी उत्पाद देखें',
    
    // Why Choose Us
    'why.title': 'वाइटल फूड्स क्यों चुनें',
    'why.subtitle': 'प्रीमियम भारतीय किराना निर्यात के लिए आपका विश्वसनीय साझेदार',
    'why.quality.title': 'प्रीमियम गुणवत्ता',
    'why.quality.desc': 'खेत से शिपमेंट तक हर चरण पर कठोर गुणवत्ता नियंत्रण',
    'why.standards.title': 'अंतर्राष्ट्रीय मानक',
    'why.standards.desc': 'वैश्विक खाद्य सुरक्षा नियमों और प्रमाणपत्रों के अनुरूप',
    'why.labeling.title': 'प्राइवेट लेबलिंग',
    'why.labeling.desc': 'आपके बाजार के लिए कस्टम ब्रांडिंग और पैकेजिंग समाधान',
    'why.supply.title': 'विश्वसनीय आपूर्ति श्रृंखला',
    'why.supply.desc': 'दुनिया भर में सुसंगत उपलब्धता और समय पर डिलीवरी',
    'why.pricing.title': 'प्रतिस्पर्धी मूल्य निर्धारण',
    'why.pricing.desc': 'प्रत्यक्ष सोर्सिंग थोक ऑर्डर के लिए सर्वोत्तम मूल्य निर्धारण सक्षम करती है',
    'why.support.title': '24/7 सहायता',
    'why.support.desc': 'निर्बाध संचार के लिए समर्पित खाता प्रबंधक',
    
    // Global
    'global.title': 'वैश्विक उपस्थिति',
    'global.subtitle': 'भारतीय खेतों को दुनिया भर की मेजों से जोड़ना',
    'global.description': 'हमारा व्यापक लॉजिस्टिक्स नेटवर्क मध्य पूर्व, यूरोप, अमेरिका, अफ्रीका और एशिया-प्रशांत क्षेत्रों में वितरकों को समय पर डिलीवरी सुनिश्चित करता है।',
    
    // Contact
    'contact.title': 'व्यापार पूछताछ',
    'contact.subtitle': 'साझेदारी के अवसरों के लिए हमारी निर्यात टीम से जुड़ें',
    'contact.name': 'आपका नाम',
    'contact.company': 'कंपनी का नाम',
    'contact.email': 'ईमेल पता',
    'contact.country': 'देश',
    'contact.message': 'आपका संदेश',
    'contact.submit': 'पूछताछ जमा करें',
    'contact.success': 'धन्यवाद! आपकी पूछताछ जमा कर दी गई है।',
    
    // Footer
    'footer.tagline': '1992 से दुनिया को बेहतरीन भारतीय किराना पहुंचा रहे हैं।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.contactUs': 'संपर्क करें',
    'footer.madeIn': 'भारत में बनाया गया',
    'footer.copyright': '© 2024 वाइटल फूड्स। सर्वाधिकार सुरक्षित।',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'المنتجات',
    'nav.why': 'لماذا نحن',
    'nav.global': 'الانتشار العالمي',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'فايتل فودز',
    'hero.subtitle': 'توصيل البقالة الهندية الأصيلة إلى العالم',
    'hero.description': 'حبوب وتوابل وبقوليات عالية الجودة مصدرها مباشرة من المزارع الهندية. موثوق بها من قبل الموزعين في أكثر من 40 دولة.',
    'hero.explore': 'استكشف المنتجات',
    'hero.catalog': 'تحميل الكتالوج',
    
    // About
    'about.title': 'عن فايتل فودز',
    'about.subtitle': 'ثلاثة عقود من التميز في تصدير الأغذية',
    'about.description': 'منذ عام 1992، كانت فايتل فودز اسمًا موثوقًا في صادرات البقالة الهندية. نحن نحصل على المنتجات مباشرة من المزارع في جميع أنحاء الهند.',
    'about.years': 'سنوات من التميز',
    'about.countries': 'دولة نخدمها',
    'about.products': 'منتج متنوع',
    'about.tons': 'طن يتم تصديره سنويًا',
    'about.sourcing': 'التوريد المباشر من المزارع',
    'about.sourcingDesc': 'نتشارك مع أكثر من 500 مجتمع زراعي في جميع أنحاء الهند',
    'about.quality': 'جودة معتمدة',
    'about.qualityDesc': 'مرافق معالجة معتمدة من ISO 22000 و FSSAI و HACCP',
    'about.logistics': 'لوجستيات عالمية',
    'about.logisticsDesc': 'إدارة سلسلة التوريد من البداية إلى النهاية حتى باب منزلك',
    
    // Products
    'products.title': 'منتجاتنا المميزة',
    'products.subtitle': 'استكشف مجموعتنا من البقالة الهندية الأصيلة، المصدرة بعناية والمُصدَّرة بتميز',
    'products.viewAll': 'عرض جميع المنتجات',
    
    // Why Choose Us
    'why.title': 'لماذا تختار فايتل فودز',
    'why.subtitle': 'شريكك الموثوق لصادرات البقالة الهندية المميزة',
    'why.quality.title': 'جودة ممتازة',
    'why.quality.desc': 'رقابة صارمة على الجودة في كل مرحلة من المزرعة إلى الشحن',
    'why.standards.title': 'معايير دولية',
    'why.standards.desc': 'متوافق مع لوائح وشهادات سلامة الأغذية العالمية',
    'why.labeling.title': 'التصنيع للغير',
    'why.labeling.desc': 'حلول العلامات التجارية والتعبئة المخصصة لسوقك',
    'why.supply.title': 'سلسلة توريد موثوقة',
    'why.supply.desc': 'توفر مستمر وتسليم في الوقت المحدد في جميع أنحاء العالم',
    'why.pricing.title': 'أسعار تنافسية',
    'why.pricing.desc': 'التوريد المباشر يتيح أفضل الأسعار للطلبات بالجملة',
    'why.support.title': 'دعم على مدار الساعة',
    'why.support.desc': 'مديري حسابات مخصصين للتواصل السلس',
    
    // Global
    'global.title': 'الانتشار العالمي',
    'global.subtitle': 'ربط المزارع الهندية بالموائد حول العالم',
    'global.description': 'تضمن شبكتنا اللوجستية الواسعة التسليم في الوقت المناسب للموزعين في الشرق الأوسط وأوروبا والأمريكتين وأفريقيا ومنطقة آسيا والمحيط الهادئ.',
    
    // Contact
    'contact.title': 'استفسارات الأعمال',
    'contact.subtitle': 'تواصل مع فريق التصدير لدينا لفرص الشراكة',
    'contact.name': 'اسمك',
    'contact.company': 'اسم الشركة',
    'contact.email': 'البريد الإلكتروني',
    'contact.country': 'الدولة',
    'contact.message': 'رسالتك',
    'contact.submit': 'إرسال الاستفسار',
    'contact.success': 'شكرًا لك! تم إرسال استفسارك.',
    
    // Footer
    'footer.tagline': 'نقدم أفضل البقالة الهندية للعالم منذ عام 1992.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contactUs': 'اتصل بنا',
    'footer.madeIn': 'صنع في الهند بـ',
    'footer.copyright': '© 2024 فايتل فودز. جميع الحقوق محفوظة.',
  },
};


export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, isRTL }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }
  return context;
}
