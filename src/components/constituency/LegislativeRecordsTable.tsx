'use client';

import { useState, useMemo } from 'react';
import { Calendar, FileText, Users, CheckCircle, Clock, AlertCircle, BookOpen, Gavel, MessageSquare, FileSearch, Send, CheckSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ReusableTable, type TableColumn, type StatCard } from '@/components/common/table-comp/ReusableTable';
import { DetailsModal } from '@/components/common/table-comp/DetailsModal';
import { legislativeRecords } from '@/data/legislativeRecords';

export function LegislativeRecordsTable() {
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique types and categories for filters
  const recordTypes = useMemo(() => {
    const uniqueTypes = [...new Set(legislativeRecords.map(r => r.type))];
    return uniqueTypes.map(type => ({
      key: 'type',
      label: type,
      value: type
    }));
  }, []);

  const recordCategories = useMemo(() => {
    const uniqueCategories = [...new Set(legislativeRecords.map(r => r.category))];
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
      label: 'Title',
      render: (value) => (
        <div className="font-medium text-gray-900">{value}</div>
      )
    },
    {
      key: 'type',
      label: 'Type',
      render: (value) => (
        <Badge className={getTypeBadgeColor(value)}>
          {getTypeIcon(value)} {value}
        </Badge>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <Badge className={getStatusBadgeColor(value)}>
          {value === 'Passed' ? (
            <><CheckCircle className="w-3 h-3 mr-1" />Passed</>
          ) : value === 'Pending' ? (
            <><Clock className="w-3 h-3 mr-1" />Pending</>
          ) : value === 'Ongoing' ? (
            <><Clock className="w-3 h-3 mr-1" />Ongoing</>
          ) : value === 'Referred' ? (
            <><AlertCircle className="w-3 h-3 mr-1" />Referred</>
          ) : (
            <><AlertCircle className="w-3 h-3 mr-1" />Withdrawn</>
          )}
        </Badge>
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
      key: 'committee',
      label: 'Committee',
      render: (value) => (
        <div className="text-gray-600 text-sm">{value || 'N/A'}</div>
      )
    }
  ];

  // Statistics cards
  const stats: StatCard[] = [
    {
      title: 'Total Records',
      value: legislativeRecords.length,
      description: 'Legislative activities',
      icon: FileText,
      iconColor: 'text-blue-600'
    },
    {
      title: 'Bills Sponsored',
      value: legislativeRecords.filter(r => r.type === 'Bill').length,
      description: 'Bills introduced',
      icon: BookOpen,
      iconColor: 'text-green-600'
    },
    {
      title: 'Passed Legislation',
      value: legislativeRecords.filter(r => r.status === 'Passed').length,
      description: 'Successfully passed',
      icon: CheckCircle,
      iconColor: 'text-purple-600'
    },
    {
      title: 'Committee Activities',
      value: legislativeRecords.filter(r => r.type === 'Committee').length,
      description: 'Committee oversight',
      icon: Users,
      iconColor: 'text-orange-600'
    }
  ];

  // Badge color helpers
  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'Bill':
        return 'bg-green-100 text-green-800';
      case 'Motion':
        return 'bg-blue-100 text-blue-800';
      case 'Committee':
        return 'bg-purple-100 text-purple-800';
      case 'Question':
        return 'bg-yellow-100 text-yellow-800';
      case 'Petition':
        return 'bg-orange-100 text-orange-800';
      case 'Resolution':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Passed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'Referred':
        return 'bg-orange-100 text-orange-800';
      case 'Withdrawn':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Youth':
        return 'bg-blue-100 text-blue-800';
      case 'Infrastructure':
        return 'bg-green-100 text-green-800';
      case 'Health':
        return 'bg-red-100 text-red-800';
      case 'Education':
        return 'bg-purple-100 text-purple-800';
      case 'Women':
        return 'bg-pink-100 text-pink-800';
      case 'Agriculture':
        return 'bg-yellow-100 text-yellow-800';
      case 'Security':
        return 'bg-gray-100 text-gray-800';
      case 'Economy':
        return 'bg-indigo-100 text-indigo-800';
      case 'Environment':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Bill':
        return <BookOpen className="w-3 h-3 mr-1" />;
      case 'Motion':
        return <Gavel className="w-3 h-3 mr-1" />;
      case 'Committee':
        return <Users className="w-3 h-3 mr-1" />;
      case 'Question':
        return <MessageSquare className="w-3 h-3 mr-1" />;
      case 'Petition':
        return <FileSearch className="w-3 h-3 mr-1" />;
      case 'Resolution':
        return <CheckSquare className="w-3 h-3 mr-1" />;
      default:
        return <FileText className="w-3 h-3 mr-1" />;
    }
  };

  // Handle view details
  const handleViewDetails = (record: any) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  // Modal fields configuration
  const modalFields = [
    {
      key: 'title',
      label: 'Title',
      icon: FileText,
      render: (value: string) => (
        <div className="text-lg font-semibold text-gray-900">{value}</div>
      )
    },
    {
      key: 'type',
      label: 'Type',
      icon: BookOpen,
      render: (value: string) => (
        <Badge className={getTypeBadgeColor(value)}>
          {getTypeIcon(value)} {value}
        </Badge>
      )
    },
    {
      key: 'status',
      label: 'Status',
      icon: CheckCircle,
      render: (value: string) => (
        <Badge className={getStatusBadgeColor(value)}>
          {value === 'Passed' ? (
            <><CheckCircle className="w-3 h-3 mr-1" />Passed</>
          ) : value === 'Pending' ? (
            <><Clock className="w-3 h-3 mr-1" />Pending</>
          ) : value === 'Ongoing' ? (
            <><Clock className="w-3 h-3 mr-1" />Ongoing</>
          ) : value === 'Referred' ? (
            <><AlertCircle className="w-3 h-3 mr-1" />Referred</>
          ) : (
            <><AlertCircle className="w-3 h-3 mr-1" />Withdrawn</>
          )}
        </Badge>
      )
    },
    {
      key: 'category',
      label: 'Category',
      icon: FileText,
      render: (value: string) => (
        <Badge className={getCategoryBadgeColor(value)}>
          {value}
        </Badge>
      )
    },
    {
      key: 'date',
      label: 'Date',
      icon: Calendar,
      render: (value: string) => (
        <div className="text-gray-600">{new Date(value).toLocaleDateString()}</div>
      )
    },
    {
      key: 'committee',
      label: 'Committee',
      icon: Users,
      render: (value: string) => (
        <div className="text-gray-700">{value || 'Not specified'}</div>
      )
    },
    {
      key: 'coSponsors',
      label: 'Co-Sponsors',
      icon: Users,
      render: (value: string[]) => (
        value && value.length > 0 ? (
          <div className="text-gray-700">
            {value.map((sponsor, index) => (
              <div key={index} className="text-sm">{sponsor}</div>
            ))}
          </div>
        ) : (
          <span className="text-gray-400">None</span>
        )
      )
    },
    {
      key: 'impact',
      label: 'Impact',
      icon: CheckCircle,
      render: (value: string) => (
        <div className="text-gray-700">{value || 'To be determined'}</div>
      )
    },
    {
      key: 'description',
      label: 'Description',
      icon: FileText,
      render: (value: string) => (
        <div className="text-gray-700">{value}</div>
      )
    }
  ];

  return (
    <>
      <ReusableTable
        title="Legislative Records"
        description="Complete list of legislative activities, bills, motions, and committee work"
        data={legislativeRecords}
        columns={columns}
        stats={stats}
        filters={{
          search: {
            placeholder: "Search legislative records...",
            fields: ['title', 'description', 'committee', 'impact']
          },
          dropdowns: [
            {
              key: 'type',
              label: 'Type',
              options: recordTypes
            },
            {
              key: 'category',
              label: 'Category',
              options: recordCategories
            },
            {
              key: 'status',
              label: 'Status',
              options: [
                { key: 'status', label: 'Passed', value: 'Passed', count: legislativeRecords.filter(r => r.status === 'Passed').length },
                { key: 'status', label: 'Pending', value: 'Pending', count: legislativeRecords.filter(r => r.status === 'Pending').length },
                { key: 'status', label: 'Ongoing', value: 'Ongoing', count: legislativeRecords.filter(r => r.status === 'Ongoing').length },
                { key: 'status', label: 'Referred', value: 'Referred', count: legislativeRecords.filter(r => r.status === 'Referred').length }
              ]
            }
          ]
        }}
        onRowAction={handleViewDetails}
        actionButtonText="View Details"
        showExport={false}
      />

      {/* Details Modal */}
      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedRecord}
        title="Legislative Record Details"
        fields={modalFields}
      />
    </>
  );
}
