'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Shield,
  Users,
  FileText,
  Building2,
  Scale,
  AlertCircle,
  Briefcase,
  TrendingUp,
  Gavel,
} from 'lucide-react';
import type { Variants } from 'framer-motion';

const leadershipRoles = [
  {
    id: 1,
    title: 'Chairman, AdHoc Committee on Recovered Assets',
    description:
      'Led investigation into recovered assets from 2002-2020, uncovering details about Abacha loots, Ibori loots, Allison Madueke loots and other recovered assets of nationwide interest.',
    icon: Award,
    highlight: true,
  },
  {
    id: 2,
    title: 'Deputy Chairman, Committee on National Security & Intelligence',
    description:
      'Oversaw national security matters and intelligence operations, ensuring effective coordination and strategic planning.',
    icon: Shield,
    highlight: true,
  },
  {
    id: 3,
    title: 'Head, National Assembly Conference Committee',
    description:
      'Headed the harmonization of the Bill on the Establishment of the National Centre for the Control of the Proliferation of Small Arms & Light Weapons.',
    icon: Gavel,
    highlight: true,
  },
];

const committeeMemberships = [
  {
    id: 1,
    title: 'Petroleum Downstream',
    icon: Building2,
  },
  {
    id: 2,
    title: 'Ecological Fund',
    icon: AlertCircle,
  },
  {
    id: 3,
    title: 'Poverty Alleviation',
    icon: Users,
  },
  {
    id: 4,
    title: 'National Planning & Economic Development',
    icon: TrendingUp,
  },
  {
    id: 5,
    title: 'Emergency Management & Disaster Preparedness',
    icon: AlertCircle,
  },
  {
    id: 6,
    title: 'Police Affairs',
    icon: Shield,
  },
  {
    id: 7,
    title: 'Constitution Review',
    icon: Scale,
  },
];

export function NationalVoice() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const fadeUpCard: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const popIcon: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.05,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            A TRUE NATIONAL VOICE
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Serving with distinction in the 9th National Assembly (2019-2023),
            Hon. Adejoro Adeogun held key leadership positions and committee
            memberships that shaped national policy and governance.
          </p>
        </motion.div>

        {/* Leadership Roles */}
        <motion.div
          className="mb-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Leadership Positions
          </h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={role.id}
                variants={fadeUpCard}
                className="group relative h-full"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg transition-all duration-300 h-full group-hover:shadow-xl group-hover:-translate-y-1 border-2 border-blue-100">
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <motion.div
                      className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mb-6"
                      variants={popIcon}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '100px' }}
                    >
                      <role.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                        {role.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {role.description}
                      </p>
                    </div>

                    {/* Badge */}
                    <div className="mt-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        2019-2023
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Committee Memberships */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Committee Memberships
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMemberships.map((committee, index) => (
              <motion.div
                key={committee.id}
                variants={fadeUpCard}
                className="group relative"
              >
                <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 h-full group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <committee.icon className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900">
                        {committee.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">Member</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Legislative Excellence & National Impact
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Hon. Ade Adeogun&apos;s leadership in the National Assembly
              demonstrates his commitment to transparency, accountability, and
              effective governance at the highest levels.
            </p>
            <button
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-200"
              onClick={() => (window.location.href = '/achievements')}
            >
              View Full Legislative Record
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

