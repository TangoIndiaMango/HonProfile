import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  date: string;
  category?: string;
  slug?: string;
  sourceUrl?: string;
}

export function ArticleCard({
  title,
  excerpt,
  image,
  readTime,
  date,
  category,
  slug,
  sourceUrl,
}: ArticleCardProps) {
  const articleSlug = slug || `article-${title.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300 group cursor-pointer border border-[#DBDBDB] mb-3 h-[400px] flex flex-col">
      {/* Article Image */}
      <div className="relative aspect-[5/2] overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Category Badge */}
        {category && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-white/90 text-black px-2 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Article Content - White background below image */}
      <div className="p-4 flex flex-col flex-1">
        {/* Meta Info */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
          <span>{readTime}</span>
          <span>•</span>
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3 className="md:text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-gray-700 transition-colors mb-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-3 flex-1">{excerpt}</p>

        {/* View More Button(s) - Pushed to bottom */}
        <div className="flex items-center gap-3 mt-auto">
          <Button
            size="sm"
            className="bg-black hover:bg-black/90 text-white rounded-full px-4 py-1 text-xs"
            asChild
          >
            <Link href={`/articles/${articleSlug}`}>View more</Link>
          </Button>
          {sourceUrl && (
            <Button
              size="sm"
              variant="outline"
              className="rounded-full px-3 py-1 text-xs border-gray-300"
              asChild
            >
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                Read full source <ArrowUpRight className="w-3 h-3 ml-1 inline" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
