'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  {
    id: 1,
    image: '/images/3f3fcda1c36d5c1c04d4284517cbb11050aa2bff.png',
    title: 'HON. ADE ADEOGUN:',
    subtitle: 'ACCOUNTABLE LEADERSHIP DELIVERING REAL CHANGE.',
    tagline: 'Leader • Advocate • Visionary'
  },
  {
    id: 2,
    image: '/images/58a8fa5256d17044323abe66ce182d913a80f9e0.png',
    title: 'COMMUNITY CHAMPION:',
    subtitle: 'BUILDING BRIDGES, CREATING OPPORTUNITIES.',
    tagline: 'Community • Development • Progress'
  },
  {
    id: 3,
    image: '/images/27223f5f42dd79ac8eaa337d3740b52f5744a5e9.png',
    title: 'VOICE OF THE PEOPLE:',
    subtitle: 'REPRESENTING WITH INTEGRITY AND PURPOSE.',
    tagline: 'Representation • Integrity • Service'
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <section 
      className="relative min-h-dvh flex items-center justify-start overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Images with Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 z-10" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${currentHero.image}')`
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Hero Content with Animations */}
      <div className="absolute z-20 text-left text-white px-4 lg:px-16 max-w-5xl bottom-0 space-y-5">
        <motion.div
          key={`tagline-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm lg:text-base text-gray-300">
            {currentHero.tagline}
          </p>
        </motion.div>
        
        <motion.h1
          key={`title-${currentSlide}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight"
        >
          {currentHero.title}
        </motion.h1>
        
        <motion.p
          key={`subtitle-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg lg:text-2xl xl:text-3xl font-medium leading-relaxed"
        >
          {currentHero.subtitle}
        </motion.p>

        <div className="h-10"/>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  );
}
