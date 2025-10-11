/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lottie from "lottie-react";
export default function AIMaxLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // CHANGE THIS if you want another WhatsApp number (include country code)
  const whatsappLink = "https://wa.me/917060569217?text=Hello%20AIMax%2C%20I%20want%20to%20book%20a%20demo";

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.45 },
    }),
  };

  const howAI = [
    {
      title: "AI Strategy & Planning",
      desc: "We audit your operations and identify high-impact AI opportunities — prioritized by ROI and ease of integration.",
      lottie: "https://assets7.lottiefiles.com/packages/lf20_t3pU1m.json" // strategy-like animation
    },
    {
      title: "Seamless Integration",
      desc: "We connect AI to your PMS, CRM, booking systems and APIs — no disruption to daily operations.",
      lottie: "https://assets10.lottiefiles.com/packages/lf20_49rdyysj.json" // workflow/connect animation
    },
    {
      title: "Continuous Optimization",
      desc: "AI models are monitored and retrained; dashboards show impact so you scale what works quickly.",
      lottie: "https://assets2.lottiefiles.com/packages/lf20_jz8muk.json" // analytics/optimization animation
    },
  ];

  const whyAI = [
    {
      title: "Increase Revenue",
      desc: "Dynamic pricing and targeted upsells increase occupancy and RevPAR without manual work.",
      lottie: "https://assets6.lottiefiles.com/packages/lf20_x62chJ.json" // growth chart
    },
    {
      title: "Save Time & Costs",
      desc: "Automate repetitive tasks (emails, follow-ups, scheduling) and reallocate staff to high-value work.",
      lottie: "https://assets7.lottiefiles.com/packages/lf20_w51pcehl.json" // automation
    },
    {
      title: "Better Guest Experience",
      desc: "AI provides instant, personalized recommendations and support — improving NPS and reviews.",
      lottie: "https://assets9.lottiefiles.com/packages/lf20_0yfsb3a1.json" // chatbot/ux
    },
  ];

  const useCases = [
    {
      title: "Smart Property Management",
      desc: "Automate tenant comms, rent reminders, guest check-in flows and document handling.",
      lottie: "https://assets2.lottiefiles.com/packages/lf20_0yfsb3a1.json"
    },
    {
      title: "Dynamic Pricing & Revenue Optimization",
      desc: "Auto-adjust prices based on demand, events, and historical patterns to maximize income.",
      lottie: "https://assets6.lottiefiles.com/packages/lf20_x62chJ.json"
    },
    {
      title: "Automated Lead Generation",
      desc: "Capture leads, qualify them with AI, and automatically deliver targeted follow-ups to increase conversions.",
      lottie: "https://assets10.lottiefiles.com/private_files/lf30_jzv7x9s6.json"
    },
    {
      title: "AI Concierge Services",
      desc: "Offer 24/7 guest assistance, booking changes, and local recommendations with a friendly AI assistant.",
      lottie: "https://assets9.lottiefiles.com/packages/lf20_0yfsb3a1.json"
    },
    {
      title: "Maintenance Prediction",
      desc: "Predict equipment failures and schedule maintenance automatically to avoid downtime and cut costs.",
      lottie: "https://assets7.lottiefiles.com/packages/lf20_w51pcehl.json"
    },
    {
      title: "Analytics & Smart Dashboards",
      desc: "Clear dashboards with KPIs, trends and AI recommendations so managers act with confidence.",
      lottie: "https://assets2.lottiefiles.com/packages/lf20_jz8muk.json"
    },
  ];

  const technologies = [
    { title: "Machine Learning", desc: "Predictive models for pricing, demand, and risk.", lottie: "https://assets7.lottiefiles.com/packages/lf20_t3pU1m.json" },
    { title: "Natural Language Processing", desc: "Understand guest messages and automate conversations.", lottie: "https://assets9.lottiefiles.com/packages/lf20_0yfsb3a1.json" },
    { title: "Robotic Process Automation", desc: "Automate repetitive backend tasks across systems.", lottie: "https://assets7.lottiefiles.com/packages/lf20_w51pcehl.json" },
    { title: "Predictive Analytics", desc: "Turn historical data into proactive decisions.", lottie: "https://assets2.lottiefiles.com/packages/lf20_jz8muk.json" },
    { title: "Computer Vision", desc: "Automate inspections, images & security checks.", lottie: "https://assets4.lottiefiles.com/packages/lf20_snmohqxz.json" },
    { title: "Chatbots & Assistants", desc: "Instant support and upsell flows via chat.", lottie: "https://assets9.lottiefiles.com/packages/lf20_0yfsb3a1.json" },
    { title: "IoT Integration", desc: "Connect sensors and devices for smarter operations.", lottie: "https://assets3.lottiefiles.com/packages/lf20_3vbOcw.json" },
    { title: "Cloud AI Platforms", desc: "Scale AI with secure cloud infra.", lottie: "https://assets5.lottiefiles.com/packages/lf20_x62chJ.json" },
  ];

  const testimonials = [
    { name: "Hotel Manager", role: "Luxury Hotel", avatar: "/avatars/hotel1.png", quote: "AIMax transformed our hotel operations — guest satisfaction jumped, and staff focus shifted to VIP guests." },
    { name: "Real Estate Agency", role: "Property Management", avatar: "/avatars/realestate.png", quote: "We automated tenant onboarding and maintenance workflows — saved dozens of hours weekly." },
    { name: "Investor", role: "Private Investments", avatar: "/avatars/investor.png", quote: "Data-driven insights helped us pick high-performing properties and time purchases better." },
  ];

  // small helper to render lottie web component safely in React
  const LottiePlayer = ({ src, style = {} }) => (
    // using lottie-player web component — it works in client components
    // note: we rely on LottieFiles CDN animation URLs (public JSON)
    <lottie-player
      src={src}
      background="transparent"
      speed="1"
      loop
      autoplay
      style={style}
    />
  );

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed w-full bg-white/70 backdrop-blur z-40">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer font-bold text-indigo-600 text-xl" onClick={() => scrollToSection("hero")}>AIMax Automation</div>
          <ul className="hidden md:flex gap-6 text-sm">
            <li onClick={() => scrollToSection("howAI")} className="cursor-pointer hover:text-indigo-500 transition-colors">How AI Works</li>
            <li onClick={() => scrollToSection("useCases")} className="cursor-pointer hover:text-indigo-500 transition-colors">Use Cases</li>
            <li onClick={() => scrollToSection("technologies")} className="cursor-pointer hover:text-indigo-500 transition-colors">Technologies</li>
            <li onClick={() => scrollToSection("testimonials")} className="cursor-pointer hover:text-indigo-500 transition-colors">Testimonials</li>
            <li onClick={() => scrollToSection("cta")} className="cursor-pointer hover:text-indigo-500 transition-colors">Book Demo</li>
          </ul>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="hidden md:block px-4 py-2 border rounded-md text-sm hover:bg-indigo-600 hover:text-white transition-colors">Book Demo</a>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
        </nav>

        {mobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
            <li onClick={() => scrollToSection("howAI")} className="cursor-pointer hover:text-indigo-500 transition-colors">How AI Works</li>
            <li onClick={() => scrollToSection("useCases")} className="cursor-pointer hover:text-indigo-500 transition-colors">Use Cases</li>
            <li onClick={() => scrollToSection("technologies")} className="cursor-pointer hover:text-indigo-500 transition-colors">Technologies</li>
            <li onClick={() => scrollToSection("testimonials")} className="cursor-pointer hover:text-indigo-500 transition-colors">Testimonials</li>
            <li><a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">Book Demo</a></li>
          </ul>
        )}
      </header>

      <main className="pt-28 relative z-10">
        {/* HERO */}
        <motion.section id="hero" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight text-indigo-700">
              Revolutionize Your Real Estate & Hospitality Business with AI
            </motion.h1>
            <p className="mt-6 text-gray-700">
              Automate operations, enhance guest experience, and maximize revenue with intelligent AI-driven solutions. AIMax combines predictive analytics, automation, and actionable insights to give your business a competitive edge.
            </p>

            <ul className="mt-4 text-gray-700 list-disc list-inside space-y-1">
              <li>Automate repetitive tasks and save hundreds of hours monthly.</li>
              <li>Predict trends and optimize pricing with AI-powered analytics.</li>
              <li>Deliver personalized guest experiences at scale.</li>
            </ul>

            <div className="mt-8 flex gap-4">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Book a Demo
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("howAI")}
                className="px-6 py-3 rounded-md border hover:bg-gray-100 transition"
              >
                See How It Works
              </motion.button>
            </div>
          </div>

          <motion.div className="relative h-80 md:h-96 rounded-xl shadow-xl overflow-hidden" variants={sectionVariants}>
            {/* Hero video (keep if you have it) else replace with a nice Lottie */}
            <video src="/videos/hero-ai.mp4" autoPlay loop muted className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-indigo-800 bg-opacity-20"></div>
          </motion.div>
        </motion.section>

        {/* HOW AI WORKS - stylish cards with Lottie */}
        <motion.section id="howAI" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-indigo-600 text-center">How AI Works — Our Proven Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {howAI.map((item, i) => (
                <motion.div key={i} custom={i} variants={staggerVariants} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:-translate-y-1">
                  <div className="w-36 h-36 mb-4">
                    <LottieSafe src={item.lottie} />
                  </div>
                  <h3 className="font-semibold text-indigo-600 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* WHY AI HELPS - split layout with Lottie */}
        <motion.section id="whyAIHelps" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gradient-to-r from-white via-indigo-50 to-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">Why AI & Automation Help You</h2>
              <p className="text-gray-700 mb-4">AI reduces manual overhead, minimizes errors, and finds growth opportunities hidden in data. Below are the core benefits we deliver consistently:</p>

              <div className="grid gap-4">
                {whyAI.map((item, i) => (
                  <motion.div key={i} custom={i} variants={staggerVariants} className="bg-white rounded-xl p-4 shadow flex items-start gap-4 hover:shadow-xl transition">
                    <div className="w-14 h-14 flex-shrink-0">
                      <LottieSafe src={item.lottie} style={{ width: '56px', height: '56px' }} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-indigo-600">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full h-72 md:h-80 flex items-center justify-center">
              {/* A big analytics Lottie */}
              <LottieSafe src="https://assets2.lottiefiles.com/packages/lf20_jz8muk.json" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </motion.section>

        {/* USE CASES */}
        <motion.section id="useCases" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-indigo-600">Use Cases — Where AIMax Adds Value</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((uc, i) => (
                <motion.div key={i} custom={i} variants={staggerVariants} className="bg-indigo-50 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition transform hover:-translate-y-1">
                  <div className="w-32 h-32 mb-4">
                    <LottieSafe src={uc.lottie} />
                  </div>
                  <h3 className="font-semibold text-indigo-700 mb-2">{uc.title}</h3>
                  <p className="text-gray-700 text-sm">{uc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* TECHNOLOGIES */}
        <motion.section id="technologies" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-indigo-600">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, i) => (
                <motion.div key={i} custom={i} variants={staggerVariants} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition transform hover:-translate-y-1">
                  <div className="w-24 h-24 mb-3">
                    <LottieSafe src={tech.lottie} />
                  </div>
                  <p className="font-medium text-gray-700">{tech.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

     {/* TESTIMONIALS */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Our clients achieve operational excellence</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              quote: 'Our company was struggling to keep up with the demands of our growing business until we found this automation agency.',
              name: 'Sarah M.', role: 'Director, Finance'
            },{
              quote: 'I was skeptical at first about using an automation agency, but I am so glad I did.',
              name: 'John D.', role: 'CEO'
            },{
              quote: "If you're looking for a way to scale your business without sacrificing your personal life, then this automation agency is the way to go.",
              name: 'Amanda L.', role: 'VP, Operations'
            }].map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <div className="text-yellow-400">★★★★★</div>
                <p className="mt-3 text-gray-700">"{t.quote}"</p>
                <div className="mt-4 text-sm text-gray-600">{t.name} — {t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* CTA */}
        <motion.section id="cta" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-indigo-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-6 text-lg">Book a demo and see how AIMax Automation can elevate your real estate or hotel operations with AI-driven solutions.</p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Book a Demo on WhatsApp
          </motion.a>
        </motion.section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="h-24 flex items-center justify-center md:justify-start">© 2025 AIMax Automation</div>
            <div className="h-24 flex items-center justify-center cursor-pointer hover:text-white transition">Privacy Policy</div>
            <div className="h-24 flex items-center justify-center md:justify-end">Contact: <a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-white transition ml-2">WhatsApp</a></div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ---------- Helper Lottie wrapper (keeps React happy) ---------- */
/**
 * We declare LottieSafe as a top-level function (outside default export)
 * so JSX recognizes the web component usage cleanly.
 *
 * Note: We create it below to avoid import issues and keep things client-side.
 */
function LottieSafe({ src, style }) {
  // render a lottie-player element; it's safe in client components
  // You can adjust attributes (speed, loop, autoplay) as needed.
  return (
    <div dangerouslySetInnerHTML={{
      __html: `<lottie-player src="${src}" background="transparent" speed="1" loop autoplay style="${style?.width ? `width:${style.width};height:${style.height || style.width}` : (style ? Object.entries(style).map(([k,v])=>`${k}:${v}`).join(';') : '')}"></lottie-player>`
    }} />
  );
}



// /* eslint-disable react/no-unescaped-entities */
// 'use client';
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Cpu, Settings, TrendingUp, Lightbulb, Users, Activity } from "lucide-react";

// export default function AIMaxLanding() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//     setMobileMenuOpen(false);
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const staggerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.5 },
//     }),
//   };

//   // === Sections Data ===
//   const howAI = [
//     { icon: <Cpu size={32} className="text-indigo-600"/>, title: "AI Strategy & Planning", desc: "Analyze workflows and identify where AI can make the most impact." },
//     { icon: <Settings size={32} className="text-indigo-600"/>, title: "Seamless Integration", desc: "Our AI solutions integrate with your systems without disruption." },
//     { icon: <TrendingUp size={32} className="text-indigo-600"/>, title: "Performance Optimization", desc: "Monitor and improve AI-driven processes for maximum efficiency." },
//   ];

//   const whyAI = [
//     { icon: <Lightbulb size={32} className="text-indigo-600"/>, title: "Predictive Insights", desc: "Anticipate trends, avoid risks, and make informed decisions." },
//     { icon: <Users size={32} className="text-indigo-600"/>, title: "Enhanced Customer Experience", desc: "Deliver personalized experiences to your clients and guests." },
//     { icon: <Activity size={32} className="text-indigo-600"/>, title: "Automated Workflows", desc: "Save time by automating repetitive, data-heavy tasks." },
//   ];

//   const useCases = [
//     { title: "Smart Property Management", icon: "/icons/property.svg", desc: "Automate tenant communication, manage bookings, and optimize occupancy." },
//     { title: "Dynamic Pricing & Revenue Optimization", icon: "/icons/pricing.svg", desc: "AI-driven pricing adjusts in real-time for maximum revenue." },
//     { title: "Automated Lead Generation", icon: "/icons/lead.svg", desc: "Generate and nurture leads automatically to increase conversions." },
//     { title: "AI Concierge Services", icon: "/icons/concierge.svg", desc: "Provide 24/7 AI-powered support for guests and clients." },
//     { title: "Maintenance Prediction & Workflow Automation", icon: "/icons/maintenance.svg", desc: "Predict issues before they happen and automate resolution tasks." },
//     { title: "Analytics & Smart Dashboards", icon: "/icons/analytics.svg", desc: "Visualize KPIs and make data-driven decisions quickly." },
//     { title: "Automated Marketing Campaigns", icon: "/icons/marketing.svg", desc: "Reach customers with AI-optimized campaigns automatically." },
//     { title: "Energy Management & Cost Optimization", icon: "/icons/energy.svg", desc: "Reduce energy costs using predictive AI analytics." },
//     { title: "AI-driven Financial Forecasting", icon: "/icons/forecast.svg", desc: "Plan budgets and investments using AI-generated insights." },
//   ];

//   const technologies = [
//     { title: "Machine Learning", icon: "/icons/ml.svg", desc: "Teach systems to learn from data and make predictions." },
//     { title: "Natural Language Processing", icon: "/icons/nlp.svg", desc: "Understand and respond to customer queries automatically." },
//     { title: "Robotic Process Automation", icon: "/icons/rpa.svg", desc: "Automate repetitive tasks for operational efficiency." },
//     { title: "Predictive Analytics", icon: "/icons/predictive.svg", desc: "Forecast trends and make smarter business decisions." },
//     { title: "Computer Vision", icon: "/icons/computer-vision.svg", desc: "Analyze visual data for insights and automation." },
//     { title: "Chatbots & Virtual Assistants", icon: "/icons/chatbot.svg", desc: "Provide instant customer support and engagement." },
//     { title: "IoT Integration", icon: "/icons/iot.svg", desc: "Connect devices and gather data for smarter operations." },
//     { title: "Cloud AI Platforms", icon: "/icons/cloud.svg", desc: "Leverage scalable AI infrastructure in the cloud." },
//   ];

//   const testimonials = [
//     { name: "Hotel Manager", role: "Luxury Hotel", avatar: "/avatars/hotel1.png", quote: "AIMax transformed our hotel operations — guest satisfaction has skyrocketed!" },
//     { name: "Real Estate Agency", role: "Property Management", avatar: "/avatars/realestate.png", quote: "Our property management is now automated end-to-end, saving hundreds of hours per month." },
//     { name: "Investor", role: "Private Investments", avatar: "/avatars/investor.png", quote: "The insights and AI tools helped us make smarter investment decisions faster." },
//     { name: "Hospitality Director", role: "Hotel Chain", avatar: "/avatars/hospitality.png", quote: "Integration was seamless, and ROI was visible within the first month." },
//     { name: "Property Manager", role: "Real Estate", avatar: "/avatars/manager.png", quote: "Our team now focuses on strategy instead of repetitive tasks, greatly improving productivity." },
//      { name: "Property Manager", role: "Real Estate", avatar: "/avatars/manager.png", quote: "Our team now focuses on strategy instead of repetitive tasks, greatly improving productivity." },
//   ];

//   const whatsappLink = "https://wa.me/7060569217?text=Hello%20AIMax,%20I%20want%20to%20book%20a%20demo";

//   return (
//     <div className="min-h-screen font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">

//       {/* NAVBAR */}
//       <header className="fixed w-full bg-white/70 backdrop-blur z-40">
//         <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-4 cursor-pointer font-bold text-indigo-600 text-xl" onClick={() => scrollToSection("hero")}>AIMax Automation</div>
//           <ul className="hidden md:flex gap-6 text-sm">
//             <li onClick={() => scrollToSection("howAI")} className="cursor-pointer hover:text-indigo-500 transition-colors">Features</li>
//             <li onClick={() => scrollToSection("useCases")} className="cursor-pointer hover:text-indigo-500 transition-colors">Use Cases</li>
//             <li onClick={() => scrollToSection("technologies")} className="cursor-pointer hover:text-indigo-500 transition-colors">Technologies</li>
//             <li onClick={() => scrollToSection("testimonials")} className="cursor-pointer hover:text-indigo-500 transition-colors">Testimonials</li>
//             <li onClick={() => scrollToSection("cta")} className="cursor-pointer hover:text-indigo-500 transition-colors">Book Demo</li>
//           </ul>
//           <a href={whatsappLink} target="_blank" className="hidden md:block px-4 py-2 border rounded-md text-sm hover:bg-indigo-600 hover:text-white transition-colors">Book Demo</a>
//           <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
//         </nav>
//         {mobileMenuOpen && (
//           <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
//             <li onClick={() => scrollToSection("howAI")} className="cursor-pointer hover:text-indigo-500 transition-colors">Features</li>
//             <li onClick={() => scrollToSection("useCases")} className="cursor-pointer hover:text-indigo-500 transition-colors">Use Cases</li>
//             <li onClick={() => scrollToSection("technologies")} className="cursor-pointer hover:text-indigo-500 transition-colors">Technologies</li>
//             <li onClick={() => scrollToSection("testimonials")} className="cursor-pointer hover:text-indigo-500 transition-colors">Testimonials</li>
//             <li><a href={whatsappLink} target="_blank" className="hover:text-indigo-500 transition-colors">Book Demo</a></li>
//           </ul>
//         )}
//       </header>

//       <main className="pt-28 relative z-10">

//         {/* HERO */}
//         <motion.section id="hero" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div>
//             <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight text-indigo-700">Revolutionize Your Real Estate & Hospitality Business with AI</motion.h1>
//             <p className="mt-6 text-gray-600">Automate operations, enhance guest experience, and maximize revenue with intelligent AI-driven solutions. AIMax combines predictive analytics, automation, and AI insights to give your business a competitive edge.</p>
//             <div className="mt-8 flex gap-4">
//               <motion.a href={whatsappLink} target="_blank" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">Book a Demo</motion.a>
//               <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection("howAI")} className="px-6 py-3 rounded-md border hover:bg-gray-100 transition">See How It Works</motion.button>
//             </div>
//           </div>
//           <motion.div className="relative h-80 md:h-96 rounded-xl shadow-xl overflow-hidden" variants={sectionVariants}>
//             <video src="/videos/hero-ai.mp4" autoPlay loop muted className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-indigo-800 bg-opacity-20"></div>
//           </motion.div>
//         </motion.section>

//         {/* HOW TO AI */}
//         <motion.section id="howAI" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-3xl font-bold mb-12 text-indigo-600 text-center">How to Implement AI in Your Business</h2>
//             <div className="grid md:grid-cols-3 gap-6">
//               {howAI.map((item, i) => (
//                 <motion.div key={i} custom={i} variants={staggerVariants} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
//                   <div className="mb-4">{item.icon}</div>
//                   <h3 className="font-semibold text-indigo-600 mb-2">{item.title}</h3>
//                   <p className="text-gray-700 text-sm">{item.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* WHY AI HELPS */}
//         <motion.section id="whyAIHelps" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gradient-to-r from-white via-indigo-50 to-white">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-3xl font-bold mb-12 text-indigo-600 text-center">Why AI and Automation Will Help You</h2>
//             <div className="grid md:grid-cols-3 gap-6">
//               {whyAI.map((item, i) => (
//                 <motion.div key={i} custom={i} variants={staggerVariants} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
//                   <div className="mb-4">{item.icon}</div>
//                   <h3 className="font-semibold text-indigo-600 mb-2">{item.title}</h3>
//                   <p className="text-gray-700 text-sm">{item.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* USE CASES */}
//         <motion.section id="useCases" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-white">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold mb-12 text-indigo-600">The Endless Use Cases of AI and Automation</h2>
//             <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
//               {useCases.map((uc, i) => (
//                 <motion.div key={i} custom={i} variants={staggerVariants} className="bg-indigo-50 rounded-xl p-6 shadow hover:shadow-2xl transition flex flex-col items-center text-center">
//                   <Image src={uc.icon} alt={uc.title} width={64} height={64} className="mb-4"/>
//                   <h3 className="font-semibold text-indigo-700 mb-2">{uc.title}</h3>
//                   <p className="text-gray-700 text-sm">{uc.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>
//                {/* CTA */}
//         <motion.section id="cta" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-indigo-600 text-white text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
//           <p className="mb-6 text-lg">Book a demo now and see how AIMax Automation can elevate your real estate or hotel operations with AI-driven solutions.</p>
//           <motion.a 
//             href={whatsappLink}
//             target="_blank"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-gray-100 transition"
//           >
//             Book a Demo on WhatsApp
//           </motion.a>
//         </motion.section>

//         {/* TECHNOLOGIES */}
//         <motion.section id="technologies" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gray-50">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold mb-12 text-indigo-600">AI & Automation Technologies We Are Experts In</h2>
//             <div className="grid md:grid-cols-4 gap-6">
//               {technologies.map((tech, i) => (
//                 <motion.div key={i} custom={i} variants={staggerVariants} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
//                   <Image src={tech.icon} alt={tech.title} width={48} height={48} className="mb-4"/>
//                   <h3 className="font-semibold text-indigo-700 mb-2">{tech.title}</h3>
//                   <p className="text-gray-700 text-sm">{tech.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* TESTIMONIALS */}
//         <motion.section id="testimonials" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-white">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold mb-12 text-indigo-600">Testimonials</h2>
//             <div className="grid md:grid-cols-3 gap-6">
//               {testimonials.map((t, i) => (
//                 <motion.div key={i} custom={i} variants={staggerVariants} className="p-6 bg-indigo-50 rounded-xl shadow flex flex-col items-center justify-center text-center hover:shadow-2xl transition transform hover:-translate-y-2">
//                   <Image src={t.avatar} alt={t.name} width={64} height={64} className="rounded-full mb-4"/>
//                   <p className="text-gray-700 italic mb-2">"{t.quote}"</p>
//                   <p className="font-semibold text-indigo-600">{t.name}</p>
//                   <p className="text-sm text-gray-500">{t.role}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

 

//         {/* FOOTER */}
//         <footer className="bg-gray-900 text-gray-300 py-12">
//           <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
//             <div className="h-24 flex items-center justify-center md:justify-start">© 2025 AIMax Automation</div>
//             <div className="h-24 flex items-center justify-center cursor-pointer hover:text-white transition">Privacy Policy</div>
//             <div className="h-24 flex items-center justify-center md:justify-end">Contact: <a href={whatsappLink} target="_blank" className="hover:text-white transition ml-2">WhatsApp</a></div>
//           </div>
//         </footer>

//       </main>
//     </div>
//   );
// }























// 'use client';
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Lottie  from "lottie-react";

// // Lottie JSON imports (place your downloaded JSONs in public/lottie folder)
// import aiStrategyAnimation from "../public/lottie/ai-strategy.json";
// import aiWorkflowAnimation from "../public/lottie/ai-workflow.json";
// import aiAutomationAnimation from "../public/lottie/ai-automation.json";
// import aiAnalyticsAnimation from "../public/lottie/ai-analytics.json";
// import aiCloudAnimation from "../public/lottie/ai-cloud.json";
// import aiChatbotAnimation from "../public/lottie/ai-chatbot.json";

// export default function AIMaxLanding() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const whatsappLink = "https://wa.me/7060569217?text=Hello%20AIMax,%20I%20want%20to%20book%20a%20demo";

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//     setMobileMenuOpen(false);
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const staggerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.5 },
//     }),
//   };

