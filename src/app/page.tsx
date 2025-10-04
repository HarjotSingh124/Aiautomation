


// 'use client';
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Building2,
//   DollarSign,
//   Users,
//   ConciergeBell,
//   Wrench,
//   BarChart3,
//   Megaphone,
//   Zap,
//   LineChart,
//   Cpu,
//   MessageCircle,
//   Cloud,
//   Eye,
//   Workflow,
//   ChartBar,
//   Home,
//   Briefcase,
//   TrendingUp,
//   Lightbulb 
// } from "lucide-react";

// export default function AIMaxLanding() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

//   const useCases = [
//     { title: "Smart Property Management", icon: <Building2 className="w-12 h-12 text-indigo-600" /> },
//     { title: "Dynamic Pricing & Revenue Optimization", icon: <DollarSign className="w-12 h-12 text-indigo-600" /> },
//     { title: "Automated Lead Generation", icon: <Users className="w-12 h-12 text-indigo-600" /> },
//     { title: "AI Concierge Services", icon: <ConciergeBell className="w-12 h-12 text-indigo-600" /> },
//     { title: "Maintenance Prediction & Workflow Automation", icon: <Wrench className="w-12 h-12 text-indigo-600" /> },
//     { title: "Analytics & Smart Dashboards", icon: <BarChart3 className="w-12 h-12 text-indigo-600" /> },
//     { title: "Automated Marketing Campaigns", icon: <Megaphone className="w-12 h-12 text-indigo-600" /> },
//     { title: "Energy Management & Cost Optimization", icon: <Zap className="w-12 h-12 text-indigo-600" /> },
//     { title: "AI-driven Financial Forecasting", icon: <LineChart className="w-12 h-12 text-indigo-600" /> },
//   ];

//   const technologies = [
//     { title: "Machine Learning", icon: <Cpu className="w-10 h-10 text-indigo-600" /> },
//     { title: "Natural Language Processing", icon: <MessageCircle className="w-10 h-10 text-indigo-600" /> },
//     { title: "Robotic Process Automation", icon: <Workflow className="w-10 h-10 text-indigo-600" /> },
//     { title: "Predictive Analytics", icon: <ChartBar className="w-10 h-10 text-indigo-600" /> },
//     { title: "Computer Vision", icon: <Eye className="w-10 h-10 text-indigo-600" /> },
//     { title: "Chatbots & Virtual Assistants", icon: <Users className="w-10 h-10 text-indigo-600" /> },
//     { title: "IoT Integration", icon: <Home className="w-10 h-10 text-indigo-600" /> },
//     { title: "Cloud AI Platforms", icon: <Cloud className="w-10 h-10 text-indigo-600" /> },
//   ];

//   const testimonials = [
//     { name: "Hotel Manager", role: "Luxury Hotel", icon: <ConciergeBell className="w-12 h-12 text-indigo-600" />, quote: "AIMax transformed our hotel operations — guest satisfaction has skyrocketed!" },
//     { name: "Real Estate Agency", role: "Property Management", icon: <Building2 className="w-12 h-12 text-indigo-600" />, quote: "Our property management is now automated end-to-end, saving hundreds of hours per month." },
//     { name: "Investor", role: "Private Investments", icon: <DollarSign className="w-12 h-12 text-indigo-600" />, quote: "The insights and AI tools helped us make smarter investment decisions faster." },
//     { name: "Hospitality Director", role: "Hotel Chain", icon: <Briefcase className="w-12 h-12 text-indigo-600" />, quote: "Integration was seamless, and ROI was visible within the first month." },
//     { name: "Hotel Chain Executive", role: "Hospitality", icon: <Users className="w-12 h-12 text-indigo-600" />, quote: "Customer experience is now personalized at scale, thanks to AI-driven automation." },
//     { name: "Property Manager", role: "Real Estate", icon: <Home className="w-12 h-12 text-indigo-600" />, quote: "Our team now focuses on strategy instead of repetitive tasks, greatly improving productivity." },
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
//           <button onClick={() => scrollToSection("cta")} className="hidden md:block px-4 py-2 border rounded-md text-sm hover:bg-indigo-600 hover:text-white transition-colors">Book Demo</button>
//           <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
//         </nav>
//         {mobileMenuOpen && (
//           <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
//             <li onClick={() => scrollToSection("howAI")} className="cursor-pointer hover:text-indigo-500 transition-colors">Features</li>
//             <li onClick={() => scrollToSection("useCases")} className="cursor-pointer hover:text-indigo-500 transition-colors">Use Cases</li>
//             <li onClick={() => scrollToSection("technologies")} className="cursor-pointer hover:text-indigo-500 transition-colors">Technologies</li>
//             <li onClick={() => scrollToSection("testimonials")} className="cursor-pointer hover:text-indigo-500 transition-colors">Testimonials</li>
//             <li onClick={() => scrollToSection("cta")} className="cursor-pointer hover:text-indigo-500 transition-colors">Book Demo</li>
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
//               <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">Book a Demo</motion.a>
//               <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection("howAI")} className="px-6 py-3 rounded-md border hover:bg-gray-100 transition">See How It Works</motion.button>
//             </div>
//           </div>
//           <motion.div className="relative h-80 md:h-96 rounded-xl shadow-xl overflow-hidden" variants={sectionVariants}>
//             <video src="/videos/hero-ai.mp4" autoPlay loop muted className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-indigo-800 bg-opacity-20"></div>
//           </motion.div>
//         </motion.section>

