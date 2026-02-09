import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Building2,
  Clock,
  Briefcase,
  Globe,
  GraduationCap,
  ShieldCheck,
  CheckCircle,
  Zap
} from 'lucide-react';

const WhyOTHM = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const levels = [
    {
      level: 'Level 3',
      title: 'Foundation Diploma',
      desc: 'Equivalent to A-Levels. Entry requirement for Undergraduate.',
      duration: '6-9 Months',
      color: 'blue'
    },
    {
      level: 'Level 4 & 5',
      title: 'Undergraduate Diploma',
      desc: 'Equivalent to Year 1 & 2 of a UK Bachelor\'s degree.',
      duration: '12-18 Months',
      color: 'indigo'
    },
    {
      level: 'Level 6',
      title: 'Graduate Diploma',
      desc: 'Equivalent to Final Year of a Bachelor\'s degree.',
      duration: '6-9 Months',
      color: 'violet'
    },
    {
      level: 'Level 7',
      title: 'Postgraduate Diploma',
      desc: 'Equivalent to Master\'s degree level.',
      duration: '6-9 Months',
      color: 'purple'
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10" />
          <img
            src="/othm-hero-bg.png"
            alt="OTHM Hero"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>

        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md"
          >
            <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">
              UK Qualifications
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-500"
          >
            Fast-Track Your Degree
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Affordable, recognized, and direct pathways to UK universities.
          </motion.p>
        </div>
      </section>

      {/* Pathway Visualization */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Your Pathway to Success</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              OTHM qualifications provide a stepping stone to higher education. Depending on your current level, you can start at any stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 -translate-y-1/2 z-0" />

            {levels.map((lvl, i) => (
              <motion.div
                key={lvl.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 glass p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group h-full flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${lvl.color}-500 to-${lvl.color}-700 flex items-center justify-center mb-6 shadow-lg shadow-${lvl.color}-500/20 group-hover:scale-110 transition-transform`}>
                  <p className="font-bold text-white">{i + 3}</p>
                </div>

                <h3 className={`text-xl font-bold text-${lvl.color}-400 mb-2`}>{lvl.level}</h3>
                <h4 className="text-lg font-semibold mb-3">{lvl.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{lvl.desc}</p>

                <div className="flex items-center gap-2 text-xs font-medium text-white/50 bg-white/5 p-2 rounded-lg">
                  <Clock className="w-3 h-3" /> {lvl.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Why Choose OTHM?</h2>
                <p className="text-lg text-muted-foreground">
                  Regulated by Ofqual (Office of Qualifications and Examinations Regulation), OTHM qualifications are recognized globally by universities and employers.
                </p>
              </motion.div>

              {[
                { icon: Briefcase, title: 'Career Progression', desc: 'Practical skills that employers value immediately.' },
                { icon: Globe, title: 'Global Recognition', desc: 'accepted by universities in UK, USA, Canada, Australia.' },
                { icon: Building2, title: 'Affordable', desc: 'Save up to 60% of tuition fees compared to traditional university routes.' }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] rounded-full border border-blue-500/10 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] rounded-full border border-indigo-500/10 border-dotted opacity-50"
              />

              {/* Content Grid */}
              <div className="grid grid-cols-2 gap-4 h-full relative z-10">
                {/* Card 1 */}
                <motion.div
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="relative bg-gradient-to-br from-[#1a1f3c] to-[#0f1225] rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-white/5 shadow-xl shadow-blue-900/20 group cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 z-0">
                    <img src="/othm-ofqual.jpg" alt="Ofqual" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform text-blue-400 backdrop-blur-sm border border-white/10">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors drop-shadow-md">Ofqual Regulated</span>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="relative bg-gradient-to-bl from-[#1e1b4b] to-[#0f1225] rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-white/5 shadow-xl shadow-indigo-900/20 group cursor-pointer overflow-hidden mt-8"
                >
                  <div className="absolute inset-0 z-0">
                    <img src="/othm-university.jpg" alt="University" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-indigo-900/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-transparent" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform text-indigo-400 backdrop-blur-sm border border-white/10">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors drop-shadow-md">University Access</span>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="relative bg-gradient-to-tr from-[#2e1065] to-[#0f1225] rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-white/5 shadow-xl shadow-purple-900/20 group cursor-pointer overflow-hidden -mt-8"
                >
                  <div className="absolute inset-0 z-0">
                    <img src="/othm-wes.jpg" alt="WES" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-purple-900/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform text-purple-400 backdrop-blur-sm border border-white/10">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors drop-shadow-md">WES Approved</span>
                  </div>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="relative bg-gradient-to-tl from-[#164e63] to-[#0f1225] rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-white/5 shadow-xl shadow-cyan-900/20 group cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 z-0">
                    <img src="/othm-fasttrack.jpg" alt="Fast Track" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-cyan-900/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-950 via-transparent to-transparent" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform text-cyan-400 backdrop-blur-sm border border-white/10">
                      <Zap className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors drop-shadow-md">Fast Track</span>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Start Your Journey Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-500/25">
              View Courses
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold backdrop-blur-sm transition-all border border-white/10">
              Contact an Advisor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyOTHM;
