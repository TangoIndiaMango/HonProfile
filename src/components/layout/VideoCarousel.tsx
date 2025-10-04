'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const featuredVideos = [
  {
    id: 1,
    title: 'Hon. Ade Adeogun - Legislative Activities',
    description: 'Parliamentary activities and legislative interventions for the constituency.',
    videoUrl: 'https://www.youtube.com/embed/ZRIjo4QZkbw?autoplay=1&mute=0&start=41&loop=1&playlist=ZRIjo4QZkbw',
    category: 'Legislative',
    thumbnail: '/recieved/adeogun-office.png'
  },
  {
    id: 2,
    title: 'Speak with Hon. Ade Adeogun',
    description: 'Speaking with Hon. Ade Adeogun',
    videoUrl: 'https://www.youtube-nocookie.com/embed/gxukvGFS_zc?autoplay=0&mute=0&start=120',
    category: 'Leadership',
    thumbnail: '/recieved/adeogun-suit.png'
  },
  // {
  //   id: 3,
  //   title: 'Education & Youth Empowerment',
  //   description: 'Educational support programs and youth development initiatives across the constituency.',
  //   videoUrl: 'https://www.youtube.com/embed/ZRIjo4QZkbw?autoplay=0&mute=0&start=60',
  //   category: 'Education',
  //   thumbnail: '/recieved/adeogun-education.png'
  // },
  // {
  //   id: 4,
  //   title: 'Legislative Activities',
  //   description: 'Parliamentary activities and legislative interventions for the constituency.',
  //   videoUrl: 'https://www.youtube.com/embed/ZRIjo4QZkbw?autoplay=0&mute=0&start=60',
  //   category: 'Legislative',
  //   thumbnail: '/recieved/adeogun-read.png'
  // }
];

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            Watch Hon. Ade Adeogun&apos;s commitment to accountable leadership and community development
          </motion.p>
        </div>

        {/* YouTube Video Player */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video bg-black"
            >
              <iframe
                src={featuredVideos[currentIndex].videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={featuredVideos[currentIndex].title}
              />
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevVideo}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-3 hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Video Indicators */}
            <div className="flex space-x-2">
              {featuredVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-black w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextVideo}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-3 hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Video Info */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {featuredVideos[currentIndex].title}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {featuredVideos[currentIndex].description}
            </p>
            <div className="mt-4">
              <span className="bg-black px-4 py-2 rounded-full text-white text-sm font-medium">
                {featuredVideos[currentIndex].category}
              </span>
            </div>
          </div>
        </div>

        {/* Video Thumbnail Slider */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">More Videos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                    {video.category}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
