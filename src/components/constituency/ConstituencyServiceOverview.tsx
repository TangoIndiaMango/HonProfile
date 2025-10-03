'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StatsSection } from './StatsSection';
import { QuickAccessCards } from './QuickAccessCards';
import { CallToActionSection } from './CallToActionSection';
import { TabPreview } from './TabPreview';

export function ConstituencyServiceOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* <h1 className="text-4xl md:text-5xl font-bold mb-4">Constituency Service Dashboard</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete transparency in representation with detailed records of leadership appointments, 
              job creation, infrastructure development, and legislative achievements
            </p> */}
          </motion.div>
        </div>
      </div>

      {/* Statistics Cards */}
      <StatsSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-20">
        <Tabs defaultValue="overview" className="w-full bg-none">
          {/* Tabs wrapper with full-width background across rows */}
          <div className="w-full  p-1">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2 mb-12 md:mb-5 lg:mb-0">
              <TabsTrigger
                value="overview"
                className="hover:bg-gray-100 text-xs sm:text-sm"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="aides"
                className="hover:bg-gray-100 text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Leadership Team</span>
                <span className="sm:hidden">Team</span>
              </TabsTrigger>
              <TabsTrigger
                value="employment"
                className="hover:bg-gray-100 text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Job Creation</span>
                <span className="sm:hidden">Jobs</span>
              </TabsTrigger>
              <TabsTrigger
                value="programs"
                className="hover:bg-gray-100 text-xs sm:text-sm"
              >
                <span className="hidden md:inline">Development Programs</span>
                <span className="md:hidden">Programs</span>
              </TabsTrigger>
              <TabsTrigger
                value="beneficiaries"
                className="hover:bg-gray-100 text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Beneficiaries</span>
                <span className="sm:hidden">People</span>
              </TabsTrigger>
              <TabsTrigger
                value="infrastructure"
                className="hover:bg-gray-100 text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Infrastructure</span>
                <span className="sm:hidden">Projects</span>
              </TabsTrigger>
              <TabsTrigger
                value="legislative"
                className="hover:bg-gray-100 text-xs sm:text-sm"
              >
                <span className="hidden md:inline">Legislative Work</span>
                <span className="md:hidden">Legislative</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 pt-4"
            >
              <QuickAccessCards />
              <CallToActionSection />
            </motion.div>
          </TabsContent>

          <TabsContent value="aides" className="mt-8">
            <TabPreview
              title="Leadership Team Structure"
              stats={[
                {
                  value: '7',
                  label: 'Leadership Team',
                  color: 'text-blue-600',
                },
                {
                  value: '17',
                  label: 'Special Assistants',
                  color: 'text-green-600',
                },
                {
                  value: '18',
                  label: 'Personal Assistants',
                  color: 'text-purple-600',
                },
              ]}
              viewAllLink="/constituency-service/aides"
              viewAllText="View Complete Leadership Team"
            />
          </TabsContent>

          <TabsContent value="employment" className="mt-8">
            <TabPreview
              title="Job Creation Impact"
              stats={[
                {
                  value: '12',
                  label: 'Security Agencies',
                  color: 'text-blue-600',
                },
                {
                  value: '8',
                  label: 'Federal Agencies',
                  color: 'text-green-600',
                },
                {
                  value: '17',
                  label: 'Other Agencies',
                  color: 'text-purple-600',
                },
              ]}
              viewAllLink="/constituency-service/employment"
              viewAllText="View All Employment Records"
            />
          </TabsContent>

          <TabsContent value="programs" className="mt-8">
            <TabPreview
              title="Development Programs"
              stats={[
                {
                  value: '3',
                  label: 'Partnership Programs',
                  color: 'text-blue-600',
                },
                {
                  value: '3',
                  label: 'Education Programs',
                  color: 'text-green-600',
                },
                {
                  value: '4',
                  label: 'Empowerment Programs',
                  color: 'text-purple-600',
                },
              ]}
              viewAllLink="/constituency-service/programs"
              viewAllText="View All Development Programs"
            />
          </TabsContent>

          <TabsContent value="beneficiaries" className="mt-8">
            <TabPreview
              title="Program Beneficiaries"
              stats={[
                {
                  value: '3',
                  label: 'NPOWER Beneficiaries',
                  color: 'text-blue-600',
                },
                {
                  value: '2',
                  label: 'Credit Facility',
                  color: 'text-green-600',
                },
                {
                  value: '3',
                  label: 'Partnership Programs',
                  color: 'text-purple-600',
                },
                {
                  value: '3',
                  label: 'Education Support',
                  color: 'text-yellow-600',
                },
                {
                  value: '2',
                  label: 'Professional Awards',
                  color: 'text-indigo-600',
                },
                { value: '2', label: 'Women Grants', color: 'text-pink-600' },
                { value: '3', label: 'Employment', color: 'text-red-600' },
              ]}
              viewAllLink="/constituency-service/beneficiaries"
              viewAllText="View All Beneficiaries"
            />
          </TabsContent>

          <TabsContent value="infrastructure" className="mt-8">
            <TabPreview
              title="Infrastructure Development"
              stats={[
                { value: '3', label: 'Road Projects', color: 'text-blue-600' },
                { value: '3', label: 'Water Projects', color: 'text-cyan-600' },
                {
                  value: '3',
                  label: 'School Projects',
                  color: 'text-green-600',
                },
                { value: '2', label: 'Health Projects', color: 'text-red-600' },
                {
                  value: '2',
                  label: 'Market Projects',
                  color: 'text-yellow-600',
                },
                {
                  value: '1',
                  label: 'Bridge Projects',
                  color: 'text-purple-600',
                },
                {
                  value: '2',
                  label: 'Electricity Projects',
                  color: 'text-orange-600',
                },
              ]}
              viewAllLink="/constituency-service/infrastructure"
              viewAllText="View All Infrastructure Projects"
            />
          </TabsContent>

          <TabsContent value="legislative" className="mt-8">
            <TabPreview
              title="Legislative Achievements"
              stats={[
                {
                  value: '4',
                  label: 'Bills Sponsored',
                  color: 'text-green-600',
                },
                { value: '3', label: 'Motions Moved', color: 'text-blue-600' },
                {
                  value: '3',
                  label: 'Committee Activities',
                  color: 'text-purple-600',
                },
                {
                  value: '2',
                  label: 'Questions Asked',
                  color: 'text-yellow-600',
                },
                {
                  value: '2',
                  label: 'Petitions Handled',
                  color: 'text-orange-600',
                },
                {
                  value: '2',
                  label: 'Resolutions Passed',
                  color: 'text-red-600',
                },
              ]}
              viewAllLink="/constituency-service/legislative"
              viewAllText="View All Legislative Records"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
