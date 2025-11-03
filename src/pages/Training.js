import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import service1 from "../images/service1.jpg";
import { FaTools, FaHandshake, FaUsers, FaHeart, FaHandsHelping, FaChartLine } from 'react-icons/fa';
import videohero from "../images/vdeo742.mp4";
import { motion } from "framer-motion";
import ed1 from '../images/ed1.jpg';
import ed2 from '../images/ed2.jpg';
import ed3 from '../images/ed3.jpg';

const Training = () => {
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
      heroTitle: "Creating Sustainable Livelihoods",
      heroDesc: "Empowering individuals and communities with skills, resources, and opportunities to build lasting economic independence.",
      missionTitle: "Building Pathways to Economic Independence",
      missionDesc1: "Sustainable livelihoods are the foundation of thriving communities. By providing skills training, microfinance, and entrepreneurship support, we help individuals break free from poverty and create lasting economic opportunities for themselves and their families.",
      missionDesc2: "From vocational training to small business development, we believe every person has the potential to become economically self-sufficient and contribute meaningfully to their community's prosperity.",
      missionFeature1: "Skills Training & Certification",
      missionFeature2: "Microfinance & Business Support", 
      missionFeature3: "Entrepreneurship Development",
      programsTitle: "Our Livelihood Development Programs",
      programsDesc: "Comprehensive programs designed to create sustainable income opportunities and foster economic empowerment",
      program1Title: "Vocational Skills Training",
      program1Desc: "Comprehensive technical and practical skills training programs that prepare individuals for employment in various trades and industries.",
      program1Feature1: "Carpentry and construction skills",
      program1Feature2: "Tailoring and textile work",
      program1Feature3: "Computer and digital literacy",
      program2Title: "Microfinance & Credit",
      program2Desc: "Access to small loans and financial services that enable individuals to start businesses and invest in income-generating activities.",
      program2Feature1: "Small business startup loans",
      program2Feature2: "Financial literacy training",
      program2Feature3: "Savings group formation",
      program3Title: "Cooperative Development",
      program3Desc: "Supporting the formation and management of cooperatives that enable communities to pool resources and create collective businesses.",
      program3Feature1: "Agricultural cooperatives",
      program3Feature2: "Craft and artisan groups",
      program3Feature3: "Marketing and sales networks",
      program4Title: "Women's Empowerment",
      program4Desc: "Specialized programs focused on empowering women with economic opportunities and leadership skills in their communities.",
      program4Feature1: "Women-only training programs",
      program4Feature2: "Leadership development",
      program4Feature3: "Work-life balance support",
      program5Title: "Youth Employment",
      program5Desc: "Targeted programs for young people to develop job-ready skills and connect with employment opportunities in growing industries.",
      program5Feature1: "Job placement assistance",
      program5Feature2: "Internship and apprenticeship programs",
      program5Feature3: "Entrepreneurship for young adults",
      program6Title: "Agriculture & Farming",
      program6Desc: "Supporting farmers with modern techniques, tools, and market access to improve agricultural productivity and income.",
      program6Feature1: "Modern farming techniques",
      program6Feature2: "Access to quality seeds and tools",
      program6Feature3: "Market linkage and fair pricing",
      impactTitle: "Why Sustainable Livelihoods Transform Communities",
      impactDesc: "Economic empowerment creates a ripple effect that strengthens families, communities, and entire regions",
      impact1Title: "Breaking Poverty Cycles",
      impact1Desc: "Sustainable income sources help families escape poverty and invest in their children's future",
      impact2Title: "Building Resilient Communities",
      impact2Desc: "Economic diversity and local businesses create stronger, more resilient communities",
      impact3Title: "Fostering Innovation",
      impact3Desc: "Entrepreneurship and skill development drive innovation and economic growth",
      impact4Title: "Promoting Dignity",
      impact4Desc: "Self-reliance and economic independence restore dignity and hope to individuals and families",
      ctaTitle: "Join Us in Creating Sustainable Livelihoods",
      ctaDesc: "Every contribution helps us provide training, resources, and opportunities that transform lives and build thriving communities.",
      donateBtn: "Support Livelihoods",
      volunteerBtn: "Volunteer With Us",
      aboutBtn: "About us",
      donateNowBtn: "Donate now"
    },
    ar: {
      heroTitle: "خلق سبل عيش مستدامة",
      heroDesc: "تمكين الأفراد والمجتمعات بالمهارات والموارد والفرص لبناء الاستقلال الاقتصادي الدائم.",
      missionTitle: "بناء مسارات للاستقلال الاقتصادي",
      missionDesc1: "سبل العيش المستدامة هي أساس المجتمعات المزدهرة. من خلال توفير التدريب على المهارات والتمويل الأصغر ودعم ريادة الأعمال، نساعد الأفراد على التحرر من الفقر وخلق فرص اقتصادية دائمة لأنفسهم وعائلاتهم.",
      missionDesc2: "من التدريب المهني إلى تطوير الأعمال الصغيرة، نؤمن أن كل شخص لديه القدرة على أن يصبح مكتفياً ذاتياً اقتصادياً ويساهم بشكل مفيد في ازدهار مجتمعه.",
      missionFeature1: "التدريب على المهارات والشهادات",
      missionFeature2: "التمويل الأصغر ودعم الأعمال",
      missionFeature3: "تطوير ريادة الأعمال",
      programsTitle: "برامج تطوير سبل العيش لدينا",
      programsDesc: "برامج شاملة مصممة لخلق فرص دخل مستدامة وتعزيز التمكين الاقتصادي",
      program1Title: "التدريب المهني على المهارات",
      program1Desc: "برامج تدريب تقنية وعملية شاملة تعد الأفراد للعمل في مختلف المهن والصناعات.",
      program1Feature1: "مهارات النجارة والبناء",
      program1Feature2: "الخياطة والعمل النسيجي",
      program1Feature3: "الكمبيوتر ومحو الأمية الرقمية",
      program2Title: "التمويل الأصغر والائتمان",
      program2Desc: "الوصول إلى القروض الصغيرة والخدمات المالية التي تمكن الأفراد من بدء الأعمال والاستثمار في الأنشطة المدرة للدخل.",
      program2Feature1: "قروض بدء الأعمال الصغيرة",
      program2Feature2: "التدريب على محو الأمية المالية",
      program2Feature3: "تكوين مجموعات الادخار",
      program3Title: "تطوير التعاونيات",
      program3Desc: "دعم تكوين وإدارة التعاونيات التي تمكن المجتمعات من تجميع الموارد وإنشاء أعمال جماعية.",
      program3Feature1: "التعاونيات الزراعية",
      program3Feature2: "مجموعات الحرف والحرفيين",
      program3Feature3: "شبكات التسويق والمبيعات",
      program4Title: "تمكين المرأة",
      program4Desc: "برامج متخصصة تركز على تمكين المرأة بالفرص الاقتصادية ومهارات القيادة في مجتمعاتها.",
      program4Feature1: "برامج تدريب للنساء فقط",
      program4Feature2: "تطوير القيادة",
      program4Feature3: "دعم التوازن بين العمل والحياة",
      program5Title: "توظيف الشباب",
      program5Desc: "برامج موجهة للشباب لتطوير المهارات الجاهزة للعمل والتواصل مع فرص العمل في الصناعات النامية.",
      program5Feature1: "مساعدة في التوظيف",
      program5Feature2: "برامج التدريب والتلمذة المهنية",
      program5Feature3: "ريادة الأعمال للشباب",
      program6Title: "الزراعة والفلاحة",
      program6Desc: "دعم المزارعين بالتقنيات الحديثة والأدوات والوصول إلى الأسواق لتحسين الإنتاجية الزراعية والدخل.",
      program6Feature1: "تقنيات زراعية حديثة",
      program6Feature2: "الوصول إلى البذور والأدوات عالية الجودة",
      program6Feature3: "ربط السوق والتسعير العادل",
      impactTitle: "لماذا تحول سبل العيش المستدامة المجتمعات",
      impactDesc: "التمكين الاقتصادي يخلق تأثيراً متموجاً يقوي العائلات والمجتمعات والمناطق بأكملها",
      impact1Title: "كسر دورات الفقر",
      impact1Desc: "مصادر الدخل المستدامة تساعد العائلات على الهروب من الفقر والاستثمار في مستقبل أطفالها",
      impact2Title: "بناء مجتمعات مرنة",
      impact2Desc: "التنوع الاقتصادي والأعمال المحلية تخلق مجتمعات أقوى وأكثر مرونة",
      impact3Title: "تعزيز الابتكار",
      impact3Desc: "ريادة الأعمال وتطوير المهارات تقود الابتكار والنمو الاقتصادي",
      impact4Title: "تعزيز الكرامة",
      impact4Desc: "الاعتماد على الذات والاستقلال الاقتصادي يعيد الكرامة والأمل للأفراد والعائلات",
      ctaTitle: "انضم إلينا في خلق سبل عيش مستدامة",
      ctaDesc: "كل مساهمة تساعدنا في توفير التدريب والموارد والفرص التي تحول الحياة وتبني مجتمعات مزدهرة.",
      donateBtn: "دعم سبل العيش",
      volunteerBtn: "تطوع معنا",
      aboutBtn: "من نحن",
      donateNowBtn: "تبرع الآن"
    },
    he: {
      heroTitle: "יצירת פרנסה בת קיימא",
      heroDesc: "העצמת יחידים וקהילות עם כישורים, משאבים והזדמנויות לבניית עצמאות כלכלית מתמשכת.",
      missionTitle: "בניית נתיבים לעצמאות כלכלית",
      missionDesc1: "פרנסה בת קיימא היא הבסיס לקהילות משגשגות. על ידי מתן הכשרת כישורים, מימון זעיר ותמיכה ביזמות, אנו עוזרים ליחידים להשתחרר מעוני וליצור הזדמנויות כלכליות מתמשכות לעצמם ולמשפחותיהם.",
      missionDesc2: "מהכשרה מקצועית ועד פיתוח עסקים קטנים, אנו מאמינים שלכל אדם יש את הפוטנציאל להפוך לעצמאי כלכלית ולתרום באופן משמעותי לשגשוג הקהילה שלו.",
      missionFeature1: "הכשרת כישורים והסמכה",
      missionFeature2: "מימון זעיר ותמיכה עסקית",
      missionFeature3: "פיתוח יזמות",
      programsTitle: "תוכניות פיתוח הפרנסה שלנו",
      programsDesc: "תוכניות מקיפות שנועדו ליצור הזדמנויות הכנסה בנות קיימא ולטפח העצמה כלכלית",
      program1Title: "הכשרה מקצועית בכישורים",
      program1Desc: "תוכניות הכשרה טכנית ומעשית מקיפות המכינות יחידים לתעסוקה במקצועות ותעשיות שונות.",
      program1Feature1: "כישורי נגרות ובנייה",
      program1Feature2: "תפירה ועבודת טקסטיל",
      program1Feature3: "מחשב ואוריינות דיגיטלית",
      program2Title: "מימון זעיר ואשראי",
      program2Desc: "גישה להלוואות קטנות ושירותים פיננסיים המאפשרים ליחידים להקים עסקים ולהשקיע בפעילויות מניבות הכנסה.",
      program2Feature1: "הלוואות להקמת עסקים קטנים",
      program2Feature2: "הכשרה לאוריינות פיננסית",
      program2Feature3: "הקמת קבוצות חיסכון",
      program3Title: "פיתוח קואופרטיבים",
      program3Desc: "תמיכה בהקמה וניהול של קואופרטיבים המאפשרים לקהילות לאגד משאבים וליצור עסקים קולקטיביים.",
      program3Feature1: "קואופרטיבים חקלאיים",
      program3Feature2: "קבוצות מלאכה ואומנים",
      program3Feature3: "רשתות שיווק ומכירות",
      program4Title: "העצמת נשים",
      program4Desc: "תוכניות מתמחות המתמקדות בהעצמת נשים עם הזדמנויות כלכליות וכישורי מנהיגות בקהילותיהן.",
      program4Feature1: "תוכניות הכשרה לנשים בלבד",
      program4Feature2: "פיתוח מנהיגות",
      program4Feature3: "תמיכה באיזון עבודה-חיים",
      program5Title: "תעסוקת צעירים",
      program5Desc: "תוכניות ממוקדות לצעירים לפיתוח כישורים מוכנים לעבודה וחיבור להזדמנויות תעסוקה בתעשיות צומחות.",
      program5Feature1: "סיוע בהשמה בעבודה",
      program5Feature2: "תוכניות התמחות וחניכות",
      program5Feature3: "יזמות למבוגרים צעירים",
      program6Title: "חקלאות וגידולים",
      program6Desc: "תמיכה בחקלאים עם טכניקות מודרניות, כלים וגישה לשווקים לשיפור הפרודוקטיביות החקלאית וההכנסה.",
      program6Feature1: "טכניקות חקלאות מודרניות",
      program6Feature2: "גישה לזרעים וכלים איכותיים",
      program6Feature3: "קישור שוק ותמחור הוגן",
      impactTitle: "למה פרנסה בת קיימא משנה קהילות",
      impactDesc: "העצמה כלכלית יוצרת אפקט גלים המחזק משפחות, קהילות ואזורים שלמים",
      impact1Title: "שבירת מעגלי עוני",
      impact1Desc: "מקורות הכנסה בני קיימא עוזרים למשפחות לברוח מעוני ולהשקיע בעתיד ילדיהן",
      impact2Title: "בניית קהילות חסונות",
      impact2Desc: "גיוון כלכלי ועסקים מקומיים יוצרים קהילות חזקות וחסונות יותר",
      impact3Title: "טיפוח חדשנות",
      impact3Desc: "יזמות ופיתוח כישורים מניעים חדשנות וצמיחה כלכלית",
      impact4Title: "קידום כבוד",
      impact4Desc: "הסתמכות עצמית ועצמאות כלכלית מחזירים כבוד ותקווה ליחידים ולמשפחות",
      ctaTitle: "הצטרפו אלינו ביצירת פרנסה בת קיימא",
      ctaDesc: "כל תרומה עוזרת לנו לספק הכשרה, משאבים והזדמנויות המשנים חיים ובונים קהילות משגשגות.",
      donateBtn: "תמכו בפרנסה",
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
    <div className={`${darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"} ${language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}`} dir={language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}>

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
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">{t.heroDesc}</p>
        </div>
      </section>

     
      {/* Livelihood Mission Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={ed2}
                alt="Livelihood Training"
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

      {/* Livelihood Programs Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.programsTitle}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t.programsDesc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaTools className="text-2xl text-[#4B80B3]" />
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
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaHandshake className="text-2xl text-[#4B80B3]" />
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
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
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
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
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
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
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

       {/* We create sustainable livelihoods - Image Layout Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-blue-50 text-[#4B80B3] rounded-full text-sm font-medium mb-4">
                  ABOUT US
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  We create sustainable livelihoods for communities
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Economic empowerment transforms not just individuals, but entire communities. By providing skills, resources, and opportunities, we help people build lasting sources of income that support their families and strengthen their communities for generations to come.
                </p>
              </div>

              {/* Image Grid - Left Side */}
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={ed1}
                    alt="Skills training"
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
                  src={ed3}
                  alt="Economic empowerment"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Content with Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Through comprehensive livelihood programs, we provide the training, resources, and ongoing support needed to help individuals create sustainable income sources and achieve long-term economic stability.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaTools className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Practical skills training for immediate employment</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaHandshake className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Microfinance and business development support</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaHeart className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Long-term mentorship and community support</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button className="px-6 py-3 bg-[#4B80B3] hover:bg-[#3a6b9e] text-white font-medium rounded-full transition-colors">
                    {t.donateNowBtn}
                  </button>
                  <button className="px-6 py-3 border border-[#4B80B3] text-[#4B80B3] hover:bg-blue-50 font-medium rounded-full transition-colors">
                    {t.aboutBtn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sustainable Livelihoods Matter Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.impactTitle}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t.impactDesc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.impact2Title}</h3>
              <p>{t.impact2Desc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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

export default Training;