//   {/* HOW TO AI */}
// <motion.section
//   id="howAI"
//   variants={sectionVariants}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
//   className="py-20 bg-white"
// >
//   <div className="max-w-6xl mx-auto px-6 text-center">
//     <h2 className="text-3xl font-bold mb-12 text-indigo-600">How to Implement AI in Your Business</h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       <motion.div
//         variants={staggerVariants}
//         custom={0}
//         className="p-6 bg-indigo-50 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
//       >
//         <Cpu className="w-12 h-12 text-indigo-600 mb-4" />
//         <h3 className="font-semibold text-lg mb-2">AI Strategy</h3>
//         <p className="text-gray-700 text-sm">We analyze your business needs to create a custom AI roadmap tailored to your operations.</p>
//       </motion.div>

//       <motion.div
//         variants={staggerVariants}
//         custom={1}
//         className="p-6 bg-indigo-50 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
//       >
//         <Workflow className="w-12 h-12 text-indigo-600 mb-4" />
//         <h3 className="font-semibold text-lg mb-2">Workflow Integration</h3>
//         <p className="text-gray-700 text-sm">Our AI solutions integrate seamlessly into your current workflow without disrupting operations.</p>
//       </motion.div>

//       <motion.div
//         variants={staggerVariants}
//         custom={2}
//         className="p-6 bg-indigo-50 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
//       >
//         <BarChart3 className="w-12 h-12 text-indigo-600 mb-4" />
//         <h3 className="font-semibold text-lg mb-2">Continuous Optimization</h3>
//         <p className="text-gray-700 text-sm">AI monitors and optimizes your operations, providing actionable insights in real time.</p>
//       </motion.div>
//     </div>
//   </div>
// </motion.section>

// {/* WHY AI HELPS */}
// <motion.section
//   id="whyAIHelps"
//   variants={sectionVariants}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
//   className="py-20 bg-gray-50"
// >
//   <div className="max-w-6xl mx-auto px-6 text-center">
//     <h2 className="text-3xl font-bold mb-12 text-indigo-600">Why AI and Automation Will Help You</h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       <motion.div
//         variants={staggerVariants}
//         custom={0}
//         className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
//       >
//         <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
//         <h3 className="font-semibold text-lg mb-2">Increase Revenue</h3>
//         <p className="text-gray-700 text-sm">Optimize pricing, predict demand, and maximize revenue using AI insights.</p>
//       </motion.div>

//       <motion.div
//         variants={staggerVariants}
//         custom={1}
//         className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
//       >
//         <Zap className="w-12 h-12 text-indigo-600 mb-4" />
//         <h3 className="font-semibold text-lg mb-2">Save Time & Resources</h3>
//         <p className="text-gray-700 text-sm">Automate repetitive tasks, reduce human errors, and focus on high-impact work.</p>
//       </motion.div>

