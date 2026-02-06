import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Building2,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  Users,
} from 'lucide-react';

const WhyOTHM = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Award,
      title: 'UK Recognized',
      description:
        'OTHM qualifications are regulated by Ofqual and recognized by universities and employers worldwide.',
    },
    {
      icon: Building2,
      title: 'University Progression',
      description:
        'Direct entry to Bachelor and Master degree programs at UK and international universities.',
    },
    {
      icon: TrendingUp,
      title: 'Career Boost',
      description:
        'Enhance your career prospects with qualifications that demonstrate professional competence.',
    },
    {
      icon: Clock,
      title: 'Fast Track',
      description:
        'Complete your qualification in 6-12 months compared to traditional 3-4 year degrees.',
    },
    {
      icon: CheckCircle,
      title: 'Flexible Learning',
      description:
        'Study at your own pace with online and blended learning options available.',
    },
    {
      icon: GraduationCap,
      title: 'Multiple Levels',
      description:
        'Choose from Level 3 to Level 7 qualifications covering various disciplines.',
    },
  ];

  const levels = [
    {
      level: 'Level 3',
      title: 'Foundation',
      description: 'Equivalent to A-Levels',
      duration: '6-9 Months',
    },
    {
      level: 'Level 4 & 5',
      title: 'Undergraduate',
      description: 'Equivalent to Year 1 & 2 of Bachelor',
      duration: '9-12 Months',
    },
    {
      level: 'Level 6',
      title: 'Bachelor',
      description: 'Equivalent to Final Year Bachelor',
      duration: '6-9 Months',
    },
    {
      level: 'Level 7',
      title: 'Master',
      description: 'Equivalent to Postgraduate Diploma',
      duration: '6-9 Months',
    },
  ];

  return (
    <section
      id="why-othm"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/5 to-transparent" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-blue-400 font-semibold uppercase tracking-wider">
                OTHM Qualifications
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Why Choose <span className="text-blue-400">OTHM</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              OTHM (Organization for Tourism and Hospitality Management) is a UK-based
              awarding organization regulated by Ofqual. Their qualifications provide
              a fast-track pathway to university degrees, recognized by top
              institutions worldwide.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed"
            >
              With OTHM qualifications, you can progress directly to the final year
              of a Bachelor&apos;s degree or enter a Master&apos;s program, saving both time
              and money while achieving your academic goals.
            </motion.p>
          </div>

          {/* Levels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {levels.map((level, index) => (
              <motion.div
                key={level.level}
                className="glass rounded-xl p-5 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="text-blue-400 font-bold text-lg mb-1">
                  {level.level}
                </div>
                <div className="text-foreground font-semibold mb-1">{level.title}</div>
                <div className="text-muted-foreground text-sm mb-2">
                  {level.description}
                </div>
                <div className="text-muted-foreground/80 text-xs">{level.duration}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group glass rounded-xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-blue-400" />
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
          className="mt-16 glass rounded-2xl p-8 lg:p-12 border border-blue-500/20"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
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
                &quot;The OTHM Level 5 Diploma at Greenway Academy was a game-changer for
                me. After completing the course, I got direct entry into the final
                year of my Business Administration degree at a UK university. The
                support from instructors was exceptional.&quot;
              </p>
              <div className="text-foreground font-semibold">Mohammad Rahman</div>
              <div className="text-muted-foreground text-sm">
                OTHM Level 5 Graduate | Now at University of Birmingham
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOTHM;
