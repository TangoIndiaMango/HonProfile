export interface Beneficiary {
  id: number;
  name: string;
  program: string;
  category: 'npower' | 'credit_facility' | 'partnership' | 'scholarship' | 'bursary' | 'grant' | 'award' | 'employment';
  date?: string;
  amount?: string;
  status: 'completed' | 'ongoing';
  town?: string;
  phoneNumber?: string;
  description?: string;
}

// Comprehensive beneficiary data for constituency service
export const beneficiaries: Beneficiary[] = [
  // NPOWER Beneficiaries
  {
    id: 1,
    name: 'Adeyemi Oluwaseun',
    program: 'NPOWER Programme 2020/21',
    category: 'npower',
    date: '2020-06-15',
    status: 'completed',
    town: 'Akungba',
    phoneNumber: '080****5678',
    description: 'NPOWER Batch C beneficiary - Teaching'
  },
  {
    id: 2,
    name: 'Ojo Blessing',
    program: 'NPOWER Programme 2020/21',
    category: 'npower',
    date: '2020-06-15',
    status: 'completed',
    town: 'Isua',
    phoneNumber: '081****6789',
    description: 'NPOWER Batch C beneficiary - Health'
  },
  {
    id: 3,
    name: 'Akinwale Tunde',
    program: 'NPOWER Programme 2020/21',
    category: 'npower',
    date: '2020-06-15',
    status: 'completed',
    town: 'Oba',
    phoneNumber: '082****7890',
    description: 'NPOWER Batch C beneficiary - Agriculture'
  },

  // CBN Credit Facility Beneficiaries
  {
    id: 4,
    name: 'Ajayi Funmi',
    program: 'CBN Targeted Credit Facility (COVID-19 Loan)',
    category: 'credit_facility',
    date: '2020-08-20',
    amount: '₦250,000',
    status: 'completed',
    town: 'Epinmi',
    phoneNumber: '083****8901',
    description: 'Small business loan for trading'
  },
  {
    id: 5,
    name: 'Ogunleye Kehinde',
    program: 'CBN Targeted Credit Facility (COVID-19 Loan)',
    category: 'credit_facility',
    date: '2020-08-20',
    amount: '₦500,000',
    status: 'completed',
    town: 'Supare',
    phoneNumber: '084****9012',
    description: 'Agricultural business loan'
  },

  // Partnership Program Beneficiaries
  {
    id: 6,
    name: 'Ogolo Adewale',
    program: 'Empowerment with Nigeria Ports Authority (NPA)',
    category: 'partnership',
    date: '2020-01-23',
    status: 'completed',
    town: 'Oka',
    phoneNumber: '070****3381',
    description: 'Port authority employment opportunity'
  },
  {
    id: 7,
    name: 'Olarinde Femi',
    program: 'Empowerment with Nigerian Film Corporation (NFC)',
    category: 'partnership',
    date: '2020-09-20',
    status: 'completed',
    town: 'Oba',
    phoneNumber: '080****4078',
    description: 'Film production skills training'
  },
  {
    id: 8,
    name: 'Emmanuel Abodunwa',
    program: 'Empowerment with Industrial Training Fund (ITF)',
    category: 'partnership',
    date: '2021-08-06',
    status: 'completed',
    town: 'Ikun',
    phoneNumber: '080****6185',
    description: 'Technical skills acquisition program'
  },

  // Education Beneficiaries
  {
    id: 9,
    name: 'Sasere Idris',
    program: '2nd Batch Scholarship at Upland College of Education',
    category: 'scholarship',
    date: '2020-09-15',
    status: 'completed',
    town: 'Isua',
    phoneNumber: '070****7924',
    description: 'Teacher education scholarship'
  },
  {
    id: 10,
    name: 'Oluwaseesin Victor',
    program: 'Bursary Award for Undergraduates',
    category: 'bursary',
    date: '2021-06-18',
    amount: '₦50,000',
    status: 'completed',
    town: 'Oka',
    phoneNumber: '081****0967',
    description: 'Undergraduate bursary support'
  },
  {
    id: 11,
    name: 'Bayode Femi',
    program: 'Postgraduate Scholarship',
    category: 'scholarship',
    date: '2021-03-10',
    status: 'completed',
    town: 'Oba',
    phoneNumber: '070****6943',
    description: 'Masters degree scholarship'
  },

  // Professional Awards
  {
    id: 12,
    name: 'Oriyomi Adejoro',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Akungba',
    phoneNumber: '080****3364',
    description: 'Professional robe for new lawyers'
  },
  {
    id: 13,
    name: 'Jato Alaba',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Supare',
    phoneNumber: '081****7156',
    description: 'Professional robe for new lawyers'
  },

  // Women Grants
  {
    id: 14,
    name: 'Apata Friday',
    program: 'Grant for Women',
    category: 'grant',
    date: '2020-11-15',
    amount: '₦100,000',
    status: 'completed',
    town: 'Oka',
    phoneNumber: '080****9913',
    description: 'Women entrepreneurship grant'
  },
  {
    id: 15,
    name: 'Musa Fatai',
    program: 'Grant for Women',
    category: 'grant',
    date: '2020-11-15',
    amount: '₦75,000',
    status: 'completed',
    town: 'Oba',
    phoneNumber: '081****7156',
    description: 'Women empowerment grant'
  },

  // Employment Beneficiaries
  {
    id: 16,
    name: 'Ogunniye Olusola',
    program: 'DSS Employment',
    category: 'employment',
    date: '2021-02-10',
    status: 'completed',
    town: 'Akungba',
    phoneNumber: '081****4441',
    description: 'Department of State Services employment'
  },
  {
    id: 17,
    name: 'Ajagunna Ganiyu',
    program: 'DSS Employment',
    category: 'employment',
    date: '2021-02-10',
    status: 'completed',
    town: 'Ikare',
    phoneNumber: '081****5025',
    description: 'Department of State Services employment'
  },
  {
    id: 18,
    name: 'Ajana Sherif-Deen',
    program: 'DSS Employment',
    category: 'employment',
    date: '2021-02-10',
    status: 'completed',
    town: 'Oba',
    phoneNumber: '080****3364',
    description: 'Department of State Services employment'
  }
];

