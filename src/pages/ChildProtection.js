import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import service1 from "../images/service1.jpg";
import { FaChild, FaShieldAlt, FaUsers, FaHeart, FaHandsHelping, FaHome } from 'react-icons/fa';
import videohero from "../images/vdeo745.mp4";
import { motion } from "framer-motion";
import ed1 from '../images/ed1.jpg';
import ed2 from '../images/ed2.jpg';
import ed3 from '../images/ed3.jpg';

const ChildProtection = () => {
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
      heroTitle: "Protecting Children, Building Futures",
      heroDesc: "Safeguarding children's rights and ensuring their protection from harm, abuse, and exploitation through comprehensive welfare programs.",
      missionTitle: "Every Child Deserves Protection and Care",
      missionDesc1: "Children are our most vulnerable population and deserve special protection and care. Our child protection programs work to ensure every child has a safe environment to grow, learn, and thrive without fear of harm or exploitation.",
      missionDesc2: "From preventing abuse to providing shelter and education, we create comprehensive support systems that address both immediate needs and long-term development for children at risk.",
      missionFeature1: "24/7 Child Protection Hotline",
      missionFeature2: "Safe Shelter & Care Services",
      missionFeature3: "Educational Support Programs",
      programsTitle: "Our Child Protection Programs",
      programsDesc: "Comprehensive programs designed to protect children from harm and provide them with safe, nurturing environments to grow and thrive",
      program1Title: "Child Abuse Prevention",
      program1Desc: "Proactive programs focused on preventing child abuse through community education, awareness campaigns, and early intervention services.",
      program1Feature1: "Community awareness workshops",
      program1Feature2: "Early intervention services",
      program1Feature3: "Parent education programs",
      program2Title: "Emergency Child Rescue",
      program2Desc: "Immediate response services for children in dangerous situations, providing emergency rescue and temporary safe housing.",
      program2Feature1: "24/7 emergency response team",
      program2Feature2: "Emergency shelter services",
      program2Feature3: "Crisis counseling support",
      program3Title: "Foster Care & Adoption",
      program3Desc: "Comprehensive foster care and adoption services ensuring children without families find loving, permanent homes.",
      program3Feature1: "Foster family recruitment and training",
      program3Feature2: "Adoption placement services",
      program3Feature3: "Post-placement support and monitoring",
      program4Title: "Child Rehabilitation",
      program4Desc: "Specialized rehabilitation services for children who have experienced trauma, abuse, or exploitation, helping them heal and reintegrate.",
      program4Feature1: "Trauma counseling and therapy",
      program4Feature2: "Educational rehabilitation programs",
      program4Feature3: "Social reintegration support",
      program5Title: "Street Children Outreach",
      program5Desc: "Dedicated programs for street children providing immediate care, shelter, and pathways to permanent solutions.",
      program5Feature1: "Mobile outreach teams",
      program5Feature2: "Drop-in centers and shelters",
      program5Feature3: "Family reunification services",
      program6Title: "Child Rights Advocacy",
      program6Desc: "Legal advocacy and policy work to strengthen child protection laws and ensure children's rights are respected and enforced.",
      program6Feature1: "Legal representation for children",
      program6Feature2: "Policy advocacy and reform",
      program6Feature3: "Rights education programs",
      impactTitle: "Why Child Protection Changes Lives Forever",
      impactDesc: "Protecting children today creates safer communities and stronger societies for generations to come",
      impact1Title: "Breaking Cycles of Abuse",
      impact1Desc: "Early intervention prevents abuse patterns from continuing across generations",
      impact2Title: "Creating Safe Environments",
      impact2Desc: "Safe spaces allow children to develop naturally without fear or trauma",
      impact3Title: "Building Resilient Communities",
      impact3Desc: "Protected children grow up to create safer, more caring communities",
      impact4Title: "Ensuring Bright Futures",
      impact4Desc: "Every protected child has the opportunity to reach their full potential and contribute positively to society",
      ctaTitle: "Join Us in Protecting Children",
      ctaDesc: "Every child deserves safety, love, and protection. Your support helps us create safe environments where children can grow and thrive.",
      donateBtn: "Support Child Protection",
      volunteerBtn: "Volunteer With Us",
      aboutBtn: "About us",
      donateNowBtn: "Donate now"
    },
    ar: {
      heroTitle: "حماية الأطفال، بناء المستقبل",
      heroDesc: "حماية حقوق الأطفال وضمان حمايتهم من الأذى والإساءة والاستغلال من خلال برامج الرعاية الشاملة.",
      missionTitle: "كل طفل يستحق الحماية والرعاية",
      missionDesc1: "الأطفال هم أكثر فئاتنا ضعفاً ويستحقون حماية ورعاية خاصة. برامج حماية الطفل لدينا تعمل لضمان أن كل طفل لديه بيئة آمنة للنمو والتعلم والازدهار دون خوف من الأذى أو الاستغلال.",
      missionDesc2: "من منع الإساءة إلى توفير المأوى والتعليم، نحن ننشئ أنظمة دعم شاملة تلبي الاحتياجات الفورية والتطوير طويل المدى للأطفال المعرضين للخطر.",
      missionFeature1: "خط ساخن لحماية الطفل على مدار 24/7",
      missionFeature2: "خدمات المأوى الآمن والرعاية",
      missionFeature3: "برامج الدعم التعليمي",
      programsTitle: "برامج حماية الطفل لدينا",
      programsDesc: "برامج شاملة مصممة لحماية الأطفال من الأذى وتوفير بيئات آمنة ومغذية لهم للنمو والازدهار",
      program1Title: "منع إساءة معاملة الأطفال",
      program1Desc: "برامج استباقية تركز على منع إساءة معاملة الأطفال من خلال التعليم المجتمعي وحملات التوعية وخدمات التدخل المبكر.",
      program1Feature1: "ورش توعية مجتمعية",
      program1Feature2: "خدمات التدخل المبكر",
      program1Feature3: "برامج تعليم الوالدين",
      program2Title: "إنقاذ الطفل الطارئ",
      program2Desc: "خدمات الاستجابة الفورية للأطفال في المواقف الخطيرة، توفير الإنقاذ الطارئ والإسكان الآمن المؤقت.",
      program2Feature1: "فريق الاستجابة الطارئة على مدار 24/7",
      program2Feature2: "خدمات المأوى الطارئ",
      program2Feature3: "دعم الاستشارة في الأزمات",
      program3Title: "الرعاية البديلة والتبني",
      program3Desc: "خدمات شاملة للرعاية البديلة والتبني تضمن أن الأطفال بدون عائلات يجدون منازل محبة ودائمة.",
      program3Feature1: "تجنيد وتدريب العائلات البديلة",
      program3Feature2: "خدمات وضع التبني",
      program3Feature3: "الدعم والمراقبة بعد الوضع",
      program4Title: "إعادة تأهيل الطفل",
      program4Desc: "خدمات إعادة تأهيل متخصصة للأطفال الذين تعرضوا للصدمة أو الإساءة أو الاستغلال، مساعدتهم على الشفاء وإعادة الاندماج.",
      program4Feature1: "الإرشاد والعلاج النفسي للصدمات",
      program4Feature2: "برامج إعادة التأهيل التعليمي",
      program4Feature3: "دعم إعادة الاندماج الاجتماعي",
      program5Title: "التوعية لأطفال الشوارع",
      program5Desc: "برامج مخصصة لأطفال الشوارع توفر الرعاية الفورية والمأوى ومسارات للحلول الدائمة.",
      program5Feature1: "فرق التوعية المتنقلة",
      program5Feature2: "مراكز الاستقبال والملاجئ",
      program5Feature3: "خدمات لم شمل الأسرة",
      program6Title: "الدفاع عن حقوق الطفل",
      program6Desc: "الدفاع القانوني وعمل السياسات لتعزيز قوانين حماية الطفل وضمان احترام وإنفاذ حقوق الأطفال.",
      program6Feature1: "التمثيل القانوني للأطفال",
      program6Feature2: "الدفاع عن السياسات والإصلاح",
      program6Feature3: "برامج تعليم الحقوق",
      impactTitle: "لماذا حماية الطفل تغير الحياة إلى الأبد",
      impactDesc: "حماية الأطفال اليوم تخلق مجتمعات أكثر أماناً ومجتمعات أقوى للأجيال القادمة",
      impact1Title: "كسر دورات الإساءة",
      impact1Desc: "التدخل المبكر يمنع أنماط الإساءة من الاستمرار عبر الأجيال",
      impact2Title: "خلق بيئات آمنة",
      impact2Desc: "المساحات الآمنة تسمح للأطفال بالنمو بشكل طبيعي دون خوف أو صدمة",
      impact3Title: "بناء مجتمعات مرنة",
      impact3Desc: "الأطفال المحميون يكبرون لإنشاء مجتمعات أكثر أماناً ورعاية",
      impact4Title: "ضمان مستقبل مشرق",
      impact4Desc: "كل طفل محمي لديه الفرصة للوصول إلى إمكاناته الكاملة والمساهمة بشكل إيجابي في المجتمع",
      ctaTitle: "انضم إلينا في حماية الأطفال",
      ctaDesc: "كل طفل يستحق الأمان والحب والحماية. دعمكم يساعدنا في خلق بيئات آمنة حيث يمكن للأطفال النمو والازدهار.",
      donateBtn: "دعم حماية الطفل",
      volunteerBtn: "تطوع معنا",
      aboutBtn: "من نحن",
      donateNowBtn: "تبرع الآن"
    },
    he: {
      heroTitle: "הגנה על ילדים, בניית עתיד",
      heroDesc: "שמירה על זכויות ילדים והבטחת הגנתם מפני פגיעה, התעללות וניצול באמצעות תוכניות רווחה מקיפות.",
      missionTitle: "כל ילד ראוי להגנה וטיפוח",
      missionDesc1: "ילדים הם האוכלוסייה הפגיעה ביותר שלנו וראויים להגנה וטיפוח מיוחדים. תוכניות הגנת הילד שלנו פועלות כדי להבטיח שלכל ילד תהיה סביבה בטוחה לגדול, ללמוד ולשגשג ללא פחד מפגיעה או ניצול.",
      missionDesc2: "ממניעת התעללות ועד מתן מחסה וחינוך, אנו יוצרים מערכות תמיכה מקיפות הפונות הן לצרכים המיידיים והן לפיתוח ארוך טווח עבור ילדים בסיכון.",
      missionFeature1: "קו חירום להגנת ילדים 24/7",
      missionFeature2: "שירותי מחסה ומטפלות בטוחים",
      missionFeature3: "תוכניות תמיכה חינוכית",
      programsTitle: "תוכניות הגנת הילד שלנו",
      programsDesc: "תוכניות מקיפות שנועדו להגן על ילדים מפני פגיעה ולספק להם סביבות בטוחות ומטפחות לגדול ולשגשג",
      program1Title: "מניעת התעללות בילדים",
      program1Desc: "תוכניות יזומות המתמקדות במניעת התעללות בילדים באמצעות חינוך קהילתי, קמפיינים למודעות ושירותי התערבות מוקדמת.",
      program1Feature1: "סדנאות מודעות קהילתית",
      program1Feature2: "שירותי התערבות מוקדמת",
      program1Feature3: "תוכניות חינוך הורים",
      program2Title: "הצלת ילדים חירום",
      program2Desc: "שירותי תגובה מיידית לילדים במצבים מסוכנים, מתן הצלה חירום ודיור בטוח זמני.",
      program2Feature1: "צוות תגובת חירום 24/7",
      program2Feature2: "שירותי מחסה חירום",
      program2Feature3: "תמיכה ביעוץ משבר",
      program3Title: "אומנה ואימוץ",
      program3Desc: "שירותי אומנה ואימוץ מקיפים המבטיחים שילדים ללא משפחות ימצאו בתים אוהבים וקבועים.",
      program3Feature1: "גיוס ואימון משפחות אומנות",
      program3Feature2: "שירותי השמה לאימוץ",
      program3Feature3: "תמיכה ומעקב לאחר השמה",
      program4Title: "שיקום ילדים",
      program4Desc: "שירותי שיקום מתמחים לילדים שחוו טראומה, התעללות או ניצול, עוזרים להם להחלים ולהשתלב מחדש.",
      program4Feature1: "יעוץ וטיפול טראומה",
      program4Feature2: "תוכניות שיקום חינוכי",
      program4Feature3: "תמיכה בשילוב חברתי מחדש",
      program5Title: "הגעה לילדי רחוב",
      program5Desc: "תוכניות ייעודיות לילדי רחוב המספקות טיפול מיידי, מחסה ונתיבים לפתרונות קבועים.",
      program5Feature1: "צוותי הגעה ניידים",
      program5Feature2: "מרכזי קליטה ומקלטים",
      program5Feature3: "שירותי איחוד משפחות",
      program6Title: "הגנה על זכויות ילדים",
      program6Desc: "הגנה משפטית ועבודת מדיניות לחיזוק חוקי הגנת ילדים ולהבטחת כיבוד ואכיפה של זכויות ילדים.",
      program6Feature1: "ייצוג משפטי לילדים",
      program6Feature2: "הגנה על מדיניות ורפורמה",
      program6Feature3: "תוכניות חינוך זכויות",
      impactTitle: "למה הגנת ילדים משנה חיים לנצח",
      impactDesc: "הגנה על ילדים היום יוצרת קהילות בטוחות יותר וחברות חזקות יותר לדורות הבאים",
      impact1Title: "שבירת מעגלי התעללות",
      impact1Desc: "התערבות מוקדמת מונעת ממעגלי התעללות להמשך בין דורות",
      impact2Title: "יצירת סביבות בטוחות",
      impact2Desc: "מרחבים בטוחים מאפשרים לילדים להתפתח באופן טבעי ללא פחד או טראומה",
      impact3Title: "בניית קהילות חסונות",
      impact3Desc: "ילדים מוגנים גדלים ליצור קהילות בטוחות ומטפחות יותר",
      impact4Title: "הבטחת עתיד מזהיר",
      impact4Desc: "לכל ילד מוגן יש הזדמנות להגיע לפוטנציאל המלא שלו ולתרום באופן חיובי לחברה",
      ctaTitle: "הצטרפו אלינו בהגנה על ילדים",
      ctaDesc: "כל ילד ראוי לבטיחות, אהבה והגנה. התמיכה שלכם עוזרת לנו ליצור סביבות בטוחות שבהן ילדים יכולים לגדול ולשגשג.",
      donateBtn: "תמכו בהגנת ילדים",
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
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"} dir={language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}>

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

     
      {/* Child Protection Mission Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={ed2}
                alt="Child Protection Mission"
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

      {/* Child Protection Programs Section */}
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
                <FaShieldAlt className="text-2xl text-[#4B80B3]" />
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
                <FaChild className="text-2xl text-[#4B80B3]" />
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
                <FaHome className="text-2xl text-[#4B80B3]" />
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
                <FaUsers className="text-2xl text-[#4B80B3]" />
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

       {/* Impact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-blue-50 text-[#4B80B3] rounded-full text-sm font-medium mb-4">
                  CHILD PROTECTION
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  {t.impactTitle}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t.impactDesc}
                </p>
              </div>

              {/* Image Grid - Left Side */}
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={ed1}
                    alt="Protected child"
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
                  alt="Children in safe environment"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Content with Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-[#4B80B3] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t.impact1Title}</h4>
                      <p className="text-gray-600">{t.impact1Desc}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-[#4B80B3] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t.impact2Title}</h4>
                      <p className="text-gray-600">{t.impact2Desc}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-[#4B80B3] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t.impact3Title}</h4>
                      <p className="text-gray-600">{t.impact3Desc}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-[#4B80B3] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t.impact4Title}</h4>
                      <p className="text-gray-600">{t.impact4Desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Child Protection Matters Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Child Protection Changes Everything</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Protecting children today creates stronger, safer communities for tomorrow and breaks cycles of violence and abuse
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Breaking Cycles of Abuse</h3>
              <p>Protection interventions prevent the intergenerational transmission of violence and trauma</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strengthening Families</h3>
              <p>Support services help families overcome challenges and create safer home environments</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Building Resilient Communities</h3>
              <p>Communities with strong child protection systems are safer and more prosperous for everyone</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ensuring Fundamental Rights</h3>
              <p>Every child has the right to safety, protection, and the opportunity to reach their full potential</p>
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
              className="px-8 py-3 border border-white text-white hover:bg-blue-700 font-medium rounded-lg transition-colors"
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

export default ChildProtection;
