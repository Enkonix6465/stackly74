import React, { useState, useEffect } from "react";

// Translation object for clean water projects content
const translations = {
  en: {
    heroTitle: "The Ripple Effect of Clean Water Projects",
    heroDesc: "One well doesn't just provide water - it transforms entire communities. Discover how clean water access creates waves of positive change that reach far beyond basic hydration.",
    immediateTitle: "Immediate Impact: Life-Saving Access",
    immediateDesc: "Clean water projects deliver instant relief from waterborne diseases and provide the foundation for healthy communities.",
    immediateEffects: [
      { title: "Disease Prevention", desc: "Reduces waterborne illnesses by 70%, saving thousands of lives annually in affected communities." },
      { title: "Time Liberation", desc: "Families save 4-6 hours daily previously spent walking to distant water sources." },
      { title: "Nutritional Security", desc: "Clean water enables proper food preparation and hygiene, improving overall family nutrition." }
    ],
    rippleTitle: "The Ripple Effect: Transforming Lives",
    rippleDesc: "Clean water access creates a domino effect of positive changes that transform communities for generations.",
    rippleEffects: [
      { title: "Education Revolution", desc: "Children, especially girls, can attend school instead of collecting water, increasing literacy rates by 60%." },
      { title: "Economic Growth", desc: "Communities develop small businesses and agriculture, increasing household income by 250%." },
      { title: "Women's Empowerment", desc: "Women gain time for income-generating activities and leadership roles in community development." }
    ]
  },
  ar: {
    heroTitle: "التأثير المتموج لمشاريع المياه النظيفة",
    heroDesc: "بئر واحدة لا توفر الماء فقط - بل تحول مجتمعات بأكملها. اكتشف كيف يخلق الوصول للمياه النظيفة موجات من التغيير الإيجابي تصل إلى ما هو أبعد من الترطيب الأساسي.",
    immediateTitle: "التأثير الفوري: الوصول المنقذ للحياة",
    immediateDesc: "مشاريع المياه النظيفة توفر راحة فورية من الأمراض المنقولة بالمياه وتوفر الأساس للمجتمعات الصحية.",
    immediateEffects: [
      { title: "الوقاية من الأمراض", desc: "تقلل الأمراض المنقولة بالمياه بنسبة 70%، منقذة آلاف الأرواح سنوياً في المجتمعات المتضررة." },
      { title: "تحرير الوقت", desc: "العائلات توفر 4-6 ساعات يومياً كانت تُقضى في السير إلى مصادر المياه البعيدة." },
      { title: "الأمان الغذائي", desc: "المياه النظيفة تمكن من تحضير الطعام بشكل صحيح والنظافة، محسنة التغذية العائلية الشاملة." }
    ],
    rippleTitle: "التأثير المتموج: تحويل الحياة",
    rippleDesc: "الوصول للمياه النظيفة يخلق تأثير الدومينو من التغييرات الإيجابية التي تحول المجتمعات لأجيال.",
    rippleEffects: [
      { title: "ثورة التعليم", desc: "الأطفال، خاصة الفتيات، يمكنهم حضور المدرسة بدلاً من جمع الماء، مما يزيد معدلات القراءة والكتابة بنسبة 60%." },
      { title: "النمو الاقتصادي", desc: "المجتمعات تطور أعمال صغيرة وزراعة، مما يزيد دخل الأسرة بنسبة 250%." },
      { title: "تمكين المرأة", desc: "النساء يكسبن وقتاً لأنشطة مدرة للدخل وأدوار قيادية في تنمية المجتمع." }
    ]
  },
  he: {
    heroTitle: "אפקט הגלים של פרויקטי מים נקיים",
    heroDesc: "באר אחת לא רק מספקת מים - היא משנה קהילות שלמות. גלו איך גישה למים נקיים יוצרת גלי שינוי חיובי שמגיעים הרבה מעבר להידרציה בסיסית.",
    immediateTitle: "השפעה מיידית: גישה מצילת חיים",
    immediateDesc: "פרויקטי מים נקיים מספקים הקלה מיידית ממחלות הנישאות במים ומספקים את הבסיס לקהילות בריאות.",
    immediateEffects: [
      { title: "מניעת מחלות", desc: "מפחית מחלות הנישאות במים ב-70%, מצילה אלפי חיים מדי שנה בקהילות מושפעות." },
      { title: "שחרור זמן", desc: "משפחות חוסכות 4-6 שעות יומיות שהושקעו בעבר בהליכה למקורות מים רחוקים." },
      { title: "ביטחון תזונתי", desc: "מים נקיים מאפשרים הכנת מזון נכונה והיגיינה, משפרים את התזונה המשפחתית הכוללת." }
    ],
    rippleTitle: "אפקט הגלים: שינוי חיים",
    rippleDesc: "גישה למים נקיים יוצרת אפקט דומינו של שינויים חיוביים שמשנים קהילות לדורות.",
    rippleEffects: [
      { title: "מהפכת חינוך", desc: "ילדים, במיוחד בנות, יכולים ללכת לבית ספר במקום לאסוף מים, מגבירים שיעורי אוריינות ב-60%." },
      { title: "צמיחה כלכלית", desc: "קהילות מפתחות עסקים קטנים וחקלאות, מגבירות הכנסה משפחתית ב-250%." },
      { title: "העצמת נשים", desc: "נשים זוכות לזמן לפעילויות מניבות הכנסה ותפקידי מנהיגות בפיתוח קהילתי." }
    ]
  }
};