export const beneficiaryCategories = [
  { id: 'npower', label: 'NPOWER Beneficiaries', count: beneficiaries.filter(b => b.category === 'npower').length },
  { id: 'credit_facility', label: 'Credit Facility Beneficiaries', count: beneficiaries.filter(b => b.category === 'credit_facility').length },
  { id: 'partnership', label: 'Partnership Program Beneficiaries', count: beneficiaries.filter(b => b.category === 'partnership').length },
  { id: 'scholarship', label: 'Scholarship Beneficiaries', count: beneficiaries.filter(b => b.category === 'scholarship').length },
  { id: 'bursary', label: 'Bursary Beneficiaries', count: beneficiaries.filter(b => b.category === 'bursary').length },
  { id: 'grant', label: 'Grant Beneficiaries', count: beneficiaries.filter(b => b.category === 'grant').length },
  { id: 'award', label: 'Award Beneficiaries', count: beneficiaries.filter(b => b.category === 'award').length },
  { id: 'employment', label: 'Employment Beneficiaries', count: beneficiaries.filter(b => b.category === 'employment').length }
];

// Statistics for dashboard
export const beneficiaryStats = {
  totalBeneficiaries: beneficiaries.length,
  npowerBeneficiaries: beneficiaries.filter(b => b.category === 'npower').length,
  creditFacilityBeneficiaries: beneficiaries.filter(b => b.category === 'credit_facility').length,
  partnershipBeneficiaries: beneficiaries.filter(b => b.category === 'partnership').length,
  scholarshipBeneficiaries: beneficiaries.filter(b => b.category === 'scholarship').length,
  bursaryBeneficiaries: beneficiaries.filter(b => b.category === 'bursary').length,
  grantBeneficiaries: beneficiaries.filter(b => b.category === 'grant').length,
  awardBeneficiaries: beneficiaries.filter(b => b.category === 'award').length,
  employmentBeneficiaries: beneficiaries.filter(b => b.category === 'employment').length,
  completedPrograms: beneficiaries.filter(b => b.status === 'completed').length,
  ongoingPrograms: beneficiaries.filter(b => b.status === 'ongoing').length,
  totalAmount: beneficiaries.reduce((sum, b) => {
    const amount = b.amount ? parseInt(b.amount.replace(/[₦,]/g, '')) : 0;
    return sum + amount;
  }, 0)
};

export const constituencyServiceStats = {
  totalAides: 68,
  totalEmployed: 37,
  totalPrograms: 10,
  totalBeneficiaries: beneficiaries.length,
  categories: {
    leadership: 7,
    specialAdvisers: 5,
    legislativeAides: 1,
    specialAssistants: 17,
    personalAssistants: 18,
    officeStaff: 20
  }
};
