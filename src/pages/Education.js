import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import service1 from "../images/service1.jpg";
import { FaGraduationCap, FaBook, FaUsers, FaHeart, FaHandsHelping, FaChartLine } from 'react-icons/fa';
import videohero from "../images/vdeo743.mp4";
import { motion } from "framer-motion";
import ed1 from '../images/ed1.jpg';
import ed2 from '../images/ed2.jpg';
import ed3 from '../images/ed3.jpg';

// Translations for Education page
const translations = {
  en: {
    heroTitle: "Empowering Futures Through Education",
    heroDesc: "Breaking barriers and creating opportunities through quality education for every child, regardless of their background.",
    
    missionTitle: "Transforming Lives Through Learning",
    missionDesc1: "Education is the most powerful tool to change the world. In underserved communities, access to quality education can break cycles of poverty and open doors to limitless possibilities. Our comprehensive educational programs are designed to nurture minds, build character, and create future leaders.",
    missionDesc2: "From early childhood development to adult literacy programs, we believe every individual deserves the opportunity to learn, grow, and achieve their dreams through education.",
    missionPoints: [
      "Quality Primary & Secondary Education",
      "Scholarship Programs", 
      "Adult Literacy & Vocational Training"
    ],

    programsTitle: "Our Educational Programs",
    programsDesc: "Comprehensive educational initiatives designed to unlock potential and create lasting change in communities",
    
    programs: [
      {
        title: "Primary Education Support",
        desc: "Providing foundational education to children in underserved communities, ensuring every child has access to quality learning environments and resources.",
        points: [
          "Free tuition and learning materials",
          "Nutritious meal programs",
          "After-school tutoring support"
        ]
      },
      {
        title: "Scholarship Programs", 
        desc: "Merit-based and need-based scholarships helping talented students pursue higher education and achieve their academic goals.",
        points: [
          "University tuition assistance",
          "Books and equipment support",
          "Mentorship and career guidance"
        ]
      },
      {
        title: "Adult Literacy Programs",
        desc: "Empowering adults with basic literacy and numeracy skills, helping them become active participants in their communities and workforce.",
        points: [
          "Reading and writing classes",
          "Digital literacy training", 
          "Life skills workshops"
        ]
      },
      {
        title: "Special Needs Education",
        desc: "Inclusive education programs ensuring children with special needs receive appropriate support and opportunities to reach their full potential.",
        points: [
          "Specialized teaching methods",
          "Therapeutic support services",
          "Family counseling programs"
        ]
      },
      {
        title: "Vocational Training",
        desc: "Practical skills training programs that prepare individuals for sustainable employment and entrepreneurship opportunities.",
        points: [
          "Technical skills development",
          "Entrepreneurship training",
          "Job placement assistance"
        ]
      },
      {
        title: "Teacher Training",
        desc: "Professional development programs for educators to enhance teaching quality and create more effective learning environments.",
        points: [
          "Modern teaching methodologies",
          "Classroom management skills",
          "Continuous professional development"
        ]
      }
    ],

    aboutLabel: "ABOUT US",
    aboutTitle: "We are here to support vulnerable communities",
    aboutDesc: "Education transforms lives by breaking cycles of poverty and creating opportunities for growth. We believe every individual deserves access to quality education that empowers them to achieve their full potential and contribute to their communities.",
    aboutContent: "Through comprehensive educational programs, we provide quality learning opportunities that equip individuals with the knowledge and skills needed to transform their lives and contribute meaningfully to society.",
    aboutFeatures: [
      "Quality education accessible to all children",
      "Comprehensive learning resources and materials", 
      "Supportive community-focused educational environment"
    ],
    donateBtn: "Donate now",
    aboutBtn: "About us",

    impactTitle: "Why Education Changes Everything",
    impactDesc: "Education is not just learning facts, but training the mind to think and empowering individuals to transform their lives",
    impactPoints: [
      {
        title: "Breaking Poverty Cycles",
        desc: "Education provides pathways out of poverty and creates opportunities for sustainable livelihoods"
      },
      {
        title: "Building Communities", 
        desc: "Educated individuals become community leaders and agents of positive social change"
      },
      {
        title: "Fostering Innovation",
        desc: "Education nurtures creative thinking and innovation that drives progress and development"
      },
      {
        title: "Empowering Equality",
        desc: "Education is a fundamental right that promotes equality and human dignity for all"
      }
    ],

    ctaTitle: "Join Us in Empowering Futures Through Education",
    ctaDesc: "Every donation, every volunteer hour, and every shared story helps us reach more children and adults who need educational opportunities.",
    donateToday: "Donate Today",
    volunteerBtn: "Volunteer With Us"
  },
  ar: {
    heroTitle: "تمكين المستقبل من خلال التعليم",
    heroDesc: "كسر الحواجز وخلق الفرص من خلال التعليم الجيد لكل طفل، بغض النظر عن خلفيته.",
    
    missionTitle: "تحويل الحياة من خلال التعلم",
    missionDesc1: "التعليم هو أقوى أداة لتغيير العالم. في المجتمعات المحرومة، يمكن للوصول إلى التعليم الجيد كسر دورات الفقر وفتح أبواب إمكانيات لا محدودة. برامجنا التعليمية الشاملة مصممة لتنمية العقول وبناء الشخصية وخلق قادة المستقبل.",
    missionDesc2: "من تنمية الطفولة المبكرة إلى برامج محو الأمية للكبار، نؤمن أن كل فرد يستحق الفرصة للتعلم والنمو وتحقيق أحلامه من خلال التعليم.",
    missionPoints: [
      "التعليم الابتدائي والثانوي الجيد",
      "برامج المنح الدراسية",
      "محو الأمية للكبار والتدريب المهني"
    ],

    programsTitle: "برامجنا التعليمية",
    programsDesc: "مبادرات تعليمية شاملة مصممة لإطلاق الإمكانيات وخلق تغيير دائم في المجتمعات",
    
    programs: [
      {
        title: "دعم التعليم الابتدائي",
        desc: "توفير التعليم الأساسي للأطفال في المجتمعات المحرومة، وضمان حصول كل طفل على بيئات تعليمية جيدة وموارد.",
        points: [
          "رسوم دراسية مجانية ومواد تعليمية",
          "برامج وجبات مغذية",
          "دعم التدريس بعد المدرسة"
        ]
      },
      {
        title: "برامج المنح الدراسية",
        desc: "منح دراسية على أساس الجدارة والحاجة لمساعدة الطلاب الموهوبين على متابعة التعليم العالي وتحقيق أهدافهم الأكاديمية.",
        points: [
          "مساعدة في الرسوم الجامعية",
          "دعم الكتب والمعدات",
          "الإرشاد والتوجيه المهني"
        ]
      },
      {
        title: "برامج محو الأمية للكبار",
        desc: "تمكين الكبار بمهارات القراءة والكتابة والحساب الأساسية، ومساعدتهم ليصبحوا مشاركين نشطين في مجتمعاتهم وقوة العمل.",
        points: [
          "دروس القراءة والكتابة",
          "التدريب على الأمية الرقمية",
          "ورش مهارات الحياة"
        ]
      },
      {
        title: "تعليم ذوي الاحتياجات الخاصة",
        desc: "برامج تعليمية شاملة تضمن حصول الأطفال ذوي الاحتياجات الخاصة على الدعم المناسب والفرص للوصول إلى إمكاناتهم الكاملة.",
        points: [
          "طرق تدريس متخصصة",
          "خدمات الدعم العلاجي",
          "برامج الإرشاد الأسري"
        ]
      },
      {
        title: "التدريب المهني",
        desc: "برامج تدريب المهارات العملية التي تعد الأفراد للتوظيف المستدام وفرص ريادة الأعمال.",
        points: [
          "تطوير المهارات التقنية",
          "تدريب ريادة الأعمال",
          "مساعدة في التوظيف"
        ]
      },
      {
        title: "تدريب المعلمين",
        desc: "برامج التطوير المهني للمعلمين لتعزيز جودة التدريس وخلق بيئات تعلم أكثر فعالية.",
        points: [
          "منهجيات التدريس الحديثة",
          "مهارات إدارة الفصل الدراسي",
          "التطوير المهني المستمر"
        ]
      }
    ],

    aboutLabel: "معلومات عنا",
    aboutTitle: "نحن هنا لدعم المجتمعات الضعيفة",
    aboutDesc: "التعليم يحول الحياة من خلال كسر دورات الفقر وخلق فرص للنمو. نؤمن أن كل فرد يستحق الوصول إلى التعليم الجيد الذي يمكنه من تحقيق إمكاناته الكاملة والمساهمة في مجتمعه.",
    aboutContent: "من خلال البرامج التعليمية الشاملة، نوفر فرص تعلم جيدة تزود الأفراد بالمعرفة والمهارات اللازمة لتحويل حياتهم والمساهمة بشكل مفيد في المجتمع.",
    aboutFeatures: [
      "تعليم جيد يمكن الوصول إليه لجميع الأطفال",
      "موارد ومواد تعليمية شاملة",
      "بيئة تعليمية داعمة تركز على المجتمع"
    ],
    donateBtn: "تبرع الآن",
    aboutBtn: "معلومات عنا",

    impactTitle: "لماذا التعليم يغير كل شيء",
    impactDesc: "التعليم ليس مجرد تعلم الحقائق، بل تدريب العقل على التفكير وتمكين الأفراد من تحويل حياتهم",
    impactPoints: [
      {
        title: "كسر دورات الفقر",
        desc: "التعليم يوفر مسارات للخروج من الفقر ويخلق فرص للعيش المستدام"
      },
      {
        title: "بناء المجتمعات",
        desc: "الأفراد المتعلمون يصبحون قادة مجتمعيين ووكلاء للتغيير الاجتماعي الإيجابي"
      },
      {
        title: "تعزيز الابتكار",
        desc: "التعليم ينمي التفكير الإبداعي والابتكار الذي يدفع التقدم والتطوير"
      },
      {
        title: "تمكين المساواة",
        desc: "التعليم حق أساسي يعزز المساواة والكرامة الإنسانية للجميع"
      }
    ],

    ctaTitle: "انضم إلينا في تمكين المستقبل من خلال التعليم",
    ctaDesc: "كل تبرع، كل ساعة تطوع، وكل قصة مشتركة تساعدنا في الوصول إلى المزيد من الأطفال والكبار الذين يحتاجون إلى فرص تعليمية.",
    donateToday: "تبرع اليوم",
    volunteerBtn: "تطوع معنا"
  },
  he: {
    heroTitle: "העצמת עתידים באמצעות חינוך",
    heroDesc: "שבירת מחסומים ויצירת הזדמנויות באמצעות חינוך איכותי לכל ילד, ללא קשר לרקע שלו.",
    
    missionTitle: "שינוי חיים באמצעות למידה",
    missionDesc1: "חינוך הוא הכלי החזק ביותר לשנות את העולם. בקהילות מוחלשות, גישה לחינוך איכותי יכולה לשבור מעגלי עוני ולפתוח דלתות לאפשרויות בלתי מוגבלות. התכניות החינוכיות המקיפות שלנו מתוכננות לטפח מוחות, לבנות אופי וליצור מנהיגי עתיד.",
    missionDesc2: "מפיתוח ילדות מוקדמת ועד תכניות אוריינות למבוגרים, אנו מאמינים שכל אדם זכאי להזדמנות ללמוד, לצמוח ולהגשים את חלומותיו באמצעות חינוך.",
    missionPoints: [
      "חינוך יסודי ותיכוני איכותי",
      "תכניות מלגות",
      "אוריינות למבוגרים והכשרה מקצועית"
    ],

    programsTitle: "התכניות החינוכיות שלנו",
    programsDesc: "יוזמות חינוכיות מקיפות שנועדו לשחרר פוטנציאל וליצור שינוי מתמשך בקהילות",
    
    programs: [
      {
        title: "תמיכה בחינוך יסודי",
        desc: "מתן חינוך בסיסי לילדים בקהילות מוחלשות, הבטחה שלכל ילד יש גישה לסביבות למידה איכותיות ומשאבים.",
        points: [
          "שכר לימוד וחומרי למידה בחינם",
          "תכניות ארוחות מזינות",
          "תמיכה בשיעורי עזר אחרי בית הספר"
        ]
      },
      {
        title: "תכניות מלגות",
        desc: "מלגות על בסיס הישגים וצורך העוזרות לתלמידים מוכשרים להמשיך בהשכלה גבוהה ולהשיג את יעדיהם האקדמיים.",
        points: [
          "סיוע בשכר לימוד אוניברסיטאי",
          "תמיכה בספרים וציוד",
          "הדרכה והכוונה מקצועית"
        ]
      },
      {
        title: "תכניות אוריינות למבוגרים",
        desc: "העצמת מבוגרים במهארות בסיסיות של קריאה, כתיבה וחשבון, עזרה להם להפוך למשתתפים פעילים בקהילות ובכוח העבודה שלהם.",
        points: [
          "שיעורי קריאה וכתיבה",
          "הכשרה באוריינות דיגיטלית",
          "סדנאות כישורי חיים"
        ]
      },
      {
        title: "חינוך לבעלי צרכים מיוחדים",
        desc: "תכניות חינוך כוללניות המבטיחות שילדים עם צרכים מיוחדים יקבלו תמיכה מתאימה והזדמנויות להגיע לפוטנציאל המלא שלהם.",
        points: [
          "שיטות הוראה מתמחות",
          "שירותי תמיכה טיפוליים",
          "תכניות ייעוץ משפחתי"
        ]
      },
      {
        title: "הכשרה מקצועית",
        desc: "תכניות הכשרת מיומנויות מעשיות המכינות אנשים לתעסוקה בת-קיימא והזדמנויות יזמות.",
        points: [
          "פיתוח כישורים טכניים",
          "הכשרה ביזמות",
          "סיוע בהשמה בעבודה"
        ]
      },
      {
        title: "הכשרת מורים",
        desc: "תכניות פיתוח מקצועי למחנכים לשיפור איכות ההוראה ויצירת סביבות למידה יעילות יותר.",
        points: [
          "מתודולוגיות הוראה מודרניות",
          "כישורי ניהול כיתה",
          "פיתוח מקצועי מתמשך"
        ]
      }
    ],

    aboutLabel: "עלינו",
    aboutTitle: "אנחנו כאן לתמוך בקהילות פגיעות",
    aboutDesc: "חינוך משנה חיים על ידי שבירת מעגלי עוני ויצירת הזדמנויות לצמיחה. אנו מאמינים שכל אדם זכאי לגישה לחינוך איכותי המעצים אותו להגיע לפוטנציאל המלא שלו ולתרום לקהילות שלו.",
    aboutContent: "באמצעות תכניות חינוכיות מקיפות, אנו מספקים הזדמנויות למידה איכותיות המצייידות אנשים בידע ובכישורים הדרושים לשנות את חייהם ולתרום בצורה משמעותית לחברה.",
    aboutFeatures: [
      "חינוך איכותי נגיש לכל הילדים",
      "משאבים וחומרים לימודיים מקיפים",
      "סביבה חינוכית תומכת הממוקדת בקהילה"
    ],
    donateBtn: "תרום עכשיו",
    aboutBtn: "עלינו",

    impactTitle: "למה חינוך משנה הכל",
    impactDesc: "חינוך הוא לא רק לימוד עובדות, אלא אימון המוח לחשוב והעצמת אנשים לשנות את חייהם",
    impactPoints: [
      {
        title: "שבירת מעגלי עוני",
        desc: "חינוך מספק נתיבים יציאה מעוני ויוצר הזדמנויות לפרנסה בת-קיימא"
      },
      {
        title: "בניית קהילות",
        desc: "אנשים משכילים הופכים למנהיגי קהילה ולסוכני שינוי חברתי חיובי"
      },
      {
        title: "טיפוח חדשנות",
        desc: "חינוך מטפח חשיבה יצירתית וחדשנות המניעים התקדמות ופיתוח"
      },
      {
        title: "העצמת שוויון",
        desc: "חינוך הוא זכות בסיסית המקדמת שוויון וכבוד אנושי לכולם"
      }
    ],

    ctaTitle: "הצטרפו אלינו בהעצמת עתידים באמצעות חינוך",
    ctaDesc: "כל תרומה, כל שעת התנדבות וכל סיפור משותף עוזרים לנו להגיע לעוד ילדים ומבוגרים שזקוקים להזדמנויות חינוכיות.",
    donateToday: "תרמו היום",
    volunteerBtn: "התנדבו איתנו"
  }
};

