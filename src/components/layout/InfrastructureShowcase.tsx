'use client';

import { VideoModal } from '@/components/VideoModal';
import { ImagePreview } from '@/components/ImagePreview';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, MapPin, Images } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const infrastructureProjects = [
  {
    id: 1,
    title: 'Town Hall and Civic Center Development',
    location: 'Various Communities',
    date: '2019-2023',
    images: [
      '/recieved/adeogun-ose-hall.png',
      '/works/aiyegunle-town-hall.jpg',
      '/works/oba-akoko-townhall.jpg',
      '/work_update/Construction of Town Hall  at Oka Odo_adeogun.jpeg',
      '/work_update/adeogun_civic_center.jpeg',
      '/work_update/adeogun_civic_center1.jpeg',
      '/work_update/adeogun_civic_center2.jpeg',
      '/work_update/oba_Adegoroye_civic_center_by_adeogun.jpeg',
      '/work_update/oba_adegoroye_civic_center_by_adeogun1.jpeg',
      '/work_update/oba_adeniyi_civic_center_by_adeogun.jpeg',
    ],
    description: 'Massive renovations of town halls and construction of civic centers across various communities including Oka Town Hall, Aiyegunle Town Hall, Oba Akoko Town Hall, and Oba Nurudeen Adeniyi Adegoroye Civic Center',
    type: 'image',
  },
  {
    id: 2,
    title: 'Educational Infrastructure Development',
    location: 'Various Schools Across Constituency',
    date: '2020-2024',
    images: [
      '/work_update/adeogun_classroom_renovation.jpeg',
      '/work_update/adeogun_classroom.jpeg',
      '/work_update/adeogun_classroom3.jpeg',
      '/work_update/adeogun_classroom4.jpeg',
      '/work_update/adeogun_classroom5.jpeg',
      '/work_update/adeogun_classroom6.jpeg',
      '/work_update/adeogun_classroom7.jpeg',
      '/work_update/adeogun_highclasroom.jpeg',
      '/work_update/classroom.jpeg',
      '/work_update/3-Classroom Block constructed at AUD Akungba_by_adeogun.jpeg',
      '/work_update/3-Classroom Block constructed at AUD Akungba_by_adeogun2.jpeg',
      '/works/administrative-block-rennovation.jpg',
      '/works/clasroom.jpg',
      '/works/student-desk.jpg',
      '/works/principal_oba.jpg',
    ],
    description: 'Construction of 6-classroom block at Egure High School, Supare Akoko, Akoko South West LGA, Ondo State., Administrative Block at Ajagbokun High School, Ikun Akoko, Akoko South West LGA, Ondo State., and 3-Classroom Block at Ansar-Ud-Deen Primary School, Akungba Akoko.',
    type: 'image',
  },
  {
    id: 3,
    title: 'Central Mosque Renovation',
    location: 'Ose Oba',
    date: 'October 2021',
    images: [
      '/work_update/adeogun_central_mosque_ose.jpeg',
      '/work_update/adeogun_central_mosque_ose1.jpeg',
      '/work_update/adeogun_central_mosque_ose2.jpeg',
      '/works/ose_osque.jpg',
    ],
    description: 'Complete renovation of the Central Mosque at Ose Community, a growing suburb of Oba Akoko.',
    type: 'image',
  },
  {
    id: 4,
    title: 'Water Infrastructure Projects',
    location: 'Okele and Surrounding Areas',
    date: '2021-2023',
    images: [
      '/work_update/adeogun_borehole_okele.jpeg',
      '/work_update/adeogun_borehole.jpeg',
      '/work_update/adeogun_borehole1.jpeg',
    ],
    description: 'Installation of boreholes and water infrastructure to provide clean water access to communities',
    type: 'image',
  },
  {
    id: 5,
    title: 'Bridge and Drainage Construction',
    location: 'Ogbele and Various Locations',
    date: '2021-2022',
    images: [
      '/work_update/adeogun_ogbele_bridge.jpeg',
      '/work_update/adeogun_bridge_drain.jpeg',
    ],
    description: 'Reconstruction of bridges with proper drainage systems and retention walls',
    type: 'image',
  },
  {
    id: 6,
    title: 'Road Infrastructure Development',
    location: 'Epinmi and Irefun Areas',
    date: '2021-2023',
    images: [
      '/work_update/adeogun_road_epinmi.jpeg',
      '/work_update/adeogun_irefun_rd.jpeg',
      '/work_update/adeogun_epinmi1.jpeg',
      '/work_update/adeogun_epinmi2.jpeg',
      '/work_update/adeogun_epinmi3.jpeg',
      '/works/good-road-network.jpg',
    ],
    description: 'Construction and rehabilitation of roads connecting communities with proper drainage',
    type: 'image',
  },
  {
    id: 7,
    title: 'Motor and Trailer Park Development',
    location: 'Oka and Isua',
    date: '2022-2023',
    images: [
      '/work_update/oka_motorpark.jpeg',
      '/work_update/oka_motorpark1.jpeg',
      '/work_update/oka_motorpark2.jpeg',
      '/work_update/adeogun_trailer_park_isua.jpeg',
      '/work_update/adeogun_trailer_park.jpeg',
      '/work_update/adeogun_trailer_park2.jpeg',
      '/work_update/adeogun_trailer2.jpeg',
      '/works/motor_park_chairma-adeogun.png',
      '/works/trailer_adeogun.jpeg',
    ],
    description: 'Construction and improvement of motor and trailer parks to enhance transportation infrastructure',
    type: 'image',
  },
  {
    id: 8,
    title: 'Security Infrastructure',
    location: 'Police Quarters and DSS Offices',
    date: '2022-2023',
    images: [
      '/work_update/police_quaters.jpeg',
      '/work_update/police_quaters1.jpeg',
      '/work_update/dss_office.jpeg',
      '/work_update/dess_office1.jpeg',
    ],
    description: 'Development of security infrastructure including police quarters and DSS facilities',
    type: 'image',
  },
  {
    id: 9,
    title: 'Youth Empowerment Programs',
    location: 'Various Communities',
    date: '2021-2023',
    images: [
      '/work_update/adeogun_motorcycle.jpeg',
      '/work_update/adeogun_motorcycle2.jpeg',
      '/work_update/adeogun_motorcycle3.jpeg',
    ],
    description: 'Distribution of motorcycles and empowerment tools to support youth development',
    type: 'image',
  },
  {
    id: 10,
    title: 'Educational Support Programs',
    location: 'Educational Institutions',
    date: '2020-2024',
    images: [
      '/work_update/adeogun_bursary_award.jpeg',
      '/work_update/adeogun_bursary_award_1.jpeg',
    ],
    description: 'Comprehensive scholarship and bursary programs supporting students across the constituency',
    type: 'image',
  },
  {
    id: 11,
    title: 'Upland Development Projects',
    location: 'Upland Communities',
    date: '2021-2023',
    images: [
      '/work_update/adeogun_upland.jpeg',
      '/work_update/adeogun_upland_2.jpeg',
      '/work_update/adeogun_upland1.jpeg',
      '/work_update/adeogun_upland4.jpeg',
    ],
    description: 'Infrastructure development and community projects in upland areas',
    type: 'image',
  },
  {
    id: 12,
    title: 'Power Infrastructure',
    location: 'Various Communities',
    date: '2022-2023',
    images: [
      '/work_update/adeogun_transformer.jpeg',
      '/works/kva-transformer.jpg',
    ],
    description: 'Installation and maintenance of transformers to improve electricity supply',
    type: 'image',
  },
  {
    id: 13,
    title: 'Community Welfare and Support Programs',
    location: 'Various Communities',
    date: '2020-2024',
    images: [
      '/works/adeogun_speech_welfare.jpg',
      '/works/aid_to_gov.jpg',
      '/works/femi_agbede.jpg',
      '/works/high_chief.jpg',
      '/works/chief_mrs_to_adeogun.jpg',
      '/works/yahyah-bisola.png',
      '/works/ahmad-joy.png',
      '/works/adeogun_for_us.jpg',
      '/works/adeogun-engineer.jpg',
      '/works/adeogun_face.jpg',
    ],
    description: 'Community welfare initiatives, government support programs, and recognition of community leaders and beneficiaries',
    type: 'image',
  },
];

