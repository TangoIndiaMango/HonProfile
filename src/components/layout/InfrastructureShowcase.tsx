'use client';

import { VideoModal } from '@/components/VideoModal';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const infrastructureProjects = [
  {
    id: 1,
    title: 'Oka Town Hall Renovation',
    location: 'Ibaka, Oka Akoko',
    date: 'July 2019',
    image: '/recieved/adeogun-ose-hall.png',
    description: 'Massive renovation of Oka Town Hall along Palace Road',
    type: 'image',
  },
  // {
  //   id: 2,
  //   title: 'Community Town Hall Construction',
  //   location: 'Oka Odo, Oka Akoko',
  //   date: 'July 2020',
  //   image: '/recieved/adeogun-gov.png',
  //   description: 'World Bank assisted community development project',
  //   type: 'image',
  // },
  {
    id: 3,
    title: 'Ogbere Bridge Reconstruction',
    location: 'Agba Quarters, Oka Akoko',
    date: 'June 2021',
    image: '/recieved/adeogun-bridge.png',
    description: 'Reconstruction with retention walls and line drains',
    type: 'image',
  },
  {
    id: 4,
    title: 'Awolowo Road Construction',
    location: 'Oba Akoko',
    date: 'June 2021',
    image: '/recieved/adeogun-road-work.png',
    description: 'Construction with erosion control line drains',
    type: 'image',
  },
  // {
  //   id: 5,
  //   title: 'Central Mosque Renovation',
  //   location: 'Ose Oba',
  //   date: 'October 2021',
  //   image: '/recieved/adeogun-read.png',
  //   description: 'Massive renovation of Central Mosque',
  //   type: 'image',
  // },
  // {
  //   id: 6,
  //   title: 'Iwaro-Ayegunle Road',
  //   location: '7KM connecting communities',
  //   date: '2021-2022',
  //   image: '/recieved/adeogun-with.png',
  //   description: 'Construction of 7KM road connecting communities',
  //   type: 'image',
  // },
  {
    id: 7,
    title: 'Educational Infrastructure',
    location: 'Various Schools',
    date: '2020-2022',
    image: '/recieved/adeogun-education.png',
    description: 'School renovations and educational facilities',
    type: 'image',
  },
  {
    id: 8,
    title: 'Agricultural Support',
    location: 'Farming Communities',
    date: '2021-2022',
    image: '/recieved/adeogun-agricultural-materials.png',
    description: 'Distribution of agricultural materials and equipment',
    type: 'image',
  },
  {
    id: 9,
    title: 'Sports Development',
    location: 'Youth Centers',
    date: '2021-2022',
    image: '/recieved/adeogun-sport.png',
    description: 'Sports facilities and youth development programs',
    type: 'image',
  },
  {
    id: 10,
    title: 'Scholarship Program',
    location: 'Educational Institutions',
    date: '2020-2022',
    image: '/recieved/adeogun-schorlaship.png',
    description: 'Educational support and scholarship programs',
    type: 'image',
  },
];

export function InfrastructureShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % infrastructureProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      prev =>
        (prev - 1 + infrastructureProjects.length) %
        infrastructureProjects.length
    );
  };

  const currentProject = infrastructureProjects[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Infrastructure Interventions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building the foundation for progress through roads, bridges, town
            halls, and community facilities that serve the people of Akoko South
            East/South West Federal Constituency.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-80 md:h-96">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {currentProject.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{currentProject.date}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentProject.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${((currentIndex + 1) / infrastructureProjects.length) * 100}%`,
                        }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {currentIndex + 1} of {infrastructureProjects.length}{' '}
                      projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {infrastructureProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
            onClick={() => (window.location.href = '/achievements?show=infrastructure')}
          >
            View All Infrastructure Projects
          </motion.button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo as any}
        />
      )}
    </section>
  );
}
