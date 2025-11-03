import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import linkedin from "../images/linkedinl.png";
import twitter from "../images/twitterl.png";
import facebook from "../images/facebook l.png";
import gmail from "../images/google.png";
import Healthcare from "../pages/Healthcare";
import Education from "../pages/Education";
import Training from "../pages/Training";
import CleanWater from "../pages/CleanWater";
import EmergencyRelief from "../pages/EmergencyReleif";
import ChildProtection from "../pages/ChildProtection";

const translations = {
  en: {
    about: "Stackly empowers businesses with cutting-edge cloud, AI, and cybersecurity solutions to transform your digital future.",
    quickLinks: "Quick Links",
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
    servicesTitle: "Services",
    Education: "Education",
    Healthcare: "Healthcare",
    Training: "Training",
    CleanWater: "Clean Water",
    EmergencyRelief: "Emergency Relief",
    ChildProtection: "Child Protection",
    connect: "Connect with us",
    email: "Email: support@stackly.com",
    phone: "Phone: +1 (800) 123-4567",
    copyright: `© ${new Date().getFullYear()} Stackly. All rights reserved By ESS.`
  },
  ar: {
    about: "تمكّن Stackly الشركات بحلول سحابية وذكاء اصطناعي وأمن سيبراني متقدمة لتحويل مستقبلك الرقمي.",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    aboutUs: "من نحن",
    services: "الخدمات",
    blog: "المدونة",
    contact: "تواصل",
    servicesTitle: "الخدمات",
    Education: "التعليم",
    Healthcare: "الرعاية الصحية",
    Training: "التدريب",
    CleanWater: "المياه النظيفة",
    EmergencyRelief: "الإغاثة الطارئة",
    ChildProtection: "حماية الطفل",
    connect: "تواصل معنا",
    email: "البريد الإلكتروني: support@stackly.com",
    phone: "الهاتف: +1 (800) 123-4567",
    copyright: `© ${new Date().getFullYear()} Stackly. جميع الحقوق محفوظة بواسطة ESS.`
  },
  he: {
    about: "Stackly מעניקה לעסקים פתרונות ענן, AI ואבטחת מידע מתקדמים לשינוי העתיד הדיגיטלי שלך.",
    quickLinks: "קישורים מהירים",
    home: "בית",
    aboutUs: "אודות",
    services: "שירותים",
    blog: "בלוג",
    contact: "צור קשר",
    servicesTitle: "שירותים",
    Education: "חינוך",
    Healthcare: "בריאות",
    Training: "הכשרה",
    CleanWater: "מים נקיים",
    EmergencyRelief: "סיוע חירום",
    ChildProtection: "הגנת ילדים",
    connect: "התחברו איתנו",
    email: "אימייל: support@stackly.com",
    phone: "טלפון: +1 (800) 123-4567",
    copyright: `© ${new Date().getFullYear()} Stackly. כל הזכויות שמורות ל-ESS.`
  }
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const t = translations[language] || translations["en"];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    // Listen for language changes from header
    const syncLanguage = () => {
      const lang = localStorage.getItem("language") || "en";
      setLanguage(lang);
      document.documentElement.dir = (lang === "ar" || lang === "he") ? "rtl" : "ltr";
    };
    window.addEventListener("storage", syncLanguage);
    const customLangChange = (e) => {
      const lang = e.detail || localStorage.getItem("language") || "en";
      setLanguage(lang);
      document.documentElement.dir = (lang === "ar" || lang === "he") ? "rtl" : "ltr";
    };
    window.addEventListener("languageChange", customLangChange);
    syncLanguage();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", customLangChange);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-white text-black dark:bg-black py-12 px-5 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Logo and About */}
        <div className="flex flex-col items-start">
          <img 
            src={logo}
            alt="Stackly Logo" 
            className="w-36 mb-2 mt-2" 
          />
          <p className="text-sm text-black dark:text-white mt-3">
            {t.about}
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-base font-medium mb-4 text-black dark:text-white">{t.quickLinks}</h4>
          <ul className="list-none p-0 m-0 space-y-2">
            <li><Link to="/home1" className="text-black dark:text-white hover:text-[#4B80B3] dark:hover:text-[#4B80B3] transition-colors no-underline">{t.home}</Link></li>
            <li><Link to="/about" className="text-black dark:text-white hover:text-[#4B80B3] dark:hover:text-[#4B80B3] transition-colors no-underline">{t.aboutUs}</Link></li>
            <li><Link to="/services" className="text-black dark:text-white hover:text-[#4B80B3] dark:hover:text-[#4B80B3] transition-colors no-underline">{t.services}</Link></li>
            <li><Link to="/blog" className="text-black dark:text-white hover:text-[#4B80B3] dark:hover:text-[#4B80B3] transition-colors no-underline">{t.blog}</Link></li>
            <li><Link to="/contact" className="text-black dark:text-white hover:text-[#4B80B3] dark:hover:text-[#4B80B3] transition-colors no-underline">{t.contact}</Link></li>
          </ul>
        </div>
        
        {/* Services */}
        <div>
          <h4 className="text-base font-medium mb-4 text-black dark:text-white">{t.servicesTitle}</h4>
          <ul className="list-none p-0 m-0 space-y-2">
            <li><Link to="/education" className="text-black dark:text-white hover:text-[#4B80B3] dark:hover:text-[#4B80B3] transition-colors no-underline">{t.Education}</Link></li>
            <li><Link to="/healthcare" className="text-black dark:text-white hover:text-[#4B80B3] dark:hover:text-[#4B80B3] transition-colors no-underline">{t.Healthcare}</Link></li>
            <li><Link to="/training" className="text-black dark:text-white hover:text-[#4B80B3] dark:hover:text-[#4B80B3] transition-colors no-underline">{t.Training}</Link></li>
            <li><Link to="/cleanwater" className="text-black dark:text-white hover:text-[#4B80B3] dark:hover:text-[#4B80B3] transition-colors no-underline">{t.CleanWater}</Link></li>
            <li><Link to="/emergency-relief" className="text-black dark:text-white hover:text-[#4B80B3] dark:hover:text-[#4B80B3] transition-colors no-underline">{t.EmergencyRelief}</Link></li>
            <li><Link to="/child-protection" className="text-black dark:text-white hover:text-[#4B80B3] dark:hover:text-[#4B80B3] transition-colors no-underline">{t.ChildProtection}</Link></li>
          </ul>
        </div>
        
        {/* Social & Contact */}
        <div>
          <h4 className="text-base font-medium mb-4 text-black dark:text-white">{t.connect}</h4>
          
          {/* Social Icons */}
          <div className="flex gap-3 md:gap-4 mb-4 md:mb-6 flex-wrap">
            <a
              href="https://www.linkedin.com/login"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:opacity-80 transition-opacity rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </a>
            <a
              href="https://www.twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:opacity-80 transition-opacity rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <img
                src={twitter}
                alt="Twitter"
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </a>
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:opacity-80 transition-opacity rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </a>
            <a
              href="https://mail.google.com"
              aria-label="Gmail"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:opacity-80 transition-opacity rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <img
                src={gmail}
                alt="Gmail"
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </a>
          </div>
          
          {/* Contact Information */}
          <div className="text-sm text-black dark:text-white space-y-2">
            <div className="flex flex-col md:flex-col lg:flex-row lg:items-center gap-1 lg:gap-2">
              <span className="font-medium">Email:</span>
              <span className="break-all">support@stackly.com</span>
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row lg:items-center gap-1 lg:gap-2">
              <span className="font-medium">Phone:</span>
              <span>+1 (800) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative text-center py-4 mt-8 border-t border-black dark:border-white bg-white dark:bg-black text-black dark:text-white">
        <p className="text-sm px-4">{t.copyright}</p>
      </div>
      
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#4B80B3] text-white px-4 py-2 rounded-full shadow-lg hover:bg-black transition-all z-50"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;