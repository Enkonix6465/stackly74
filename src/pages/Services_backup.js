import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Translation object for all static content
const translations = {
  en: {
    heroTitle: "Comprehensive Legal Solutions. Strategic Advocacy.",
    heroDesc: "We deliver end-to-end solutions tailored to your unique challenges and objectives.",
    servicesTitle: "Our Legal Services",
    servicesDesc: "Comprehensive legal solutions for individuals, businesses, and institutions.",
    lawServices: [
      {
        img: require('../images/service1.jpg'),
        title: 'Litigation & Dispute Resolution',
        desc: 'Expert representation in civil, commercial, and criminal cases. Protecting your rights in and out of court.'
      },
      {
        img: require('../images/service2.jpg'),
        title: 'Corporate & Commercial Law',
        desc: 'Business formation, contracts, mergers & acquisitions, and regulatory compliance services.'
      },
      {
        img: require('../images/service3.jpg'),
        title: 'Family Law',
        desc: 'Compassionate guidance through divorce, custody, adoption, and domestic relations matters.'
      },
      {
        img: require('../images/service4.jpg'),
        title: 'Real Estate Law',
        desc: 'Property transactions, zoning issues, landlord-tenant disputes, and real estate development.'
      },
      {
        img: require('../images/service5.jpg'),
        title: 'International Law',
        desc: 'Cross-border transactions, immigration law, international trade, and treaty negotiations.'
      },
      {
        img: require('../images/service6.jpg'),
        title: 'Tax Law',
        desc: 'Tax planning, compliance, audits, and representation before tax authorities.'
      }
    ],
    ctaTitle: "Ready to Protect Your Interests?",
    ctaDesc: "Get started with our expert legal team and experience dedicated support, strategic solutions, and peace of mind. Contact us today for a confidential consultation.",
    ctaBtn: "Request Consultation",
    faqData: [
      {
        question: "What types of legal services do you offer?",
        answer: "We provide comprehensive legal services including litigation, corporate law, family law, real estate, international law, and tax law. Our experienced team handles both individual and business legal matters."
      },
      {
        question: "How do I schedule a consultation?",
        answer: "You can schedule a consultation by calling our office, filling out our online contact form, or visiting us in person. We offer both in-person and virtual consultations to accommodate your needs."
      },
      {
        question: "What should I bring to my first consultation?",
        answer: "Please bring any relevant documents related to your legal matter, a list of questions you'd like to discuss, and any correspondence you've received. This helps us better understand your situation."
      },
      {
        question: "How are legal fees structured?",
        answer: "Our fee structure varies depending on the type of case and complexity. We offer hourly rates, flat fees, and contingency arrangements where appropriate. We'll discuss all costs upfront during your consultation."
      },
      {
        question: "How long do legal cases typically take?",
        answer: "The timeline varies greatly depending on the type and complexity of your case. Some matters can be resolved quickly, while others may take months or years. We'll provide realistic timelines during your consultation."
      }
    ]
  }
};

const Services = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleLangChange = (e) => {
      setLanguage(e.detail || localStorage.getItem("language") || "en");
    };
    window.addEventListener("languageChange", handleLangChange);
    return () => window.removeEventListener("languageChange", handleLangChange);
  }, []);

  const t = translations[language] || translations.en;

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source 
              src="https://videos.pexels.com/video-files/5896063/5896063-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              {t.heroDesc}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-[#4B80B3] hover:bg-[#3A6B99] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
            >
              {t.ctaBtn}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.servicesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.servicesDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.lawServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 text-[#4B80B3] font-semibold hover:text-[#3A6B99] transition-colors duration-200"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our legal services
            </p>
          </motion.div>

          <div className="space-y-4">
            {t.faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#4B80B3] to-[#3A6B99]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              {t.ctaDesc}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-white text-[#4B80B3] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;