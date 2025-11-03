import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import service1 from "../images/service1.jpg";
import { FaHeartbeat, FaStethoscope, FaUsers, FaHeart, FaHandsHelping, FaUserMd } from 'react-icons/fa';
import videohero from "../images/vdeo744.mp4";
import { motion } from "framer-motion";
import health1 from '../images/health1.jpg';
import health2 from '../images/health2.jpg';
import health3 from '../images/health3.jpg';

// Translations for Healthcare page
const translations = {
  en: {
    heroTitle: "Essential Healthcare for Everyone",
    heroDesc: "Providing accessible, quality healthcare services and plans to underserved communities, ensuring no one is left behind.",
    
    missionTitle: "Transforming Communities Through Healthcare",
    missionDesc1: "Healthcare is a fundamental human right. In many underserved communities, access to quality medical care remains a challenge. Our comprehensive healthcare programs are designed to bridge this gap, providing essential medical services, preventive care, and health education to those who need it most.",
    missionDesc2: "From mobile clinics to community health centers, we work tirelessly to ensure that geography, income, or social status never becomes a barrier to receiving quality healthcare.",
    missionPoints: [
      "Primary Healthcare Services",
      "Preventive Care Programs", 
      "Health Education & Awareness"
    ],

    programsTitle: "Our Healthcare Programs",
    programsDesc: "Comprehensive healthcare initiatives designed to improve health outcomes and save lives in underserved communities",
    
    programs: [
      {
        title: "Mobile Health Clinics",
        desc: "Bringing healthcare directly to remote and underserved communities through fully equipped mobile medical units.",
        points: [
          "Basic medical examinations",
          "Vaccinations and immunizations",
          "Health screenings and diagnostics"
        ]
      },
      {
        title: "Maternal & Child Health",
        desc: "Specialized programs focusing on the health and wellbeing of mothers and children through all stages of development.",
        points: [
          "Prenatal and postnatal care",
          "Child nutrition programs",
          "Family planning services"
        ]
      },
      {
        title: "Emergency Medical Response",
        desc: "Rapid response healthcare services for emergency situations and medical crises in vulnerable communities.",
        points: [
          "Emergency medical treatment",
          "Disaster response healthcare",
          "Critical care transport"
        ]
      },
      {
        title: "Chronic Disease Management",
        desc: "Long-term care programs for managing chronic conditions like diabetes, hypertension, and heart disease.",
        points: [
          "Regular health monitoring",
          "Medication management",
          "Lifestyle counseling"
        ]
      },
      {
        title: "Mental Health Support",
        desc: "Comprehensive mental health services addressing psychological wellbeing and emotional support needs.",
        points: [
          "Counseling and therapy",
          "Support group programs",
          "Crisis intervention services"
        ]
      },
      {
        title: "Health Education",
        desc: "Community education programs promoting health awareness and preventive care practices.",
        points: [
          "Health literacy workshops",
          "Disease prevention education",
          "Nutrition and wellness programs"
        ]
      }
    ],

    aboutLabel: "ABOUT US",
    aboutTitle: "We are here to support vulnerable communities",
    aboutDesc: "Healthcare transforms lives by providing essential medical services and promoting wellness in underserved communities. We believe every individual deserves access to quality healthcare regardless of their circumstances.",
    aboutContent: "Through comprehensive healthcare programs, we provide medical services that save lives, prevent diseases, and promote overall wellbeing in communities that need it most.",
    aboutFeatures: [
      "Accessible healthcare for all community members",
      "Comprehensive medical services and treatments", 
      "Preventive care and health education programs"
    ],
    donateBtn: "Donate now",
    aboutBtn: "About us",

    impactTitle: "Why Healthcare Saves Lives",
    impactDesc: "Quality healthcare is not just about treating illness, but about promoting wellness and preventing disease",
    impactPoints: [
      {
        title: "Preventing Disease",
        desc: "Early intervention and preventive care help avoid serious health complications and save lives"
      },
      {
        title: "Saving Lives", 
        desc: "Emergency medical services and critical care provide life-saving interventions when needed most"
      },
      {
        title: "Promoting Wellness",
        desc: "Health education and wellness programs promote healthier lifestyles and community wellbeing"
      },
      {
        title: "Building Healthier Communities",
        desc: "Comprehensive healthcare programs create healthier, more resilient communities"
      }
    ],

    ctaTitle: "Join Us in Providing Essential Healthcare",
    ctaDesc: "Every donation, every volunteer hour, and every shared story helps us reach more people who need healthcare services.",
    donateToday: "Donate Today",
    volunteerBtn: "Volunteer With Us"
  },
  ar: {
    heroTitle: "رعاية صحية أساسية للجميع",
    heroDesc: "توفير خدمات الرعاية الصحية الجيدة والمتاحة للمجتمعات المحرومة، وضمان عدم ترك أحد خلف الركب.",
    
    missionTitle: "تحويل المجتمعات من خلال الرعاية الصحية",
    missionDesc1: "الرعاية الصحية حق أساسي من حقوق الإنسان. في العديد من المجتمعات المحرومة، لا يزال الوصول إلى الرعاية الطبية الجيدة يشكل تحدياً. برامجنا الصحية الشاملة مصممة لسد هذه الفجوة، وتوفير الخدمات الطبية الأساسية والرعاية الوقائية والتثقيف الصحي لأولئك الذين يحتاجونها أكثر.",
    missionDesc2: "من العيادات المتنقلة إلى مراكز الصحة المجتمعية، نعمل بلا كلل لضمان ألا تصبح الجغرافيا أو الدخل أو الوضع الاجتماعي عائقاً أمام تلقي رعاية صحية جيدة.",
    missionPoints: [
      "خدمات الرعاية الصحية الأولية",
      "برامج الرعاية الوقائية",
      "التثقيف والتوعية الصحية"
    ],

    programsTitle: "برامجنا الصحية",
    programsDesc: "مبادرات رعاية صحية شاملة مصممة لتحسين النتائج الصحية وإنقاذ الأرواح في المجتمعات المحرومة",
    
    programs: [
      {
        title: "العيادات الصحية المتنقلة",
        desc: "جلب الرعاية الصحية مباشرة إلى المجتمعات النائية والمحرومة من خلال وحدات طبية متنقلة مجهزة بالكامل.",
        points: [
          "فحوصات طبية أساسية",
          "التطعيمات والتحصين",
          "الفحوصات الصحية والتشخيص"
        ]
      },
      {
        title: "صحة الأم والطفل",
        desc: "برامج متخصصة تركز على صحة ورفاهية الأمهات والأطفال في جميع مراحل التطوير.",
        points: [
          "رعاية ما قبل وبعد الولادة",
          "برامج تغذية الطفل",
          "خدمات تنظيم الأسرة"
        ]
      },
      {
        title: "الاستجابة الطبية الطارئة",
        desc: "خدمات الرعاية الصحية السريعة للحالات الطارئة والأزمات الطبية في المجتمعات الضعيفة.",
        points: [
          "العلاج الطبي الطارئ",
          "رعاية صحية لاستجابة الكوارث",
          "نقل الرعاية الحرجة"
        ]
      },
      {
        title: "إدارة الأمراض المزمنة",
        desc: "برامج رعاية طويلة المدى لإدارة الحالات المزمنة مثل السكري وارتفاع ضغط الدم وأمراض القلب.",
        points: [
          "مراقبة صحية منتظمة",
          "إدارة الأدوية",
          "إرشاد نمط الحياة"
        ]
      },
      {
        title: "دعم الصحة النفسية",
        desc: "خدمات شاملة للصحة النفسية تعالج الرفاهية النفسية واحتياجات الدعم العاطفي.",
        points: [
          "الاستشارة والعلاج",
          "برامج مجموعات الدعم",
          "خدمات التدخل في الأزمات"
        ]
      },
      {
        title: "التثقيف الصحي",
        desc: "برامج تعليمية مجتمعية تعزز الوعي الصحي وممارسات الرعاية الوقائية.",
        points: [
          "ورش التثقيف الصحي",
          "تعليم الوقاية من الأمراض",
          "برامج التغذية والعافية"
        ]
      }
    ],

    aboutLabel: "معلومات عنا",
    aboutTitle: "نحن هنا لدعم المجتمعات الضعيفة",
    aboutDesc: "الرعاية الصحية تحول الحياة من خلال توفير الخدمات الطبية الأساسية وتعزيز العافية في المجتمعات المحرومة. نؤمن أن كل فرد يستحق الوصول إلى رعاية صحية جيدة بغض النظر عن ظروفه.",
    aboutContent: "من خلال برامج الرعاية الصحية الشاملة، نوفر خدمات طبية تنقذ الأرواح وتمنع الأمراض وتعزز الرفاهية العامة في المجتمعات التي تحتاجها أكثر.",
    aboutFeatures: [
      "رعاية صحية متاحة لجميع أفراد المجتمع",
      "خدمات طبية وعلاجات شاملة",
      "برامج الرعاية الوقائية والتثقيف الصحي"
    ],
    donateBtn: "تبرع الآن",
    aboutBtn: "معلومات عنا",

    impactTitle: "لماذا الرعاية الصحية تنقذ الأرواح",
    impactDesc: "الرعاية الصحية الجيدة ليست فقط عن علاج المرض، بل عن تعزيز العافية ومنع المرض",
    impactPoints: [
      {
        title: "منع الأمراض",
        desc: "التدخل المبكر والرعاية الوقائية تساعد في تجنب المضاعفات الصحية الخطيرة وإنقاذ الأرواح"
      },
      {
        title: "إنقاذ الأرواح",
        desc: "خدمات الطوارئ الطبية والرعاية الحرجة توفر تدخلات منقذة للحياة عند الحاجة أكثر"
      },
      {
        title: "تعزيز العافية",
        desc: "برامج التثقيف الصحي والعافية تعزز أنماط حياة أكثر صحة ورفاهية المجتمع"
      },
      {
        title: "بناء مجتمعات أكثر صحة",
        desc: "برامج الرعاية الصحية الشاملة تخلق مجتمعات أكثر صحة ومرونة"
      }
    ],

    ctaTitle: "انضم إلينا في توفير الرعاية الصحية الأساسية",
    ctaDesc: "كل تبرع، كل ساعة تطوع، وكل قصة مشتركة تساعدنا في الوصول إلى المزيد من الأشخاص الذين يحتاجون إلى خدمات الرعاية الصحية.",
    donateToday: "تبرع اليوم",
    volunteerBtn: "تطوع معنا"
  },
  he: {
    heroTitle: "שירותי בריאות חיוניים לכולם",
    heroDesc: "מתן שירותי בריאות נגישים ואיכותיים לקהילות מוחלשות, תוך הבטחה שאף אחד לא נשאר מאחור.",
    
    missionTitle: "שינוי קהילות באמצעות שירותי בריאות",
    missionDesc1: "שירותי בריאות הם זכות אדם בסיסית. בקהילות מוחלשות רבות, הגישה לטיפול רפואי איכותי נותרת אתגר. התכניות הבריאותיות המקיפות שלנו מתוכננות לגשר על הפער הזה, ומספקות שירותים רפואיים חיוניים, טיפול מונע וחינוך בריאותי לאלה הזקוקים לכך ביותר.",
    missionDesc2: "ממרפאות נייות ועד מרכזי בריאות קהילתיים, אנו עובדים ללא לאות כדי להבטיח שגיאוגרפיה, הכנסה או מעמד חברתי לעולם לא יהפכו למחסום לקבלת טיפול רפואי איכותי.",
    missionPoints: [
      "שירותי בריאות ראשוניים",
      "תכניות טיפול מונע",
      "חינוך ומודעות בריאותית"
    ],

    programsTitle: "התכניות הבריאותיות שלנו",
    programsDesc: "יוזמות בריאות מקיפות שנועדו לשפר תוצאות בריאותיות ולהציל חיים בקהילות מוחלשות",
    
    programs: [
      {
        title: "מרפאות בריאות ניידות",
        desc: "הבאת שירותי בריאות ישירות לקהילות מרוחקות ומוחלשות באמצעות יחידות רפואיות ניידות מאובזרות במלואן.",
        points: [
          "בדיקות רפואיות בסיסיות",
          "חיסונים וחיסונים",
          "בדיקות בריאות ואבחון"
        ]
      },
      {
        title: "בריאות אם וילד",
        desc: "תכניות מתמחות המתמקדות בבריאות ורווחה של אמהות וילדים בכל שלבי ההתפתחות.",
        points: [
          "טיפול לפני ואחרי לידה",
          "תכניות תזונת ילדים",
          "שירותי תכנון משפחה"
        ]
      },
      {
        title: "תגובה רפואית חירום",
        desc: "שירותי בריאות מהירים למצבי חירום ומשברים רפואיים בקהילות פגיעות.",
        points: [
          "טיפול רפואי חירום",
          "שירותי בריאות לתגובת אסון",
          "הובלת טיפול קריטי"
        ]
      },
      {
        title: "ניהול מחלות כרוניות",
        desc: "תכניות טיפול ארוכות טווח לניהול מצבים כרוניים כמו סוכרת, יתר לחץ דם ומחלות לב.",
        points: [
          "מעקב בריאותי קבוע",
          "ניהול תרופות",
          "ייעוץ אורח חיים"
        ]
      },
      {
        title: "תמיכה בבריאות הנפש",
        desc: "שירותי בריאות נפש מקיפים המטפלים ברווחה פסיכולוגית וצרכי תמיכה רגשית.",
        points: [
          "ייעוץ וטיפול",
          "תכניות קבוצות תמיכה",
          "שירותי התערבות במשבר"
        ]
      },
      {
        title: "חינוך בריאותי",
        desc: "תכניות חינוך קהילתיות המקדמות מודעות בריאותית ושיטות טיפול מונע.",
        points: [
          "סדנאות אוריינות בריאותית",
          "חינוך למניעת מחלות",
          "תכניות תזונה ובריאות"
        ]
      }
    ],

    aboutLabel: "עלינו",
    aboutTitle: "אנחנו כאן לתמוך בקהילות פגיעות",
    aboutDesc: "שירותי בריאות משנים חיים על ידי מתן שירותים רפואיים חיוניים וקידום בריאות בקהילות מוחלשות. אנו מאמינים שכל אדם זכאי לגישה לשירותי בריאות איכותיים ללא קשר לנסיבותיו.",
    aboutContent: "באמצעות תכניות בריאות מקיפות, אנו מספקים שירותים רפואיים המצילים חיים, מונעים מחלות ומקדמים רווחה כללית בקהילות הזקוקות לכך ביותר.",
    aboutFeatures: [
      "שירותי בריאות נגישים לכל חברי הקהילה",
      "שירותים רפואיים וטיפולים מקיפים",
      "תכניות טיפול מונע וחינוך בריאותי"
    ],
    donateBtn: "תרום עכשיו",
    aboutBtn: "עלינו",

    impactTitle: "למה שירותי בריאות מצילים חיים",
    impactDesc: "שירותי בריאות איכותיים זה לא רק על טיפול במחלות, אלא על קידום בריאות ומניעת מחלות",
    impactPoints: [
      {
        title: "מניעת מחלות",
        desc: "התערבות מוקדמת וטיפול מונע עוזרים להימנע מסיבוכים בריאותיים חמורים ולהציל חיים"
      },
      {
        title: "הצלת חיים",
        desc: "שירותי רפואת חירום וטיפול קריטי מספקים התערבויות מצילות חיים כשזה הכי נחוץ"
      },
      {
        title: "קידום בריאות",
        desc: "תכניות חינוך בריאותי ובריאות מקדמות אורחות חיים בריאים יותר ורווחת הקהילה"
      },
      {
        title: "בניית קהילות בריאות יותר",
        desc: "תכניות בריאות מקיפות יוצרות קהילות בריאות ועמידות יותר"
      }
    ],

    ctaTitle: "הצטרפו אלינו במתן שירותי בריאות חיוניים",
    ctaDesc: "כל תרומה, כל שעת התנדבות וכל סיפור משותף עוזרים לנו להגיע לעוד אנשים הזקוקים לשירותי בריאות.",
    donateToday: "תרמו היום",
    volunteerBtn: "התנדבו איתנו"
  }
};

