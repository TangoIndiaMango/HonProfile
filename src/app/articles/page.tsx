import { ArticlesHero } from '@/components/articles/ArticlesHero';
import { ArticlesGrid } from '@/components/articles/ArticlesGrid';

export default function ArticlesPage() {
  return (
    <>
      <ArticlesHero />
     <div className='max-w-7xl mx-auto bg-gray-50'>
     <ArticlesGrid />
     </div>
    </>
  );
}
