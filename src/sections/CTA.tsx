import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 40%)',
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%] w-32 h-32 border border-green-500/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[15%] w-24 h-24 border border-blue-500/20 rounded-lg rotate-45"
          animate={{
            y: [0, 20, 0],
            rotate: [45, 225, 405],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your{' '}
            <span className="gradient-text">Journey</span>?
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto"
          >
            Contact us today to learn more about our programmes and how we can help
            you achieve your dreams of studying abroad.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="tel:+8801322912091"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-bold rounded-full hover:shadow-xl hover:shadow-green-500/30 transition-all btn-shine mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-6 h-6" />
            Call Us Now
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {/* Phone */}
          <motion.a
            href="tel:+8801322912091"
            className="glass rounded-xl p-6 border border-white/5 hover:border-green-500/30 transition-all group"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
              <Phone className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-foreground font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">+880 1322-912091</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:admin@greenwayacademy.com"
            className="glass rounded-xl p-6 border border-white/5 hover:border-blue-500/30 transition-all group"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-foreground font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">admin@greenwayacademy.com</p>
          </motion.a>

          {/* Address */}
          <motion.div
            className="glass rounded-xl p-6 border border-white/5 hover:border-yellow-500/30 transition-all group"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/30 transition-colors">
              <MapPin className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-foreground font-semibold mb-2">Address</h3>
            <p className="text-muted-foreground text-sm">
              76 Satmasjid Road, Level 3, Dhanmondi, Dhaka-1209
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