const Healthcare = () => {
  const navigate = useNavigate();
  const darkMode = document.documentElement.classList.contains('dark');
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const handleLangChange = (e) => {
      const newLanguage = e.detail || localStorage.getItem("language") || "en";
      setLanguage(newLanguage);
    };
    
    // Also check localStorage on mount in case it changed
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage && storedLanguage !== language) {
      setLanguage(storedLanguage);
    }
    
    // Polling mechanism as backup - check localStorage every 500ms
    const pollLanguage = setInterval(() => {
      const currentStoredLanguage = localStorage.getItem("language") || "en";
      if (currentStoredLanguage !== language) {
        setLanguage(currentStoredLanguage);
      }
    }, 500);
    
    window.addEventListener("languageChange", handleLangChange);
    return () => {
      window.removeEventListener("languageChange", handleLangChange);
      clearInterval(pollLanguage);
    };
  }, [language]);

  const t = translations[language] || translations.en;

  const handleGetStarted = (path) => {
    navigate(path);
  };

  // Icon mapping for programs
  const programIcons = [FaHeartbeat, FaStethoscope, FaUsers, FaHeart, FaHandsHelping, FaUserMd];

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"}>

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

     
      {/* Healthcare Mission Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={health1}
                alt="Healthcare Mission"
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
                {t.missionPoints.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Services Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.programsTitle}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t.programsDesc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.programs.slice(0, 6).map((program, index) => {
              const IconComponent = programIcons[index];
              return (
                <div key={index} className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <IconComponent className="text-2xl text-[#4B80B3]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                  <p className="mb-4">
                    {program.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {program.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-[#4B80B3] mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

       {/* We are here to support vulnerable communities - Healthcare Focus */}
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
                  We provide essential healthcare to those in need
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Healthcare should never be a luxury. We bridge the gap between medical needs and accessible care, ensuring that vulnerable communities receive the essential health services they deserve, regardless of their economic circumstances.
                </p>
              </div>

              {/* Image Grid - Left Side */}
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={health2}
                    alt="Healthcare support"
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
                  src={health3}
                  alt="Medical care"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Content with Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Through comprehensive healthcare programs, we deliver quality medical services that save lives, prevent diseases, and promote overall wellness in underserved communities across the region.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaHeartbeat className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Accessible primary healthcare for all families</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaStethoscope className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Preventive care and health screening programs</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaHeart className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Compassionate care focused on patient dignity</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button className="px-6 py-3 bg-[#4B80B3] hover:bg-[#3a6b9e] text-white font-medium rounded-full transition-colors">
                    Donate now
                  </button>
                  <button className="px-6 py-3 border border-[#4B80B3] text-[#4B80B3] hover:bg-blue-50 font-medium rounded-full transition-colors">
                    About us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Healthcare Matters Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Healthcare Access Changes Lives</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Quality healthcare is the foundation of thriving communities, enabling individuals to live healthy, productive lives
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Saving Lives</h3>
              <p>Early detection and treatment of diseases prevent complications and save countless lives</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strengthening Communities</h3>
              <p>Healthy individuals contribute to stronger, more resilient communities and economies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Preventing Disease</h3>
              <p>Preventive care and health education stop diseases before they start or spread</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Breaking Barriers</h3>
              <p>Healthcare access removes economic barriers that prevent people from receiving treatment</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#4B80B3] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Providing Essential Healthcare</h2>
          <p className="text-xl mb-8">
            Every donation helps us deliver life-saving medical care, preventive services, and health education to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-white text-[#4B80B3] hover:bg-gray-100 font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/donate")}
            >
              Support Healthcare
            </button>
            <button 
              className="px-8 py-3 border border-white text-white hover:bg-[#3a6b9e] font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/volunteer")}
            >
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