export function InfrastructureShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [previewIndex, setPreviewIndex] = useState(0);

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
  const projectImages = currentProject.images;

  const handleImageClick = () => {
    if (projectImages.length > 0) {
      setSelectedImages(projectImages);
      setPreviewIndex(0);
    }
  };

  const closeImagePreview = () => {
    setSelectedImages(null);
  };

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
              <div
                className="relative h-80 md:h-96 cursor-pointer group"
                onClick={handleImageClick}
              >
                {projectImages.length === 1 ? (
                  // Single image display
                  <>
                    <Image
                      src={projectImages[0]}
                      alt={currentProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </>
                ) : (
                  // Multiple images collage
                  <div className="grid grid-cols-2 gap-1 h-full p-1">
                    {/* Main large image */}
                    <div className="relative col-span-2 row-span-2">
                      <Image
                        src={projectImages[0]}
                        alt={currentProject.title}
                        fill
                        className="object-cover rounded-tl-lg rounded-tr-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    {/* Smaller images grid */}
                    {projectImages.slice(1, 5).map((img, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`${currentProject.title} ${idx + 2}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                      </div>
                    ))}
                    {/* Overlay for more images indicator */}
                    {projectImages.length > 5 && (
                      <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium">
                        <Images className="w-4 h-4" />
                        +{projectImages.length - 5} more
                      </div>
                    )}
                    {/* Click indicator */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-gray-900">
                        <Images className="w-4 h-4" />
                        View {projectImages.length} photos
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 text-white z-10">
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
            onClick={() =>
              (window.location.href = '/achievements?show=infrastructure')
            }
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

      {/* Image Preview Modal */}
      {selectedImages && (
        <ImagePreview
          images={selectedImages}
          currentIndex={previewIndex}
          isOpen={true}
          onClose={closeImagePreview}
          onIndexChange={setPreviewIndex}
        />
      )}
    </section>
  );
}
