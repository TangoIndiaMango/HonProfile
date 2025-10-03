'use client';

import { useState, useMemo } from 'react';
import { Phone, MapPin, Briefcase, Filter, Building, DollarSign, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ReusableTable, type TableColumn, type StatCard } from '@/components/common/table-comp/ReusableTable';
import { DetailsModal } from '@/components/common/table-comp/DetailsModal';
import { employmentOpportunities } from '@/data/employmentOpportunities';

export function EmploymentOpportunitiesTable() {
  const [selectedEmployment, setSelectedEmployment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique categories for filter
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(employmentOpportunities.map(emp => emp.category))];
    return uniqueCategories.map(category => ({
      key: 'category',
      label: category,
      value: category
    }));
  }, []);

  // Table columns configuration
  const columns: TableColumn[] = [
    {
      key: 'name',
      label: 'Name',
      render: (value) => (
        <div className="font-medium text-gray-900">{value}</div>
      )
    },
    {
      key: 'employer',
      label: 'Employer',
      render: (value) => (
        <div className="text-gray-700">{value}</div>
      )
    },
    {
      key: 'address',
      label: 'Address',
      render: (value) => (
        <div className="text-gray-700 flex items-center gap-1">
          <MapPin className="w-4 h-4 text-gray-400" />
          {value}
        </div>
      )
    },
    {
      key: 'category',
      label: 'Category',
      render: (value) => (
        <Badge className={getCategoryBadgeColor(value)}>
          {value}
        </Badge>
      )
    },
    {
      key: 'phoneNumber',
      label: 'Phone',
      render: (value) => (
        value ? (
          <a 
            href={`tel:${value}`}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {value}
          </a>
        ) : (
          <span className="text-gray-400">N/A</span>
        )
      )
    }
  ];

  // Statistics cards
  const stats: StatCard[] = [
    {
      title: 'Total Employment',
      value: employmentOpportunities.length,
      description: 'Employment opportunities',
      icon: Briefcase,
      iconColor: 'text-blue-600'
    },
    {
      title: 'Security Agencies',
      value: employmentOpportunities.filter(e => e.category === 'security' || e.category === 'army' || e.category === 'navy').length,
      description: 'Security positions',
      icon: Filter,
      iconColor: 'text-red-600'
    },
    {
      title: 'Federal Agencies',
      value: employmentOpportunities.filter(e => e.category === 'fire_service' || e.category === 'immigration' || e.category === 'other').length,
      description: 'Federal positions',
      icon: MapPin,
      iconColor: 'text-green-600'
    }
  ];

  // Badge color helper
  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Security Agencies':
        return 'bg-red-100 text-red-800';
      case 'Federal Agencies':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle view details
  const handleViewDetails = (employment: any) => {
    setSelectedEmployment(employment);
    setIsModalOpen(true);
  };

  // Modal fields configuration
  const modalFields = [
    {
      key: 'name',
      label: 'Employee Name',
      icon: Building,
      render: (value: string) => (
        <div className="text-lg font-semibold text-gray-900">{value}</div>
      )
    },
    {
      key: 'employer',
      label: 'Employer',
      icon: Briefcase,
      render: (value: string) => (
        <div className="text-base font-medium text-gray-800">{value}</div>
      )
    },
    {
      key: 'address',
      label: 'Work Address',
      icon: MapPin,
      render: (value: string) => (
        <div className="text-gray-700">{value}</div>
      )
    },
    {
      key: 'category',
      label: 'Agency Type',
      icon: Filter,
      render: (value: string) => (
        <Badge className={getCategoryBadgeColor(value)}>
          {value}
        </Badge>
      )
    },
    {
      key: 'phoneNumber',
      label: 'Phone Number',
      icon: Phone,
      render: (value: string) => (
        value ? (
          <a 
            href={`tel:${value}`}
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            {value}
          </a>
        ) : (
          <span className="text-gray-400">Not provided</span>
        )
      )
    },
    {
      key: 'id',
      label: 'Employment ID',
      icon: Calendar,
      render: (value: number) => (
        <div className="text-gray-600 font-mono">#{value}</div>
      )
    }
  ];

  return (
    <>
      <ReusableTable
        title="Employment Opportunities"
        description="Complete list of employment opportunities facilitated for constituents"
        data={employmentOpportunities}
        columns={columns}
        stats={stats}
        filters={{
          search: {
            placeholder: "Search employment...",
            fields: ['name', 'employer', 'address']
          },
          dropdowns: [
            {
              key: 'category',
              label: 'Category',
              options: categories
            }
          ]
        }}
        onExport={() => console.log('Export employment data')}
        onRowAction={handleViewDetails}
        actionButtonText="View Details"
        showExport={false}
      />

      {/* Details Modal */}
      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedEmployment}
        title="Employment Details"
        fields={modalFields}
      />
    </>
  );
}
