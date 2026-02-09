import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Globe,
  Award,
  Clock,
  CheckCircle,
  BookOpen,
  Users,
  Mic,
  PenTool,
  Headphones,
  ArrowRight
} from 'lucide-react';

const WhyIELTS = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const modules = [
    {
      icon: Headphones,
      title: 'Listening',
      desc: '30 minutes, 4 recordings',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20'
    },
    {
      icon: BookOpen,
      title: 'Reading',
      desc: '60 minutes, 3 passages',
      color: 'text-teal-400',
      bg: 'bg-teal-500/10',
      border: 'border-teal-500/20'
    },
    {
      icon: PenTool,
      title: 'Writing',
      desc: '60 minutes, 2 tasks',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20'
    },
    {
      icon: Mic,
      title: 'Speaking',
      desc: '11-14 minutes, face-to-face',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20'
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
            src="/ielts-hero-bg.png"
            alt="IELTS Hero"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>

        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md"
          >
            <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">
              Global Gateway
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-green-100 to-green-400"
          >
            Master IELTS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Your passport to global education and professional opportunities worldwide.
          </motion.p>
        </div>
      </section>

      {/* Modules Section with 3D Image */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Comprehensive <br />
                <span className="text-green-400">Skill Mastery</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The IELTS test assesses all your English skills — reading, writing, listening, and speaking — ensuring you are fully prepared for life in an English-speaking environment.
              </p>

              <div className="grid gap-4">
                {modules.map((mod, i) => (
                  <motion.div
                    key={mod.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${mod.border} ${mod.bg} hover:scale-[1.02] transition-transform cursor-default`}
                  >
                    <div className={`p-3 rounded-lg bg-background/50 ${mod.color}`}>
                      <mod.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{mod.title}</h3>
                      <p className="text-sm text-muted-foreground">{mod.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full" />
              <img
                src="/ielts-features.png"
                alt="IELTS Modules 3D"
                className="relative z-10 w-full drop-shadow-2xl animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats & Benefits Parallax */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-green-950/20 to-background pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { label: 'Organizations', value: '12,000+', icon: Globe },
              { label: 'Countries', value: '140+', icon: Award },
              { label: 'Tests/Year', value: '3M+', icon: Users },
              { label: 'Result Days', value: '2-5', icon: Clock },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl text-center border border-white/5 hover:border-green-500/30 transition-all group"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Band Score Guide */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Understanding Band Scores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              IELTS scores are reported on a 9-band scale. Each band corresponds to a level of English competence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { band: '9', skill: 'Expert User', desc: 'Has fully operational command of the language.' },
              { band: '8', skill: 'Very Good User', desc: 'Fully operational command with occasional inaccuracies.' },
              { band: '7', skill: 'Good User', desc: 'Operational command, though with occasional inaccuracies.' },
              { band: '6', skill: 'Competent User', desc: 'Generally effective command despite some inaccuracies.' },
              { band: '5', skill: 'Modest User', desc: 'Partial command, coping with overall meaning in most situations.' },
              { band: '4', skill: 'Limited User', desc: 'Basic competence is limited to familiar situations.' },
            ].map((score, i) => (
              <motion.div
                key={score.band}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-green-500/10 hover:border-green-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-green-400 group-hover:scale-125 transition-transform">{score.band}</span>
                  <CheckCircle className="w-5 h-5 text-green-500/50 group-hover:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{score.skill}</h4>
                <p className="text-sm text-muted-foreground">{score.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to achieve your target score?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join thousands of successful students who have achieved their dreams with Greenway Academy.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-500 text-white rounded-full font-bold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all flex items-center gap-2 mx-auto"
            >
              Enroll Now <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyIELTS;
