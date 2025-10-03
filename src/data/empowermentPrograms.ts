export interface EmpowermentProgram {
  id: number;
  title: string;
  description: string;
  date: string;
  partner: string;
  category: 'npower' | 'credit_facility' | 'partnership' | 'scholarship' | 'bursary' | 'grant' | 'award';
  beneficiaryCount?: number;
  status: 'completed' | 'ongoing';
}

export const empowermentPrograms: EmpowermentProgram[] = [
  // NPOWER Program
  {
    id: 1,
    title: 'NPOWER Programme 2020/21',
    description: 'National Social Investment Programme providing employment and skills development',
    date: '2020-2021',
    partner: 'Federal Government',
    category: 'npower',
    beneficiaryCount: 0, // Will be filled from beneficiaries data
    status: 'completed'
  },
  {
    id: 2,
    title: 'NPOWER Independent Monitors',
    description: 'Independent monitoring of NPOWER programme implementation',
    date: '2020-2021',
    partner: 'Federal Government',
    category: 'npower',
    beneficiaryCount: 0,
    status: 'completed'
  },

  // CBN Credit Facility
  {
    id: 3,
    title: 'CBN Targeted Credit Facility (COVID-19 Loan)',
    description: 'Emergency credit facility for small businesses and farmers during COVID-19 pandemic',
    date: '2020-2021',
    partner: 'Central Bank of Nigeria',
    category: 'credit_facility',
    beneficiaryCount: 0,
    status: 'completed'
  },

  // Partnership Programs
  {
    id: 4,
    title: 'Empowerment with Nigeria Ports Authority (NPA)',
    description: 'Skills development and empowerment programme in partnership with NPA',
    date: '23rd January, 2020',
    partner: 'Nigeria Ports Authority',
    category: 'partnership',
    beneficiaryCount: 0,
    status: 'completed'
  },
  {
    id: 5,
    title: 'Empowerment with Nigerian Film Corporation (NFC)',
    description: 'Creative industry empowerment and skills development programme',
    date: '20th September, 2020',
    partner: 'Nigerian Film Corporation',
    category: 'partnership',
    beneficiaryCount: 0,
    status: 'completed'
  },
  {
    id: 6,
    title: 'Empowerment with Industrial Training Fund (ITF)',
    description: 'Technical skills training and industrial development programme',
    date: '6th August, 2021',
    partner: 'Industrial Training Fund',
    category: 'partnership',
    beneficiaryCount: 0,
    status: 'completed'
  },

  // Women Empowerment
  {
    id: 7,
    title: 'Grant for Women',
    description: 'Financial support and empowerment for women entrepreneurs and leaders',
    date: '2020-2021',
    partner: 'Federal Ministry of Humanitarian Affairs, Disaster Management and Social Development',
    category: 'grant',
    beneficiaryCount: 0,
    status: 'completed'
  },

  // Education Programs
  {
    id: 8,
    title: '2nd Batch Scholarship at Upland College of Education',
    description: 'Educational scholarship programme for indigent students at Upland College of Education, Ipesi Akoko',
    date: '2020-2021',
    partner: 'Upland College of Education',
    category: 'scholarship',
    beneficiaryCount: 0,
    status: 'completed'
  },
  {
    id: 9,
    title: 'Bursary Award for Undergraduates',
    description: 'Financial support for undergraduate students in tertiary institutions',
    date: '18th June, 2021',
    partner: 'Federal Government',
    category: 'bursary',
    beneficiaryCount: 0,
    status: 'completed'
  },

  // Professional Awards
  {
    id: 10,
    title: 'Lawyers Robe Award',
    description: 'Support for new lawyers with complete professional attire and equipment',
    date: '26th July, 2021',
    partner: 'Legal Profession',
    category: 'award',
    beneficiaryCount: 0,
    status: 'completed'
  }
];

export const programCategories = [
  { id: 'npower', label: 'NPOWER Programmes', count: 2 },
  { id: 'credit_facility', label: 'Credit Facilities', count: 1 },
  { id: 'partnership', label: 'Partnership Programmes', count: 3 },
  { id: 'scholarship', label: 'Scholarships', count: 1 },
  { id: 'bursary', label: 'Bursary Awards', count: 1 },
  { id: 'grant', label: 'Grants', count: 1 },
  { id: 'award', label: 'Professional Awards', count: 1 }
];
