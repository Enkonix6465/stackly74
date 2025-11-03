import React, { useState, useEffect } from "react";

// Translation object for volunteer stories content
const translations = {
  en: {
    heroTitle: "Volunteers Who Changed Lives: Real Stories",
    heroDesc: "Behind every life transformed, there's a volunteer who cared enough to act. These are the real stories of ordinary people who made extraordinary differences in their communities.",
    featuredTitle: "Featured Volunteer Stories",
    featuredDesc: "Meet the heroes who dedicated their time, skills, and hearts to creating positive change around the world.",
    featuredVolunteers: [
      {
        name: "Sarah Mitchell",
        role: "Education Volunteer",
        location: "Ghana, West Africa",
        duration: "2 Years",
        story: "When Sarah arrived in rural Ghana, only 30% of children could read. Through innovative teaching methods and community engagement, she helped establish a literacy program that now serves 500+ children with an 85% reading proficiency rate.",
        impact: "500+ children taught to read",
        quote: "Seeing a child read their first sentence makes every challenge worth it."
      },
      {
        name: "Dr. James Chen",
        role: "Medical Volunteer",
        location: "Nepal",
        duration: "6 Months",
        story: "Dr. Chen left his practice in California to provide medical care in remote Nepalese villages. He performed over 200 surgeries, trained 15 local healthcare workers, and established a mobile clinic serving 3,000 people.",
        impact: "3,000 patients treated",
        quote: "Medicine becomes truly meaningful when it reaches those who need it most."
      },
      {
        name: "Maria Rodriguez",
        role: "Clean Water Engineer",
        location: "Honduras",
        duration: "18 Months",
        story: "Maria designed and built water purification systems for 8 villages affected by contaminated water sources. Her innovative low-cost filtration systems now provide clean water to 2,500 people daily.",
        impact: "2,500 people with clean water access",
        quote: "Water is life. Providing clean water is providing hope for the future."
      }
    ],
    inspiringTitle: "More Inspiring Stories",
    inspiringDesc: "Every volunteer brings unique skills and passion to create lasting change in communities worldwide.",
    inspiringVolunteers: [
      {
        name: "Ahmed Hassan",
        role: "Agricultural Specialist",
        achievement: "Increased crop yields by 300% in 12 villages through sustainable farming techniques",
        impact: "1,200 farmers trained"
      },
      {
        name: "Lisa Thompson",
        role: "Women's Empowerment Coordinator",
        achievement: "Established microfinance program helping 400 women start their own businesses",
        impact: "400 women entrepreneurs"
      },
      {
        name: "Robert Kim",
        role: "Technology Instructor",
        achievement: "Created computer literacy program reaching 800 students in underserved communities",
        impact: "800 students digitally empowered"
      }
    ]
  },
  ar: {
    heroTitle: "متطوعون غيروا الحياة: قصص حقيقية",
    heroDesc: "خلف كل حياة تغيرت، هناك متطوع اهتم بما يكفي للعمل. هذه هي القصص الحقيقية لأشخاص عاديين صنعوا فروقات استثنائية في مجتمعاتهم.",
    featuredTitle: "قصص المتطوعين المميزة",
    featuredDesc: "قابل الأبطال الذين كرسوا وقتهم ومهاراتهم وقلوبهم لخلق تغيير إيجابي حول العالم.",
    featuredVolunteers: [
      {
        name: "سارة ميتشيل",
        role: "متطوعة تعليم",
        location: "غانا، غرب أفريقيا",
        duration: "سنتان",
        story: "عندما وصلت سارة إلى ريف غانا، كان 30% فقط من الأطفال يستطيعون القراءة. من خلال طرق التدريس المبتكرة والمشاركة المجتمعية، ساعدت في إنشاء برنامج محو أمية يخدم الآن أكثر من 500 طفل بمعدل إتقان قراءة 85%.",
        impact: "أكثر من 500 طفل تعلموا القراءة",
        quote: "رؤية طفل يقرأ جملته الأولى تجعل كل تحدٍ يستحق العناء."
      },
      {
        name: "د. جيمس تشين",
        role: "متطوع طبي",
        location: "نيبال",
        duration: "6 أشهر",
        story: "ترك د. تشين عيادته في كاليفورنيا لتقديم الرعاية الطبية في قرى نيبال النائية. أجرى أكثر من 200 عملية جراحية، ودرب 15 عامل رعاية صحية محلي، وأسس عيادة متنقلة تخدم 3000 شخص.",
        impact: "3000 مريض تم علاجهم",
        quote: "الطب يصبح ذا معنى حقيقي عندما يصل إلى من يحتاجونه أكثر."
      },
      {
        name: "ماريا رودريغيز",
        role: "مهندسة مياه نظيفة",
        location: "هندوراس",
        duration: "18 شهراً",
        story: "صممت ماريا وبنت أنظمة تنقية المياه لـ 8 قرى متأثرة بمصادر المياه الملوثة. أنظمة الترشيح المبتكرة منخفضة التكلفة توفر الآن مياه نظيفة لـ 2500 شخص يومياً.",
        impact: "2500 شخص لديهم وصول للمياه النظيفة",
        quote: "الماء هو الحياة. توفير المياه النظيفة هو توفير الأمل للمستقبل."
      }
    ],
    inspiringTitle: "المزيد من القصص الملهمة",
    inspiringDesc: "كل متطوع يجلب مهارات وشغف فريد لخلق تغيير دائم في المجتمعات حول العالم.",
    inspiringVolunteers: [
      {
        name: "أحمد حسن",
        role: "متخصص زراعي",
        achievement: "زاد المحاصيل بنسبة 300% في 12 قرية من خلال تقنيات الزراعة المستدامة",
        impact: "1200 مزارع تم تدريبهم"
      },
      {
        name: "ليزا طومسون",
        role: "منسقة تمكين المرأة",
        achievement: "أسست برنامج تمويل أصغر يساعد 400 امرأة لبدء أعمالهن الخاصة",
        impact: "400 سيدة أعمال"
      },
      {
        name: "روبرت كيم",
        role: "مدرب تكنولوجيا",
        achievement: "أنشأ برنامج محو أمية حاسوبية وصل إلى 800 طالب في المجتمعات المحرومة",
        impact: "800 طالب ممكن رقمياً"
      }
    ]
  },
  he: {
    heroTitle: "מתנדבים ששינו חיים: סיפורים אמיתיים",
    heroDesc: "מאחורי כל חיים שהשתנו, יש מתנדב שדאג מספיק כדי לפעול. אלה הם הסיפורים האמיתיים של אנשים רגילים שעשו הבדלים יוצאי דופן בקהילות שלהם.",
    featuredTitle: "סיפורי מתנדבים מובילים",
    featuredDesc: "פגשו את הגיבורים שהקדישו את זמנם, כישוריהם ולבם ליצירת שינוי חיובי ברחבי העולם.",
    featuredVolunteers: [
      {
        name: "שרה מיטשל",
        role: "מתנדבת חינוך",
        location: "גאנה, מערב אפריקה",
        duration: "שנתיים",
        story: "כשהגיעה שרה לכפר גאנה, רק 30% מהילדים ידעו לקרוא. דרך שיטות הוראה חדשניות ומעורבות קהילתית, היא עזרה להקים תוכנית אוריינות המשרתת כיום 500+ ילדים עם שיעור בקיאות קריאה של 85%.",
        impact: "500+ ילדים למדו לקרוא",
        quote: "לראות ילד קורא את המשפט הראשון שלו עושה כל אתגר שווה."
      },
      {
        name: "ד\"ר ג'יימס צ'ן",
        role: "מתנדב רפואי",
        location: "נפאל",
        duration: "6 חודשים",
        story: "ד\"ר צ'ן עזב את המרפאה שלו בקליפורניה כדי לספק טיפול רפואי בכפרים נידחים בנפאל. הוא ביצע למעלה מ-200 ניתוחים, הכשיר 15 עובדי בריאות מקומיים והקים מרפאה נידית המשרתת 3,000 אנשים.",
        impact: "3,000 מטופלים טופלו",
        quote: "רפואה הופכת למשמעותית באמת כשהיא מגיעה לאלה שהכי זקוקים לה."
      },
      {
        name: "מריה רודריגז",
        role: "מהנדסת מים נקיים",
        location: "הונדורס",
        duration: "18 חודשים",
        story: "מריה תכננה ובנתה מערכות טיהור מים ל-8 כפרים המושפעים ממקורות מים מזוהמים. מערכות הסינון החדשניות שלה בעלות נמוכה מספקות כיום מים נקיים ל-2,500 אנשים מדי יום.",
        impact: "2,500 אנשים עם גישה למים נקיים",
        quote: "מים זה חיים. אספקת מים נקיים זה אספקת תקווה לעתיד."
      }
    ],
    inspiringTitle: "עוד סיפורים מעוררי השראה",
    inspiringDesc: "כל מתנדב מביא כישורים ותשוקה ייחודיים ליצירת שינוי מתמשך בקהילות ברחבי העולם.",
    inspiringVolunteers: [
      {
        name: "אחמד חסן",
        role: "מומחה חקלאי",
        achievement: "הגדיל תשואות יבול ב-300% ב-12 כפרים דרך טכניקות חקלאות בת-קיימא",
        impact: "1,200 חקלאים הוכשרו"
      },
      {
        name: "ליזה תומפסון",
        role: "רכזת העצמת נשים",
        achievement: "הקימה תוכנית מיקרו-מימון שעוזרת ל-400 נשים להקים עסקים משלהן",
        impact: "400 נשות עסקים"
      },
      {
        name: "רוברט קים",
        role: "מדריך טכנולוגיה",
        achievement: "יצר תוכנית אוריינות מחשבים המגיעה ל-800 תלמידים בקהילות מוחלשות",
        impact: "800 תלמידים מועצמים דיגיטלית"
      }
    ]
  }
};

