'use client';

import Link from 'next/link';
import { Users, Briefcase, Building, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function QuickAccessCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
      <Card className="bg-white shadow-lg rounded-none">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Leadership Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Chief of Staff</span>
              <Badge className="bg-blue-100 text-blue-800">1</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Special Advisers</span>
              <Badge className="bg-green-100 text-green-800">6</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Legislative Aides</span>
              <Badge className="bg-purple-100 text-purple-800">1</Badge>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link href="/constituency-service/aides">
              <Button variant="outline" className="w-full">
                View All 68 Aides
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-lg rounded-none">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-green-600" />
            Employment Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Security Agencies</span>
              <Badge className="bg-blue-100 text-blue-800">12</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Federal Agencies</span>
              <Badge className="bg-green-100 text-green-800">8</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Other Agencies</span>
              <Badge className="bg-purple-100 text-purple-800">17</Badge>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link href="/constituency-service/employment">
              <Button variant="outline" className="w-full">
                View All 37 Jobs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-lg rounded-none">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Building className="w-5 h-5 text-orange-600" />
            Development Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Infrastructure Projects</span>
              <Badge className="bg-orange-100 text-orange-800">16</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Empowerment Programs</span>
              <Badge className="bg-purple-100 text-purple-800">10</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Legislative Activities</span>
              <Badge className="bg-red-100 text-red-800">16</Badge>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link href="/constituency-service/infrastructure">
              <Button variant="outline" className="w-full">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
