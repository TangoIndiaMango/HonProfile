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
  // Real Infrastructure Projects from Hon. Ade Adeogun's records
  {
    id: 1,
    title: 'Oka Town Hall Renovation',
    location: 'Ibaka, Oka Akoko',
    type: 'Other',
    status: 'Completed',
    startDate: '2019-07-01',
    completionDate: '2019-07-31',
    description: 'Massive renovation of Oka Town Hall along Palace Road',
    images: ['/recieved/oka-town-hall.jpg']
  },
  {
    id: 2,
    title: 'Community Town Hall Construction',
    location: 'Oka Odo, Oka Akoko',
    type: 'Other',
    status: 'Completed',
    startDate: '2020-07-01',
    completionDate: '2020-07-31',
    description: 'Facilitation and payment of counterpart funding for the construction of Community Town Hall by Community and Social Development Agency (World Bank Assisted)',
    images: ['/recieved/community-town-hall.jpg']
  },
  {
    id: 3,
    title: 'Ogbere Bridge Reconstruction',
    location: 'Agba Quarters, Oka Akoko',
    type: 'Bridge',
    status: 'Completed',
    startDate: '2021-06-01',
    completionDate: '2021-06-30',
    description: 'Reconstruction of Ogbere bridge with retention walls and line drains',
    images: ['/recieved/ogbere-bridge.jpg']
  },
  {
    id: 4,
    title: 'Awolowo Road Construction',
    location: 'Oba Akoko',
    type: 'Road',
    status: 'Completed',
    startDate: '2021-06-01',
    completionDate: '2021-06-30',
    description: 'Construction of Awolowo Road with erosion control line drains',
    images: ['/recieved/awolowo-road.jpg']
  },
  {
    id: 5,
    title: 'Central Mosque Renovation',
    location: 'Ose Oba',
    type: 'Other',
    status: 'Completed',
    startDate: '2021-10-01',
    completionDate: '2021-10-31',
    description: 'Massive renovation of Central Mosque at Ose Oba',
    images: ['/recieved/central-mosque.jpg']
  },
  {
    id: 6,
    title: 'Iwaro-Ayegunle Road Construction',
    location: 'Iwaro to Ayegunle',
    type: 'Road',
    status: 'Ongoing',
    startDate: '2022-01-01',
    description: 'Construction of 7KM Iwaro-Ayegunle Road',
    images: ['/recieved/iwaro-ayegunle-road.jpg']
  },
  {
    id: 7,
    title: 'Omioko Bridge Construction',
    location: 'Omioko, Ikese, Oka Akoko',
    type: 'Bridge',
    status: 'Completed',
    startDate: '2022-02-01',
    completionDate: '2022-02-28',
    description: 'Construction of Omioko bridge with retention walls',
    images: ['/recieved/omioko-bridge.jpg']
  },
  {
    id: 8,
    title: 'Palace Road Bridge Construction',
    location: 'Ibaka, Oka Akoko',
    type: 'Bridge',
    status: 'Completed',
    startDate: '2022-02-01',
    completionDate: '2022-02-28',
    description: 'Construction of bridge and lines drains along Palace Road',
    images: ['/recieved/palace-road-bridge.jpg']
  },
  {
    id: 9,
    title: 'Okusa Market Bridge Construction',
    location: 'Akungba Akoko',
    type: 'Bridge',
    status: 'Completed',
    startDate: '2022-02-01',
    completionDate: '2022-02-28',
    description: 'Construction of bridge and line drains at Okusa market, beside Community Town Hall',
    images: ['/recieved/okusa-market-bridge.jpg']
  },
  {
    id: 10,
    title: 'Ilegbe Quarters Box Culverts',
    location: 'Ipe Akoko',
    type: 'Bridge',
    status: 'Ongoing',
    startDate: '2022-03-01',
    description: 'Construction of box culverts and line drains at Ilegbe quarters',
    images: ['/recieved/ilegbe-culverts.jpg']
  },
  {
    id: 11,
    title: 'Oba Akoko Internal Roads',
    location: 'Oba Akoko, Akoko South West LGA',
    type: 'Road',
    status: 'Ongoing',
    startDate: '2022-03-01',
    description: 'Construction of internal roads of Oba Akoko',
    images: ['/recieved/oba-internal-roads.jpg']
  },
  {
    id: 12,
    title: 'Epinmi/Ugbe Road Repairs',
    location: 'Akoko South East LGA',
    type: 'Road',
    status: 'Ongoing',
    startDate: '2022-03-01',
    description: 'Facilitation of the Special Repairs of Epinmi/Ugbe Road',
    images: ['/recieved/epinmi-ugbe-road.jpg']
  },
  {
    id: 13,
    title: 'Solar Powered Boreholes',
    location: 'Isua, Ifira, Ibaka, Idofin, Akungba, Supare and Oba Akoko',
    type: 'Water',
    status: 'Completed',
    startDate: '2021-01-01',
    completionDate: '2021-01-31',
    description: 'Construction of industrial (solar powered) boreholes with 12,000 liters capacity',
    images: ['/recieved/solar-boreholes.jpg']
  }
];

export const infrastructureStats = {
  totalProjects: infrastructureProjects.length,
  completedProjects: infrastructureProjects.filter(p => p.status === 'Completed').length,
  ongoingProjects: infrastructureProjects.filter(p => p.status === 'Ongoing').length,
  plannedProjects: infrastructureProjects.filter(p => p.status === 'Planned').length,
  totalInvestment: 0, // Cost information not available in source documents
  totalBeneficiaries: 0, // Beneficiary numbers not specified in source documents
  projectTypes: {
    roads: infrastructureProjects.filter(p => p.type === 'Road').length,
    water: infrastructureProjects.filter(p => p.type === 'Water').length,
    schools: infrastructureProjects.filter(p => p.type === 'School').length,
    health: infrastructureProjects.filter(p => p.type === 'Health').length,
    markets: infrastructureProjects.filter(p => p.type === 'Market').length,
    bridges: infrastructureProjects.filter(p => p.type === 'Bridge').length,
    electricity: infrastructureProjects.filter(p => p.type === 'Electricity').length,
    other: infrastructureProjects.filter(p => p.type === 'Other').length
  }
};
