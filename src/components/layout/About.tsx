'use client';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef, useEffect } from 'react';

export function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="py-16 lg:py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-16">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 h-full"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Portrait Image */}
          <motion.div className="hidden md:block order-2 lg:order-1 h-full" variants={fadeUp}>
            <div className="relative w-full max-w-md mx-auto lg:mx-0 h-full">
              <div className="h-full relative overflow-hidden">
                <Image
                  src="/recieved/adeogun-look.png"
                  alt="Hon. Ade Adeogun"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div className="order-1 lg:order-2 space-y-6" variants={fadeUp}>
            <motion.div variants={fadeUp}>
              <h2 className="text-sm font-semibold text-[#021D14] uppercase tracking-wider mb-4">
                About Hon. Ade Adeogun
              </h2>

              <p className="text-lg lg:text-xl font-semibold text-black leading-relaxed mb-6">
                With a passion for accountable leadership and grassroots
                empowerment, Hon. Ade Adeogun transforms political promises into
                real, measurable progress.
              </p>
            </motion.div>

            <motion.div className="relative md:hidden w-full max-w-md mx-auto lg:mx-0" variants={fadeUp}>
              <div className="h-[400px]  relative overflow-hidden">
                <Image
                  src="/recieved/adeogun-look.png"
                  alt="Hon. Ade Adeogun"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div className="prose prose-lg max-w-none" variants={fadeUp}>
              <p className="text-gray-700 leading-relaxed">
                From Akoko South East/South West to the House of
                Representatives, he is a public servant and strategist with a
                record of practical governance and inclusive development. With a
                background in intelligence and security plus degrees from the
                University of Ibadan and Manchester Business School, he is known
                for purposeful action rather than political showmanship. Adeogun
                has championed education, youth employment, infrastructure and
                community support, proving that leadership can deliver visible
                improvements in people&apos;s lives.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
