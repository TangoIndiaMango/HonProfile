'use client';

import { motion } from 'framer-motion';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, FileX, Filter } from 'lucide-react';
import { TableColumn } from './ReusableTable';

export interface TableContentProps {
  data: any[];
  columns: TableColumn[];
  onRowAction?: (row: any) => void;
  actionButtonText?: string;
}

export function TableContent({ data, columns, onRowAction, actionButtonText = "View Details" }: TableContentProps) {
  // Empty state component
  const EmptyState = () => (
    <Card className="bg-white shadow-sm rounded-none mb-8">
      <CardContent className="p-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <FileX className="w-8 h-8 text-gray-400" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">No results found</h3>
            <p className="text-gray-500 max-w-md">
              No items match your current search criteria. Try adjusting your filters or search terms.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Search className="w-4 h-4" />
            <span>Try different search terms</span>
            <Filter className="w-4 h-4 ml-2" />
            <span>or adjust your filters</span>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );

  // Show empty state if no data
  if (data.length === 0) {
    return <EmptyState />;
  }

  return (
    <Card className="bg-white shadow-sm rounded-none mb-8">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                {columns.map((column) => (
                  <TableHead key={column.key} className="font-semibold text-gray-900">
                    {column.label}
                  </TableHead>
                ))}
                {onRowAction && (
                  <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <motion.tr
                  key={item.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {columns.map((column) => (
                    <TableCell 
                      key={column.key} 
                      className={column.className}
                    >
                      {column.render 
                        ? column.render(item[column.key], item)
                        : item[column.key]
                      }
                    </TableCell>
                  ))}
                  {onRowAction && (
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs"
                        onClick={() => onRowAction(item)}
                      >
                        {actionButtonText}
                      </Button>
                    </TableCell>
                  )}
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
