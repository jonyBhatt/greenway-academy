import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyIELTS from './sections/WhyIELTS';
import WhyOTHM from './sections/WhyOTHM';
import Journey from './sections/Journey';
import WhyChoose from './sections/WhyChoose';
import Statistics from './sections/Statistics';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import EnrollPage from './pages/EnrollPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

// Main Home Page Component
const HomePage = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services/Programmes Section */}
        <Services />

        {/* Why IELTS Section */}
        <WhyIELTS />

        {/* Why OTHM Section */}
        <WhyOTHM />

        {/* Journey Section */}
        <Journey />

        {/* Why Choose Section */}
        <WhyChoose />

        {/* Statistics Section */}
        <Statistics />

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

// Main App Component
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical images
    const images = [
      '/about-image.jpg',
      '/graduation-image.jpg',
      '/student-1.jpg',
      '/student-2.jpg',
      '/student-3.jpg',
      '/student-4.jpg',
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          {/* Loading Screen */}
          {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

          {/* Main Content */}
          {!isLoading && (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/enroll" element={<EnrollPage />} />
              </Routes>
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
