'use client';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface AchievementCardProps {
  title: string;
  description: string;
  number: string;
  unit: string;
  icon: LucideIcon;
  image?: string;
  video?: string;
  mediaType?: 'image' | 'video';
  delay?: number;
}

export function AchievementCard({ 
  title, 
  description, 
  number, 
  unit, 
  icon: Icon, 
  image,
  video,
  mediaType,
  delay = 0 
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      {/* Background Image/Video */}
      {mediaType === 'image' && image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}
      
      {mediaType === 'video' && video && (
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-6 text-white">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
        >
          <Icon className="h-6 w-6" />
        </motion.div>

        {/* Number */}
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
          className="mb-2"
        >
          <span className="text-3xl font-bold">{number}</span>
          <span className="text-lg opacity-80 ml-2">{unit}</span>
        </motion.div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        
        {/* Description */}
        <p className="text-sm opacity-90 leading-relaxed">{description}</p>
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
