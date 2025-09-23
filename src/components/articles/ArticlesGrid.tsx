'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArticleCard } from './ArticleCard';
import { articles, type ArticleItem } from '@/data/articles';

export function ArticlesGrid() {
  const [visibleCount, setVisibleCount] = useState(5);
  
  const currentArticles = articles.slice(0, visibleCount);
  
  const handleLoadMore = () => {
    if (visibleCount < articles.length) {
      setVisibleCount(prev => Math.min(prev + 5, articles.length));
    }
  };

  const getDesktopLayout = (articlesList: ArticleItem[]) => {
    const chunks = [];
    for (let i = 0; i < articlesList.length; i += 5) {
      const chunk = articlesList.slice(i, i + 5);
      chunks.push(chunk);
    }
    return chunks;
  };

  const articleChunks = getDesktopLayout(currentArticles);

  return (
    <section className="py-8 lg:py-16">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Desktop Grid Layout */}
        <div className="hidden md:block">
          {articleChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="mb-8">
              {/* Row 1: 2 large cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {chunk.slice(0, 2).map((article: ArticleItem) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>

              {/* Row 2: 3 medium cards */}
              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {chunk.slice(2, 5).map((article: ArticleItem) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="md:hidden space-y-5">
          {currentArticles.map(article => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < articles.length && (
          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-3 text-sm font-medium"
              onClick={handleLoadMore}
            >
              View more articles ({articles.length - visibleCount} remaining)
            </Button>
          </div>
        )}

        {/* Show All Articles Link when all are loaded */}
        {visibleCount >= articles.length && (
          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-3 text-sm font-medium"
              asChild
            >
              <Link href="/articles">View all articles</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
