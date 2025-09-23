"use client";
import {
  GraduationCap,
  DollarSign,
  Wrench,
  Users,
  Tractor,
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const impactData = [
  {
    icon: GraduationCap,
    title: 'Scholarships for 400 Students',
    description:
      'Supported indigent youths at Upland College of Education, Ipesi Akoko with full and partial scholarships to boost access to quality education.',
  },
  {
    icon: DollarSign,
    title: 'COVID-19 Loans for Farmers & Small Businesses',
    description:
      'Distributed ₦100,000–₦500,000 loans to about 200 farmers and small-scale entrepreneurs to keep local livelihoods alive during the pandemic.',
  },
  {
    icon: Wrench,
    title: 'Startup Support for Creatives & Artisans',
    description:
      'Empowered fashion designers, barbers, DJs, photographers, block makers and more with equipment and seed funding to grow their trades.',
  },
  {
    icon: Users,
    title: 'Local Employment & Aides Programme',
    description:
      "Directly engaged and paid 85 aides from his office emoluments, circulating income and stimulating the constituency's micro-economy.",
  },
  {
    icon: Tractor,
    title: 'Motorcycles & Buses for Communities',
    description:
      'Donated 26 motorcycles (one per ward) and 7 buses to co-operative groups, improving mobility and income-generating opportunities.',
  },
];

export function Impact() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeUpCard: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const popIcon: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20, delay: 0.05 } },
  };
  return (
    <section className="py-16 lg:py-24 bg-[#F8F8F8] space-y-5">
      <div className="container mx-auto px-4 lg:px-16 space-y-5">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Delivering Real Impact</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">Hon. Ade Adeogun&apos;s record of action speaks louder than promises — tangible projects and empowered citizens.</p>
        </motion.div>

        {/* Impact Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* First Row - 2 cards on desktop, 1 on mobile */}
          <motion.div className="md:col-span-2 lg:col-span-2" variants={fadeUpCard}>
            <ImpactCard {...impactData[0]} popIcon={popIcon} />
          </motion.div>
          <motion.div className="md:col-span-2 lg:col-span-2" variants={fadeUpCard}>
            <ImpactCard {...impactData[1]} popIcon={popIcon} />
          </motion.div>
        </motion.div>

        {/* Second Row - 3 cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="md:col-span-2 lg:col-span-1" variants={fadeUpCard}>
            <ImpactCard {...impactData[2]} popIcon={popIcon} />
          </motion.div>
          <motion.div className="md:col-span-2 lg:col-span-1" variants={fadeUpCard}>
            <ImpactCard {...impactData[3]} popIcon={popIcon} />
          </motion.div>
          <motion.div className="md:col-span-2 lg:col-span-1" variants={fadeUpCard}>
            <ImpactCard {...impactData[4]} popIcon={popIcon} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ImpactCard({
  icon: Icon,
  title,
  description,
  popIcon,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  popIcon: Variants;
}) {
  return (
    <div className="group relative h-full">
      {/* gradient sweep accent */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#021D14] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm transition-all duration-300 h-full group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="flex flex-col h-full">
          {/* Icon */}
          <motion.div
            className="flex items-center justify-center w-12 h-12 bg-[#021D14] rounded-md mb-6"
            variants={popIcon}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
