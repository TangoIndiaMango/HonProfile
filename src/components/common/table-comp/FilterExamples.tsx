'use client';

import { useState } from 'react';
import { Users, Filter, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ReusableTable, type TableColumn, type StatCard } from './ReusableTable';

// Example 1: Full filters with search, dropdowns, and export
export function FullFiltersExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', status: 'active' },
  ];

  const columns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', render: (value) => <Badge>{value}</Badge> },
    { key: 'status', label: 'Status', render: (value) => <Badge>{value}</Badge> }
  ];

  const stats: StatCard[] = [
    { title: 'Total Users', value: users.length, description: 'Registered users', icon: Users, iconColor: 'text-blue-600' },
    { title: 'Active Users', value: 2, description: 'Currently active', icon: Filter, iconColor: 'text-green-600' },
    { title: 'Admins', value: 1, description: 'Administrators', icon: MapPin, iconColor: 'text-purple-600' }
  ];

  return (
    <ReusableTable
      title="Full Filters Example"
      description="Complete table with all filter options enabled"
      data={users}
      columns={columns}
      stats={stats}
      filters={{
        search: { placeholder: "Search users...", fields: ['name', 'email'] },
        dropdowns: [{
          key: 'role',
          label: 'Role',
          options: [
            { key: 'role', label: 'Admin', value: 'admin' },
            { key: 'role', label: 'User', value: 'user' }
          ]
        }]
      }}
      onExport={() => console.log('Export users')}
      showSearch={true}
      showDropdowns={true}
      showExport={true}
      showStats={true}
      showPagination={true}
    />
  );
}

// Example 2: Search only (no dropdowns, no export)
export function SearchOnlyExample() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  ];

  const columns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' }
  ];

  const stats: StatCard[] = [
    { title: 'Total Users', value: users.length, description: 'Registered users', icon: Users, iconColor: 'text-blue-600' }
  ];

  return (
    <ReusableTable
      title="Search Only Example"
      description="Table with only search functionality"
      data={users}
      columns={columns}
      stats={stats}
      filters={{
        search: { placeholder: "Search users...", fields: ['name', 'email'] }
      }}
      showSearch={true}
      showDropdowns={false}
      showExport={false}
      showStats={true}
      showPagination={true}
    />
  );
}

// Example 3: Dropdowns only (no search, no export)
export function DropdownsOnlyExample() {
  const users = [
    { id: 1, name: 'John Doe', role: 'admin', department: 'IT' },
    { id: 2, name: 'Jane Smith', role: 'user', department: 'HR' },
  ];

  const columns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'department', label: 'Department' }
  ];

  const stats: StatCard[] = [
    { title: 'Total Users', value: users.length, description: 'Registered users', icon: Users, iconColor: 'text-blue-600' }
  ];

  return (
    <ReusableTable
      title="Dropdowns Only Example"
      description="Table with only dropdown filters"
      data={users}
      columns={columns}
      stats={stats}
      filters={{
        dropdowns: [
          {
            key: 'role',
            label: 'Role',
            options: [
              { key: 'role', label: 'Admin', value: 'admin' },
              { key: 'role', label: 'User', value: 'user' }
            ]
          },
          {
            key: 'department',
            label: 'Department',
            options: [
              { key: 'department', label: 'IT', value: 'IT' },
              { key: 'department', label: 'HR', value: 'HR' }
            ]
          }
        ]
      }}
      showSearch={false}
      showDropdowns={true}
      showExport={false}
      showStats={true}
      showPagination={true}
    />
  );
}

// Example 4: Export only (no search, no dropdowns)
export function ExportOnlyExample() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const columns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' }
  ];

  const stats: StatCard[] = [
    { title: 'Total Users', value: users.length, description: 'Registered users', icon: Users, iconColor: 'text-blue-600' }
  ];

  return (
    <ReusableTable
      title="Export Only Example"
      description="Table with only export functionality"
      data={users}
      columns={columns}
      stats={stats}
      filters={{}}
      onExport={() => console.log('Export users')}
      showSearch={false}
      showDropdowns={false}
      showExport={true}
      showStats={true}
      showPagination={true}
    />
  );
}

// Example 5: No filters at all (just table)
export function NoFiltersExample() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const columns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' }
  ];

  const stats: StatCard[] = [
    { title: 'Total Users', value: users.length, description: 'Registered users', icon: Users, iconColor: 'text-blue-600' }
  ];

  return (
    <ReusableTable
      title="No Filters Example"
      description="Simple table without any filters"
      data={users}
      columns={columns}
      stats={stats}
      filters={{}}
      showSearch={false}
      showDropdowns={false}
      showExport={false}
      showStats={true}
      showPagination={true}
    />
  );
}

// Example 6: No stats, no pagination (minimal table)
export function MinimalTableExample() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const columns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' }
  ];

  return (
    <ReusableTable
      title="Minimal Table Example"
      description="Minimal table with just the data"
      data={users}
      columns={columns}
      stats={[]}
      filters={{}}
      showSearch={false}
      showDropdowns={false}
      showExport={false}
      showStats={false}
      showPagination={false}
    />
  );
}