//   // Use Cases with Lottie
//   const useCases = [
//     { animation: aiWorkflowAnimation, title: "Smart Property Management", desc: "Automated tenant communications and property tracking." },
//     { animation: aiAnalyticsAnimation, title: "Dynamic Pricing & Revenue Optimization", desc: "Optimize rates and occupancy in real-time using predictive AI." },
//     { animation: aiChatbotAnimation, title: "Automated Lead Generation", desc: "AI handles follow-ups, nurturing, and qualification of leads." },
//     { animation: aiAutomationAnimation, title: "AI Concierge Services", desc: "Provide guests with instant support and personalized recommendations." },
//     { animation: aiStrategyAnimation, title: "Maintenance Prediction", desc: "Predictive maintenance alerts reduce downtime and costs." },
//     { animation: aiCloudAnimation, title: "Analytics & Dashboards", desc: "Visualize insights for smarter, faster decision-making." },
//   ];

//   const technologies = [
//     { animation: aiStrategyAnimation, title: "Machine Learning" },
//     { animation: aiChatbotAnimation, title: "Natural Language Processing" },
//     { animation: aiAutomationAnimation, title: "Robotic Process Automation" },
//     { animation: aiAnalyticsAnimation, title: "Predictive Analytics" },
//     { animation: aiWorkflowAnimation, title: "Computer Vision" },
//     { animation: aiChatbotAnimation, title: "Chatbots & Virtual Assistants" },
//     { animation: aiCloudAnimation, title: "IoT Integration" },
//     { animation: aiCloudAnimation, title: "Cloud AI Platforms" },
//   ];

