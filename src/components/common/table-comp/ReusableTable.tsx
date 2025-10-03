'use client';

import { useState, useMemo } from 'react';
import { TableHero } from './TableHero';
import { TableStats } from './TableStats';
import { TableFilters, type FilterOption } from './TableFilters';
import { TableContent } from './TableContent';
import { TablePagination } from './TablePagination';
import { BasicHero } from '../BasicHero';

export interface TableColumn {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
  className?: string;
}


export interface StatCard {
  title: string;
  value: string | number;
  description: string;
  icon: React.ComponentType<any>;
  iconColor: string;
}

export interface ReusableTableProps {
  title: string;
  description: string;
  data: any[];
  columns: TableColumn[];
  stats: StatCard[];
  filters: {
    search?: {
      placeholder: string;
      fields: string[];
    };
    dropdowns?: Array<{
      key: string;
      label: string;
      options: FilterOption[];
    }>;
  };
  onExport?: () => void;
  itemsPerPage?: number;
  onRowAction?: (row: any) => void;
  actionButtonText?: string;
  // Filter options
  showSearch?: boolean;
  showDropdowns?: boolean;
  showExport?: boolean;
  showStats?: boolean;
  showPagination?: boolean;
}

export function ReusableTable({
  title,
  description,
  data,
  columns,
  stats,
  filters,
  onExport,
  itemsPerPage = 10,
  onRowAction,
  actionButtonText = "View Details",
  showSearch = true,
  showDropdowns = true,
  showExport = true,
  showStats = true,
  showPagination = true
}: ReusableTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and search logic
  const filteredData = useMemo(() => {
    return data.filter(item => {
      // Search across specified fields
      const matchesSearch = !searchTerm || 
        filters.search?.fields?.some(field => 
          String(item[field] || '').toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      // Apply dropdown filters
      const matchesFilters = Object.entries(filterValues).every(([key, value]) => 
        value === 'all' || item[key] === value
      );
      
      return matchesSearch && matchesFilters;
    });
  }, [data, searchTerm, filterValues, filters.search?.fields]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Filter handlers
  const handleFilterChange = (key: string, value: string) => {
    setFilterValues(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BasicHero title={title} description={description} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showStats && <TableStats stats={stats} />}
        
        <TableFilters
          search={filters.search ? {
            placeholder: filters.search.placeholder,
            value: searchTerm,
            onChange: handleSearchChange
          } : undefined}
          dropdowns={filters.dropdowns ? filters.dropdowns.map(dropdown => ({
            ...dropdown,
            value: filterValues[dropdown.key] || 'all',
            onChange: handleFilterChange
          })) : undefined}
          onExport={onExport}
          showSearch={showSearch}
          showDropdowns={showDropdowns}
          showExport={showExport}
        />
        
        <TableContent
          data={paginatedData}
          columns={columns}
          onRowAction={onRowAction}
          actionButtonText={actionButtonText}
        />
        
        {showPagination && (
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            startIndex={startIndex}
            itemsPerPage={itemsPerPage}
            totalItems={filteredData.length}
          />
        )}
      </div>
    </div>
  );
}
