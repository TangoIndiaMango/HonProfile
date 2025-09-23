"use client";
import Image from 'next/image';
import { Check } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect } from 'react';

export function Vision() {
  const visionPoints = [
    'Promoting Accountable Governance',
    'Driving Inclusive Development',
    'Empowering the Next Generation',
  ];

  const controls = useAnimation();

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  useEffect(() => {
    // start animations when component mounts (viewport-based below on motion elements)
    controls.start('visible');
  }, [controls]);

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#021d14' }}>
      <div className="container mx-auto px-4 lg:px-16">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 h-full"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Content */}
          <motion.div className="text-white space-y-8 h-full" variants={fadeUp}>
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                His Vision
              </h2>

              <p className="text-lg lg:text-xl leading-relaxed mb-8">
                His model of public service is rooted in accountability,
                community empowerment, and visible results. Drawing on his
                security background and legislative experience, he champions a
                governance approach that prioritizes people over politics.
              </p>
            </motion.div>

            {/* Vision Points */}
            <motion.div className="space-y-4" variants={fadeUp}>
              {visionPoints.map((point, index) => (
                <motion.div key={index} className="flex items-start space-x-3" variants={fadeUp}>
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white font-medium">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile Image (fixed height) */}
          <div className="md:hidden">
            <div className="relative w-full max-w-md mx-auto lg:mx-0 h-[360px] overflow-hidden">
              <Image
                src="/images/863ce506c601583adc12e39badd3218c8f6f4975.png"
                alt="Hon. Ade Adeogun - Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Portrait Image */}
          <motion.div className="hidden md:block order-last lg:order-last h-full" variants={fadeUp}>
            <div className="relative w-full max-w-md mx-auto lg:mx-0 h-full">
              <div className="relative overflow-hidden h-full">
                {/* Floating subtle animation */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image
                    src="/images/863ce506c601583adc12e39badd3218c8f6f4975.png"
                    alt="Hon. Ade Adeogun - Vision"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                {/* soft gradient edges */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
