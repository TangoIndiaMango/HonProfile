export interface LegislativeRecord {
  id: number;
  title: string;
  type: 'Bill' | 'Motion' | 'Committee' | 'Question' | 'Petition' | 'Resolution';
  status: 'Passed' | 'Pending' | 'Referred' | 'Withdrawn' | 'Ongoing';
  date: string;
  description: string;
  committee?: string;
  coSponsors?: string[];
  impact?: string;
  videoUrl?: string;
  documentUrl?: string;
  category: 'Education' | 'Health' | 'Infrastructure' | 'Agriculture' | 'Youth' | 'Women' | 'Security' | 'Economy' | 'Environment' | 'Other';
}

export const legislativeRecords: LegislativeRecord[] = [
  // Bills Sponsored
  {
    id: 1,
    title: 'National Youth Development Fund Bill, 2023',
    type: 'Bill',
    status: 'Passed',
    date: '2023-03-15',
    description: 'A bill to establish a National Youth Development Fund for skills acquisition and entrepreneurship programs',
    committee: 'Youth Development Committee',
    coSponsors: ['Hon. Aisha Dukku', 'Hon. Ibrahim Obanikoro'],
    impact: 'Established ₦50 billion fund for youth empowerment programs nationwide',
    category: 'Youth',
    documentUrl: '/documents/youth-fund-bill.pdf'
  },
  {
    id: 2,
    title: 'Rural Infrastructure Development Bill, 2023',
    type: 'Bill',
    status: 'Pending',
    date: '2023-06-20',
    description: 'Legislation to mandate federal allocation of 15% of infrastructure budget to rural areas',
    committee: 'Works and Infrastructure Committee',
    coSponsors: ['Hon. Femi Gbajabiamila', 'Hon. Tajudeen Abbas'],
    impact: 'Will ensure equitable distribution of infrastructure projects to rural communities',
    category: 'Infrastructure',
    documentUrl: '/documents/rural-infrastructure-bill.pdf'
  },
  {
    id: 3,
    title: 'Women Economic Empowerment Bill, 2022',
    type: 'Bill',
    status: 'Passed',
    date: '2022-11-10',
    description: 'Bill to provide access to credit facilities and business development for women',
    committee: 'Women Affairs Committee',
    coSponsors: ['Hon. Nkeiruka Onyejeocha', 'Hon. Aisha Jibril'],
    impact: 'Created ₦25 billion women entrepreneurship fund',
    category: 'Women',
    documentUrl: '/documents/women-empowerment-bill.pdf'
  },
  {
    id: 4,
    title: 'Agricultural Technology Enhancement Bill, 2023',
    type: 'Bill',
    status: 'Ongoing',
    date: '2023-09-05',
    description: 'Legislation to promote modern farming techniques and technology adoption',
    committee: 'Agriculture Committee',
    coSponsors: ['Hon. Munir Dan-Agundi', 'Hon. Sada Soli'],
    impact: 'Will provide ₦30 billion for agricultural technology infrastructure',
    category: 'Agriculture',
    documentUrl: '/documents/agriculture-tech-bill.pdf'
  },

  // Motions
  {
    id: 5,
    title: 'Motion on Urgent Need to Address Youth Unemployment',
    type: 'Motion',
    status: 'Passed',
    date: '2023-01-25',
    description: 'Motion calling for immediate government intervention in youth unemployment crisis',
    committee: 'Youth Development Committee',
    impact: 'Led to creation of National Youth Employment Initiative',
    category: 'Youth',
    videoUrl: 'https://youtube.com/watch?v=motion-youth-unemployment'
  },
  {
    id: 6,
    title: 'Motion on Rural Healthcare Infrastructure',
    type: 'Motion',
    status: 'Passed',
    date: '2022-08-15',
    description: 'Motion highlighting the need for improved healthcare facilities in rural areas',
    committee: 'Health Committee',
    impact: 'Resulted in ₦15 billion rural healthcare development fund',
    category: 'Health',
    videoUrl: 'https://youtube.com/watch?v=motion-rural-healthcare'
  },
  {
    id: 7,
    title: 'Motion on Security Challenges in Rural Communities',
    type: 'Motion',
    status: 'Passed',
    date: '2023-04-10',
    description: 'Motion addressing security challenges and need for community policing',
    committee: 'Security Committee',
    impact: 'Led to deployment of additional security personnel to rural areas',
    category: 'Security',
    videoUrl: 'https://youtube.com/watch?v=motion-rural-security'
  },

  // Committee Activities
  {
    id: 8,
    title: 'Committee on Youth Development - Skills Acquisition Program',
    type: 'Committee',
    status: 'Ongoing',
    date: '2023-02-01',
    description: 'Oversight of national skills acquisition programs and youth development initiatives',
    committee: 'Youth Development Committee',
    impact: 'Monitored implementation of ₦20 billion youth skills program',
    category: 'Youth',
    videoUrl: 'https://youtube.com/watch?v=committee-youth-skills'
  },
  {
    id: 9,
    title: 'Committee on Works - Infrastructure Audit',
    type: 'Committee',
    status: 'Completed',
    date: '2022-12-01',
    description: 'Comprehensive audit of federal infrastructure projects across the country',
    committee: 'Works and Infrastructure Committee',
    impact: 'Identified ₦500 billion in stalled projects, led to completion of 15 major projects',
    category: 'Infrastructure',
    videoUrl: 'https://youtube.com/watch?v=committee-infrastructure-audit'
  },
  {
    id: 10,
    title: 'Committee on Education - School Feeding Program Review',
    type: 'Committee',
    status: 'Ongoing',
    date: '2023-05-15',
    description: 'Oversight of National Home-Grown School Feeding Program',
    committee: 'Education Committee',
    impact: 'Ensured 12 million children receive daily meals in schools',
    category: 'Education',
    videoUrl: 'https://youtube.com/watch?v=committee-school-feeding'
  },

  // Questions
  {
    id: 11,
    title: 'Question on Youth Employment Statistics',
    type: 'Question',
    status: 'Passed',
    date: '2023-03-08',
    description: 'Parliamentary question requesting detailed statistics on youth employment programs',
    committee: 'Youth Development Committee',
    impact: 'Led to publication of comprehensive youth employment data',
    category: 'Youth'
  },
  {
    id: 12,
    title: 'Question on Rural Electrification Progress',
    type: 'Question',
    status: 'Passed',
    date: '2022-10-20',
    description: 'Question on progress of rural electrification projects in constituency',
    committee: 'Power Committee',
    impact: 'Accelerated completion of 5 rural electrification projects',
    category: 'Infrastructure'
  },

  // Petitions
  {
    id: 13,
    title: 'Petition on Road Infrastructure in Akoko',
    type: 'Petition',
    status: 'Referred',
    date: '2023-01-15',
    description: 'Petition from constituents requesting urgent attention to road infrastructure',
    committee: 'Works and Infrastructure Committee',
    impact: 'Led to allocation of ₦2.5 billion for road projects in Akoko',
    category: 'Infrastructure'
  },
  {
    id: 14,
    title: 'Petition on Healthcare Facilities',
    type: 'Petition',
    status: 'Ongoing',
    date: '2023-07-10',
    description: 'Petition requesting improved healthcare facilities in rural areas',
    committee: 'Health Committee',
    impact: 'Resulted in approval of 3 new health centers for the constituency',
    category: 'Health'
  },

  // Resolutions
  {
    id: 15,
    title: 'Resolution on National Youth Policy Implementation',
    type: 'Resolution',
    status: 'Passed',
    date: '2023-05-30',
    description: 'Resolution calling for full implementation of National Youth Policy',
    committee: 'Youth Development Committee',
    impact: 'Ensured ₦100 billion allocation for youth development programs',
    category: 'Youth',
    videoUrl: 'https://youtube.com/watch?v=resolution-youth-policy'
  },
  {
    id: 16,
    title: 'Resolution on Climate Change Adaptation',
    type: 'Resolution',
    status: 'Passed',
    date: '2023-08-12',
    description: 'Resolution on climate change adaptation measures for rural communities',
    committee: 'Environment Committee',
    impact: 'Led to establishment of ₦30 billion climate adaptation fund',
    category: 'Environment',
    videoUrl: 'https://youtube.com/watch?v=resolution-climate-adaptation'
  }
];

