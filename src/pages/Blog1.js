import React, { useState, useEffect } from "react";

// Translation object for all static content
const translations = {
  en: {
    heroTitle: "How Education Transformed an Entire Village",
    heroSubtitle: "A Journey from Darkness to Light",
    heroDesc: "In the remote village of Nyamkwere, education wasn't just about learning - it became the catalyst for complete community transformation. This is the incredible story of how one school changed everything.",
    
    beforeTitle: "Before: A Village in Struggle",
    beforeDesc: "Nyamkwere was a forgotten village where poverty seemed inescapable and hope was scarce.",
    beforeChallenges: [
      {
        title: "No Educational Access",
        desc: "Children walked 15+ miles to the nearest school, making regular attendance impossible."
      },
      {
        title: "Cycle of Poverty",
        desc: "Without education, families remained trapped in subsistence farming and economic hardship."
      },
      {
        title: "Limited Opportunities",
        desc: "Young people had no choice but to follow the same path as their parents, with no hope for advancement."
      }
    ],
    
    transformationTitle: "The Transformation: Education Arrives",
    transformationDesc: "When our charity built the first school in Nyamkwere, it sparked a chain reaction of positive change that exceeded all expectations.",
    transformationSteps: [
      {
        title: "Building the Foundation",
        desc: "We constructed a 6-classroom school with library, computer lab, and clean water facilities for 300 students."
      },
      {
        title: "Training Local Teachers",
        desc: "We recruited and trained 12 local teachers, providing them with modern teaching methods and ongoing support."
      },
      {
        title: "Community Engagement",
        desc: "Parents became involved through literacy programs, learning alongside their children and supporting education initiatives."
      }
    ],
    
    impactTitle: "The Ripple Effect: Beyond the Classroom",
    impactDesc: "Education didn't just change individual lives - it transformed the entire village ecosystem.",
    impacts: [
      {
        title: "Economic Growth",
        desc: "Village income increased by 340% as educated youth started businesses and brought new skills to farming."
      },
      {
        title: "Health Improvements",
        desc: "Literacy enabled better health practices, reducing child mortality by 60% and improving family nutrition."
      },
      {
        title: "Women's Empowerment",
        desc: "Girls' education led to delayed marriages, reduced birth rates, and women taking leadership roles in the community."
      },
      {
        title: "Infrastructure Development",
        desc: "The village attracted government investment in roads, electricity, and healthcare facilities."
      }
    ],
    
    storiesTitle: "Personal Stories of Transformation",
    stories: [
      {
        name: "Amara Nyong",
        role: "First Graduate, Now Teacher",
        story: "I was 8 when the school opened. Today, I'm teaching the next generation in my own village, proving that education creates teachers who give back."
      },
      {
        name: "Kwame Asante",
        role: "Agricultural Innovator",
        story: "School taught me about sustainable farming. Now I lead the village cooperative that tripled our crop yields using modern techniques."
      },
      {
        name: "Grace Mwangi",
        role: "Healthcare Leader",
        story: "Education opened my path to nursing school. I returned to establish the village's first health clinic, serving 2,000 people."
      }
    ],
    
    futureTitle: "Looking Forward: A Model for Change",
    futureDesc: "Nyamkwere's transformation has become a model replicated in 15 other villages, proving education's power to break cycles of poverty.",
    
    callToActionTitle: "Help Us Transform More Villages",
    callToActionDesc: "Your support can bring the same transformation to communities still waiting for their chance at education."
  },
  ar: {
    heroTitle: "كيف غيّر التعليم قرية بأكملها",
    heroSubtitle: "رحلة من الظلام إلى النور",
    heroDesc: "في قرية نيامكوير النائية، لم يكن التعليم مجرد تعلم - بل أصبح الحافز للتحول الكامل للمجتمع. هذه هي القصة المذهلة لكيف غيّرت مدرسة واحدة كل شيء.",
    
    beforeTitle: "قبل: قرية في كفاح",
    beforeDesc: "كانت نيامكوير قرية منسية حيث بدا الفقر لا مفر منه والأمل نادر.",
    beforeChallenges: [
      {
        title: "لا يوجد وصول للتعليم",
        desc: "كان الأطفال يمشون أكثر من 15 ميلاً إلى أقرب مدرسة، مما جعل الحضور المنتظم مستحيلاً."
      },
      {
        title: "دورة الفقر",
        desc: "بدون تعليم، بقيت العائلات محاصرة في الزراعة الكفافية والصعوبات الاقتصادية."
      },
      {
        title: "فرص محدودة",
        desc: "لم يكن أمام الشباب خيار سوى اتباع نفس طريق آبائهم، بدون أمل في التقدم."
      }
    ],
    
    transformationTitle: "التحول: وصول التعليم",
    transformationDesc: "عندما بنت مؤسستنا الخيرية أول مدرسة في نيامكوير، أشعلت تفاعلاً متسلسلاً من التغيير الإيجابي فاق كل التوقعات.",
    transformationSteps: [
      {
        title: "بناء الأساس",
        desc: "بنينا مدرسة من 6 فصول مع مكتبة ومختبر كمبيوتر ومرافق مياه نظيفة لـ 300 طالب."
      },
      {
        title: "تدريب المعلمين المحليين",
        desc: "جندنا ودربنا 12 معلماً محلياً، وزودناهم بطرق التدريس الحديثة والدعم المستمر."
      },
      {
        title: "إشراك المجتمع",
        desc: "أصبح الآباء مشاركين من خلال برامج محو الأمية، يتعلمون جنباً إلى جنب مع أطفالهم ويدعمون مبادرات التعليم."
      }
    ],
    
    impactTitle: "التأثير المتتالي: ما وراء الفصل الدراسي",
    impactDesc: "التعليم لم يغيّر الحياة الفردية فقط - بل حوّل نظام القرية بأكمله.",
    impacts: [
      {
        title: "النمو الاقتصادي",
        desc: "زاد دخل القرية بنسبة 340% حيث بدأ الشباب المتعلمون أعمالاً وجلبوا مهارات جديدة للزراعة."
      },
      {
        title: "تحسينات صحية",
        desc: "مكّنت القراءة والكتابة من ممارسات صحية أفضل، مما قلل وفيات الأطفال بنسبة 60% وحسن تغذية الأسرة."
      },
      {
        title: "تمكين المرأة",
        desc: "أدى تعليم الفتيات إلى تأخير الزواج وتقليل معدلات الولادة وتولي النساء أدوار قيادية في المجتمع."
      },
      {
        title: "تطوير البنية التحتية",
        desc: "جذبت القرية استثمارات حكومية في الطرق والكهرباء ومرافق الرعاية الصحية."
      }
    ],
    
    storiesTitle: "قصص شخصية للتحول",
    stories: [
      {
        name: "أمارا نيونغ",
        role: "أول خريجة، الآن معلمة",
        story: "كان عمري 8 سنوات عندما افتتحت المدرسة. اليوم، أعلّم الجيل القادم في قريتي، مما يثبت أن التعليم ينشئ معلمين يردون الجميل."
      },
      {
        name: "كوامي أسانتي",
        role: "مبتكر زراعي",
        story: "علمتني المدرسة عن الزراعة المستدامة. الآن أقود التعاونية القروية التي ضاعفت محاصيلنا ثلاث مرات باستخدام التقنيات الحديثة."
      },
      {
        name: "جريس موانجي",
        role: "قائدة رعاية صحية",
        story: "فتح التعليم طريقي لمدرسة التمريض. عدت لإنشاء أول عيادة صحية في القرية، تخدم 2000 شخص."
      }
    ],
    
    futureTitle: "النظر للمستقبل: نموذج للتغيير",
    futureDesc: "أصبح تحول نيامكوير نموذجاً تم تكراره في 15 قرية أخرى، مما يثبت قوة التعليم في كسر دورات الفقر.",
    
    callToActionTitle: "ساعدونا في تحويل المزيد من القرى",
    callToActionDesc: "دعمكم يمكن أن يجلب نفس التحول للمجتمعات التي ما زالت تنتظر فرصتها في التعليم."
  },
  he: {
    heroTitle: "איך החינוך שינה כפר שלם",
    heroSubtitle: "מסע מחושך לאור",
    heroDesc: "בכפר הנידח ניאמקוויר, חינוך לא היה רק על למידה - הוא הפך לזרז לשינוי מוחלט של הקהילה. זה הסיפור המדהים של איך בית ספר אחד שינה הכל.",
    
    beforeTitle: "לפני: כפר במאבק",
    beforeDesc: "ניאמקוויר היה כפר נשכח שבו העוני נראה בלתי נמנע והתקווה הייתה נדירה.",
    beforeChallenges: [
      {
        title: "אין גישה לחינוך",
        desc: "ילדים הלכו יותר מ-15 מייל לבית הספר הקרוב ביותר, מה שהפך נוכחות קבועה לבלתי אפשרית."
      },
      {
        title: "מעגל העוני",
        desc: "בלי חינוך, משפחות נשארו לכודות בחקלאות קיום וקושי כלכלי."
      },
      {
        title: "הזדמנויות מוגבלות",
        desc: "לצעירים לא הייתה ברירה אלא ללכת באותו שביל כמו הוריהם, ללא תקווה להתקדמות."
      }
    ],
    
    transformationTitle: "השינוי: החינוך מגיע",
    transformationDesc: "כשהצדקה שלנו בנתה את בית הספר הראשון בניאמקוויר, זה הצית תגובת שרשרת של שינוי חיובי שעבר את כל הציפיות.",
    transformationSteps: [
      {
        title: "בניית הבסיס",
        desc: "בנינו בית ספר של 6 כיתות עם ספרייה, מעבדת מחשבים ומתקני מים נקיים ל-300 תלמידים."
      },
      {
        title: "הכשרת מורים מקומיים",
        desc: "גייסנו והכשרנו 12 מורים מקומיים, סיפקנו להם שיטות הוראה מודרניות ותמיכה מתמשכת."
      },
      {
        title: "מעורבות קהילתית",
        desc: "הורים הפכו מעורבים דרך תוכניות אוריינות, למדו לצד ילדיהם ותמכו ביוזמות חינוך."
      }
    ],
    
    impactTitle: "אפקט הגלים: מעבר לכיתה",
    impactDesc: "חינוך לא רק שינה חיים אישיים - הוא שינה את המערכת האקולוגית של הכפר כולו.",
    impacts: [
      {
        title: "צמיחה כלכלית",
        desc: "הכנסת הכפר עלתה ב-340% כאשר צעירים משכילים הקימו עסקים והביאו כישורים חדשים לחקלאות."
      },
      {
        title: "שיפורים בריאותיים",
        desc: "אוריינות אפשרה שיטות בריאות טובות יותר, הפחתת תמותת ילדים ב-60% ושיפור תזונת המשפחה."
      },
      {
        title: "העצמת נשים",
        desc: "חינוך בנות הוביל לעיכוב נישואים, הפחתת שיעורי לידה ונשים שתפסו תפקידי מנהיגות בקהילה."
      },
      {
        title: "פיתוח תשתית",
        desc: "הכפר משך השקעות ממשלתיות בכבישים, חשמל ומתקני בריאות."
      }
    ],
    
    storiesTitle: "סיפורים אישיים של שינוי",
    stories: [
      {
        name: "אמארה ניונג",
        role: "בוגרת ראשונה, כעת מורה",
        story: "הייתי בת 8 כשבית הספר נפתח. היום, אני מלמדת את הדור הבא בכפר שלי, מוכיחה שחינוך יוצר מורים שמחזירים טובה."
      },
      {
        name: "קואמה אסנטה",
        role: "חדשן חקלאי",
        story: "בית הספר לימד אותי על חקלאות בת-קיימא. עכשיו אני מוביל את הקואופרטיב הכפרי שהכפיל את היבולים שלנו פי שלושה באמצעות טכניקות מודרניות."
      },
      {
        name: "גרייס מואנגי",
        role: "מנהיגת בריאות",
        story: "חינוך פתח את דרכי לבית ספר לסיעוד. חזרתי להקים את המרפאה הבריאותית הראשונה בכפר, המשרתת 2,000 אנשים."
      }
    ],
    
    futureTitle: "מבט קדימה: מודל לשינוי",
    futureDesc: "השינוי של ניאמקוויר הפך למודל שהועתק ב-15 כפרים אחרים, מוכיח את כוחו של החינוך לשבור מעגלי עוני.",
    
    callToActionTitle: "עזרו לנו לשנות עוד כפרים",
    callToActionDesc: "התמיכה שלכם יכולה להביא את אותו השינוי לקהילות שעדיין מחכות להזדמנות שלהן לחינוך."
  }
};

