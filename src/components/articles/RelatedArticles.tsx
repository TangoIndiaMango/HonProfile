import { ArticleCard } from './ArticleCard';
import { motion } from 'framer-motion';

const relatedArticles = [
  {
    id: 1,
    title: 'The Future of Nigerian Democracy',
    excerpt: 'Vision and strategies for strengthening democratic institutions.',
    image: '/images/a7d6dfb17b64af5dc104b6d7218de18fd6a4570a.png',
    readTime: '6 min read',
    date: 'June 8, 2025',
    category: 'Democracy',
  },
  {
    id: 2,
    title: 'Accountability in Public Service',
    excerpt: 'The importance of transparency and accountability in government.',
    image: '/images/8cf4071487dc04e0a764fba07dabde19d00315fa.png',
    readTime: '3 min read',
    date: 'June 5, 2025',
    category: 'Governance',
  },
  {
    id: 3,
    title: 'Youth Participation in Democratic Processes',
    excerpt: 'The critical role of young people in shaping Nigeria\'s democratic future.',
    image: '/images/a589f389fa45546e2bf18d35485473b399ff32dc.png',
    readTime: '3 min read',
    date: 'June 12, 2025',
    category: 'Youth',
  },
  {
    id: 4,
    title: 'Building Sustainable Communities Through Policy',
    excerpt: 'How thoughtful policy implementation can create lasting positive change.',
    image: '/images/731247c8c4e4a0befb1336c2bb7257f5f62bd28e.png',
    readTime: '4 min read',
    date: 'June 10, 2025',
    category: 'Development',
  },
];

export function RelatedArticles() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            You may like these
          </h2>
          <p className="text-lg text-gray-600">
            Explore other articles you might find insightful.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {relatedArticles.map(article => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden">
          <motion.div 
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            drag="x"
            dragConstraints={{ left: -800, right: 0 }}
            dragElastic={0.1}
            style={{ cursor: 'grab' }}
            whileDrag={{ cursor: 'grabbing' }}
          >
            {relatedArticles.map(article => (
              <div key={article.id} className="flex-shrink-0 w-[280px]">
                <ArticleCard {...article} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
