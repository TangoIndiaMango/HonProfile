'use client';
import { motion } from 'framer-motion';
import TextAnimation from '../layout/TextAnimation';

export function MissionSection() {
  return (
    <section className="bg-[#f8f8f8] py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[#021d14] text-sm font-medium tracking-[0.15px] uppercase">
              his mission
            </span>
          </motion.div>
          
          <TextAnimation
            text="Hon. Ade Adeogun believes leadership is service. He prioritises accountable governance, targeted interventions and programs that deliver measurable results at the grassroots. Projects are planned with clear objectives, local partners and follow-up to ensure sustained impact."
            className="text-2xl lg:text-3xl font-semibold text-black leading-[40px]"
            wordClassName="inline-block mr-2 opacity-70"
            staggerDelay={0.1}
            duration={0.6}
            once={true}
          />
        </div>
      </div>
    </section>
  );
}
