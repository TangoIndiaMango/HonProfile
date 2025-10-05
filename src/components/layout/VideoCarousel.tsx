'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const featuredVideos = [
  {
    id: 1,
    title: 'Hon. Ade Adeogun - Committe Chairman on Asset Recovery',
    description:
      'Parliamentary Activities and Legislative intervention on the Recovery of Assets. EFCC at the Sitting.',
    videoUrl:
      'https://www.youtube.com/embed/ZRIjo4QZkbw?autoplay=1&mute=0&start=41&loop=1&playlist=ZRIjo4QZkbw',
    category: 'Legislative',
    thumbnail: '/recieved/adeogun-office.png',
  },
  {
    id: 2,
    title: 'Speak with Hon. Ade Adeogun',
    description: 'Speaking with Hon. Ade Adeogun',
    videoUrl:
      'https://www.youtube-nocookie.com/embed/gxukvGFS_zc?autoplay=0&mute=0&start=140',
    category: 'Leadership',
    thumbnail: '/recieved/adeogun-suit.png',
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
  //   videoUrl: 'https://drive.google.com/file/d/1NCTbZ5OOHwjwQa4qPrErr3a5fUoEjPyM/view?usp=sharing',
  //   category: 'Legislative',
  //   thumbnail: '/recieved/adeogun-read.png'
  // }
];

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === featuredVideos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? featuredVideos.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          >
            Leadership in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-gray-600 max-w-2xl mx-auto"
          >
            Watch Hon. Ade Adeogun&apos;s commitment to accountable leadership
            and community development
          </motion.p>
        </div>

        {/* YouTube Video Player */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-xl">
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
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={prevVideo}
              className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full p-2.5 hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            {/* Video Indicators */}
            <div className="flex space-x-2">
              {featuredVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-black w-5'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextVideo}
              className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full p-2.5 hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Video Info */}
          <div className="mt-4 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1.5">
              {featuredVideos[currentIndex].title}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              {featuredVideos[currentIndex].description}
            </p>
            <div className="mt-4">
              <span className="bg-black px-3.5 py-1.5 rounded-full text-white text-xs md:text-sm font-medium">
                {featuredVideos[currentIndex].category}
              </span>
            </div>
          </div>
        </div>

        {/* Video Thumbnail Slider */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            More Videos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {featuredVideos.map((video, index) => (
              <motion.button
                key={video.id}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative aspect-video rounded-md overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-blue-600 shadow-sm'
                    : 'hover:shadow'
                }`}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-[11px] font-medium truncate">
                    {video.title}
                  </p>
                  <p className="text-gray-200 text-[11px]">{video.category}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
