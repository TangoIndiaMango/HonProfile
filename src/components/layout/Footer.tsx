'use client';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Separator } from '../ui/separator';
import FollowButtonAction from './FollowButtonAction';

export function Footer() {
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowSocialMenu(false);
      }
    }

    if (showSocialMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSocialMenu]);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://ca.linkedin.com/in/ade-adeogun-61234241',
      icon: Linkedin,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-400 hover:to-blue-500',
    },
    {
      name: 'Facebook',
      url: 'https://m.facebook.com/people/Hon-Adejoro-Adeogun/100039807197441/',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/p/DFh9rUNt3jq/',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-400 hover:to-purple-500',
    },
  ];

  return (
    <>
      {/* CTA Section */}
      <section className="relative overflow-hidden pt-16 lg:pt-24 pb-40">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-black/90 z-10" />
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/images/ce72f5e1a6520628a2958f47853c79183c363d75.png')",
            }}
          />
        </div>

        {/* CTA Content */}
        <div className="relative z-20 container mx-auto px-4 lg:px-16 text-center">
          <div className="mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 max-w-sm tracking-wide mx-auto">
              BE PART OF THE CHANGE
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Your voice matters. Join a growing network of people who want to
              see real change in Ondo State and across Nigeria.
            </p>

            {/* Add space for the semi-circle menu */}
            <div className="h-32 mb-8"></div>
            <div className="relative" ref={menuRef}>
              <Button
                size="lg"
                onClick={() => setShowSocialMenu(!showSocialMenu)}
                className="bg-white rounded-full text-black hover:bg-gray-100 font-semibold px-8 py-4 text-md transition-all duration-300 hover:scale-105"
              >
                Follow Adeogun
              </Button>

              {/* Rainbow Social Menu - Semi Circle */}
              <FollowButtonAction
                showSocialMenu={showSocialMenu}
                socialLinks={socialLinks}
              />
            </div>
          </div>
        </div>
        {/* Bottom Social Bar pinned to bottom */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          <Separator className="w-full bg-white/30" />
          <footer className="py-6 lg:py-8">
            <div className="container mx-auto px-4 lg:px-16">
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Brand */}
                <div className="mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-white">
                    HON. ADE ADEOGUN
                  </h3>
                 
                </div>

                <div>
                <p className="text-sm text-white/70 mt-2">
                    Website by{' '}
                    <a 
                      href="https://www.emicrafttech.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-white hover:text-white/80 transition-colors underline decoration-white/50 hover:decoration-white/80"
                    >
                      emicrafttech
                    </a>
                    {' '}© {new Date().getFullYear()}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-6">
                  <a
                    href="https://ca.linkedin.com/in/ade-adeogun-61234241"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://m.facebook.com/people/Hon-Adejoro-Adeogun/100039807197441/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/p/DFh9rUNt3jq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
