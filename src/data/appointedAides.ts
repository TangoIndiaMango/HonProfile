export interface AppointedAide {
  id: number;
  name: string;
  post: string;
  town: string;
  phoneNumber: string;
  category: 'leadership' | 'special_adviser' | 'legislative_aide' | 'special_assistant' | 'personal_assistant' | 'office_staff';
}

export const appointedAides: AppointedAide[] = [
  // Leadership Team
  {
    id: 1,
    name: 'Chief Bolakale Daodu',
    post: 'Chief of Staff',
    town: 'Akungba',
    phoneNumber: '081****2684',
    category: 'leadership'
  },
  {
    id: 2,
    name: 'Dr. Theophilus Sakara',
    post: 'Special Adviser (Political Matters)',
    town: 'Ibaka Oka',
    phoneNumber: '080****9677',
    category: 'leadership'
  },
  {
    id: 3,
    name: 'Otunba Akinwamide Jayeola Ebenezer',
    post: 'Special Adviser (Special Duties)',
    town: 'Epinmi',
    phoneNumber: '081****0610',
    category: 'leadership'
  },
  {
    id: 4,
    name: 'Mr. Donatus Ologbese',
    post: 'Special Adviser (Business Development)',
    town: 'Iwaro',
    phoneNumber: '080****6445',
    category: 'leadership'
  },
  {
    id: 5,
    name: 'Hon. Kehinde Asunmo',
    post: 'Special Adviser (APC Liaison)',
    town: 'Isua',
    phoneNumber: '080****1510',
    category: 'leadership'
  },
  {
    id: 6,
    name: 'Chief Mrs. F.A Babatimehin',
    post: 'Special Adviser (Elders & Chieftaincy)',
    town: 'Akungba',
    phoneNumber: '081****9088',
    category: 'leadership'
  },
  {
    id: 7,
    name: 'Hon. Kunle Oyegoke',
    post: 'Special Adviser (Intergovernmental)',
    town: 'Ifira',
    phoneNumber: '080****3943',
    category: 'leadership'
  },

  // Special Legislative Assistants
  {
    id: 8,
    name: 'Mr. Paul Adejoro',
    post: 'SLA Administration',
    town: 'Ayegunle Oka',
    phoneNumber: '081****2169',
    category: 'special_adviser'
  },
  {
    id: 9,
    name: 'Engr. Kayode Ogedengbe',
    post: 'SLA Infrastructure & Constituency Outreach',
    town: 'Agba Oka',
    phoneNumber: '080****0378',
    category: 'special_adviser'
  },
  {
    id: 10,
    name: 'Hon. Akeem Oripelaye',
    post: 'CLO South East',
    town: 'Epinmi',
    phoneNumber: '070****0697',
    category: 'special_adviser'
  },
  {
    id: 11,
    name: 'Hon. Abiodun Adeyelu',
    post: 'CLO South West',
    town: 'Akungba',
    phoneNumber: '070****7064',
    category: 'special_adviser'
  },
  {
    id: 12,
    name: 'Comr. Kayode Adedapo',
    post: 'Legislative Aide',
    town: 'Isua',
    phoneNumber: '080****5603',
    category: 'legislative_aide'
  },

  // Special Assistants
  {
    id: 13,
    name: 'Mr. Feyi Omoteloye',
    post: 'Legislative Assistant',
    town: 'Supare',
    phoneNumber: '080****5740',
    category: 'special_assistant'
  },
  {
    id: 14,
    name: 'Hon. (Mrs.) Stella Ademokoya',
    post: 'Senior Special Assistant (Women Affairs)',
    town: 'Iwaro',
    phoneNumber: '070****5358',
    category: 'special_assistant'
  },
  {
    id: 15,
    name: 'Mrs. Eunice Ajayi',
    post: 'Senior Special Assistant (NGOs)',
    town: 'Supare',
    phoneNumber: '070****3547',
    category: 'special_assistant'
  },
  {
    id: 16,
    name: 'Mr. Ojo Olaitan',
    post: 'Senior Special Assistant (Special Duties)',
    town: 'Sosan',
    phoneNumber: '070****9904',
    category: 'special_assistant'
  },
  {
    id: 17,
    name: 'Hon. Felix Sunday Olasunkanmi',
    post: 'SA Political Affairs',
    town: 'Supare',
    phoneNumber: '070****7093',
    category: 'special_assistant'
  },
  {
    id: 18,
    name: 'Samad Abd\'Fatah Orijeminiyi',
    post: 'SA Admin',
    town: 'Oba',
    phoneNumber: '070****1043',
    category: 'special_assistant'
  },
  {
    id: 19,
    name: 'Abire Sunday Olugbenga',
    post: 'SA Media & Publicity',
    town: 'Oba',
    phoneNumber: '080****4418',
    category: 'special_assistant'
  },
  {
    id: 20,
    name: 'Comr. Adewale Ogolo',
    post: 'SA Employment & Youth Affairs',
    town: 'Iwaro',
    phoneNumber: '070****3381',
    category: 'special_assistant'
  },
  {
    id: 21,
    name: 'Mrs. Remi Ologunore',
    post: 'SA Women Affairs',
    town: 'Akungba',
    phoneNumber: '070****0660',
    category: 'special_assistant'
  },
  {
    id: 22,
    name: 'Barr. Abiodun Subair',
    post: 'SA Legal Matters',
    town: 'Ikare',
    phoneNumber: '080****8928',
    category: 'special_assistant'
  },
  {
    id: 23,
    name: 'Comr. Alonge Tosin',
    post: 'SA Creative Arts/Talents Nurturing',
    town: 'Ikese Oka',
    phoneNumber: '080****8561',
    category: 'special_assistant'
  },
  {
    id: 24,
    name: 'Comr. Ajayi Tajudeen',
    post: 'SA Students\' Matters',
    town: 'Ikun',
    phoneNumber: '081****2863',
    category: 'special_assistant'
  },
  {
    id: 25,
    name: 'Mrs. Laminat Amuda',
    post: 'SA Skills Acquisition',
    town: 'Iwaro',
    phoneNumber: '080****2324',
    category: 'special_assistant'
  },
  {
    id: 26,
    name: 'Mr. Salami Sunday',
    post: 'SA Party Youths',
    town: 'Ikanmu Oka',
    phoneNumber: '080****1091',
    category: 'special_assistant'
  },
  {
    id: 27,
    name: 'Mr. Bola Ambrose Ologun',
    post: 'SA Farm Settlements',
    town: 'Owase Oka',
    phoneNumber: '080****0841',
    category: 'special_assistant'
  },
  {
    id: 28,
    name: 'Alh. Lawal Rasaki',
    post: 'SA Religious Affairs',
    town: 'Iwaro',
    phoneNumber: '070****3090',
    category: 'special_assistant'
  },
  {
    id: 29,
    name: 'Comr. Fagbemigun Israel',
    post: 'SA Special Duties',
    town: 'Ilaje',
    phoneNumber: '081****2963',
    category: 'special_assistant'
  },

  // Personal Assistants
  {
    id: 30,
    name: 'Mrs. Agnes Aberiogun',
    post: 'Personal Assistant',
    town: 'Ikese Oka',
    phoneNumber: '070****9641',
    category: 'personal_assistant'
  },
  {
    id: 31,
    name: 'Hon. Segun Adeyemi',
    post: 'Personal Assistant',
    town: 'Iwonrin Oka',
    phoneNumber: '090****7107',
    category: 'personal_assistant'
  },
  {
    id: 32,
    name: 'Mr. Odudu Joshua',
    post: 'Personal Assistant',
    town: 'Iworin Oka',
    phoneNumber: '070****2733',
    category: 'personal_assistant'
  },
  {
    id: 33,
    name: 'Mr. Bayode Olumide',
    post: 'Personal Assistant',
    town: 'Epinmi',
    phoneNumber: '080****2167',
    category: 'personal_assistant'
  },
  {
    id: 34,
    name: 'Hon. Tunde Aruwajoye',
    post: 'Personal Assistant',
    town: 'Simerin Oka',
    phoneNumber: '081****5636',
    category: 'personal_assistant'
  },
  {
    id: 35,
    name: 'Mr. Adebayo Johnson Koide',
    post: 'Personal Assistant',
    town: 'Ipe Oba',
    phoneNumber: '080****9053',
    category: 'personal_assistant'
  },
  {
    id: 36,
    name: 'Prince Raji Hamzat',
    post: 'Personal Assistant',
    town: 'Isua',
    phoneNumber: '081****9996',
    category: 'personal_assistant'
  },
  {
    id: 37,
    name: 'Mr. Bamidele Adeniji',
    post: 'Personal Assistant',
    town: 'Supare',
    phoneNumber: '080****9719',
    category: 'personal_assistant'
  },
  {
    id: 38,
    name: 'Mr. Cornelius Omoniyi',
    post: 'Personal Assistant',
    town: 'Isua',
    phoneNumber: '081****9120',
    category: 'personal_assistant'
  },
  {
    id: 39,
    name: 'Hon. Olu Adurogboye',
    post: 'Personal Assistant',
    town: 'Etiose Isua',
    phoneNumber: '081****0804',
    category: 'personal_assistant'
  },
  {
    id: 40,
    name: 'D. Mall. Muhammed S. Sanni',
    post: 'Personal Assistant',
    town: 'Akungba',
    phoneNumber: '090****3057',
    category: 'personal_assistant'
  },
  {
    id: 41,
    name: 'Mr. Dare Ijasina',
    post: 'Personal Assistant',
    town: 'Ipe Isua',
    phoneNumber: '080****4835',
    category: 'personal_assistant'
  },
  {
    id: 42,
    name: 'Mr. Yomi Ajibola',
    post: 'Personal Assistant',
    town: 'Ose Oba',
    phoneNumber: '080****8577',
    category: 'personal_assistant'
  },
  {
    id: 43,
    name: 'Hon. Paul A. Ajise',
    post: 'Personal Assistant',
    town: 'Ipesi Isua',
    phoneNumber: '080****5632',
    category: 'personal_assistant'
  },
  {
    id: 44,
    name: 'Mall. Aminu lliyas',
    post: 'Personal Assistant',
    town: 'Oba',
    phoneNumber: '070****7099',
    category: 'personal_assistant'
  },
  {
    id: 45,
    name: 'Mr. Pius Alaba',
    post: 'Personal Assistant',
    town: 'Isua',
    phoneNumber: '080****210',
    category: 'personal_assistant'
  },
  {
    id: 46,
    name: 'Mr. Apeta Bunmi Charles',
    post: 'Personal Assistant',
    town: 'Oka',
    phoneNumber: '081****0252',
    category: 'personal_assistant'
  },
  {
    id: 47,
    name: 'Mr. Samson Bamikiya',
    post: 'Personal Assistant',
    town: 'Oba',
    phoneNumber: '080****8662',
    category: 'personal_assistant'
  },

  // Office Staff
  {
    id: 48,
    name: 'Mr. Tunji Ologunoba',
    post: 'Office Assistant (Abuja)',
    town: 'Supare',
    phoneNumber: '080****0969',
    category: 'office_staff'
  },
  {
    id: 49,
    name: 'Miss Bidemi Togbese',
    post: 'Secretary Const. Office',
    town: 'Ikun',
    phoneNumber: '090****2672',
    category: 'office_staff'
  },
  {
    id: 50,
    name: 'Mr. Adeoye Samson',
    post: 'Secretary Const. Office',
    town: 'Agba Oka',
    phoneNumber: '070****3153',
    category: 'office_staff'
  },
  {
    id: 51,
    name: 'Mrs. Bola Ayoko',
    post: 'Secretary Const. Office',
    town: 'Ibaka Oka',
    phoneNumber: '080****6587',
    category: 'office_staff'
  },
  {
    id: 52,
    name: 'Mall. Imoru Ibrahim',
    post: 'Secretary Const. Office',
    town: 'Ipe Isua',
    phoneNumber: '081****9523',
    category: 'office_staff'
  },
  {
    id: 53,
    name: 'Mrs. Joseph Stella',
    post: 'Secretary Const. Office',
    town: 'Supare',
    phoneNumber: '081****9903',
    category: 'office_staff'
  },
  {
    id: 54,
    name: 'Mrs. Grace Asotun',
    post: 'Secretary Const. Office',
    town: 'Akungba',
    phoneNumber: '080****4459',
    category: 'office_staff'
  },
  {
    id: 55,
    name: 'Mr. Ayejuyole Philip Ojo',
    post: 'Secretary Const. Office',
    town: 'Ipesi Epinmi',
    phoneNumber: '090****0081',
    category: 'office_staff'
  },
  {
    id: 56,
    name: 'Mr. Ebenezer Raji',
    post: 'Secretary Const. Office',
    town: 'Ifira',
    phoneNumber: '070****3055',
    category: 'office_staff'
  },
  {
    id: 57,
    name: 'Mrs. Yemisi Ajise',
    post: 'Secretary Const. Office',
    town: 'Ikanmu Oka',
    phoneNumber: '070****5674',
    category: 'office_staff'
  },
  {
    id: 58,
    name: 'Adeboye Ojomu',
    post: 'Secretary Const. Office',
    town: 'Oba',
    phoneNumber: '081****5059',
    category: 'office_staff'
  },
  {
    id: 59,
    name: 'Balogun Joshua',
    post: 'Secretary Const. Office',
    town: 'Ayegunle Oka',
    phoneNumber: '080****6313',
    category: 'office_staff'
  },
  {
    id: 60,
    name: 'Mr. Ayo Ajana',
    post: 'Secretary Const. Office',
    town: 'Ayegunle Oka',
    phoneNumber: '080****7875',
    category: 'office_staff'
  },
  {
    id: 61,
    name: 'Mrs. Stella Jayeola',
    post: 'Secretary Const. Office',
    town: 'Ikese Oka',
    phoneNumber: '070****1006',
    category: 'office_staff'
  },
  {
    id: 62,
    name: 'Comr. Segun Aboyewa',
    post: 'Secretary Const. Office',
    town: 'Oba',
    phoneNumber: '081****1204',
    category: 'office_staff'
  },
  {
    id: 63,
    name: 'Miss Daodu Mopelola',
    post: 'Secretary Const. Office',
    town: 'Isua',
    phoneNumber: '070****0127',
    category: 'office_staff'
  },
  {
    id: 64,
    name: 'Nurudeen Oyeniwon',
    post: 'Secretary Const. Office',
    town: 'Oka',
    phoneNumber: '080****5232',
    category: 'office_staff'
  },
  {
    id: 65,
    name: 'Adesaanu Temitope',
    post: 'Secretary Const. Office',
    town: 'Isua',
    phoneNumber: '070****1902',
    category: 'office_staff'
  },
  {
    id: 66,
    name: 'Adefarati Caroline',
    post: 'Secretary Const. Office',
    town: 'Oka',
    phoneNumber: '081****9165',
    category: 'office_staff'
  },
  {
    id: 67,
    name: 'Funmilayo Ologuntere',
    post: 'Secretary Const. Office',
    town: 'Akungba',
    phoneNumber: '090****6717',
    category: 'office_staff'
  },
  {
    id: 68,
    name: 'Gbodope Oluwaseun',
    post: 'Office Assistant Const. Office',
    town: 'Akungba',
    phoneNumber: '070****3965',
    category: 'office_staff'
  }
];

export const aideCategories = [
  { id: 'leadership', label: 'Leadership Team', count: 7 },
  { id: 'special_adviser', label: 'Special Legislative Assistants', count: 5 },
  { id: 'legislative_aide', label: 'Legislative Aides', count: 1 },
  { id: 'special_assistant', label: 'Special Assistants', count: 17 },
  { id: 'personal_assistant', label: 'Personal Assistants', count: 18 },
  { id: 'office_staff', label: 'Office Staff', count: 20 }
];
