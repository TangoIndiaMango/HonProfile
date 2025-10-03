'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CallToActionSection() {
  return (
    <div className="bg-black p-8 text-white text-center rounded-none">
      <h3 className="text-2xl font-bold mb-4">
        Explore Complete Service Records
      </h3>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Access detailed information about every aspect of constituency service, 
        from leadership appointments to infrastructure development and legislative achievements.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/constituency-service/aides">
          <Button className="bg-white text-black hover:bg-gray-100">
            View Leadership Team
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
        <Link href="/constituency-service/infrastructure">
          <Button variant="outline" className="border-white text-[#000] hover:bg-white hover:text-black">
            View Infrastructure Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}
