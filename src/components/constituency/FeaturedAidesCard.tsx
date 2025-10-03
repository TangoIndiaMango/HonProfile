'use client';

import { motion } from 'framer-motion';
import { Users, Phone, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface FeaturedAide {
  name: string;
  post: string;
  town: string;
  phone: string;
}

interface FeaturedAidesCardProps {
  aides: FeaturedAide[];
  viewAllLink: string;
  viewAllText: string;
}

export function FeaturedAidesCard({ aides, viewAllLink, viewAllText }: FeaturedAidesCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="bg-white shadow-lg rounded-none">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Featured Aides
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {aides.map((aide, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-none">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{aide.name}</h4>
                  <p className="text-sm text-gray-600">{aide.post}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" />
                    {aide.town}
                  </div>
                </div>
                <a 
                  href={`tel:${aide.phone}`}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
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
