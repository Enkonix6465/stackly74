import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import video from "../images/charity-home.mp4";
import leena from "../images/leena.jpg";
import ahmed from "../images/ahmed.jpg";  
import maria from "../images/maria.jpg";

const Home1 = () => {
  const navigate = useNavigate();
  
  // Language state
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem('language') || 'en';
    return stored;
  });

  // Donation form modal state
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [donationData, setDonationData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    amount: '',
    donationType: 'one-time',
    message: ''
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

  // Handle donation form
  const handleDonationSubmit = (e) => {
    e.preventDefault();
    
    // Generate unique ID for donation
    const donationId = 'donation_' + Date.now();
    
    // Create donation record
    const donationRecord = {
      id: donationId,
      ...donationData,
      timestamp: new Date().toISOString(),
      status: 'submitted'
    };

    // Get existing donations from localStorage
    const existingDonations = JSON.parse(localStorage.getItem('donations') || '[]');
    
    // Add new donation
    existingDonations.push(donationRecord);
    
    // Save to localStorage
    localStorage.setItem('donations', JSON.stringify(existingDonations));
    
    // Show success message and close form
    alert('Thank you for your donation! Your information has been saved.');
    setShowDonationForm(false);
    
    // Reset form
    setDonationData({
      name: '',
      email: '',
      phone: '',
      address: '',
      amount: '',
      donationType: 'one-time',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

// Translations for all Home1 content
const translations = {
  en: {
    heroTitle: "Transforming Lives Through Compassionate Giving",
    heroDesc: "Our dedicated team provides essential support, emergency relief, and sustainable solutions to communities in need around the world.",
    getStarted: "Join Our Mission",
    aboutYears: "25 Years of Service",
    aboutFirm: "About Our Charity",
    aboutTitle: "Committed to Hope, Compassion, and Lasting Change",
    aboutDesc: "For over 25 years, our charity has provided life-changing support to vulnerable communities, families, and individuals. Our passionate team is committed to upholding the highest standards of transparency and impact, ensuring every donation creates meaningful and sustainable change.",
    aboutList: [
      "Expertise in education, healthcare, emergency relief and community development",
      "Donor-focused approach with full financial transparency",
      "Proven track record of successful community projects",
      "Compassionate service and ethical operations"
    ],
    aboutBtn: "About Us",
    approachTitle: "Our Charity Approach",
    approachDesc: "We follow a comprehensive process designed to maximize impact and ensure resources reach those who need them most.",
    steps: [
      {
        title: "Needs Assessment",
        description: "We begin with thorough research to identify communities and individuals most in need of support.",
        icon: "🔍"
      },
      {
        title: "Project Planning",
        description: "Our team develops detailed plans to address specific needs with sustainable solutions.",
        icon: "📋"
      },
      {
        title: "Resource Mobilization",
        description: "We gather donations, volunteers, and partners to make our projects possible.",
        icon: "🤝"
      },
      {
        title: "Implementation",
        description: "Our team works directly with communities to deliver aid and support services.",
        icon: "🚀"
      },
      {
        title: "Impact Evaluation",
        description: "We monitor results and measure impact to ensure continuous improvement.",
        icon: "✅"
      }
    ],
    excellenceTitle: "Our Impact in Numbers",
    excellenceDesc: "With over three decades of collective experience, our team has successfully delivered life-changing support to communities across various regions and causes.",
    stats: [
      { number: "50M+", label: "Lives Touched", desc: "Through our various projects and programs" },
      { number: "500+", label: "Projects Completed", desc: "Successful community initiatives" },
      { number: "30+", label: "Countries", desc: "Where we've made a difference" },
      { number: "99%", label: "Donor Satisfaction", desc: "Based on impact reports and feedback" }
    ],

    aboutRisehandsLabel: "About Risehands",
    helpingVirtueTitle: "Helping is Great Virtue for Every Human's",
    helpingVirtueDesc: "It has been determined through research that when we feel to help, and that someone authentically needs our assistance, and that trick is being played on us, we reliably do intervene. Interestingly, it has been found that we are less likely to help an examination of the intrinsic worth of helping others, transcending cultural, religious, and societal boundaries.",
    
    charityCategories: {
      education: "Charity For Education",
      pets: "Charity For Pets", 
      medical: "Charity For Medical Health",
      cleanWater: "Charity For Clean Water",
      church: "Charity For Church"
    },

    serviceCards: {
      emergencyRelief: {
        title: "Emergency Relief",
        desc: "Rapid response to natural disasters, humanitarian crises, and emergency situations providing immediate aid and support."
      },
      educationSupport: {
        title: "Education Support", 
        desc: "Scholarships, school building programs, and educational resources to ensure every child has access to quality learning."
      },
      healthcareServices: {
        title: "Healthcare Services",
        desc: "Medical missions, health clinics, and wellness programs bringing essential healthcare to underserved communities."
      },
      communityDevelopment: {
        title: "Community Development",
        desc: "Sustainable development projects, infrastructure building, and capacity building programs for long-term community growth."
      }
    },

    learnMoreBtn: "Learn More Us",
    whatWeOfferLabel: "WHAT WE OFFER",
    whatWeOfferTitle: "Our charity support services",
    whatWeOfferDesc: "We provide comprehensive support through various charitable programs designed to make a lasting impact. Our dedicated team works tirelessly to address the most pressing needs in communities worldwide, ensuring every donation creates meaningful change.",
    allServicesBtn: "All Services",
    
    realImpactLabel: "Real Impact",
    storiesTitle: "Stories of Hope",
    storiesDesc: "See how your generosity creates real change in people's lives around the world.",
    
    volunteerTitle: "Become Volunteer",
    volunteerDesc: "Join our community of dedicated volunteers and make a meaningful difference in people's lives. Together, we can create lasting change and bring hope to those who need it most.",
    volunteerFeatures: {
      flexible: "Flexible scheduling",
      training: "Training provided", 
      impact: "Make lasting impact"
    },
    joinNowBtn: "Join Now",
    learnMoreBtn2: "Learn More",

    ctaTitle: "Ready to Make a Difference?",
    ctaDesc: "Join us today in our mission to bring hope and positive change. Your support can transform lives.",
    ctaBtn: "Donate Now",

    // Additional labels
    educationLabel: "Education",
    risehandsLabel: "Risehands",
    takeActionLabel: "Take Action",
    beforeLabel: "Before",
    afterLabel: "After",

    // Stories data
    stories: [
      {
        id: 1,
        name: "Maria's Family",
        location: "Kenya",
        story: "With your support, we built a clean water well that serves 500 people daily.",
        impact: "Water Access",
        before: "5km walk for water",
        after: "Clean water nearby"
      },
      {
        id: 2,
        name: "Ahmed's Education",
        location: "Bangladesh",
        story: "Scholarship program enabled Ahmed to become the first doctor in his village.",
        impact: "Education",
        before: "No school access",
        after: "Medical degree"
      },
      {
        id: 3,
        name: "Lena's Business",
        location: "Ukraine",
        story: "Micro-loan helped start a small business that now employs 8 people.",
        impact: "Economic Growth",
        before: "Unemployed",
        after: "Business owner"
      }
    ]
  },
  ar: {
    heroTitle: "تحويل الحياة من خلال العطاء الرحيم",
    heroDesc: "يقدم فريقنا المتفاني الدعم الأساسي والإغاثة في حالات الطوارئ والحلول المستدامة للمجتمعات المحتاجة حول العالم.",
    getStarted: "انضم إلى مهمتنا",
    aboutYears: "25 سنة من الخدمة",
    aboutFirm: "عن جمعيتنا الخيرية",
    aboutTitle: "ملتزمون بالأمل والرحمة والتغيير الدائم",
    aboutDesc: "على مدار 25 عامًا، قدمت جمعيتنا الخيرية دعماً يغير الحياة للمجتمعات والأسر والأفراد الضعفاء. فريقنا المتحمس ملتزم بالحفاظ على أعلى معايير الشفافية والتأثير، مما يضمن أن كل تبرع يخلق تغييرًا هادفًا ومستدامًا.",
    aboutList: [
      "خبرة في التعليم والرعاية الصحية والإغاثة في حالات الطوارئ وتنمية المجتمع",
      "نهج يركز على المتبرعين مع الشفافية المالية الكاملة",
      "سجل حافل بمشاريع مجتمعية ناجحة",
      "خدمة رحيمة وعمليات أخلاقية"
    ],
    aboutBtn: "معلومات عنا",
    approachTitle: "نهجنا الخيري",
    approachDesc: "نتبع عملية شاملة مصممة لتعظيم التأثير وضمان وصول الموارد إلى أولئك الذين يحتاجونها بشدة.",
    steps: [
      {
        title: "تقييم الاحتياجات",
        description: "نبدأ بأبحاث شاملة لتحديد المجتمعات والأفراد الأكثر احتياجًا للدعم.",
        icon: "🔍"
      },
      {
        title: "تخطيط المشروع",
        description: "يضع فريقنا خططًا مفصلة لمعالجة الاحتياجات المحددة بحلول مستدامة.",
        icon: "📋"
      },
      {
        title: "تعبئة الموارد",
        description: "نجمع التبرعات والمتطوعين والشركاء لجعل مشاريعنا ممكنة.",
        icon: "🤝"
      },
      {
        title: "التنفيذ",
        description: "يعمل فريقنا مباشرة مع المجتمعات لتقديم المساعدة وخدمات الدعم.",
        icon: "🚀"
      },
      {
        title: "تقييم الأثر",
        description: "نراقب النتائج ونقيس التأثير لضمان التحسين المستمر.",
        icon: "✅"
      }
    ],
    excellenceTitle: "تأثيرنا في الأرقام",
    excellenceDesc: "بخبرة جماعية تزيد عن ثلاثة عقود، نجح فريقنا في تقديم دعم يغير الحياة لمجتمعات في مختلف المناطق والقضايا.",
    stats: [
      { number: "50M+", label: "حياة مستفيدة", desc: "من خلال مشاريعنا وبرامجنا المختلفة" },
      { number: "500+", label: "مشروع مكتمل", desc: "مبادرات مجتمعية ناجحة" },
      { number: "30+", label: "دولة", desc: "حققنا فيها فرقًا ملموسًا" },
      { number: "99%", label: "رضا المتبرعين", desc: "بناءً على تقارير التأثير وملاحظاتهم" }
    ],

    aboutRisehandsLabel: "عن رايزهاندز",
    helpingVirtueTitle: "المساعدة فضيلة عظيمة لكل إنسان",
    helpingVirtueDesc: "لقد تم تحديد من خلال البحث أنه عندما نشعر بالرغبة في المساعدة، وأن شخصًا ما يحتاج بصدق إلى مساعدتنا، وأنه لا يتم خداعنا، فإننا نتدخل بشكل موثوق. من المثير للاهتمام أنه تم اكتشاف أننا أقل ميلاً للمساعدة في فحص القيمة الجوهرية لمساعدة الآخرين، متجاوزين الحدود الثقافية والدينية والاجتماعية.",
    
    charityCategories: {
      education: "الأعمال الخيرية للتعليم",
      pets: "الأعمال الخيرية للحيوانات الأليفة",
      medical: "الأعمال الخيرية للصحة الطبية",
      cleanWater: "الأعمال الخيرية للمياه النظيفة",
      church: "الأعمال الخيرية للكنيسة"
    },

    serviceCards: {
      emergencyRelief: {
        title: "الإغاثة الطارئة",
        desc: "استجابة سريعة للكوارث الطبيعية والأزمات الإنسانية وحالات الطوارئ لتقديم المساعدة والدعم الفوريين."
      },
      educationSupport: {
        title: "دعم التعليم", 
        desc: "منح دراسية وبرامج بناء مدارس وموارد تعليمية لضمان حصول كل طفل على تعليم جيد."
      },
      healthcareServices: {
        title: "الخدمات الصحية",
        desc: "بعثات طبية وعيادات صحية وبرامج عافية لتوفير الرعاية الصحية الأساسية للمجتمعات المحرومة."
      },
      communityDevelopment: {
        title: "التنمية المجتمعية",
        desc: "مشاريع تنمية مستدامة وبناء البنية التحتية وبرامج بناء القدرات لنمو المجتمع على المدى الطويل."
      }
    },

    learnMoreBtn: "تعرف علينا أكثر",
    whatWeOfferLabel: "ما نقدمه",
    whatWeOfferTitle: "خدمات الدعم الخيري لدينا",
    whatWeOfferDesc: "نحن نقدم دعمًا شاملاً من خلال برامج خيرية متنوعة مصممة لإحداث تأثير دائم. يعمل فريقنا المتفاني بلا كلل لمعالجة أهم الاحتياجات في المجتمعات في جميع أنحاء العالم، مما يضمن أن كل تبرع يخلق تغييرًا ذا معنى.",
    allServicesBtn: "جميع الخدمات",
    
    realImpactLabel: "تأثير حقيقي",
    storiesTitle: "قصص الأمل",
    storiesDesc: "شاهد كيف يخلق كرمك تغييرًا حقيقيًا في حياة الناس حول العالم.",
    
    volunteerTitle: "كن متطوعًا",
    volunteerDesc: "انضم إلى مجتمعنا من المتطوعين المتفانين واصنع فرقًا ذا معنى في حياة الناس. معًا، يمكننا إحداث تغيير دائم وجلب الأمل لأولئك الذين يحتاجونه أكثر.",
    volunteerFeatures: {
      flexible: "جدولة مرنة",
      training: "تدريب مقدم",
      impact: "إحداث تأثير دائم"
    },
    joinNowBtn: "انضم الآن",
    learnMoreBtn2: "تعرف أكثر",

    ctaTitle: "مستعد لصنع فرق؟",
    ctaDesc: "انضم إلينا اليوم في مهمتنا لجلب الأمل والتغيير الإيجابي. دعمك يمكن أن يحول حياة.",
    ctaBtn: "تبرع الآن",

    // Additional labels
    educationLabel: "التعليم",
    risehandsLabel: "رايزهاندز",
    takeActionLabel: "اتخذ إجراء",
    beforeLabel: "قبل",
    afterLabel: "بعد",

    // Stories data
    stories: [
      {
        id: 1,
        name: "عائلة ماريا",
        location: "كينيا",
        story: "بدعمكم، بنينا بئر مياه نظيفة يخدم 500 شخص يومياً.",
        impact: "الوصول للمياه",
        before: "مشي 5 كم للمياه",
        after: "مياه نظيفة قريبة"
      },
      {
        id: 2,
        name: "تعليم أحمد",
        location: "بنغلاديش",
        story: "برنامج المنح الدراسية مكّن أحمد من أن يصبح أول طبيب في قريته.",
        impact: "التعليم",
        before: "لا يوجد وصول للمدرسة",
        after: "شهادة طبية"
      },
      {
        id: 3,
        name: "مشروع لينا",
        location: "أوكرانيا",
        story: "القرض الصغير ساعد في بدء مشروع صغير يوظف الآن 8 أشخاص.",
        impact: "النمو الاقتصادي",
        before: "عاطلة عن العمل",
        after: "صاحبة مشروع"
      }
    ]
  },
  he: {
    heroTitle: "משנים חיים דרך חמלה ונתינה",
    heroDesc: "הצוות המסור שלנו מספק תמיכה חיונית, סיוע חירום ופתרונות ברי-קיימא לקהילות נזקקות ברחבי העולם.",
    getStarted: "הצטרף למשימה שלנו",
    aboutYears: "25 שנות שירות",
    aboutFirm: "על העמותה שלנו",
    aboutTitle: "מחויבים לתקווה, חמלה ושינוי מתמשך",
    aboutDesc: "במשך יותר מ-25 שנה, העמותה שלנו סיפקה תמיכה משנה חיים לקהילות, משפחות ויחידים פגיעים. הצוות הנלהב שלנו מחויב לשמירה על הסטנדרטים הגבוהים ביותר של שקיפות והשפעה, כדי להבטיח שכל תרומה יוצרת שינוי משמעותי ובר-קיימא.",
    aboutList: [
      "מומחיות בחינוך, בריאות, סיוע חירום ופיתוח קהילתי",
      "גישה ממוקדת תורמים עם שקיפות פיננסית מלאה",
      "היסטוריה מוכחה של פרויקטים קהילתיים מוצלחים",
      "שירות חמלה ופעולות אתיות"
    ],
    aboutBtn: "עלינו",
    approachTitle: "הגישה שלנו",
    approachDesc: "אנו פועלים בתהליך מקיף שנועד למקסם השפעה ולהבטיח שמשאבים מגיעים לאלה הזקוקים להם ביותר.",
    steps: [
      {
        title: "הערכת צרכים",
        description: "אנו מתחילים במחקר מעמיק לזיהוי קהילות ויחידים הנזקקים ביותר לתמיכה.",
        icon: "🔍"
      },
      {
        title: "תכנון פרויקט",
        description: "הצוות שלנו מפתח תוכניות מפורטות לטיפול בצרכים ספציפיים עם פתרונות ברי-קיימא.",
        icon: "📋"
      },
      {
        title: "גיוס משאבים",
        description: "אנו אוספים תרומות, מתנדבים ושותפים כדי לאפשר את הפרויקטים שלנו.",
        icon: "🤝"
      },
      {
        title: "יישום",
        description: "הצוות שלנו עובד ישירות עם קהילות כדי לספק סיוע ושירותי תמיכה.",
        icon: "🚀"
      },
      {
        title: "הערכת השפעה",
        description: "אנו עוקבים אחר תוצאות ומודדים השפעה כדי להבטיח שיפור מתמשך.",
        icon: "✅"
      }
    ],
    excellenceTitle: "ההשפעה שלנו במספרים",
    excellenceDesc: "עם ניסיון מצטבר של מעל שלושה עשורים, הצוות שלנו סיפק בהצלחה תמיכה משנה חיים לקהילות ברחבי אזורים ותחומים שונים.",
    stats: [
      { number: "50M+", label: "חיים שנגענו", desc: "דרך הפרויקטים והתוכניות השונות שלנו" },
      { number: "500+", label: "פרויקטים שהושלמו", desc: "יוזמות קהילתיות מוצלחות" },
      { number: "30+", label: "מדינות", desc: "בהן עשינו הבדל" },
      { number: "99%", label: "שביעות רצון תורמים", desc: "בהתבסס על דוחות השפעה ומשוב" }
    ],

    aboutRisehandsLabel: "אודות רייזהאנדס",
    helpingVirtueTitle: "עזרה היא סגולה גדולה עבור כל אדם",
    helpingVirtueDesc: "נקבע במחקר שכאשר אנו מרגישים צורך לעזור, ושמישהו באמת זקוק לעזרתנו, ושלא מתרמים עלינו, אנו אכן מתערבים באופן אמין. מעניין שנמצא שאנו פחות נוטים לעזור בבחינה של הערך הפנימי של עזרה לאחרים, החוצה את הגבולות התרבותיים, הדתיים והחברתיים.",
    
    charityCategories: {
      education: "צדקה לחינוך",
      pets: "צדקה לחיות מחמד",
      medical: "צדקה לבריאות רפואית",
      cleanWater: "צדקה למים נקיים",
      church: "צדקה לכנסייה"
    },

    serviceCards: {
      emergencyRelief: {
        title: "סיוע חירום",
        desc: "תגובה מהירה לאסונות טבע, משברים הומניטריים ומצבי חירום המספקים סיוע ותמיכה מיידיים."
      },
      educationSupport: {
        title: "תמיכה בחינוך", 
        desc: "מלגות, תוכניות בניית בתי ספר ומשאבים חינוכיים כדי להבטיח שלכל ילד תהיה גישה ללמידה איכותית."
      },
      healthcareServices: {
        title: "שירותי בריאות",
        desc: "משימות רפואיות, מרפאות בריאות ותוכניות בריאות המביאות שירותי בריאות חיוניים לקהילות מוחלשות."
      },
      communityDevelopment: {
        title: "פיתוח קהילתי",
        desc: "פרויקטי פיתוח בר-קיימא, בניית תשתיות ותוכניות בניית יכולות לצמיחה קהילתית ארוכת טווח."
      }
    },

    learnMoreBtn: "למד עלינו יותר",
    whatWeOfferLabel: "מה אנחנו מציעים",
    whatWeOfferTitle: "שירותי התמיכה הצדקה שלנו",
    whatWeOfferDesc: "אנו מספקים תמיכה מקיפה באמצעות תוכניות צדקה שונות שנועדו להשפיע לאורך זמן. הצוות המסור שלנו עובד ללא לאות כדי להתמודד עם הצרכים הדחופים ביותר בקהילות ברחבי העולם, ומבטיח שכל תרומה יוצרת שינוי משמעותי.",
    allServicesBtn: "כל השירותים",
    
    realImpactLabel: "השפעה אמיתית",
    storiesTitle: "סיפורים של תקווה",
    storiesDesc: "ראה איך הנדיבות שלך יוצרת שינוי אמיתי בחיי אנשים ברחבי העולם.",
    
    volunteerTitle: "הפוך למתנדב",
    volunteerDesc: "הצטרף לקהילה שלנו של מתנדבים מסורים ועשה הבדל משמעותי בחיי אנשים. יחד, אנחנו יכולים ליצור שינוי מתמשך ולהביא תקווה לאלה שזקוקים לה ביותר.",
    volunteerFeatures: {
      flexible: "תזמון גמיש",
      training: "הכשרה מסופקת",
      impact: "יצירת השפעה מתמשכת"
    },
    joinNowBtn: "הצטרף עכשיו",
    learnMoreBtn2: "למד עוד",

    testimonialsTitle: "סיפורים של תקווה",
    testimonialsDesc: "שמעו מהאנשים שעזרנו להם ומהשותפים שלנו על ההשפעה של העבודה שלנו והתקווה שהבאנו לקהילות.",

    ctaTitle: "מוכן לעשות הבדל?",
    ctaDesc: "הצטרף אלינו היום במשימה שלנו להביא תקווה ושינוי חיובי. התמיכה שלך יכולה לשנות חיים.",
    ctaBtn: "תרום עכשיו",

    // Additional labels
    educationLabel: "חינוך",
    risehandsLabel: "רייזהאנדס",
    takeActionLabel: "בצע פעולה",
    beforeLabel: "לפני",
    afterLabel: "אחרי",

    // Stories data
    stories: [
      {
        id: 1,
        name: "משפחת מריה",
        location: "קניה",
        story: "בתמיכתכם, בנינו באר מים נקיים המשרתת 500 אנשים ביום.",
        impact: "גישה למים",
        before: "הליכה של 5 ק\"מ למים",
        after: "מים נקיים בקרבת מקום"
      },
      {
        id: 2,
        name: "החינוך של אחמד",
        location: "בנגלדש",
        story: "תוכנית מלגות אפשרה לאחמד להפוך לרופא הראשון בכפר שלו.",
        impact: "חינוך",
        before: "אין גישה לבית ספר",
        after: "תואר ברפואה"
      },
      {
        id: 3,
        name: "העסק של לנה",
        location: "אוקראינה",
        story: "הלוואה קטנה עזרה להקים עסק קטן שמעסיק כעת 8 אנשים.",
        impact: "צמיחה כלכלית",
        before: "מובטלת",
        after: "בעלת עסק"
      }
    ]
  }
};
const involvementOptions = [
  {
    icon: "💝",
    title: "Donate",
    description: "Make a one-time or recurring donation to support our programs.",
    features: ["Tax deductible", "Instant processing", "Secure payment"],
    color: "bg-[#4B80B3]",
    buttonText: "Donate Now"
  },
  {
    icon: "🤝",
    title: "Volunteer",
    description: "Join our team of dedicated volunteers making a difference locally.",
    features: ["Flexible hours", "Training provided", "Make friends"],
    color: "bg-black",
    buttonText: "Contact Us"
  },
  {
    icon: "🏢",
    title: "Partner",
    description: "Corporate partnerships that create meaningful social impact.",
    features: ["CSR opportunities", "Employee engagement", "Brand alignment"],
    color: "bg-[#4B80B3]",
    buttonText: "Contact Us"
  },
  {
    icon: "📢",
    title: "Advocate",
    description: "Use your voice to spread awareness and inspire others to act.",
    features: ["Social media kits", "Event resources", "Community building"],
    color: "bg-black",
    buttonText: "Contact Us"
  }
];

  const t = translations[language] || translations.en;

  // Map images to stories
  const storyImages = [maria, ahmed, leena];
  const storiesWithImages = t.stories.map((story, index) => ({
    ...story,
    image: storyImages[index]
  }));

  return (
    <div key={`home-${language}`} className="w-screen min-h-screen bg-white dark:bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-screen h-screen overflow-hidden bg-white">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        {/* Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black/50 transition-colors duration-500"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4">
          {/* Debug info - remove after testing */}
          <div className="absolute top-4 left-4 bg-black/80 text-white p-2 rounded text-sm">
            Current Language: {language} | Title: {t.heroTitle.substring(0, 20)}...
          </div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl max-w-3xl text-white drop-shadow mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t.heroDesc}
          </motion.p>
          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <button
              className="px-6 py-3 rounded-full font-medium text-white shadow-lg transition"
              style={{ backgroundColor: '#4B80B3' }}
              onClick={() => navigate('/about')}
            >
              {t.getStarted}
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Risehands Section - Charity Categories */}
      <section className="w-full py-10 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Images */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 gap-6">
                {/* Main large image */}
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Education"
                    className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-[#4B80B3] text-white px-4 py-2 rounded-full text-base font-bold shadow-lg">
                    {t.educationLabel}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
                </div>
                
                {/* Secondary image */}
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Community Support"
                    className="w-full h-64 md:h-72 object-cover rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-[#4B80B3] text-white px-4 py-2 rounded-full text-base font-bold shadow-lg">
                    {t.risehandsLabel}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
                </div>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#4B80B3] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#4B80B3] rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-black rounded-full opacity-20 animate-bounce"></div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#4B80B3] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">🤲</span>
                  </div>
                  <span className="text-[#4B80B3] font-semibold text-lg">{t.aboutRisehandsLabel}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
                  {t.helpingVirtueTitle}
                </h2>
                
                <p className="text-black dark:text-white text-lg leading-relaxed mb-8">
                  {t.helpingVirtueDesc}
                </p>
              </div>

              {/* Charity Categories Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-black rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-[#4B80B3] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📚</span>
                  </div>
                  <span className="text-black dark:text-white font-medium">{t.charityCategories.education}</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-black rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-[#4B80B3] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🐕</span>
                  </div>
                  <span className="text-black dark:text-white font-medium">{t.charityCategories.pets}</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-black rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-[#4B80B3] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🏥</span>
                  </div>
                  <span className="text-black dark:text-white font-medium">{t.charityCategories.medical}</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-black rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-[#4B80B3] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📚</span>
                  </div>
                  <span className="text-black dark:text-white font-medium">{t.charityCategories.education}</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-black rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-[#4B80B3] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">💧</span>
                  </div>
                  <span className="text-black dark:text-white font-medium">{t.charityCategories.cleanWater}</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-black rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-[#4B80B3] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">⛪</span>
                  </div>
                  <span className="text-black dark:text-white font-medium">{t.charityCategories.church}</span>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="pt-4">
                <button 
                  className="bg-[#4B80B3] hover:bg-black text-white font-bold py-3 px-8 rounded-xl transition-colors duration-300 flex items-center space-x-2"
                  onClick={() => navigate('/about')}
                >
                  <span>{t.learnMoreBtn}</span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer - Charity Services Section */}
      <section className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Left side - Content */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="text-[#4B80B3] font-semibold text-lg mb-2 block">— {t.whatWeOfferLabel}</span>
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
                  {t.whatWeOfferTitle}
                </h2>
                <p className="text-black dark:text-white text-lg leading-relaxed mb-8">
                  {t.whatWeOfferDesc}
                </p>
              </div>

              <div className="pt-4">
                <button 
                  className="bg-[#4B80B3] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-300 flex items-center space-x-2"
                  onClick={() => navigate('/services')}
                >
                  <span>{t.allServicesBtn}</span>
                </button>
              </div>

              {/* Video Showcase Button */}
              <div className="pt-6">
                <button className="flex items-center space-x-3 text-[#4B80B3] hover:text-blue-700 font-semibold transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#4B80B3] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                  <span className="text-lg">VIDEO SHOWCASE</span>
                </button>
              </div>
            </motion.div>

            {/* Right side - Service Cards Grid */}
            <motion.div 
              className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              
              {/* Emergency Relief Card */}
              <motion.div 
                className="bg-[#4B80B3] p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.serviceCards.emergencyRelief.title}</h3>
                <p className="text-white leading-relaxed">
                  {t.serviceCards.emergencyRelief.desc}
                </p>
              </motion.div>

              {/* Education Support Card */}
              <motion.div 
                className="bg-white dark:bg-black p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-black dark:border-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#4B80B3]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#4B80B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{t.serviceCards.educationSupport.title}</h3>
                <p className="text-black dark:text-white leading-relaxed">
                  {t.serviceCards.educationSupport.desc}
                </p>
              </motion.div>

              {/* Healthcare Services Card */}
              <motion.div 
                className="bg-white dark:bg-black p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-black dark:border-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#4B80B3]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#4B80B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{t.serviceCards.healthcareServices.title}</h3>
                <p className="text-black dark:text-white leading-relaxed">
                  {t.serviceCards.healthcareServices.desc}
                </p>
              </motion.div>

              {/* Community Development Card */}
              <motion.div 
                className="bg-[#4B80B3] p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.serviceCards.communityDevelopment.title}</h3>
                <p className="text-white leading-relaxed">
                  {t.serviceCards.communityDevelopment.desc}
                </p>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      
      

      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white text-[#4B80B3] border border-[#4B80B3] rounded-full text-sm font-semibold mb-4">
              {t.realImpactLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              {t.storiesTitle.split(' ')[0]} <span className="text-[#4B80B3]">{t.storiesTitle.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl text-black dark:text-white max-w-3xl mx-auto">
              {t.storiesDesc}
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {storiesWithImages.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group dark:bg-gray-900">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#4B80B3] text-white text-sm font-semibold rounded-full">
                    {story.impact}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">{story.name}</h3>
                  <p className="text-black dark:text-white mb-1 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {story.location}
                  </p>
                  <p className="text-black dark:text-white mb-4 leading-relaxed">{story.story}</p>

                  {/* Before/After */}
                  <div className="bg-white dark:bg-black border border-black dark:border-white rounded-lg p-4">
                    <div className="flex justify-between items-center text-sm">
                      <div className="text-black dark:text-white">
                        <div className="font-semibold">{t.beforeLabel}</div>
                        <div>{story.before}</div>
                      </div>
                      <div className="text-[#4B80B3]">
                        <div className="font-semibold">{t.afterLabel}</div>
                        <div>{story.after}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>



      <section className="py-10 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white text-[#4B80B3] border border-[#4B80B3] rounded-full text-sm font-semibold mb-4">
              {t.takeActionLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Many Ways to <span className="text-[#4B80B3]">Help</span>
            </h2>
            <p className="text-xl text-black dark:text-white max-w-3xl mx-auto">
              Whether you donate, volunteer, or spread the word, every action counts in creating positive change.
            </p>
          </div>

          {/* Involvement Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {involvementOptions.map((option, index) => (
              <div key={index} className="group text-center">
                {/* Icon Circle */}
                <div className={`w-20 h-20 mx-auto mb-6 ${option.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{option.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">{option.title}</h3>
                <p className="text-black dark:text-white mb-6 leading-relaxed">{option.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#4B80B3] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`px-6 py-3 ${option.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  onClick={() => {
                    if (option.title === "Donate") {
                      setShowDonationForm(true);
                    } else if (option.buttonText === "Contact Us") {
                      navigate('/contact');
                    } else {
                      // Handle other button actions
                      console.log(`Clicked ${option.title}`);
                    }
                  }}
                >
                  {option.buttonText}
                </button>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Become Volunteer Section */}
      <section className="relative py-10 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={leena}
            alt="Volunteers in action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#4B80B3]/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t.volunteerTitle.split(' ')[0]} <span className="text-black">{t.volunteerTitle.split(' ').slice(1).join(' ')}</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.volunteerDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#4B80B3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Flexible scheduling</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#4B80B3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Training provided</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#4B80B3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Make lasting impact</span>
              </div>
            </div>
            
            {/* Volunteer Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 bg-white text-[#4B80B3] font-bold text-lg rounded-xl hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => navigate('/volunteer')}
              >
                {t.joinNowBtn}
              </button>
              
              <button 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-[#4B80B3] transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate('/about')}
              >
                {t.learnMoreBtn2}
              </button>
            </div>
            
            {/* Statistics */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-white text-lg">Active Volunteers</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-white text-lg">Community Programs</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">25K+</div>
                <div className="text-white text-lg">Lives Touched</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-black/20 rounded-full blur-xl"></div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 bg-black dark:from-[#4B80B3]/20 dark:via-black dark:to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-white">{t.ctaTitle}</h2>
            <p className="text-xl text-white dark:text-gray-300 mb-8 leading-relaxed">
              {t.ctaDesc}
            </p>
            <button
              className="inline-block px-8 py-4 rounded-full font-semibold text-white bg-[#4B80B3] shadow-lg transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-[#4B80B3] dark:hover:text-[#4B80B3]"
              onClick={() => setShowDonationForm(true)}
            >
              {t.ctaBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Donation Form Modal */}
      {showDonationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
                <button
                  onClick={() => setShowDonationForm(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleDonationSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={donationData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B80B3]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={donationData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B80B3]"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={donationData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B80B3]"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={donationData.address}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B80B3]"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Donation Amount *
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={donationData.amount}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B80B3]"
                    placeholder="Enter amount"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Donation Type
                  </label>
                  <select
                    name="donationType"
                    value={donationData.donationType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B80B3]"
                  >
                    <option value="one-time">One-time Donation</option>
                    <option value="monthly">Monthly Donation</option>
                    <option value="yearly">Yearly Donation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={donationData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B80B3]"
                    placeholder="Any message you'd like to include..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowDonationForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-[#4B80B3] text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Submit Donation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home1;