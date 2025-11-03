import React, { useEffect, useState } from "react";



import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
// Register ChartJS components




const translations = {
  en: {
    emailDomain: "Email Domain Stats",
    domain: "Domain",
    userCount: "User Count",
    noDomain: "No domain data found.",
    loginsWeek: "Logins This Week",
    day: "Day",
    loginCount: "Login Count"
  },
  ar: {
    emailDomain: "إحصائيات نطاق البريد الإلكتروني",
    domain: "النطاق",
    userCount: "عدد المستخدمين",
    noDomain: "لا توجد بيانات نطاق.",
    loginsWeek: "تسجيلات الدخول هذا الأسبوع",
    day: "اليوم",
    loginCount: "عدد الدخول"
  },
  he: {
    emailDomain: "סטטיסטיקת דומיין אימייל",
    domain: "דומיין",
    userCount: "מספר משתמשים",
    noDomain: "לא נמצאו נתוני דומיין.",
    loginsWeek: "כניסות השבוע",
    day: "יום",
    loginCount: "מספר כניסות"
  }
};

const AdminDashboard = () => {
  const [loginData, setLoginData] = useState(() => {
    // Always use localStorage data on initial load
    const stored = localStorage.getItem('loginData');
    if (stored) return JSON.parse(stored);
    return {
      Sunday: 0,
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0
    };
  });
  const [userStatus, setUserStatus] = useState({ active: 0, inactive: 0 });

  const [logins, setLogins] = useState([]);
  const [stats, setStats] = useState({ totalUsers: 0, loginsToday: 0 });
  const [recentLogins, setRecentLogins] = useState([]);
  const [mostActiveUsers, setMostActiveUsers] = useState([]);
  const [emailDomains, setEmailDomains] = useState([]);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");
 
  const t = translations[language] || translations["en"];

  // Update localStorage when loginData changes
  useEffect(() => {
    localStorage.setItem('loginData', JSON.stringify(loginData));
  }, [loginData]);

  useEffect(() => {
    // Get login data from localStorage
    const userLogins = JSON.parse(localStorage.getItem("userLogins")) || {};
    const users = JSON.parse(localStorage.getItem("users")) || [];

    console.log("Users:", users);
    console.log("User Logins:", userLogins);

    // Add some sample data if no data exists
    if (users.length === 0) {
      const sampleUsers = [
        { 
          firstName: "John", 
          lastName: "Doe", 
          email: "john.doe@example.com", 
          isActive: true 
        },
        { 
          firstName: "Jane", 
          lastName: "Smith", 
          email: "jane.smith@gmail.com", 
          isActive: true 
        },
        { 
          firstName: "Admin", 
          lastName: "User", 
          email: "admin@enkonix.in", 
          isActive: true 
        }
      ];
      localStorage.setItem("users", JSON.stringify(sampleUsers));
      
      const sampleLogins = {
        "john.doe@example.com": Date.now() - 86400000, // 1 day ago
        "jane.smith@gmail.com": Date.now() - 3600000,  // 1 hour ago
        "admin@enkonix.in": Date.now() - 1800000       // 30 mins ago
      };
      localStorage.setItem("userLogins", JSON.stringify(sampleLogins));
    }

    // Section 4: Most Active Users (top 5 by login count)
    const userLoginCounts = {};
    Object.entries(userLogins).forEach(([email]) => {
      userLoginCounts[email] = (userLoginCounts[email] || 0) + 1;
    });
    
    const activeUsersList = users
      .filter(user => user && user.firstName && user.lastName && user.email) // Validate user data
      .map(u => ({
        username: `${u.firstName} ${u.lastName}`,
        email: u.email,
        count: userLoginCounts[u.email] || 0
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
    setMostActiveUsers(activeUsersList);

    // Section 5: Email Domain Stats with validation
    const domainCounts = {};
    users.forEach(u => {
      if (u && u.email && typeof u.email === 'string' && u.email.includes('@')) {
        const domain = u.email.split('@')[1] || 'unknown';
        domainCounts[domain] = (domainCounts[domain] || 0) + 1;
      }
    });
    setEmailDomains(Object.entries(domainCounts).map(([domain, count]) => ({ domain, count })));

    // Map email to username and login time with validation
    const loginRows = Object.entries(userLogins)
      .filter(([email, timestamp]) => {
        // Validate email exists in users and timestamp is valid
        const userExists = users.some(u => u && u.email === email);
        const timestampValid = timestamp && !isNaN(new Date(timestamp).getTime());
        return userExists && timestampValid;
      })
      .map(([email, loginTime]) => {
        const user = users.find(u => u && u.email === email);
        return {
          username: user ? `${user.firstName || 'Unknown'} ${user.lastName || ''}`.trim() : "Unknown User",
          email: email || 'No Email',
          loginTime: new Date(loginTime).toLocaleString() || 'Invalid Date'
        };
      });
    setLogins(loginRows);

    // Section 2: User Statistics with validation
    const validUsers = users.filter(u => u && u.email);
    const totalUsers = validUsers.length;
    const today = new Date();
    const loginsToday = loginRows.filter(row => {
      try {
        const d = new Date(row.loginTime);
        return d.getDate() === today.getDate() &&
          d.getMonth() === today.getMonth() &&
          d.getFullYear() === today.getFullYear();
      } catch (error) {
        return false;
      }
    }).length;
    setStats({ totalUsers, loginsToday });

    // Section 3: Recent Logins (last 5) with validation
    const validRecentLogins = loginRows
      .filter(row => row.username && row.email && row.loginTime)
      .slice(-5)
      .reverse();
    setRecentLogins(validRecentLogins);

  }, []);

  useEffect(() => {
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
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", customLangChange);
    };
  }, []);

  useEffect(() => {
    // Listen for theme changes
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
    // Listen for theme changes from header
    const syncTheme = () => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      }
    };
    window.addEventListener("storage", syncTheme);
    window.addEventListener("themeChange", syncTheme);
    syncTheme();
    return () => {
      window.removeEventListener("storage", syncTheme);
      window.removeEventListener("themeChange", syncTheme);
    };
  }, []);

  useEffect(() => {
    // --- Bar Chart: Calculate logins per day from userLogins ---
    const userLogins = JSON.parse(localStorage.getItem("userLogins")) || {};
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // userLogins: { email: timestamp }
    const dayCounts = {
      Sunday: 0,
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0
    };
    Object.values(userLogins).forEach(ts => {
      const d = new Date(ts);
      const day = d.toLocaleDateString('en-US', { weekday: 'long' });
      if (dayCounts[day] !== undefined) dayCounts[day]++;
    });
    setLoginData(dayCounts);

    // --- Pie Chart: Calculate active/inactive users ---
    let active = 0, inactive = 0;
    users.forEach(u => {
      if (u.isActive) active++;
      else inactive++;
    });
    setUserStatus({ active, inactive });
  }, []);

  // Bar chart config (Daily Logins from localStorage)
const barData = {
  labels: Object.keys(loginData),
  datasets: [
    {
      label: 'Logins',
      data: Object.values(loginData),
      backgroundColor: 'rgba(75,128,179,0.7)',
      borderColor: '#4B80B3',
      borderWidth: 2,
      borderRadius: 8,
      maxBarThickness: 40,
    },
  ],
};

const barOptions = {
  indexAxis: 'y', // This makes the bars horizontal
  responsive: true,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Daily Login Statistics',
      color: '#4B80B3',
      font: { size: 20, weight: 'bold' }
    },
    tooltip: {
      backgroundColor: '#4B80B3',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#fff',
      borderWidth: 2,
    }
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: { color: '#e5e7eb' },
      ticks: { color: '#181818', font: { size: 14 } }
    },
    y: {
      grid: { display: false },
      ticks: { color: '#181818', font: { size: 14, weight: 'bold' } }
    },
  },
};

  // Pie chart config (User Status from localStorage)
