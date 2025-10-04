import { AchievementsHero } from '@/components/achievements/AchievementsHero';
import { InfrastructureTimeline } from '@/components/achievements/InfrastructureTimeline';
import { MissionSection } from '@/components/achievements/MissionSection';
import { VoicesOfThePeople } from '@/components/achievements/VoicesOfThePeople';
import { achievementProjects } from '../../data/achievementData';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

export default function AchievementsPage() {
  return (
    <>
      <AchievementsHero />
      <MissionSection />
      <Suspense fallback={<div className="flex justify-center items-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>}>
        <InfrastructureTimeline projects={achievementProjects} />
      </Suspense>
      <VoicesOfThePeople />
      {/* <StatisticsDashboard />
      <AchievementsGrid /> */}
      {/* <CallToAction /> */}
    </>
  );
}
