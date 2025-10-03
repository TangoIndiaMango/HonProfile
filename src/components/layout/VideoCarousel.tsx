'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const featuredVideos = [
  {
    id: 1,
    title: 'Hon. Ade Adeogun - Leadership in Action',
    description: 'A comprehensive overview of Hon. Ade Adeogun\'s commitment to accountable leadership and grassroots empowerment.',
    thumbnail: '/recieved/adeogun-office.png',
    videoUrl: 'https://drive.google.com/file/d/1NCTbZ5OOHwjwQa4qPrErr3a5fUoEjPyM/preview',
    duration: '3:45',
    category: 'Leadership'
  },
  {
    id: 2,
    title: 'Infrastructure Development',
    description: 'Showcasing key infrastructure projects and community development initiatives.',
    thumbnail: '/recieved/adeogun-bridge.png',
    videoUrl: 'https://drive.google.com/file/d/1NCTbZ5OOHwjwQa4qPrErr3a5fUoEjPyM/preview',
    duration: '2:30',
    category: 'Infrastructure'
  },
  {
    id: 3,
    title: 'Education & Youth Empowerment',
    description: 'Educational support programs and youth development initiatives across the constituency.',
    thumbnail: '/recieved/adeogun-education.png',
    videoUrl: 'https://drive.google.com/file/d/1NCTbZ5OOHwjwQa4qPrErr3a5fUoEjPyM/preview',
    duration: '4:15',
    category: 'Education'
  },
  {
    id: 4,
    title: 'Community Engagement',
    description: 'Direct engagement with constituents and community development activities.',
    thumbnail: '/recieved/adeogun-gov.png',
    videoUrl: 'https://drive.google.com/file/d/1NCTbZ5OOHwjwQa4qPrErr3a5fUoEjPyM/preview',
    duration: '3:20',
    category: 'Community'
  },
  {
    id: 5,
    title: 'Legislative Activities',
    description: 'Parliamentary activities and legislative interventions for the constituency.',
    thumbnail: '/recieved/adeogun-read.png',
    videoUrl: 'https://drive.google.com/file/d/1NCTbZ5OOHwjwQa4qPrErr3a5fUoEjPyM/preview',
    duration: '2:45',
    category: 'Legislative'
  }
];

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === featuredVideos.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change video every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredVideos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredVideos.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Leadership in Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Watch Hon. Ade Adeogun's commitment to accountable leadership and community development
          </motion.p>
        </div>

        {/* Video Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video bg-black"
              >
                {/* Video Thumbnail */}
                <div className="relative w-full h-full">
                  <Image
                    src={featuredVideos[currentIndex].thumbnail}
                    alt={featuredVideos[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => openVideoModal(featuredVideos[currentIndex].videoUrl)}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-6 group"
                    >
                      <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
                    </button>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {featuredVideos[currentIndex].title}
                        </h3>
                        <p className="text-gray-200 text-sm">
                          {featuredVideos[currentIndex].description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                          {featuredVideos[currentIndex].duration}
                        </span>
                        <span className="bg-blue-600 px-3 py-1 rounded-full text-white text-sm">
                          {featuredVideos[currentIndex].category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={prevVideo}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-3 hover:bg-gray-50"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-3"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button
                onClick={nextVideo}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-3 hover:bg-gray-50"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Video Indicators */}
            <div className="flex space-x-2">
              {featuredVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Video Grid Preview */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredVideos.map((video, index) => (
            <motion.button
              key={video.id}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-4 ring-blue-600 shadow-lg' 
                  : 'hover:shadow-md'
              }`}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-medium truncate">
                  {video.title}
                </p>
                <p className="text-gray-200 text-xs">
                  {video.duration}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <iframe
              src={selectedVideo}
              className="w-full h-full"
              allowFullScreen
              title="Video Player"
            />
          </div>
        </div>
      )}
    </section>
  );
}
