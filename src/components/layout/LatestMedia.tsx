'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, X } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useState } from 'react';
import { galleryVideos } from '@/data/videos';
import { useRouter } from 'next/navigation';

const mediaItems = [
  {
    id: 1,
    type: 'image' as const,
    src: '/images/58a8fa5256d17044323abe66ce182d913a80f9e0.png',
    alt: 'Community meeting',
  },
  {
    id: 2,
    type: 'video' as const,
    src: galleryVideos[0]?.thumbnail ?? '/images/27223f5f42dd79ac8eaa337d3740b52f5744a5e9.png',
    alt: galleryVideos[0]?.title ?? 'Public address',
    videoUrl: galleryVideos[0]?.embedUrl ?? 'https://www.youtube-nocookie.com/embed/AFahIuzBi1w?si=AnRZHW37QWAjBC74',
  },
  {
    id: 3,
    type: 'image' as const,
    src: '/images/bc90180fdc8c990e73bb7d8dc6b59d8d20abebf5.png',
    alt: 'Community event',
  },
  {
    id: 4,
    type: 'video' as const,
    src: galleryVideos[1]?.thumbnail ?? '/images/6b048a09dd0ce7bf4f71d0836c6ded50e01ad929.png',
    alt: galleryVideos[1]?.title ?? 'Featured video',
    videoUrl: galleryVideos[1]?.embedUrl ?? 'https://www.youtube-nocookie.com/embed/pWotPmmjfEk?si=xcjsiXwC-UrOmxMb',
  },
];

export function LatestMedia() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const router = useRouter();
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const zoomIn: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Media
          </h2>
          <p className="text-lg text-gray-600">
            A visual look at Hon. Adeogun&apos;s work, appearances and impact.
          </p>
        </motion.div>
        {/* Media Grid - All 4 items in a row */}
        {/* Media Grid - Flex layout */}
        <motion.div
          className="w-full flex flex-col lg:flex-row gap-3 items-end justify-evenly"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* First 3 items - smaller thumbnails */}
          <motion.div
            className="flex items-end justify-evenly w-full gap-[10px] md:gap-4"
            variants={container}
          >
            {/* Item 1 */}
            <motion.div
              className="relative w-[111px] h-[200px] md:w-[160px] md:h-[230px] xl:w-[240px] xl:h-[280px] rounded-[5px] overflow-hidden group cursor-pointer"
              variants={zoomIn}
            >
              <Image
                src={mediaItems[0].src}
                alt={mediaItems[0].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {mediaItems[0].type === 'video' && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Play className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              )}
            </motion.div>

            {/* Item 2 */}
            <motion.div
              className="relative w-[111px] h-[200px] md:w-[160px] md:h-[230px] xl:w-[240px] xl:h-[280px] rounded-[5px] overflow-hidden group cursor-pointer"
              variants={zoomIn}
              onClick={() => setSelectedVideo(mediaItems[1].videoUrl!)}
            >
              <Image
                src={mediaItems[1].src}
                alt={mediaItems[1].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {mediaItems[1].type === 'video' && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Play className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              )}
            </motion.div>

            {/* Item 3 */}
            <motion.div
              className="relative w-[111px] h-[200px] md:w-[160px] md:h-[230px] xl:w-[240px] xl:h-[280px] rounded-[5px] overflow-hidden group cursor-pointer"
              variants={zoomIn}
            >
              <Image
                src={mediaItems[2].src}
                alt={mediaItems[2].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {mediaItems[2].type === 'video' && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Play className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Last item - larger with View More button */}
          <motion.div className="relative mx-auto lg:mx-0" variants={fadeUp}>
            <div className="relative w-[353px] h-[300px] md:w-[420px] md:h-[320px] xl:w-[460px] xl:h-[340px] rounded-lg overflow-hidden">
              <Image
                src={mediaItems[3].src}
                alt={mediaItems[3].alt}
                fill
                className="object-cover"
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-white/90 text-black hover:bg-white rounded-full w-16 h-16 p-0"
                  onClick={() => setSelectedVideo(mediaItems[3].videoUrl!)}
                >
                  <Play className="w-6 h-6 ml-1" />
                </Button>
              </motion.div>
            </div>

            {/* View More Button positioned at bottom right */}
            <div className="hidden lg:block absolute bottom-1 right-0">
              <Button
                className=" rounded-full bg-black hover:bg-black/90 text-white px-4 py-2 text-sm"
                onClick={() => router.push('/gallery')}
              >
                View More
              </Button>
            </div>

            <div className="lg:hidden hidden md:block absolute bottom-1 right-2 self-stretch">
              <Button
                className="rounded-full bg-black hover:bg-black/90 text-white px-4 py-2 text-sm "
                onClick={() => router.push('/gallery')}
              >
                View <ArrowRight className="w-8 h-8" />
              </Button>
            </div>

            <div className="lg:hidden md:hidden absolute bottom-1 right-2 self-stretch">
              <Button
                className="rounded-full bg-black hover:bg-black/90 text-white px-4 py-2 text-sm "
                onClick={() => router.push('/gallery')}
              >
                <ArrowRight className="w-8 h-8" />
              </Button>
            </div>
          </motion.div>
          {/* Video Modal */}
          {selectedVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
              <div className="relative w-full max-w-3xl mx-4">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-8 h-8" />
                </button>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={selectedVideo}
                    title="Latest media video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function MediaThumbnail({
  type,
  src,
  alt,
}: {
  type: 'image' | 'video';
  src: string;
  alt: string;
}) {
  return (
    <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {type === 'video' && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <Play className="w-6 h-6 text-white" />
        </div>
      )}
    </div>
  );
}
