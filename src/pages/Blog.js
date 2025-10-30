import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import video from "../images/law-hero.mp4";
import video1 from "../images/law-hero.mp4";
import video2 from "../images/law-hero.mp4";
import { useNavigate } from "react-router-dom";
import {  AnimatePresence } from 'framer-motion';
import digital from "../images/digital.jpg"
import water from "../images/water.jpg"
// Translation object for all static content
const translations = {
  en: {
    heroTitle: "Trusted Legal Solutions for Your Success",
    heroDesc: "Our experienced attorneys provide expert guidance, strategic advocacy, and unwavering commitment to justice for individuals and businesses alike.",
    
    ctaTitle: "Stay Informed with Legal Insights",
    ctaDesc: "Subscribe to our blog for the latest updates, expert tips, and actionable advice on law, business, and personal rights.",
    ctaBtn: "Subscribe Now"
  },
  ar: {
    heroTitle: "حلول قانونية موثوقة لنجاحك",
    heroDesc: "يقدم محامونا ذوو الخبرة إرشادًا خبيرًا ودفاعًا استراتيجيًا والتزامًا قويًا بالعدالة للأفراد والشركات.",
    
    ctaTitle: "ابق على اطلاع بالمعرفة القانونية",
    ctaDesc: "اشترك في مدونتنا للحصول على آخر التحديثات والنصائح والخبرات العملية في القانون والأعمال والحقوق الشخصية.",
    ctaBtn: "اشترك الآن"
  },
  he: {
    heroTitle: "פתרונות משפטיים אמינים להצלחתך",
    heroDesc: "עורכי הדין המנוסים שלנו מעניקים ייעוץ מומחה, ייצוג אסטרטגי ומחויבות מלאה לצדק ליחידים ולעסקים.",
  
    ctaTitle: "הישאר מעודכן עם תובנות משפטיות",
    ctaDesc: "הירשם לבלוג שלנו לקבלת עדכונים, טיפים מקצועיים ועצות מעשיות על משפט, עסקים וזכויות אישיות.",
    ctaBtn: "הירשם עכשיו"
  }
};