//       <motion.div
//         variants={staggerVariants}
//         custom={2}
//         className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
//       >
//         <Lightbulb className="w-12 h-12 text-indigo-600 mb-4" />
//         <h3 className="font-semibold text-lg mb-2">Smarter Decisions</h3>
//         <p className="text-gray-700 text-sm">Leverage predictive insights to make proactive, data-driven business decisions.</p>
//       </motion.div>
//     </div>
//   </div>
// </motion.section>

//         {/* USE CASES */}
//         <motion.section id="useCases" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-white">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold mb-8 text-indigo-600">The Endless Use Cases of AI and Automation</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {useCases.map((uc, i) => (
//                 <motion.div key={i} custom={i} variants={staggerVariants} className="p-6 bg-gray-50 rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition">
//                   {uc.icon}
//                   <p className="text-gray-700 font-medium mt-4">{uc.title}</p>
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
//                 <motion.div key={i} custom={i} variants={staggerVariants} className="h-24 bg-white rounded shadow flex flex-col items-center justify-center p-4 hover:shadow-lg transition">
//                   {tech.icon}
//                   <p className="font-medium text-gray-700 mt-2">{tech.title}</p>
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
//                 <motion.div key={i} custom={i} variants={staggerVariants} className="p-6 bg-white rounded-lg shadow flex flex-col items-center justify-center text-center hover:shadow-lg transition">
//                   {t.icon}
//                   <p className="text-gray-700 italic mb-2 mt-4">"{t.quote}"</p>
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
//             href="#"
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

'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Settings, TrendingUp, Lightbulb, Users, Activity } from "lucide-react";

