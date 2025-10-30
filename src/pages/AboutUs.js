import { motion } from "framer-motion";
import video from "../images/charity-about.mp4"; // You'll need to replace this with a charity-themed video
import volunteer1 from "../images/team1.jpg";
import volunteer2 from "../images/team2.jpg";
import volunteer3 from "../images/team3.jpg";
import volunteer4 from "../images/team4.jpg";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const translations = {
  en: {
    heroTitle: "Transforming Lives. Building Hope.",
    heroDesc: "Every action creates a ripple of change. Join us in making a lasting impact.",
    missionTitle: "Our Mission & Impact",
    mission: "To create sustainable change through community empowerment, education, and compassionate action.",
    guidingPrinciples: "Our Approach",
    coreValues: "Our Impact Areas",
    ourCommitment: "Our Promise",
    ourCommitmentDesc: "We are committed to transparency, accountability, and measurable results in every project.",
    impactApproachTitle: "Our Impact Process",
    impactApproachDesc: "A proven methodology that creates sustainable change in communities",
    commitmentTitle: "Our Commitment to Change",
    commitmentDesc: "The standards we uphold to ensure every donation creates maximum impact",
    pledgeTitle: "Our Promise to Supporters",
    pledgeDesc: "We believe in complete transparency and accountability. Every dollar you donate is tracked and reported, ensuring your contribution creates the change you want to see in the world.",
    teamTitle: "Meet Our Change Makers",
    teamDesc: "Passionate. Dedicated. Making a Difference.",
    ctaTitle: "Ready to Make a Difference?",
    ctaDesc: "Join thousands of supporters creating lasting change. Your contribution transforms lives.",
    ctaBtn: "Donate Now",
    impactStats: [
      { number: "50K+", label: "Lives Impacted" },
      { number: "127", label: "Communities Served" },
      { number: "15+", label: "Countries" },
      { number: "98%", label: "Funds to Programs" }
    ],
    teamMembers: [
      {
        name: 'Sarah Johnson',
        role: 'Executive Director',
        image: volunteer1,
        bio: 'Leading our global initiatives with 15+ years in humanitarian work and community development.',
      },
      {
        name: 'David Chen',
        role: 'Program Director',
        image: volunteer2,
        bio: 'Oversees our education and empowerment programs across three continents.',
      },
      {
        name: 'Maria Rodriguez',
        role: 'Community Outreach',
        image: volunteer3,
        bio: 'Builds partnerships with local communities to ensure culturally relevant solutions.',
      },
      {
        name: 'James Wilson',
        role: 'Impact Assessment',
        image: volunteer4,
        bio: 'Measures and reports on the real-world impact of our programs and initiatives.',
      },
    ],
    commitments: [
      {
        title: "Financial Transparency",
        description: "Every dollar is accounted for with detailed reports on how funds are utilized.",
        percentage: 98
      },
      {
        title: "Community Partnership",
        description: "We work with local communities to develop sustainable, culturally appropriate solutions.",
        percentage: 95
      },
      {
        title: "Measurable Impact",
        description: "Regular monitoring and evaluation ensure our programs create real, lasting change.",
        percentage: 92
      },
      {
        title: "Sustainable Solutions",
        description: "We focus on long-term solutions that empower communities to thrive independently.",
        percentage: 90
      }
    ],
    missionData: {
      title: "Our Methodology",
      mission: "Creating lasting change through community-led development and sustainable practices.",
      principles: [
        {
          title: "Community First",
          description: "We listen to and work alongside communities to develop solutions that meet their specific needs.",
          icon: "👥"
        },
        {
          title: "Sustainable Impact",
          description: "Our programs are designed for long-term success and community ownership.",
          icon: "🌱"
        },
        {
          title: "Evidence-Based",
          description: "We use data and research to guide our programs and measure our impact.",
          icon: "📊"
        },
        {
          title: "Collaborative Spirit",
          description: "Partnering with local organizations, governments, and communities for greater impact.",
          icon: "🤝"
        }
      ],
      coreValues: [
        {
          title: "Empowerment",
          description: "Equipping communities with tools and knowledge for self-sufficiency."
        },
        {
          title: "Compassion",
          description: "Approaching every challenge with empathy and understanding."
        },
        {
          title: "Integrity",
          description: "Maintaining the highest standards of transparency and accountability."
        },
        {
          title: "Innovation",
          description: "Continuously improving our approaches to maximize impact."
        }
      ]
    },
    steps: [
      {
        title: "Community Assessment",
        description: "We begin by listening to community needs and conducting thorough needs assessments.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25be85] text-white text-xl shadow-lg">👂</span>
        )
      },
      {
        title: "Program Design",
        description: "Co-creating sustainable solutions with community input and expert knowledge.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#25be85] text-xl shadow-lg border border-[#25be85]">📋</span>
        )
      },
      {
        title: "Implementation",
        description: "Working hand-in-hand with communities to bring solutions to life.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25be85] text-white text-xl shadow-lg">🚀</span>
        )
      },
      {
        title: "Monitoring & Evaluation",
        description: "Tracking progress and making data-driven improvements to our programs.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#25be85] text-xl shadow-lg border border-[#25be85]">📈</span>
        )
      },
      {
        title: "Sustainable Transition",
        description: "Ensuring communities can maintain and grow programs independently.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25be85] text-white text-xl shadow-lg">🌟</span>
        )
      }
    ],
    // Missing properties
    title: "About Our Organization",
    subtitle: "Dedicated to Creating Lasting Change",
    foundingStory: {
      title: "Our Foundation Story",
      content: "Founded in 2010, our organization began with a simple belief: every person deserves access to basic human needs and opportunities to thrive. What started as a small community initiative has grown into a global movement for positive change.",
      quote: "We believe that small actions, when multiplied by millions of people, can transform the world.",
      founderName: "— Founder & CEO",
      founderRole: "Executive Director"
    },
    futureVision: {
      title: "Our Vision for Tomorrow",
      content: "Looking ahead, we're committed to expanding our impact and reaching even more communities in need.",
      goals: [
        "Reach 1 million lives by 2030",
        "Establish programs in 50 countries",
        "Achieve 100% program sustainability",
        "Build lasting community partnerships"
      ]
    },
    steps: [
      {
        title: "Community Assessment",
        description: "We begin by listening to community needs and conducting thorough needs assessments.",
        icon: "👂"
      },
      {
        title: "Program Design",
        description: "Co-creating sustainable solutions with community input and expert knowledge.",
        icon: "📋"
      },
      {
        title: "Implementation",
        description: "Working hand-in-hand with communities to bring solutions to life.",
        icon: "🚀"
      },
      {
        title: "Monitoring & Evaluation",
        description: "Tracking progress and making data-driven improvements to our programs.",
        icon: "📈"
      },
      {
        title: "Sustainable Transition",
        description: "Ensuring communities can maintain and grow programs independently.",
        icon: "🌟"
      }
    ],
    impactNumbers: [
      { number: "50,000+", label: "Lives Transformed", description: "Direct beneficiaries of our programs" },
      { number: "127", label: "Communities", description: "Active program locations worldwide" },
      { number: "15", label: "Countries", description: "Where we operate and create change" },
      { number: "98%", label: "Program Efficiency", description: "Of funds go directly to programs" }
    ],
    milestones: [
      {
        year: "2010",
        title: "Foundation Established",
        description: "Started with a vision to create lasting change in underserved communities.",
        achievements: ["First community program launched", "Initial team of 5 volunteers"]
      },
      {
        year: "2015",
        title: "International Expansion",
        description: "Expanded operations to serve communities across multiple countries.",
        achievements: ["Operations in 5 countries", "50+ community partnerships", "First international award"]
      },
      {
        year: "2020",
        title: "50,000 Lives Impact",
        description: "Reached milestone of transforming 50,000+ lives through our programs.",
        achievements: ["50,000+ direct beneficiaries", "100+ successful projects", "95% program success rate"]
      },
      {
        year: "2025",
        title: "Global Recognition",
        description: "Received international recognition for sustainable development practices.",
        achievements: ["UN Partnership Award", "15 countries served", "98% fund efficiency"]
      }
    ],
    values: [
      { title: "Integrity", description: "We operate with transparency and accountability in all our actions." },
      { title: "Empowerment", description: "We believe in empowering communities to create their own solutions." },
      { title: "Sustainability", description: "Our programs are designed for long-term impact and community ownership." },
      { title: "Collaboration", description: "We work in partnership with local communities and organizations." }
    ]
  },
  ar: {
    heroTitle: "تحويل الحياة. بناء الأمل.",
    heroDesc: "كل فعل يخلق موجة من التغيير. انضم إلينا في صنع تأثير دائم.",
    missionTitle: "مهمتنا وتأثيرنا",
    mission: "خلق تغيير مستدام من خلال تمكين المجتمع والتعليم والعمل الرحيم.",
    guidingPrinciples: "نهجنا",
    coreValues: "مجالات تأثيرنا",
    ourCommitment: "وعدنا",
    ourCommitmentDesc: "نحن ملتزمون بالشفافية والمساءلة والنتائج القابلة للقياس في كل مشروع.",
    impactApproachTitle: "عملية التأثير لدينا",
    impactApproachDesc: "منهجية مثبتة تخلق تغييرًا مستدامًا في المجتمعات",
    commitmentTitle: "التزامنا بالتغيير",
    commitmentDesc: "المعايير التي نلتزم بها لضمان أن كل تبرع يخلق أقصى تأثير",
    pledgeTitle: "وعدنا للمانحين",
    pledgeDesc: "نؤمن بالشفافية الكاملة والمساءلة. يتم تتبع كل دولار تتبرع به والإبلاغ عنه، مما يضمن أن مساهمتك تخلق التغيير الذي تريد رؤيته في العالم.",
    teamTitle: "تعرف على صناع التغيير",
    teamDesc: "متحمسون. مخلصون. يصنعون فرقًا.",
    ctaTitle: "مستعد لصنع فرق؟",
    ctaDesc: "انضم إلى آلاف الداعمين الذين يخلقون تغييرًا دائمًا. تبرعك يحول الحياة.",
    ctaBtn: "تبرع الآن",
    impactStats: [
      { number: "50 ألف+", label: "حياة تأثرت" },
      { number: "127", label: "مجتمع تم خدمته" },
      { number: "15+", label: "دولة" },
      { number: "98%", label: "الأموال للبرامج" }
    ],
    teamMembers: [
      {
        name: 'سارة جونسون',
        role: 'المديرة التنفيذية',
        image: volunteer1,
        bio: 'تقود مبادراتنا العالمية مع أكثر من 15 عامًا في العمل الإنساني وتنمية المجتمع.',
      },
      {
        name: 'ديفيد تشين',
        role: 'مدير البرامج',
        image: volunteer2,
        bio: 'يشرف على برامج التعليم والتمكين في ثلاث قارات.',
      },
      {
        name: 'ماريا رودريغيز',
        role: 'التواصل المجتمعي',
        image: volunteer3,
        bio: 'تبني شراكات مع المجتمعات المحلية لضمان حلول مناسبة ثقافيًا.',
      },
      {
        name: 'جيمس ويلسون',
        role: 'تقييم الأثر',
        image: volunteer4,
        bio: 'يقيس ويبلغ عن التأثير الحقيقي لبرامجنا ومبادراتنا.',
      },
    ],
    commitments: [
      {
        title: "الشفافية المالية",
        description: "يتم محاسبة كل دولار مع تقارير مفصلة عن كيفية استخدام الأموال.",
        percentage: 98
      },
      {
        title: "الشراكة المجتمعية",
        description: "نعمل مع المجتمعات المحلية لتطوير حلول مستدامة ومناسبة ثقافيًا.",
        percentage: 95
      },
      {
        title: "تأثير قابل للقياس",
        description: "ضمان المراقبة والتقييم المنتظم لبرامجنا تخلق تغييرًا حقيقيًا ودائمًا.",
        percentage: 92
      },
      {
        title: "حلول مستدامة",
        description: "نركز على الحلول طويلة المدى التي تمكّن المجتمعات من الازدهار بشكل مستقل.",
        percentage: 90
      }
    ],
    missionData: {
      title: "منهجيتنا",
      mission: "خلق تغيير دائم من خلال التنمية بقيادة المجتمع والممارسات المستدامة.",
      principles: [
        {
          title: "المجتمع أولاً",
          description: "نستمع إلى المجتمعات ونعمل معها لتطوير حلول تلبي احتياجاتها المحددة.",
          icon: "👥"
        },
        {
          title: "تأثير مستدام",
          description: "تم تصميم برامجنا للنجاح طويل الأمد وملكية المجتمع.",
          icon: "🌱"
        },
        {
          title: "قائم على الأدلة",
          description: "نستخدم البيانات والأبحاث لتوجيه برامجنا وقياس تأثيرنا.",
          icon: "📊"
        },
        {
          title: "روح التعاون",
          description: "الشراكة مع المنظمات المحلية والحكومات والمجتمعات لتأثير أكبر.",
          icon: "🤝"
        }
      ],
      coreValues: [
        {
          title: "التمكين",
          description: "تزويد المجتمعات بالأدوات والمعرفة للاكتفاء الذاتي."
        },
        {
          title: "التعاطف",
          description: "معالجة كل تحدي بتعاطف وفهم."
        },
        {
          title: "النزاهة",
          description: "الحفاظ على أعلى معايير الشفافية والمساءلة."
        },
        {
          title: "الابتكار",
          description: "تحسين أساليبنا باستمرار لتعظيم التأثير."
        }
      ]
    },
    steps: [
      {
        title: "تقييم المجتمع",
        description: "نبدأ بالاستماع إلى احتياجات المجتمع وإجراء تقييمات شاملة للاحتياجات.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25be85] text-white text-xl shadow-lg">👂</span>
        )
      },
      {
        title: "تصميم البرنامج",
        description: "الاشتراك في ابتكار حلول مستدامة مع مدخلات المجتمع والمعرفة الخبيرة.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#25be85] text-xl shadow-lg border border-[#25be85]">📋</span>
        )
      },
      {
        title: "التنفيذ",
        description: "العمل يدًا بيد مع المجتمعات لإحياء الحلول.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25be85] text-white text-xl shadow-lg">🚀</span>
        )
      },
      {
        title: "المراقبة والتقييم",
        description: "تتبع التقدم وإجراء تحسينات تعتمد على البيانات لبرامجنا.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#25be85] text-xl shadow-lg border border-[#25be85]">📈</span>
        )
      },
      {
        title: "الانتقال المستدام",
        description: "ضمان قدرة المجتمعات على الحفاظ على برامجها وتنميتها بشكل مستقل.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25be85] text-white text-xl shadow-lg">🌟</span>
        )
      }
    ]
  },
  he: {
    heroTitle: "משנים חיים. בונים תקווה.",
    heroDesc: "כל פעולה יוצרת אדווה של שינוי. הצטרפו אלינו ליצירת השפעה מתמשכת.",
    missionTitle: "המשימה וההשפעה שלנו",
    mission: "ליצור שינוי בר-קיימא באמצעות העצמה קהילתית, חינוך ופעולה מלאת חמלה.",
    guidingPrinciples: "הגישה שלנו",
    coreValues: "תחומי ההשפעה שלנו",
    ourCommitment: "ההבטחה שלנו",
    ourCommitmentDesc: "אנו מחויבים לשקיפות, אחריותיות ותוצאות מדידות בכל פרויקט.",
    impactApproachTitle: "תהליך ההשפעה שלנו",
    impactApproachDesc: "מתודולוגיה מוכחת שיוצרת שינוי בר-קיימא בקהילות",
    commitmentTitle: "המחויבות שלנו לשינוי",
    commitmentDesc: "הסטנדרטים שאנו מקיימים כדי להבטיח שכל תרומה יוצרת השפעה מקסימלית",
    pledgeTitle: "ההבטחה שלנו לתומכים",
    pledgeDesc: "אנו מאמינים בשקיפות מלאה ואחריותיות. כל דולר שאת/ה תורם/ת מנוטר ומדווח, ומוודא שהתרומה שלך יוצרת את השינוי שאת/ה רוצה לראות בעולם.",
    teamTitle: "הכירו את יוצרי השינוי",
    teamDesc: "מלאי תשוקה. מחויבים. יוצרים שינוי.",
    ctaTitle: "מוכנים ליצור שינוי?",
    ctaDesc: "הצטרפו לאלפי תומכים שיוצרים שינוי מתמשך. התרומה שלך משנה חיים.",
    ctaBtn: "תרמו עכשיו",
    impactStats: [
      { number: "50 אלף+", label: "חיים שהושפעו" },
      { number: "127", label: "קהילות שמומשו" },
      { number: "15+", label: "מדינות" },
      { number: "98%", label: "כספים לתוכניות" }
    ],
    teamMembers: [
      {
        name: 'שרה ג\'ונסון',
        role: 'מנכ"לית',
        image: volunteer1,
        bio: 'מובילה את היוזמות הגלובליות שלנו עם מעל 15 שנה בעבודה הומניטרית ופיתוח קהילתי.',
      },
      {
        name: 'דייויד צ\'ן',
        role: 'מנהל תוכניות',
        image: volunteer2,
        bio: 'מפקח על תוכניות החינוך וההעצמה שלנו בשלוש יבשות.',
      },
      {
        name: 'מריה רודריגז',
        role: 'outreach קהילתי',
        image: volunteer3,
        bio: 'בונה שותפויות עם קהילות מקומיות כדי להבטיח פתרונות תרבותיים רלוונטיים.',
      },
      {
        name: 'ג\'יימס וילסון',
        role: 'הערכת השפעה',
        image: volunteer4,
        bio: 'מודד ומדווח על ההשפעה האמיתית של התוכניות והיוזמות שלנו.',
      },
    ],
    commitments: [
      {
        title: "שקיפות פיננסית",
        description: "כל דולר מנוטר עם דוחות מפורטים על אופן השימוש בכספים.",
        percentage: 98
      },
      {
        title: "שותפות קהילתית",
        description: "אנו עובדים עם קהילות מקומיות כדי לפתח פתרונות בני-קיימא ותואמים תרבותית.",
        percentage: 95
      },
      {
        title: "השפעה מדידה",
        description: "ניטור והערכה סדירים מבטיחים שתוכניותינו יוצרות שינוי אמיתי ומתמשך.",
        percentage: 92
      },
      {
        title: "פתרונות בני-קיימא",
        description: "אנו מתמקדים בפתרונות ארוכי טווח המעצימים קהילות לשגשג באופן עצמאי.",
        percentage: 90
      }
    ],
    missionData: {
      title: "המתודולוגיה שלנו",
      mission: "יצירת שינוי מתמשך באמצעות פיתוח בהובלה קהילתית ושיטות עבודה ברות-קיימא.",
      principles: [
        {
          title: "הקהילה ראשונה",
          description: "אנו מקשיבים ועובדים לצד קהילות כדי לפתח פתרונות העונים על צרכיהם הספציפיים.",
          icon: "👥"
        },
        {
          title: "השפעה בת-קיימא",
          description: "התוכניות שלנו מתוכננות להצלחה ארוכת טווח ובעלות קהילתית.",
          icon: "🌱"
        },
        {
          title: "מבוסס ראיות",
          description: "אנו משתמשים בנתונים ומחקר כדי להנחות את התוכניות שלנו ולמדוד את ההשפעה שלנו.",
          icon: "📊"
        },
        {
          title: "רוח שיתופית",
          description: "שותפות עם ארגונים מקומיים, ממשלות וקהילות להשפעה גדולה יותר.",
          icon: "🤝"
        }
      ],
      coreValues: [
        {
          title: "העצמה",
          description: "מציידים קהילות בכלים וידע לעצמאות."
        },
        {
          title: "חמלה",
          description: "גישה לכל אתגר באמפתיה והבנה."
        },
        {
          title: "יושרה",
          description: "שמירה על הסטנדרטים הגבוהים ביותר של שקיפות ואחריותיות."
        },
        {
          title: "חדשנות",
          description: "שיפור מתמשך של הגישות שלנו למקסום ההשפעה."
        }
      ]
    },
    steps: [
      {
        title: "הערכת קהילה",
        description: "אנו מתחילים בהקשבה לצורכי הקהילה וביצוע הערכות צרכים מקיפות.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25be85] text-white text-xl shadow-lg">👂</span>
        )
      },
      {
        title: "עיצוב תוכנית",
        description: "שיתוף פעולה ביצירת פתרונות בני-קיימא עם קלט מהקהילה וידע מקצועי.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#25be85] text-xl shadow-lg border border-[#25be85]">📋</span>
        )
      },
      {
        title: "יישום",
        description: "עבודה יד ביד עם קהילות להחייאת פתרונות.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25be85] text-white text-xl shadow-lg">🚀</span>
        )
      },
      {
        title: "ניטור והערכה",
        description: "מעקב אחר התקדמות וביצוע שיפורים מבוססי נתונים לתוכניות שלנו.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#25be85] text-xl shadow-lg border border-[#25be85]">📈</span>
        )
      },
      {
        title: "מעבר בר-קיימא",
        description: "הבטחה שהקהילות יכולות לתחזק ולפתח תוכניות באופן עצמאי.",
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25be85] text-white text-xl shadow-lg">🌟</span>
        )
      }
    ]
  }
};

