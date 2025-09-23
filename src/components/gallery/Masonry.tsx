'use client';

import { ReactNode } from 'react';

type ColumnsConfig = {
  base?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

interface MasonryProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  columns?: ColumnsConfig;
  gapClassName?: string; // e.g., 'gap-3'
  className?: string;
}

export function Masonry<T>({
  items,
  renderItem,
  columns = { base: 1, md: 2, lg: 3 },
  gapClassName = 'gap-3',
  className,
}: MasonryProps<T>) {
  // Tailwind columns utilities
  const columnsClasses = [
    `columns-${columns.base ?? 1}`,
    columns.md ? `md:columns-${columns.md}` : '',
    columns.lg ? `lg:columns-${columns.lg}` : '',
    columns.xl ? `xl:columns-${columns.xl}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={[columnsClasses, gapClassName, 'space-y-3', className].filter(Boolean).join(' ')}>
      {items.map((item, index) => (
        <div key={(item as any)?.id ?? index} className="break-inside-avoid">
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}


