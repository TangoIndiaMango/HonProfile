'use client';

import { use } from 'react';
import { SingleArticleContent } from '@/components/articles/SingleArticleContent';
import { SingleArticleHero } from '@/components/articles/SingleArticleHero';
import { Insights } from '@/components/layout/Insights';
import { articles } from '@/data/articles';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileX } from 'lucide-react';
import Link from 'next/link';

interface SingleArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function SingleArticlePage({ params }: SingleArticlePageProps) {
  const resolvedParams = use(params);
  const article = articles.find(a => a.slug === resolvedParams.slug);
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
              <FileX className="w-12 h-12 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Article Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              The article you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="space-y-4">
            <Link href="/articles">
              <Button className="w-full bg-black hover:bg-black/90 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Articles
              </Button>
            </Link>
            <div className="h-1" />
            <Link href="/">
              <Button variant="outline" className="w-full">
                Go to Homepage
              </Button>
            </Link>
          </div>

          {/* Additional Help */}
          {/* <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Can&apos;t find what you&apos;re looking for?{' '}
              <Link href="/contact" className="text-black hover:underline">
                Contact us
              </Link>
            </p>
          </div> */}
        </div>
      </div>
    );
  }
  return (
    <>
      <SingleArticleHero
        title={article.title}
        excerpt={article.excerpt}
        image={article.image}
        author={'Hon. Ade Adeogun'}
        readTime={article.readTime}
        publishDate={new Date(article.date).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
        category={article.category}
      />
      <div className="max-w-7xl mx-auto bg-gray-50">
        {article.content && <SingleArticleContent content={article.content} />}
        <Insights />
      </div>
    </>
  );
}
