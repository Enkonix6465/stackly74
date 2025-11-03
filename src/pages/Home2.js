import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import video from "../images/home2-law.mp4";
import { useNavigate } from "react-router-dom";
import school from "../images/school.jpg";
import water from "../images/water.jpg";
import medical from "../images/medical.jpg";
import digital from "../images/digital.jpg";	
import training from "../images/training.jpg";
import drive from "../images/drive.jpg";
// Translation object for all static content
const translations = {
	en: {
		heroTitle: "Building Hope, Changing Lives Together",
		heroDesc: "Join our mission to create lasting positive impact in communities worldwide through compassionate action and sustainable support.",
		getStarted: "Start Making a Difference",
		learnMore: "Learn More About Us",
		// Our Mission Section
		missionTitle: "Building a better world for and with children",
		missionDesc: "We work hard to protect children from harm and help them access quality education and health services.",
		// Service Areas
		health: {
			title: "Health",
			desc: "We improve the health of children and families so children no longer die of preventable illnesses and live past their fifth birthday."
		},
		education: {
			title: "Education",
			desc: "We create greater access to quality education and ensure that girls and boys are able to learn in safe and positive environments."
		},
		protect: {
			title: "Protect",
			desc: "We ensure children are safe at all times and prevent their exposure to abuse, neglect, exploitation and violence."
		},
		support: {
			title: "Support",
			desc: "When disaster strikes, we ensure that children are given care and emotional support to survive, recover and continue to learn and live a normal life."
		},
		// Donation CTA Section
		donationTitle: "Become a",
		donationHighlight: "regular giver",
		donationSubtitle: "and save a child's life today",
		donationDesc: "Your regular donation can help to make sure the world's most vulnerable children have access to clean drinking water, won't go hungry or miss out on life-saving medicines.",
		donateNow: "DONATE NOW",
		// Impact Journey Section
		journeyTitle: "The Journey of Hope",
		journeySubtitle: "See how your donation transforms lives step by step",
		journeySteps: [
			{
				id: 1,
				title: "Immediate Relief",
				time: "Day 1",
				description: "Emergency supplies reach families in need",
				icon: "🚑"
			},
			{
				id: 2,
				title: "Basic Needs Met",
				time: "Week 1",
				description: "Clean water, food, and medical care provided",
				icon: "💧"
			},
			{
				id: 3,
				title: "Education Begins",
				time: "Month 1",
				description: "Children return to safe learning environments",
				icon: "📚"
			},
			{
				id: 4,
				title: "Community Growth",
				time: "Year 1",
				description: "Sustainable programs build stronger communities",
				icon: "🌱"
			}
		],

		// Donation options
		donationOptions: [
			{
				id: 1,
				title: 'Essential Support',
				amount: 25,
				description: 'Perfect for starting your giving journey',
				impact: [
					'Provides 10 nutritious meals',
					'Clean water for 1 person for a month',
					'School supplies for 2 children'
				],
				popular: false,
				color: 'from-gray-200 to-gray-300'
			},
			{
				id: 2,
				title: 'Impact Maker',
				amount: 50,
				description: 'Make a significant difference in communities',
				impact: [
					'Medical care for 5 children',
					'Plant 25 trees in deforested areas',
					'Support a family for 2 weeks'
				],
				popular: true,
				color: 'from-blue-400 to-blue-500'
			},
			{
				id: 3,
				title: 'Change Champion',
				amount: 100,
				description: 'Transform lives with substantial impact',
				impact: [
					'Build a clean water well section',
					'Fund education for 1 child for a year',
					'Provide healthcare for an entire village'
				],
				popular: false,
				color: 'from-gray-700 to-gray-800'
			}
		],

		// Gallery categories
		categories: [
			{ id: 'all', name: 'All Photos', count: 24 },
			{ id: 'education', name: 'Education', count: 8 },
			{ id: 'health', name: 'Healthcare', count: 6 },
			{ id: 'water', name: 'Clean Water', count: 5 },
			{ id: 'community', name: 'Community', count: 5 }
		],

		// Gallery items
		galleryItems: [
			{
				id: 1,
				category: 'education',
				title: 'New School Opening',
				location: 'Rural Kenya',
				description: 'Children celebrating their first day at our newly built primary school',
				impact: '250+ students now have access to quality education',
				date: 'March 15, 2024'
			},
			{
				id: 2,
				category: 'water',
				title: 'Clean Water Access',
				location: 'Uganda Village',
				description: 'Community members gathering at the new water well',
				impact: '500 people now have clean drinking water',
				date: 'February 28, 2024'
			},
			{
				id: 3,
				category: 'health',
				title: 'Mobile Medical Camp',
				location: 'Remote India',
				description: 'Doctors providing free healthcare services to villagers',
				impact: '1,200 patients treated in one week',
				date: 'April 2, 2024'
			},
			{
				id: 4,
				category: 'education',
				title: 'Digital Learning',
				location: 'Bangladesh',
				description: 'Students using tablets for interactive learning',
				impact: 'Digital literacy for 800+ children',
				date: 'January 20, 2024'
			},
			{
				id: 5,
				category: 'community',
				title: 'Community Training',
				location: 'Philippines',
				description: 'Sustainable agriculture workshop for local farmers',
				impact: '150 families trained in modern farming techniques',
				date: 'March 8, 2024'
			},
			{
				id: 6,
				category: 'health',
				title: 'Vaccination Drive',
				location: 'Nigeria',
				description: 'Children receiving life-saving vaccinations',
				impact: '3,000 children vaccinated against preventable diseases',
				date: 'February 14, 2024'
			}
		],

		// Common labels
		viewStoryLabel: 'View Story'
	},
	ar: {
		heroTitle: "بناء الأمل وتغيير الحياة معًا",
		heroDesc: "انضم إلى مهمتنا لخلق تأثير إيجابي دائم في المجتمعات حول العالم من خلال العمل الرحيم والدعم المستدام.",
		getStarted: "ابدأ في صنع الفرق",
		learnMore: "تعرف أكثر عنا",
		// Our Mission Section
		missionTitle: "بناء عالم أفضل للأطفال ومعهم",
		missionDesc: "نعمل بجد لحماية الأطفال من الأذى ومساعدتهم في الحصول على التعليم الجيد والخدمات الصحية.",
		// Service Areas
		health: {
			title: "الصحة",
			desc: "نحسن صحة الأطفال والأسر حتى لا يموت الأطفال من الأمراض التي يمكن الوقاية منها ويعيشوا بعد عيد ميلادهم الخامس."
		},
		education: {
			title: "التعليم",
			desc: "نخلق وصولاً أكبر للتعليم الجيد ونضمن أن الفتيات والأولاد قادرون على التعلم في بيئات آمنة وإيجابية."
		},
		protect: {
			title: "الحماية",
			desc: "نضمن أن الأطفال آمنون في جميع الأوقات ونمنع تعرضهم لسوء المعاملة والإهمال والاستغلال والعنف."
		},
		support: {
			title: "الدعم",
			desc: "عندما تضرب الكارثة، نضمن أن الأطفال يحصلون على الرعاية والدعم العاطفي للبقاء والتعافي والاستمرار في التعلم والعيش حياة طبيعية."
		},
		// Donation CTA Section
		donationTitle: "كن",
		donationHighlight: "مانحًا منتظمًا",
		donationSubtitle: "وأنقذ حياة طفل اليوم",
		donationDesc: "تبرعك المنتظم يمكن أن يساعد في التأكد من أن أطفال العالم الأكثر ضعفًا لديهم إمكانية الوصول إلى المياه الصالحة للشرب، ولن يجوعوا أو يفوتوا الأدوية المنقذة للحياة.",
		donateNow: "تبرع الآن",
		// Impact Journey Section
		journeyTitle: "رحلة الأمل",
		journeySubtitle: "اكتشف كيف تحول تبرعاتك الحياة خطوة بخطوة",
		journeySteps: [
			{
				id: 1,
				title: "الإغاثة الفورية",
				time: "اليوم الأول",
				description: "الإمدادات الطارئة تصل للعائلات المحتاجة",
				icon: "🚑"
			},
			{
				id: 2,
				title: "تلبية الاحتياجات الأساسية",
				time: "الأسبوع الأول",
				description: "توفير المياه النظيفة والطعام والرعاية الطبية",
				icon: "💧"
			},
			{
				id: 3,
				title: "بداية التعليم",
				time: "الشهر الأول",
				description: "عودة الأطفال إلى بيئات تعلم آمنة",
				icon: "📚"
			},
			{
				id: 4,
				title: "نمو المجتمع",
				time: "السنة الأولى",
				description: "البرامج المستدامة تبني مجتمعات أقوى",
				icon: "🌱"
			}
		],

		// Donation options
		donationOptions: [
			{
				id: 1,
				title: 'الدعم الأساسي',
				amount: 25,
				description: 'مثالي لبدء رحلة العطاء الخاصة بك',
				impact: [
					'يوفر 10 وجبات مغذية',
					'مياه نظيفة لشخص واحد لمدة شهر',
					'لوازم مدرسية لطفلين'
				],
				popular: false,
				color: 'from-gray-200 to-gray-300'
			},
			{
				id: 2,
				title: 'صانع التأثير',
				amount: 50,
				description: 'اصنع فرقاً كبيراً في المجتمعات',
				impact: [
					'رعاية طبية لـ 5 أطفال',
					'زراعة 25 شجرة في المناطق المتصحرة',
					'دعم أسرة لمدة أسبوعين'
				],
				popular: true,
				color: 'from-blue-400 to-blue-500'
			},
			{
				id: 3,
				title: 'بطل التغيير',
				amount: 100,
				description: 'غيّر الحياة بتأثير كبير',
				impact: [
					'بناء قسم من بئر مياه نظيفة',
					'تمويل تعليم طفل واحد لمدة سنة',
					'توفير الرعاية الصحية لقرية بأكملها'
				],
				popular: false,
				color: 'from-gray-700 to-gray-800'
			}
		],

		// Gallery categories
		categories: [
			{ id: 'all', name: 'جميع الصور', count: 24 },
			{ id: 'education', name: 'التعليم', count: 8 },
			{ id: 'health', name: 'الرعاية الصحية', count: 6 },
			{ id: 'water', name: 'المياه النظيفة', count: 5 },
			{ id: 'community', name: 'المجتمع', count: 5 }
		],

		// Gallery items
		galleryItems: [
			{
				id: 1,
				category: 'education',
				title: 'افتتاح مدرسة جديدة',
				location: 'ريف كينيا',
				description: 'الأطفال يحتفلون بيومهم الأول في مدرستنا الابتدائية المبنية حديثاً',
				impact: '250+ طالب لديهم الآن إمكانية الوصول للتعليم الجيد',
				date: '15 مارس 2024'
			},
			{
				id: 2,
				category: 'water',
				title: 'الوصول للمياه النظيفة',
				location: 'قرية أوغندا',
				description: 'أفراد المجتمع يتجمعون عند بئر المياه الجديد',
				impact: '500 شخص لديهم الآن مياه شرب نظيفة',
				date: '28 فبراير 2024'
			},
			{
				id: 3,
				category: 'health',
				title: 'مخيم طبي متنقل',
				location: 'الهند النائية',
				description: 'أطباء يقدمون خدمات رعاية صحية مجانية للقرويين',
				impact: '1,200 مريض تم علاجهم في أسبوع واحد',
				date: '2 أبريل 2024'
			},
			{
				id: 4,
				category: 'education',
				title: 'التعلم الرقمي',
				location: 'بنغلاديش',
				description: 'طلاب يستخدمون الأجهزة اللوحية للتعلم التفاعلي',
				impact: 'محو الأمية الرقمية لأكثر من 800 طفل',
				date: '20 يناير 2024'
			},
			{
				id: 5,
				category: 'community',
				title: 'التدريب المجتمعي',
				location: 'الفلبين',
				description: 'ورشة عمل الزراعة المستدامة للمزارعين المحليين',
				impact: '150 عائلة تدربت على تقنيات الزراعة الحديثة',
				date: '8 مارس 2024'
			},
			{
				id: 6,
				category: 'health',
				title: 'حملة التطعيم',
				location: 'نيجيريا',
				description: 'أطفال يتلقون التطعيمات المنقذة للحياة',
				impact: '3,000 طفل تم تطعيمهم ضد الأمراض القابلة للوقاية',
				date: '14 فبراير 2024'
			}
		],

		// Common labels
		viewStoryLabel: 'عرض القصة'
	},
	he: {
		heroTitle: "בונים תקווה, משנים חיים יחד",
		heroDesc: "הצטרפו למשימה שלנו ליצור השפעה חיובית מתמשכת בקהילות ברחבי העולם באמצעות פעולה חמלה ותמיכה בת-קיימא.",
		getStarted: "התחילו לעשות הבדל",
		learnMore: "למדו עוד עלינו",
		// Our Mission Section
		missionTitle: "בונים עולם טוב יותר עבור ועם ילדים",
		missionDesc: "אנו עובדים קשה כדי להגן על ילדים מפני נזק ולעזור להם לקבל חינוך איכותי ושירותי בריאות.",
		// Service Areas
		health: {
			title: "בריאות",
			desc: "אנו משפרים את בריאות הילדים והמשפחות כך שילדים לא ימותו עוד ממחלות הניתנות למניעה ויחיו מעבר ליום הולדתם החמישי."
		},
		education: {
			title: "חינוך",
			desc: "אנו יוצרים גישה רחבה יותר לחינוך איכותי ומבטיחים שבנות ובנים מסוגלים ללמוד בסביבות בטוחות וחיוביות."
		},
		protect: {
			title: "הגנה",
			desc: "אנו מבטיחים שילדים בטוחים בכל עת ומונעים את החשיפה שלהם להתעללות, הזנחה, ניצול ואלימות."
		},
		support: {
			title: "תמיכה",
			desc: "כאשר אסון מתרחש, אנו מבטיחים שילדים מקבלים טיפול ותמיכה רגשית כדי לשרוד, להתאושש ולהמשיך ללמוד ולחיות חיים נורמליים."
		},
		// Donation CTA Section
		donationTitle: "הפכו ל",
		donationHighlight: "תורמים קבועים",
		donationSubtitle: "והצילו חיי ילד היום",
		donationDesc: "התרומה הקבועה שלכם יכולה לעזור לוודא שהילדים הפגיעים ביותר בעולם יקבלו גישה למים נקיים לשתייה, לא ירעבו ולא יחמיצו תרופות מצילות חיים.",
		donateNow: "תרמו עכשיו",
		// Impact Journey Section
		journeyTitle: "מסע התקווה",
		journeySubtitle: "ראו איך התרומה שלכם משנה חיים צעד אחר צעד",
		journeySteps: [
			{
				id: 1,
				title: "סיוע מיידי",
				time: "יום 1",
				description: "אספקה חירום מגיעה למשפחות נזקקות",
				icon: "🚑"
			},
			{
				id: 2,
				title: "מענה לצרכים בסיסיים",
				time: "שבוע 1",
				description: "מים נקיים, מזון וטיפול רפואי מסופקים",
				icon: "💧"
			},
			{
				id: 3,
				title: "תחילת החינוך",
				time: "חודש 1",
				description: "ילדים חוזרים לסביבות למידה בטוחות",
				icon: "📚"
			},
			{
				id: 4,
				title: "צמיחת הקהילה",
				time: "שנה 1",
				description: "תוכניות בנות קיימא בונות קהילות חזקות יותר",
				icon: "🌱"
			}
		],

		// Donation options
		donationOptions: [
			{
				id: 1,
				title: 'תמיכה בסיסית',
				amount: 25,
				description: 'מושלם להתחלת מסע הנתינה שלכם',
				impact: [
					'מספק 10 ארוחות מזינות',
					'מים נקיים לאדם אחד למשך חודש',
					'ציוד לבית ספר ל-2 ילדים'
				],
				popular: false,
				color: 'from-gray-200 to-gray-300'
			},
			{
				id: 2,
				title: 'יוצר השפעה',
				amount: 50,
				description: 'עשו הבדל משמעותי בקהילות',
				impact: [
					'טיפול רפואי ל-5 ילדים',
					'נטיעת 25 עצים באזורים מכוערים',
					'תמיכה במשפחה למשך שבועיים'
				],
				popular: true,
				color: 'from-blue-400 to-blue-500'
			},
			{
				id: 3,
				title: 'אלוף השינוי',
				amount: 100,
				description: 'שנו חיים עם השפעה משמעותית',
				impact: [
					'בנו חלק מבאר מים נקיים',
					'מימון חינוך לילד אחד למשך שנה',
					'מתן שירותי בריאות לכפר שלם'
				],
				popular: false,
				color: 'from-gray-700 to-gray-800'
			}
		],

		// Gallery categories
		categories: [
			{ id: 'all', name: 'כל התמונות', count: 24 },
			{ id: 'education', name: 'חינוך', count: 8 },
			{ id: 'health', name: 'שירותי בריאות', count: 6 },
			{ id: 'water', name: 'מים נקיים', count: 5 },
			{ id: 'community', name: 'קהילה', count: 5 }
		],

		// Gallery items
		galleryItems: [
			{
				id: 1,
				category: 'education',
				title: 'פתיחת בית ספר חדש',
				location: 'כפר קניה',
				description: 'ילדים חוגגים את היום הראשון שלהם בבית הספר היסודי החדש שלנו',
				impact: '250+ תלמידים יש להם כעת גישה לחינוך איכותי',
				date: '15 במרץ 2024'
			},
			{
				id: 2,
				category: 'water',
				title: 'גישה למים נקיים',
				location: 'כפר אוגנדה',
				description: 'חברי הקהילה מתאספים ליד באר המים החדש',
				impact: '500 אנשים יש להם כעת מי שתייה נקיים',
				date: '28 בפברואר 2024'
			},
			{
				id: 3,
				category: 'health',
				title: 'מחנה רפואי נייד',
				location: 'הודו מרוחקת',
				description: 'רופאים מספקים שירותי בריאות חינמיים לכפריים',
				impact: '1,200 מטופלים טופלו בשבוע אחד',
				date: '2 באפריל 2024'
			},
			{
				id: 4,
				category: 'education',
				title: 'למידה דיגיטלית',
				location: 'בנגלדש',
				description: 'תלמידים משתמשים בטאבלטים ללמידה אינטראקטיבית',
				impact: 'אוריינות דיגיטלית ל-800+ ילדים',
				date: '20 בינואר 2024'
			},
			{
				id: 5,
				category: 'community',
				title: 'הכשרה קהילתית',
				location: 'פיליפינים',
				description: 'סדנת חקלאות בת-קיימא לחקלאים מקומיים',
				impact: '150 משפחות הוכשרו בטכניקות חקלאות מודרניות',
				date: '8 במרץ 2024'
			},
			{
				id: 6,
				category: 'health',
				title: 'מבצע חיסונים',
				location: 'ניגריה',
				description: 'ילדים מקבלים חיסונים מצילי חיים',
				impact: '3,000 ילדים חוסנו נגד מחלות הניתנות למניעה',
				date: '14 בפברואר 2024'
			}
		],

		// Common labels
		viewStoryLabel: 'צפה בסיפור'
	}
};

