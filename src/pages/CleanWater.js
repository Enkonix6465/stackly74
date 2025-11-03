import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import service1 from "../images/service1.jpg";
import { FaTint, FaHeart, FaUsers, FaHandsHelping, FaChartLine } from 'react-icons/fa';
import videohero from "../images/vdeo743.mp4";
import { motion } from "framer-motion";
import cw1 from '../images/water1.jpg';
import cw2 from '../images/water2.jpg';
import cw3 from '../images/water3.jpg';

const CleanWater = () => {
  const navigate = useNavigate();
  const darkMode = document.documentElement.classList.contains('dark');
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem('language') || 'en';
    return stored;
  });

  // Icon mapping for programs
  const icons = {
    FaTint,
    FaHeart,
    FaUsers,
    FaHandsHelping,
    FaChartLine
  };

  // Language detection
  useEffect(() => {
    const detectLanguage = () => {
      const stored = localStorage.getItem('language');
      console.log('CleanWater - Detected language:', stored);
      if (stored) {
        setLanguage(stored);
      }
    };

    detectLanguage();

    const handleLanguageChange = () => {
      const stored = localStorage.getItem('language');
      console.log('CleanWater - Language change event:', stored);
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

  // Translation content
  const translations = {
    en: {
      heroTitle: "Clean Water for Every Community",
      heroDesc: "Providing sustainable access to clean water and sanitation facilities for vulnerable communities worldwide",
      missionTag: "OUR MISSION",
      missionTitle: "Bringing Life-Saving Water to Communities in Need",
      missionPoints: [
        "Drill sustainable water wells in underserved communities",
        "Build proper sanitation facilities to prevent disease",
        "Provide water purification systems for safe drinking water",
        "Train communities in water system maintenance and hygiene practices"
      ],
      programsTitle: "Our Water & Sanitation Programs",
      programsDesc: "Comprehensive water and sanitation initiatives designed to provide sustainable access to clean water and improve community health",
      programs: [
        {
          icon: "FaTint",
          title: "Clean Water Wells",
          description: "Drilling deep water wells and boreholes to provide reliable access to clean, safe drinking water for communities in need.",
          features: [
            "Deep water well construction",
            "Solar-powered water pumps", 
            "Community water distribution points"
          ]
        },
        {
          icon: "FaHeart",
          title: "Sanitation Facilities",
          description: "Building proper sanitation facilities and promoting hygiene practices to prevent disease and improve overall community health.",
          features: [
            "Community toilet construction",
            "Hygiene education programs",
            "Waste management systems"
          ]
        },
        {
          icon: "FaUsers",
          title: "Water Purification",
          description: "Installing water filtration and purification systems to ensure communities have access to safe, clean drinking water.",
          features: [
            "Water filtration systems",
            "Water quality testing",
            "Chlorination and treatment"
          ]
        },
        {
          icon: "FaHeart",
          title: "School Water Programs",
          description: "Providing clean water and sanitation facilities in schools to improve student health and educational outcomes.",
          features: [
            "School water systems",
            "Student hygiene education",
            "Handwashing stations"
          ]
        },
        {
          icon: "FaHandsHelping",
          title: "Community Training",
          description: "Training local communities in water system maintenance, hygiene practices, and sustainable water management.",
          features: [
            "Technical maintenance training",
            "Hygiene behavior change",
            "Water conservation education"
          ]
        },
        {
          icon: "FaChartLine",
          title: "Emergency Water Relief",
          description: "Rapid response water and sanitation support for communities affected by natural disasters or humanitarian crises.",
          features: [
            "Emergency water distribution",
            "Portable sanitation units",
            "Disaster recovery planning"
          ]
        }
      ],
      aboutTag: "ABOUT US",
      aboutTitle: "We are here to support vulnerable communities",
      aboutDesc: "Clean water and proper sanitation are essential for life, health, and dignity. We believe every person deserves access to safe water and sanitation facilities that protect their health and enable their communities to thrive.",
      aboutContent: "Through sustainable water and sanitation programs, we provide life-saving infrastructure that prevents disease, supports education, and empowers communities to build healthier, more prosperous futures.",
      aboutFeatures: [
        "Safe, clean water accessible to all families",
        "Proper sanitation and hygiene facilities",
        "Community-led sustainable water management"
      ],
      impactTitle: "Why Clean Water Changes Everything",
      impactDesc: "Access to clean water and sanitation is fundamental to human health, dignity, and development",
      impactPoints: [
        {
          title: "Saves Lives",
          description: "Clean water prevents waterborne diseases and reduces child mortality rates significantly"
        },
        {
          title: "Enables Education", 
          description: "Children, especially girls, can attend school when they don't need to walk for water"
        },
        {
          title: "Empowers Women",
          description: "Women and girls gain time for education and income-generating activities"
        },
        {
          title: "Builds Communities",
          description: "Healthy communities can focus on development and economic growth"
        }
      ],
      aboutButton1: "Donate now",
      aboutButton2: "About us",
      ctaTitle: "Join Us in Bringing Clean Water to Every Community",
      ctaDesc: "Every donation helps us drill wells, build sanitation facilities, and bring life-saving clean water to families in need.",
      donateBtn: "Donate Today",
      volunteerBtn: "Volunteer With Us"
    },
    ar: {
      heroTitle: "مياه نظيفة لكل مجتمع",
      heroDesc: "توفير وصول مستدام للمياه النظيفة ومرافق الصرف الصحي للمجتمعات الضعيفة في جميع أنحاء العالم",
      missionTag: "مهمتنا",
      missionTitle: "جلب المياه المنقذة للحياة للمجتمعات المحتاجة",
      missionPoints: [
        "حفر آبار مياه مستدامة في المجتمعات المحرومة",
        "بناء مرافق صرف صحي مناسبة لمنع الأمراض",
        "توفير أنظمة تنقية المياه للشرب الآمن",
        "تدريب المجتمعات على صيانة أنظمة المياه وممارسات النظافة"
      ],
      programsTitle: "برامج المياه والصرف الصحي",
      programsDesc: "مبادرات شاملة للمياه والصرف الصحي مصممة لتوفير وصول مستدام للمياه النظيفة وتحسين صحة المجتمع",
      programs: [
        {
          icon: "FaTint",
          title: "آبار المياه النظيفة",
          description: "حفر آبار مياه عميقة وثقوب مائية لتوفير وصول موثوق للمياه النظيفة والآمنة للشرب للمجتمعات المحتاجة.",
          features: [
            "بناء آبار مياه عميقة",
            "مضخات مياه تعمل بالطاقة الشمسية",
            "نقاط توزيع المياه المجتمعية"
          ]
        },
        {
          icon: "FaHeart",
          title: "مرافق الصرف الصحي",
          description: "بناء مرافق صرف صحي مناسبة وتعزيز ممارسات النظافة لمنع الأمراض وتحسين الصحة العامة للمجتمع.",
          features: [
            "بناء مراحيض مجتمعية",
            "برامج تعليم النظافة",
            "أنظمة إدارة النفايات"
          ]
        },
        {
          icon: "FaUsers",
          title: "تنقية المياه",
          description: "تركيب أنظمة ترشيح وتنقية المياه لضمان وصول المجتمعات للمياه النظيفة والآمنة للشرب.",
          features: [
            "أنظمة ترشيح المياه",
            "اختبار جودة المياه",
            "الكلورة والمعالجة"
          ]
        },
        {
          icon: "FaHeart",
          title: "برامج المياه المدرسية",
          description: "توفير مياه نظيفة ومرافق صرف صحي في المدارس لتحسين صحة الطلاب والنتائج التعليمية.",
          features: [
            "أنظمة مياه مدرسية",
            "تعليم النظافة للطلاب",
            "محطات غسل اليدين"
          ]
        },
        {
          icon: "FaHandsHelping",
          title: "التدريب المجتمعي",
          description: "تدريب المجتمعات المحلية على صيانة أنظمة المياه وممارسات النظافة والإدارة المستدامة للمياه.",
          features: [
            "التدريب التقني على الصيانة",
            "تغيير سلوك النظافة",
            "تعليم الحفاظ على المياه"
          ]
        },
        {
          icon: "FaChartLine",
          title: "الإغاثة المائية الطارئة",
          description: "دعم سريع للمياه والصرف الصحي للمجتمعات المتضررة من الكوارث الطبيعية أو الأزمات الإنسانية.",
          features: [
            "توزيع المياه الطارئ",
            "وحدات صرف صحي محمولة",
            "تخطيط التعافي من الكوارث"
          ]
        }
      ],
      aboutTag: "من نحن",
      aboutTitle: "نحن هنا لدعم المجتمعات الضعيفة",
      aboutDesc: "المياه النظيفة والصرف الصحي المناسب ضروريان للحياة والصحة والكرامة. نعتقد أن كل شخص يستحق الوصول للمياه الآمنة ومرافق الصرف الصحي التي تحمي صحتهم وتمكن مجتمعاتهم من الازدهار.",
      aboutContent: "من خلال برامج المياه والصرف الصحي المستدامة، نوفر بنية تحتية منقذة للحياة تمنع الأمراض وتدعم التعليم وتمكن المجتمعات من بناء مستقبل أكثر صحة وازدهاراً.",
      aboutFeatures: [
        "مياه آمنة ونظيفة في متناول جميع العائلات",
        "مرافق صرف صحي ونظافة مناسبة",
        "إدارة مستدامة للمياه بقيادة المجتمع"
      ],
      impactTitle: "لماذا المياه النظيفة تغير كل شيء",
      impactDesc: "الوصول للمياه النظيفة والصرف الصحي أساسي لصحة الإنسان وكرامته وتنميته",
      impactPoints: [
        {
          title: "ينقذ الأرواح",
          description: "المياه النظيفة تمنع الأمراض المنقولة بالمياه وتقلل معدلات وفيات الأطفال بشكل كبير"
        },
        {
          title: "يمكّن التعليم",
          description: "الأطفال، خاصة الفتيات، يمكنهم حضور المدرسة عندما لا يحتاجون للسير لجلب الماء"
        },
        {
          title: "يمكّن المرأة",
          description: "النساء والفتيات يكتسبن وقتاً للتعليم والأنشطة المدرة للدخل"
        },
        {
          title: "يبني المجتمعات",
          description: "المجتمعات الصحية يمكنها التركيز على التنمية والنمو الاقتصادي"
        }
      ],
      aboutButton1: "تبرع الآن",
      aboutButton2: "معلومات عنا",
      ctaTitle: "انضم إلينا في جلب المياه النظيفة لكل مجتمع",
      ctaDesc: "كل تبرع يساعدنا في حفر الآبار وبناء مرافق الصرف الصحي وجلب المياه المنقذة للحياة للعائلات المحتاجة.",
      donateBtn: "تبرع اليوم",
      volunteerBtn: "تطوع معنا"
    },
    he: {
      heroTitle: "מים נקיים לכל קהילה",
      heroDesc: "מתן גישה בת קיימא למים נקיים ומתקני תברואה לקהילות פגיעות ברחבי העולם",
      missionTag: "המשימה שלנו",
      missionTitle: "הבאת מים מציל חיים לקהילות נזקקות",
      missionPoints: [
        "קידוח בארות מים בות קיימא בקהילות מוחלשות",
        "בניית מתקני תברואה מתאימים למניעת מחלות",
        "מתן מערכות טיהור מים לשתיה בטוחה",
        "הכשרת קהילות לתחזוקת מערכות מים ונוהגי היגיינה"
      ],
      programsTitle: "תוכניות המים והתברואה שלנו",
      programsDesc: "יוזמות מים ותברואה מקיפות שנועדו לספק גישה בת קיימא למים נקיים ולשפר את בריאות הקהילה",
      programs: [
        {
          icon: "FaTint",
          title: "בארות מים נקיים",
          description: "קידוח בארות מים עמוקות וחורי מים לספק גישה אמינה למים נקיים ובטוחים לשתיה לקהילות נזקקות.",
          features: [
            "בניית בארות מים עמוקות",
            "משאבות מים המופעלות באנרגיה סולארית",
            "נקודות חלוקת מים קהילתיות"
          ]
        },
        {
          icon: "FaHeart",
          title: "מתקני תברואה",
          description: "בניית מתקני תברואה מתאימים וקידום נוהגי היגיינה למניעת מחלות ושיפור הבריאות הכללית של הקהילה.",
          features: [
            "בניית שירותים קהילתיים",
            "תוכניות חינוך להיגיינה",
            "מערכות ניהול פסולת"
          ]
        },
        {
          icon: "FaUsers",
          title: "טיהור מים",
          description: "התקנת מערכות סינון וטיהור מים כדי להבטיח שלקהילות תהיה גישה למים נקיים ובטוחים לשתיה.",
          features: [
            "מערכות סינון מים",
            "בדיקת איכות מים",
            "כלורציה וטיפול"
          ]
        },
        {
          icon: "FaHeart",
          title: "תוכניות מים בבתי ספר",
          description: "מתן מים נקיים ומתקני תברואה בבתי ספר כדי לשפר את בריאות התלמידים והישגים חינוכיים.",
          features: [
            "מערכות מים בבתי ספר",
            "חינוך היגיינה לתלמידים",
            "תחנות שטיפת ידיים"
          ]
        },
        {
          icon: "FaHandsHelping",
          title: "הכשרה קהילתית",
          description: "הכשרת קהילות מקומיות לתחזוקת מערכות מים, נוהגי היגיינה וניהול מים בר קיימא.",
          features: [
            "הכשרה טכנית לתחזוקה",
            "שינוי התנהגות היגיינה",
            "חינוך לשימור מים"
          ]
        },
        {
          icon: "FaChartLine",
          title: "סיוע מים חירום",
          description: "תמיכה מהירה במים ותברואה לקהילות שנפגעו מאסונות טבע או משברים הומניטריים.",
          features: [
            "חלוקת מים חירום",
            "יחידות תברואה ניידות",
            "תכנון התאוששות מאסונות"
          ]
        }
      ],
      aboutTag: "אודותינו",
      aboutTitle: "אנחנו כאן לתמוך בקהילות פגיעות",
      aboutDesc: "מים נקיים ותברואה נאותה הם חיוניים לחיים, בריאות וכבוד. אנו מאמינים שכל אדם ראוי לגישה למים בטוחים ומתקני תברואה המגנים על בריאותם ומאפשרים לקהילותיהם לשגשג.",
      aboutContent: "באמצעות תוכניות מים ותברואה בנות קיימא, אנו מספקים תשתית מציל חיים המונעת מחלות, תומכת בחינוך ומעצימה קהילות לבנות עתיד בריא ומשגשג יותר.",
      aboutFeatures: [
        "מים בטוחים ונקיים נגישים לכל המשפחות",
        "מתקני תברואה והיגיינה מתאימים",
        "ניהול מים בר קיימא בהנהגת הקהילה"
      ],
      impactTitle: "למה מים נקיים משנים הכל",
      impactDesc: "גישה למים נקיים ותברואה היא בסיסית לבריאות אנושית, כבוד ופיתוח",
      impactPoints: [
        {
          title: "מציל חיים",
          description: "מים נקיים מונעים מחלות הנישאות במים ומפחיתים משמעותית את שיעורי תמותת ילדים"
        },
        {
          title: "מאפשר חינוך",
          description: "ילדים, במיוחד בנות, יכולים ללכת לבית הספר כשהם לא צריכים ללכת להביא מים"
        },
        {
          title: "מעצים נשים",
          description: "נשים ובנות זוכות לזמן לחינוך ופעילויות המניבות הכנסה"
        },
        {
          title: "בונה קהילות",
          description: "קהילות בריאות יכולות להתמקד בפיתוח וצמיחה כלכלית"
        }
      ],
      aboutButton1: "תרמו עכשיו",
      aboutButton2: "עלינו",
      ctaTitle: "הצטרפו אלינו בהבאת מים נקיים לכל קהילה",
      ctaDesc: "כל תרומה עוזרת לנו לקדוח בארות, לבנות מתקני תברואה ולהביא מים מציל חיים למשפחות נזקקות.",
      donateBtn: "תרמו היום",
      volunteerBtn: "התנדבו איתנו"
    }
  };

  const t = translations[language] || translations.en;
  console.log('CleanWater - Current language:', language, 'Translation:', t.heroTitle);

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={`${darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"} ${language === 'AR' || language === 'HE' ? 'rtl' : 'ltr'}`} dir={language === 'AR' || language === 'HE' ? 'rtl' : 'ltr'}>

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

     
      {/* Water Mission Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={cw1}
                alt="Clean Water Mission"
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

      {/* Water & Sanitation Programs Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.programsTitle}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t.programsDesc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.programs.map((program, index) => {
              const IconComponent = icons[program.icon];
              return (
                <div key={index} className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <IconComponent className="text-2xl text-[#4B80B3]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                  <p className="mb-4">
                    {program.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-[#4B80B3] mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
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
                <span className="inline-block px-4 py-2 bg-blue-50 text-[#4B80B3] rounded-full text-sm font-medium mb-4">
                  {t.aboutTag}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  {t.aboutTitle}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t.aboutDesc}
                </p>
              </div>

              {/* Image Grid - Left Side */}
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={cw2}
                    alt="Clean water access"
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
                  src={cw3}
                  alt="Community water project"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Content with Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t.aboutContent}
                </p>

                <div className="space-y-4">
                  {t.aboutFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                        <FaTint className="text-[#4B80B3] text-sm" />
                      </div>
                      <span className="text-black font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <button className="px-6 py-3 bg-[#4B80B3] hover:bg-[#3a6b9e] text-white font-medium rounded-full transition-colors">
                    {t.aboutButton1}
                  </button>
                  <button className="px-6 py-3 border border-[#4B80B3] text-[#4B80B3] hover:bg-blue-50 font-medium rounded-full transition-colors">
                    {t.aboutButton2}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clean Water Matters Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.impactTitle}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t.impactDesc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.impactPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
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

export default CleanWater;
