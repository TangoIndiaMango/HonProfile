'use client';
import { testimonialMedia } from '@/data/testimonialMedia';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { VideoModal } from '../VideoModal';



export function VoicesOfThePeople() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>(
    undefined
  );
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const nextSlide = () => {
    const maxSlide = Math.max(0, testimonialMedia.length - slidesPerView);
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 lg:py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Voices of the People
          </h2>
          <p className="text-[#585858] text-lg max-w-3xl mx-auto">
            Hear directly from the people whose lives have been touched by Hon.
            Ade Adeogun&apos;s service.
          </p>
        </motion.div>

        {/* Media Gallery - Slider */}
        <div className="relative overflow-hidden mb-12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
          >
            {testimonialMedia.map((media, index) => (
              <div key={media.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg h-80"
                  onClick={() => setSelectedVideo(media.videoUrl)}
                >
                  {/* Video Thumbnail */}
                  <Image
                    src={media.thumbnail}
                    alt={media.title}
                    fill
                    className="object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-gray-800 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                      {media.title}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-10">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="bg-white/20 flex items-center justify-center w-8 h-8 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IconArrowLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Slide Indicators */}
          {/* <div className="flex gap-2">
            {testimonialMedia.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div> */}

          <button
            onClick={nextSlide}
            disabled={currentSlide >= Math.max(0, testimonialMedia.length - slidesPerView)}
            className="bg-white flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IconArrowRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
      />
    </section>
  );
}
