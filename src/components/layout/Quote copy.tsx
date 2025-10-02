'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import TextAnimation from './TextAnimation';
import { quotes } from '@/data/quotes';

export function Quote() {
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(quoteRef, { once: true, margin: '-100px' });
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      // Start rotating quotes after initial animation
      const interval = setInterval(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      }, 8000); // Change quote every 8 seconds

      return () => clearInterval(interval);
    }
  }, [inView]);
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#021d14' }}>
      <div className="container mx-auto px-4 lg:px-16">
        <div className="max-w-4xl mx-auto text-center" ref={quoteRef}>
          {/* Quote Icon */}
          <div className="mb-8">
            <svg
              className="w-16 h-16 text-white mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
          </div>

          {/* Quote Text with progressive highlight */}
          <div className="relative mb-8 min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="w-full"
              >
                {isVisible && (
                  <TextAnimation
                    text={quotes[currentQuoteIndex].text}
                    className="text-xl lg:text-2xl xl:text-3xl font-medium text-white leading-relaxed"
                    wordClassName="inline-block mr-2 opacity-70"
                    staggerDelay={0.05}
                    duration={0.4}
                    once={false}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Attribution */}
          <motion.div
            className="text-lg lg:text-xl text-white/80 font-medium"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            — {quotes[currentQuoteIndex].author}
          </motion.div>

          {/* Quote Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuoteIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuoteIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`View quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
