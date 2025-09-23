'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'Examining the State of Representation in Ondo North',
    image: '/images/a589f389fa45546e2bf18d35485473b399ff32dc.png',
    readTime: '2 min read',
    date: 'June 23, 2025',
    link: 'examining-state-representation-ondo-north',
  },
  {
    id: 2,
    title: 'The Need for Balanced Analysis in Nigerian Politics',
    image: '/images/731247c8c4e4a0befb1336c2bb7257f5f62bd28e.png',
    readTime: '3 min read',
    date: 'June 20, 2025',
    link: 'balanced-analysis-nigerian-politics',
  },
  {
    id: 3,
    title: 'The High Cost of Political Un-seriousness',
    image: '/images/a7d6dfb17b64af5dc104b6d7218de18fd6a4570a.png',
    readTime: '4 min read',
    date: 'June 18, 2025',
    link: 'high-cost-political-un-seriousness',
  },
  {
    id: 4,
    title: 'The Adeogun Example: A Legacy of Empowerment',
    image: '/images/8cf4071487dc04e0a764fba07dabde19d00315fa.png',
    readTime: '5 min read',
    date: 'June 15, 2025',
    link: 'adeogun-example-legacy-empowerment',
  },
];

export function Insights({
  title = 'Insights & Articles',
  subtitle = 'Explore some of the thoughts, ideas and policies shaping his vision for Nigeria.',
  buttonText = 'View More',
  buttonLink = '/articles',
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  const router = useRouter();
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="self-start lg:self-center rounded-full bg-black hover:bg-black/90 hover:text-white text-white px-4 py-2 text-sm"
            onClick={() => router.push(buttonLink)}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Articles Grid - Horizontal scroll on mobile, grid on desktop */}
        <div className="block md:hidden">
          <motion.div
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            drag="x"
            dragConstraints={{ left: -800, right: 0 }}
            dragElastic={0.1}
            style={{ cursor: 'grab' }}
            whileDrag={{ cursor: 'grabbing' }}
          >
            {articles.map(article => (
              <div key={article.id} className="flex-shrink-0 w-[280px]">
                <ArticleCard {...article} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map(article => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({
  title,
  image,
  readTime,
  date,
  link,
}: {
  title: string;
  image: string;
  readTime: string;
  date: string;
  link: string;
}) {
  return (
    <Link href={`/articles/${link}`}>
      <article className="relative rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300 group cursor-pointer">
        {/* Article Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black" />

          {/* Article Content - Overlaid on image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {/* Meta Info */}
            <div className="flex items-center gap-5 text-sm text-white/80 mb-3">
              <span>{readTime}</span>
              <span>•</span>
              <span>{date}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-white/90 transition-colors">
              {title}
            </h3>
          </div>
        </div>
      </article>
    </Link>
  );
}
