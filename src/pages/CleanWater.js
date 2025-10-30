import { useNavigate } from 'react-router-dom';
import service1 from "../images/service1.jpg";
import { FaTint, FaHandHeart, FaUsers, FaHeart, FaHandsHelping, FaChartLine } from 'react-icons/fa';
import videohero from "../images/service1.mp4";
import { motion } from "framer-motion";
import ed1 from '../images/ed1.jpg';
import ed2 from '../images/ed2.jpg';
import ed3 from '../images/ed3.jpg';

const CleanWater = () => {
  const navigate = useNavigate();
  const darkMode = document.documentElement.classList.contains('dark');

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"}>

      {/* Hero Section */}
      <section className="relative w-screen h-screen m-0 p-0">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videohero}
          autoPlay
          loop
          muted
        />
        {/* Overlay and Tagline */}
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Clean Water & Sanitation for All</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">Providing access to safe, clean water and proper sanitation facilities to improve health and transform communities worldwide.</p>
        </div>
      </section>

     
      {/* Water Mission Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={ed2}
                alt="Clean Water Mission"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bringing Life-Giving Water to Communities</h2>
              <p className="text-lg mb-6">
                Clean water is a fundamental human right, yet billions of people worldwide lack access to this basic necessity. Contaminated water and poor sanitation are leading causes of disease and death, particularly affecting children and vulnerable populations in underserved communities.
              </p>
              <p className="text-lg mb-8">
                Our comprehensive water and sanitation programs focus on sustainable solutions that provide immediate relief while building long-term infrastructure for lasting change and community health.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>Clean Water Wells & Boreholes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>Sanitation Facilities & Hygiene</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>Water Purification Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water & Sanitation Programs Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Water & Sanitation Programs</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Comprehensive water and sanitation initiatives designed to provide sustainable access to clean water and improve community health
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaTint className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clean Water Wells</h3>
              <p className="mb-4">
                Drilling deep water wells and boreholes to provide reliable access to clean, safe drinking water for communities in need.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Deep water well construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Solar-powered water pumps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Community water distribution points</span>
                </li>
              </ul>
            </div>

            {/* Program 2 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaHandHeart className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sanitation Facilities</h3>
              <p className="mb-4">
                Building proper sanitation facilities and promoting hygiene practices to prevent disease and improve overall community health.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Community toilet construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Hygiene education programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Waste management systems</span>
                </li>
              </ul>
            </div>

            {/* Program 3 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaUsers className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Water Purification</h3>
              <p className="mb-4">
                Installing water filtration and purification systems to ensure communities have access to safe, clean drinking water.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Water filtration systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Water quality testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Chlorination and treatment</span>
                </li>
              </ul>
            </div>

            {/* Program 4 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaHeart className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">School Water Programs</h3>
              <p className="mb-4">
                Providing clean water and sanitation facilities in schools to improve student health and educational outcomes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>School water systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Student hygiene education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Handwashing stations</span>
                </li>
              </ul>
            </div>

            {/* Program 5 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaHandsHelping className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Training</h3>
              <p className="mb-4">
                Training local communities in water system maintenance, hygiene practices, and sustainable water management.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Technical maintenance training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Hygiene behavior change</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Water conservation education</span>
                </li>
              </ul>
            </div>

            {/* Program 6 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaChartLine className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Water Relief</h3>
              <p className="mb-4">
                Rapid response water and sanitation support for communities affected by natural disasters or humanitarian crises.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Emergency water distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Portable sanitation units</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Disaster recovery planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* We are here to support vulnerable communities - Image Layout Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-blue-50 text-[#4B80B3] rounded-full text-sm font-medium mb-4">
                  ABOUT US
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  We are here to support vulnerable communities
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Clean water and proper sanitation are essential for life, health, and dignity. We believe every person deserves access to safe water and sanitation facilities that protect their health and enable their communities to thrive.
                </p>
              </div>

              {/* Image Grid - Left Side */}
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={ed1}
                    alt="Clean water access"
                    className="w-full h-95 object-cover"
                  />
                </div>
               
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              {/* Large Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <img
                  src={ed3}
                  alt="Community water project"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Content with Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Through sustainable water and sanitation programs, we provide life-saving infrastructure that prevents disease, supports education, and empowers communities to build healthier, more prosperous futures.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaTint className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Safe, clean water accessible to all families</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaHandHeart className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Proper sanitation and hygiene facilities</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaHeart className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Community-led sustainable water management</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button className="px-6 py-3 bg-[#4B80B3] hover:bg-[#3a6b9e] text-white font-medium rounded-full transition-colors">
                    Donate now
                  </button>
                  <button className="px-6 py-3 border border-[#4B80B3] text-[#4B80B3] hover:bg-blue-50 font-medium rounded-full transition-colors">
                    About us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clean Water Matters Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Clean Water Changes Everything</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Access to clean water and sanitation is fundamental to human health, dignity, and development
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Saves Lives</h3>
              <p>Clean water prevents waterborne diseases and reduces child mortality rates significantly</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enables Education</h3>
              <p>Children, especially girls, can attend school when they don't need to walk for water</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Empowers Women</h3>
              <p>Women and girls gain time for education and income-generating activities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Builds Communities</h3>
              <p>Healthy communities can focus on development and economic growth</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#4B80B3] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Bringing Clean Water to Every Community</h2>
          <p className="text-xl mb-8">
            Every donation helps us drill wells, build sanitation facilities, and bring life-saving clean water to families in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-white text-[#4B80B3] hover:bg-gray-100 font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/donate")}
            >
              Donate Today
            </button>
            <button 
              className="px-8 py-3 border border-white text-white hover:bg-[#3a6b9e] font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/volunteer")}
            >
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleanWater;
