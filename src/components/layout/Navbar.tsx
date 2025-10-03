'use client';

import { IconMenu3 } from '@tabler/icons-react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-1 lg:px-16">
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg py-2'
              : ' py-1'
          }`}
        >
          <div className="flex items-center justify-between p-4 lg:px-6">
            <div
              className={`font-bold text-lg lg:text-xl transition-colors text-outline-black`}
            >
              <Link href="/">HON. ADE ADEOGUN</Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`hover:opacity-80 transition-opacity text-outline-black ${isActive('/') ? 'text-white' : 'text-outline-black'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className={`hover:opacity-80 transition-opacity text-outline-black ${isActive('/gallery') ? 'text-white' : 'text-outline-black'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/articles"
                className={`hover:opacity-80 transition-opacity text-outline-black ${isActive('/articles') ? 'text-white' : 'text-outline-black'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
              <Link
                href="/achievements"
                className={`hover:opacity-80 transition-opacity text-outline-black ${isActive('/achievements') ? 'text-white' : 'text-outline-black'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Achievements
              </Link>
              <Link
                href="/constituency-service"
                className={`hover:opacity-80 transition-opacity text-outline-black ${isActive('/constituency-service') ? 'text-white' : 'text-outline-black'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Constituency Service
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-opacity text-outline-black`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <IconMenu3 size={24} className="bg-black/20 p-[0.5px] rounded text-outline-black" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Menu Content */}
            <div className="relative h-fit flex">
              <motion.div 
                className="bg-[#021D14] rounded-b-3xl shadow-sm w-full flex flex-col overflow-hidden"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.4 
                }}
              >
                <div className="flex items-center justify-between p-5">
                  <div className="font-bold text-lg text-white">
                    HON. ADE ADEOGUN
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div aria-hidden="true" className="border-t border-white/10" />

                <motion.div 
                  className="flex flex-col p-6 space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <Link
                      href="/"
                      className={`text-lg text-white hover:text-white/80 transition-colors ${isActive('/') ? 'text-white font-semibold' : 'text-auto-contrast'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Link
                      href="/gallery"
                      className={`text-lg text-white hover:text-white/80 transition-colors ${isActive('/gallery') ? 'text-white font-semibold' : 'text-auto-contrast'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Gallery
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <Link
                      href="/articles"
                      className={`text-lg text-white hover:text-white/80 transition-colors ${isActive('/articles') ? 'text-white font-semibold' : 'text-auto-contrast'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Articles
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <Link
                      href="/achievements"
                      className={`text-lg text-white hover:text-white/80 transition-colors ${isActive('/achievements') ? 'text-white font-semibold' : 'text-auto-contrast'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Achievements
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                  >
                    <Link
                      href="/constituency-service"
                      className={`text-lg text-white hover:text-white/80 transition-colors ${isActive('/constituency-service') ? 'text-white font-semibold' : 'text-auto-contrast'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Constituency Service
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
