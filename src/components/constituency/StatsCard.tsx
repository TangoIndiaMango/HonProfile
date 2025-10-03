'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  index: number;
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  color, 
  bgColor, 
  index 
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-none min-h-[200px]">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className={`p-3 rounded-lg ${bgColor}`}>
              <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
            </div>
            <Badge variant="secondary" className="text-xs">
              Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            <p className="text-sm font-medium text-gray-700">{title}</p>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
