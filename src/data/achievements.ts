export interface Achievement {
  id: number;
  category: string;
  title: string;
  description: string;
  number: string;
  unit: string;
  year: string;
  status: 'completed' | 'ongoing';
  details: string[];
}

export const achievements: Achievement[] = [
  // Infrastructure
  {
    id: 1,
    category: 'Infrastructure',
    title: 'Massive Renovation of Oka Town Hall',
    description: 'Complete renovation of the town hall along Palace Road, Ibaka, Oka Akoko',
    number: '1',
    unit: 'Town Hall',
    year: '2019',
    status: 'completed',
    details: ['Renovation of main hall', 'Improved facilities', 'Community access']
  },
  {
    id: 2,
    category: 'Infrastructure',
    title: 'Community Town Hall Construction',
    description: 'Facilitation and payment of counterpart funding for construction at Oka Odo',
    number: '1',
    unit: 'Town Hall',
    year: '2020',
    status: 'completed',
    details: ['World Bank assisted project', 'Community development', 'Local engagement']
  },
  {
    id: 3,
    category: 'Infrastructure',
    title: 'Ogbere Bridge Reconstruction',
    description: 'Reconstruction with retention walls and line drains at Agba Quarters',
    number: '1',
    unit: 'Bridge',
    year: '2021',
    status: 'completed',
    details: ['Retention walls', 'Line drains', 'Improved access']
  },
  {
    id: 4,
    category: 'Infrastructure',
    title: 'Awolowo Road Construction',
    description: 'Construction with erosion control line drains at Oba Akoko',
    number: '1',
    unit: 'Road',
    year: '2021',
    status: 'completed',
    details: ['Erosion control', 'Line drains', 'Community access']
  },
  {
    id: 5,
    category: 'Infrastructure',
    title: 'Central Mosque Renovation',
    description: 'Massive renovation of Central Mosque at Ose Oba',
    number: '1',
    unit: 'Mosque',
    year: '2021',
    status: 'completed',
    details: ['Complete renovation', 'Community facility', 'Religious center']
  },
  {
    id: 6,
    category: 'Infrastructure',
    title: 'Iwaro-Ayegunle Road',
    description: 'Construction of 7KM road connecting communities',
    number: '7',
    unit: 'KM',
    year: '2021-2022',
    status: 'ongoing',
    details: ['7KM road construction', 'Community connectivity', 'Economic development']
  },
  {
    id: 7,
    category: 'Infrastructure',
    title: 'Omioko Bridge Construction',
    description: 'Construction with retention walls at Omioko, Ikese, Oka Akoko',
    number: '1',
    unit: 'Bridge',
    year: '2022',
    status: 'completed',
    details: ['Retention walls', 'Community access', 'Infrastructure development']
  },
  {
    id: 8,
    category: 'Infrastructure',
    title: 'Palace Road Bridge',
    description: 'Construction of bridge and line drains along Palace Road, Ibaka',
    number: '1',
    unit: 'Bridge',
    year: '2022',
    status: 'completed',
    details: ['Line drains', 'Improved drainage', 'Community access']
  },
  {
    id: 9,
    category: 'Infrastructure',
    title: 'Okusa Market Bridge',
    description: 'Construction of bridge and line drains at Okusa market, Akungba',
    number: '1',
    unit: 'Bridge',
    year: '2022',
    status: 'completed',
    details: ['Market access', 'Line drains', 'Economic development']
  },
  {
    id: 10,
    category: 'Infrastructure',
    title: 'Ilegbe Quarters Infrastructure',
    description: 'Construction of box culverts and line drains at Ilegbe quarters, Ipe Akoko',
    number: '1',
    unit: 'Project',
    year: '2022',
    status: 'ongoing',
    details: ['Box culverts', 'Line drains', 'Community development']
  },
  {
    id: 11,
    category: 'Infrastructure',
    title: 'Oba Akoko Internal Roads',
    description: 'Construction of internal roads in Oba Akoko, Akoko South West LGA',
    number: '1',
    unit: 'Project',
    year: '2022',
    status: 'ongoing',
    details: ['Internal roads', 'Community connectivity', 'Local development']
  },
  {
    id: 12,
    category: 'Infrastructure',
    title: 'Epinmi/Ugbe Road Repairs',
    description: 'Special repairs of Epinmi/Ugbe Road in Akoko South East LGA',
    number: '1',
    unit: 'Road',
    year: '2022',
    status: 'ongoing',
    details: ['Road repairs', 'Community access', 'Infrastructure maintenance']
  },
  {
    id: 13,
    category: 'Infrastructure',
    title: 'Solar Powered Boreholes',
    description: 'Construction of industrial boreholes with 12,000 liters capacity',
    number: '7',
    unit: 'Boreholes',
    year: '2021',
    status: 'completed',
    details: ['Solar powered', '12,000 liters capacity', 'Multiple locations']
  },

  // Education
  {
    id: 14,
    category: 'Education',
    title: 'Christ High School Classroom Block',
    description: 'Construction of 6-classroom block at Christ High School, Egure, Supare Akoko',
    number: '6',
    unit: 'Classrooms',
    year: '2019-2022',
    status: 'completed',
    details: ['New classrooms', 'Educational facilities', 'Student capacity']
  },
  {
    id: 15,
    category: 'Education',
    title: 'Oludaye Grammar School Renovation',
    description: 'Renovation of Admin Block and Four Classrooms at Oludaye Grammar School',
    number: '4',
    unit: 'Classrooms',
    year: '2019-2022',
    status: 'completed',
    details: ['Admin block renovation', 'Classroom improvements', 'Educational facilities']
  },
  {
    id: 16,
    category: 'Education',
    title: 'Ayegunle High School Re-roofing',
    description: 'Re-roofing of Ayegunle High School, Ayegunle, Oka Akoko',
    number: '1',
    unit: 'School',
    year: '2019-2022',
    status: 'completed',
    details: ['Complete re-roofing', 'Infrastructure improvement', 'Educational facility']
  },
  {
    id: 17,
    category: 'Education',
    title: 'AC Grammar School Sports Pavilion',
    description: 'Reconstruction of Sports & Recreational Pavilion at AC Grammar School',
    number: '1',
    unit: 'Pavilion',
    year: '2019-2022',
    status: 'completed',
    details: ['Sports facilities', 'Recreational space', 'Student activities']
  },
  {
    id: 18,
    category: 'Education',
    title: 'Salvation Army Primary School Support',
    description: 'Provision of support for reconstruction of Salvation Army Primary School',
    number: '1',
    unit: 'School',
    year: '2019-2022',
    status: 'completed',
    details: ['School reconstruction', 'Educational support', 'Community development']
  },
  {
    id: 19,
    category: 'Education',
    title: 'Upland College Scholarship Program',
    description: '3-year Tuition Free Scholarship for 500 indigent students and teenage mothers',
    number: '500',
    unit: 'Scholarships',
    year: '2019-2022',
    status: 'completed',
    details: ['3-year program', 'Indigent students', 'Teenage mothers', 'Second-chance education']
  },
  {
    id: 20,
    category: 'Education',
    title: 'Classroom Furniture Distribution',
    description: 'Provision of furniture for 1,200 students and 50 teachers',
    number: '1200',
    unit: 'Students',
    year: '2019-2022',
    status: 'completed',
    details: ['Student furniture', 'Teacher furniture', 'Educational equipment']
  },
  {
    id: 21,
    category: 'Education',
    title: 'Computer Equipment Distribution',
    description: 'Provision of computers and printers for 8 secondary schools',
    number: '8',
    unit: 'Schools',
    year: '2019-2022',
    status: 'completed',
    details: ['Computer equipment', 'Printers', 'Technology access', 'Digital learning']
  },
  {
    id: 22,
    category: 'Education',
    title: 'Textbook Distribution',
    description: 'Distribution of 6,000 English and Science textbooks to all secondary schools',
    number: '6000',
    unit: 'Textbooks',
    year: '2019-2022',
    status: 'completed',
    details: ['English textbooks', 'Science textbooks', 'Educational resources', 'All schools']
  },
  {
    id: 23,
    category: 'Education',
    title: 'Bursary Award Program',
    description: 'Presentation of Bursary Award to 200 students in tertiary institutions',
    number: '200',
    unit: 'Students',
    year: '2021',
    status: 'completed',
    details: ['Tertiary students', 'Financial support', 'Educational assistance']
  },
  {
    id: 24,
    category: 'Education',
    title: 'Lawyer Apparel Support',
    description: 'Presentation of Complete Lawyer Apparels to 36 new Lawyers',
    number: '36',
    unit: 'Lawyers',
    year: '2021',
    status: 'completed',
    details: ['Professional support', 'Legal profession', 'Career development']
  }
];

export const achievementCategories = [
  'All',
  'Infrastructure',
  'Education',
  'Employment',
  'Electricity',
  'Welfare',
  'Human Development'
];

export const achievementStats = {
  totalProjects: 24,
  infrastructureProjects: 13,
  educationProjects: 11,
  scholarshipRecipients: 500,
  farmersSupported: 1000,
  monthlyAides: 85,
  textbooksDistributed: 6000,
  furnitureSets: 1200
};