//   const testimonials = [
//     { name: "Hotel Manager", role: "Luxury Hotel", avatar: "/avatars/hotel1.png", quote: "AIMax transformed our hotel operations — guest satisfaction has skyrocketed!" },
//     { name: "Real Estate Agency", role: "Property Management", avatar: "/avatars/realestate.png", quote: "Our property management is now automated end-to-end, saving hundreds of hours per month." },
//     { name: "Investor", role: "Private Investments", avatar: "/avatars/investor.png", quote: "The insights and AI tools helped us make smarter investment decisions faster." },
//   ];

//   return (
//     <div className="min-h-screen font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">

//       {/* Floating Background Shapes */}
//       <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-200 rounded-full opacity-30 animate-pulse blur-3xl"></div>
//       <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-200 rounded-full opacity-20 animate-pulse blur-3xl"></div>

//       {/* NAVBAR */}
//       <header className="fixed w-full bg-white/70 backdrop-blur z-40">
//         <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-4 cursor-pointer font-bold text-indigo-600 text-xl" onClick={() => scrollToSection("hero")}>AIMax Automation</div>
//           <ul className="hidden md:flex gap-6 text-sm">
//             <li onClick={() => scrollToSection("howAI")} className="cursor-pointer hover:text-indigo-500 transition-colors">Features</li>
//             <li onClick={() => scrollToSection("useCases")} className="cursor-pointer hover:text-indigo-500 transition-colors">Use Cases</li>
//             <li onClick={() => scrollToSection("technologies")} className="cursor-pointer hover:text-indigo-500 transition-colors">Technologies</li>
//             <li onClick={() => scrollToSection("testimonials")} className="cursor-pointer hover:text-indigo-500 transition-colors">Testimonials</li>
//             <li onClick={() => scrollToSection("cta")} className="cursor-pointer hover:text-indigo-500 transition-colors">Book Demo</li>
//           </ul>
//           <a href={whatsappLink} target="_blank" className="hidden md:block px-4 py-2 border rounded-md text-sm hover:bg-indigo-600 hover:text-white transition-colors">Book Demo</a>
//           <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
//         </nav>
//         {mobileMenuOpen && (
//           <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
//             <li onClick={() => scrollToSection("howAI")} className="cursor-pointer hover:text-indigo-500 transition-colors">Features</li>
//             <li onClick={() => scrollToSection("useCases")} className="cursor-pointer hover:text-indigo-500 transition-colors">Use Cases</li>
//             <li onClick={() => scrollToSection("technologies")} className="cursor-pointer hover:text-indigo-500 transition-colors">Technologies</li>
//             <li onClick={() => scrollToSection("testimonials")} className="cursor-pointer hover:text-indigo-500 transition-colors">Testimonials</li>
//             <li>
//               <a href={whatsappLink} target="_blank" className="cursor-pointer hover:text-indigo-500 transition-colors">Book Demo</a>
//             </li>
//           </ul>
//         )}
//       </header>

