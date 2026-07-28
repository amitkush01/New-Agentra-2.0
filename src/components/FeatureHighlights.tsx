'use client';

import { motion } from 'framer-motion';

interface FeatureHighlightsProps {
  isDarkMode: boolean;
  isHovering: boolean;
  setIsHovering: (value: boolean) => void;
}

export default function FeatureHighlights({ isDarkMode, isHovering, setIsHovering }: FeatureHighlightsProps) {
  const textClass = isDarkMode ? 'text-white' : 'text-slate-900';
  
  const features = [
    {
      icon: '⚡',
      title: 'Domain Expertise',
      description: 'Specialized AI agents for marketing, HR, customer service, and business operations'
    },
    {
      icon: '🔄',
      title: 'Custom Solutions',
      description: 'Tailored automation that adapts to your specific business requirements'
    },
    {
      icon: '🎯',
      title: '24/7 Efficiency',
      description: 'Intelligent agents that work continuously without breaks or downtime'
    },
    {
      icon: '🚀',
      title: 'Scalable Growth',
      description: 'AI solutions that grow with your business and handle increasing workloads'
    }
  ];

  return (
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
          Why Choose Agentra?
        </h2>
        <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} max-w-xl mx-auto`}>
          We specialize in domain-specific AI solutions with customized automation that adapts to your unique business needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/40 backdrop-blur-md border-slate-700/70 hover:border-yellow-500/50 hover:bg-slate-800/60' 
                : 'bg-yellow-50/60 border-yellow-200 hover:border-yellow-400'
            } hover:shadow-lg hover:-translate-y-0.5`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="text-2xl mb-1">{feature.icon}</div>
            <h3 className={`text-sm sm:text-base font-bold mb-1 ${textClass}`}>
              {feature.title}
            </h3>
            <p className={`text-xs leading-normal ${isDarkMode ? 'text-slate-300/90' : 'text-slate-600'}`}>
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className={`p-2.5 sm:p-3 rounded-xl border ${isDarkMode ? 'bg-slate-800/40 backdrop-blur-md border-slate-700/70' : 'bg-yellow-100/60 border-yellow-200'}`}>
          <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-0.5">
            99.9%
          </div>
          <div className={`text-xs sm:text-sm font-semibold ${textClass}`}>
            Uptime
          </div>
        </div>
        <div className={`p-2.5 sm:p-3 rounded-xl border ${isDarkMode ? 'bg-slate-800/40 backdrop-blur-md border-slate-700/70' : 'bg-yellow-100/60 border-yellow-200'}`}>
          <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-0.5">
            24/7
          </div>
          <div className={`text-xs sm:text-sm font-semibold ${textClass}`}>
            Availability
          </div>
        </div>
        <div className={`p-2.5 sm:p-3 rounded-xl border ${isDarkMode ? 'bg-slate-800/40 backdrop-blur-md border-slate-700/70' : 'bg-yellow-100/60 border-yellow-200'}`}>
          <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-0.5">
            10x
          </div>
          <div className={`text-xs sm:text-sm font-semibold ${textClass}`}>
            Faster
          </div>
        </div>
      </motion.div>
    </section>
  );
} 