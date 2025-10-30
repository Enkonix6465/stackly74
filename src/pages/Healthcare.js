import { useNavigate } from 'react-router-dom';
import service1 from "../images/service1.jpg";
import { FaHeartbeat, FaStethoscope, FaUsers, FaHeart, FaHandsHelping, FaUserMd } from 'react-icons/fa';
import videohero from "../images/service1.mp4";
import { motion } from "framer-motion";
import ed1 from '../images/ed1.jpg';
import ed2 from '../images/ed2.jpg';
import ed3 from '../images/ed3.jpg';

const Healthcare = () => {
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Essential Healthcare for Everyone</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">Providing accessible, quality healthcare services and plans to underserved communities, ensuring no one is left behind.</p>
        </div>
      </section>

     
      {/* Healthcare Mission Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={ed2}
                alt="Healthcare Mission"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Healing Communities Through Care</h2>
              <p className="text-lg mb-6">
                Healthcare is a fundamental human right, not a privilege. In underserved communities, access to quality medical care can mean the difference between life and death. Our comprehensive healthcare programs are designed to provide essential medical services, preventive care, and health education to those who need it most.
              </p>
              <p className="text-lg mb-8">
                From basic medical checkups to specialized treatments, we believe every individual deserves compassionate, professional healthcare that addresses their physical, mental, and emotional well-being.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>Primary Healthcare Services</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>Preventive Care & Screenings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>Mental Health Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Services Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Essential Healthcare Services</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Comprehensive healthcare programs designed to promote wellness and provide life-saving medical care to communities in need
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaHeartbeat className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Primary Healthcare</h3>
              <p className="mb-4">
                Essential medical services including routine checkups, vaccinations, and basic treatments for common illnesses and injuries.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>General medical consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Immunization programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Basic diagnostic testing</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaStethoscope className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Preventive Care</h3>
              <p className="mb-4">
                Comprehensive preventive healthcare services to detect and prevent diseases before they become serious health issues.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Health screenings and checkups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Cancer screening programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Health education workshops</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaUsers className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Health</h3>
              <p className="mb-4">
                Community-based health programs that bring essential medical services directly to underserved populations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Mobile health clinics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Health outreach programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Community health education</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaHeart className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mental Health Support</h3>
              <p className="mb-4">
                Comprehensive mental health services providing counseling, therapy, and emotional support for individuals and families.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Individual counseling sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Group therapy programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Crisis intervention services</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaHandsHelping className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Care</h3>
              <p className="mb-4">
                24/7 emergency medical services providing immediate care for urgent health conditions and medical emergencies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Emergency medical response</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Trauma care services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Medical evacuation support</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaUserMd className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialist Care</h3>
              <p className="mb-4">
                Access to specialized medical care and expert consultations for complex health conditions requiring advanced treatment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Specialist consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Advanced diagnostic procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Referral coordination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* We are here to support vulnerable communities - Healthcare Focus */}
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
                  We provide essential healthcare to those in need
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Healthcare should never be a luxury. We bridge the gap between medical needs and accessible care, ensuring that vulnerable communities receive the essential health services they deserve, regardless of their economic circumstances.
                </p>
              </div>

              {/* Image Grid - Left Side */}
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={ed1}
                    alt="Healthcare support"
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
                  alt="Medical care"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Content with Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Through comprehensive healthcare programs, we deliver quality medical services that save lives, prevent diseases, and promote overall wellness in underserved communities across the region.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaHeartbeat className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Accessible primary healthcare for all families</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaStethoscope className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Preventive care and health screening programs</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaHeart className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Compassionate care focused on patient dignity</span>
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

      {/* Why Healthcare Matters Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Healthcare Access Changes Lives</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Quality healthcare is the foundation of thriving communities, enabling individuals to live healthy, productive lives
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Saving Lives</h3>
              <p>Early detection and treatment of diseases prevent complications and save countless lives</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strengthening Communities</h3>
              <p>Healthy individuals contribute to stronger, more resilient communities and economies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Preventing Disease</h3>
              <p>Preventive care and health education stop diseases before they start or spread</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Breaking Barriers</h3>
              <p>Healthcare access removes economic barriers that prevent people from receiving treatment</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#4B80B3] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Providing Essential Healthcare</h2>
          <p className="text-xl mb-8">
            Every donation helps us deliver life-saving medical care, preventive services, and health education to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-white text-[#4B80B3] hover:bg-gray-100 font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/donate")}
            >
              Support Healthcare
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

export default Healthcare;
