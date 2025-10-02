'use client';
import { motion } from 'framer-motion';

export function AchievementsHero() {
  const videoSrc =
    'https://res.cloudinary.com/aliyu-timi/video/upload/v1759231894/compressed_adeogun2_iz71lu.mp4';
  const poster = '/images/3ad0861d1f1d7ca325a1a9302b11c751e50b773c.png';

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[60dvh] lg:h-[80dvh]">
        {/* Autoplaying background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover bg-gradient-to-t from-black/60 via-black/30 to-black/20"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90" />

        {/* Center content */}
        <div className="absolute px-4 bottom-10">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl lg:text-5xl font-bold mb-4 uppercase"
          >
            Delivering Results That Matter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-white/90 text-base lg:text-xl leading-4 tracking-[0.16px]"
          >
            Hon. Ade Adeogun&apos;s leadership is measured not by promises, but
            by visible progress in Akoko South East/South West.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