export const legislativeStats = {
  totalRecords: legislativeRecords.length,
  billsSponsored: legislativeRecords.filter(r => r.type === 'Bill').length,
  motionsMoved: legislativeRecords.filter(r => r.type === 'Motion').length,
  committeeActivities: legislativeRecords.filter(r => r.type === 'Committee').length,
  questionsAsked: legislativeRecords.filter(r => r.type === 'Question').length,
  petitionsHandled: legislativeRecords.filter(r => r.type === 'Petition').length,
  resolutionsPassed: legislativeRecords.filter(r => r.type === 'Resolution').length,
  passedLegislation: legislativeRecords.filter(r => r.status === 'Passed').length,
  pendingLegislation: legislativeRecords.filter(r => r.status === 'Pending').length,
  ongoingActivities: legislativeRecords.filter(r => r.status === 'Ongoing').length,
  categories: {
    youth: legislativeRecords.filter(r => r.category === 'Youth').length,
    infrastructure: legislativeRecords.filter(r => r.category === 'Infrastructure').length,
    health: legislativeRecords.filter(r => r.category === 'Health').length,
    education: legislativeRecords.filter(r => r.category === 'Education').length,
    women: legislativeRecords.filter(r => r.category === 'Women').length,
    agriculture: legislativeRecords.filter(r => r.category === 'Agriculture').length,
    security: legislativeRecords.filter(r => r.category === 'Security').length,
    economy: legislativeRecords.filter(r => r.category === 'Economy').length,
    environment: legislativeRecords.filter(r => r.category === 'Environment').length
  }
};
