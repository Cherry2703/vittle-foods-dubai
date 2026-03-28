const fs = require('fs');
const path = require('path');

const targetPath = 'c:\\Users\\ramch\\vs-code-projects\\vatan-dubai\\client\\src\\contexts\\LanguageContext.jsx';
let content = fs.readFileSync(targetPath, 'utf-8');

const additions = {
  en: `
    'nav.dashboard': 'Dashboard',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'hero.badge': 'New: Global Bulk Supply Program',
    'hero.cta1': 'Request Quote',
    'hero.explore': 'View Products',
    'about.badge': 'About Vatan Foods',
    'about.title1': 'Empowering Global Food',
    'about.title2': 'Supply Chains',
    'why.badge': 'Why Partner With Us',
    'why.title1': 'The Enterprise Standard for',
    'why.title2': 'Bulk Food Supply',
    'global.badge': 'Worldwide Operations',
    'global.title1': 'Exporting Excellence to',
    'global.title2': 'Every Continent',
    'process.title': 'Order Tracking',
    'process.subtitle': 'Streamlined',
    'pricing.title1': 'Flexible',
    'pricing.title2': 'Custom Pricing',
    'testimonials.title1': 'Trusted by',
    'testimonials.title2': 'Global Leaders',
    'cta.title1': 'Ready to Supercharge Your',
    'cta.title2': 'Global Supply Chain?',
  `,
  hi: `
    'nav.dashboard': 'डैशबोर्ड',
    'nav.pricing': 'मूल्य निर्धारण',
    'nav.testimonials': 'प्रशंसापत्र',
    'hero.badge': 'नया: वैश्विक थोक आपूर्ति कार्यक्रम',
    'hero.cta1': 'उद्धरण के लिए निवेदन',
    'hero.explore': 'उत्पाद देखें',
    'about.badge': 'वातन फूड्स के बारे में',
    'about.title1': 'वैश्विक भोजन को सशक्त बनाना',
    'about.title2': 'आपूर्ति श्रृंखला',
    'why.badge': 'हमारे साथ साझेदारी क्यों करें',
    'why.title1': 'के लिए उद्यम मानक',
    'why.title2': 'थोक खाद्य आपूर्ति',
    'global.badge': 'विश्वव्यापी संचालन',
    'global.title1': 'के लिए उत्कृष्टता का निर्यात',
    'global.title2': 'प्रत्येक महाद्वीप',
    'process.title': 'आदेश ट्रैकिंग',
    'process.subtitle': 'सुव्यवस्थित',
    'pricing.title1': 'लचीला',
    'pricing.title2': 'कस्टम मूल्य निर्धारण',
    'testimonials.title1': 'पर भरोसा',
    'testimonials.title2': 'वैश्विक नेता',
    'cta.title1': 'अपने को सुपरचार्ज करने के लिए तैयार हैं',
    'cta.title2': 'वैश्विक आपूर्ति श्रृंखला?',
  `,
  ar: `
    'nav.dashboard': 'لوحة القيادة',
    'nav.pricing': 'التسعير',
    'nav.testimonials': 'الشهادات - التوصيات',
    'hero.badge': 'جديد: برنامج التوريد بالجملة العالمي',
    'hero.cta1': 'اطلب اقتباس',
    'hero.explore': 'عرض المنتجات',
    'about.badge': 'نبذة عن فاتان فودز',
    'about.title1': 'تمكين الغذاء العالمي',
    'about.title2': 'سلاسل التوريد',
    'why.badge': 'لماذا الشراكة معنا',
    'why.title1': 'معيار المؤسسة لـ',
    'why.title2': 'الإمدادات الغذائية بالجملة',
    'global.badge': 'العمليات العالمية',
    'global.title1': 'تصدير التميز إلى',
    'global.title2': 'كل قارة',
    'process.title': 'تتبع الطلب',
    'process.subtitle': 'مبسط',
    'pricing.title1': 'مرن',
    'pricing.title2': 'التسعير المخصص',
    'testimonials.title1': 'بتوثيق من',
    'testimonials.title2': 'قادة العالم',
    'cta.title1': 'جاهز لشحن',
    'cta.title2': 'سلسلة التوريد العالمية؟',
  `
};

content = content.replace(/(en:\s*\{)/, `$1\n${additions.en}`);
content = content.replace(/(hi:\s*\{)/, `$1\n${additions.hi}`);
content = content.replace(/(ar:\s*\{)/, `$1\n${additions.ar}`);

fs.writeFileSync(targetPath, content, 'utf-8');
console.log('Translations updated successfully.');
