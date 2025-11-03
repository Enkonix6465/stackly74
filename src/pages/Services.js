import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import video from "../images/vdeo741.mp4";
import { useNavigate } from "react-router-dom";
import logo1 from "../images/lo1.jpg"
import logo2 from "../images/lo2.jpg"
import logo3 from "../images/lo3.jpg"
import logo4 from "../images/lo4.jpg"
import logo5 from "../images/lo5.jpg"
import logo6 from "../images/lo6.jpg"
import logo7 from "../images/lo7.jpg"
import logo8 from "../images/lo8.jpg"
import logo9 from "../images/lo9.jpg"
import logo10 from "../images/lo10.jpg"
import logo11 from "../images/lo11.jpg"
import logo12 from "../images/lo12.jpg"
import school from "../images/school.jpg";
import medical from "../images/medical.jpg";
import training from "../images/training.jpg";
import water from "../images/water.jpg";
import protection from "../images/protection.jpg";
import relief from "../images/emg-disaster.jpg";

import { AnimatePresence } from 'framer-motion';
// Translation object for all static content
const translations = {
  en: {
    heroTitle: "Transforming Lives Through Compassionate Action",
    heroDesc: "We provide comprehensive support services that create lasting change in communities worldwide.",
    servicesTitle: "Our Impact Services",
    servicesDesc: "Comprehensive humanitarian solutions for individuals, families, and communities in need.",
    charityServices: [
      {
        img: school,
        title: 'Empowering futures through education',
        desc: 'We work to increase literacy skills through community-based learning programs and establish sustainable educational infrastructure for children and adults.'
      },
      {
        img: medical,
        title: 'Essential healthcare plans and services',
        desc: 'Providing comprehensive medical care, health education, and preventive services to underserved communities worldwide.'
      },
      {
        img: training,
        title: 'Creating sustainable livelihoods',
        desc: 'Empowering individuals and families through skills training, microfinance, and entrepreneurship programs that generate lasting income.'
      },
      {
        img: water,
        title: 'Clean water and sanitation',
        desc: 'Building wells, water systems, and sanitation facilities to provide clean, safe water access to communities in need.'
      },
      {
        img: relief,
        title: 'Emergency relief and disaster response',
        desc: 'Rapid response teams providing immediate aid, shelter, food, and medical assistance during natural disasters and emergencies.'
      },
      {
        img: protection,
        title: 'Child protection and welfare',
        desc: 'Safeguarding vulnerable children through protection programs, safe housing, nutrition support, and family reunification services.'
      }
    ],

    ctaTitle: "Ready to Make a Difference?",
    ctaDesc: "Join us in creating lasting change and transforming lives around the world. Every contribution helps us reach more communities in need.",
    ctaBtn: "Start Helping Today"
  },
  ar: {
    heroTitle: "تحويل الحياة من خلال العمل الرحيم",
    heroDesc: "نقدم خدمات دعم شاملة تخلق تغييرًا دائمًا في المجتمعات حول العالم.",
    servicesTitle: "خدمات التأثير الخاصة بنا",
    servicesDesc: "حلول إنسانية شاملة للأفراد والعائلات والمجتمعات المحتاجة.",
    charityServices: [
      {
        img: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
        title: 'تمكين المستقبل من خلال التعليم',
        desc: 'نعمل على زيادة مهارات محو الأمية من خلال برامج التعلم المجتمعية وإنشاء بنية تحتية تعليمية مستدامة للأطفال والكبار.'
      },
      {
        img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
        title: 'خطط وخدمات الرعاية الصحية الأساسية',
        desc: 'توفير الرعاية الطبية الشاملة والتثقيف الصحي والخدمات الوقائية للمجتمعات المحرومة في جميع أنحاء العالم.'
      },
      {
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
        title: 'خلق سبل عيش مستدامة',
        desc: 'تمكين الأفراد والعائلات من خلال التدريب على المهارات والتمويل الأصغر وبرامج ريادة الأعمال التي تولد دخلاً دائمًا.'
      },
      {
        img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        title: 'المياه النظيفة والصرف الصحي',
        desc: 'بناء الآبار وأنظمة المياه ومرافق الصرف الصحي لتوفير الوصول إلى المياه النظيفة الآمنة للمجتمعات المحتاجة.'
      },
      {
        img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
        title: 'الإغاثة الطارئة والاستجابة للكوارث',
        desc: 'فرق الاستجابة السريعة التي تقدم المساعدة الفورية والمأوى والطعام والمساعدة الطبية أثناء الكوارث الطبيعية والطوارئ.'
      },
      {
        img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop",
        title: 'حماية الطفل والرفاه',
        desc: 'حماية الأطفال المعرضين للخطر من خلال برامج الحماية والسكن الآمن ودعم التغذية وخدمات لم شمل الأسرة.'
      }
    ],

    ctaTitle: "مستعد لإحداث فرق؟",
    ctaDesc: "انضم إلينا في خلق تغيير دائم وتحويل الحياة حول العالم. كل مساهمة تساعدنا في الوصول إلى المزيد من المجتمعات المحتاجة.",
    ctaBtn: "ابدأ المساعدة اليوم"
  },
  he: {
    heroTitle: "משנים חיים באמצעות פעולה חמלה",
    heroDesc: "אנו מספקים שירותי תמיכה מקיפים היוצרים שינוי מתמשך בקהילות ברחבי העולם.",
    servicesTitle: "שירותי ההשפעה שלנו",
    servicesDesc: "פתרונות הומניטריים מקיפים ליחידים, משפחות וקהילות במצוקה.",
    charityServices: [
      {
        img: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
        title: 'העצמת עתידים באמצעות חינוך',
        desc: 'אנו פועלים להגברת כישורי אוריינות באמצעות תוכניות למידה קהילתיות והקמת תשתית חינוכית בת-קיימא לילדים ומבוגרים.'
      },
      {
        img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
        title: 'תוכניות ושירותי בריאות חיוניים',
        desc: 'מתן טיפול רפואי מקיף, חינוך לבריאות ושירותים מונעים לקהילות מוחלשות ברחבי העולם.'
      },
      {
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
        title: 'יצירת פרנסה בת-קיימא',
        desc: 'העצמת יחידים ומשפחות באמצעות הכשרת מיומנויות, מיקרו-מימון ותוכניות יזמות המייצרות הכנסה מתמשכת.'
      },
      {
        img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        title: 'מים נקיים ותברואה',
        desc: 'בניית בארות, מערכות מים ומתקני תברואה לספק גישה למים נקיים ובטוחים לקהילות נזקקות.'
      },
      {
        img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
        title: 'סיוע חירום ותגובה לאסונות',
        desc: 'צוותי תגובה מהירה המספקים סיוע מיידי, מחסה, מזון וסיוע רפואי במהלך אסונות טבע וחירום.'
      },
      {
        img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop",
        title: 'הגנה על ילדים ורווחה',
        desc: 'הגנה על ילדים פגיעים באמצעות תוכניות הגנה, דיור בטוח, תמיכה תזונתית ושירותי איחוד משפחות.'
      }
    ],

    ctaTitle: "מוכנים לעשות הבדל?",
    ctaDesc: "הצטרפו אלינו ליצירת שינוי מתמשך ולשינוי חיים ברחבי העולם. כל תרומה עוזרת לנו להגיע לקהילות נוספות במצוקה.",
    ctaBtn: "התחילו לעזור היום"
  }
};

