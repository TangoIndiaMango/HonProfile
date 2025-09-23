import { Button } from '@/components/ui/button';
import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Separator } from '../ui/separator';

export function Footer() {
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
            <Button
              size="lg"
              className="bg-white rounded-full text-black hover:bg-gray-100 font-semibold px-8 py-4 text-md"
            >
              Follow Adeogun
            </Button>
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

                {/* Social Links */}
                <div className="flex items-center space-x-6">
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
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
