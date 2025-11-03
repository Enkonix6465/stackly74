import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import service1 from "../images/service1.jpg";
import { FaAmbulance, FaHeart, FaUsers, FaHandsHelping, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import videohero from "../images/vdeo742.mp4";
import { motion } from "framer-motion";
import er1 from '../images/relief1.jpg';
import er2 from '../images/relief2.jpg';
import er3 from '../images/relief3.jpg';

const EmergencyRelief = () => {
  const navigate = useNavigate();
  const darkMode = document.documentElement.classList.contains('dark');
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem('language') || 'en';
    return stored;
  });

  // Language detection
  useEffect(() => {
    const detectLanguage = () => {
      const stored = localStorage.getItem('language');
      if (stored) {
        setLanguage(stored);
      }
    };

    detectLanguage();
    const handleLanguageChange = () => {
      const stored = localStorage.getItem('language');
      if (stored) {
        setLanguage(stored);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    const interval = setInterval(detectLanguage, 500);

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange);
      clearInterval(interval);
    };
  }, []);

  // Translations
  const translations = {
    en: {
      heroTitle: "Emergency Relief & Disaster Response",
      heroDesc: "Providing immediate aid and long-term recovery support to communities affected by natural disasters and humanitarian crises.",
      missionTitle: "Rapid Response, Lasting Recovery",
      missionDesc1: "When disasters strike, every second counts. Our emergency relief programs deliver critical aid when it's needed most, while our recovery initiatives help communities rebuild stronger and more resilient than before.",
      missionDesc2: "From natural disasters to humanitarian emergencies, we work tirelessly to ensure no one faces crisis alone. Our comprehensive approach addresses immediate needs while laying the foundation for sustainable recovery.",
      missionFeature1: "24/7 Emergency Response Teams",
      missionFeature2: "Medical Aid & Trauma Support",
      missionFeature3: "Community Recovery Programs",
      programsTitle: "Our Emergency Relief Programs",
      programsDesc: "Comprehensive emergency response and recovery programs designed to save lives and rebuild communities",
      program1Title: "Immediate Emergency Response",
      program1Desc: "Rapid deployment of emergency teams with essential supplies including food, water, medical aid, and temporary shelter for disaster-affected populations.",
      program1Feature1: "Emergency food and water distribution",
      program1Feature2: "Mobile medical clinics and first aid",
      program1Feature3: "Temporary shelter and evacuation support",
      program2Title: "Medical Emergency Services",
      program2Desc: "Specialized medical response teams providing critical healthcare services, trauma care, and psychological support during emergencies.",
      program2Feature1: "Emergency medical treatment",
      program2Feature2: "Trauma and psychological support",
      program2Feature3: "Medical supply distribution",
      program3Title: "Search & Rescue Operations",
      program3Desc: "Trained search and rescue teams equipped with specialized tools and technology to locate and evacuate individuals trapped in disaster zones.",
      program3Feature1: "Professional search and rescue teams",
      program3Feature2: "Specialized rescue equipment",
      program3Feature3: "Coordination with local authorities",
      program4Title: "Community Recovery Support",
      program4Desc: "Long-term recovery programs focused on rebuilding infrastructure, restoring livelihoods, and strengthening community resilience.",
      program4Feature1: "Infrastructure rebuilding projects",
      program4Feature2: "Livelihood restoration programs",
      program4Feature3: "Community resilience training",
      program5Title: "Child Protection Services",
      program5Desc: "Specialized programs to protect and support children during emergencies, including family reunification and child-friendly spaces.",
      program5Feature1: "Child-friendly safe spaces",
      program5Feature2: "Family reunification services",
      program5Feature3: "Psychological support for children",
      program6Title: "Disaster Risk Reduction",
      program6Desc: "Proactive programs to help communities prepare for and reduce the impact of future disasters through education and preparedness training.",
      program6Feature1: "Community preparedness training",
      program6Feature2: "Early warning systems",
      program6Feature3: "Risk assessment and planning",
      impactTitle: "Why Emergency Relief Saves Lives and Communities",
      impactDesc: "Quick response and comprehensive recovery programs create the foundation for resilient, prepared communities",
      impact1Title: "Saving Lives",
      impact1Desc: "Immediate response saves lives by providing critical aid when every second matters most",
      impact2Title: "Reducing Suffering",
      impact2Desc: "Comprehensive aid programs minimize human suffering and provide dignity during crisis",
      impact3Title: "Building Resilience",
      impact3Desc: "Recovery programs help communities rebuild stronger and more prepared for future challenges",
      impact4Title: "Restoring Hope",
      impact4Desc: "Long-term support helps families and communities recover and rebuild their lives with renewed hope",
      ctaTitle: "Join Our Emergency Relief Efforts",
      ctaDesc: "Your support enables us to respond quickly to emergencies and help communities recover and rebuild stronger than before.",
      donateBtn: "Support Emergency Relief",
      volunteerBtn: "Volunteer With Us",
      aboutBtn: "About us",
      donateNowBtn: "Donate now"
    },
    ar: {
      heroTitle: "الإغاثة الطارئة والاستجابة للكوارث",
      heroDesc: "تقديم المساعدات الفورية ودعم التعافي طويل المدى للمجتمعات المتضررة من الكوارث الطبيعية والأزمات الإنسانية.",
      missionTitle: "استجابة سريعة، تعافي دائم",
      missionDesc1: "عندما تضرب الكوارث، كل ثانية مهمة. برامج الإغاثة الطارئة لدينا تقدم المساعدات الحيوية عندما تكون هناك حاجة ماسة إليها، بينما مبادرات التعافي لدينا تساعد المجتمعات على إعادة البناء بشكل أقوى وأكثر مرونة من ذي قبل.",
      missionDesc2: "من الكوارث الطبيعية إلى الطوارئ الإنسانية، نعمل بلا كلل لضمان عدم مواجهة أي شخص للأزمة وحده. نهجنا الشامل يلبي الاحتياجات الفورية بينما يضع الأساس للتعافي المستدام.",
      missionFeature1: "فرق الاستجابة الطارئة على مدار 24/7",
      missionFeature2: "المساعدات الطبية ودعم الصدمات",
      missionFeature3: "برامج تعافي المجتمع",
      programsTitle: "برامج الإغاثة الطارئة لدينا",
      programsDesc: "برامج شاملة للاستجابة للطوارئ والتعافي مصممة لإنقاذ الأرواح وإعادة بناء المجتمعات",
      program1Title: "الاستجابة الطارئة الفورية",
      program1Desc: "نشر سريع لفرق الطوارئ مع الإمدادات الأساسية بما في ذلك الطعام والماء والمساعدات الطبية والمأوى المؤقت للسكان المتضررين من الكوارث.",
      program1Feature1: "توزيع الطعام والماء الطارئ",
      program1Feature2: "العيادات الطبية المتنقلة والإسعافات الأولية",
      program1Feature3: "المأوى المؤقت ودعم الإجلاء",
      program2Title: "خدمات الطوارئ الطبية",
      program2Desc: "فرق الاستجابة الطبية المتخصصة التي تقدم خدمات الرعاية الصحية الحرجة ورعاية الصدمات والدعم النفسي أثناء الطوارئ.",
      program2Feature1: "العلاج الطبي الطارئ",
      program2Feature2: "دعم الصدمات والدعم النفسي",
      program2Feature3: "توزيع الإمدادات الطبية",
      program3Title: "عمليات البحث والإنقاذ",
      program3Desc: "فرق البحث والإنقاذ المدربة والمجهزة بأدوات وتكنولوجيا متخصصة لتحديد موقع وإجلاء الأفراد المحاصرين في مناطق الكوارث.",
      program3Feature1: "فرق البحث والإنقاذ المهنية",
      program3Feature2: "معدات الإنقاذ المتخصصة",
      program3Feature3: "التنسيق مع السلطات المحلية",
      program4Title: "دعم تعافي المجتمع",
      program4Desc: "برامج التعافي طويلة المدى التي تركز على إعادة بناء البنية التحتية واستعادة سبل العيش وتعزيز مرونة المجتمع.",
      program4Feature1: "مشاريع إعادة بناء البنية التحتية",
      program4Feature2: "برامج استعادة سبل العيش",
      program4Feature3: "تدريب مرونة المجتمع",
      program5Title: "خدمات حماية الطفل",
      program5Desc: "برامج متخصصة لحماية ودعم الأطفال أثناء الطوارئ، بما في ذلك لم شمل الأسر والمساحات الصديقة للطفل.",
      program5Feature1: "مساحات آمنة صديقة للطفل",
      program5Feature2: "خدمات لم شمل الأسر",
      program5Feature3: "الدعم النفسي للأطفال",
      program6Title: "الحد من مخاطر الكوارث",
      program6Desc: "برامج استباقية لمساعدة المجتمعات على الاستعداد وتقليل تأثير الكوارث المستقبلية من خلال التعليم والتدريب على الاستعداد.",
      program6Feature1: "تدريب استعداد المجتمع",
      program6Feature2: "أنظمة الإنذار المبكر",
      program6Feature3: "تقييم المخاطر والتخطيط",
      impactTitle: "لماذا الإغاثة الطارئة تنقذ الأرواح والمجتمعات",
      impactDesc: "الاستجابة السريعة وبرامج التعافي الشاملة تخلق الأساس لمجتمعات مرنة ومستعدة",
      impact1Title: "إنقاذ الأرواح",
      impact1Desc: "الاستجابة الفورية تنقذ الأرواح من خلال توفير المساعدات الحيوية عندما تكون كل ثانية مهمة للغاية",
      impact2Title: "تقليل المعاناة",
      impact2Desc: "برامج المساعدات الشاملة تقلل من المعاناة الإنسانية وتوفر الكرامة أثناء الأزمة",
      impact3Title: "بناء المرونة",
      impact3Desc: "برامج التعافي تساعد المجتمعات على إعادة البناء بشكل أقوى وأكثر استعداداً للتحديات المستقبلية",
      impact4Title: "استعادة الأمل",
      impact4Desc: "الدعم طويل المدى يساعد الأسر والمجتمعات على التعافي وإعادة بناء حياتهم بأمل متجدد",
      ctaTitle: "انضم إلى جهود الإغاثة الطارئة لدينا",
      ctaDesc: "دعمكم يمكننا من الاستجابة بسرعة للطوارئ ومساعدة المجتمعات على التعافي وإعادة البناء بشكل أقوى من ذي قبل.",
      donateBtn: "دعم الإغاثة الطارئة",
      volunteerBtn: "تطوع معنا",
      aboutBtn: "من نحن",
      donateNowBtn: "تبرع الآن"
    },
    he: {
      heroTitle: "סיוע חירום והיענות לאסונות",
      heroDesc: "מתן סיוע מיידי ותמיכה בהתאוששות ארוכת טווח לקהילות הנפגעות מאסונות טבע ומשברים הומניטריים.",
      missionTitle: "תגובה מהירה, התאוששות מתמשכת",
      missionDesc1: "כשאסונות מתרחשים, כל שנייה חשובה. תוכניות הסיוע החירום שלנו מספקות סיוע חיוני כשהוא נחוץ ביותר, בעוד יוזמות ההתאוששות שלנו עוזרות לקהילות לבנות מחדש חזק וחסון יותר מבעבר.",
      missionDesc2: "מאסונות טבע ועד חירום הומניטרי, אנו עובדים ללא לאות כדי להבטיח שאיש לא יתמודד עם משבר לבד. הגישה המקיפה שלנו מתמודדת עם צרכים מיידיים תוך הנחת הבסיס להתאוששות בת קיימא.",
      missionFeature1: "צוותי תגובת חירום 24/7",
      missionFeature2: "סיוע רפואי ותמיכה בטראומה",
      missionFeature3: "תוכניות התאוששות קהילתית",
      programsTitle: "תוכניות הסיוע החירום שלנו",
      programsDesc: "תוכניות מקיפות לתגובת חירום והתאוששות שנועדו להציל חיים ולבנות מחדש קהילות",
      program1Title: "תגובת חירום מיידית",
      program1Desc: "פריסה מהירה של צוותי חירום עם אספקה חיונית כולל מזון, מים, סיוע רפואי ומחסה זמני לאוכלוסיות הנפגעות מאסון.",
      program1Feature1: "חלוקת מזון ומים חירום",
      program1Feature2: "מרפאות רפואיות ניידות ועזרה ראשונה",
      program1Feature3: "מחסה זמני ותמיכה בפינוי",
      program2Title: "שירותי חירום רפואיים",
      program2Desc: "צוותי תגובה רפואית מתמחים המספקים שירותי בריאות קריטיים, טיפול בטראומה ותמיכה פסיכולוגית במהלך חירום.",
      program2Feature1: "טיפול רפואי חירום",
      program2Feature2: "תמיכה בטראומה ותמיכה פסיכולוגית",
      program2Feature3: "חלוקת אספקה רפואית",
      program3Title: "פעולות חיפוש והצלה",
      program3Desc: "צוותי חיפוש והצלה מאומנים המצוידים בכלים וטכנולוגיה מתמחים לאיתור ופינוי יחידים הלכודים באזורי אסון.",
      program3Feature1: "צוותי חיפוש והצלה מקצועיים",
      program3Feature2: "ציוד הצלה מתמחה",
      program3Feature3: "תיאום עם רשויות מקומיות",
      program4Title: "תמיכה בהתאוששות קהילתית",
      program4Desc: "תוכניות התאוששות ארוכות טווח המתמקדות בבנייה מחדש של תשתיות, שחזור פרנסה וחיזוק חוסן קהילתי.",
      program4Feature1: "פרויקטי בנייה מחדש של תשתיות",
      program4Feature2: "תוכניות שחזור פרנסה",
      program4Feature3: "אימון חוסן קהילתי",
      program5Title: "שירותי הגנה על ילדים",
      program5Desc: "תוכניות מתמחות להגנה ותמיכה בילדים במהלך חירום, כולל איחוד משפחות ומרחבים ידידותיים לילדים.",
      program5Feature1: "מרחבים בטוחים ידידותיים לילדים",
      program5Feature2: "שירותי איחוד משפחות",
      program5Feature3: "תמיכה פסיכולוגית לילדים",
      program6Title: "הפחתת סיכוני אסונות",
      program6Desc: "תוכניות יזומות לעזור לקהילות להתכונן ולהפחית את ההשפעה של אסונות עתידיים באמצעות חינוך ואימון מוכנות.",
      program6Feature1: "אימון מוכנות קהילתית",
      program6Feature2: "מערכות התרעה מוקדמת",
      program6Feature3: "הערכת סיכונים ותכנון",
      impactTitle: "למה סיוע חירום מציל חיים וקהילות",
      impactDesc: "תגובה מהירה ותוכניות התאוששות מקיפות יוצרות את הבסיס לקהילות חסונות ומוכנות",
      impact1Title: "הצלת חיים",
      impact1Desc: "תגובה מיידית מצילה חיים על ידי מתן סיוע חיוני כשכל שנייה חשובה ביותר",
      impact2Title: "הפחתת סבל",
      impact2Desc: "תוכניות סיוע מקיפות ממזערות סבל אנושי ומספקות כבוד במהלך משבר",
      impact3Title: "בניית חוסן",
      impact3Desc: "תוכניות התאוששות עוזרות לקהילות לבנות מחדש חזק יותר ומוכן יותר לאתגרים עתידיים",
      impact4Title: "שחזור תקווה",
      impact4Desc: "תמיכה ארוכת טווח עוזרת למשפחות ולקהילות להתאושש ולבנות מחדש את חייהם עם תקווה מחודשת",
      ctaTitle: "הצטרפו למאמצי הסיוע החירום שלנו",
      ctaDesc: "התמיכה שלכם מאפשרת לנו להגיב במהירות לחירום ולעזור לקהילות להתאושש ולבנות מחדש חזק יותר מבעבר.",
      donateBtn: "תמכו בסיוע חירום",
      volunteerBtn: "התנדבו איתנו",
      aboutBtn: "אודותינו",
      donateNowBtn: "תרמו עכשיו"
    }
  };

  const t = translations[language] || translations.en;

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
  <div className={`${darkMode ? "min-h-screen bg-black text-white" : "min-h-screen bg-white text-black"} ${language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}`} dir={language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}>

      {/* Hero Section */}
      <section className="relative w-screen h-screen m-0 p-0">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videohero}
          autoPlay
          loop
          muted
        />
        {/* Overlay and Tagline */}
  <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">{t.heroDesc}</p>
        </div>
      </section>

     
      {/* Emergency Relief Mission Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={er1}
                alt="Emergency Relief Mission"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.missionTitle}</h2>
              <p className="text-lg mb-6">
                {t.missionDesc1}
              </p>
              <p className="text-lg mb-8">
                {t.missionDesc2}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>{t.missionFeature1}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>{t.missionFeature2}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>{t.missionFeature3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Relief Programs Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.programsTitle}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t.programsDesc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-black' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-[#4B80B3]/10 flex items-center justify-center mb-4">
                <FaAmbulance className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.program1Title}</h3>
              <p className="mb-4">
                {t.program1Desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program1Feature1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program1Feature2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program1Feature3}</span>
                </li>
              </ul>
            </div>

            {/* Program 2 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-black' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-[#4B80B3]/10 flex items-center justify-center mb-4">
                <FaHeart className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.program2Title}</h3>
              <p className="mb-4">
                {t.program2Desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program2Feature1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program2Feature2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program2Feature3}</span>
                </li>
              </ul>
            </div>

            {/* Program 3 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-black' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-[#4B80B3]/10 flex items-center justify-center mb-4">
                <FaUsers className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.program3Title}</h3>
              <p className="mb-4">
                {t.program3Desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program3Feature1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program3Feature2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program3Feature3}</span>
                </li>
              </ul>
            </div>

            {/* Program 4 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-black' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-[#4B80B3]/10 flex items-center justify-center mb-4">
                <FaHeart className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.program4Title}</h3>
              <p className="mb-4">
                {t.program4Desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program4Feature1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program4Feature2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program4Feature3}</span>
                </li>
              </ul>
            </div>

            {/* Program 5 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-black' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-[#4B80B3]/10 flex items-center justify-center mb-4">
                <FaHandsHelping className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.program5Title}</h3>
              <p className="mb-4">
                {t.program5Desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program5Feature1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program5Feature2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program5Feature3}</span>
                </li>
              </ul>
            </div>

            {/* Program 6 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaChartLine className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.program6Title}</h3>
              <p className="mb-4">
                {t.program6Desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program6Feature1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program6Feature2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>{t.program6Feature3}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* We are here to support vulnerable communities - Image Layout Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-[#4B80B3]/10 text-[#4B80B3] rounded-full text-sm font-medium mb-4">
                  EMERGENCY RESPONSE
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  We are here when disasters strike
                </h2>
                <p className="text-lg text-black mb-8 leading-relaxed">
                  Natural disasters and humanitarian crises can devastate communities in moments. Our emergency relief teams are ready to respond 24/7, providing immediate aid and long-term recovery support to help communities rebuild stronger than before.
                </p>
              </div>

              {/* Image Grid - Left Side */}
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={er2}
                    alt="Emergency response team"
                    className="w-full h-95 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              {/* Large Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <img
                  src={er3}
                  alt="Disaster relief efforts"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Content with Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#4B80B3]/40">
                <p className="text-black mb-6 leading-relaxed">
                  Through rapid response capabilities and comprehensive relief programs, we provide critical support during emergencies and help communities build resilience for the future.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#4B80B3]/10 flex items-center justify-center mr-4">
                      <FaAmbulance className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Rapid emergency medical response teams</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#4B80B3]/10 flex items-center justify-center mr-4">
                      <FaShieldAlt className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Emergency shelter and protection services</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#4B80B3]/10 flex items-center justify-center mr-4">
                      <FaHeart className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Long-term recovery and rebuilding support</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button className="px-6 py-3 bg-[#4B80B3] hover:bg-black text-white font-medium rounded-full transition-colors">
                    {t.donateNowBtn}
                  </button>
                  <button className="px-6 py-3 border border-[#4B80B3] text-[#4B80B3] hover:bg-[#4B80B3]/10 font-medium rounded-full transition-colors">
                    {t.aboutBtn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Emergency Relief Matters Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.impactTitle}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t.impactDesc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#4B80B3]/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.impact1Title}</h3>
              <p>{t.impact1Desc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.impact2Title}</h3>
              <p>{t.impact2Desc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.impact3Title}</h3>
              <p>{t.impact3Desc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.impact4Title}</h3>
              <p>{t.impact4Desc}</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#4B80B3] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-xl mb-8">
            {t.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-white text-[#4B80B3] hover:bg-gray-100 font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/donate")}
            >
              {t.donateBtn}
            </button>
            <button 
              className="px-8 py-3 border border-white text-white hover:bg-[#3a6b9e] font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/volunteer")}
            >
              {t.volunteerBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyRelief;
