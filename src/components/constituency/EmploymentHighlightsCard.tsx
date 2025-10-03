'use client';

import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface EmploymentHighlight {
  agency: string;
  count: number;
  color: string;
}

interface EmploymentHighlightsCardProps {
  highlights: EmploymentHighlight[];
  viewAllLink: string;
  viewAllText: string;
}

export function EmploymentHighlightsCard({ highlights, viewAllLink, viewAllText }: EmploymentHighlightsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="bg-white shadow-lg rounded-none">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-green-600" />
            Employment by Agency
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{item.agency}</span>
                <Badge className={item.color}>
                  {item.count} employed
                </Badge>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link href={viewAllLink}>
              <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50">
                {viewAllText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