const categories = ["all", "Personal Injury", "Business Law", "Intellectual Property", "Family Law", "Real Estate", "Criminal Law"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const navigate = useNavigate();
  const [activeBlog, setActiveBlog] = useState(0);
  
  useEffect(() => {
    const handleLangChange = (e) => {
      setLanguage(e.detail || localStorage.getItem("language") || "en");
    };
    window.addEventListener("languageChange", handleLangChange);
    return () => window.removeEventListener("languageChange", handleLangChange);
  }, []);

  const t = translations[language] || translations.en;
  
const featuredPosts = [
    {
      id: 1,
      title: "How Education Transformed an Entire Village",
      excerpt: "Discover the incredible journey of a remote community where access to education created a ripple effect of positive change.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "6 min read",
      category: "Success Stories",
      image: digital,
      color: "#4B80B3",
      stats: "15K+ Views"
    },
    {
      id: 2,
      title: "The Ripple Effect of Clean Water Projects",
      excerpt: "See how one well didn't just provide water, but sparked economic growth and improved health for an entire region.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Impact Report",
      image: water,
      color: "#4B80B3",
      stats: "12K+ Views"
    },
    {
      id: 3,
      title: "Volunteers Who Changed Lives: Real Stories",
      excerpt: "Meet the incredible individuals who dedicated their time and witnessed transformation firsthand.",
      author: "Emily Rodriguez",
      date: "March 8, 2024",
      readTime: "5 min read",
      category: "Volunteer Spotlight",
      image: "🌟",
      color: "#4B80B3",
      stats: "18K+ Views"
    }
  ];
   const volunteers = [
    {
      name: "Sarah Johnson",
      role: "Education Volunteer",
      duration: "3 years",
      contribution: "250+ hours",
      quote: "Seeing children light up when they learn to read is priceless. This work fills my soul.",
      image: "/images/sarah-volunteer.jpg",
      achievements: ["Taught 50+ children", "Organized library", "Trained 5 new volunteers"]
    },
    {
      name: "Miguel Rodriguez",
      role: "Disaster Response",
      duration: "2 years",
      contribution: "180+ hours",
      quote: "In times of crisis, being there for others is the most human thing we can do.",
      image: "/images/miguel-volunteer.jpg",
      achievements: ["Emergency response team", "First aid certified", "Community coordinator"]
    }
  ];
  const impactLevels = [
    {
      amount: "$25",
      title: "School Supplies",
      description: "Provide books and materials for one child for a full semester",
      icon: "📚",
      impact: "Helps 1 child learn",
      color: "#4B80B3"
    },
    {
      amount: "$50",
      title: "Clean Water",
      description: "Give a family access to clean water for an entire month",
      icon: "💧",
      impact: "Serves 1 family",
      color: "#4B80B3"
    },
    {
      amount: "$100",
      title: "Medical Care",
      description: "Cover essential medical treatments and vaccinations",
      icon: "🏥",
      impact: "Protects 5 people",
      color: "#4B80B3"
    },
    {
      amount: "$250",
      title: "Sustainable Farming",
      description: "Provide seeds, tools, and training for sustainable agriculture",
      icon: "🌱",
      impact: "Supports 2 families",
      color: "#4B80B3"
    }
  ];
  const behindScenes = [
    {
      title: "Supply Packing Day",
      description: "Watch our team prepare and pack essential supplies for distribution",
      type: "video",
      duration: "2:45",
      team: "Logistics Team",
      stats: "500+ kits prepared",
      videoUrl: video
    },
    {
      title: "Community Impact Journey",
      description: "Follow our project manager through a typical day in the field",
      type: "video",
      duration: "3:30",
      team: "Field Operations",
      stats: "3 villages visited",
      videoUrl: video1
    },
    {
      title: "Team Training",
      description: "See how we train new volunteers for emergency response",
      type: "video",
      duration: "4:20",
      team: "Training Department",
      stats: "25 volunteers trained",
      videoUrl: video2
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-0 w-full">
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
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#4B80B3', opacity: 0.1}}></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{backgroundColor: '#4B80B3', opacity: 0.1}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-semibold text-lg mb-4 block" style={{color: '#4B80B3'}}>FEATURED STORIES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Stories of <span style={{color: '#4B80B3'}}>Hope & Impact</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Dive into inspiring narratives that showcase the real difference your support makes in communities around the world.
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
                      <div className="flex items-center justify-center p-12 w-full h-full" style={{backgroundColor: '#4B80B3'}}>
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
                        <div className="absolute inset-0 opacity-40" style={{backgroundColor: '#4B80B3'}}></div>
                        
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
                      <span className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{backgroundColor: '#4B80B3'}}>
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
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: '#4B80B3'}}>
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
                        style={{backgroundColor: '#4B80B3'}}
                      >
                        Read Full Story
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border-2 text-gray-700 rounded-2xl font-semibold hover:text-white transition-all duration-300"
                        style={{borderColor: '#4B80B3'}}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#4B80B3'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Share Inspiration
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeBlog 
                      ? 'scale-125' 
                      : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                  style={index === activeBlog ? {backgroundColor: '#4B80B3'} : {}}
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
              <div className="p-6 text-white" style={{backgroundColor: '#4B80B3'}}>
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
                  <div className="text-center p-3 rounded-lg border-2" style={{borderColor: '#4B80B3', backgroundColor: '#f8fafc'}}>
                    <p className="text-sm font-semibold" style={{color: '#4B80B3'}}>Duration</p>
                    <p className="font-bold text-black">{volunteer.duration}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg border-2" style={{borderColor: '#4B80B3', backgroundColor: '#f8fafc'}}>
                    <p className="text-sm font-semibold" style={{color: '#4B80B3'}}>Contribution</p>
                    <p className="font-bold text-black">{volunteer.contribution}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 pl-4 py-2 mb-4" style={{borderColor: '#4B80B3'}}>
                  <p className="text-black/70 italic">"{volunteer.quote}"</p>
                </blockquote>

                {/* Achievements */}
                <div className="mb-4">
                  <p className="font-semibold text-black mb-2">Key Achievements:</p>
                  <ul className="space-y-1">
                    {volunteer.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-black/60">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#4B80B3'}}></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full text-white py-2 rounded-lg hover:opacity-90 transition duration-300" style={{backgroundColor: '#4B80B3'}}>
                  Become a Volunteer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Categories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-black text-center mb-8">Explore Topics</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.filter(cat => cat !== 'all').map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
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
          <h2 className="text-3xl font-bold text-black mb-4">See How You Help</h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Your donation creates real, measurable change. Here's exactly what your contribution provides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactLevels.map((level, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-200">
              {/* Header with Brand Color */}
              <div className="p-6 text-white text-center" style={{backgroundColor: level.color}}>
                <div className="text-4xl mb-2">{level.icon}</div>
                <div className="text-3xl font-bold">{level.amount}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">{level.title}</h3>
                <p className="text-black/60 mb-4">{level.description}</p>
                
                <div className="flex items-center justify-between p-3 rounded-lg border-2" style={{borderColor: '#4B80B3', backgroundColor: '#f8fafc'}}>
                  <span className="text-sm font-semibold" style={{color: '#4B80B3'}}>Direct Impact:</span>
                  <span className="font-bold" style={{color: '#4B80B3'}}>{level.impact}</span>
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
          <h2 className="text-3xl font-bold text-white mb-4">Behind the Scenes Videos</h2>
          <p className="text-xl text-white/80">
            Watch exclusive footage of our teams in action and see the real impact of our work
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
                  <h3 className="text-xl font-bold text-black transition-colors duration-300" style={{color: index === 0 ? '#4B80B3' : ''}}>{item.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full font-semibold text-white" style={{backgroundColor: '#4B80B3'}}>
                    HD
                  </span>
                </div>
                
                <p className="text-black/60 mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex justify-between items-center text-sm mb-4 p-3 rounded-lg border-2" style={{borderColor: '#4B80B3', backgroundColor: '#f8fafc'}}>
                  <span className="flex items-center gap-1 font-semibold" style={{color: '#4B80B3'}}>
                    👥 {item.team}
                  </span>
                  <span className="flex items-center gap-1 font-semibold" style={{color: '#4B80B3'}}>
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
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: '#4B80B3'}}>
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
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: '#4B80B3'}}>
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
      <section className="w-full py-5 mb-0 flex flex-col items-center justify-center" style={{backgroundColor: '#4B80B3'}}>
        <div className="max-w-2xl w-full mx-auto text-center">
          <h2 className="text-4xl md:text-4xl font-extrabold text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-lg text-white/90 mb-8">
            {t.ctaDesc}
          </p>
          <button className="px-8 py-4 rounded-full font-bold bg-white shadow-lg hover:bg-black hover:text-white transition text-lg" style={{color: '#4B80B3'}} onClick={() => navigate('/contact')}>
            {t.ctaBtn}
          </button>
        </div>
      </section>


     
    </div>
  );
};
export default Blog;
