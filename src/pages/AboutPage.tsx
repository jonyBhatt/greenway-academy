import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Users,
    Target,
    Sparkles,
    Zap,
    CheckCircle,
    ArrowRight
} from 'lucide-react';
import Footer from '../sections/Footer';

const AboutPage = () => {
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
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-10" />
                    <img
                        src="/about-hero-bg.png"
                        alt="About Hero"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block py-1 px-3 border border-white/20 rounded-full bg-black/20 backdrop-blur-md mb-6"
                    >
                        <span className="text-sm font-medium tracking-widest uppercase">Since 2012</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-bold tracking-tight mb-8"
                    >
                        Empowering <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Global Futures</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                    >
                        We bridge the gap between ambition and achievement, connecting students to world-class education opportunities across the globe.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-50" />
                            <motion.div
                                initial={{ opacity: 0, rotate: -5 }}
                                whileInView={{ opacity: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]"
                            >
                                <img src="/about-image.jpg" alt="Our Story" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <p className="text-white text-lg font-medium italic">
                                        "Education is not just about learning facts, but the training of the mind to think."
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Established with a vision to democratize access to international education, Greenway Academy started as a small IELTS coaching center. Today, we are a leading educational consultancy and OTHM delivery center, trusted by thousands of students.
                                </p>
                                <p className="text-lg text-muted-foreground">
                                    Our philosophy is simple: every student deserves a personalized roadmap to success. Whether it's mastering a new language or navigating complex university admissions, we are with you every step of the way.
                                </p>
                            </motion.div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Target, title: 'Mission', desc: 'To provide accessible, high-quality guidance for international education.' },
                                    { icon: Sparkles, title: 'Vision', desc: 'To be the most trusted global education partner for students worldwide.' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.2 }}
                                        className="p-6 glass rounded-xl border border-white/5 hover:bg-white/5 transition-colors"
                                    >
                                        <item.icon className="w-8 h-8 text-green-400 mb-4" />
                                        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-black/20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-muted-foreground">The principles that guide every interaction and decision.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: CheckCircle, title: 'Integrity', desc: 'We provide honest, transparent advice tailored to your best interests.' },
                            { icon: Zap, title: 'Excellence', desc: 'We strive for the highest standards in our teaching and services.' },
                            { icon: Users, title: 'Empathy', desc: 'We understand the challenges of studying abroad and support you holistically.' }
                        ].map((val, i) => (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="text-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-green-500/30 transition-all group"
                            >
                                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-green-500/10">
                                    <val.icon className="w-8 h-8 text-foreground group-hover:text-green-400 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{val.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 relative text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Join the Greenway Family</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        Your future awaits. Let's build it together.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg shadow-xl shadow-white/10 hover:bg-gray-100 transition-all flex items-center gap-2 mx-auto"
                    >
                        Contact Us Today <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
