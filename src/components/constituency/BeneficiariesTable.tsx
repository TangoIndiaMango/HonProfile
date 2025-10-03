'use client';

import { useState, useMemo } from 'react';
import {
  Phone,
  MapPin,
  Users,
  Filter,
  Calendar,
  Award,
  DollarSign,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  ReusableTable,
  type TableColumn,
  type StatCard,
} from '@/components/common/table-comp/ReusableTable';
import { DetailsModal } from '@/components/common/table-comp/DetailsModal';
import { beneficiaries, beneficiaryCategories } from '@/data/beneficiaries';

export function BeneficiariesTable() {
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Table columns configuration
  const columns: TableColumn[] = [
    {
      key: 'name',
      label: 'Name',
      render: value => <div className="font-medium text-gray-900">{value}</div>,
    },
    {
      key: 'program',
      label: 'Program',
      render: value => <div className="text-gray-700 text-sm">{value}</div>,
    },
    {
      key: 'category',
      label: 'Category',
      render: value => (
        <Badge className={getCategoryBadgeColor(value)}>
          {value.replace('_', ' ').toUpperCase()}
        </Badge>
      ),
    },
    {
      key: 'town',
      label: 'Town',
      render: value => (
        <div className="text-gray-700 flex items-center gap-1">
          <MapPin className="w-4 h-4 text-gray-400" />
          {value}
        </div>
      ),
    },
    {
      key: 'amount',
      label: 'Amount',
      render: value =>
        value ? (
          <div className="text-green-600 font-semibold">{value}</div>
        ) : (
          <span className="text-gray-400">N/A</span>
        ),
    },
    {
      key: 'status',
      label: 'Status',
      render: value => (
        <Badge className={getStatusBadgeColor(value)}>
          {value === 'completed' ? (
            <>
              <CheckCircle className="w-3 h-3 mr-1" />
              Completed
            </>
          ) : (
            <>
              <Clock className="w-3 h-3 mr-1" />
              Ongoing
            </>
          )}
        </Badge>
      ),
    },
  ];

  // Statistics cards
  const stats: StatCard[] = [
    {
      title: 'Total Beneficiaries',
      value: beneficiaries.length,
      description: 'People served',
      icon: Users,
      iconColor: 'text-blue-600',
    },
    {
      title: 'Completed Programs',
      value: beneficiaries.filter(b => b.status === 'completed').length,
      description: 'Successfully completed',
      icon: CheckCircle,
      iconColor: 'text-green-600',
    },
    {
      title: 'Total Investment',
      value: `₦${beneficiaries
        .reduce((sum, b) => {
          const amount = b.amount ? parseInt(b.amount.replace(/[₦,]/g, '')) : 0;
          return sum + amount;
        }, 0)
        .toLocaleString()}`,
      description: 'Total amount invested',
      icon: DollarSign,
      iconColor: 'text-purple-600',
    },
  ];

  // Badge color helpers
  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'npower':
        return 'bg-blue-100 text-blue-800';
      case 'credit_facility':
        return 'bg-green-100 text-green-800';
      case 'partnership':
        return 'bg-purple-100 text-purple-800';
      case 'scholarship':
        return 'bg-yellow-100 text-yellow-800';
      case 'bursary':
        return 'bg-orange-100 text-orange-800';
      case 'grant':
        return 'bg-pink-100 text-pink-800';
      case 'award':
        return 'bg-indigo-100 text-indigo-800';
      case 'employment':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle view details
  const handleViewDetails = (beneficiary: any) => {
    setSelectedBeneficiary(beneficiary);
    setIsModalOpen(true);
  };

  // Modal fields configuration
  const modalFields = [
    {
      key: 'name',
      label: 'Beneficiary Name',
      icon: Users,
      render: (value: string) => (
        <div className="text-lg font-semibold text-gray-900">{value}</div>
      ),
    },
    {
      key: 'program',
      label: 'Program',
      icon: Award,
      render: (value: string) => (
        <div className="text-base font-medium text-gray-800">{value}</div>
      ),
    },
    {
      key: 'category',
      label: 'Category',
      icon: Filter,
      render: (value: string) => (
        <Badge className={getCategoryBadgeColor(value)}>
          {value.replace('_', ' ').toUpperCase()}
        </Badge>
      ),
    },
    {
      key: 'town',
      label: 'Town/Location',
      icon: MapPin,
      render: (value: string) => <div className="text-gray-700">{value}</div>,
    },
    {
      key: 'phoneNumber',
      label: 'Phone Number',
      icon: Phone,
      render: (value: string) =>
        value ? (
          <a
            href={`tel:${value}`}
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            {value}
          </a>
        ) : (
          <span className="text-gray-400">Not provided</span>
        ),
    },
    {
      key: 'amount',
      label: 'Amount/Value',
      icon: DollarSign,
      render: (value: string) =>
        value ? (
          <div className="text-green-600 font-semibold text-lg">{value}</div>
        ) : (
          <span className="text-gray-400">No monetary value</span>
        ),
    },
    {
      key: 'date',
      label: 'Program Date',
      icon: Calendar,
      render: (value: string) => (
        <div className="text-gray-600">
          {new Date(value).toLocaleDateString()}
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      icon: CheckCircle,
      render: (value: string) => (
        <Badge className={getStatusBadgeColor(value)}>
          {value === 'completed' ? (
            <>
              <CheckCircle className="w-3 h-3 mr-1" />
              Completed
            </>
          ) : (
            <>
              <Clock className="w-3 h-3 mr-1" />
              Ongoing
            </>
          )}
        </Badge>
      ),
    },
    {
      key: 'description',
      label: 'Description',
      icon: Award,
      render: (value: string) => <div className="text-gray-700">{value}</div>,
    },
  ];

  return (
    <>
      <ReusableTable
        title="Beneficiaries"
        description="Complete list of beneficiaries from various constituency service programs"
        data={beneficiaries}
        columns={columns}
        stats={stats}
        filters={{
          search: {
            placeholder: 'Search beneficiaries...',
            fields: ['name', 'program', 'town', 'description'],
          },
          dropdowns: [
            {
              key: 'category',
              label: 'Category',
              options: beneficiaryCategories.map(cat => ({
                key: 'category',
                label: cat.label,
                value: cat.id,
                count: cat.count,
              })),
            },
            {
              key: 'status',
              label: 'Status',
              options: [
                {
                  key: 'status',
                  label: 'Completed',
                  value: 'completed',
                  count: beneficiaries.filter(b => b.status === 'completed')
                    .length,
                },
                {
                  key: 'status',
                  label: 'Ongoing',
                  value: 'ongoing',
                  count: beneficiaries.filter(b => b.status === 'ongoing')
                    .length,
                },
              ],
            },
          ],
        }}
        onExport={() => console.log('Export beneficiaries data')}
        onRowAction={handleViewDetails}
        actionButtonText="View Details"
        showExport={false}
      />

      {/* Details Modal */}
      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedBeneficiary}
        title="Beneficiary Details"
        fields={modalFields}
      />
    </>
  );
}
