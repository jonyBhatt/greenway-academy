import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  BookOpen,
  Users,
  Star,
} from 'lucide-react';

const WhyIELTS = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Globe,
      title: 'Global Recognition',
      description:
        'Accepted by over 12,000 organizations worldwide including universities, employers, and immigration authorities.',
    },
    {
      icon: Award,
      title: 'Academic & General',
      description:
        'Choose between Academic for university admission or General Training for work and migration purposes.',
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description:
        'Demonstrate your English proficiency to employers and open doors to international career opportunities.',
    },
    {
      icon: Clock,
      title: 'Fast Results',
      description:
        'Get your results within 2 days for computer-delivered tests and 7 days for paper-based tests.',
    },
    {
      icon: CheckCircle,
      title: 'One Skill Retake',
      description:
        'Retake just one section if needed, saving time and money while improving your score.',
    },
    {
      icon: BookOpen,
      title: 'Real-Life Skills',
      description:
        'Develop practical English skills for academic, professional, and everyday situations.',
    },
  ];

  const stats = [
    { value: '12,000+', label: 'Accepting Organizations' },
    { value: '140+', label: 'Countries' },
    { value: '3M+', label: 'Tests Taken Yearly' },
    { value: '2-7', label: 'Days for Results' },
  ];

  return (
    <section
      id="why-ielts"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-green-400 font-semibold uppercase tracking-wider">
                IELTS Preparation
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Why Choose <span className="text-green-400">IELTS</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              The International English Language Testing System (IELTS) is the
              world&apos;s most popular English language proficiency test for higher
              education and global migration. With IELTS, you can prove your English
              skills to universities, employers, and immigration authorities
              worldwide.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group glass rounded-xl p-6 border border-green-500/10 hover:border-green-500/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass rounded-2xl p-8 lg:p-12 border border-green-500/20"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Users className="w-10 h-10 text-foreground" />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground italic mb-4">
                &quot;Thanks to Greenway Academy&apos;s IELTS preparation course, I achieved
                a band score of 8.0 and got accepted into my dream university in
                the UK. The instructors were incredibly supportive and the mock
                tests really helped me prepare.&quot;
              </p>
              <div className="text-foreground font-semibold">Sarah Ahmed</div>
              <div className="text-muted-foreground text-sm">
                IELTS Score: 8.0 | Now studying at University of Manchester
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyIELTS;
