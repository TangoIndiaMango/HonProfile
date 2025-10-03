'use client';

interface TableHeroProps {
  title: string;
  description: string;
}

export function TableHero({ title, description }: TableHeroProps) {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
