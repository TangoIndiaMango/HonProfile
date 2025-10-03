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
  // Real Empowerment Programs from Hon. Ade Adeogun's constituency service records
  
  // NPOWER Program
  {
    id: 1,
    title: 'NPOWER Programme 2020/21',
    description: 'Facilitation of the enlistment of One Hundred and Five (105) constituent members for the NPower Programme of the Federal Government',
    date: '2020-2021',
    partner: 'Federal Government',
    category: 'npower',
    beneficiaryCount: 105,
    status: 'completed'
  },

  // CBN Credit Facility
  {
    id: 2,
    title: 'CBN Targeted Credit Facility (COVID-19 Loan)',
    description: 'Facilitation of Targeted Credit Facility (Covid-19 Loans) ranging between N100,000 to N500,000 to 200 local farmers and small business owners',
    date: 'June 2020',
    partner: 'Central Bank of Nigeria',
    category: 'credit_facility',
    beneficiaryCount: 200,
    status: 'completed'
  },

  // Partnership Programs
  {
    id: 3,
    title: 'Empowerment with Nigeria Ports Authority (NPA)',
    description: 'Distribution of support equipment for 150 constituent members. Beneficiaries include Fashion Designers, Barbers and Hairdressers',
    date: '23rd January, 2020',
    partner: 'Nigeria Ports Authority',
    category: 'partnership',
    beneficiaryCount: 150,
    status: 'completed'
  },
  {
    id: 4,
    title: 'Empowerment with Nigerian Film Corporation (NFC)',
    description: 'Distribution of start-up and support equipment for 150 members in Creative Industry. Beneficiaries include Fashion Designers, Hairdressers, Photo & Videographers, Barbers, Music Artistes, Sandcrete Block Makers and Disk Jockeys',
    date: '20th September, 2020',
    partner: 'Nigerian Film Corporation',
    category: 'partnership',
    beneficiaryCount: 150,
    status: 'completed'
  },
  {
    id: 5,
    title: 'Empowerment with Industrial Training Fund (ITF)',
    description: 'Distribution of support equipment for 120 constituent members. Beneficiaries include Fashion Designers, Carpenters, Event Planners, Aluminum Fabricators and Hairdressers',
    date: '6th August, 2021',
    partner: 'Industrial Training Fund',
    category: 'partnership',
    beneficiaryCount: 120,
    status: 'completed'
  },

  // Support for Artisans and Farmers
  {
    id: 6,
    title: 'Farm Tools and Agrochemicals Distribution',
    description: 'Provision of farm tools and agrochemicals for One Thousand (1,000) farmers across the Federal Constituency to boost farming and crop production',
    date: 'February 2021',
    partner: 'Agricultural Development',
    category: 'grant',
    beneficiaryCount: 1000,
    status: 'completed'
  },

  // Women Empowerment
  {
    id: 7,
    title: 'Women Grant',
    description: 'Nomination and enlistment of Thirty (30) women of the Federal Constituency for Women Grant (N20,000) under the Federal Ministry of Humanitarian Affairs, Disaster Management and Social Development',
    date: 'April 2021',
    partner: 'Federal Ministry of Humanitarian Affairs, Disaster Management and Social Development',
    category: 'grant',
    beneficiaryCount: 30,
    status: 'completed'
  },

  // COVID-19 Support
  {
    id: 8,
    title: 'COVID-19 Rapid Response Grant',
    description: 'Nomination and enlistment of One Hundred and Fifty (150) members of the Federal Constituency for Covid-19 Rapid Response Grant (N5,000 monthly stipend)',
    date: 'October 2021',
    partner: 'Federal Government',
    category: 'grant',
    beneficiaryCount: 150,
    status: 'completed'
  },

  // Survival Fund
  {
    id: 9,
    title: 'Survival Fund Scheme',
    description: 'Nomination and enlistment of One Hundred and Sixty (60) Beneficiaries for Survival Fund Scheme (N30,000) of the Federal Government',
    date: '2021',
    partner: 'Federal Government',
    category: 'grant',
    beneficiaryCount: 60,
    status: 'completed'
  },

  // Tradermoni Programs
  {
    id: 10,
    title: 'Tradermoni, Marketmoni and Farmermoni',
    description: 'Nomination and enlistment of Seventy Five (75) Beneficiaries for Tradermoni, Marketmoni and Farmermoni programmes of the Federal Government',
    date: '2021',
    partner: 'Federal Government',
    category: 'grant',
    beneficiaryCount: 75,
    status: 'completed'
  },

  // Education Programs
  {
    id: 11,
    title: '2nd Batch Scholarship at Upland College of Education',
    description: 'Provision of 3-year Tuition Free Scholarship for Five Hundred (500) indigent students and teenage mothers at Upland College of Education, Ipesi Akoko',
    date: '2020-2021',
    partner: 'Upland College of Education',
    category: 'scholarship',
    beneficiaryCount: 500,
    status: 'completed'
  },
  {
    id: 12,
    title: 'Bursary Award for Undergraduates',
    description: 'Presentation of Bursary Award to Two Hundred (200) students of the Federal Constituency schooling in various tertiary institutions',
    date: '18th June, 2021',
    partner: 'Federal Government',
    category: 'bursary',
    beneficiaryCount: 200,
    status: 'completed'
  },

  // Professional Awards
  {
    id: 13,
    title: 'Lawyers Robe Award',
    description: 'Presentation of Complete Lawyer Apparels to Thirty Six (36) new Lawyers from Akoko South East/South West Federal Constituency',
    date: '26th July, 2021',
    partner: 'Legal Profession',
    category: 'award',
    beneficiaryCount: 36,
    status: 'completed'
  },

  // NEMA Relief
  {
    id: 14,
    title: 'NEMA Relief for Fire and Accident Victims',
    description: 'Facilitation of the provision of relief (food, textile and building materials) for One Thousand (1,000) households of fire and accident victims and their relations in Akungba and Iwaro Communities by the National Emergency Management Agency, NEMA',
    date: 'February 2021',
    partner: 'National Emergency Management Agency (NEMA)',
    category: 'grant',
    beneficiaryCount: 1000,
    status: 'completed'
  }
];

export const programCategories = [
  { id: 'npower', label: 'NPOWER Programmes', count: 1 },
  { id: 'credit_facility', label: 'Credit Facilities', count: 1 },
  { id: 'partnership', label: 'Partnership Programmes', count: 3 },
  { id: 'scholarship', label: 'Scholarships', count: 1 },
  { id: 'bursary', label: 'Bursary Awards', count: 1 },
  { id: 'grant', label: 'Grants', count: 6 },
  { id: 'award', label: 'Professional Awards', count: 1 }
];
