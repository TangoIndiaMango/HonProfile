'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CallToActionProps {
  title: string;
  description: string;
  buttons: Array<{
    text: string;
    href: string;
    variant?: 'default' | 'outline';
    className?: string;
  }>;
}

export function CallToAction({ title, description, buttons }: CallToActionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black p-8 text-white text-center rounded-none"
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {buttons.map((button, index) => (
          <Link key={index} href={button.href}>
            <Button
              variant={button.variant || 'default'}
              className={button.className}
            >
              {button.text}
            </Button>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
