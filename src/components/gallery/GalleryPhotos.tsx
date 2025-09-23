'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';

const photos = [
  {
    id: 1,
    src: '/images/58a8fa5256d17044323abe66ce182d913a80f9e0.png',
    alt: 'Community meeting',
    height: 280,
  },
  {
    id: 2,
    src: '/images/27223f5f42dd79ac8eaa337d3740b52f5744a5e9.png',
    alt: 'Public address',
    height: 320,
  },
  {
    id: 3,
    src: '/images/bc90180fdc8c990e73bb7d8dc6b59d8d20abebf5.png',
    alt: 'Community event',
    height: 240, 
  },
  {
    id: 4,
    src: '/images/6b048a09dd0ce7bf4f71d0836c6ded50e01ad929.png',
    alt: 'Official meeting',
    height: 360,
  },
  {
    id: 5,
    src: '/images/a589f389fa45546e2bf18d35485473b399ff32dc.png',
    alt: 'Policy discussion',
    height: 290,
  },
  {
    id: 6,
    src: '/images/731247c8c4e4a0befb1336c2bb7257f5f62bd28e.png',
    alt: 'Youth engagement',
    height: 310,
  },
];

export function GalleryPhotos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(photos.length / itemsPerPage));
  const pageItems = useMemo(() => {
    const start = page * itemsPerPage;
    return photos.slice(start, start + itemsPerPage);
  }, [page]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-black">Photos</h2>
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
            <span className="text-sm text-gray-700">Oldest</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Mobile: Horizontal Scroll */}
            <div className="block lg:hidden relative z-10">
          <motion.div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide pointer-events-auto"
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
            dragElastic={0.1}
            style={{ cursor: 'grab' }}
            whileDrag={{ cursor: 'grabbing' }}
          >
            {photos.map(photo => (
              <motion.div
                key={photo.id}
                className="flex-shrink-0 w-[283px] h-[350px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous photos"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next photos"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Desktop: True Masonry Layout using CSS Columns */}
        <div className="hidden lg:block">
          {/* Top-right navigation (md+) */}
          <div className="hidden md:flex items-center justify-end mb-4 gap-3">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <span className="text-sm text-gray-600">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <div
            className="columns-3 gap-2 space-y-2"
            style={{
              columnFill: 'balance',
            }}
          >
            {pageItems.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="break-inside-avoid mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  className="relative w-full rounded overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{ height: `${photo.height}px` }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