const Blog1 = () => {
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

  const t = translations[language];

  return (
    <div className={`min-h-screen bg-white ${language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}`} dir={language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#4B80B3] mb-4">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-black mb-6">{t.heroSubtitle}</p>
            <p className="text-lg text-black max-w-4xl mx-auto leading-relaxed">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Before Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">{t.beforeTitle}</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">{t.beforeDesc}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.beforeChallenges.map((challenge, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-black">
                <h3 className="text-xl font-bold text-[#4B80B3] mb-4">{challenge.title}</h3>
                <p className="text-black leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B80B3] mb-6">{t.transformationTitle}</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">{t.transformationDesc}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.transformationSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#4B80B3]">
                <div className="text-3xl font-bold text-[#4B80B3] mb-4">{index + 1}</div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-black leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">{t.impactTitle}</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">{t.impactDesc}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.impacts.map((impact, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-black text-center">
                <h3 className="text-lg font-bold text-[#4B80B3] mb-3">{impact.title}</h3>
                <p className="text-black text-sm leading-relaxed">{impact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Stories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6">{t.storiesTitle}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.stories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#4B80B3]">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#4B80B3] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{story.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black">{story.name}</h3>
                  <p className="text-[#4B80B3] font-semibold">{story.role}</p>
                </div>
                <p className="text-black leading-relaxed italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t.futureTitle}</h2>
          <p className="text-xl text-white leading-relaxed">{t.futureDesc}</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-[#4B80B3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t.callToActionTitle}</h2>
          <p className="text-xl text-white mb-8">{t.callToActionDesc}</p>
          <button className="bg-white text-[#4B80B3] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-colors duration-300">
            {language === 'ar' ? 'تبرع الآن' : language === 'he' ? 'תרמו עכשיו' : 'Donate Now'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog1;