'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface QuickStatsGridProps {
  title: string;
  stats: Array<{
    label: string;
    count: number;
  }>;
}

export function QuickStatsGrid({ title, stats }: QuickStatsGridProps) {
  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-none">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {stats.map((stat, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{stat.label}</span>
              <Badge variant="outline">{stat.count}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
