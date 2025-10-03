'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TabPreviewProps {
  title: string;
  stats: Array<{
    value: string;
    label: string;
    color: string;
  }>;
  viewAllLink: string;
  viewAllText: string;
}

export function TabPreview({ title, stats, viewAllLink, viewAllText }: TabPreviewProps) {
  return (
    <Card className="bg-white shadow-lg rounded-none">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="pt-4 border-t border-gray-200">
          <Link href={viewAllLink}>
            <Button variant="outline" className="w-full">
              {viewAllText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
