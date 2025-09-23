'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { galleryVideos } from '@/data/videos';

const videos = galleryVideos.map(v => ({
  id: v.id,
  src: v.thumbnail,
  alt: v.alt,
  title: v.title,
  height: v.height ?? 300,
  videoUrl: v.embedUrl,
}));

export function GalleryVideos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(videos.length / itemsPerPage));
  const pageItems = useMemo(() => {
    const start = page * itemsPerPage;
    return videos.slice(start, start + itemsPerPage);
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

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-black">Videos</h2>
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
            <span className="text-sm text-gray-700">Oldest</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="block lg:hidden">
          <motion.div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
            dragElastic={0.1}
            style={{ cursor: 'grab' }}
            whileDrag={{ cursor: 'grabbing' }}
          >
            {videos.map((video) => (
              <div key={video.id} className="flex-shrink-0 w-[283px] h-[350px]">
                <div 
                  className="relative w-full h-full rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => openVideo(video.videoUrl)}
                >
                  <Image
                    src={video.src}
                    alt={video.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[37.5px] h-[37.5px] bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                      <Play className="w-5 h-5 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous videos"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next videos"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Desktop: True Masonry Layout using CSS Columns with navigation */}
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
            <span className="text-sm text-gray-600">{page + 1} / {totalPages}</span>
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
            style={{ columnFill: 'balance' }}
          >
            {pageItems.map((video, index) => (
              <motion.div
                key={video.id}
                className="break-inside-avoid mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  className="relative w-full rounded overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{ height: `${video.height}px` }}
                  onClick={() => openVideo(video.videoUrl)}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={video.src}
                      alt={video.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl mx-4">
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close video"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={selectedVideo}
                  title="Video Player"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