const Education = () => {
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
  const isRTL = language === 'ar' || language === 'he';

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={`${darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"} ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

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

     
      {/* Education Mission Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={ed2}
                alt="Education Mission"
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

      {/* Education Programs Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.programsTitle}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t.programsDesc}
          </p>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.programs.map((program, index) => {
              const icons = [FaGraduationCap, FaBook, FaUsers, FaHeart, FaHandsHelping, FaChartLine];
              const IconComponent = icons[index % icons.length];
              
              return (
                <div key={index} className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <IconComponent className="text-2xl text-[#4B80B3]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                  <p className="mb-4">{program.desc}</p>
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

       {/* We are here to support vulnerable communities - Image Layout Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-blue-50 text-[#4B80B3] rounded-full text-sm font-medium mb-4">
                  {t.aboutLabel}
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
                    src={ed1}
                    alt="Smiling child"
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
                  alt="Happy children"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Content with Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t.aboutContent}
                </p>

                <div className="space-y-4">
                  {t.aboutFeatures.map((feature, index) => {
                    const icons = [FaGraduationCap, FaBook, FaHeart];
                    const IconComponent = icons[index % icons.length];
                    
                    return (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                          <IconComponent className="text-[#4B80B3] text-sm" />
                        </div>
                        <span className="text-black font-medium">{feature}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-4 mt-8">
                  <button className="px-6 py-3 bg-[#4B80B3] hover:bg-[#3a6b9e] text-white font-medium rounded-full transition-colors">
                    {t.donateBtn}
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

      {/* Why Education Matters Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.impactTitle}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t.impactDesc}
          </p>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.impactPoints.map((point, index) => {
              const svgIcons = [
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              ];
              
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {svgIcons[index % svgIcons.length]}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              );
            })}
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
              onClick={() => navigate('/donate')}
            >
              {t.donateToday}
            </button>
            <button 
              className="px-8 py-3 border border-white text-white hover:bg-[#3a6b9e] font-medium rounded-lg transition-colors"
              onClick={() => navigate('/volunteer')}
            >
              {t.volunteerBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
