'use client';

import { Search, Filter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilter?: () => void;
  onExport?: () => void;
  placeholder?: string;
}

export function SearchBar({ 
  searchTerm, 
  onSearchChange, 
  onFilter, 
  onExport, 
  placeholder = "Search constituency service data..." 
}: SearchBarProps) {
  return (
    <div className="bg-white shadow-sm p-6 rounded-none">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-gray-50 border-gray-200 focus:border-black focus:ring-black"
          />
        </div>
        {onFilter && (
          <Button
            variant="outline"
            className="border-gray-200 hover:bg-gray-50"
            onClick={onFilter}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        )}
        {onExport && (
          <Button className="bg-black hover:bg-gray-800" onClick={onExport}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        )}
      </div>
    </div>
  );
}
