import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programmes', href: '#services' },
    { name: 'Student Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const programmes = [
    { name: 'IELTS Preparation', href: '#ielts' },
    { name: 'OTHM Qualifications', href: '#othm' },
    { name: 'University Pathway', href: '#pathway' },
    { name: 'Why IELTS', href: '#why-ielts' },
    { name: 'Why OTHM', href: '#why-othm' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-background border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-green-500 to-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ backgroundSize: '200% 200%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M10 50 Q50 5 90 50"
                    fill="none"
                    stroke="url(#footerLogoGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-tight">
                  GREENWAY
                </span>
                <span className="text-sm font-medium text-blue-400 -mt-1">
                  ACADEMY
                </span>
              </div>
            </motion.a>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your gateway to world-class education. We help students achieve their
              dreams of studying abroad through IELTS and OTHM qualifications.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-green-500/50 transition-all"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-green-400 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted group-hover:bg-green-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Programmes</h3>
            <ul className="space-y-3">
              {programmes.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-green-400 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-green-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  76 Satmasjid Road, Level 3,
                  <br />
                  Dhanmondi, Dhaka-1209
                </span>
              </li>
              <li>
                <a
                  href="tel:+8801322912091"
                  className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  +880 1322-912091
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@greenwayacademy.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                  admin@greenwayacademy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/60 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Greenway Academy. All rights reserved.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-green-400 transition-colors text-sm group"
            whileHover={{ y: -2 }}
          >
            Back to top
            <motion.div
              className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center group-hover:border-green-500/50 transition-colors"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
