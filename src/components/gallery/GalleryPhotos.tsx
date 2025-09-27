'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import { useMemo, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { photos } from '@/data/photos';



export function GalleryPhotos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [showAltText, setShowAltText] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(photos.length / itemsPerPage));
  const pageItems = useMemo(() => {
    const start = page * itemsPerPage;
    return photos.slice(start, start + itemsPerPage);
  }, [page]);

  const currentPhoto = selectedPhoto !== null ? photos[selectedPhoto] : null;
  const currentIndex = selectedPhoto !== null ? selectedPhoto + 1 : 0;

  const goToPrevious = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(
        selectedPhoto > 0 ? selectedPhoto - 1 : photos.length - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(
        selectedPhoto < photos.length - 1 ? selectedPhoto + 1 : 0
      );
    }
  };

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
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide pointer-events-auto snap-x snap-mandatory overscroll-x-contain touch-pan-x"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="flex-shrink-0 w-[283px] h-[350px] snap-start"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedPhoto(index)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-black px-4 py-2 rounded-lg font-medium">
                      View photo
                    </span>
                  </div>
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
            {pageItems.map((photo, index) => {
              const globalIndex = page * itemsPerPage + index;
              return (
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
                    onClick={() => setSelectedPhoto(globalIndex)}
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
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white text-black px-3 py-1 rounded-full font-medium text-sm">
                          View photo
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      <Dialog
        open={selectedPhoto !== null}
        onOpenChange={() => setSelectedPhoto(null)}
      >
        <DialogContent className="sm:max-w-full p-0 bg-transparent border-0">
          <DialogHeader className="absolute top-4 left-4 z-10">
            <DialogTitle className="text-black text-sm bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
              {currentIndex} of {photos.length}
            </DialogTitle>
          </DialogHeader>

          {/* Close button */}
          {/* <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-black transition-colors"
          >
            <X className="w-4 h-4" />
          </button> */}

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-10 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-10 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-black transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Photo */}
          {currentPhoto && (
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                className="object-contain"
              />
            </div>
          )}

          {/* Alt text */}
          <>
            <div className="absolute bottom-4 left-15 right-15 z-10">
              <Button
                className="bg-white text-black rounded-full w-12 h-8 hover:bg-white/90"
                onClick={() => setShowAltText(true)}
              >
                Alt
              </Button>

              {showAltText && (
                <p className="text-white text-lg font-bold  ">
                  {currentPhoto?.alt}
                </p>
              )}
            </div>
          </>
        </DialogContent>
      </Dialog>
    </section>
  );
}
