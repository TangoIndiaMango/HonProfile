'use client';
import { IconArrowLeft, IconArrowRight, IconChecks } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useState } from 'react';
import { AchievmentMedia } from './AchievmentMedia';

interface InfrastructureTimelineProps {
  projects: Array<{
    id: number;
    category: string;
    title: string;
    description: string;
    tasks: Array<{
      id: number;
      date: string;
      title: string;
      status: 'completed' | 'ongoing';
    }>;
    mediaItems: Array<{
      id: number;
      type: 'image' | 'video';
      url?: string;
      media?: string;
      title: string;
    }>;
  }>;
}

export function InfrastructureTimeline({
  projects,
}: InfrastructureTimelineProps) {
  const [showAll, setShowAll] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const currentProject = projects[currentProjectIndex];
  const totalProjects = projects.length;
  const displayedTasks = showAll
    ? currentProject.tasks
    : currentProject.tasks.slice(0, 6);

  const nextProject = () => {
    if (currentProjectIndex < totalProjects - 1) {
      setCurrentProjectIndex(currentProjectIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentProjectIndex > 0) {
      setCurrentProjectIndex(currentProjectIndex - 1);
    }
  };

  return (
    <section className=" relative overflow-hidden">
      {/* Background Pattern */}
      <div className="bg-[#021d14] py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-repeat bg-size-[1024px_1024px] bg-top-left"
            style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold text-white"
            >
              His Achievements to Date
            </motion.h2>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-10">
              <button
                onClick={prevProject}
                disabled={currentProjectIndex === 0}
                className="bg-white flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <IconArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextProject}
                disabled={currentProjectIndex >= totalProjects - 1}
                className="bg-white flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <IconArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-[#f8f8f8] mb-4">
              {currentProject.title}
            </h3>
            <p className="text-[#dbdbdb] text-lg max-w-4xl">
              {currentProject.description}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Left Column */}
            <div className="space-y-8">
              {displayedTasks
                .slice(0, Math.ceil(displayedTasks.length / 2))
                .map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="border-b border-[#003523] pb-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {task.status === 'completed' ? (
                          <IconChecks className="w-5 h-5 text-white" />
                        ) : (
                          <Clock className="w-5 h-5 text-orange-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[#f8f8f8] font-extrabold text-lg">
                            {task.date}
                          </span>
                        </div>
                        <p className="text-[#dbdbdb] leading-[30px]">
                          {task.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {displayedTasks
                .slice(Math.ceil(displayedTasks.length / 2))
                .map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="border-b border-[#003523] pb-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {task.status === 'completed' ? (
                          <IconChecks className="w-5 h-5 text-white" />
                        ) : (
                          <Clock className="w-5 h-5 text-orange-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[#f8f8f8] font-extrabold text-lg">
                            {task.date}
                          </span>
                        </div>
                        <p className="text-[#dbdbdb] leading-[30px]">
                          {task.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* See More/Less Button */}
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#f8f8f8] text-black px-3 py-1 rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
            >
              {showAll ? 'See less' : 'See more'}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F8F8F8] h-[500px] w-full relative"></div>

      <div className="absolute bottom-15 left-1/2 -translate-x-1/2 container mx-auto px-4 lg:px-16  w-full">
        {currentProject.mediaItems && (
          <AchievmentMedia mediaItems={currentProject.mediaItems} />
        )}
      </div>
    </section>
  );
}
