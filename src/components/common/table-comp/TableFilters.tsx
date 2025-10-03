'use client';

import { Search, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

export interface FilterOption {
  key: string;
  label: string;
  value: string;
  count?: number;
}

export interface TableFiltersProps {
  search?: {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
  };
  dropdowns?: Array<{
    key: string;
    label: string;
    value: string;
    options: FilterOption[];
    onChange: (key: string, value: string) => void;
  }>;
  onExport?: () => void;
  showExport?: boolean;
  showSearch?: boolean;
  showDropdowns?: boolean;
  className?: string;
}

export function TableFilters({ 
  search, 
  dropdowns = [], 
  onExport, 
  showExport = true,
  showSearch = true,
  showDropdowns = true,
  className = ""
}: TableFiltersProps) {
  // Calculate grid columns based on what's shown
  const getGridCols = () => {
    let cols = 0;
    if (showSearch && search) cols++;
    if (showDropdowns && dropdowns) cols += dropdowns.length;
    if (showExport && onExport) cols++;
    return `grid-cols-1 md:grid-cols-${Math.min(cols, 4)}`;
  };

  return (
    <Card className={`bg-white shadow-sm rounded-none mb-8 ${className}`}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Search & Filter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`grid ${getGridCols()} gap-4`}>
          {/* Search Bar */}
          {showSearch && search && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={search.placeholder}
                value={search.value}
                onChange={(e) => search.onChange(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-200 focus:border-black focus:ring-black"
              />
            </div>
          )}

          {/* Dropdown Filters */}
          {showDropdowns && dropdowns && dropdowns.map((dropdown) => (
            <Select 
              key={dropdown.key}
              value={dropdown.value} 
              onValueChange={(value) => dropdown.onChange(dropdown.key, value)}
            >
              <SelectTrigger className="bg-gray-50 border-gray-200 focus:border-black focus:ring-black">
                <SelectValue placeholder={`Select ${dropdown.label}`} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All {dropdown.label}</SelectItem>
                {dropdown.options.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label} {option.count ? `(${option.count})` : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}

          {/* Export Button */}
          {showExport && onExport && (
            <Button className="bg-black hover:bg-gray-800">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
