'use client';
import { achievementCategories, achievements } from '@/data/achievements';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  Briefcase,
  CheckCircle,
  Clock,
  GraduationCap,
  Heart,
  Ticket,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';

const categoryIcons = {
  'Infrastructure': Ticket,
  'Education': GraduationCap,
  'Employment': Briefcase,
  'Electricity': Zap,
  'Welfare': Heart,
  'Human Development': BookOpen
};

const categoryGradients = {
  'Infrastructure': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'Education': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'Employment': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'Electricity': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'Welfare': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'Human Development': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
};

// Unsplash image function
const getUnsplashImage = (category: string, id: number) => {
  const images = {
    'Infrastructure': [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop'
    ],
    'Education': [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
    ],
    'Employment': [
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop'
    ],
    'Electricity': [
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop'
    ],
    'Welfare': [
      'https://images.unsplash.com/photo-1559027615-cd4628902d85?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559027615-cd4628902d85?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559027615-cd4628902d85?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559027615-cd4628902d85?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559027615-cd4628902d85?w=800&h=600&fit=crop'
    ],
    'Human Development': [
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop'
    ]
  };
  
  const categoryImages = images[category as keyof typeof images] || images.Infrastructure;
  return categoryImages[id % categoryImages.length];
};

export function AchievementsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Complete Achievement Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            A comprehensive overview of all projects and initiatives completed during the 2019-2022 term.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {achievementCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Achievements Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredAchievements.map((achievement, index) => {
              const Icon = categoryIcons[achievement.category as keyof typeof categoryIcons] || Ticket;
              const gradient = categoryGradients[achievement.category as keyof typeof categoryGradients] || categoryGradients.Infrastructure;
              
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {/* Image/Video Section */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={getUnsplashImage(achievement.category, achievement.id)}
                      alt={achievement.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      {achievement.status === 'completed' ? (
                        <div className="flex items-center gap-1 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <CheckCircle className="h-4 w-4 text-white" />
                          <span className="text-xs font-medium text-white">Completed</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 bg-orange-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <Clock className="h-4 w-4 text-white" />
                          <span className="text-xs font-medium text-white">Ongoing</span>
                        </div>
                      )}
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <Icon className="h-4 w-4 text-white" />
                        <span className="text-xs font-medium text-white">
                          {achievement.number} {achievement.unit}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {achievement.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {achievement.description}
                    </p>

                    {/* Year */}
                    <div className="text-xs text-gray-500">
                      {achievement.year}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
