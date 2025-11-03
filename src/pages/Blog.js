import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import video from "../images/charity-home.mp4";
import video1 from "../images/law-hero.mp4";
import video2 from "../images/law-hero.mp4";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import digital from "../images/digital.jpg"
import water from "../images/water.jpg"
import videoo from "../images/vdeo741.mp4"
import videoo1 from "../images/vdeo742.mp4"
import videoo2 from "../images/vdeo743.mp4"

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();
  const [activeBlog, setActiveBlog] = useState(0);

  // Language detection
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem('language') || 'en';
    return stored;
  });

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

  // Translation object for all static content
  const translations = {
    en: {
      heroTitle: "Stories of Hope & Impact",
      heroDesc: "Discover inspiring narratives that showcase the real difference your support makes in communities around the world.",

      featuredStoriesTag: "FEATURED STORIES",
      featuredStoriesTitle: "Stories of",
      featuredStoriesHighlight: "Hope & Impact",
      featuredStoriesDesc: "Dive into inspiring narratives that showcase the real difference your support makes in communities around the world.",

      readFullStoryBtn: "Read Full Story",
      shareInspirationBtn: "Share Inspiration",

      // Featured Posts
      post1Title: "How Education Transformed an Entire Village",
      post1Excerpt: "Discover the incredible journey of a remote community where access to education created a ripple effect of positive change.",
      post1Author: "Sarah Johnson",
      post1Date: "March 15, 2024",
      post1ReadTime: "6 min read",
      post1Category: "Success Stories",
      post1Stats: "15K+ Views",

      post2Title: "The Ripple Effect of Clean Water Projects",
      post2Excerpt: "See how one well didn't just provide water, but sparked economic growth and improved health for an entire region.",
      post2Author: "Michael Chen",
      post2Date: "March 12, 2024",
      post2ReadTime: "8 min read",
      post2Category: "Impact Report",
      post2Stats: "12K+ Views",

      post3Title: "Volunteers Who Changed Lives: Real Stories",
      post3Excerpt: "Meet the incredible individuals who dedicated their time and witnessed transformation firsthand.",
      post3Author: "Emily Rodriguez",
      post3Date: "March 8, 2024",
      post3ReadTime: "5 min read",
      post3Category: "Volunteer Spotlight",
      post3Stats: "18K+ Views",

      // Volunteers Section
      volunteer1Name: "Sarah Johnson",
      volunteer1Role: "Education Volunteer",
      volunteer1Duration: "3 years",
      volunteer1Contribution: "250+ hours",
      volunteer1Quote: "Seeing children light up when they learn to read is priceless. This work fills my soul.",
      volunteer1Achievement1: "Taught 50+ children",
      volunteer1Achievement2: "Organized library",
      volunteer1Achievement3: "Trained 5 new volunteers",

      volunteer2Name: "Miguel Rodriguez",
      volunteer2Role: "Disaster Response",
      volunteer2Duration: "2 years",
      volunteer2Contribution: "180+ hours",
      volunteer2Quote: "In times of crisis, being there for others is the most human thing we can do.",
      volunteer2Achievement1: "Emergency response team",
      volunteer2Achievement2: "First aid certified",
      volunteer2Achievement3: "Community coordinator",

      durationLabel: "Duration",
      contributionLabel: "Contribution",
      keyAchievementsLabel: "Key Achievements:",
      becomeVolunteerBtn: "Become a Volunteer",

      // Categories
      exploreTopicsTitle: "Explore Topics",

      // Impact Section
      impactTitle: "See How You Help",
      impactDesc: "Your donation creates real, measurable change. Here's exactly what your contribution provides.",

      impact1Title: "School Supplies",
      impact1Desc: "Provide books and materials for one child for a full semester",
      impact1Impact: "Helps 1 child learn",

      impact2Title: "Clean Water",
      impact2Desc: "Give a family access to clean water for an entire month",
      impact2Impact: "Serves 1 family",

      impact3Title: "Medical Care",
      impact3Desc: "Cover essential medical treatments and vaccinations",
      impact3Impact: "Protects 5 people",

      impact4Title: "Sustainable Farming",
      impact4Desc: "Provide seeds, tools, and training for sustainable agriculture",
      impact4Impact: "Supports 2 families",

      // Behind the Scenes
      behindScenesTitle: "Behind the Scenes",
      behindScenesDesc: "Get an exclusive look at how our team works to make a difference every day.",

      scenes1Title: "Supply Packing Day",
      scenes1Desc: "Watch our team prepare and pack essential supplies for distribution",
      scenes1Team: "Logistics Team",
      scenes1Stats: "500+ kits prepared",

      scenes2Title: "Community Impact Journey",
      scenes2Desc: "Follow our project manager through a typical day in the field",
      scenes2Team: "Field Operations",
      scenes2Stats: "3 villages visited",

      scenes3Title: "Team Training",
      scenes3Desc: "See how we train new volunteers for emergency response",
      scenes3Team: "Training Department",
      scenes3Stats: "25 volunteers trained",

      watchNowBtn: "Watch Now",

      ctaTitle: "Stay Informed with Legal Insights",
      ctaDesc: "Subscribe to our blog for the latest updates, expert tips, and actionable advice on law, business, and personal rights.",
      ctaBtn: "Subscribe Now"
    },
    ar: {
      heroTitle: "قصص الأمل والتأثير",
      heroDesc: "اكتشف القصص الملهمة التي تظهر الفرق الحقيقي الذي يحدثه دعمكم في المجتمعات حول العالم.",

      featuredStoriesTag: "القصص المميزة",
      featuredStoriesTitle: "قصص",
      featuredStoriesHighlight: "الأمل والتأثير",
      featuredStoriesDesc: "انغمس في القصص الملهمة التي تظهر الفرق الحقيقي الذي يحدثه دعمكم في المجتمعات حول العالم.",

      readFullStoryBtn: "اقرأ القصة كاملة",
      shareInspirationBtn: "شارك الإلهام",

      // Featured Posts
      post1Title: "كيف غيّر التعليم قرية بأكملها",
      post1Excerpt: "اكتشف الرحلة المذهلة لمجتمع نائي حيث خلق الوصول إلى التعليم تأثيراً إيجابياً متتالياً للتغيير.",
      post1Author: "سارة جونسون",
      post1Date: "15 مارس 2024",
      post1ReadTime: "6 دقائق قراءة",
      post1Category: "قصص النجاح",
      post1Stats: "15 ألف+ مشاهدة",

      post2Title: "التأثير المتتالي لمشاريع المياه النظيفة",
      post2Excerpt: "شاهد كيف لم تؤمن بئر واحدة الماء فحسب، بل أثارت النمو الاقتصادي وحسنت الصحة لمنطقة بأكملها.",
      post2Author: "مايكل تشين",
      post2Date: "12 مارس 2024",
      post2ReadTime: "8 دقائق قراءة",
      post2Category: "تقرير التأثير",
      post2Stats: "12 ألف+ مشاهدة",

      post3Title: "متطوعون غيروا الحياة: قصص حقيقية",
      post3Excerpt: "تعرف على الأفراد المذهلين الذين كرسوا وقتهم وشهدوا التحول بأنفسهم.",
      post3Author: "إميلي رودريغيز",
      post3Date: "8 مارس 2024",
      post3ReadTime: "5 دقائق قراءة",
      post3Category: "تسليط الضوء على المتطوعين",
      post3Stats: "18 ألف+ مشاهدة",

      // Volunteers Section
      volunteer1Name: "سارة جونسون",
      volunteer1Role: "متطوعة تعليم",
      volunteer1Duration: "3 سنوات",
      volunteer1Contribution: "250+ ساعة",
      volunteer1Quote: "رؤية الأطفال يضيئون عندما يتعلمون القراءة لا تقدر بثمن. هذا العمل يملأ روحي.",
      volunteer1Achievement1: "علّمت 50+ طفل",
      volunteer1Achievement2: "نظمت مكتبة",
      volunteer1Achievement3: "دربت 5 متطوعين جدد",

      volunteer2Name: "ميغيل رودريغيز",
      volunteer2Role: "الاستجابة للكوارث",
      volunteer2Duration: "سنتان",
      volunteer2Contribution: "180+ ساعة",
      volunteer2Quote: "في أوقات الأزمات، أن نكون هناك للآخرين هو أكثر الأشياء إنسانية يمكننا فعلها.",
      volunteer2Achievement1: "فريق الاستجابة الطارئة",
      volunteer2Achievement2: "مُعتمد في الإسعافات الأولية",
      volunteer2Achievement3: "منسق المجتمع",

      durationLabel: "المدة",
      contributionLabel: "المساهمة",
      keyAchievementsLabel: "الإنجازات الرئيسية:",
      becomeVolunteerBtn: "كن متطوعاً",

      // Categories
      exploreTopicsTitle: "استكشف المواضيع",

      // Impact Section
      impactTitle: "شاهد كيف تساعد",
      impactDesc: "تبرعك يخلق تغييراً حقيقياً وقابلاً للقياس. إليك بالضبط ما توفره مساهمتك.",

      impact1Title: "لوازم المدرسة",
      impact1Desc: "توفير الكتب والمواد لطفل واحد لفصل دراسي كامل",
      impact1Impact: "يساعد طفل واحد على التعلم",

      impact2Title: "المياه النظيفة",
      impact2Desc: "إعطاء عائلة إمكانية الوصول إلى المياه النظيفة لشهر كامل",
      impact2Impact: "يخدم عائلة واحدة",

      impact3Title: "الرعاية الطبية",
      impact3Desc: "تغطية العلاجات الطبية الأساسية والتطعيمات",
      impact3Impact: "يحمي 5 أشخاص",

      impact4Title: "الزراعة المستدامة",
      impact4Desc: "توفير البذور والأدوات والتدريب للزراعة المستدامة",
      impact4Impact: "يدعم عائلتين",

      // Behind the Scenes
      behindScenesTitle: "خلف الكواليس",
      behindScenesDesc: "احصل على نظرة حصرية على كيفية عمل فريقنا لإحداث فرق كل يوم.",

      scenes1Title: "يوم تعبئة الإمدادات",
      scenes1Desc: "شاهد فريقنا يجهز ويعبئ الإمدادات الأساسية للتوزيع",
      scenes1Team: "فريق اللوجستيات",
      scenes1Stats: "500+ طقم مُجهز",

      scenes2Title: "رحلة تأثير المجتمع",
      scenes2Desc: "تابع مدير مشروعنا خلال يوم عادي في الميدان",
      scenes2Team: "العمليات الميدانية",
      scenes2Stats: "3 قرى تم زيارتها",

      scenes3Title: "تدريب الفريق",
      scenes3Desc: "شاهد كيف ندرب المتطوعين الجدد للاستجابة الطارئة",
      scenes3Team: "قسم التدريب",
      scenes3Stats: "25 متطوع مُدرب",

      watchNowBtn: "شاهد الآن",

      ctaTitle: "ابق على اطلاع بالمعرفة القانونية",
      ctaDesc: "اشترك في مدونتنا للحصول على آخر التحديثات والنصائح والخبرات العملية في القانون والأعمال والحقوق الشخصية.",
      ctaBtn: "اشترك الآن"
    },
    he: {
      heroTitle: "סיפורי תקווה והשפעה",
      heroDesc: "גלו נרטיבים מעוררי השראה שמציגים את ההבדל האמיתי שהתמיכה שלכם יוצרת בקהילות ברחבי העולם.",

      featuredStoriesTag: "סיפורים מובחרים",
      featuredStoriesTitle: "סיפורי",
      featuredStoriesHighlight: "תקווה והשפעה",
      featuredStoriesDesc: "צללו לתוך נרטיבים מעוררי השראה שמציגים את ההבדל האמיתי שהתמיכה שלכם יוצרת בקהילות ברחבי העולם.",

      readFullStoryBtn: "קרא את הסיפור המלא",
      shareInspirationBtn: "שתף השראה",

      // Featured Posts
      post1Title: "איך חינוך שינה כפר שלם",
      post1Excerpt: "גלו את המסע המדהים של קהילה מרוחקת שבה הגישה לחינוך יצרה אפקט של שינוי חיובי.",
      post1Author: "שרה ג'ונסון",
      post1Date: "15 במרץ 2024",
      post1ReadTime: "6 דקות קריאה",
      post1Category: "סיפורי הצלחה",
      post1Stats: "15 אלף+ צפיות",

      post2Title: "האפקט המתפשט של פרויקטי מים נקיים",
      post2Excerpt: "ראו איך באר אחת לא רק סיפקה מים, אלא עוררה צמיחה כלכלית ושיפרה בריאות לאזור שלם.",
      post2Author: "מייקל צ'ן",
      post2Date: "12 במרץ 2024",
      post2ReadTime: "8 דקות קריאה",
      post2Category: "דוח השפעה",
      post2Stats: "12 אלף+ צפיות",

      post3Title: "מתנדבים ששינו חיים: סיפורים אמיתיים",
      post3Excerpt: "פגשו את האנשים המדהימים שהקדישו מזמנהם וחזו בשינוי ממקור ראשון.",
      post3Author: "אמילי רודריגס",
      post3Date: "8 במרץ 2024",
      post3ReadTime: "5 דקות קריאה",
      post3Category: "זרקור על מתנדבים",
      post3Stats: "18 אלף+ צפיות",

      // Volunteers Section
      volunteer1Name: "שרה ג'ונסון",
      volunteer1Role: "מתנדבת חינוך",
      volunteer1Duration: "3 שנים",
      volunteer1Contribution: "250+ שעות",
      volunteer1Quote: "לראות ילדים נדלקים כשהם לומדים לקרוא זה לא יסולא בפז. העבודה הזו ממלאת את נשמתי.",
      volunteer1Achievement1: "לימדה 50+ ילדים",
      volunteer1Achievement2: "ארגנה ספרייה",
      volunteer1Achievement3: "אימנה 5 מתנדבים חדשים",

      volunteer2Name: "מיגל רודריגס",
      volunteer2Role: "תגובה לאסונות",
      volunteer2Duration: "שנתיים",
      volunteer2Contribution: "180+ שעות",
      volunteer2Quote: "בזמני משבר, להיות שם עבור אחרים זה הדבר הכי אנושי שאנחנו יכולים לעשות.",
      volunteer2Achievement1: "צוות תגובת חירום",
      volunteer2Achievement2: "מוסמך עזרה ראשונה",
      volunteer2Achievement3: "רכז קהילה",

      durationLabel: "משך זמן",
      contributionLabel: "תרומה",
      keyAchievementsLabel: "הישגים מרכזיים:",
      becomeVolunteerBtn: "הפוך למתנדב",

      // Categories
      exploreTopicsTitle: "חקור נושאים",

      // Impact Section
      impactTitle: "ראה איך אתה עוזר",
      impactDesc: "התרומה שלך יוצרת שינוי אמיתי וניתן למדידה. הנה בדיוק מה שהתרומה שלך מספקת.",

      impact1Title: "ציוד לבית ספר",
      impact1Desc: "לספק ספרים וחומרים לילד אחד לסמסטר שלם",
      impact1Impact: "עוזר לילד אחד ללמוד",

      impact2Title: "מים נקיים",
      impact2Desc: "לתת למשפחה גישה למים נקיים לחודש שלם",
      impact2Impact: "משרת משפחה אחת",

      impact3Title: "טיפול רפואי",
      impact3Desc: "לכסות טיפולים רפואיים חיוניים וחיסונים",
      impact3Impact: "מגן על 5 אנשים",

      impact4Title: "חקלאות בת-קיימא",
      impact4Desc: "לספק זרעים, כלים והכשרה לחקלאות בת-קיימא",
      impact4Impact: "תומך ב-2 משפחות",

      // Behind the Scenes
      behindScenesTitle: "מאחורי הקלעים",
      behindScenesDesc: "קבל מבט בלעדי על איך הצוות שלנו עובד כדי לעשות הבדל כל יום.",

      scenes1Title: "יום אריזת אספקה",
      scenes1Desc: "צפה בצוות שלנו מכין ואורז אספקה חיונית להפצה",
      scenes1Team: "צוות לוגיסטיקה",
      scenes1Stats: "500+ ערכות הוכנו",

      scenes2Title: "מסע השפעה קהילתית",
      scenes2Desc: "עקב אחרי מנהל הפרויקט שלנו דרך יום טיפוסי בשטח",
      scenes2Team: "פעולות שטח",
      scenes2Stats: "3 כפרים ביקרו",

      scenes3Title: "הכשרת צוות",
      scenes3Desc: "ראה איך אנחנו מכשירים מתנדבים חדשים לתגובת חירום",
      scenes3Team: "מחלקת הכשרה",
      scenes3Stats: "25 מתנדבים הוכשרו",

      watchNowBtn: "צפה עכשיו",

      ctaTitle: "הישאר מעודכן עם תובנות משפטיות",
      ctaDesc: "הירשם לבלוג שלנו לקבלת עדכונים, טיפים מקצועיים ועצות מעשיות על משפט, עסקים וזכויות אישיות.",
      ctaBtn: "הירשם עכשיו"
    }
  };

  const t = translations[language] || translations.en;

  const categories = ["all", "Personal Injury", "Business Law", "Intellectual Property", "Family Law", "Real Estate", "Criminal Law"];

  const featuredPosts = [
    {
      id: 1,
      title: t.post1Title,
      excerpt: t.post1Excerpt,
      author: t.post1Author,
      date: t.post1Date,
      readTime: t.post1ReadTime,
      category: t.post1Category,
      image: digital,
      color: "#4B80B3",
      stats: t.post1Stats
    },
    {
      id: 2,
      title: t.post2Title,
      excerpt: t.post2Excerpt,
      author: t.post2Author,
      date: t.post2Date,
      readTime: t.post2ReadTime,
      category: t.post2Category,
      image: water,
      color: "#4B80B3",
      stats: t.post2Stats
    },
    {
      id: 3,
      title: t.post3Title,
      excerpt: t.post3Excerpt,
      author: t.post3Author,
      date: t.post3Date,
      readTime: t.post3ReadTime,
      category: t.post3Category,
      image: "🌟",
      color: "#4B80B3",
      stats: t.post3Stats
    }
  ];

  const volunteers = [
    {
      name: t.volunteer1Name,
      role: t.volunteer1Role,
      duration: t.volunteer1Duration,
      contribution: t.volunteer1Contribution,
      quote: t.volunteer1Quote,
      image: "/images/sarah-volunteer.jpg",
      achievements: [t.volunteer1Achievement1, t.volunteer1Achievement2, t.volunteer1Achievement3]
    },
    {
      name: t.volunteer2Name,
      role: t.volunteer2Role,
      duration: t.volunteer2Duration,
      contribution: t.volunteer2Contribution,
      quote: t.volunteer2Quote,
      image: "/images/miguel-volunteer.jpg",
      achievements: [t.volunteer2Achievement1, t.volunteer2Achievement2, t.volunteer2Achievement3]
    }
  ];

  const impactLevels = [
    {
      amount: "$25",
      title: t.impact1Title,
      description: t.impact1Desc,
      icon: "📚",
      impact: t.impact1Impact,
      color: "#4B80B3"
    },
    {
      amount: "$50",
      title: t.impact2Title,
      description: t.impact2Desc,
      icon: "💧",
      impact: t.impact2Impact,
      color: "#4B80B3"
    },
    {
      amount: "$100",
      title: t.impact3Title,
      description: t.impact3Desc,
      icon: "🏥",
      impact: t.impact3Impact,
      color: "#4B80B3"
    },
    {
      amount: "$250",
      title: t.impact4Title,
      description: t.impact4Desc,
      icon: "🌱",
      impact: t.impact4Impact,
      color: "#4B80B3"
    }
  ];

  const behindScenes = [
    {
      title: t.scenes1Title,
      description: t.scenes1Desc,
      type: "video",
      duration: "2:45",
      team: t.scenes1Team,
      stats: t.scenes1Stats,
      videoUrl: videoo
    },
    {
      title: t.scenes2Title,
      description: t.scenes2Desc,
      type: "video",
      duration: "3:30",
      team: t.scenes2Team,
      stats: t.scenes2Stats,
      videoUrl: videoo1
    },
    {
      title: t.scenes3Title,
      description: t.scenes3Desc,
      type: "video",
      duration: "4:20",
      team: t.scenes3Team,
      stats: t.scenes3Stats,
      videoUrl: videoo2
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-0 w-full" dir={language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}>
      <section className="relative w-full h-screen overflow-hidden bg-white dark:bg-black mb-10">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 w-full h-full bg-black/50 transition-colors duration-500"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl max-w-3xl text-white drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t.heroDesc}
          </motion.p>
        </div>
      </section>
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#4B80B3', opacity: 0.1 }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: '#4B80B3', opacity: 0.1 }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-semibold text-lg mb-4 block" style={{ color: '#4B80B3' }}>{t.featuredStoriesTag}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {t.featuredStoriesTitle} <span style={{ color: '#4B80B3' }}>{t.featuredStoriesHighlight}</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t.featuredStoriesDesc}
            </p>
          </motion.div>

          {/* Featured Blog Carousel */}
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBlog}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                    {/* Image/Visual Side */}
                    <div className="relative overflow-hidden">
                      {featuredPosts[activeBlog].image === "🌟" ? (
                        // For emoji/text images
                        <div className="flex items-center justify-center p-12 w-full h-full" style={{ backgroundColor: '#4B80B3' }}>
                          <div className="text-center text-white">
                            <div className="text-8xl mb-6 transform hover:scale-110 transition-transform duration-500">
                              {featuredPosts[activeBlog].image}
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                              <span className="text-white font-semibold">
                                {featuredPosts[activeBlog].stats}
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // For imported images
                        <>
                          <img
                            src={featuredPosts[activeBlog].image}
                            alt={featuredPosts[activeBlog].title}
                            className="w-full h-full object-cover object-center"
                            style={{
                              imageRendering: '-webkit-optimize-contrast',
                              imageRendering: 'crisp-edges',
                              filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
                            }}
                          />
                          {/* Dark Overlay for Better Text Readability */}
                          <div className="absolute inset-0 bg-black/30"></div>
                          {/* Brand Color Overlay */}
                          <div className="absolute inset-0 opacity-40" style={{ backgroundColor: '#4B80B3' }}></div>

                          {/* Content Overlay */}
                          <div className="absolute bottom-8 left-8">
                            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                              <span className="text-white font-bold text-lg drop-shadow-lg">
                                {featuredPosts[activeBlog].stats}
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Content Side */}
                    <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <span className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#4B80B3' }}>
                          {featuredPosts[activeBlog].category}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {featuredPosts[activeBlog].title}
                      </h3>

                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {featuredPosts[activeBlog].excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#4B80B3' }}>
                            {featuredPosts[activeBlog].author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{featuredPosts[activeBlog].author}</p>
                            <p className="text-gray-500 text-sm">{featuredPosts[activeBlog].date}</p>
                          </div>
                        </div>
                        <span className="text-gray-500">{featuredPosts[activeBlog].readTime}</span>
                      </div>

                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-4 text-white rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300"
                          style={{ backgroundColor: '#4B80B3' }}
                          onClick={() => {
                            // Navigate to corresponding blog page based on active slide
                            if (activeBlog === 0) {
                              navigate('/blog1');
                            } else if (activeBlog === 1) {
                              navigate('/blog2');
                            } else if (activeBlog === 2) {
                              navigate('/blog3');
                            }
                          }}
                        >
                          {t.readFullStoryBtn}
                        </motion.button>
                        
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                {featuredPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveBlog(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeBlog
                        ? 'scale-125'
                        : 'bg-gray-400 hover:bg-gray-300'
                      }`}
                    style={index === activeBlog ? { backgroundColor: '#4B80B3' } : {}}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setActiveBlog((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                ←
              </button>
              <button
                onClick={() => setActiveBlog((prev) => (prev + 1) % featuredPosts.length)}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Meet Our Heroes</h2>
            <p className="text-xl text-black/70">
              The incredible volunteers who make our mission possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteers.map((volunteer, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-200">
                {/* Volunteer Header */}
                <div className="p-6 text-white" style={{ backgroundColor: '#4B80B3' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{volunteer.name}</h3>
                      <p className="text-white/80">{volunteer.role}</p>
                    </div>
                  </div>
                </div>

                {/* Volunteer Details */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 rounded-lg border-2" style={{ borderColor: '#4B80B3', backgroundColor: '#f8fafc' }}>
                      <p className="text-sm font-semibold" style={{ color: '#4B80B3' }}>{t.durationLabel}</p>
                      <p className="font-bold text-black">{volunteer.duration}</p>
                    </div>
                    <div className="text-center p-3 rounded-lg border-2" style={{ borderColor: '#4B80B3', backgroundColor: '#f8fafc' }}>
                      <p className="text-sm font-semibold" style={{ color: '#4B80B3' }}>{t.contributionLabel}</p>
                      <p className="font-bold text-black">{volunteer.contribution}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 pl-4 py-2 mb-4" style={{ borderColor: '#4B80B3' }}>
                    <p className="text-black/70 italic">"{volunteer.quote}"</p>
                  </blockquote>

                  {/* Achievements */}
                  <div className="mb-4">
                    <p className="font-semibold text-black mb-2">{t.keyAchievementsLabel}</p>
                    <ul className="space-y-1">
                      {volunteer.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-black/60">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4B80B3' }}></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full text-white py-2 rounded-lg hover:opacity-90 transition duration-300" style={{ backgroundColor: '#4B80B3' }}>
                    {t.becomeVolunteerBtn}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Blog Categories */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-black text-center mb-8">{t.exploreTopicsTitle}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.filter(cat => cat !== 'all').map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                      ? 'text-white shadow-lg'
                      : 'text-black border-2 hover:text-white'
                    }`}
                  style={{
                    backgroundColor: activeCategory === category ? '#4B80B3' : 'transparent',
                    borderColor: '#4B80B3'
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== category) {
                      e.target.style.backgroundColor = '#4B80B3';
                      e.target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== category) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'black';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">{t.impactTitle}</h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              {t.impactDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-200">
                {/* Header with Brand Color */}
                <div className="p-6 text-white text-center" style={{ backgroundColor: level.color }}>
                  <div className="text-4xl mb-2">{level.icon}</div>
                  <div className="text-3xl font-bold">{level.amount}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">{level.title}</h3>
                  <p className="text-black/60 mb-4">{level.description}</p>

                  <div className="flex items-center justify-between p-3 rounded-lg border-2" style={{ borderColor: '#4B80B3', backgroundColor: '#f8fafc' }}>
                    <span className="text-sm font-semibold" style={{ color: '#4B80B3' }}>Direct Impact:</span>
                    <span className="font-bold" style={{ color: '#4B80B3' }}>{level.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-black text-center mb-8">Recent Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🎓</div>
                  <h4 className="font-bold text-black">Maria's Education</h4>
                </div>
                <p className="text-black/60 text-sm text-center">
                  With your support, Maria completed her nursing degree and now serves her community as a qualified healthcare professional.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🏠</div>
                  <h4 className="font-bold text-black">Safe Housing</h4>
                </div>
                <p className="text-black/60 text-sm text-center">
                  15 families now have safe, permanent housing thanks to our housing initiative and community partnerships.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">💼</div>
                  <h4 className="font-bold text-black">Job Training</h4>
                </div>
                <p className="text-black/60 text-sm text-center">
                  Our vocational program has helped 200+ individuals gain employment in their chosen fields.
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t.behindScenesTitle}</h2>
            <p className="text-xl text-white/80">
              {t.behindScenesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {behindScenes.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group">
                {/* Video Display */}
                <div className="relative h-48 overflow-hidden">
                  <video
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    controls
                    autoPlay
                    loop
                    preload="metadata"
                    muted
                    playsInline
                    src={item.videoUrl}
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <span>🎥</span>
                    {item.duration}
                  </div>


                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-black transition-colors duration-300" style={{ color: index === 0 ? '#4B80B3' : '' }}>{item.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full font-semibold text-white" style={{ backgroundColor: '#4B80B3' }}>
                      HD
                    </span>
                  </div>

                  <p className="text-black/60 mb-4 leading-relaxed">{item.description}</p>

                  <div className="flex justify-between items-center text-sm mb-4 p-3 rounded-lg border-2" style={{ borderColor: '#4B80B3', backgroundColor: '#f8fafc' }}>
                    <span className="flex items-center gap-1 font-semibold" style={{ color: '#4B80B3' }}>
                      👥 {item.team}
                    </span>
                    <span className="flex items-center gap-1 font-semibold" style={{ color: '#4B80B3' }}>
                      📊 {item.stats}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">What People Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#4B80B3' }}>
                    JD
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-black">John Doe</h4>
                    <p className="text-black/60 text-sm">Community Leader</p>
                  </div>
                </div>
                <p className="text-black/70 italic">
                  "The impact this organization has had on our community is immeasurable. Lives have been transformed, hope has been restored."
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#4B80B3' }}>
                    AS
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-black">Anna Smith</h4>
                    <p className="text-black/60 text-sm">Beneficiary</p>
                  </div>
                </div>
                <p className="text-black/70 italic">
                  "Thanks to this program, my children now have access to quality education and a brighter future ahead of them."
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* CTA Section - End of Page */}
      <section className="w-full py-5 mb-0 flex flex-col items-center justify-center" style={{ backgroundColor: '#4B80B3' }}>
        <div className="max-w-2xl w-full mx-auto text-center">
          <h2 className="text-4xl md:text-4xl font-extrabold text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-lg text-white/90 mb-8">
            {t.ctaDesc}
          </p>
          <button className="px-8 py-4 rounded-full font-bold bg-white shadow-lg hover:bg-black hover:text-white transition text-lg" style={{ color: '#4B80B3' }} onClick={() => navigate('/contact')}>
            {t.ctaBtn}
          </button>
        </div>
      </section>



    </div>
  );
};
export default Blog;
