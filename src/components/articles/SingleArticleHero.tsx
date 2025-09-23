import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface SingleArticleHeroProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
  publishDate: string;
  category?: string;
}

export function SingleArticleHero({
  title,
  image,
  readTime,
  publishDate,
  category,
}: SingleArticleHeroProps) {
  return (
    <section className="relative min-h-[600px] lg:min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-10" />
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </div>

      {/* Back Button */}
      <div className="absolute top-8 left-4 lg:left-16 z-20">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>
      </div>

      {/* Content */}
      <div className="absolute bottom-20 z-20 container px-4 lg:px-16 text-left">
        <div className="max-w-4xl">
          {/* Meta Info */}
          <div className="flex items-center justify-start gap-6 text-white/90 ">
            <span>{readTime}</span>
            <span>•</span>
            <span>{publishDate}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight uppercase tracking-wide">
            {title}
          </h1>

          {/* Category */}
          {category && (
            <div className="inline-block">
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium">
                {category}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