//       <main className="pt-28 relative z-10">

//         {/* HERO */}
//         <motion.section id="hero" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div>
//             <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight text-indigo-700">Revolutionize Your Real Estate and Hospitality Business with AI</motion.h1>
//             <p className="mt-6 text-gray-600">Automate operations, enhance guest experience, and maximize revenue with intelligent AI-driven solutions. AIMax combines predictive analytics, automation, and AI-driven insights to give your business a competitive edge.</p>
//             <div className="mt-8 flex gap-4">
//               <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={whatsappLink} target="_blank" className="px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">Book a Demo</motion.a>
//               <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection("howAI")} className="px-6 py-3 rounded-md border hover:bg-gray-100 transition">See How It Works</motion.button>
//             </div>
//           </div>
//           <motion.div className="relative h-80 md:h-96 rounded-xl shadow-xl overflow-hidden" variants={sectionVariants}>
//             <video src="/videos/hero-ai.mp4" autoPlay loop muted className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-indigo-800 bg-opacity-20"></div>
//           </motion.div>
//         </motion.section>

//         {/* HOW TO AI */}
//         <motion.section id="howAI" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gradient-to-r from-indigo-50 to-white">
//           <div className="max-w-5xl mx-auto px-6 text-center grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[aiStrategyAnimation, aiWorkflowAnimation, aiAutomationAnimation].map((anim, i) => (
//               <motion.div key={i} custom={i} variants={staggerVariants} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
//                 <div className="w-32 h-32 mb-4">
//                   <Lottie autoplay loop src={anim} />
//                 </div>
//                 <h3 className="font-semibold text-indigo-600 mb-2">{i === 0 ? "AI Strategy & Planning" : i === 1 ? "Workflow Optimization" : "Automation Implementation"}</h3>
//                 <p className="text-gray-700 text-sm">{i === 0 ? "Analyze workflows and identify areas where AI adds maximum value." : i === 1 ? "Streamline operations and automate repetitive tasks efficiently." : "Deploy AI-driven automation for faster and smarter outcomes."}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* WHY AI HELPS */}
//         <motion.section id="whyAIHelps" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gradient-to-r from-white to-indigo-50">
//           <div className="max-w-5xl mx-auto px-6 text-center grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6 text-indigo-600">Why AI and Automation Will Help You</h2>
//               <p className="text-gray-700 mb-4">Reduce operational costs, minimize human errors, and make data-driven decisions in real time. AI identifies trends, predicts customer needs, and improves satisfaction.</p>
//               <p className="text-gray-700">Automation executes repetitive processes flawlessly, freeing your team to focus on high-impact tasks and strategic growth.</p>
//             </div>
//             <div className="w-full h-64 md:h-80">
//               <Lottie autoplay loop src={aiAnalyticsAnimation} />
//             </div>
//           </div>
//         </motion.section>

