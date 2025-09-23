import Link from 'next/link';
import { Button } from '../ui/button';
import { ArticleCard } from './ArticleCard';
import { articles } from '@/data/articles';

export function ArticlesGrid() {
  return (
    <section className="py-8 lg:py-16 ">
      <div className="container mx-auto px-4 lg:px-16 gap-3">
        {/* Desktop Grid Layout */}
        <div className="hidden md:block ">
          {/* Row 1: 2 large cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {articles.slice(0, 2).map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          {/* Row 2: 3 medium cards */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {articles.slice(2, 5).map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          {/* Row 3: 2 large cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {articles.slice(5, 7).map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          {/* Row 4: 3 medium cards */}
          <div className="grid lg:grid-cols-3 gap-6">
            {articles.slice(7, 10).map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="md:hidden space-y-5 gap-3">
          {articles.map(article => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <Button
          size="lg"
          className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-3 text-sm font-medium"
          asChild
        >
          <Link href="/articles">View more articles</Link>
        </Button>
      </div>
    </section>
  );
}
