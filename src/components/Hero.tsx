'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  isDarkMode: boolean;
  isMobile: boolean;
  isHovering: boolean;
  setIsHovering: (value: boolean) => void;
  onGetStarted: () => void;
}

export default function Hero({ isDarkMode, isMobile, isHovering, setIsHovering, onGetStarted }: HeroProps) {
  const textClass = isDarkMode ? 'text-white' : 'text-orange-900';

  return (
    <section className="pt-24 md:pt-32 lg:pt-40 pb-16 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      {/* Left */}
      <div className="w-full lg:w-3/5 space-y-6 md:space-y-8 lg:space-y-10 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 border border-yellow-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping"></span>
          <span className="text-yellow-400 font-bold text-xs sm:text-sm tracking-wide uppercase">
            ⚡ Next-Gen Autonomous AI Platform
          </span>
        </motion.div>

        <motion.h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent leading-tight drop-shadow-2xl`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Autonomous <span className="italic text-yellow-400">AI Agents</span> That Revolutionize Work
        </motion.h1>

        <motion.p 
          className={`text-lg sm:text-xl md:text-2xl font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} max-w-2xl`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Deploy multi-agent 3D AI workforces for marketing, sales, support, and business operations — working 24/7 with interactive voice intelligence.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <motion.button
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-[0_0_35px_rgba(245,158,11,0.4)] text-xl hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition relative overflow-hidden group w-full sm:w-auto cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onGetStarted}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="relative z-10">🚀 Launch AI Agent</span>
          </motion.button>

          <motion.a
            href="/profile"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-800/80 border border-yellow-500/40 text-yellow-400 font-bold text-lg hover:bg-yellow-500/20 transition backdrop-blur-md w-full sm:w-auto shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>👤 User Panel</span>
          </motion.a>
        </div>
      </div>
      
      {/* Right: 3D Animated Agent Stage */}
      <div className="w-full lg:w-2/5 flex justify-center items-center mt-12 lg:mt-0 relative">
        <motion.div
          className={`w-[320px] h-[400px] sm:w-[380px] sm:h-[460px] lg:w-[440px] lg:h-[500px] rounded-3xl shadow-[0_0_80px_rgba(245,158,11,0.35)] ${
            isDarkMode ? 'bg-slate-900/80 border-2 border-yellow-500/50' : 'bg-white/90 border-2 border-yellow-300'
          } backdrop-blur-2xl flex flex-col items-center justify-between p-5 sm:p-6 relative overflow-hidden group`}
          initial={{ y: 30, opacity: 0, rotateY: -15 }}
          animate={{ y: 0, opacity: 1, rotateY: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 12 }}
          whileHover={{ 
            scale: 1.03, 
            rotateY: 6,
            rotateX: 3,
            boxShadow: '0 0 90px rgba(245,158,11,0.5)'
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Holographic Glowing Background Plasma */}
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-yellow-500/30 via-orange-500/30 to-purple-600/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

          {/* Top Header Tag */}
          <div className="w-full flex justify-between items-center z-10">
            <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 font-black text-[10px] sm:text-xs tracking-wider border border-yellow-500/40 uppercase shadow-md flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
              ⚡ Agentra 3D Neural Intelligence
            </span>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded-md border border-slate-700 hidden sm:block">
              v2.5 PRO
            </span>
          </div>

          {/* 3D Agent Image Frame with Rotating Holographic Ring */}
          <motion.div 
            className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 my-auto flex items-center justify-center"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              repeatType: 'loop',
              ease: "easeInOut"
            }}
          >
            {/* Outer Holographic Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-500 p-[3px] animate-spin [animation-duration:12s] opacity-70">
              <div className="w-full h-full bg-slate-950 rounded-full"></div>
            </div>

            {/* 3D Image */}
            <img
              src="/images/ai_agent_3d_showcase.png"
              alt="Agentra 3D AI Assistant"
              className="w-[90%] h-[90%] object-cover rounded-full shadow-[0_0_35px_rgba(245,158,11,0.5)] border-4 border-yellow-400/40 relative z-10 group-hover:scale-105 transition duration-500"
            />
          </motion.div>

          {/* Bottom Status Card */}
          <div className="w-full z-10 bg-slate-950/80 border border-yellow-500/40 rounded-xl p-2.5 sm:p-3 backdrop-blur-md flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping shrink-0"></div>
              <div>
                <h4 className="text-xs font-bold text-yellow-300">Agentra 3D AI Assistant</h4>
                <p className="text-[10px] text-slate-400">24/7 Autonomous Multi-Agent Core</p>
              </div>
            </div>
            <span className="text-[10px] font-black text-amber-400 bg-yellow-500/20 px-2 py-1 rounded-md border border-yellow-500/30 shrink-0">
              ONLINE 🟢
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}