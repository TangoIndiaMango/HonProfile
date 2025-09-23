import { Hero } from '@/components/layout/Hero';
import { About } from '@/components/layout/About';
import { Vision } from '@/components/layout/Vision';
import { Impact } from '@/components/layout/Impact';
import { LatestMedia } from '@/components/layout/LatestMedia';
import { Quote } from '@/components/layout/Quote';
import { Insights } from '@/components/layout/Insights';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Vision />
      <Impact />
      <LatestMedia />
      <Quote />
      <Insights />
    </>
  );
}