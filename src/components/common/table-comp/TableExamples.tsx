'use client';

import { useState, useMemo } from 'react';
import { Users, Filter, MapPin, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  TableHero, 
  TableStats, 
  TableFilters, 
  TableContent, 
  TablePagination,
  type TableColumn,
  type StatCard 
} from './index';

// Example: Custom table using individual components
export function CustomTableExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', status: 'active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'admin', status: 'active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'user', status: 'inactive' },
  ];

  // Filter data
  const filteredData = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = !searchTerm || 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = selectedRole === 'all' || user.role === selectedRole;
      return matchesSearch && matchesRole;
    });
  }, [searchTerm, selectedRole]);

  // Paginate data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Table columns
  const columns: TableColumn[] = [
    {
      key: 'name',
      label: 'Name',
      render: (value) => <div className="font-medium text-gray-900">{value}</div>
    },
    {
      key: 'email',
      label: 'Email',
      render: (value) => <div className="text-gray-700">{value}</div>
    },
    {
      key: 'role',
      label: 'Role',
      render: (value) => (
        <Badge className={value === 'admin' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <Badge className={value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
          {value}
        </Badge>
      )
    }
  ];

  // Statistics
  const stats: StatCard[] = [
    {
      title: 'Total Users',
      value: users.length,
      description: 'Registered users',
      icon: Users,
      iconColor: 'text-blue-600'
    },
    {
      title: 'Active Users',
      value: users.filter(u => u.status === 'active').length,
      description: 'Currently active',
      icon: Filter,
      iconColor: 'text-green-600'
    },
    {
      title: 'Admins',
      value: users.filter(u => u.role === 'admin').length,
      description: 'Administrators',
      icon: MapPin,
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TableHero 
        title="Custom Users Table" 
        description="Example using individual table components for maximum flexibility" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TableStats stats={stats} />
        
        <TableFilters
          search={{
            placeholder: "Search users...",
            value: searchTerm,
            onChange: setSearchTerm
          }}
          dropdowns={[
            {
              key: 'role',
              label: 'Role',
              value: selectedRole,
              options: [
                { key: 'role', label: 'Admin', value: 'admin' },
                { key: 'role', label: 'User', value: 'user' }
              ],
              onChange: (key, value) => {
                setSelectedRole(value);
                setCurrentPage(1);
              }
            }
          ]}
          onExport={() => console.log('Export users')}
        />
        
        <TableContent
          data={paginatedData}
          columns={columns}
          onRowAction={(row) => console.log('Edit user:', row.name)}
          actionButtonText="Edit User"
        />
        
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          startIndex={startIndex}
          itemsPerPage={itemsPerPage}
          totalItems={filteredData.length}
        />
      </div>
    </div>
  );
}