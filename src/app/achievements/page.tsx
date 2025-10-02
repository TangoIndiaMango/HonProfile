import { AchievementsHero } from '@/components/achievements/AchievementsHero';
import { InfrastructureTimeline } from '@/components/achievements/InfrastructureTimeline';
import { MissionSection } from '@/components/achievements/MissionSection';
import { VoicesOfThePeople } from '@/components/achievements/VoicesOfThePeople';
import { achievementProjects } from '../../data/achievementData';

export default function AchievementsPage() {
  return (
    <>
      <AchievementsHero />
      <MissionSection />
      <InfrastructureTimeline projects={achievementProjects} />
      <VoicesOfThePeople />
      {/* <StatisticsDashboard />
      <AchievementsGrid /> */}
      {/* <CallToAction /> */}
    </>
  );
}
