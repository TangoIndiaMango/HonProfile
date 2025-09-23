'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              className={`font-bold text-lg lg:text-xl transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <Link href="/">HON. ADE ADEOGUN</Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`hover:text-gray-300 transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className={`hover:text-gray-300 transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/articles"
                className={`hover:text-gray-300 transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="relative h-full bg-white">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="font-bold text-lg text-gray-900">
                HON. ADE ADEOGUN
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-900"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col p-6 space-y-6">
              <Link
                href="/"
                className="text-2xl font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className="text-2xl font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/articles"
                className="text-2xl font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