const Blog3 = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const handleLanguageChange = () => {
      const newLanguage = localStorage.getItem("language") || "en";
      if (newLanguage !== language) {
        setLanguage(newLanguage);
      }
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    const interval = setInterval(handleLanguageChange, 500);

    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange);
      clearInterval(interval);
    };
  }, [language]);

  const t = translations[language] || translations.en;

  return (
    <div className={`min-h-screen bg-white ${language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}`} dir={language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#4B80B3] mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Featured Volunteer Stories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6">{t.featuredTitle}</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">{t.featuredDesc}</p>
          </div>
          
          <div className="space-y-12">
            {t.featuredVolunteers.map((volunteer, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/3">
                  <div className="bg-white p-8 rounded-xl text-center border-2 border-[#4B80B3]">
                    <div className="w-24 h-24 bg-[#4B80B3] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">{volunteer.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{volunteer.name}</h3>
                    <p className="text-[#4B80B3] font-semibold mb-1">{volunteer.role}</p>
                    <p className="text-black text-sm mb-1">{volunteer.location}</p>
                    <p className="text-black text-sm">{volunteer.duration}</p>
                    <div className="mt-4 bg-black p-3 rounded-lg">
                      <p className="text-sm font-semibold text-white">{volunteer.impact}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white p-8 rounded-xl border-2 border-black">
                    <p className="text-black leading-relaxed mb-6 text-lg">{volunteer.story}</p>
                    <blockquote className="border-l-4 border-[#4B80B3] pl-4 italic text-black">
                      "{volunteer.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Inspiring Stories Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">{t.inspiringTitle}</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">{t.inspiringDesc}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.inspiringVolunteers.map((volunteer, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-black">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#4B80B3] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{volunteer.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{volunteer.name}</h3>
                  <p className="text-[#4B80B3] font-semibold">{volunteer.role}</p>
                </div>
                <p className="text-black text-sm leading-relaxed mb-4">{volunteer.achievement}</p>
                <div className="bg-black p-3 rounded-lg text-center">
                  <p className="text-sm font-bold text-white">{volunteer.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-[#4B80B3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {language === 'ar' ? 'كن البطل التالي' : language === 'he' ? 'היו הגיבור הבא' : 'Be the Next Hero'}
          </h2>
          <p className="text-xl text-white mb-8">
            {language === 'ar' ? 
              'انضم إلى آلاف المتطوعين الذين يغيرون العالم، قصة واحدة في كل مرة.' :
              language === 'he' ?
              'הצטרפו לאלפי המתנדבים שמשנים את העולם, סיפור אחד בכל פעם.' :
              'Join thousands of volunteers changing the world, one story at a time.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4B80B3] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-colors duration-300">
              {language === 'ar' ? 'تطوع معنا' : language === 'he' ? 'התנדבו איתנו' : 'Volunteer With Us'}
            </button>
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors duration-300">
              {language === 'ar' ? 'شارك قصتك' : language === 'he' ? 'שתפו את הסיפור שלכם' : 'Share Your Story'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog3;
