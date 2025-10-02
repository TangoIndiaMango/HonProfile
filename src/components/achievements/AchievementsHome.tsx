'use client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Play,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import { VideoModal } from '../VideoModal';

export function AchievementsHome() {
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>(
    undefined
  );

  const stats = [
    { icon: TrendingUp, number: '13', label: 'Infrastructure Projects' },
    { icon: Users, number: '500', label: 'Scholarship Recipients' },
    { icon: Award, number: '85', label: 'Monthly Aides' },
    { icon: Target, number: '1000', label: 'Farmers Supported' },
  ];

  // Featured video testimonials
  const featuredTestimonials = [
    {
      id: 1,
      title: 'Infrastructure Impact',
      speaker: 'Arc Kayode - Infrastructure Expert',
      videoUrl:
        'https://drive.google.com/file/d/1N6w1nm9fZ6EV3wyPU_Fc5opCrjISec58/view?usp=sharing',
      thumbnail: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
    },
    {
      id: 2,
      title: 'Educational Transformation',
      speaker: 'Principal Ajagbokun High School',
      videoUrl:
        'https://drive.google.com/file/d/1IwvmC-iuwp0cE6h08-1WtH35MtWn-pG0/view?usp=sharing',
      thumbnail: '/images/b7d05d4a656e09768b58159a42e7cda1851f0c3a.png',
    },
    {
      id: 3,
      title: 'Community Development',
      speaker: 'Chief Mrs Ajayi Eunice - NGO Representative',
      videoUrl:
        'https://drive.google.com/file/d/15j7V2q8foVhAc5KMnIEElRQuxNvcNDqO/view?usp=sharing',
      thumbnail: '/images/1f1dc702038b1944d5f8162f874bee68929e222a.png',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#021D14] py-10 lg:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/ce72f5e1a6520628a2958f47853c79183c363d75.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-green-900/90 to-black/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-16">
        <div className="text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl lg:text-4xl font-bold text-white mb-6"
          >
            PROVEN TRACK RECORD
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base lg:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Three years of dedicated service, transformative impact, and
            unwavering commitment to the people of Akoko South East/South West
            Federal Constituency.
          </motion.p>
        </div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <stat.icon className="w-8 h-8 text-white mx-auto mb-4" />
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-white/80">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Featured Video Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Hear From The People
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Real testimonials from community members who have experienced the
              impact of our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedVideo(testimonial.videoUrl)}
              >
                <div className="relative h-48 lg:h-56 rounded-xl overflow-hidden">
                  <Image
                    src={testimonial.thumbnail}
                    alt={testimonial.title}
                    fill
                    className="object-cover"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-gray-800 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h4 className="text-white font-semibold text-lg mb-2">
                    {testimonial.title}
                  </h4>
                  <p className="text-white/70 text-sm">{testimonial.speaker}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* <AchievementsPreview /> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Link href="/achievements">
            <Button
              size="lg"
              className="rounded-full bg-black hover:bg-black/90 text-white px-4 py-2 text-sm transition-all duration-300 hover:scale-105"
            >
              View More <ArrowRight className="w-8 h-8" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
      />
    </section>
  );
}