//         {/* USE CASES */}
//         <motion.section id="useCases" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-white">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold mb-8 text-indigo-600">The Endless Use Cases of AI and Automation</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {useCases.map((uc, i) => (
//                 <motion.div key={i} custom={i} variants={staggerVariants} className="bg-indigo-50 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
//                   <div className="w-32 h-32 mb-4">
//                     <Lottie autoplay loop src={uc.animation} />
//                   </div>
//                   <h3 className="font-semibold text-indigo-700 mb-2">{uc.title}</h3>
//                   <p className="text-gray-700 text-sm">{uc.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* TECHNOLOGIES */}
//         <motion.section id="technologies" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gray-50">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold mb-8 text-indigo-600">AI and Automation Technologies We Are Experts In</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {technologies.map((tech, i) => (
//                 <motion.div key={i} custom={i} variants={staggerVariants} className="h-40 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-4 hover:shadow-2xl transition">
//                   <div className="w-24 h-24 mb-2">
//                     <Lottie autoplay loop src={tech.animation} />
//                   </div>
//                   <p className="font-medium text-gray-700">{tech.title}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* TESTIMONIALS */}
//         <motion.section id="testimonials" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-white">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold mb-8 text-indigo-600">Testimonials</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {testimonials.map((t, i) => (
//                 <motion.div key={i} custom={i} variants={staggerVariants} className="p-6 bg-white rounded-xl shadow flex flex-col items-center justify-center text-center hover:shadow-2xl transition">
//                   <Image src={t.avatar} alt={t.name} width={64} height={64} className="rounded-full mb-4" />
//                   <p className="text-gray-700 italic mb-2">"{t.quote}"</p>
//                   <p className="font-semibold text-indigo-600">{t.name}</p>
//                   <p className="text-sm text-gray-500">{t.role}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* CTA */}
//         <motion.section id="cta" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-indigo-600 text-white text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
//           <p className="mb-6">Book a demo and see how AIMax Automation can elevate your real estate or hotel operations with AI-driven solutions.</p>
//           <motion.a 
//             href={whatsappLink}
//             target="_blank"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-gray-100 transition"
//           >
//             Book a Demo
//           </motion.a>
//         </motion.section>

//         {/* FOOTER */}
//         <footer className="bg-gray-900 text-gray-300 py-12">
//           <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="h-24">© 2025 AIMax Automation</div>
//             <div className="h-24 cursor-pointer hover:text-white transition">Privacy Policy</div>
//             <div className="h-24 cursor-pointer hover:text-white transition">Terms & Conditions</div>
//           </div>
//         </footer>
//       </main>
//     </div>
//   );
// }