const AboutUs = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [animatedPercentages, setAnimatedPercentages] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const handleLangChange = (e) => {
      setLanguage(e.detail || localStorage.getItem("language") || "en");
    };
    window.addEventListener("languageChange", handleLangChange);
    return () => window.removeEventListener("languageChange", handleLangChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const stepsLength = translations[language]?.steps?.length || 5;
      setActiveStep((prev) => (prev + 1) % stepsLength);
    }, 4000);
    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervals = (translations[language]?.commitments || []).map((commitment, index) => {
        return setInterval(() => {
          setAnimatedPercentages(prev => {
            const newPercentages = [...prev];
            if (newPercentages[index] < commitment.percentage) {
              newPercentages[index] += 1;
            }
            return newPercentages;
          });
        }, 30);
      });
      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [isVisible, language]);

  const t = translations[language] || translations.en;

  // Safe access helper function
  const getSafeText = (path, fallback = 'Loading...') => {
    try {
      return path.split('.').reduce((obj, key) => obj?.[key], t) || fallback;
    } catch {
      return fallback;
    }
  };
  const [activeMilestone, setActiveMilestone] = useState(0);


  const storyTranslations = {
    en: {
      title: "Our Story",
      subtitle: "A Journey of Compassion and Impact",
      description: "From humble beginnings to a global movement, our story is written in the lives we've touched and the communities we've transformed.",
      foundingStory: {
        title: "How It All Began",
        content: "In 2010, a group of passionate volunteers came together with a shared vision: to create meaningful change in underserved communities. What started as a small local initiative has grown into an international organization transforming thousands of lives.",
        founderQuote: "We believed that even the smallest act of kindness could create ripples of change. Today, we're honored to see those ripples become waves of transformation.",
        founderName: "Sarah Johnson",
        founderRole: "Founder & Executive Director"
      },
      milestones: [
        {
          year: "2010",
          title: "The Beginning",
          description: "Founded with just 5 volunteers working in a single community",
          icon: "🌱",
          achievements: ["First community center established", "50 families supported", "Local partnerships formed"]
        },
        {
          year: "2013",
          title: "Growing Roots",
          description: "Expanded to 3 countries with dedicated local teams",
          icon: "🚀",
          achievements: ["International programs launched", "100+ regular volunteers", "First major funding secured"]
        },
        {
          year: "2016",
          title: "Measuring Impact",
          description: "Implemented comprehensive monitoring and evaluation systems",
          icon: "📊",
          achievements: ["Impact measurement framework established", "10,000+ lives impacted", "Research partnerships formed"]
        },
        {
          year: "2020",
          title: "Digital Transformation",
          description: "Adapted programs for the digital age while maintaining community focus",
          icon: "💻",
          achievements: ["Virtual volunteering programs", "Digital literacy initiatives", "Online fundraising platform"]
        },
        {
          year: "2024",
          title: "Global Movement",
          description: "Now serving communities across 15+ countries with sustainable programs",
          icon: "🌍",
          achievements: ["50,000+ lives transformed", "127 active communities", "98% program satisfaction rate"]
        }
      ],
      values: [
        {
          title: "Community First",
          description: "Every decision starts with listening to community needs and aspirations.",
          icon: "👥"
        },
        {
          title: "Sustainable Impact",
          description: "We build programs that communities can maintain and grow independently.",
          icon: "🌱"
        },
        {
          title: "Collaborative Spirit",
          description: "Partnering with local organizations amplifies our collective impact.",
          icon: "🤝"
        },
        {
          title: "Transparent Action",
          description: "We believe in complete openness about our work, finances, and impact.",
          icon: "🔍"
        }
      ],
      impactNumbers: [
        { number: "50K+", label: "Lives Transformed" },
        { number: "127", label: "Communities Served" },
        { number: "15+", label: "Countries" },
        { number: "2.5M+", label: "Meals Provided" },
        { number: "45", label: "Schools Built" },
        { number: "98%", label: "Satisfaction Rate" }
      ],
      futureVision: {
        title: "Our Vision for the Future",
        content: "We envision a world where every community has the resources, knowledge, and support to thrive independently. Our goal is to expand our sustainable development model to reach 1 million people by 2030 while maintaining our commitment to deep, meaningful impact.",
        goals: [
          "Reach 100 new communities by 2026",
          "Launch climate resilience programs",
          "Expand digital education access",
          "Strengthen local leadership development"
        ]
      }
    },
    ar: {
      title: "قصتنا",
      subtitle: "رحلة من التعاطف والتأثير",
      description: "من بدايات متواضعة إلى حركة عالمية، تكتب قصتنا في الحياة التي لمستها والمجتمعات التي حولناها.",
      foundingStory: {
        title: "كيف بدأ كل شيء",
        content: "في عام 2010، اجتمعت مجموعة من المتطوعين المتحمسين برؤية مشتركة: خلق تغيير هادف في المجتمعات المحرومة. ما بدأ كمبادرة محلية صغيرة نما ليصبح منظمة دولية تحول آلاف الأرواح.",
        founderQuote: "كنا نعتقد أن حتى أصغر فعل من اللطف يمكن أن يخلق تموجات من التغيير. اليوم، نشرف برؤية هذه التموجات تصبح موجات من التحول.",
        founderName: "سارة جونسون",
        founderRole: "المؤسس والمدير التنفيذي"
      },
      milestones: [
        {
          year: "2010",
          title: "البداية",
          description: "تأسست بـ 5 متطوعين فقط يعملون في مجتمع واحد",
          icon: "🌱",
          achievements: ["إنشاء أول مركز مجتمعي", "دعم 50 عائلة", "تشكيل شراكات محلية"]
        },
        {
          year: "2013",
          title: "تأسيس الجذور",
          description: "التوسع إلى 3 دول مع فرق محلية مخصصة",
          icon: "🚀",
          achievements: ["إطلاق برامج دولية", "100+ متطوع منتظم", "تأمين أول تمويل كبير"]
        },
        {
          year: "2016",
          title: "قياس التأثير",
          description: "تنفيذ أنظمة شاملة للمراقبة والتقييم",
          icon: "📊",
          achievements: ["إنشاء إطار قياس التأثير", "10,000+ حياة تأثرت", "تشكيل شراكات بحثية"]
        },
        {
          year: "2020",
          title: "التحول الرقمي",
          description: "تكييف البرامج للعصر الرقمي مع الحفاظ على التركيز المجتمعي",
          icon: "💻",
          achievements: ["برامج التطوع الافتراضية", "مبادرات محو الأمية الرقمية", "منصة جمع التبرعات عبر الإنترنت"]
        },
        {
          year: "2024",
          title: "الحركة العالمية",
          description: "نخدم الآن مجتمعات في 15+ دولة ببرامج مستدامة",
          icon: "🌍",
          achievements: ["50,000+ حياة تحولت", "127 مجتمع نشط", "98% معدل رضا عن البرامج"]
        }
      ],
      values: [
        {
          title: "المجتمع أولاً",
          description: "كل قرار يبدأ بالاستماع لاحتياجات وتطلعات المجتمع.",
          icon: "👥"
        },
        {
          title: "تأثير مستدام",
          description: "نبني برامج يمكن للمجتمعات الحفاظ عليها وتنميتها بشكل مستقل.",
          icon: "🌱"
        },
        {
          title: "روح التعاون",
          description: "الشراكة مع المنظمات المحلية تضخم تأثيرنا الجماعي.",
          icon: "🤝"
        },
        {
          title: "عمل شفاف",
          description: "نؤمن بالانفتاح الكامل حول عملنا وتمويلنا وتأثيرنا.",
          icon: "🔍"
        }
      ],
      impactNumbers: [
        { number: "50 ألف+", label: "حياة تحولت" },
        { number: "127", label: "مجتمع تمت خدمته" },
        { number: "15+", label: "دولة" },
        { number: "2.5 مليون+", label: "وجبة مقدمة" },
        { number: "45", label: "مدرسة تم بناؤها" },
        { number: "98%", label: "معدل الرضا" }
      ],
      futureVision: {
        title: "رؤيتنا للمستقبل",
        content: "نتصور عالماً حيث يكون لكل مجتمع الموارد والمعرفة والدعم للازدهار بشكل مستقل. هدفنا هو توسيع نموذج التنمية المستدامة للوصول إلى مليون شخص بحلول 2030 مع الحفاظ على التزامنا بتأثير عميق وهادف.",
        goals: [
          "الوصول إلى 100 مجتمع جديد بحلول 2026",
          "إطلاق برامج المرونة المناخية",
          "توسيع الوصول إلى التعليم الرقمي",
          "تعزيز تطوير القيادة المحلية"
        ]
      }
    },
    he: {
      title: "הסיפור שלנו",
      subtitle: "מסע של חמלה והשפעה",
      description: "מתחילות צנועות לתנועה גלובלית, הסיפור שלנו כתוב בחיים שנגענו בהם ובקהילות שהשתננו.",
      foundingStory: {
        title: "איך הכל התחיל",
        content: "בשנת 2010, קבוצה של מתנדבים נלהבים התאספו עם חזון משותף: ליצור שינוי משמעותי בקהילות מוחלשות. מה שהתחיל כיוזמה מקומית קטנה צמח לארגון בינלאומי שמשנה אלפי חיים.",
        founderQuote: "האמנו שאפילו מעשה הקטן ביותר של טוב לב יכול ליצור אדוות של שינוי. היום, אנחנו מכובדים לראות את האדוות האלה הופכות לגלים של שינוי.",
        founderName: "שרה ג'ונסון",
        founderRole: "מייסדת ומנכ\"לית"
      },
      milestones: [
        {
          year: "2010",
          title: "ההתחלה",
          description: "נוסד עם 5 מתנדבים בלבד שעבדו בקהילה אחת",
          icon: "🌱",
          achievements: ["המרכז הקהילתי הראשון הוקם", "50 משפחות נתמכו", "שותפויות מקומיות נוצרו"]
        },
        {
          year: "2013",
          title: "הנבטים",
          description: "התרחב ל-3 מדינות עם צוותים מקומיים ייעודיים",
          icon: "🚀",
          achievements: ["תוכניות בינלאומיות הושקו", "100+ מתנדבים קבועים", "מימון ראשוני גדול הושג"]
        },
        {
          year: "2016",
          title: "מדידת השפעה",
          description: "יושמו מערכות ניטור והערכה מקיפות",
          icon: "📊",
          achievements: ["מסגרת מדידת השפעה הוקמה", "10,000+ חיים הושפעו", "שותפויות מחקר נוצרו"]
        },
        {
          year: "2020",
          title: "טרנספורמציה דיגיטלית",
          description: "תוכניות הותאמו לעידן הדיגיטלי תוך שמירה על מיקוד קהילתי",
          icon: "💻",
          achievements: ["תוכניות התנדבות וירטואליות", "יוזמות אוריינות דיגיטלית", "פלטפורמת גיוס כספים מקוונת"]
        },
        {
          year: "2024",
          title: "תנועה גלובלית",
          description: "כעת משרתים קהילות ב-15+ מדינות עם תוכניות ברות-קיימא",
          icon: "🌍",
          achievements: ["50,000+ חיים השתנו", "127 קהילות פעילות", "98% שביעות רצון מהתוכניות"]
        }
      ],
      values: [
        {
          title: "הקהילה ראשונה",
          description: "כל החלטה מתחילה בהקשבה לצרכי הקהילה ושאיפות.",
          icon: "👥"
        },
        {
          title: "השפעה בת-קיימא",
          description: "אנו בונים תוכניות שהקהילות יכולות לתחזק ולפתח באופן עצמאי.",
          icon: "🌱"
        },
        {
          title: "רוח שיתופית",
          description: "שותפות עם ארגונים מקומיים מגבירה את ההשפעה הקולקטיבית שלנו.",
          icon: "🤝"
        },
        {
          title: "פעולה שקופה",
          description: "אנו מאמינים בשקיפות מלאה לגבי העבודה, הכספים וההשפעה שלנו.",
          icon: "🔍"
        }
      ],
      impactNumbers: [
        { number: "50 אלף+", label: "חיים שהשתנו" },
        { number: "127", label: "קהילות שמומשו" },
        { number: "15+", label: "מדינות" },
        { number: "2.5 מיליון+", label: "ארוחות סופקו" },
        { number: "45", label: "בתי ספר נבנו" },
        { number: "98%", label: "שביעות רצון" }
      ],
      futureVision: {
        title: "החזון שלנו לעתיד",
        content: "אנו מדמיינים עולם שבו לכל קהילה יש את המשאבים, הידע והתמיכה לשגשג באופן עצמאי. המטרה שלנו היא להרחיב את מודל הפיתוח בר-הקיימא שלנו כדי להגיע למיליון אנשים עד 2030 תוך שמירה על המחויבות שלנו להשפעה עמוקה ומשמעותית.",
        goals: [
          "להגיע ל-100 קהילות חדשות עד 2026",
          "להשיק תוכניות חוסן אקלים",
          "להרחיב את הגישה לחינוך דיגיטלי",
          "לחזק את פיתוח המנהיגות המקומית"
        ]
      }
    }
  };



  return (
    <div className="w-screen min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-screen h-screen overflow-hidden bg-white dark:bg-gray-900 mb-10">
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
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/60 to-blue-900/40 transition-colors duration-500"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-2xl max-w-3xl text-white drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t.heroDesc}
          </motion.p>

          {/* Impact Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {(t.impactStats || []).map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.button
            onClick={() => navigate('/donate')}
            className="mt-12 px-8 py-4 bg-[#4B80B3] text-white font-bold rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {t.ctaBtn}
          </motion.button>
        </div>
      </section>




      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.title || "About Our Organization"}
            </h2>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
              {t.subtitle || "Dedicated to Creating Lasting Change"}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t.missionDesc || "Learn about our mission and impact in communities worldwide."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Founding Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  ✨
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.foundingStory?.title || "Our Foundation Story"}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t.foundingStory?.content || "Founded with a vision to create meaningful change in communities worldwide."}
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-200 italic mb-4">
                  "{t.foundingStory?.quote || "We believe in the power of community-driven change."}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.foundingStory?.founderName || "— Founder"}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">
                    {t.foundingStory?.founderRole || "Executive Director"}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Our Approach Overview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.missionData?.title || "Our Approach"}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t.missionData?.mission || t.mission || "Creating lasting change through community-led development and sustainable practices."}
              </p>

              {/* Core Principles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(t.missionData?.principles || []).map((principle, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start">
                      <div className="text-2xl mr-3 mt-1">{principle.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {principle.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Journey Through The Years
            </h3>

            <div className="max-w-4xl mx-auto">
              {/* Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-blue-300 dark:bg-blue-700 h-full"></div>

                {(t.milestones || []).map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col md:flex-row items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-4 md:mb-0`}>
                      <div
                        className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 ${activeMilestone === index
                            ? 'border-blue-500 shadow-xl scale-105'
                            : 'border-blue-200 dark:border-blue-800 hover:border-blue-400'
                          }`}
                        onClick={() => setActiveMilestone(index)}
                      >
                        <div className="flex items-center mb-4">
                          <div className="text-2xl mr-3">{milestone.icon}</div>
                          <div>
                            <div className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                              {milestone.year}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                              {milestone.title}
                            </h4>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {milestone.description}
                        </p>

                        {/* Achievements */}
                        <div className={`space-y-2 transition-all duration-300 ${activeMilestone === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                          }`}>
                          {(milestone.achievements || []).map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 -translate-y-1 z-10">
                      <div
                        className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${activeMilestone === index
                            ? 'bg-blue-500 border-blue-500 scale-125'
                            : 'bg-white dark:bg-gray-800 border-blue-400'
                          }`}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Guiding Values
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(t.values || []).map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -10, scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-center mb-6">
                {t.futureVision?.title || "Our Vision for Tomorrow"}
              </h3>
              <p className="text-lg text-center mb-8 text-white/90 leading-relaxed">
                {t.futureVision?.content || "We're committed to expanding our impact and reaching more communities."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(t.futureVision?.goals || ["Expand our reach", "Increase impact", "Build partnerships", "Create sustainability"]).map((goal, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">
                      ✓
                    </div>
                    <span className="text-white font-medium">{goal}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#4B80B3' }}></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#4B80B3' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#4B80B3' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-block px-6 py-2 rounded-full text-sm font-semibold text-white mb-6"
              style={{ backgroundColor: '#4B80B3' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Amazing Team
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
              {t.teamTitle}
            </h2>
            
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#4B80B3' }}></div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.teamDesc}
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {(t.teamMembers || []).map((member, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Card */}
                <div className="relative bg-white dark:bg-black rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-3">
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex space-x-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Role Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm" style={{ backgroundColor: 'rgba(75, 128, 179, 0.9)' }}>
                        {member.role}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-[#4B80B3] transition-colors duration-300">
                        {member.name}
                      </h3>
                      
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                        <div className="w-3 h-3 rounded-full mx-2" style={{ backgroundColor: '#4B80B3' }}></div>
                        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-transparent transition-all duration-500 group-hover:border-t-[#4B80B3]" style={{ borderLeftColor: '#4B80B3' }}></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500" style={{ backgroundColor: '#4B80B3' }}></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500" style={{ backgroundColor: '#4B80B3' }}></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { number: "15+", label: "Years Experience" },
              { number: "50K+", label: "Lives Changed" },
              { number: "127", label: "Communities" },
              { number: "98%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#4B80B3' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t.ctaTitle}</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t.ctaDesc}
            </p>
            <motion.button
              onClick={() => navigate('/donate')}
              className="inline-block px-8 py-4 rounded-full font-bold text-white bg-[#4B80B3] shadow-2xl transition-all duration-300 hover:bg-white hover:text-[#4B80B3] transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.ctaBtn}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;