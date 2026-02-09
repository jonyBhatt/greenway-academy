import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Yana Mahmood',
      programme: 'From O Levels to University of Birmingham',
      image: '/student-1.jpg',
      quote:
        "I recommend all students who have just completed O-Levels to go to Greenway. The teachers have been very helpful & attentive to all their students. They guided me every step of the way.",
      rating: 5,
      university: 'University of Birmingham',
    },
    {
      id: 2,
      name: 'Aritra Bhattacharjee',
      programme: 'Business Administration',
      image: '/student-2.jpg',
      quote:
        "I think it is very credible, when I saw all the university placements on social media, especially because they have affiliation with all the high-ranked universities worldwide.",
      rating: 5,
      university: 'University of Manchester',
    },
    {
      id: 3,
      name: 'Erica Mamruzzaman',
      programme: 'Medical Science',
      image: '/student-3.jpg',
      quote:
        "Studying at Greenway has given me a lot of new things to learn, and I have built confidence & developed my study skills. The environment here is so supportive and encouraging.",
      rating: 5,
      university: 'Keele University',
    },
    {
      id: 4,
      name: 'Shahadath Hossain',
      programme: 'From HSC to Keele University',
      image: '/student-4.jpg',
      quote:
        "Greenway has helped me to fill my study gap which has been beneficial for me to get admission at Keele University in the UK. The OTHM programme was exactly what I needed.",
      rating: 5,
      university: 'Keele University',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Student Reviews
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            What Our <span className="gradient-text">Students</span> Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Hear from our students about their experience at Greenway Academy
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-3xl p-8 lg:p-12 border border-white/5"
              >
                <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-center">
                  {/* Image */}
                  <div className="relative">
                    <div className="aspect-square max-w-[280px] mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                      <Quote className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 italic">
                      &quot;{testimonials[currentIndex].quote}&quot;
                    </p>

                    {/* Author Info */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-green-400 font-medium">
                        {testimonials[currentIndex].programme}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Now at {testimonials[currentIndex].university}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev Button */}
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 w-8'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* All Testimonials Grid - Mobile/Tablet */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`glass rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? 'border-green-500/50 bg-white/10'
                  : 'border-white/5 hover:border-white/20'
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="overflow-hidden">
                  <h5 className="text-foreground font-semibold text-sm truncate">
                    {testimonial.name}
                  </h5>
                  <p className="text-muted-foreground text-xs truncate">
                    {testimonial.university}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
