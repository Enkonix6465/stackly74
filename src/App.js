import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./compentents/Header";
import Home1 from "./pages/Home1"; // ✅ import Home1
import Home2 from "./pages/Home2"; // ✅ import Home2
import AboutUs from "./pages/AboutUs"; // ✅ import AboutUs
import Services from "./pages/Services"; // ✅ import Services
import Blog from "./pages/Blog"; // ✅ import Blog
import Education from "./pages/Education";
import Welcome from "./pages/Welcome";
import Admin from "./pages/AdminDashboard";
import ContactUs from "./pages/ContactUs";
import AdminDashboard from "./pages/AdminDashboard";
import Healthcare from "./pages/Healthcare";
import Training from "./pages/Training";
import CleanWater from "./pages/CleanWater";
import EmergencyReleif from "./pages/EmergencyReleif";
import ChildProtection from "./pages/ChildProtection";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Footer from "./compentents/Footer";
import EmergencyRelief from "./pages/EmergencyReleif";
function App() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <div className="min-h-screen w-screen bg-white dark:bg-gray-900 text-black dark:text-white overflow-x-hidden">
      {location.pathname !== "/welcome" && location.pathname !== "/" && (
        <Header toggleTheme={toggleTheme} isDark={isDark} />
      )}
      <main className="w-screen">
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/home1" element={<Home1 />} /> {/* ✅ route */}
          <Route path="/home2" element={<Home2 />} /> {/* ✅ route */}
          <Route path="/about" element={<AboutUs />} /> {/* ✅ route */}
          <Route path="/services" element={<Services />} /> {/* ✅ route */}
          <Route path="/education" element={<Education />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/training" element={<Training />} />
          <Route path="/cleanwater" element={<CleanWater />} />
          <Route path="/emergency-relief" element={<EmergencyRelief />} />
          <Route path="/child-protection" element={<ChildProtection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      {location.pathname !== "/welcome" && location.pathname !== "/" && (
        <Footer />
      )}
    </div>
  );
}

export default App;
