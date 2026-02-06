import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  PlayCircle,
  TrendingUp,
  Award,
  Globe,
  CheckCircle,
  Plane,
} from 'lucide-react';

const Journey = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: PlayCircle,
      title: 'Begin Your Programme',
      description: 'Start your journey with our foundation courses designed for your success',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: TrendingUp,
      title: 'Develop Your Skills',
      description: 'Build expertise through comprehensive training and practical exercises',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Award,
      title: 'Achieve Your Qualification',
      description: 'Earn your IELTS or OTHM certification with flying colors',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      icon: Globe,
      title: 'Apply to Universities',
      description: 'Get expert support for applications to universities worldwide',
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: CheckCircle,
      title: 'Secure Your Offer',
      description: 'Receive admission offers from top universities of your choice',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Plane,
      title: 'Start Your Future',
      description: 'Begin your international education journey and chase your dreams',
      color: 'from-cyan-500 to-teal-600',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-green-500/5 via-blue-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Your Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white mb-6"
          >
            Your Journey with <span className="gradient-text">Greenway</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A clear pathway to world-class universities - from enrollment to
            graduation
          </motion.p>
        </div>

        {/* Journey Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block  absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500/30 via-blue-500/30 to-yellow-500/30 -translate-y-1/2" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative group mt-2 mb-2"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-card border border-white/20 flex items-center justify-center text-sm font-bold text-foreground z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <motion.div
                  className="glass rounded-2xl p-8 h-full border border-white/5 hover:border-white/20 transition-all duration-500"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-8 h-8 dark:text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector Dot - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 transform -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">
            Ready to start your journey? Contact us today!
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 dark:text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all btn-shine"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
