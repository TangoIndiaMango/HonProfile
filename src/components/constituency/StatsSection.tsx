'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, GraduationCap, Award, Building, FileText } from 'lucide-react';

const statsCards = [
  {
    title: 'Leadership Team',
    value: '68',
    description: 'Strategic appointments across constituency',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Job Opportunities',
    value: '37',
    description: 'Youths employed in government agencies',
    icon: Briefcase,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Development Programs',
    value: '10',
    description: 'Skills acquisition and empowerment initiatives',
    icon: GraduationCap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Infrastructure Projects',
    value: '16',
    description: 'Roads, schools, health centers, and utilities',
    icon: Building,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    title: 'Legislative Activities',
    value: '16',
    description: 'Bills, motions, and committee work',
    icon: FileText,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    title: 'Total Beneficiaries',
    value: '500+',
    description: 'People directly impacted by programs',
    icon: Award,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
];

export function StatsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-8 relative z-10 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white p-6 rounded-none shadow-lg"
          >
            <div className={`${stat.bgColor} p-4 rounded-none mb-4`}>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-sm font-semibold text-gray-700 mb-1">{stat.title}</div>
            <div className="text-xs text-gray-500">{stat.description}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
