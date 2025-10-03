'use client';

import { DetailsModal } from '@/components/common/table-comp/DetailsModal';
import { ReusableTable, type StatCard, type TableColumn } from '@/components/common/table-comp/ReusableTable';
import { Badge } from '@/components/ui/badge';
import { aideCategories, appointedAides } from '@/data/appointedAides';
import { Award, Calendar, Filter, MapPin, Phone, Shield, User, Users } from 'lucide-react';
import { useMemo, useState } from 'react';

export function AppointedAidesTable() {
  const [selectedAide, setSelectedAide] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ensure phone numbers are masked consistently when rendering
  const maskPhone = (input?: string) => {
    if (!input) return '';
    const digits = String(input).replace(/\D/g, '');
    if (digits.length >= 10) {
      return `${digits.slice(0, 3)}****${digits.slice(-4)}`;
    }
    return input;
  };

  // Get unique towns for filter
  const towns = useMemo(() => {
    const uniqueTowns = [...new Set(appointedAides.map(aide => aide.town))];
    return uniqueTowns.sort().map(town => ({
      key: 'town',
      label: town,
      value: town
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
      key: 'post',
      label: 'Post',
      render: (value) => (
        <div className="text-gray-700">{value}</div>
      )
    },
    {
      key: 'town',
      label: 'Town',
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
          {value.replace('_', ' ').toUpperCase()}
        </Badge>
      )
    },
    {
      key: 'phoneNumber',
      label: 'Phone',
      render: (value) => (
        value ? (
          <span className="flex items-center gap-1 text-gray-700">
            <Phone className="w-4 h-4 text-gray-400" />
            {maskPhone(value)}
          </span>
        ) : (
          <span className="text-gray-400">N/A</span>
        )
      )
    }
  ];

  // Statistics cards
  const stats: StatCard[] = [
    {
      title: 'Total Aides',
      value: appointedAides.length,
      description: 'Appointed positions',
      icon: Users,
      iconColor: 'text-blue-600'
    },
    {
      title: 'Filtered Results',
      value: appointedAides.length, // Will be updated dynamically
      description: 'Matching criteria',
      icon: Filter,
      iconColor: 'text-green-600'
    },
    {
      title: 'Towns Covered',
      value: towns.length,
      description: 'Different locations',
      icon: MapPin,
      iconColor: 'text-purple-600'
    }
  ];

  // Badge color helper
  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'leadership':
        return 'bg-blue-100 text-blue-800';
      case 'special_adviser':
        return 'bg-green-100 text-green-800';
      case 'personal_assistant':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle view details
  const handleViewDetails = (aide: any) => {
    setSelectedAide(aide);
    setIsModalOpen(true);
  };

  // Modal fields configuration
  const modalFields = [
    {
      key: 'name',
      label: 'Full Name',
      icon: User,
      render: (value: string) => (
        <div className="text-lg font-semibold text-gray-900">{value}</div>
      )
    },
    {
      key: 'post',
      label: 'Position/Post',
      icon: Shield,
      render: (value: string) => (
        <div className="text-base font-medium text-gray-800">{value}</div>
      )
    },
    {
      key: 'category',
      label: 'Category',
      icon: Award,
      render: (value: string) => (
        <Badge className={getCategoryBadgeColor(value)}>
          {value.replace('_', ' ').toUpperCase()}
        </Badge>
      )
    },
    {
      key: 'town',
      label: 'Town/Location',
      icon: MapPin,
      render: (value: string) => (
        <div className="text-gray-700">{value}</div>
      )
    },
    {
      key: 'phoneNumber',
      label: 'Phone Number',
      icon: Phone,
      render: (value: string) => (
        value ? (
          <span className="text-gray-700 font-medium">{maskPhone(value)}</span>
        ) : (
          <span className="text-gray-400">Not provided</span>
        )
      )
    },
    {
      key: 'id',
      label: 'ID Number',
      icon: Calendar,
      render: (value: number) => (
        <div className="text-gray-600 font-mono">#{value}</div>
      )
    }
  ];

  return (
    <>
      <ReusableTable
        title="Appointed Aides"
        description="Complete list of appointed aides and their roles in serving the constituency"
        data={appointedAides}
        columns={columns}
        stats={stats}
        filters={{
          search: {
            placeholder: "Search aides...",
            fields: ['name', 'post', 'town']
          },
          dropdowns: [
            {
              key: 'category',
              label: 'Category',
              options: aideCategories.map(cat => ({
                key: 'category',
                label: cat.label,
                value: cat.id,
                count: cat.count
              }))
            },
            {
              key: 'town',
              label: 'Town',
              options: towns
            }
          ]
        }}
        onExport={() => console.log('Export clicked')}
        showExport={false}
        onRowAction={handleViewDetails}
        actionButtonText="View Details"
      />

      {/* Details Modal */}
      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedAide}
        title="Aide Details"
        fields={modalFields}
      />
    </>
  );
}