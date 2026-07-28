'use client';

import { motion } from 'framer-motion';

interface AboutUsProps {
  isDarkMode: boolean;
  isHovering: boolean;
  setIsHovering: (value: boolean) => void;
}

export default function AboutUs({ isDarkMode, isHovering, setIsHovering }: AboutUsProps) {
  const textClass = isDarkMode ? 'text-white' : 'text-orange-900';

  const services = [
    {
      icon: '🎯',
      title: 'Marketing AI Agents',
      description: 'Intelligent automation for digital marketing, content creation, and customer engagement strategies'
    },
    {
      icon: '👥',
      title: 'HR & Recruitment',
      description: 'AI-powered talent acquisition, employee management, and HR process optimization'
    },
    {
      icon: '💬',
      title: 'Customer Service',
      description: '24/7 intelligent customer support with natural language processing and problem resolution'
    },
    {
      icon: '📊',
      title: 'Business Operations',
      description: 'Streamlined workflow automation, data analysis, and operational efficiency solutions'
    }
  ];

  return (
    <section id="about" className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
          About Agentra
        </h2>
        <p className={`text-base sm:text-lg font-medium ${isDarkMode ? 'text-slate-300' : 'text-orange-700'} max-w-3xl mx-auto mb-4`}>
          Leading the future of intelligent business automation
        </p>
      </motion.div>

      {/* Company Description & Mission */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="space-y-3 flex flex-col justify-center">
          <h3 className={`text-2xl sm:text-3xl font-bold ${textClass} mb-2`}>
            Who We Are
          </h3>
          <div className={`space-y-3 text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-orange-700'}`}>
            <p>
              <strong className={textClass}>Agentra</strong> is a pioneering AI solutions company specializing in domain-specific intelligent agents for businesses across industries.
            </p>
            <p>
              We develop customized AI agents specifically tailored to your industry workflows, operational processes, and growth objectives.
            </p>
            <p>
              Our team combines deep AI engineering with operational expertise to deliver automation that enhances decision-making and drives measurable outcomes.
            </p>
          </div>
        </div>

        {/* Mission Box (Compact) */}
        <motion.div
          className={`p-5 sm:p-6 rounded-2xl ${isDarkMode ? 'bg-slate-800/40 backdrop-blur-md border-slate-700/80' : 'bg-yellow-100/60 border-yellow-200'} border flex flex-col justify-center shadow-lg`}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="text-3xl sm:text-4xl mb-2">🚀</div>
          <h4 className={`text-xl font-bold ${textClass} mb-2`}>Our Mission</h4>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-orange-700'}`}>
            To democratize AI technology by making intelligent automation accessible, affordable, and highly effective for businesses of all sizes, while maintaining top customization and performance standards.
          </p>
        </motion.div>
      </motion.div>

      {/* Services Grid (Compact 4-column layout) */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className={`text-2xl sm:text-3xl font-bold text-center ${textClass} mb-6`}>
          What We Deliver
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                isDarkMode
                  ? 'bg-slate-800/40 backdrop-blur-md border-slate-700/70 hover:border-yellow-500/50 hover:bg-slate-800/60'
                  : 'bg-yellow-50/60 border-yellow-200 hover:border-yellow-400'
              } hover:shadow-xl hover:-translate-y-1`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <h4 className={`text-base sm:text-lg font-bold mb-1.5 ${textClass}`}>
                {service.title}
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us (Compact Box) */}
      <motion.div
        className={`p-5 sm:p-6 rounded-2xl ${isDarkMode ? 'bg-slate-800/40 backdrop-blur-md border-slate-700/70' : 'bg-yellow-100/60 border-yellow-200'} border shadow-lg`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className={`text-xl sm:text-2xl font-bold text-center ${textClass} mb-6`}>
          Why Businesses Choose Agentra
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-xl bg-slate-900/20">
            <div className="text-2xl mb-1.5">🎯</div>
            <h4 className={`text-sm font-bold ${textClass} mb-1`}>Customized Solutions</h4>
            <p className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Every AI agent is tailored to your specific business needs and workflows.
            </p>
          </div>
          <div className="text-center p-3 rounded-xl bg-slate-900/20">
            <div className="text-2xl mb-1.5">⚡</div>
            <h4 className={`text-sm font-bold ${textClass} mb-1`}>Rapid Implementation</h4>
            <p className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Quick deployment with minimal disruption to your operational pipelines.
            </p>
          </div>
          <div className="text-center p-3 rounded-xl bg-slate-900/20">
            <div className="text-2xl mb-1.5">📈</div>
            <h4 className={`text-sm font-bold ${textClass} mb-1`}>Measurable Results</h4>
            <p className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Clear metrics and ROI tracking demonstrating real automation value.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 