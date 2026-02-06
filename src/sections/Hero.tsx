import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Floating shapes animation with GSAP
    if (shapesRef.current) {
      const shapes = shapesRef.current.querySelectorAll('.floating-shape');
      shapes.forEach((shape, index) => {
        gsap.to(shape, {
          y: `random(-40, 40)`,
          x: `random(-30, 30)`,
          rotation: `random(-20, 20)`,
          duration: `random(4, 8)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3,
        });
      });
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnrollClick = () => {
    navigate('/enroll');
  };

  const titleWords = ['Your Gateway', 'to', 'World-Class', 'Education'];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(ellipse at 20% 30%, rgba(34, 197, 94, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
              'radial-gradient(ellipse at 80% 30%, rgba(34, 197, 94, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 20% 70%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
              'radial-gradient(ellipse at 20% 30%, rgba(34, 197, 94, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Morphing Blob Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-green-500/20 to-blue-500/20 morph-blob"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 morph-blob"
          style={{ animationDelay: '-4s' }}
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none">
        {/* Large Circle */}
        <div
          className="floating-shape absolute top-[15%] left-[8%] w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-green-500/20"
          style={{ animationDelay: '0s' }}
        />
        {/* Small Circle */}
        <div
          className="floating-shape absolute top-[25%] right-[10%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-blue-500/10"
          style={{ animationDelay: '1s' }}
        />
        {/* Triangle */}
        <div
          className="floating-shape absolute bottom-[25%] left-[15%] w-0 h-0 hidden sm:block"
          style={{
            borderLeft: '30px solid transparent',
            borderRight: '30px solid transparent',
            borderBottom: '50px solid rgba(234, 179, 8, 0.15)',
            animationDelay: '2s',
          }}
        />
        {/* Square */}
        <div
          className="floating-shape absolute bottom-[15%] right-[8%] w-16 h-16 sm:w-24 sm:h-24 border-2 border-green-400/20 rotate-45"
          style={{ animationDelay: '1.5s' }}
        />
        {/* Hexagon */}
        <div
          className="floating-shape absolute top-[35%] right-[22%] w-12 h-12 sm:w-16 sm:h-16 bg-blue-400/10 hidden lg:block"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            animationDelay: '0.5s',
          }}
        />
        {/* Dots Pattern */}
        <div
          className="floating-shape absolute top-[60%] left-[3%] grid grid-cols-4 gap-2 sm:gap-3 hidden md:grid"
          style={{ animationDelay: '2.5s' }}
        >
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400/30" />
          ))}
        </div>
        {/* Star */}
        <div
          className="floating-shape absolute top-[20%] left-[30%] w-8 h-8 hidden lg:block"
          style={{
            background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.3), rgba(234, 179, 8, 0.1))',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            animationDelay: '3s',
          }}
        />
        {/* Ring */}
        <div
          className="floating-shape absolute bottom-[35%] left-[25%] w-20 h-20 rounded-full border-2 border-dashed border-blue-400/20 hidden md:block"
          style={{ animationDelay: '1.8s' }}
        />
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 glass rounded-full"
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">
            Guaranteed Entry to Top Universities
          </span>
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block mr-2 sm:mr-4 ${
                index === 2 || index === 3
                  ? 'bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-blue-500'
                  : 'text-foreground'
              }`}
              initial={{ opacity: 0, y: 50, clipPath: 'inset(0 100% 0 0)' }}
              animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)' }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
        >
          Study{' '}
          <span className="text-green-400 font-semibold">IELTS</span> &{' '}
          <span className="text-blue-400 font-semibold">OTHM</span> programs and
          progress to top universities in the UK, Australia, USA, Canada and beyond.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={handleEnrollClick}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/30 transition-all btn-shine"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            Enroll Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('#services')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Programmes
          </motion.button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '5000+', label: 'Students Enrolled' },
            { value: '70+', label: 'Partner Universities' },
            { value: '95%', label: 'Success Rate' },
            { value: '12+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 glass rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/50"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