const Blog2 = () => {
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

      {/* Immediate Impact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6">{t.immediateTitle}</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">{t.immediateDesc}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.immediateEffects.map((effect, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#4B80B3]">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-[#4B80B3] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">💧</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#4B80B3] mb-4 text-center">{effect.title}</h3>
                <p className="text-black leading-relaxed text-center">{effect.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ripple Effect Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">{t.rippleTitle}</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">{t.rippleDesc}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.rippleEffects.map((effect, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-black">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-[#4B80B3] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">
                      {index === 0 ? '📚' : index === 1 ? '💰' : '👩‍💼'}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#4B80B3] mb-4 text-center">{effect.title}</h3>
                <p className="text-black leading-relaxed text-center">{effect.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-[#4B80B3]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            {language === 'ar' ? 'تأثير عالمي' : language === 'he' ? 'השפעה גלובלית' : 'Global Impact'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <div className="text-4xl font-bold text-white mb-2">663M</div>
              <p className="text-lg">
                {language === 'ar' ? 'شخص بدون ماء نظيف' : language === 'he' ? 'אנשים ללא מים נקיים' : 'People Without Clean Water'}
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <div className="text-4xl font-bold text-white mb-2">50%</div>
              <p className="text-lg">
                {language === 'ar' ? 'تحسن في الصحة العامة' : language === 'he' ? 'שיפור בבריאות הכללית' : 'Improvement in Overall Health'}
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <div className="text-4xl font-bold text-white mb-2">200M</div>
              <p className="text-lg">
                {language === 'ar' ? 'ساعة موفرة سنوياً' : language === 'he' ? 'שעות שנחסכו בשנה' : 'Hours Saved Annually'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            {language === 'ar' ? 'انضم إلى الحركة' : language === 'he' ? 'הצטרפו לתנועה' : 'Join the Movement'}
          </h2>
          <p className="text-xl text-black mb-8">
            {language === 'ar' ? 
              'تبرعك يمكن أن يوفر مياه نظيفة لعائلة كاملة ويخلق تأثيرات إيجابية تدوم لأجيال.' :
              language === 'he' ?
              'התרומה שלכם יכולה לספק מים נקיים למשפחה שלמה וליצור השפעות חיוביות הנמשכות לדורות.' :
              'Your donation can provide clean water to an entire family and create positive impacts lasting generations.'
            }
          </p>
          <button className="bg-[#4B80B3] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-black transition-colors duration-300">
            {language === 'ar' ? 'تبرع للمياه النظيفة' : language === 'he' ? 'תרמו למים נקיים' : 'Donate for Clean Water'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog2;
