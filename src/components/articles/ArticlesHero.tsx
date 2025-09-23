import { Search } from 'lucide-react';

export function ArticlesHero() {
  return (
    <section className="py-16 lg:py-24 bg-[#021D14]">
      <div className="container mx-auto px-4 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-wide">
            INSIGHTS & ARTICLES
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-white/90 mb-12 leading-relaxed">
            A curated hub of news, features, and commentaries on Hon. Ade
            Adeogun&apos;s work and impact.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-gray-800/50 border border-gray-700 rounded-full px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
