'use client';
import { MediaModal, type MediaItem } from '@/components/ui/MediaModal';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Heart,
  Play,
  Ticket
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import { AchievementCard } from './AchievementCard';

const previewAchievements = [
  {
    title: 'Infrastructure Development',
    description:
      '13 major infrastructure projects including roads, bridges, and community facilities',
    number: '13',
    unit: 'Projects',
    icon: Ticket,
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    mediaType: 'image' as const,
  },
  {
    title: 'Educational Support',
    description:
      '500 scholarship recipients and 6,000 textbooks distributed across schools',
    number: '500',
    unit: 'Scholarships',
    icon: GraduationCap,
    video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    mediaType: 'video' as const,
  },
  {
    title: 'Employment Creation',
    description:
      '85 monthly-paid aides and 105 NPower beneficiaries across the constituency',
    number: '85',
    unit: 'Aides',
    icon: Briefcase,
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
    mediaType: 'image' as const,
  },
  {
    title: 'Community Welfare',
    description:
      'Direct support to 1,000 farmers and comprehensive welfare programs',
    number: '1000',
    unit: 'Farmers',
    icon: Heart,
    video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    mediaType: 'video' as const,
  },
] as const;

export function AchievementsPreview() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const handleMediaClick = (achievement: any) => {
    if (achievement.mediaType === 'video' && achievement.video) {
      setSelectedMedia({
        type: 'video',
        url: achievement.video,
        title: achievement.title,
      });
    } else if (achievement.mediaType === 'image' && achievement.image) {
      setSelectedMedia({
        type: 'image',
        url: achievement.image,
        title: achievement.title,
      });
    }
  };

  const closeModal = () => setSelectedMedia(null);

  return (
    <section className="">
      {/* <AchievementsHero /> */}
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Proven Track Record
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Three years of dedicated service delivering tangible results across
            infrastructure, education, employment, and community development.
          </motion.p>
        </div> */}

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {previewAchievements.map((achievement, index) => (
            <div key={achievement.title} className="relative group">
              <AchievementCard {...achievement} delay={index * 0.1} />

              {/* Click overlay for media viewing */}
              <div
                className="absolute inset-0 cursor-pointer z-20"
                onClick={() => handleMediaClick(achievement)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                {/* Play button for videos */}
                {achievement.mediaType === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-4">
                      <Play className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                )}

                {/* Click indicator for images */}
                {achievement.mediaType === 'image' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-3">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
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

      <MediaModal open={!!selectedMedia} media={selectedMedia} onClose={closeModal} />
    </section>
  );
}
