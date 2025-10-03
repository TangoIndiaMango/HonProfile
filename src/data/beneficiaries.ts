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

// Real beneficiary data from Hon. Ade Adeogun's constituency service records
export const beneficiaries: Beneficiary[] = [
  // Lawyers Robe Award Beneficiaries (26th July, 2021) - 62 beneficiaries
  {
    id: 1,
    name: 'Inumoh Oyekolapo',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Oka Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 2,
    name: 'Orimolade Aderonke Bukola',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Ibaka Oka',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 3,
    name: 'Olubunmi William Sunday',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Oka Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 4,
    name: 'Agbati Olawunmi Ayoola',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Epinmi',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 5,
    name: 'Alegbeleye Precious Oluwaseun',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Oka Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 6,
    name: 'Shaba James Oluwaseyi',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Oka Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 7,
    name: 'Oloeuntobi John Adeniyi',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Oka Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 8,
    name: 'Omoboriola Daniel Segun',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Ipe Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 9,
    name: 'Folayemi Oyindamola Helen',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Etioro Supare',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 10,
    name: 'Shaba Olamide David',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Isua Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },

  // COVID Rapid Response Grant Beneficiaries - 150 beneficiaries
  {
    id: 11,
    name: 'Bayode Ajayi',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Oba',
    phoneNumber: '080****4296',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 12,
    name: 'Ogunloba Olubunmi',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Oba',
    phoneNumber: '081****4266',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 13,
    name: 'Obasanmi Busayo',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Oba',
    phoneNumber: '081****1322',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 14,
    name: 'Damilola Abiola',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '090****5356',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 15,
    name: 'Emmanuel Ogunleye',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '091****0940',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 16,
    name: 'Ajayi Olatunde',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '070****7394',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 17,
    name: 'Munirat Asunmo',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '080****0870',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 18,
    name: 'Blessing Ademolu',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SE',
    phoneNumber: '090****3325',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 19,
    name: 'Michael Keru',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SE',
    phoneNumber: '080****8527',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 20,
    name: 'Banke Adeshina',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SE',
    phoneNumber: '070****0332',
    description: 'COVID-19 emergency support grant'
  }
];

export const beneficiaryCategories = [
  { id: 'award', label: 'Lawyers Robe Award', count: 62 },
  { id: 'grant', label: 'COVID Rapid Response Grant', count: 150 },
  { id: 'npower', label: 'NPOWER Beneficiaries', count: 0 },
  { id: 'credit_facility', label: 'Credit Facility Beneficiaries', count: 0 },
  { id: 'partnership', label: 'Partnership Program Beneficiaries', count: 0 },
  { id: 'scholarship', label: 'Scholarship Beneficiaries', count: 0 },
  { id: 'bursary', label: 'Bursary Beneficiaries', count: 0 },
  { id: 'employment', label: 'Employment Beneficiaries', count: 0 }
];

// Statistics for dashboard - Real numbers from constituency service records
export const beneficiaryStats = {
  totalBeneficiaries: 212, // 62 Lawyers Robe + 150 COVID Grant
  npowerBeneficiaries: 0,
  creditFacilityBeneficiaries: 0,
  partnershipBeneficiaries: 0,
  scholarshipBeneficiaries: 0,
  bursaryBeneficiaries: 0,
  grantBeneficiaries: 150, // COVID Rapid Response Grant
  awardBeneficiaries: 62, // Lawyers Robe Award
  employmentBeneficiaries: 0,
  completedPrograms: 212,
  ongoingPrograms: 0,
  totalAmount: 150 * 50000 // ₦7,500,000 for COVID grants
};

export const constituencyServiceStats = {
  totalAides: 68,
  totalEmployed: 37,
  totalPrograms: 10,
  totalBeneficiaries: 212, // Real number from constituency service records
  categories: {
    leadership: 7,
    specialAdvisers: 5,
    legislativeAides: 1,
    specialAssistants: 17,
    personalAssistants: 18,
    officeStaff: 20
  }
};
