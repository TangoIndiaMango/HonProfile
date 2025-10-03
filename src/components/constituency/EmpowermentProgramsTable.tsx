'use client';

import { DetailsModal } from '@/components/common/table-comp/DetailsModal';
import { ReusableTable, type StatCard, type TableColumn } from '@/components/common/table-comp/ReusableTable';
import { Badge } from '@/components/ui/badge';
import { empowermentPrograms } from '@/data/empowermentPrograms';
import { Award, Building, Calendar, Users } from 'lucide-react';
import { useMemo, useState } from 'react';

export function EmpowermentProgramsTable() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique categories for filter
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(empowermentPrograms.map(prog => prog.category))];
    return uniqueCategories.map(category => ({
      key: 'category',
      label: category,
      value: category
    }));
  }, []);

  // Table columns configuration
  const columns: TableColumn[] = [
    {
      key: 'title',
      label: 'Program Title',
      render: (value) => (
        <div className="font-medium text-gray-900">{value}</div>
      )
    },
    {
      key: 'partner',
      label: 'Partner',
      render: (value) => (
        <div className="text-gray-700">{value}</div>
      )
    },
    {
      key: 'date',
      label: 'Date',
      render: (value) => (
        <div className="text-gray-700 flex items-center gap-1">
          <Calendar className="w-4 h-4 text-gray-400" />
          {new Date(value).toLocaleDateString()}
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
      key: 'beneficiariesCount',
      label: 'Beneficiaries',
      render: (value) => (
        <div className="text-green-600 font-semibold">{value} people</div>
      )
    }
  ];

  // Statistics cards
  const stats: StatCard[] = [
    {
      title: 'Total Programs',
      value: empowermentPrograms.length,
      description: 'Empowerment programs',
      icon: Award,
      iconColor: 'text-blue-600'
    },
    {
      title: 'Total Beneficiaries',
      value: empowermentPrograms.reduce((sum, prog) => sum + (prog?.beneficiaryCount || 0), 0),
      description: 'People empowered',
      icon: Users,
      iconColor: 'text-green-600'
    },
    {
      title: 'Partnerships',
      value: [...new Set(empowermentPrograms.map(p => p.partner))].length,
      description: 'Partner organizations',
      icon: Building,
      iconColor: 'text-purple-600'
    }
  ];

  // Badge color helper
  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Partnership':
        return 'bg-blue-100 text-blue-800';
      case 'Education':
        return 'bg-green-100 text-green-800';
      case 'Empowerment':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle view details
  const handleViewDetails = (program: any) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  // Modal fields configuration
  const modalFields = [
    {
      key: 'title',
      label: 'Program Title',
      icon: Award,
      render: (value: string) => (
        <div className="text-lg font-semibold text-gray-900">{value}</div>
      )
    },
    {
      key: 'description',
      label: 'Description',
      icon: Building,
      render: (value: string) => (
        <div className="text-gray-700">{value}</div>
      )
    },
    {
      key: 'partner',
      label: 'Partner Organization',
      icon: Building,
      render: (value: string) => (
        <div className="text-base font-medium text-gray-800">{value}</div>
      )
    },
    {
      key: 'date',
      label: 'Program Date',
      icon: Calendar,
      render: (value: string) => (
        <div className="text-gray-600">{new Date(value).toLocaleDateString()}</div>
      )
    },
    {
      key: 'category',
      label: 'Category',
      icon: Award,
      render: (value: string) => (
        <Badge className={getCategoryBadgeColor(value)}>
          {value}
        </Badge>
      )
    },
    {
      key: 'beneficiariesCount',
      label: 'Number of Beneficiaries',
      icon: Users,
      render: (value: number) => (
        <div className="text-green-600 font-semibold text-lg">{value} people</div>
      )
    }
  ];

  return (
    <>
      <ReusableTable
        title="Empowerment Programs"
        description="Complete list of empowerment programs and initiatives for constituents"
        data={empowermentPrograms}
        columns={columns}
        stats={stats}
        filters={{
          search: {
            placeholder: "Search programs...",
            fields: ['title', 'partner', 'description']
          },
          dropdowns: [
            {
              key: 'category',
              label: 'Category',
              options: categories
            }
          ]
        }}
        onExport={() => console.log('Export programs data')}
        onRowAction={handleViewDetails}
        actionButtonText="View Details"
      />

      {/* Details Modal */}
      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedProgram}
        title="Program Details"
        fields={modalFields}
      />
    </>
  );
}
