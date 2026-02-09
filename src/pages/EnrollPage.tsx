import { motion, useInView } from 'framer-motion';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Send,
  User
} from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnrollPage = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    programme: '',
    preferredDate: '',
    address: '',
    message: '',
  });

  const programmes = [
    { value: 'ielts', label: 'IELTS Preparation', icon: BookOpen, duration: '8-12 Weeks' },
    { value: 'othm-level3', label: 'OTHM Level 3 (Foundation)', icon: Award, duration: '6-9 Months' },
    { value: 'othm-level4', label: 'OTHM Level 4 (Undergraduate)', icon: Award, duration: '9-12 Months' },
    { value: 'othm-level5', label: 'OTHM Level 5 (Undergraduate)', icon: Award, duration: '9-12 Months' },
    { value: 'othm-level6', label: 'OTHM Level 6 (Bachelor)', icon: Award, duration: '6-9 Months' },
    { value: 'othm-level7', label: 'OTHM Level 7 (Master)', icon: Award, duration: '6-9 Months' },
    { value: 'pathway', label: 'University Pathway', icon: GraduationCap, duration: '1-2 Years' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-foreground" />
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Registration Successful!</h2>
          <p className="text-muted-foreground mb-8">
            Thank you for enrolling at Greenway Academy. Our team will contact you within 24 hours to discuss your programme.
          </p>
          <motion.button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* <motion.button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button> */}

          {/* Logo */}
          {/* <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 100 60" className="w-full h-full">
                <defs>
                  <linearGradient id="enrollLogoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <path
                  d="M10 50 Q50 5 90 50"
                  fill="none"
                  stroke="url(#enrollLogoGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground tracking-tight">GREENWAY</span>
              <span className="text-xs font-medium text-blue-400 -mt-0.5">ACADEMY</span>
            </div>
          </div> */}

          <div className="w-24" /> {/* Spacer for centering */}
        </div>
      </motion.header>

      {/* Main Content */}
      <main ref={sectionRef} className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Enrollment
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Enroll <span className="gradient-text">Now</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fill out the form below to register for your preferred programme. Our team will contact you within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr,400px] gap-8">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-3xl p-8 border border-white/5"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-green-400" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card/50 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-green-400" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card/50 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-400" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card/50 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>

                {/* Education */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-green-400" />
                    Current Education *
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card/50 border border-white/10 rounded-xl text-foreground focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-card">Select education level</option>
                    <option value="o-levels" className="bg-card">O Levels / SSC</option>
                    <option value="a-levels" className="bg-card">A Levels / HSC</option>
                    <option value="bachelor" className="bg-card">Bachelor's Degree</option>
                    <option value="master" className="bg-card">Master's Degree</option>
                    <option value="other" className="bg-card">Other</option>
                  </select>
                </div>

                {/* Programme Selection */}
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2\">
                    <BookOpen className="w-4 h-4 text-green-400" />
                    Select Programme *
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3\">
                    {programmes.map((prog) => (
                      <motion.label
                        key={prog.value}
                        className={`relative flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                          formData.programme === prog.value
                            ? 'border-green-500 bg-green-500/10'
                            : 'border-white/10 bg-card/30 hover:border-white/20'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="radio"
                          name="programme"
                          value={prog.value}
                          checked={formData.programme === prog.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <prog.icon className={`w-5 h-5 ${formData.programme === prog.value ? 'text-green-400' : 'text-muted-foreground'}`} />
                        <div className="flex-1">
                          <div className={`text-sm font-medium ${formData.programme === prog.value ? 'text-foreground' : 'text-foreground'}`}>
                            {prog.label}
                          </div>
                          <div className="text-xs text-muted-foreground/70 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {prog.duration}
                          </div>
                        </div>
                        {formData.programme === prog.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"
                          >
                            <CheckCircle className="w-3 h-3 text-card-foreground" />
                          </motion.div>
                        )}
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Preferred Start Date */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-400" />
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card/50 border border-white/10 rounded-xl text-foreground focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card/50 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
                    placeholder="Your address"
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-card/50 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all resize-none"
                    placeholder="Tell us about your goals and any questions you may have..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full mt-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/30 transition-all btn-shine"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Submit Registration
              </motion.button>
            </motion.form>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Contact Card */}
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h3 className="text-xl font-bold text-foreground mb-4">Need Help?</h3>
                <div className="space-y-4">
                  <a href="tel:+8801322912091" className="flex items-center gap-3 text-muted-foreground hover:text-green-400 transition-colors">
                    <Phone className="w-5 h-5" />
                    +880 1322-912091
                  </a>
                  <a href="mailto:admin@greenwayacademy.com" className="flex items-center gap-3 text-muted-foreground hover:text-green-400 transition-colors">
                    <Mail className="w-5 h-5" />
                    admin@greenwayacademy.com
                  </a>
                </div>
              </div>

              {/* Steps Card */}
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h3 className="text-xl font-bold text-foreground mb-4">Enrollment Process</h3>
                <div className="space-y-4">
                  {[
                    { step: 1, text: 'Fill out the registration form' },
                    { step: 2, text: 'Our team will contact you within 24 hours' },
                    { step: 3, text: 'Attend a free counseling session' },
                    { step: 4, text: 'Complete the admission process' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                        {item.step}
                      </div>
                      <span className="text-muted-foreground text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Card */}
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Enroll With Us?</h3>
                <div className="space-y-3">
                  {[
                    'Expert instructors with years of experience',
                    'Flexible learning schedules',
                    'Comprehensive study materials',
                    'Mock tests and assessments',
                    'University placement support',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EnrollPage;
