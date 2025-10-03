'use client';

import { VideoModal } from '@/components/VideoModal';
import { motion } from 'framer-motion';
import { Calendar, FileText, Play, Shield, Users } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
const legislativeActivities = [
  {
    id: 1,
    title: 'Deputy Chairman, House Committee on National Security and Intelligence',
    description: 'Led oversight functions on national security matters and intelligence operations',
    date: '2019-2023',
    type: 'committee',
    icon: Shield
  },
  {
    id: 2,
    title: '9th National Assembly Debates',
    description: 'Active participation in legislative debates on accountability and transparency',
    date: '2019-2023',
    type: 'debate',
    icon: Users
  },
  {
    id: 3,
    title: 'Constituency Oversight and Reporting',
    description: 'Institutionalized periodic reporting to constituents on projects and budget implementation',
    date: '2019-2023',
    type: 'oversight',
    icon: FileText
  }
];

const billsSponsored = [
  {
    id: 1,
    title: 'National Security Enhancement Bill',
    description: 'Legislation to strengthen national security infrastructure and intelligence coordination',
    status: 'Passed',
    date: '2021'
  },
  {
    id: 2,
    title: 'Constituency Development Accountability Act',
    description: 'Bill to ensure transparency and accountability in constituency project implementation',
    status: 'Under Review',
    date: '2022'
  },
  {
    id: 3,
    title: 'Youth Empowerment and Skills Development Bill',
    description: 'Legislation to enhance youth development programs and skills acquisition initiatives',
    status: 'Passed',
    date: '2020'
  }
];

const legislativeVideos = [
  {
    id: 1,
    title: 'House of Representatives Debate on National Assembly Performance',
    description: 'Hon. Ade Adeogun reflects on the achievements and shortcomings of the 9th National Assembly',
    thumbnail: '/recieved/adeogun-bill.png',
    videoUrl: 'https://www.youtube.com/watch?v=2clQKrhDFCU',
    duration: '15:30'
  },
  {
    id: 2,
    title: 'Politics with GA - Legislative Discussion',
    description: 'Political analysis and legislative insights with Hon. Ade Adeogun',
    thumbnail: '/recieved/adeogun-office.png',
    videoUrl: 'https://www.youtube.com/watch?v=pWotPmmjfEk',
    duration: '12:45'
  },
  {
    id: 3,
    title: 'Fireworks with Honourable Ade Adeogun',
    description: 'Dynamic political discussion and legislative insights',
    thumbnail: '/recieved/adeogun-rally.png',
    videoUrl: 'https://www.youtube.com/watch?v=gxukvGFS_zc',
    duration: '18:20'
  }
];

export function LegislativeInterventions() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'activities' | 'bills' | 'videos'>('activities');

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Legislative Interventions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Championing legislative excellence through committee leadership, bill sponsorship, and active participation in House of Representatives proceedings.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            {[
              { id: 'activities', label: 'Committee Activities' },
              { id: 'bills', label: 'Bills Sponsored' },
              { id: 'videos', label: 'Legislative Videos' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-black text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'activities' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legislativeActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <activity.icon className="w-6 h-6 text-gray-800" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{activity.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'bills' && (
            <div className="space-y-6">
              {billsSponsored.map((bill, index) => (
                <motion.div
                  key={bill.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {bill.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {bill.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        bill.status === 'Passed' 
                          ? 'bg-gray-100 text-gray-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {bill.status}
                      </span>
                      <span className="text-sm text-gray-500">{bill.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legislativeVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                      fill
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedVideo(video.videoUrl)}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-200 hover:scale-110"
                      >
                        <Play className="w-8 h-8 text-white" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Informed About Legislative Activities
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Follow Hon. Ade Adeogun&apos;s legislative journey and stay updated on bills, committee activities, and parliamentary proceedings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors duration-200"
                onClick={() => window.location.href = '/achievements'}
              >
                View All Legislative Records
              </button>
              <button 
                className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition-colors duration-200"
                onClick={() => window.location.href = '/articles'}
              >
                Read Latest Articles
              </button>
            </div>
          </div>
        </motion.div>
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
