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

// Note: Legislative records data not available in source documents
// This section has been removed to maintain authenticity
export const legislativeRecords: LegislativeRecord[] = [];

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
