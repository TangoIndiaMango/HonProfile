'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TextAnimation from './TextAnimation';

export function Quote() {
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(quoteRef, { once: true, margin: '-100px' });
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
          <div className="relative mb-8">
            <TextAnimation
              text="My political aspiration is founded on the need to serve the state and restore prosperity to its communities and people. I am not a zonal champion, but one of the leaders of a state-wide political platform."
              className="text-xl lg:text-2xl xl:text-3xl font-medium text-white leading-relaxed"
              wordClassName="inline-block mr-2 opacity-70"
              staggerDelay={0.1}
              duration={0.6}
              once={true}
            />
          </div>

          {/* Attribution */}
          <motion.div
            className="text-lg lg:text-xl text-white/80 font-medium"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            — HON. ADE ADEOGUN
          </motion.div>
        </div>
      </div>
    </section>
  );
}
