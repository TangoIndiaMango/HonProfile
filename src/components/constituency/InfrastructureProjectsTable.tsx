'use client';

import { DetailsModal } from '@/components/common/table-comp/DetailsModal';
import { ReusableTable, type StatCard, type TableColumn } from '@/components/common/table-comp/ReusableTable';
import { Badge } from '@/components/ui/badge';
import { infrastructureProjects } from '@/data/infrastructureProjects';
import { AlertCircle, Building, Calendar, CheckCircle, Clock, MapPin, Wrench } from 'lucide-react';
import { useMemo, useState } from 'react';

export function InfrastructureProjectsTable() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique types and statuses for filters
  const projectTypes = useMemo(() => {
    const uniqueTypes = [...new Set(infrastructureProjects.map(p => p.type))];
    return uniqueTypes.map(type => ({
      key: 'type',
      label: type,
      value: type
    }));
  }, []);

  const projectStatuses = useMemo(() => {
    const uniqueStatuses = [...new Set(infrastructureProjects.map(p => p.status))];
    return uniqueStatuses.map(status => ({
      key: 'status',
      label: status,
      value: status
    }));
  }, []);

  // Table columns configuration
  const columns: TableColumn[] = [
    {
      key: 'title',
      label: 'Project Title',
      render: (value) => (
        <div className="font-medium text-gray-900">{value}</div>
      )
    },
    {
      key: 'location',
      label: 'Location',
      render: (value) => (
        <div className="text-gray-700 flex items-center gap-1">
          <MapPin className="w-4 h-4 text-gray-400" />
          {value}
        </div>
      )
    },
    {
      key: 'type',
      label: 'Type',
      render: (value) => (
        <Badge className={getTypeBadgeColor(value)}>
          {value}
        </Badge>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <Badge className={getStatusBadgeColor(value)}>
          {value === 'Completed' ? (
            <><CheckCircle className="w-3 h-3 mr-1" />Completed</>
          ) : value === 'Ongoing' ? (
            <><Clock className="w-3 h-3 mr-1" />Ongoing</>
          ) : (
            <><AlertCircle className="w-3 h-3 mr-1" />Planned</>
          )}
        </Badge>
      )
    },
    // {
    //   key: 'cost',
    //   label: 'Cost',
    //   render: (value) => (
    //     value ? (
    //       <div className="text-green-600 font-semibold">{value}</div>
    //     ) : (
    //       <span className="text-gray-400">TBD</span>
    //     )
    //   )
    // },
    // {
    //   key: 'beneficiaries',
    //   label: 'Beneficiaries',
    //   render: (value) => (
    //     <div className="text-blue-600 font-medium">{value?.toLocaleString() || 'N/A'}</div>
    //   )
    // }
  ];

  // Statistics cards
  const stats: StatCard[] = [
    {
      title: 'Total Projects',
      value: infrastructureProjects.length,
      description: 'Infrastructure projects',
      icon: Building,
      iconColor: 'text-blue-600'
    },
    {
      title: 'Completed Projects',
      value: infrastructureProjects.filter(p => p.status === 'Completed').length,
      description: 'Successfully completed',
      icon: CheckCircle,
      iconColor: 'text-green-600'
    },
    // {
    //   title: 'Total Investment',
    //   value: `₦${infrastructureProjects.reduce((sum, p) => {
    //     const cost = p.cost ? parseInt(p.cost.replace(/[₦,]/g, '')) : 0;
    //     return sum + cost;
    //   }, 0).toLocaleString()}`,
    //   description: 'Total project investment',
    //   icon: DollarSign,
    //   iconColor: 'text-purple-600'
    // },
    // {
    //   title: 'Total Beneficiaries',
    //   value: infrastructureProjects.reduce((sum, p) => sum + (p.beneficiaries || 0), 0).toLocaleString(),
    //   description: 'People served',
    //   icon: Users,
    //   iconColor: 'text-orange-600'
    // }
  ];

  // Badge color helpers
  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'Road':
        return 'bg-blue-100 text-blue-800';
      case 'Water':
        return 'bg-cyan-100 text-cyan-800';
      case 'School':
        return 'bg-green-100 text-green-800';
      case 'Health':
        return 'bg-red-100 text-red-800';
      case 'Market':
        return 'bg-yellow-100 text-yellow-800';
      case 'Bridge':
        return 'bg-purple-100 text-purple-800';
      case 'Electricity':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Ongoing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Planned':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle view details
  const handleViewDetails = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Modal fields configuration
  const modalFields = [
    {
      key: 'title',
      label: 'Project Title',
      icon: Building,
      render: (value: string) => (
        <div className="text-lg font-semibold text-gray-900">{value}</div>
      )
    },
    {
      key: 'location',
      label: 'Location',
      icon: MapPin,
      render: (value: string) => (
        <div className="text-gray-700">{value}</div>
      )
    },
    {
      key: 'type',
      label: 'Project Type',
      icon: Wrench,
      render: (value: string) => (
        <Badge className={getTypeBadgeColor(value)}>
          {value}
        </Badge>
      )
    },
    {
      key: 'status',
      label: 'Status',
      icon: CheckCircle,
      render: (value: string) => (
        <Badge className={getStatusBadgeColor(value)}>
          {value === 'Completed' ? (
            <><CheckCircle className="w-3 h-3 mr-1" />Completed</>
          ) : value === 'Ongoing' ? (
            <><Clock className="w-3 h-3 mr-1" />Ongoing</>
          ) : (
            <><AlertCircle className="w-3 h-3 mr-1" />Planned</>
          )}
        </Badge>
      )
    },
    {
      key: 'startDate',
      label: 'Start Date',
      icon: Calendar,
      render: (value: string) => (
        <div className="text-gray-600">{new Date(value).toLocaleDateString()}</div>
      )
    },
    {
      key: 'completionDate',
      label: 'Completion Date',
      icon: Calendar,
      render: (value: string) => (
        value ? (
          <div className="text-gray-600">{new Date(value).toLocaleDateString()}</div>
        ) : (
          <span className="text-gray-400">Not completed</span>
        )
      )
    },
    // {
    //   key: 'contractor',
    //   label: 'Contractor',
    //   icon: Building,
    //   render: (value: string) => (
    //     value ? (
    //       <div className="text-gray-700">{value}</div>
    //     ) : (
    //       <span className="text-gray-400">Not assigned</span>
    //     )
    //   )
    // },
    // {
    //   key: 'cost',
    //   label: 'Project Cost',
    //   icon: DollarSign,
    //   render: (value: string) => (
    //     value ? (
    //       <div className="text-green-600 font-semibold text-lg">{value}</div>
    //     ) : (
    //       <span className="text-gray-400">To be determined</span>
    //     )
    //   )
    // },
    // {
    //   key: 'beneficiaries',
    //   label: 'Number of Beneficiaries',
    //   icon: Users,
    //   render: (value: number) => (
    //     <div className="text-blue-600 font-semibold text-lg">{value?.toLocaleString() || 'Not specified'}</div>
    //   )
    // },
    {
      key: 'description',
      label: 'Project Description',
      icon: Building,
      render: (value: string) => (
        <div className="text-gray-700">{value}</div>
      )
    }
  ];

  return (
    <>
      <ReusableTable
        title="Infrastructure Projects"
        description="Complete list of infrastructure development projects and interventions"
        data={infrastructureProjects}
        columns={columns}
        stats={stats}
        filters={{
          search: {
            placeholder: "Search projects...",
            fields: ['title', 'location', 'description', 'contractor']
          },
          dropdowns: [
            {
              key: 'type',
              label: 'Project Type',
              options: projectTypes
            },
            {
              key: 'status',
              label: 'Status',
              options: projectStatuses
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
        data={selectedProject}
        title="Project Details"
        fields={modalFields}
      />
    </>
  );
}
