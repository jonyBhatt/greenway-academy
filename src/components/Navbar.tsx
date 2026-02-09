import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Services',
      href: '#services',
      dropdown: [
        {
          name: 'IELTS',
          href: '#ielts',
          subItems: [{ name: 'Why IELTS', href: '/why-ielts' }],
        },
        {
          name: 'OTHM',
          href: '#othm',
          subItems: [{ name: 'Why OTHM', href: '/why-othm' }],
        },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);

    if (href.startsWith('/')) {
      navigate(href);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleEnrollClick = () => {
    navigate('/enroll');
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'backdrop-blur-xl bg-background/90 border-b border-white/5'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M10 50 Q50 5 90 50"
                    fill="none"
                    stroke="url(#logoGradient)"
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <motion.button
                        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors underline-grow py-2"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''
                            }`}
                        />
                      </motion.button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, rotateX: -15 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, y: 10, rotateX: -15 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-0 mt-2 w-56 glass rounded-xl overflow-hidden shadow-2xl"
                            style={{ perspective: '1000px' }}
                          >
                            {link.dropdown.map((item) => (
                              <div key={item.name} className="relative group">
                                <a
                                  href={item.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                  }}
                                  className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
                                >
                                  <GraduationCap className="w-5 h-5 text-green-400" />
                                  <span className="font-medium">{item.name}</span>
                                </a>
                                {item.subItems && (
                                  <div className="bg-card/50">
                                    {item.subItems.map((subItem) => (
                                      <a
                                        key={subItem.name}
                                        href={subItem.href}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          scrollToSection(subItem.href);
                                        }}
                                        className="flex items-center gap-3 px-4 py-2 pl-12 text-sm text-muted-foreground hover:text-green-400 hover:bg-white/5 transition-all"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400/50"></span>
                                        {subItem.name}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors underline-grow py-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      {link.name}
                    </motion.a>
                  )}
                </div>
              ))}



              {/* CTA Button */}
              <motion.button
                onClick={handleEnrollClick}
                className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all btn-shine"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
              >
                Enroll Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">

              <motion.button
                className="p-2 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col pt-24 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {link.dropdown ? (
                    <div className="py-4 border-b border-white/10">
                      <span className="text-lg font-medium text-foreground">{link.name}</span>
                      <div className="mt-3 ml-4 space-y-3">
                        {link.dropdown.map((item) => (
                          <div key={item.name}>
                            <a
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.href);
                              }}
                              className="flex items-center gap-2 text-muted-foreground hover:text-green-400 transition-colors"
                            >
                              <GraduationCap className="w-5 h-5" />
                              {item.name}
                            </a>
                            {item.subItems && (
                              <div className="ml-7 mt-2 space-y-2">
                                {item.subItems.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      scrollToSection(subItem.href);
                                    }}
                                    className="block text-sm text-muted-foreground hover:text-green-400 transition-colors"
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="block py-4 text-xl font-medium text-foreground border-b border-white/10 hover:text-green-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}

              <motion.button
                onClick={handleEnrollClick}
                className="mt-8 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
