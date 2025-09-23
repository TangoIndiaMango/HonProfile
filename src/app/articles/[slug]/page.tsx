
'use client';

import { SingleArticleContent } from '@/components/articles/SingleArticleContent';
import { SingleArticleHero } from '@/components/articles/SingleArticleHero';
import { Insights } from '@/components/layout/Insights';
import { articles } from '@/data/articles';

interface SingleArticlePageProps {
  params: {
    slug: string;
  };
}

export default function SingleArticlePage({ params }: SingleArticlePageProps) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) {
    // basic not-found fallback
    return null;
  }
  return (
    <>
      <SingleArticleHero
        title={article.title}
        excerpt={article.excerpt}
        image={article.image}
        author={"Hon. Ade Adeogun"}
        readTime={article.readTime}
        publishDate={new Date(article.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        category={article.category}
      />
      {article.content && <SingleArticleContent content={article.content} />}
      <Insights />
    </>
  );
}
