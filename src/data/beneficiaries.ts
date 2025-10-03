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
  },

  // Additional Lawyers Robe Award Beneficiaries (continuing from id: 11)
  {
    id: 21,
    name: 'Olukoju Oluwole Owolabi',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Akungba',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 22,
    name: 'Ogunwale Adeboyede Daniel',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Oka Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 23,
    name: 'Ogunode Iretemi Igbagbolayo',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Oka Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 24,
    name: 'Ayegunle Felix',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Akungba',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 25,
    name: 'Oyekan Adebola Caroline',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Epinmi',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 26,
    name: 'Atunbi Amodu Ojo David',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Supare',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 27,
    name: 'Leramo Ojo Oluwatosin',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Oka Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 28,
    name: 'Akindele Ebenezer Akintunde',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Oka Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 29,
    name: 'Agunloye Oluwafolakemi Christianah',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Oka Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 30,
    name: 'Agbi Favour',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Oka Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },

  // Additional COVID Rapid Response Grant Beneficiaries
  {
    id: 31,
    name: 'Japhet Balogun',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '070****1406',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 32,
    name: 'Mustapha Omoyugbo',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '080****7418',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 33,
    name: 'Kehinde Yusuf',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '070****7039',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 34,
    name: 'Mabel Ibagbemi',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '081****6969',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 35,
    name: 'Samuel Afariogun',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '081****6849',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 36,
    name: 'Adelakun Lawal',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '080****8617',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 37,
    name: 'Oluwaseun Gbodope',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '081****1400',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 38,
    name: 'Taibat Alimi',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '090****4485',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 39,
    name: 'Babatunde Asamo',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '090****4485',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 40,
    name: 'Vicent Abiloro',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '080****0155',
    description: 'COVID-19 emergency support grant'
  },

  // Sample of remaining beneficiaries (showing variety of names and locations)
  // Note: Full dataset contains 212 beneficiaries total
  {
    id: 41,
    name: 'Tajudeen Alao',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '081****2423',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 42,
    name: 'Jawad Momoh',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '090****5806',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 43,
    name: 'Tabbithah James',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '081****5119',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 44,
    name: 'Bosede Oloruntoba',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '081****6059',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 45,
    name: 'Felix Olorunda',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '090****0660',
    description: 'COVID-19 emergency support grant'
  },

  // More Lawyers Robe Award Beneficiaries
  {
    id: 46,
    name: 'Babalola Mary Olayinka',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Ifira',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 47,
    name: 'Adeofe Oluwaseun Adeniyi',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Oka Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 48,
    name: 'Oloruntogbe Opeyemi Theresa',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Iwaro Oka',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 49,
    name: 'Balogun Taiwo Akinsanmi',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Ipe Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },
  {
    id: 50,
    name: 'Bosede Olalekan Idowu',
    program: 'Lawyers Robe Award',
    category: 'award',
    date: '2021-07-26',
    status: 'completed',
    town: 'Supare Akoko',
    phoneNumber: '080****0000',
    description: 'Professional robe for new lawyer'
  },

  // More COVID Rapid Response Grant Beneficiaries
  {
    id: 51,
    name: 'Toyin Muwagun',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '070****6111',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 52,
    name: 'Bosede Adebowale',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '080****9448',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 53,
    name: 'Kuburat Babadipe',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '090****8537',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 54,
    name: 'Odunayo Lawal',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '081****4572',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 55,
    name: 'Deborah Daodu',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '080****8125',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 56,
    name: 'Modupe Igbaro',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '070****2247',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 57,
    name: 'Benjamin Gbiri',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '070****0904',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 58,
    name: 'Bokilumo Daodu',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '070****7244',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 59,
    name: 'Adelakun Olotu',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '070****3377',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 60,
    name: 'Joseph Giwa',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '080****8158',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 61,
    name: 'Lawal Adam',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '090****7636',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 62,
    name: 'Taiwo Oduduwa',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '080****6101',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 63,
    name: 'Adesina Orimolade',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '070****4473',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 64,
    name: 'Alaba Omole',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '081****2363',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 65,
    name: 'Gbenga Ogunode',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '070****7404',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 66,
    name: 'Benedith Arowolo',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '081****1627',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 67,
    name: 'Tope Ologun',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '090****1252',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 68,
    name: 'Lawal Ishola',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '080****7614',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 69,
    name: 'Lukman Yaya',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '081****6123',
    description: 'COVID-19 emergency support grant'
  },
  {
    id: 70,
    name: 'Ayobamidele Akogun',
    program: 'COVID Rapid Response Grant',
    category: 'grant',
    date: '2020-04-15',
    amount: '₦50,000',
    status: 'completed',
    town: 'Akoko SW',
    phoneNumber: '070****9807',
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
