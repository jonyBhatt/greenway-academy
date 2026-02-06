import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, GraduationCap, Map, ArrowRight, Check, Clock, Users } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const programmes = [
    {
      id: 'ielts',
      icon: BookOpen,
      title: 'IELTS Preparation',
      duration: '8-12 Weeks',
      description:
        'Comprehensive IELTS training with expert instructors, mock tests, and personalized feedback to help you achieve your target band score.',
      features: [
        'Comprehensive training in all 4 modules',
        'Weekly mock tests with detailed feedback',
        'Expert certified instructors',
        'Flexible batch timings',
        'Study materials included',
      ],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      iconColor: 'text-green-400',
    },
    {
      id: 'othm',
      icon: GraduationCap,
      title: 'OTHM Qualifications',
      duration: '6-12 Months',
      description:
        'UK-recognized qualifications that provide a direct pathway to university degrees. Equivalent to Bachelor\'s and Master\'s level studies.',
      features: [
        'UK recognized qualifications',
        'Direct university progression',
        'Flexible learning options',
        'Online and offline classes',
        'Affordable fee structure',
      ],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      id: 'pathway',
      icon: Map,
      title: 'University Pathway',
      duration: '1-2 Years',
      description:
        'Complete support from application to admission. Guaranteed entry to partner universities in the UK, Australia, USA, and Canada.',
      features: [
        'Guaranteed university entry',
        'Access to top 70+ universities',
        'Full application support',
        'Visa guidance included',
        'Pre-departure briefing',
      ],
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      iconColor: 'text-yellow-400',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-500/5 to-transparent rounded-full blur-3xl" />
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
            Our Programmes
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Choose Your <span className="gradient-text">Pathway</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Select the programme that fits your academic goals and start your
            journey to world-class education
          </motion.p>
        </div>

        {/* Programme Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((programme, index) => (
            <motion.div
              key={programme.id}
              id={programme.id}
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative group glass rounded-2xl p-8 ${programme.borderColor} border hover:border-opacity-50 transition-all duration-500`}
              style={{ perspective: '1000px' }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${programme.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
              />

              {/* Icon */}
              <motion.div
                className={`relative w-16 h-16 ${programme.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <programme.icon className={`w-8 h-8 ${programme.iconColor}`} />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {programme.title}
              </h3>

              {/* Duration Badge */}
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground\">
                  <Clock className="w-4 h-4\" />
                  {programme.duration}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground\">
                  <Users className="w-4 h-4" />
                  Online/Offline
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {programme.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {programme.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.1 + featureIndex * 0.05,
                    }}
                  >
                    <Check
                      className={`w-5 h-5 ${programme.iconColor} flex-shrink-0 mt-0.5`}
                    />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${programme.color} text-white font-semibold flex items-center justify-center gap-2 group/btn btn-shine`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
