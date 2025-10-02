'use client';
import { achievementStats } from '@/data/achievements';
import { motion } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  Heart,
  TrendingUp,
  Users,
  Wrench
} from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    number: achievementStats.totalProjects,
    label: 'Total Projects',
    color: 'from-blue-500 to-blue-600',
    description: 'Comprehensive development initiatives'
  },
  {
    icon: Wrench,
    number: achievementStats.infrastructureProjects,
    label: 'Infrastructure Projects',
    color: 'from-purple-500 to-purple-600',
    description: 'Roads, bridges, and community facilities'
  },
  {
    icon: GraduationCap,
    number: achievementStats.scholarshipRecipients,
    label: 'Scholarship Recipients',
    color: 'from-green-500 to-green-600',
    description: 'Educational support and opportunities'
  },
  {
    icon: BookOpen,
    number: achievementStats.textbooksDistributed,
    label: 'Textbooks Distributed',
    color: 'from-orange-500 to-orange-600',
    description: 'Educational resources for students'
  },
  {
    icon: Users,
    number: achievementStats.monthlyAides,
    label: 'Monthly Aides',
    color: 'from-pink-500 to-pink-600',
    description: 'Direct employment opportunities'
  },
  {
    icon: Heart,
    number: achievementStats.farmersSupported,
    label: 'Farmers Supported',
    color: 'from-teal-500 to-teal-600',
    description: 'Agricultural development programs'
  }
];

export function StatisticsDashboard() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Impact by Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Three years of dedicated service translated into measurable impact across infrastructure, education, employment, and community development.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
                >
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </motion.div>

                {/* Number */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  className="mb-4"
                >
                  <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                    {stat.number.toLocaleString()}
                  </span>
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
