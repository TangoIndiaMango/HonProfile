'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Mic, FileText, Volume2, Users } from 'lucide-react';

const actionVideos = [
  {
    id: 1,
    title: 'Speaking Facts and Political Action',
    description: 'Hon. Ade Adeogun discusses his approach to politics and the importance of speaking truth to power',
    videoUrl: 'https://drive.google.com/file/d/1vKm9gRa7l6L5Xwn9qtJx3SCGEqiTGcYp/view?usp=sharing',
    thumbnail: '/works/adeogun_for_us.jpg',
    icon: Mic,
    category: 'Political Leadership'
  },
  {
    id: 2,
    title: 'Widow Rights Protection Bill',
    description: 'Proposing legislation to protect the rights of oppressed widow women in Nigeria',
    videoUrl: 'https://drive.google.com/file/d/1Rozxv8DtK6nKPGpe0l55TdqL2ndwHwsP/view?usp=sharing',
    thumbnail: '/recieved/adeogun-blue.png',
    icon: FileText,
    category: 'Legislative Action'
  },
  {
    id: 3,
    title: 'Bill Recognition and Advocacy',
    description: 'Getting recognition for legislative actions and speaking where voices need to be heard',
    videoUrl: 'https://drive.google.com/file/d/1VZ2mABom-q3zN6pev9q2XFgjGJNQSKaE/view?usp=sharing',
    thumbnail: '/recieved/adeogun-read.png',
    icon: Volume2,
    category: 'Advocacy'
  },
  {
    id: 4,
    title: 'Listening to the People',
    description: 'Responding to the request of Ose Obaakoko people and ensuring their needs are addressed',
    videoUrl: 'https://drive.google.com/file/d/1FIheIk7gw4eBwmS2LwumGAyLt7WxSMef/view?usp=sharing',
    thumbnail: '/recieved/adeogun-rally.png',
    icon: Users,
    category: 'Constituency Service'
  }
];

export function ActionsVideos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const nextVideo = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === actionVideos.length - 1 ? 0 : prevIndex + 1
    );
    setIsVideoPlaying(false);
  };

  const prevVideo = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? actionVideos.length - 1 : prevIndex - 1
    );
    setIsVideoPlaying(false);
  };

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-bold text-gray-900 mb-2.5"
          >
            Ade Adeogun: In His Own Words
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto"
          >
            Highlights of Hon. Ade Adeogun speaking plainly about politics, defending the vulnerable, 
            and responding directly to his people.
          </motion.p>
        </div>

        {/* Video Player */}
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
              {isVideoPlaying ? (
                <iframe
                  src={actionVideos[currentIndex].videoUrl.replace('/view?usp=sharing', '/preview')}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={actionVideos[currentIndex].title}
                />
              ) : (
                <div className="relative w-full h-full bg-gray-900 group cursor-pointer" onClick={playVideo}>
                  <Image
                    src={actionVideos[currentIndex].thumbnail}
                    alt={actionVideos[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-gray-800 ml-0.5" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {actionVideos[currentIndex].category}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-3">
            <button
              onClick={prevVideo}
              className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full p-2.5 hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            {/* Video Indicators */}
            <div className="flex space-x-2">
              {actionVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsVideoPlaying(false);
                  }}
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
          <div className="mt-3 text-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
              {actionVideos[currentIndex].title}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              {actionVideos[currentIndex].description}
            </p>
            <div className="mt-2.5 flex items-center justify-center gap-2">
              {(() => {
                const IconComponent = actionVideos[currentIndex].icon;
                return <IconComponent className="w-4 h-4 text-gray-600" />;
              })()}
              <span className="bg-black px-3.5 py-1.5 rounded-full text-white text-xs md:text-sm font-medium">
                {actionVideos[currentIndex].category}
              </span>
            </div>
          </div>
        </div>

        {/* Video Thumbnail Slider */}
        <div className="mt-6">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 text-center">
            More Highlights
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3.5">
            {actionVideos.map((video, index) => (
              <motion.button
                key={video.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsVideoPlaying(false);
                }}
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
                  <Play className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-[10px] md:text-[11px] font-medium truncate">
                    {video.title}
                  </p>
                  <p className="text-gray-200 text-[10px] md:text-[11px]">{video.category}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
