'use client';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        <div className="absolute inset-0 bg-repeat bg-size-[1024px_1024px] bg-top-left opacity-10" 
             style={{ backgroundImage: `url('/images/hero-bg.jpg')` }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white uppercase tracking-[2.1px] mb-4">
              be part of
            </h2>
            <h2 className="text-5xl lg:text-7xl font-bold text-white uppercase tracking-[2.8px] mb-8">
              the change
            </h2>
            <p className="text-[#dbdbdb] text-lg max-w-2xl mx-auto mb-12">
              Your voice matters. Join a growing network of people who want to see real change in Ondo State and across Nigeria.
            </p>
            
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Follow Adeogun
            </button>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="border-t border-white/20 pt-8"
          >
            <div className="flex items-center justify-between">
              <div className="text-white font-bold text-lg uppercase tracking-[0.16px]">
                hon. ade adeogun
              </div>
              
              {/* Social Media Links */}
              <div className="flex items-center gap-9">
                <a 
                  href="#" 
                  className="text-white hover:text-blue-400 transition-colors duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-blue-600 transition-colors duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-blue-400 transition-colors duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-pink-500 transition-colors duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
