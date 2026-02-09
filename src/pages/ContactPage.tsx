import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    MapPin,
    Phone,
    Mail,
    Send,
    MessageSquare,
    Clock,
    Facebook,
    Linkedin,
    Instagram
} from 'lucide-react';
import Footer from '../sections/Footer';

const ContactPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div ref={containerRef} className="relative bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10" />
                    <img
                        src="/contact-hero-bg.png"
                        alt="Contact Hero"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Get in <span className="text-green-400">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Have questions about our programs? We're here to help you start your journey.
                    </motion.p>
                </div>
            </section>

            <section className="py-20 relative -mt-20 z-30">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[100px] -z-10" />

                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <MessageSquare className="w-8 h-8 text-green-400" />
                                Send us a Message
                            </h2>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-green-400 transition-colors" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-green-400 transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-green-400 transition-colors" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Subject</label>
                                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-green-400 transition-colors text-foreground">
                                        <option value="" className="bg-background">Select a topic</option>
                                        <option value="ielts" className="bg-background">IELTS Preparation</option>
                                        <option value="othm" className="bg-background">OTHM Qualifications</option>
                                        <option value="university" className="bg-background">University Admissions</option>
                                        <option value="other" className="bg-background">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-green-400 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/25 flex items-center justify-center gap-2"
                                >
                                    Send Message <Send className="w-4 h-4" />
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info & Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="space-y-8"
                        >
                            {/* Info Cards */}
                            <div className="grid gap-6">
                                {[
                                    { icon: MapPin, title: 'Visit Us', desc: 'Green Way International, 24.984655, 89.8339601' }, // Placeholder address from coordinates
                                    { icon: Phone, title: 'Call Us', desc: '+880 1234 567890' }, // Placeholder phone
                                    { icon: Mail, title: 'Email Us', desc: 'info@greenwayacademy.com' }, // Placeholder email
                                    { icon: Clock, title: 'Opening Hours', desc: 'Sat - Thu: 9:00 AM - 6:00 PM' }
                                ].map((item, _i) => (
                                    <motion.div
                                        key={item.title}
                                        whileHover={{ y: -5 }}
                                        className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4"
                                    >
                                        <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="glass p-6 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                                <div className="flex gap-4">
                                    {[Facebook, Linkedin, Instagram].map((Icon, _i) => (
                                        <motion.a
                                            key={_i}
                                            href="#"
                                            whileHover={{ scale: 1.1, color: '#4ade80' }}
                                            className="p-3 bg-white/5 rounded-full text-foreground transition-colors hover:bg-white/10"
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Map */}
                            <div className="glass p-2 rounded-2xl border border-white/5 h-80 relative overflow-hidden group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14545.698380844781!2d89.82520543955078!3d24.985655000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d5b96685d9%3A0x469e3b363debbce0!2sGreen%20Way%20International!5e0!3m2!1sen!2sbd!4v1714856400000!5m2!1sen!2sbd"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
