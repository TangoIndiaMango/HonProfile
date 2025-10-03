import { AchievementsHome } from '@/components/achievements/AchievementsHome';
import { About } from '@/components/layout/About';
import { ConstituencyServicePreview } from '@/components/layout/ConstituencyServicePreview';
import { Hero } from '@/components/layout/Hero';
import { Impact } from '@/components/layout/Impact';
import { InfrastructureShowcase } from '@/components/layout/InfrastructureShowcase';
import { Insights } from '@/components/layout/Insights';
import { LatestMedia } from '@/components/layout/LatestMedia';
import { LegislativeInterventions } from '@/components/layout/LegislativeInterventions';
import { Quote } from '@/components/layout/Quote';
import { Vision } from '@/components/layout/Vision';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Vision />
      <Impact />
      <InfrastructureShowcase />
      <LegislativeInterventions />
      <ConstituencyServicePreview />
      <AchievementsHome />
      <LatestMedia />
      <Quote />
      <Insights />
    </>
  );
}