const Services = () => {
  const navigate = useNavigate();

  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [isPaused, setIsPaused] = useState(false);






  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.2
    })
  };


  useEffect(() => {
    const handleLangChange = (e) => {
      setLanguage(e.detail || localStorage.getItem("language") || "en");
    };
    window.addEventListener("languageChange", handleLangChange);
    return () => window.removeEventListener("languageChange", handleLangChange);
  }, []);

  const t = translations[language] || translations.en;

  // Function to handle service-specific navigation
  const handleServiceNavigation = (serviceIndex) => {
    const serviceRoutes = [
      '/education',      // Education service
      '/healthcare',     // Healthcare service  
      '/training',       // Training/Livelihoods service
      '/cleanwater',     // Clean Water service
      '/emergency-relief', // Emergency Relief service
      '/child-protection'  // Child Protection service
    ];
    
    const route = serviceRoutes[serviceIndex] || '/contact';
    navigate(route);
  };

  const partnershipTypes = [
    {
      id: 1,
      title: "Corporate Partnerships",
      description: "Strategic alliances with businesses for mutual social impact",
      icon: "🏢",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Employee Engagement Programs",
        "CSR Initiative Support",
        "Cause-Related Marketing",
        "Skills-Based Volunteering"
      ],
      benefits: [
        "Enhanced brand reputation and CSR credentials",
        "Employee morale and team building opportunities",
        "Positive media coverage and community recognition",
        "Strategic networking with other impact-driven organizations"
      ],
      cta: "Explore Corporate Partnership",
      stat: "50+ Corporate Partners"
    },
    {
      id: 2,
      title: "NGO Collaborations",
      description: "Joint initiatives with fellow non-profits to maximize impact",
      icon: "🤝",
      color: "from-purple-500 to-pink-500",
      features: [
        "Resource Sharing Programs",
        "Joint Advocacy Campaigns",
        "Knowledge Exchange Platforms",
        "Combined Service Delivery"
      ],
      benefits: [
        "Leverage complementary expertise and resources",
        "Expand geographical reach and program coverage",
        "Share best practices and innovative approaches",
        "Collective voice for policy influence"
      ],
      cta: "Start Collaboration",
      stat: "30+ NGO Partners"
    },
    {
      id: 3,
      title: "Community Alliances",
      description: "Grassroots partnerships with local community organizations",
      icon: "🏘️",
      color: "from-green-500 to-emerald-500",
      features: [
        "Local Leadership Development",
        "Community-Led Initiatives",
        "Cultural Exchange Programs",
        "Local Resource Mobilization"
      ],
      benefits: [
        "Deep understanding of local needs and context",
        "Sustainable, community-owned solutions",
        "Strong local networks and trust building",
        "Cultural sensitivity and appropriate interventions"
      ],
      cta: "Build Community Alliance",
      stat: "100+ Community Partners"
    }
  ];

  const processSteps = [
    { step: "Discovery", description: "Understand mutual goals and alignment" },
    { step: "Planning", description: "Co-create partnership framework and objectives" },
    { step: "Implementation", description: "Launch joint initiatives and programs" },
    { step: "Evaluation", description: "Measure impact and refine collaboration" }
  ];
  const partners = [
    {
      id: 1,
      name: "TechCorp",
      logo: logo1,
      description: "Technology Innovation Partner",
      category: "technology",
      isImage: true
    },
    {
      id: 2,
      name: "GreenFuture",
      logo: logo2,
      description: "Environmental Sustainability Partner",
      category: "environment",
      isImage: true
    },
    {
      id: 3,
      name: "EduCare",
      logo: logo3,
      description: "Education Initiative Partner",
      category: "education",
      isImage: true
    },
    {
      id: 4,
      name: "HealthPlus",
      logo: logo4,
      description: "Healthcare Services Partner",
      category: "healthcare",
      isImage: true
    },
    {
      id: 5,
      name: "BuildRight",
      logo: logo5,
      description: "Infrastructure Development Partner",
      category: "construction",
      isImage: true
    },
    {
      id: 6,
      name: "FoodForAll",
      logo: logo6,
      description: "Nutrition and Food Security Partner",
      category: "food",
      isImage: true
    },
    {
      id: 7,
      name: "CleanWater",
      logo: logo7,
      description: "Water Sanitation Partner",
      category: "water",
      isImage: true
    },
    {
      id: 8,
      name: "FutureLeaders",
      logo: logo8,
      description: "Youth Empowerment Partner",
      category: "education",
      isImage: true
    },
    {
      id: 9,
      name: "SafeHaven",
      logo: logo9,
      description: "Emergency Shelter Partner",
      category: "shelter",
      isImage: true
    },
    {
      id: 10,
      name: "SkillUp",
      logo: logo10,
      description: "Vocational Training Partner",
      category: "education",
      isImage: true
    },
    {
      id: 11,
      name: "CommunityFirst",
      logo: logo11,
      description: "Local Development Partner",
      category: "community",
      isImage: true
    },
    {
      id: 12,
      name: "HopeFoundation",
      logo: logo12,
      description: "Philanthropic Partner",
      category: "philanthropy",
      isImage: true
    }
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-screen min-h-screen bg-white dark:bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-screen h-screen overflow-hidden bg-white dark:bg-black mb-10">
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

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              {t.servicesTitle}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.servicesDesc}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.charityServices.map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`relative bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex-row`}>

                  {/* Image Container */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content Container */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    <motion.button
                      className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:shadow-xl"
                      style={{ backgroundColor: '#4B80B3' }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleServiceNavigation(index)}
                    >
                      Learn More
                      <svg
                        className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4B80B3' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>





      <section className="py-20 bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 opacity-10 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#4B80B3' }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 opacity-10 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: '#4B80B3' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-semibold text-lg mb-4 block" style={{ color: '#4B80B3' }}>STRATEGIC ALLIANCES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Power of <span style={{ color: '#4B80B3' }}>Partnership</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Together, we can achieve more. Explore our partnership programs designed to create sustainable, scalable impact through collaboration.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            {/* Partnership Types */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Main Card */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white" style={{ backgroundColor: '#4B80B3' }}>
                        {type.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{type.title}</h3>
                        <p className="font-semibold text-sm" style={{ color: '#4B80B3' }}>{type.stat}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {type.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-white font-semibold">Key Features:</h4>
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 text-white/80">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4B80B3' }}></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Benefits Preview */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-white font-semibold">Benefits:</h4>
                      <p className="text-white/80 text-sm">
                        {type.benefits[0]}
                      </p>
                    </div>

                    {/* CTA */}
                    <button className="w-full py-3 px-6 rounded-xl text-white font-semibold transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" style={{ backgroundColor: '#4B80B3' }}>
                      {type.cta}
                    </button>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" style={{ backgroundColor: '#4B80B3' }}></div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: '#4B80B3' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-semibold text-lg mb-4 block" style={{ color: '#4B80B3' }}>TRUSTED BY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our <span style={{ color: '#4B80B3' }}>Valued Partners</span>
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Together with these incredible organizations, we're creating lasting change and building stronger communities.
            </p>
          </motion.div>

          {/* Scrolling Logos - Version 1: Infinite Horizontal Scroll */}
          <div className="mb-12">
            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [0, -1920] // Adjust based on total width
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
                style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
              >
                {duplicatedPartners.map((partner, index) => (
                  <motion.div
                    key={`${partner.id}-${index}`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex-shrink-0 w-32 h-24 bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-200 overflow-hidden cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-full h-full group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      {partner.isImage ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-5xl">
                          {partner.logo}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Gradient Fades */}
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
          </div>






        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-20 flex items-center justify-center bg-black">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl">
            {t.ctaDesc}
          </p>
          <button className="text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-white transition-all text-lg hover:text-black" style={{ backgroundColor: '#4B80B3' }} onClick={() => navigate('/contact')}>
            {t.ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
};
export default Services;