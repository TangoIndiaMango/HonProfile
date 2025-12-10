import { AchievementsHome } from '@/components/achievements/AchievementsHome';
import { About } from '@/components/layout/About';
import { ActionsVideos } from '@/components/layout/ActionsVideos';
import { ConstituencyServicePreview } from '@/components/layout/ConstituencyServicePreview';
import { VideoCarousel } from '@/components/layout/VideoCarousel';
import { Hero } from '@/components/layout/Hero';
import { Impact } from '@/components/layout/Impact';
import { InfrastructureShowcase } from '@/components/layout/InfrastructureShowcase';
import { Insights } from '@/components/layout/Insights';
import { LatestMedia } from '@/components/layout/LatestMedia';
import { LegislativeInterventions } from '@/components/layout/LegislativeInterventions';
import { NationalVoice } from '@/components/layout/NationalVoice';
import { Quote } from '@/components/layout/Quote';
import { Vision } from '@/components/layout/Vision';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ActionsVideos />
      <Vision />
      <VideoCarousel />
      <Impact />
      <InfrastructureShowcase />
      <ConstituencyServicePreview />
      <LegislativeInterventions />
      {/* <NationalVoice /> */}
      <AchievementsHome />
      <LatestMedia />
      <Quote />
      <Insights />
    </>
  );
}