const pieData = {
  labels: ['Active Users', 'Inactive Users'],
  datasets: [
    {
      data: [userStatus.active, userStatus.inactive],
      backgroundColor: ['#4B80B3', '#000'],
      borderColor: ['#fff', '#fff'],
      borderWidth: 3,
      hoverOffset: 12,
    },
  ],
};
const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#181818',
        font: { size: 16, weight: 'bold' }
      }
    },
    title: {
      display: true,
      text: 'User Status',
      color: '#4B80B3',
      font: { size: 20, weight: 'bold' }
    },
    tooltip: {
      backgroundColor: '#4B80B3',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#fff',
      borderWidth: 2,
    }
  },
};

  // Add dark mode classes to main container and tables
  return (
    <div className={`w-full min-h-screen p-8 pt-24 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white`}>
      <div className="w-full mb-10">
        <h1 className="text-4xl font-extrabold text-[#4B80B3] text-center mb-6 drop-shadow-lg">
          Admin Dashboard
        </h1>
        
        {/* Add validation info */}
        <div className="text-center mb-4">
          <p className="text-sm text-black dark:text-white">
            Total Users: {JSON.parse(localStorage.getItem("users") || "[]").length} | 
            Total Logins: {Object.keys(JSON.parse(localStorage.getItem("userLogins") || "{}")).length}
          </p>
        </div>
      </div>

      {/* Section 1: Logins Table with better validation display */}
      <section className="w-full mb-10">
        <h2 className="text-2xl font-bold mb-4">User Logins</h2>
        <div className="overflow-x-auto">
          <table className={`w-full rounded-lg shadow text-left ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
            <thead>
              <tr className={`${isDark ? "bg-black text-white" : "bg-black text-white"}`}>
                <th className="py-3 px-4 font-semibold text-left">Username</th>
                <th className="py-3 px-4 font-semibold text-left">Email</th>
                <th className="py-3 px-4 font-semibold text-left">Login Time</th>
              </tr>
            </thead>
            <tbody>
              {logins.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-4 px-4 text-center">
                    <div className="text-black">
                      <p>No login data available.</p>
                      <p className="text-sm mt-2">Login to create sample data or check localStorage.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                logins.map((row, idx) => (
                  <tr key={idx} className={`border-b last:border-none ${isDark ? "border-black" : "border-gray-200"}`}>
                    <td className="py-3 px-4">{row.username}</td>
                    <td className="py-3 px-4">{row.email}</td>
                    <td className="py-3 px-4">{row.loginTime}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: User Statistics */}
      <section className="w-full mb-10 dark:bg-black dark:text-white">
        <h2 className="text-2xl font-bold mb-4">User Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`rounded-lg shadow p-6 flex flex-col items-center ${isDark ? "bg-black text-white border border-black" : "bg-white text-black border border-black"}`}>
            <span className="text-4xl font-bold text-[#4B80B3]">{stats.totalUsers}</span>
            <span className="mt-2 text-lg">{isDark ? <span className="text-white">Total Users</span> : "Total Users"}</span>
          </div>
          <div className={`rounded-lg shadow p-6 flex flex-col items-center ${isDark ? "bg-black text-white border border-black" : "bg-white text-black border border-black"}`}>
            <span className="text-4xl font-bold text-[#4B80B3]">{stats.loginsToday}</span>
            <span className="mt-2 text-lg">{isDark ? <span className="text-white">Logins Today</span> : "Logins Today"}</span>
          </div>
        </div>
      </section>

      {/* Section 3: Recent Logins */}
      <section className="w-full mb-10 dark:bg-black dark:text-white">
        <h2 className="text-2xl font-bold mb-4">Recent Logins</h2>
        <div className="overflow-x-auto">
          <table className={`w-full rounded-lg shadow text-left ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
            <thead>
              <tr className={`${isDark ? "bg-black text-white" : "bg-black text-white"}`}>
                <th className="py-3 px-4 font-semibold text-left">Username</th>
                <th className="py-3 px-4 font-semibold text-left">Email</th>
                <th className="py-3 px-4 font-semibold text-left">Login Time</th>
              </tr>
            </thead>
            <tbody>
              {recentLogins.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-4 px-4 text-center text-gray-500">{isDark ? <span className="text-gray-400">No recent logins found.</span> : "No recent logins found."}</td>
                </tr>
              ) : (
                recentLogins.map((row, idx) => (
                  <tr key={idx} className={`border-b last:border-none ${isDark ? "border-black" : "border-gray-200"}`}>
                    <td className="py-3 px-4">{row.username}</td>
                    <td className="py-3 px-4">{row.email}</td>
                    <td className="py-3 px-4">{row.loginTime}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Most Active Users */}
      <section className="w-full mb-10 dark:bg-black dark:text-white">
        <h2 className="text-2xl font-bold mb-4">Most Active Users</h2>
        <div className="overflow-x-auto">
          <table className={`w-full rounded-lg shadow text-left ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
            <thead>
              <tr className={`${isDark ? "bg-black text-white" : "bg-black text-white"}`}>
                <th className="py-3 px-4 font-semibold text-left">Username</th>
                <th className="py-3 px-4 font-semibold text-left">Email</th>
                <th className="py-3 px-4 font-semibold text-left">Login Count</th>
              </tr>
            </thead>
            <tbody>
              {mostActiveUsers.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-4 px-4 text-center text-gray-500">{isDark ? <span className="text-gray-400">No active users found.</span> : "No active users found."}</td>
                </tr>
              ) : (
                mostActiveUsers.map((row, idx) => (
                  <tr key={idx} className={`border-b last:border-none ${isDark ? "border-black" : "border-gray-200"}`}>
                    <td className="py-3 px-4">{row.username}</td>
                    <td className="py-3 px-4">{row.email}</td>
                    <td className="py-3 px-4">{row.count}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Charts Section */}
      <section className="w-full mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 flex flex-col items-center justify-center border border-black dark:border-gray-600">
          <Bar data={barData} options={barOptions} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 flex flex-col items-center justify-center border border-black dark:border-gray-600">
          <div style={{ width: "260px", height: "260px" }}>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default AdminDashboard;

// Update loginData for today on successful login
const loginData = JSON.parse(localStorage.getItem('loginData')) || {
  Sunday: 0,
  Monday: 0,
  Tuesday: 0,
  Wednesday: 0,
  Thursday: 0,
  Friday: 0,
  Saturday: 0
};
const today = new Date();
const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
loginData[dayName] = (loginData[dayName] || 0) + 1;
localStorage.setItem('loginData', JSON.stringify(loginData));
