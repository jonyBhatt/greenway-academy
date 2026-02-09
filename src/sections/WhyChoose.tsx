import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Users,
  Calendar,
  Globe,
  DollarSign,
  Briefcase,
  Building,
  Check,
} from 'lucide-react';

const WhyChoose = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description:
        'Learn from certified professionals with years of experience in IELTS and OTHM training.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Calendar,
      title: 'Flexible Learning',
      description:
        'Study at your own pace with online and offline options to fit your schedule.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description:
        'Our qualifications are recognized by universities and employers worldwide.',
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: DollarSign,
      title: 'Affordable Fees',
      description:
        'Quality education at competitive prices with flexible payment options.',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      icon: Briefcase,
      title: 'Career Support',
      description:
        'Guidance for university applications, visa processing, and career paths.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Building,
      title: 'Modern Facilities',
      description:
        'State-of-the-art classrooms and learning resources for optimal study experience.',
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
        <div className="absolute top-1/2 left-0 w-1/2 h-full bg-gradient-to-r from-green-500/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[3/4] relative">
                <img
                  src="/graduation-image.jpg"
                  alt="Graduates celebrating"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass rounded-xl p-4 border border-green-500/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-foreground font-bold">95%</div>
                  <div className="text-muted-foreground text-xs">Success Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-blue-500/20 rounded-xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              Why Choose{' '}
              <span className="gradient-text">Greenway Academy</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              We provide the best learning environment and support to help you
              achieve your academic and career goals.
            </motion.p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group glass rounded-xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
