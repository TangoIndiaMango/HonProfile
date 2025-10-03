export interface EmploymentOpportunity {
  id: number;
  name: string;
  employer: string;
  address: string;
  phoneNumber: string;
  category: 'security' | 'fire_service' | 'immigration' | 'army' | 'navy' | 'other';
}

export const employmentOpportunities: EmploymentOpportunity[] = [
  // DSS (Department of State Services)
  {
    id: 1,
    name: 'OGOLO ADEWALE .J.',
    employer: 'DSS',
    address: 'OWALUSI OKA',
    phoneNumber: '070****3381',
    category: 'security'
  },
  {
    id: 11,
    name: 'OGUNNIYE OLUSOLA .K.',
    employer: 'DSS',
    address: 'AKUNGBA',
    phoneNumber: '081****4441',
    category: 'security'
  },
  {
    id: 12,
    name: 'AJAGUNNA GANIYU',
    employer: 'DSS',
    address: 'IKARE',
    phoneNumber: '081****5025',
    category: 'security'
  },
  {
    id: 13,
    name: 'AJANA SHERIF-DEEN',
    employer: 'DSS',
    address: 'OBA',
    phoneNumber: '',
    category: 'security'
  },

  // NPA (Nigerian Ports Authority)
  {
    id: 2,
    name: 'OLARINDE FEMI .O.',
    employer: 'NPA',
    address: 'OBA',
    phoneNumber: '080****4078',
    category: 'other'
  },

  // FMC (Federal Medical Centre)
  {
    id: 3,
    name: 'EMMANUEL ABODUNWA',
    employer: 'FMC LOKOJA',
    address: 'IKUN',
    phoneNumber: '080****6185',
    category: 'other'
  },

  // NIA (National Intelligence Agency)
  {
    id: 4,
    name: 'SASERE IDRIS',
    employer: 'NIA',
    address: 'ISUA',
    phoneNumber: '070****7924',
    category: 'security'
  },
  {
    id: 5,
    name: 'OLUWASEESIN VICTOR',
    employer: 'NIA',
    address: 'EBO OKA',
    phoneNumber: '081****0967',
    category: 'security'
  },
  {
    id: 6,
    name: 'BAYODE FEMI',
    employer: 'NIA',
    address: 'OBA',
    phoneNumber: '070****6943',
    category: 'security'
  },

  // Nigerian Army
  {
    id: 7,
    name: 'ORIYOMI ADEJORO',
    employer: 'NIGERIAN ARMY',
    address: 'AKUNGBA',
    phoneNumber: '',
    category: 'army'
  },
  {
    id: 8,
    name: 'JATO ALABA',
    employer: 'NIGERIAN ARMY',
    address: 'SUPARE',
    phoneNumber: '',
    category: 'army'
  },
  {
    id: 19,
    name: 'AYUBA AJAYI',
    employer: 'NIGERIAN ARMY',
    address: '',
    phoneNumber: '080****3664',
    category: 'army'
  },

  // Federal Fire Service
  {
    id: 9,
    name: 'APATA FRIDAY',
    employer: 'FED. FIRE SERVICE',
    address: 'OKIA OKA',
    phoneNumber: '080****9913',
    category: 'fire_service'
  },
  {
    id: 10,
    name: 'MUSA FATAI',
    employer: 'FED. FIRE SERVICE',
    address: 'OBA',
    phoneNumber: '081****7156',
    category: 'fire_service'
  },
  {
    id: 24,
    name: 'JAYEOLA AKELE',
    employer: 'FED. FIRE SERVICE',
    address: 'OBA',
    phoneNumber: '',
    category: 'fire_service'
  },

  // NSCDC (Nigeria Security and Civil Defence Corps)
  {
    id: 14,
    name: 'LAWAL TEMITOPE',
    employer: 'NSCDC',
    address: 'IKANMU OKA',
    phoneNumber: '090****4793',
    category: 'security'
  },
  {
    id: 15,
    name: 'ASEMOLOYE BOSEDE',
    employer: 'NSCDC',
    address: 'OWASE OKA',
    phoneNumber: '081****2151',
    category: 'security'
  },
  {
    id: 16,
    name: 'ALEX PETER',
    employer: 'NSCDC',
    address: 'OKA ODO',
    phoneNumber: '081****9620',
    category: 'security'
  },
  {
    id: 17,
    name: 'EZEKIEL TEMIDAYO',
    employer: 'NSCDC',
    address: 'IPE',
    phoneNumber: '',
    category: 'security'
  },
  {
    id: 18,
    name: 'OKIJIOLA WEMIMO .F.',
    employer: 'NSCDC',
    address: 'ISUA',
    phoneNumber: '',
    category: 'security'
  },
  {
    id: 20,
    name: 'ADEROPO OJO',
    employer: 'NSCDC',
    address: 'IKUN',
    phoneNumber: '070****6825',
    category: 'security'
  },
  {
    id: 21,
    name: 'BAMIKIYA OLABODE',
    employer: 'NSCDC',
    address: 'OBA',
    phoneNumber: '',
    category: 'security'
  },
  {
    id: 22,
    name: 'ILENUSI JAYEOLA',
    employer: 'NSCDC',
    address: 'OBA',
    phoneNumber: '',
    category: 'security'
  },

  // Nigerian Navy
  {
    id: 25,
    name: 'DUROSOLA .R. OMOYUGBO',
    employer: 'NIGERIAN NAVY',
    address: 'AKUNGBA',
    phoneNumber: '',
    category: 'navy'
  },
  {
    id: 26,
    name: 'ROTIMI AJANAKU',
    employer: 'NIGERIAN NAVY',
    address: 'OBA',
    phoneNumber: '',
    category: 'navy'
  },

  // FRSC (Federal Road Safety Corps)
  {
    id: 27,
    name: 'OLUWASEUN ADELEYE',
    employer: 'FRSC',
    address: 'ISUA',
    phoneNumber: '',
    category: 'other'
  },

  // Immigration Service
  {
    id: 28,
    name: 'DESTINY .O. OGUNDAYISI',
    employer: 'NIG. IMMIGRATION SERVICE',
    address: 'OBA',
    phoneNumber: '',
    category: 'immigration'
  },
  {
    id: 29,
    name: 'ABIOLA ABILOYE',
    employer: 'NIG. IMMIGRATION SERVICE',
    address: 'IKUN',
    phoneNumber: '',
    category: 'immigration'
  },

  // POLAC (Police Academy)
  {
    id: 30,
    name: 'JOSHUA RAJI',
    employer: 'POLAC',
    address: 'OBA',
    phoneNumber: '',
    category: 'security'
  },
  {
    id: 31,
    name: 'SURAJUDEEN OLORUNDA',
    employer: 'POLAC',
    address: 'OBA',
    phoneNumber: '',
    category: 'security'
  },

  // Medical Institutions
  {
    id: 32,
    name: 'JAPHET OLAMIDE',
    employer: 'FED. SCH OF MED. LAB TECH.',
    address: 'IPE',
    phoneNumber: '',
    category: 'other'
  },
  {
    id: 33,
    name: 'OJOMO OLUYEMI',
    employer: 'FED. MED. CENTRE, IDO EKITI',
    address: 'ISUA',
    phoneNumber: '',
    category: 'other'
  },

  // NIMASA Training
  {
    id: 34,
    name: 'BAKARE AJIBOLA',
    employer: 'NIMASA INT\'L TRAINING (NAVY CADET)',
    address: 'OBA',
    phoneNumber: '',
    category: 'navy'
  },
  {
    id: 35,
    name: 'AJAYI OLAYEMI',
    employer: 'NIMASA INT\'L TRAINING (NAVY CADET)',
    address: 'OBA',
    phoneNumber: '',
    category: 'navy'
  }
];

export const employmentCategories = [
  { id: 'security', label: 'Security Agencies', count: 12 },
  { id: 'fire_service', label: 'Fire Service', count: 3 },
  { id: 'immigration', label: 'Immigration Service', count: 2 },
  { id: 'army', label: 'Nigerian Army', count: 3 },
  { id: 'navy', label: 'Nigerian Navy', count: 4 },
  { id: 'other', label: 'Other Agencies', count: 13 }
];