export default function AIMaxLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
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
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  // === Sections Data ===
  const howAI = [
    { icon: <Cpu size={32} className="text-indigo-600"/>, title: "AI Strategy & Planning", desc: "Analyze workflows and identify where AI can make the most impact." },
    { icon: <Settings size={32} className="text-indigo-600"/>, title: "Seamless Integration", desc: "Our AI solutions integrate with your systems without disruption." },
    { icon: <TrendingUp size={32} className="text-indigo-600"/>, title: "Performance Optimization", desc: "Monitor and improve AI-driven processes for maximum efficiency." },
  ];

  const whyAI = [
    { icon: <Lightbulb size={32} className="text-indigo-600"/>, title: "Predictive Insights", desc: "Anticipate trends, avoid risks, and make informed decisions." },
    { icon: <Users size={32} className="text-indigo-600"/>, title: "Enhanced Customer Experience", desc: "Deliver personalized experiences to your clients and guests." },
    { icon: <Activity size={32} className="text-indigo-600"/>, title: "Automated Workflows", desc: "Save time by automating repetitive, data-heavy tasks." },
  ];

  const useCases = [
    { title: "Smart Property Management", icon: "/icons/property.svg", desc: "Automate tenant communication, manage bookings, and optimize occupancy." },
    { title: "Dynamic Pricing & Revenue Optimization", icon: "/icons/pricing.svg", desc: "AI-driven pricing adjusts in real-time for maximum revenue." },
    { title: "Automated Lead Generation", icon: "/icons/lead.svg", desc: "Generate and nurture leads automatically to increase conversions." },
    { title: "AI Concierge Services", icon: "/icons/concierge.svg", desc: "Provide 24/7 AI-powered support for guests and clients." },
    { title: "Maintenance Prediction & Workflow Automation", icon: "/icons/maintenance.svg", desc: "Predict issues before they happen and automate resolution tasks." },
    { title: "Analytics & Smart Dashboards", icon: "/icons/analytics.svg", desc: "Visualize KPIs and make data-driven decisions quickly." },
    { title: "Automated Marketing Campaigns", icon: "/icons/marketing.svg", desc: "Reach customers with AI-optimized campaigns automatically." },
    { title: "Energy Management & Cost Optimization", icon: "/icons/energy.svg", desc: "Reduce energy costs using predictive AI analytics." },
    { title: "AI-driven Financial Forecasting", icon: "/icons/forecast.svg", desc: "Plan budgets and investments using AI-generated insights." },
  ];

  const technologies = [
    { title: "Machine Learning", icon: "/icons/ml.svg", desc: "Teach systems to learn from data and make predictions." },
    { title: "Natural Language Processing", icon: "/icons/nlp.svg", desc: "Understand and respond to customer queries automatically." },
    { title: "Robotic Process Automation", icon: "/icons/rpa.svg", desc: "Automate repetitive tasks for operational efficiency." },
    { title: "Predictive Analytics", icon: "/icons/predictive.svg", desc: "Forecast trends and make smarter business decisions." },
    { title: "Computer Vision", icon: "/icons/computer-vision.svg", desc: "Analyze visual data for insights and automation." },
    { title: "Chatbots & Virtual Assistants", icon: "/icons/chatbot.svg", desc: "Provide instant customer support and engagement." },
    { title: "IoT Integration", icon: "/icons/iot.svg", desc: "Connect devices and gather data for smarter operations." },
    { title: "Cloud AI Platforms", icon: "/icons/cloud.svg", desc: "Leverage scalable AI infrastructure in the cloud." },
  ];

  const testimonials = [
    { name: "Hotel Manager", role: "Luxury Hotel", avatar: "/avatars/hotel1.png", quote: "AIMax transformed our hotel operations — guest satisfaction has skyrocketed!" },
    { name: "Real Estate Agency", role: "Property Management", avatar: "/avatars/realestate.png", quote: "Our property management is now automated end-to-end, saving hundreds of hours per month." },
    { name: "Investor", role: "Private Investments", avatar: "/avatars/investor.png", quote: "The insights and AI tools helped us make smarter investment decisions faster." },
    { name: "Hospitality Director", role: "Hotel Chain", avatar: "/avatars/hospitality.png", quote: "Integration was seamless, and ROI was visible within the first month." },
    { name: "Property Manager", role: "Real Estate", avatar: "/avatars/manager.png", quote: "Our team now focuses on strategy instead of repetitive tasks, greatly improving productivity." },
     { name: "Property Manager", role: "Real Estate", avatar: "/avatars/manager.png", quote: "Our team now focuses on strategy instead of repetitive tasks, greatly improving productivity." },
  ];

  const whatsappLink = "https://wa.me/919999999999?text=Hello%20AIMax,%20I%20want%20to%20book%20a%20demo";

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed w-full bg-white/70 backdrop-blur z-40">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer font-bold text-indigo-600 text-xl" onClick={() => scrollToSection("hero")}>AIMax Automation</div>
          <ul className="hidden md:flex gap-6 text-sm">
            <li onClick={() => scrollToSection("howAI")} className="cursor-pointer hover:text-indigo-500 transition-colors">Features</li>
            <li onClick={() => scrollToSection("useCases")} className="cursor-pointer hover:text-indigo-500 transition-colors">Use Cases</li>
            <li onClick={() => scrollToSection("technologies")} className="cursor-pointer hover:text-indigo-500 transition-colors">Technologies</li>
            <li onClick={() => scrollToSection("testimonials")} className="cursor-pointer hover:text-indigo-500 transition-colors">Testimonials</li>
            <li onClick={() => scrollToSection("cta")} className="cursor-pointer hover:text-indigo-500 transition-colors">Book Demo</li>
          </ul>
          <a href={whatsappLink} target="_blank" className="hidden md:block px-4 py-2 border rounded-md text-sm hover:bg-indigo-600 hover:text-white transition-colors">Book Demo</a>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
        </nav>
        {mobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
            <li onClick={() => scrollToSection("howAI")} className="cursor-pointer hover:text-indigo-500 transition-colors">Features</li>
            <li onClick={() => scrollToSection("useCases")} className="cursor-pointer hover:text-indigo-500 transition-colors">Use Cases</li>
            <li onClick={() => scrollToSection("technologies")} className="cursor-pointer hover:text-indigo-500 transition-colors">Technologies</li>
            <li onClick={() => scrollToSection("testimonials")} className="cursor-pointer hover:text-indigo-500 transition-colors">Testimonials</li>
            <li><a href={whatsappLink} target="_blank" className="hover:text-indigo-500 transition-colors">Book Demo</a></li>
          </ul>
        )}
      </header>

      <main className="pt-28 relative z-10">

        {/* HERO */}
        <motion.section id="hero" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight text-indigo-700">Revolutionize Your Real Estate & Hospitality Business with AI</motion.h1>
            <p className="mt-6 text-gray-600">Automate operations, enhance guest experience, and maximize revenue with intelligent AI-driven solutions. AIMax combines predictive analytics, automation, and AI insights to give your business a competitive edge.</p>
            <div className="mt-8 flex gap-4">
              <motion.a href={whatsappLink} target="_blank" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">Book a Demo</motion.a>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection("howAI")} className="px-6 py-3 rounded-md border hover:bg-gray-100 transition">See How It Works</motion.button>
            </div>
          </div>
          <motion.div className="relative h-80 md:h-96 rounded-xl shadow-xl overflow-hidden" variants={sectionVariants}>
            <video src="/videos/hero-ai.mp4" autoPlay loop muted className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-indigo-800 bg-opacity-20"></div>
          </motion.div>
        </motion.section>

        {/* HOW TO AI */}
        <motion.section id="howAI" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-indigo-600 text-center">How to Implement AI in Your Business</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {howAI.map((item, i) => (
                <motion.div key={i} custom={i} variants={staggerVariants} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-indigo-600 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* WHY AI HELPS */}
        <motion.section id="whyAIHelps" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gradient-to-r from-white via-indigo-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-indigo-600 text-center">Why AI and Automation Will Help You</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whyAI.map((item, i) => (
                <motion.div key={i} custom={i} variants={staggerVariants} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-indigo-600 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* USE CASES */}
        <motion.section id="useCases" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12 text-indigo-600">The Endless Use Cases of AI and Automation</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
              {useCases.map((uc, i) => (
                <motion.div key={i} custom={i} variants={staggerVariants} className="bg-indigo-50 rounded-xl p-6 shadow hover:shadow-2xl transition flex flex-col items-center text-center">
                  <Image src={uc.icon} alt={uc.title} width={64} height={64} className="mb-4"/>
                  <h3 className="font-semibold text-indigo-700 mb-2">{uc.title}</h3>
                  <p className="text-gray-700 text-sm">{uc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
               {/* CTA */}
        <motion.section id="cta" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-indigo-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-6 text-lg">Book a demo now and see how AIMax Automation can elevate your real estate or hotel operations with AI-driven solutions.</p>
          <motion.a 
            href={whatsappLink}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Book a Demo on WhatsApp
          </motion.a>
        </motion.section>

        {/* TECHNOLOGIES */}
        <motion.section id="technologies" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12 text-indigo-600">AI & Automation Technologies We Are Experts In</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {technologies.map((tech, i) => (
                <motion.div key={i} custom={i} variants={staggerVariants} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
                  <Image src={tech.icon} alt={tech.title} width={48} height={48} className="mb-4"/>
                  <h3 className="font-semibold text-indigo-700 mb-2">{tech.title}</h3>
                  <p className="text-gray-700 text-sm">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* TESTIMONIALS */}
        <motion.section id="testimonials" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12 text-indigo-600">Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={i} custom={i} variants={staggerVariants} className="p-6 bg-indigo-50 rounded-xl shadow flex flex-col items-center justify-center text-center hover:shadow-2xl transition transform hover:-translate-y-2">
                  <Image src={t.avatar} alt={t.name} width={64} height={64} className="rounded-full mb-4"/>
                  <p className="text-gray-700 italic mb-2">"{t.quote}"</p>
                  <p className="font-semibold text-indigo-600">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

 

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="h-24 flex items-center justify-center md:justify-start">© 2025 AIMax Automation</div>
            <div className="h-24 flex items-center justify-center cursor-pointer hover:text-white transition">Privacy Policy</div>
            <div className="h-24 flex items-center justify-center md:justify-end">Contact: <a href={whatsappLink} target="_blank" className="hover:text-white transition ml-2">WhatsApp</a></div>
          </div>
        </footer>

      </main>
    </div>
  );
}