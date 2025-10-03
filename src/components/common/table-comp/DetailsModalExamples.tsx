'use client';

import { Badge } from '@/components/ui/badge';
import { Award, Building, Calendar, DollarSign, MapPin, Phone, Shield, User } from 'lucide-react';
import { useState } from 'react';
import { DetailsModal } from './DetailsModal';

// Example 1: Aide Details Modal
export function AideDetailsExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  const aideData = {
    id: 1,
    name: 'Chief Bolakale Daodu',
    post: 'Chief of Staff',
    category: 'leadership',
    town: 'Akungba',
    phoneNumber: '08169462684'
  };

  const aideFields = [
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
        <Badge className="bg-blue-100 text-blue-800">
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
        <a 
          href={`tel:${value}`}
          className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
        >
          {value}
        </a>
      )
    }
  ];

  return (
    <div className="p-4">
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Aide Details
      </button>
      
      <DetailsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={aideData}
        title="Aide Details"
        fields={aideFields}
      />
    </div>
  );
}

// Example 2: Employment Details Modal
export function EmploymentDetailsExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  const employmentData = {
    id: 1,
    name: 'OGOLO ADEWALE .J.',
    employer: 'DSS',
    address: 'OWALUSI OKA',
    phoneNumber: '07037753381',
    category: 'Security Agencies',
    position: 'Security Officer',
    salary: '₦150,000',
    startDate: '2023-01-15'
  };

  const employmentFields = [
    {
      key: 'name',
      label: 'Employee Name',
      icon: User,
      render: (value: string) => (
        <div className="text-lg font-semibold text-gray-900">{value}</div>
      )
    },
    {
      key: 'employer',
      label: 'Employer',
      icon: Building,
      render: (value: string) => (
        <div className="text-base font-medium text-gray-800">{value}</div>
      )
    },
    {
      key: 'position',
      label: 'Position',
      icon: Shield,
      render: (value: string) => (
        <div className="text-gray-700">{value}</div>
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
      key: 'phoneNumber',
      label: 'Phone Number',
      icon: Phone,
      render: (value: string) => (
        <a 
          href={`tel:${value}`}
          className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
        >
          {value}
        </a>
      )
    },
    {
      key: 'category',
      label: 'Agency Type',
      icon: Award,
      render: (value: string) => (
        <Badge className="bg-red-100 text-red-800">{value}</Badge>
      )
    },
    {
      key: 'salary',
      label: 'Salary',
      icon: DollarSign,
      render: (value: string) => (
        <div className="text-green-600 font-semibold">{value}</div>
      )
    },
    {
      key: 'startDate',
      label: 'Start Date',
      icon: Calendar,
      render: (value: string) => (
        <div className="text-gray-600">{new Date(value).toLocaleDateString()}</div>
      )
    }
  ];

  return (
    <div className="p-4">
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        View Employment Details
      </button>
      
      <DetailsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={employmentData}
        title="Employment Details"
        fields={employmentFields}
      />
    </div>
  );
}

// Example 3: Program Details Modal
export function ProgramDetailsExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  const programData = {
    id: 1,
    title: 'Youth Empowerment Program',
    description: 'Skills acquisition and entrepreneurship training for young people',
    partner: 'Federal Ministry of Youth Development',
    date: '2023-06-15',
    category: 'Empowerment',
    beneficiariesCount: 150,
    duration: '6 months',
    location: 'Akungba Community Center'
  };

  const programFields = [
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
      icon: Shield,
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
        <Badge className="bg-purple-100 text-purple-800">{value}</Badge>
      )
    },
    {
      key: 'beneficiariesCount',
      label: 'Number of Beneficiaries',
      icon: User,
      render: (value: number) => (
        <div className="text-green-600 font-semibold text-lg">{value} people</div>
      )
    },
    {
      key: 'duration',
      label: 'Duration',
      icon: Calendar,
      render: (value: string) => (
        <div className="text-gray-600">{value}</div>
      )
    },
    {
      key: 'location',
      label: 'Location',
      icon: MapPin,
      render: (value: string) => (
        <div className="text-gray-700">{value}</div>
      )
    }
  ];

  return (
    <div className="p-4">
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        View Program Details
      </button>
      
      <DetailsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={programData}
        title="Program Details"
        fields={programFields}
      />
    </div>
  );
}
