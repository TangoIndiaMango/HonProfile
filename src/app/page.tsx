import { AchievementsHome } from '@/components/achievements/AchievementsHome';
import { About } from '@/components/layout/About';
import { Hero } from '@/components/layout/Hero';
import { Impact } from '@/components/layout/Impact';
import { Insights } from '@/components/layout/Insights';
import { LatestMedia } from '@/components/layout/LatestMedia';
import { Quote } from '@/components/layout/Quote';
import { Vision } from '@/components/layout/Vision';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Vision />
      <Impact />

      <AchievementsHome />
      <LatestMedia />
      <Quote />
      <Insights />
    </>
  );
}
