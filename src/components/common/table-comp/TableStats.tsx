'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from './ReusableTable';

interface TableStatsProps {
  stats: StatCard[];
}

export function TableStats({ stats }: TableStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white shadow-sm rounded-none">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <p className="text-sm text-gray-600">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
