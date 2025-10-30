import { useNavigate } from 'react-router-dom';
import service1 from "../images/service1.jpg";
import { FaGraduationCap, FaBook, FaUsers, FaHeart, FaHandsHelping, FaChartLine } from 'react-icons/fa';
import videohero from "../images/service1.mp4";
import { motion } from "framer-motion";
import ed1 from '../images/ed1.jpg';
import ed2 from '../images/ed2.jpg';
import ed3 from '../images/ed3.jpg';
const Education = () => {
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Empowering Futures Through Education</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">Breaking barriers and creating opportunities through quality education for every child, regardless of their background.</p>
        </div>
      </section>

     
      {/* Education Mission Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={ed2}
                alt="Education Mission"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Lives Through Learning</h2>
              <p className="text-lg mb-6">
                Education is the most powerful tool to change the world. In underserved communities, access to quality education can break cycles of poverty and open doors to limitless possibilities. Our comprehensive educational programs are designed to nurture minds, build character, and create future leaders.
              </p>
              <p className="text-lg mb-8">
                From early childhood development to adult literacy programs, we believe every individual deserves the opportunity to learn, grow, and achieve their dreams through education.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>Quality Primary & Secondary Education</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>Scholarship Programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>Adult Literacy & Vocational Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Programs Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Educational Programs</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Comprehensive educational initiatives designed to unlock potential and create lasting change in communities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaGraduationCap className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Primary Education Support</h3>
              <p className="mb-4">
                Providing foundational education to children in underserved communities, ensuring every child has access to quality learning environments and resources.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Free tuition and learning materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Nutritious meal programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>After-school tutoring support</span>
                </li>
              </ul>
            </div>

            {/* Program 2 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaBook className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scholarship Programs</h3>
              <p className="mb-4">
                Merit-based and need-based scholarships helping talented students pursue higher education and achieve their academic goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>University tuition assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Books and equipment support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Mentorship and career guidance</span>
                </li>
              </ul>
            </div>

            {/* Program 3 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaUsers className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Adult Literacy Programs</h3>
              <p className="mb-4">
                Empowering adults with basic literacy and numeracy skills, helping them become active participants in their communities and workforce.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Reading and writing classes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Digital literacy training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Life skills workshops</span>
                </li>
              </ul>
            </div>

            {/* Program 4 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaHeart className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Special Needs Education</h3>
              <p className="mb-4">
                Inclusive education programs ensuring children with special needs receive appropriate support and opportunities to reach their full potential.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Specialized teaching methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Therapeutic support services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Family counseling programs</span>
                </li>
              </ul>
            </div>

            {/* Program 5 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaHandsHelping className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vocational Training</h3>
              <p className="mb-4">
                Practical skills training programs that prepare individuals for sustainable employment and entrepreneurship opportunities.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Technical skills development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Entrepreneurship training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Job placement assistance</span>
                </li>
              </ul>
            </div>

            {/* Program 6 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaChartLine className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Teacher Training</h3>
              <p className="mb-4">
                Professional development programs for educators to enhance teaching quality and create more effective learning environments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Modern teaching methodologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Classroom management skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Continuous professional development</span>
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
                  Education transforms lives by breaking cycles of poverty and creating opportunities for growth. We believe every individual deserves access to quality education that empowers them to achieve their full potential and contribute to their communities.
                </p>
              </div>

              {/* Image Grid - Left Side */}
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={ed1}
                    alt="Smiling child"
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
                  alt="Happy children"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Content with Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Through comprehensive educational programs, we provide quality learning opportunities that equip individuals with the knowledge and skills needed to transform their lives and contribute meaningfully to society.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaGraduationCap className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Quality education accessible to all children</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaBook className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Comprehensive learning resources and materials</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaHeart className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Supportive community-focused educational environment</span>
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

      {/* Why Education Matters Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Education Changes Everything</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Education is not just learning facts, but training the mind to think and empowering individuals to transform their lives
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Breaking Poverty Cycles</h3>
              <p>Education provides pathways out of poverty and creates opportunities for sustainable livelihoods</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Building Communities</h3>
              <p>Educated individuals become community leaders and agents of positive social change</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fostering Innovation</h3>
              <p>Education nurtures creative thinking and innovation that drives progress and development</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Empowering Equality</h3>
              <p>Education is a fundamental right that promotes equality and human dignity for all</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#4B80B3] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Empowering Futures Through Education</h2>
          <p className="text-xl mb-8">
            Every donation, every volunteer hour, and every shared story helps us reach more children and adults who need educational opportunities.
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

export default Education;
