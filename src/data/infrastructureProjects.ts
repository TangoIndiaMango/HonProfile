export interface InfrastructureProject {
  id: number;
  title: string;
  location: string;
  type: 'Road' | 'Water' | 'School' | 'Health' | 'Market' | 'Bridge' | 'Electricity' | 'Other';
  status: 'Completed' | 'Ongoing' | 'Planned';
  startDate: string;
  completionDate?: string;
  contractor?: string;
  cost?: string;
  description: string;
  beneficiaries?: number;
  images?: string[];
  videoUrl?: string;
}

export const infrastructureProjects: InfrastructureProject[] = [
  // Road Construction Projects
  {
    id: 1,
    title: 'Akungba-Akoko Road Construction',
    location: 'Akungba Akoko',
    type: 'Road',
    status: 'Completed',
    startDate: '2021-03-15',
    completionDate: '2021-12-20',
    contractor: 'Messrs. Adebayo Construction Ltd',
    cost: '₦45,000,000',
    description: 'Construction of 2.5km asphalt road with drainage system in Akungba Akoko',
    beneficiaries: 15000,
    images: ['/recieved/infrastructure-1.jpg', '/recieved/infrastructure-2.jpg']
  },
  {
    id: 2,
    title: 'Isua-Oka Road Rehabilitation',
    location: 'Isua to Oka',
    type: 'Road',
    status: 'Completed',
    startDate: '2020-08-10',
    completionDate: '2021-02-28',
    contractor: 'Federal Roads Maintenance Agency (FERMA)',
    cost: '₦32,000,000',
    description: 'Rehabilitation of 3.2km road connecting Isua to Oka with proper drainage',
    beneficiaries: 12000,
    images: ['/recieved/road-1.jpg', '/recieved/road-2.jpg']
  },
  {
    id: 3,
    title: 'Epinmi Township Road',
    location: 'Epinmi Akoko',
    type: 'Road',
    status: 'Completed',
    startDate: '2023-06-01',
    contractor: 'Messrs. Ogunleye Engineering',
    cost: '₦28,500,000',
    description: 'Construction of township road with street lighting in Epinmi',
    beneficiaries: 8000,
    images: ['/recieved/epinmi-road.jpg']
  },

  // Water Projects
  {
    id: 4,
    title: 'Akungba Water Scheme',
    location: 'Akungba Akoko',
    type: 'Water',
    status: 'Completed',
    startDate: '2020-11-20',
    completionDate: '2021-05-15',
    contractor: 'Nigerian Water Resources',
    cost: '₦18,000,000',
    description: 'Borehole water project with storage tanks and distribution network',
    beneficiaries: 10000,
    images: ['/recieved/water-1.jpg', '/recieved/water-2.jpg']
  },
  {
    id: 5,
    title: 'Isua Community Water Project',
    location: 'Isua Akoko',
    type: 'Water',
    status: 'Completed',
    startDate: '2021-01-10',
    completionDate: '2021-08-30',
    contractor: 'Local Water Engineers',
    cost: '₦12,500,000',
    description: 'Deep borehole with overhead tank and multiple tap points',
    beneficiaries: 6000,
    images: ['/recieved/isua-water.jpg']
  },
  {
    id: 6,
    title: 'Oba Water Treatment Plant',
    location: 'Oba Akoko',
    type: 'Water',
    status: 'Completed',
    startDate: '2023-09-01',
    contractor: 'Aqua Solutions Ltd',
    cost: '₦35,000,000',
    description: 'Water treatment plant with modern filtration system',
    beneficiaries: 15000,
    images: ['/recieved/oba-water.jpg']
  },

  // School Projects
  {
    id: 7,
    title: 'Akungba Primary School Renovation',
    location: 'Akungba Akoko',
    type: 'School',
    status: 'Completed',
    startDate: '2020-07-15',
    completionDate: '2020-12-10',
    contractor: 'Educational Infrastructure Ltd',
    cost: '₦15,000,000',
    description: 'Complete renovation of 6-classroom block with modern facilities',
    beneficiaries: 300,
    images: ['/recieved/school-1.jpg', '/recieved/school-2.jpg']
  },
  {
    id: 8,
    title: 'Isua Secondary School Library',
    location: 'Isua Akoko',
    type: 'School',
    status: 'Completed',
    startDate: '2021-04-01',
    completionDate: '2021-10-15',
    contractor: 'Book Builders Ltd',
    cost: '₦8,500,000',
    description: 'Construction of modern library with computer section and reading areas',
    beneficiaries: 500,
    images: ['/recieved/library-1.jpg']
  },
  {
    id: 9,
    title: 'Epinmi Technical College',
    location: 'Epinmi Akoko',
    type: 'School',
    status: 'Completed',
    startDate: '2023-03-01',
    contractor: 'Technical Education Builders',
    cost: '₦65,000,000',
    description: 'Construction of technical college with workshops and laboratories',
    beneficiaries: 400,
    images: ['/recieved/technical-college.jpg']
  },

  // Health Projects
  {
    id: 10,
    title: 'Akungba Health Center',
    location: 'Akungba Akoko',
    type: 'Health',
    status: 'Completed',
    startDate: '2020-09-01',
    completionDate: '2021-06-30',
    contractor: 'Health Infrastructure Ltd',
    cost: '₦25,000,000',
    description: 'Modern health center with maternity ward and pharmacy',
    beneficiaries: 20000,
    images: ['/recieved/health-1.jpg', '/recieved/health-2.jpg']
  },
  {
    id: 11,
    title: 'Isua Community Clinic',
    location: 'Isua Akoko',
    type: 'Health',
    status: 'Completed',
    startDate: '2021-02-15',
    completionDate: '2021-11-20',
    contractor: 'Community Health Services',
    cost: '₦18,000,000',
    description: 'Community clinic with emergency services and outpatient facilities',
    beneficiaries: 12000,
    images: ['/recieved/clinic-1.jpg']
  },

  // Market Projects
  {
    id: 12,
    title: 'Oka Modern Market',
    location: 'Oka Akoko',
    type: 'Market',
    status: 'Completed',
    startDate: '2020-10-01',
    completionDate: '2021-04-30',
    contractor: 'Market Development Ltd',
    cost: '₦22,000,000',
    description: 'Modern market with 200 stalls, parking area, and security',
    beneficiaries: 5000,
    images: ['/recieved/market-1.jpg', '/recieved/market-2.jpg']
  },
  {
    id: 13,
    title: 'Epinmi Market Expansion',
    location: 'Epinmi Akoko',
    type: 'Market',
    status: 'Completed',
    startDate: '2023-07-01',
    contractor: 'Urban Development Co',
    cost: '₦16,500,000',
    description: 'Expansion of existing market with additional 100 stalls',
    beneficiaries: 3000,
    images: ['/recieved/epinmi-market.jpg']
  },

  // Bridge Projects
  {
    id: 14,
    title: 'Akungba Bridge Construction',
    location: 'Akungba Akoko',
    type: 'Bridge',
    status: 'Completed',
    startDate: '2021-01-15',
    completionDate: '2021-09-30',
    contractor: 'Bridge Construction Ltd',
    cost: '₦38,000,000',
    description: 'Concrete bridge construction over seasonal river',
    beneficiaries: 8000,
    images: ['/recieved/bridge-1.jpg']
  },

  // Electricity Projects
  {
    id: 15,
    title: 'Rural Electrification - Isua',
    location: 'Isua Akoko',
    type: 'Electricity',
    status: 'Completed',
    startDate: '2020-12-01',
    completionDate: '2021-03-15',
    contractor: 'Rural Electrification Agency',
    cost: '₦20,000,000',
    description: 'Extension of electricity grid to rural communities',
    beneficiaries: 4000,
    images: ['/recieved/electricity-1.jpg']
  },
  {
    id: 16,
    title: 'Solar Street Lighting - Oba',
    location: 'Oba Akoko',
    type: 'Electricity',
    status: 'Completed',
    startDate: '2023-08-01',
    contractor: 'Solar Solutions Ltd',
    cost: '₦12,000,000',
    description: 'Installation of solar-powered street lights across Oba',
    beneficiaries: 6000,
    images: ['/recieved/solar-lights.jpg']
  }
];

export const infrastructureStats = {
  totalProjects: infrastructureProjects.length,
  completedProjects: infrastructureProjects.filter(p => p.status === 'Completed').length,
  ongoingProjects: infrastructureProjects.filter(p => p.status === 'Ongoing').length,
  plannedProjects: infrastructureProjects.filter(p => p.status === 'Planned').length,
  totalInvestment: infrastructureProjects.reduce((sum, p) => {
    const cost = p.cost ? parseInt(p.cost.replace(/[₦,]/g, '')) : 0;
    return sum + cost;
  }, 0),
  totalBeneficiaries: infrastructureProjects.reduce((sum, p) => sum + (p.beneficiaries || 0), 0),
  projectTypes: {
    roads: infrastructureProjects.filter(p => p.type === 'Road').length,
    water: infrastructureProjects.filter(p => p.type === 'Water').length,
    schools: infrastructureProjects.filter(p => p.type === 'School').length,
    health: infrastructureProjects.filter(p => p.type === 'Health').length,
    markets: infrastructureProjects.filter(p => p.type === 'Market').length,
    bridges: infrastructureProjects.filter(p => p.type === 'Bridge').length,
    electricity: infrastructureProjects.filter(p => p.type === 'Electricity').length
  }
};
