// Main export file that combines all constituency service data
export { appointedAides, aideCategories } from './appointedAides';
export { employmentOpportunities, employmentCategories } from './employmentOpportunities';
export { empowermentPrograms, programCategories } from './empowermentPrograms';
export { beneficiaries, beneficiaryCategories, constituencyServiceStats } from './beneficiaries';

// Combined interfaces
export interface ConstituencyServiceData {
  appointedAides: any[];
  employmentOpportunities: any[];
  empowermentPrograms: any[];
  beneficiaries: any[];
  stats: {
    totalAides: number;
    totalEmployed: number;
    totalPrograms: number;
    totalBeneficiaries: number;
  };
}

// Navigation structure for constituency service
export const constituencyServiceNav = [
  {
    id: 'overview',
    label: 'Overview',
    path: '/constituency-service',
    description: 'Statistics and summary of constituency service'
  },
  {
    id: 'aides',
    label: 'Appointed Aides',
    path: '/constituency-service/aides',
    description: 'Complete list of appointed aides and their roles'
  },
  {
    id: 'employment',
    label: 'Employment Opportunities',
    path: '/constituency-service/employment',
    description: 'Youths employed in various government agencies'
  },
  {
    id: 'empowerment',
    label: 'Empowerment Programs',
    path: '/constituency-service/empowerment',
    description: 'Skills development and empowerment initiatives'
  },
  {
    id: 'beneficiaries',
    label: 'Beneficiaries',
    path: '/constituency-service/beneficiaries',
    description: 'All program beneficiaries and their details'
  }
];

// Search and filter options
export const searchFilters = {
  aides: {
    categories: ['leadership', 'special_adviser', 'legislative_aide', 'special_assistant', 'personal_assistant', 'office_staff'],
    towns: ['Akungba', 'Ibaka Oka', 'Epinmi', 'Iwaro', 'Isua', 'Ifira', 'Ayegunle Oka', 'Agba Oka', 'Supare', 'Oba'],
    posts: ['Chief of Staff', 'Special Adviser', 'Legislative Aide', 'Personal Assistant', 'Secretary']
  },
  employment: {
    categories: ['security', 'fire_service', 'immigration', 'army', 'navy', 'other'],
    employers: ['DSS', 'NPA', 'FMC', 'NIA', 'Nigerian Army', 'Federal Fire Service', 'NSCDC', 'Nigerian Navy', 'FRSC', 'Immigration Service', 'POLAC'],
    addresses: ['Akungba', 'Oba', 'Isua', 'Supare', 'Ikare', 'Ikun', 'Oka', 'Ipe', 'Ebo Oka', 'Owase Oka', 'Oka Odo', 'Ikanmu Oka']
  },
  programs: {
    categories: ['npower', 'credit_facility', 'partnership', 'scholarship', 'bursary', 'grant', 'award'],
    partners: ['Federal Government', 'Central Bank of Nigeria', 'Nigeria Ports Authority', 'Nigerian Film Corporation', 'Industrial Training Fund', 'Upland College of Education'],
    status: ['completed', 'ongoing']
  }
};
