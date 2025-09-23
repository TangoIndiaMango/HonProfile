export type ArticleSection = {
  id: string;
  title: string;
  content: string;
  subsections?: {
    id: string;
    title: string;
    content: string;
  }[];
};

export type ArticleItem = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  date: string; // ISO or display
  category?: string;
  slug: string;
  sourceUrl?: string; // external link to full content (social/news)
  content?: ArticleSection[]; // optional inline content for the single page
};

export const articles: ArticleItem[] = [
  {
    id: 1,
    title: 'Examining the State of Representation in Ondo North',
    excerpt:
      'A concise look at current political representation and its impact on local communities.',
    image: '/images/a589f389fa45546e2bf18d35485473b399ff32dc.png',
    readTime: '2 min read',
    date: '2025-06-23',
    category: 'Governance',
    slug: 'examining-state-representation-ondo-north',
    sourceUrl: 'https://www.facebook.com/',
  },
  {
    id: 2,
    title: 'The Need for Balanced Analysis in Nigerian Politics',
    excerpt:
      'Why objective political discourse matters for a stronger democracy.',
    image: '/images/731247c8c4e4a0befb1336c2bb7257f5f62bd28e.png',
    readTime: '3 min read',
    date: '2025-06-20',
    category: 'Politics',
    slug: 'balanced-analysis-nigerian-politics',
    sourceUrl: 'https://twitter.com/',
  },
  {
    id: 3,
    title: 'The High Cost of Political Un-seriousness',
    excerpt:
      'How unserious engagement affects development and progress, and what to change.',
    image: '/images/a7d6dfb17b64af5dc104b6d7218de18fd6a4570a.png',
    readTime: '4 min read',
    date: '2025-06-18',
    category: 'Policy',
    slug: 'high-cost-political-un-seriousness',
    sourceUrl: 'https://www.facebook.com/',
    content: [
      {
        id: 'intro',
        title: 'Introduction',
        content:
          'In today\'s Nigeria, \"politics as usual\" costs ordinary people more than they realise. Leaders must focus on duty to citizens over slogans.',
      },
    ],
  },
  {
    id: 4,
    title: 'The Adeogun Example: A Legacy of Empowerment',
    excerpt:
      'How effective leadership can transform communities and inspire positive change.',
    image: '/images/8cf4071487dc04e0a764fba07dabde19d00315fa.png',
    readTime: '5 min read',
    date: '2025-06-15',
    category: 'Leadership',
    slug: 'adeogun-example-legacy-empowerment',
    sourceUrl: 'https://www.instagram.com/',
  },
];


