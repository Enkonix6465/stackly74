import { useNavigate } from 'react-router-dom';
import service1 from "../images/service1.jpg";
import { FaTools, FaHandshake, FaUsers, FaHeart, FaHandsHelping, FaChartLine } from 'react-icons/fa';
import videohero from "../images/service1.mp4";
import { motion } from "framer-motion";
import ed1 from '../images/ed1.jpg';
import ed2 from '../images/ed2.jpg';
import ed3 from '../images/ed3.jpg';

const Training = () => {
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Creating Sustainable Livelihoods</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">Empowering individuals and communities with skills, resources, and opportunities to build lasting economic independence.</p>
        </div>
      </section>

     
      {/* Livelihood Mission Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={ed2}
                alt="Livelihood Training"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Pathways to Economic Independence</h2>
              <p className="text-lg mb-6">
                Sustainable livelihoods are the foundation of thriving communities. By providing skills training, microfinance, and entrepreneurship support, we help individuals break free from poverty and create lasting economic opportunities for themselves and their families.
              </p>
              <p className="text-lg mb-8">
                From vocational training to small business development, we believe every person has the potential to become economically self-sufficient and contribute meaningfully to their community's prosperity.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>Skills Training & Certification</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>Microfinance & Business Support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4B80B3] rounded-full mr-2"></div>
                  <span>Entrepreneurship Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livelihood Programs Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Livelihood Development Programs</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Comprehensive programs designed to create sustainable income opportunities and foster economic empowerment
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaTools className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vocational Skills Training</h3>
              <p className="mb-4">
                Comprehensive technical and practical skills training programs that prepare individuals for employment in various trades and industries.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Carpentry and construction skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Tailoring and textile work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Computer and digital literacy</span>
                </li>
              </ul>
            </div>

            {/* Program 2 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaHandshake className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Microfinance & Credit</h3>
              <p className="mb-4">
                Access to small loans and financial services that enable individuals to start businesses and invest in income-generating activities.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Small business startup loans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Financial literacy training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Savings group formation</span>
                </li>
              </ul>
            </div>

            {/* Program 3 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaUsers className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cooperative Development</h3>
              <p className="mb-4">
                Supporting the formation and management of cooperatives that enable communities to pool resources and create collective businesses.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Agricultural cooperatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Craft and artisan groups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Marketing and sales networks</span>
                </li>
              </ul>
            </div>

            {/* Program 4 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaHeart className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Women's Empowerment</h3>
              <p className="mb-4">
                Specialized programs focused on empowering women with economic opportunities and leadership skills in their communities.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Women-only training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Leadership development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Work-life balance support</span>
                </li>
              </ul>
            </div>

            {/* Program 5 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaHandsHelping className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Youth Employment</h3>
              <p className="mb-4">
                Targeted programs for young people to develop job-ready skills and connect with employment opportunities in growing industries.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Job placement assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Career counseling services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Internship programs</span>
                </li>
              </ul>
            </div>

            {/* Program 6 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <FaChartLine className="text-2xl text-[#4B80B3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Development</h3>
              <p className="mb-4">
                Comprehensive support for small business owners including training, mentorship, and access to markets and resources.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Business plan development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Marketing and sales training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B80B3] mr-2">•</span>
                  <span>Access to supply chains</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* We create sustainable livelihoods - Image Layout Section */}
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
                  We create sustainable livelihoods for communities
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Economic empowerment transforms not just individuals, but entire communities. By providing skills, resources, and opportunities, we help people build lasting sources of income that support their families and strengthen their communities for generations to come.
                </p>
              </div>

              {/* Image Grid - Left Side */}
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={ed1}
                    alt="Skills training"
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
                  alt="Economic empowerment"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Content with Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Through comprehensive livelihood programs, we provide the training, resources, and ongoing support needed to help individuals create sustainable income sources and achieve long-term economic stability.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaTools className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Practical skills training for immediate employment</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaHandshake className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Microfinance and business development support</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <FaHeart className="text-[#4B80B3] text-sm" />
                    </div>
                    <span className="text-black font-medium">Long-term mentorship and community support</span>
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

      {/* Why Sustainable Livelihoods Matter Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Sustainable Livelihoods Transform Communities</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Economic empowerment creates a ripple effect that strengthens families, communities, and entire regions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Breaking Poverty Cycles</h3>
              <p>Sustainable income sources help families escape poverty and invest in their children's future</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Building Resilient Communities</h3>
              <p>Economic diversity and local businesses create stronger, more resilient communities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fostering Innovation</h3>
              <p>Entrepreneurship and skill development drive innovation and economic growth</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4B80B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Promoting Dignity</h3>
              <p>Self-reliance and economic independence restore dignity and hope to individuals and families</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#4B80B3] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Creating Sustainable Livelihoods</h2>
          <p className="text-xl mb-8">
            Every contribution helps us provide training, resources, and opportunities that transform lives and build thriving communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-white text-[#4B80B3] hover:bg-gray-100 font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/donate")}
            >
              Support Livelihoods
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

export default Training;