const Home2 = () => {
	const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
	const navigate = useNavigate();

	useEffect(() => {
		const handleLangChange = (e) => {
			setLanguage(e.detail || localStorage.getItem("language") || "en");
		};
		window.addEventListener("languageChange", handleLangChange);
		return () => window.removeEventListener("languageChange", handleLangChange);
	}, []);

	const t = translations[language] || translations.en;
	const [selectedCard, setSelectedCard] = useState(1);
	const [activeStep, setActiveStep] = useState(1);
	const [customAmount, setCustomAmount] = useState('');
	const [isCustomActive, setIsCustomActive] = useState(false);

	// Use translated data
	const donationOptions = t.donationOptions;
	const [activeCategory, setActiveCategory] = useState('all');
	const [selectedImage, setSelectedImage] = useState(null);

	const categories = t.categories;

	const galleryItems = t.galleryItems;

	// Add images to gallery items
	const galleryImagesMap = [school, water, medical, digital, training, drive];
	const galleryItemsWithImages = galleryItems.map((item, index) => ({
		...item,
		image: galleryImagesMap[index % galleryImagesMap.length]
	}));

	const filteredItems = activeCategory === 'all'
		? galleryItemsWithImages
		: galleryItemsWithImages.filter(item => item.category === activeCategory);

	const openModal = (item) => {
		setSelectedImage(item);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};
	const selectedOption = donationOptions.find(option => option.id === selectedCard);

	return (
		<div className="w-screen min-h-screen bg-white dark:bg-black overflow-x-hidden">
			{/* Hero Section */}
			<section className="relative w-screen h-screen overflow-hidden bg-white dark:bg-black mb-10">
				{/* Background Video */}
				<video
					className="absolute inset-0 w-full h-full object-cover"
					src={video}
					autoPlay
					loop
					muted
					playsInline
				></video>

				{/* Overlay (light & dark mode) */}
				<div className="absolute inset-0 w-full h-full bg-black/50 transition-colors duration-500"></div>

				{/* Content */}
				<div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4">
					<motion.h1
						className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg mb-6"
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						{t.heroTitle}
					</motion.h1>

					<motion.p
						className="text-lg md:text-2xl max-w-3xl text-white drop-shadow mb-8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}
					>
						{t.heroDesc}
					</motion.p>

					{/* Call to Action Buttons */}
					<motion.div
						className="flex flex-wrap gap-4 justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 1 }}
					>
						<button
							className="px-8 py-4 rounded-full font-semibold text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-black"
							style={{ backgroundColor: '#4B80B3' }}
							onClick={() => navigate('/donate')}
						>
							{t.getStarted}
						</button>
						<button
							className="px-8 py-4 rounded-full font-semibold text-white border-2 border-white shadow-lg transition-all duration-300 hover:bg-white hover:text-black"
							onClick={() => navigate('/about')}
						>
							{t.learnMore}
						</button>
					</motion.div>
				</div>
			</section>

			{/* Our Mission Section */}
			<motion.section
				className="py-16 px-4 md:px-8 bg-white dark:bg-black"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<div className="container mx-auto max-w-6xl">
					{/* Section Header */}
					<div className="text-center mb-16">
						<motion.h2
							className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							{t.missionTitle}
						</motion.h2>
						<motion.p
							className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
						>
							{t.missionDesc}
						</motion.p>
					</div>

					{/* Services Grid */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
						initial="hidden"
						whileInView="visible"
						variants={{
							hidden: {},
							visible: {
								transition: {
									staggerChildren: 0.2
								}
							}
						}}
						viewport={{ once: true }}
					>
						{/* Health */}
						<motion.div
							className="text-center"
							variants={{
								hidden: { opacity: 0, y: 40 },
								visible: { opacity: 1, y: 0 }
							}}
							transition={{ duration: 0.6 }}
						>
							<div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4B80B3' }}>
								<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{t.health.title}</h3>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t.health.desc}</p>
						</motion.div>

						{/* Education */}
						<motion.div
							className="text-center"
							variants={{
								hidden: { opacity: 0, y: 40 },
								visible: { opacity: 1, y: 0 }
							}}
							transition={{ duration: 0.6 }}
						>
							<div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4B80B3' }}>
								<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{t.education.title}</h3>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t.education.desc}</p>
						</motion.div>

						{/* Protect */}
						<motion.div
							className="text-center"
							variants={{
								hidden: { opacity: 0, y: 40 },
								visible: { opacity: 1, y: 0 }
							}}
							transition={{ duration: 0.6 }}
						>
							<div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4B80B3' }}>
								<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{t.protect.title}</h3>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t.protect.desc}</p>
						</motion.div>

						{/* Support */}
						<motion.div
							className="text-center"
							variants={{
								hidden: { opacity: 0, y: 40 },
								visible: { opacity: 1, y: 0 }
							}}
							transition={{ duration: 0.6 }}
						>
							<div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4B80B3' }}>
								<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{t.support.title}</h3>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t.support.desc}</p>
						</motion.div>
					</motion.div>
				</div>
			</motion.section>

			{/* Donation CTA Section */}
			<motion.section
				className="py-0 overflow-hidden bg-white dark:bg-black"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<div className="w-full flex flex-col lg:flex-row min-h-[500px]">
					{/* Left Content */}
					<motion.div
						className="lg:w-1/2 flex items-center p-8 md:p-12 lg:p-16 bg-white dark:bg-black"
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className="max-w-lg">
							<motion.h2
								className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white leading-tight"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
							>
								{t.donationTitle}{" "}
								<span style={{ color: '#4B80B3' }}>{t.donationHighlight}</span>{" "}
								{t.donationSubtitle}
							</motion.h2>

							<motion.p
								className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
							>
								{t.donationDesc}
							</motion.p>

							<motion.button
								className="px-8 py-4 font-bold text-white rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg"
								style={{ backgroundColor: '#4B80B3' }}
								onClick={() => navigate('/donate')}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{t.donateNow}
							</motion.button>
						</div>
					</motion.div>

					{/* Right Image */}
					<motion.div
						className="lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]"
						initial={{ opacity: 0, x: 60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div
							className="w-full h-full bg-cover bg-center bg-no-repeat"
							style={{
								backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
							}}
						>
							{/* Optional overlay content can go here */}
						</div>
					</motion.div>
				</div>
			</motion.section>


			<section className="py-20 bg-white dark:bg-black">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header */}
					<div className="text-center mb-16">
						<h2 className="text-5xl font-bold text-black dark:text-white mb-4">
							Visual <span style={{ color: '#4B80B3' }}>Impact Stories</span>
						</h2>
						<p className="text-xl text-black dark:text-white max-w-2xl mx-auto">
							See the faces and places transformed by your generous support and our collective efforts.
						</p>
					</div>

					{/* Category Filter */}
					<div className="flex flex-wrap justify-center gap-4 mb-12">
						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setActiveCategory(category.id)}
								className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
									? 'text-white shadow-lg transform -translate-y-1'
									: 'bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800'
									}`}
								style={activeCategory === category.id ? { backgroundColor: '#4B80B3' } : {}}
							>
								{category.name}
								<span className={`ml-2 px-2 py-1 rounded-full text-xs ${activeCategory === category.id
									? 'bg-black text-white'
									: 'bg-gray-300 text-black dark:bg-gray-600 dark:text-white'
									}`}>
									{category.count}
								</span>
							</button>
						))}
					</div>

					{/* Gallery Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredItems.map((item) => (
							<div
								key={item.id}
								onClick={() => openModal(item)}
								className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
							>
								<div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl p-1 shadow-lg hover:shadow-2xl transition-all duration-300">
									<div className="bg-white dark:bg-black rounded-xl overflow-hidden">
										{/* Image/Icon */}
										<div className="h-48 flex items-center justify-center text-6xl" style={{ backgroundColor: '#4B80B3' }}>
											{typeof item.image === 'string' && item.image.length <= 2 ? (
												<span className="text-white">{item.image}</span>
											) : (
												<img 
													src={item.image} 
													alt={item.title}
													className="w-full h-full object-cover"
												/>
											)}
										</div>

										{/* Content */}
										<div className="p-6">
											<div className="flex items-start justify-between mb-3">
												<h3 className="text-xl font-bold text-black dark:text-white transition-colors" style={{ color: activeCategory === item.category ? '#4B80B3' : '' }}>
													{item.title}
												</h3>
												<div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
													{typeof item.image === 'string' && item.image.length <= 2 ? (
														<span style={{ color: '#4B80B3' }}>{item.image}</span>
													) : (
														<img 
															src={item.image} 
															alt={item.title}
															className="w-8 h-8 rounded-full object-cover"
														/>
													)}
												</div>
											</div>

											<div className="flex items-center text-black dark:text-white mb-2">
												<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
												</svg>
												<span className="text-sm">{item.location}</span>
											</div>

											<p className="text-black dark:text-white text-sm mb-4 leading-relaxed">
												{item.description}
											</p>

											<div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
												<p className="text-sm font-semibold" style={{ color: '#4B80B3' }}>
													{item.impact}
												</p>
											</div>

											<div className="flex items-center justify-between mt-4 text-sm text-black dark:text-white">
												<span>{item.date}</span>
												<button className="font-semibold transition-colors" style={{ color: '#4B80B3' }}>
													{t.viewStoryLabel} →
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>


				</div>

				{/* Three Panel Charity Section */}
				<section className="py-20 bg-white dark:bg-black">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-2xl">

							{/* Crowdfunding Panel */}
							<motion.div
								className="relative bg-[#4B80B3] text-white p-12 flex flex-col justify-center items-center text-center min-h-[400px]"
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.1 }}
								viewport={{ once: true }}
							>
								<div className="mb-6">
									<h3 className="text-3xl font-bold mb-6 tracking-wide">CROWDFUNDING</h3>
									<div className="w-16 h-1 bg-white mx-auto mb-6"></div>
								</div>

								<p className="text-lg leading-relaxed mb-8 max-w-xs">
									All our charity activities will be better with your donation. We can fundraising from anywhere that you can.
								</p>

								<button
									className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#4B80B3] transition-all duration-300 transform hover:scale-105"
									onClick={() => navigate('/donate')}
								>
									Learn More
								</button>

								{/* Decorative Elements */}
								<div className="absolute top-6 right-6 w-20 h-20 border border-white/20 rounded-full"></div>
								<div className="absolute bottom-6 left-6 w-12 h-12 border border-white/20 rounded-full"></div>
							</motion.div>

							{/* Volunteer Panel - Center without Play Button */}
							<motion.div
								className="relative bg-black text-white p-12 flex flex-col justify-center items-center text-center min-h-[400px] overflow-hidden"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								viewport={{ once: true }}
							>
								{/* Background Image */}
								<div className="absolute inset-0">
									<img
										src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
										alt="Volunteer"
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-black/60"></div>
								</div>

								<div className="relative z-10">
									<div className="mb-6">
										<h3 className="text-2xl font-light italic mb-4">How to become</h3>
										<h2 className="text-4xl font-bold mb-6">Volunteer</h2>
									</div>

									<p className="text-lg text-white mb-8 max-w-xs leading-relaxed">
										Join our community of dedicated volunteers and make a meaningful difference in lives around the world.
									</p>

									<button
										className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
										onClick={() => navigate('/volunteer')}
									>
										Join Now
									</button>
								</div>
							</motion.div>

							{/* Scholarship Panel */}
							<motion.div
								className="relative bg-[#4B80B3] text-white p-12 flex flex-col justify-center items-center text-center min-h-[400px]"
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.3 }}
								viewport={{ once: true }}
							>
								<div className="mb-6">
									<h3 className="text-3xl font-bold mb-6 tracking-wide">GIVE SCHOLARSHIP</h3>
									<div className="w-16 h-1 bg-white mx-auto mb-6"></div>
								</div>

								<p className="text-lg leading-relaxed mb-8 max-w-xs">
									We think that education is best way to help needy. You are nonprofit organization, NGO. If you can, let do it.
								</p>

								<button
									className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#4B80B3] transition-all duration-300 transform hover:scale-105"
									onClick={() => navigate('/scholarship')}
								>
									Learn More
								</button>

								{/* Decorative Elements */}
								<div className="absolute top-6 left-6 w-16 h-16 border border-white/20 rounded-full"></div>
								<div className="absolute bottom-6 right-6 w-24 h-24 border border-white/20 rounded-full"></div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Modal */}
				{selectedImage && (
					<div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
						<div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
							<div className="relative">
								{/* Close Button */}
								<button
									onClick={closeModal}
									className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 z-10"
								>
									<svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>

								{/* Modal Content */}
								<div className="p-8">
									<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
										{/* Image Side */}
										<div className="rounded-2xl p-12 flex items-center justify-center min-h-[300px]" style={{ backgroundColor: '#4B80B3' }}>
											{typeof selectedImage.image === 'string' && selectedImage.image.length <= 2 ? (
												<div className="text-8xl text-white">
													{selectedImage.image}
												</div>
											) : (
												<img 
													src={selectedImage.image} 
													alt={selectedImage.title}
													className="w-full h-full object-cover rounded-xl"
												/>
											)}
										</div>

										{/* Content Side */}
										<div>
											<h3 className="text-3xl font-bold text-black mb-4">
												{selectedImage.title}
											</h3>

											<div className="flex items-center text-black mb-6">
												<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
												</svg>
												<span className="text-lg">{selectedImage.location}</span>
											</div>

											<p className="text-black text-lg mb-6 leading-relaxed">
												{selectedImage.description}
											</p>

											<div className="bg-gray-100 rounded-xl p-4 mb-6 border border-gray-200">
												<h4 className="font-bold text-black mb-2">Impact Created</h4>
												<p style={{ color: '#4B80B3' }}>{selectedImage.impact}</p>
											</div>

											<div className="text-black mb-6">
												<strong>Date:</strong> {selectedImage.date}
											</div>

											<div className="flex space-x-4">
												<button className="flex-1 py-3 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-200" style={{ backgroundColor: '#4B80B3' }}>
													Support Similar Projects
												</button>
												<button className="px-6 py-3 bg-white text-black border border-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200">
													Share
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</section>

		</div>
	);
};
export default Home2;