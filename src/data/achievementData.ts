export interface AchievementProject {
  id: number;
  category: string;
  title: string;
  description: string;
  tasks: Array<{
    id: number;
    date: string;
    title: string;
    status: 'completed' | 'ongoing';
  }>;
  mediaItems: Array<{
    id: number;
    type: 'image' | 'video';
    url?: string;
    media?: string;
    title: string;
  }>;
}

export const achievementProjects: AchievementProject[] = [
  {
    id: 1,
    category: 'infrastructure',
    title: '01. INFRASTRUCTURE',
    description: 'From roads to motor parks and flood control systems, Adeogun\'s projects deliver the physical structures that make everyday life easier and safer for his constituents.',
    tasks: [
      {
        id: 1,
        date: 'JULY, 2019',
        title: 'Massive renovation of Oka Town Hall along Palace Road, Ibaka, Oka Akoko.',
        status: 'completed' as const,
      },
      {
        id: 2,
        date: 'JULY, 2020.',
        title: 'Facilitation and payment of counterpart funding for the construction of Community Town Hall at Oka Odo, Oka Akoko, by Community and Social Development Agency (World Bank Assisted).',
        status: 'completed' as const,
      },
      {
        id: 3,
        date: 'JANUARY, 2021.',
        title: 'Construction of industrial (solar powered) boreholes with 12,000 liters capacity at Isua, Ifira, Ibaka, Idofin, Akungba, Supare and Oba Akoko',
        status: 'completed' as const,
      },
      {
        id: 4,
        date: 'JUNE, 2021.',
        title: 'Reconstruction of Ogbere bridge with retention walls and line drains at Agba Quarters, Oka Akoko.',
        status: 'completed' as const,
      },
      {
        id: 5,
        date: 'JUNE, 2021.',
        title: 'Construction of Awolowo Road with erosion control line drains at Oba Akoko.',
        status: 'completed' as const,
      },
      {
        id: 6,
        date: 'OCTOBER, 2021.',
        title: 'Massive renovation of Central Mosque at Ose Oba.',
        status: 'completed' as const,
      },
      {
        id: 7,
        date: 'FEBRUARY, 2022.',
        title: 'Construction of Omioko bridge with retention walls at Omioko, Ikese, Oka Akoko',
        status: 'completed' as const,
      },
      {
        id: 8,
        date: 'FEBRUARY, 2022.',
        title: 'Construction of bridge and lines drains along Palace Road, Ibaka, Oka Akoko',
        status: 'completed' as const,
      },
      {
        id: 9,
        date: 'FEBRUARY, 2022.',
        title: 'Construction of bridge and line drains at Okusa market, beside Community Town Hall, Akungba Akoko',
        status: 'completed' as const,
      },
    ],
    mediaItems: [
      {
        id: 1,
        type: 'image' as const,
        url: '/images/3f3fcda1c36d5c1c04d4284517cbb11050aa2bff.png',
        title: 'Infrastructure Project 1',
      },
      {
        id: 2,
        type: 'image' as const,
        url: '/images/6b048a09dd0ce7bf4f71d0836c6ded50e01ad929.png',
        title: 'Infrastructure Project 2',
      },
      {
        id: 3,
        type: 'video' as const,
        media: 'https://res.cloudinary.com/aliyu-timi/video/upload/v1759231894/compressed_adeogun2_iz71lu.mp4',
        url: '/images/6b048a09dd0ce7bf4f71d0836c6ded50e01ad929.png',
        title: 'Infrastructure Project 3',
      },
      {
        id: 4,
        type: 'image' as const,
        url: '/images/3f3fcda1c36d5c1c04d4284517cbb11050aa2bff.png',
        title: 'Infrastructure Project 4',
      },
      {
        id: 5,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1N6w1nm9fZ6EV3wyPU_Fc5opCrjISec58/view?usp=sharing',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'SLA Infrastructure - Arc Kayode Testimonial',
      },
      {
        id: 6,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/11c5QJyt2nHXzpH3cUHBAdpOFMslnXnEs/view?usp=sharing',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Notable Renovation Comment',
      },
      {
        id: 7,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1odh_t07YuX7wzKFd-7fzFqT1I_yNwvNM/view?usp=sharing',
        url: '/images/1f1dc702038b1944d5f8162f874bee68929e222a.png',
        title: 'Motor Park Comments - Chairman NURTW Oba Akoko Mr Emidun Samuel',
      },
    ],
  },
  {
    id: 2,
    category: 'education',
    title: '02. EDUCATION',
    description: 'Scholarships, classrooms, and ICT facilities have been provided to ensure that young people in Akoko have access to the tools they need to thrive.',
    tasks: [
      {
        id: 1,
        date: 'JULY, 2019.',
        title: 'Construction of 6-Classroom Block at Christ High School, Egure, Supare Akoko',
        status: 'completed' as const,
      },
      {
        id: 2,
        date: 'JULY, 2020.',
        title: 'Renovation of Admin Block and Four Classrooms at Oludaye Grammar School, Oba Akoko.',
        status: 'completed' as const,
      },
      {
        id: 3,
        date: 'JANUARY, 2021.',
        title: 'Re-roofing of Ayegunle High School, Ayegunle, Oka Akoko.',
        status: 'completed' as const,
      },
      {
        id: 4,
        date: '-',
        title: 'Presentation of Bursary Award to Two Hundred (200) students of the Federal Constituency schooling in various tertiary institutions',
        status: 'completed' as const,
      },
      {
        id: 5,
        date: 'JUNE, 2021.',
        title: 'Provision of support for the reconstruction of Salvation Army Primary School, Etioro.',
        status: 'completed' as const,
      },
      {
        id: 6,
        date: '-',
        title: 'Presentation of Complete Lawyer Apparels to Thirty Six (36) new Lawyers from Akoko South East/South West Federal Constituency',
        status: 'completed' as const,
      },
      {
        id: 7,
        date: 'FEBRUARY, 2022.',
        title: 'Provision of classroom furniture for One Thousand Two Hundred (1200) students including office furniture for Fifty (50) teachers in selected secondary schools across Akoko South East/South West Federal Constituency.',
        status: 'completed' as const,
      },
      {
        id: 8,
        date: 'OCTOBER, 2021.',
        title: 'Provision of 3-year Tuition Free Scholarship for Five Hundred (500) indigent students and teenage mothers at Upland College of Education, Ipesi Akoko to secure a second-chance opportunity for under-privileged youths, and as well, open up the Ilelabo axis of Akoko South East LGA for social and economic prosperities.',
        status: 'completed' as const,
      },
      {
        id: 9,
        date: 'FEBRUARY, 2022.',
        title: 'Provision of Computers and printers for Eight (8) secondary schools in the Constituency.',
        status: 'completed' as const,
      },
      {
        id: 10,
        date: 'FEBRUARY, 2022.',
        title: 'Distribution of Six Thousand (6000) English and Science Text Books to all secondary schools in the Constituency.',
        status: 'completed' as const,
      },
      {
        id: 11,
        date: 'JUNE, 2021.',
        title: 'Reconstruction of Sports & Recreational Pavilion at AC Grammar School, Oka Akoko.',
        status: 'completed' as const,
      },
    ],
    mediaItems: [
      {
        id: 1,
        type: 'image' as const,
        url: '/images/1f1dc702038b1944d5f8162f874bee68929e222a.png',
        title: 'Education Project 1',
      },
      {
        id: 2,
        type: 'video' as const,
        media: 'https://res.cloudinary.com/aliyu-timi/video/upload/v1759231894/education_video.mp4',
        url: '/images/1f1dc702038b1944d5f8162f874bee68929e222a.png',
        title: 'Education Project 2',
      },
      {
        id: 3,
        type: 'image' as const,
        url: '/images/1f1dc702038b1944d5f8162f874bee68929e222a.png',
        title: 'Education Project 3',
      },
      {
        id: 4,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1IwvmC-iuwp0cE6h08-1WtH35MtWn-pG0/view?usp=sharing',
        url: '/images/b7d05d4a656e09768b58159a42e7cda1851f0c3a.png',
        title: 'Principal Comments - Principal Ajagbokun High School Mr Oladoyinbo Akindele',
      },
      {
        id: 5,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1HP-S5dNitaph2-QvgTKQiw9AyjBJ9EyB/view?usp=sharing',
        url: '/images/1f1dc702038b1944d5f8162f874bee68929e222a.png',
        title: 'Lecturer, Upland College of Edu., Ipesi Akoko',
      },
      {
        id: 6,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1KMnLV0fbq3fhlZbKcpCsVqiFeIGTEp-E/view?usp=sharing',
        url: '/images/b7d05d4a656e09768b58159a42e7cda1851f0c3a.png',
        title: 'Student Testimonial - Ahmadu Joy',
      },
      {
        id: 7,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/15pdot2cYz_xJrzRQXVo87Gfoz4qmCswU/view?usp=sharing',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Student Testimonial - Yahaya Bisola',
      },
    ],
  },
  {
    id: 3,
    category: 'welfare',
    title: '03. WELFARE',
    description: 'From relief distributions to community support programs, Adeogun ensures that vulnerable groups are not left behind.',
    tasks: [
      {
        id: 1,
        date: 'July 26, 2019.',
        title: 'Appointment of Eighty five (85) aides who are paid monthly salaries (N35,000 – N100,000) from the personal emoluments of Honourable Adejoro Adeogun, to serve as a direct stimulus for the local economy of the Constituency',
        status: 'completed' as const,
      },
      {
        id: 2,
        date: '-',
        title: 'Monthly stipend of N100,000 and N50,000 each to all First Class and Second Class Traditional Rulers across the Federal Constituency.',
        status: 'completed' as const,
      },
      {
        id: 3,
        date: 'JUNE, 2020.',
        title: 'Facilitation of Targeted Credit Facility (Covid-19 Loans) ranging between N100,000 to N500,000 to 200 local farmers and small business owners across the Federal Constituency',
        status: 'completed' as const,
      },
      {
        id: 4,
        date: 'FEBRUARY, 2021.',
        title: 'Facilitation of the provision of relief (food, textile and building materials) for One Thousand (1,000) households of fire and accident victims and their relations in Akungba and Iwaro Communities by the National Emergency Management Agency, NEMA',
        status: 'completed' as const,
      },
      {
        id: 5,
        date: '-',
        title: 'Nomination and enlistment of One Hundred and Sixty (60) Beneficiaries for Survival Fund Scheme (N30,000) of the Federal Government.',
        status: 'completed' as const,
      },
      {
        id: 6,
        date: 'APRIL, 2021.',
        title: 'Nomination and enlistment of Thirty (30) women of the Federal Constituency for Women Grant (N20,000) under the Federal Ministry of Humanitarian Affairs, Disaster Management and Social Development',
        status: 'completed' as const,
      },
      {
        id: 7,
        date: 'OCTOBER, 2021.',
        title: 'Nomination and enlistment of One Hundred and Fifty (150) members of the Federal Constituency for Covid-19 Rapid Response Grant (N5,000 monthly stipend)',
        status: 'completed' as const,
      },
      {
        id: 8,
        date: '-',
        title: 'Nomination and enlistment of Seventy Five (75) Beneficiaries for Tradermoni, Marketmoni and Farmermoni programmes of the Federal Government.',
        status: 'completed' as const,
      },
      {
        id: 9,
        date: '-',
        title: 'Personal intervention in payment of school fees and medical bills for indigent constituents.',
        status: 'completed' as const,
      },
    ],
    mediaItems: [
      {
        id: 1,
        type: 'image' as const,
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Welfare Project 1',
      },
      {
        id: 2,
        type: 'video' as const,
        media: 'https://res.cloudinary.com/aliyu-timi/video/upload/v1759231894/welfare_video.mp4',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Welfare Project 2',
      },
      {
        id: 3,
        type: 'image' as const,
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Welfare Project 3',
      },
      {
        id: 4,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/15j7V2q8foVhAc5KMnIEElRQuxNvcNDqO/view?usp=sharing',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'NGO to Adeogun Speaks - Chief Mrs Ajayi Eunice',
      },
      {
        id: 5,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1PUWHCd8y-VSGbdvgnUft20EzJIPrg4si/view?usp=sharing',
        url: '/images/b7d05d4a656e09768b58159a42e7cda1851f0c3a.png',
        title: 'Comments on Work Done',
      },
      {
        id: 6,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1X2yAsJMON6DbFH25-jYKN7V7C7rcuM01/view?usp=sharing',
        url: '/images/1f1dc702038b1944d5f8162f874bee68929e222a.png',
        title: 'Rep to Governor Comments - Oladunni Odu Governor Representative',
      },
      {
        id: 7,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1REOzWf5NQyK3urNtxrMpR-5VWW_WJUbo/view?usp=drive_link',
        url: '/images/b7d05d4a656e09768b58159a42e7cda1851f0c3a.png',
        title: 'Alajah View - Alajah Mariam Speaks on Ade Adeogun',
      },
    ],
  },
  {
    id: 4,
    category: 'electricity',
    title: '04. ELECTRICITY',
    description: 'With targeted electricity interventions and infrastructure, communities gain the reliable energy needed for economic activities and improved quality of life.',
    tasks: [
      {
        id: 1,
        date: 'JULY, 2019.',
        title: 'Connection of Eti Ose in Akoko South East LGA to the National Grid.',
        status: 'completed' as const,
      },
      {
        id: 2,
        date: 'JULY, 2020.',
        title: 'Supply of transformer and extension of electricity from Ibilo in Edo State to Isua Akoko.',
        status: 'completed' as const,
      },
      {
        id: 3,
        date: 'JANUARY, 2021.',
        title: 'Restoration of electricity to Epinmi Akoko after two years of total blackout.',
        status: 'completed' as const,
      },
    ],
    mediaItems: [
      {
        id: 1,
        type: 'image' as const,
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Electricity Project 1',
      },
      {
        id: 2,
        type: 'video' as const,
        media: 'https://res.cloudinary.com/aliyu-timi/video/upload/v1759231894/electricity_video.mp4',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Electricity Project 2',
      },
      {
        id: 3,
        type: 'image' as const,
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Electricity Project 3',
      },
      {
        id: 4,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1Vqk1GUnTKAgrPnlA95J-W3bmfIXskbN4/view?usp=sharing',
        url: '/images/1f1dc702038b1944d5f8162f874bee68929e222a.png',
        title: 'Ose Mosque - Ohinoyi Onebira of Ose Oba Mallam Salisu Abdulazeez',
      },
      {
        id: 5,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1pDXH5GPLygMC4lUFZ5cO1MijWlE-vzIj/view?usp=sharing',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'HRM Oba Akoko Testimonial',
      },
    ],
  },
  {
    id: 5,
    category: 'human_development',
    title: '05. HUMAN CAPACITY DEVELOPMENT',
    description: 'Through training, workshops, and development initiatives, Adeogun empowers citizens to not just survive but compete and excel.',
    tasks: [
      {
        id: 1,
        date: 'DECEMBER, 2019.',
        title: 'Training for Transporters in Peace Studies and Conflict Resolution by the National Lottery Trust Commission at Epinmi Akoko',
        status: 'completed' as const,
      },
      {
        id: 2,
        date: 'MAY, 2021.',
        title: 'Training of Thirty (30) young Fashion Designers selected across the Federal Constituency for modern native designs and business studies in Lagos',
        status: 'completed' as const,
      },
      {
        id: 3,
        date: 'DECEMBER, 2021.',
        title: 'Workshop for Small Business Owners by Small and Medium-scale Enterprises Development Agency, SMEDAN, held at Isua Akoko',
        status: 'completed' as const,
      },
      {
        id: 4,
        date: '-',
        title: 'Training of Event Planners, Hairdressers, Aluminum Fabricators, Carpenters and Fashion Designers for entrepreneurship in Adekunle Ajasin University Akungba Akoko.',
        status: 'completed' as const,
      },
    ],
    mediaItems: [
      {
        id: 1,
        type: 'image' as const,
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Human Development Program 1',
      },
      {
        id: 2,
        type: 'video' as const,
        media: 'https://res.cloudinary.com/aliyu-timi/video/upload/v1759231894/human_development_video.mp4',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Human Development Program 2',
      },
      {
        id: 3,
        type: 'image' as const,
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Human Development Program 3',
      },
      {
        id: 4,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1iYgQq3MWq42vlNw8MUZE5Xhv61HDKZkA/view?usp=sharing',
        url: '/images/1f1dc702038b1944d5f8162f874bee68929e222a.png',
        title: 'Music Production Review - Mr Kehinde Peter',
      },
      {
        id: 5,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1t_HVgOv2Llqg_YBNGk3nXM-yDr-zjEaw/view?usp=sharing',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Photographer Review - Mr Samson Aboyewa',
      },
      {
        id: 6,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1xRbcm3ancdfL4sx30NHbizo1U1XsLIIC/view?usp=sharing',
        url: '/images/b7d05d4a656e09768b58159a42e7cda1851f0c3a.png',
        title: 'Music Highlights - Instruments',
      },
    ],
  },
  {
    id: 6,
    category: 'employment',
    title: '06. EMPLOYMENT',
    description: 'By engaging aides, facilitating federal job placements, and creating pathways to work, Adeogun has opened doors for youth and professionals alike.',
    tasks: [
      {
        id: 1,
        date: 'July 26, 2019.',
        title: 'Facilitation of employment opportunities for youths of the Constituency in various Federal Government\'s agencies and parastatals such as the Nigeria Ports Authority, the Nigerian Railway Corporation, Foreign Affairs, Department of State Services DSS, The Nigerian Navy, Nigerian Immigration Service, Federal Medical Centre Lokoja, Federal Medical Centre Ido Ekiti, The Nigerian Army, Federal Fire Service, Nigeria Police Force, Nigeria Security and Civil Defense Corps, Federal Road Safety Corps, Federal School of Medical Laboratory Technology Jos, including Ondo State Universal Basic Education Board and Ondo State Primary Health Care Development Agency.',
        status: 'completed' as const,
      },
      {
        id: 2,
        date: '-',
        title: 'Facilitation of the enlistment of One Hundred and Five (105) constituent members for the NPower Programme of the Federal Government.',
        status: 'completed' as const,
      },
      {
        id: 3,
        date: 'APRIL, 2021.',
        title: 'Facilitation of International Navy Cadet (Ship Pilots) Training by NIMASA for two young members of the Federal Constituency in Greece and India.',
        status: 'completed' as const,
      },
    ],
    mediaItems: [
      {
        id: 1,
        type: 'image' as const,
        url: '/images/b7d05d4a656e09768b58159a42e7cda1851f0c3a.png',
        title: 'Employment Initiative 1',
      },
      {
        id: 2,
        type: 'video' as const,
        media: 'https://res.cloudinary.com/aliyu-timi/video/upload/v1759231894/employment_video.mp4',
        url: '/images/b7d05d4a656e09768b58159a42e7cda1851f0c3a.png',
        title: 'Employment Initiative 2',
      },
      {
        id: 3,
        type: 'image' as const,
        url: '/images/b7d05d4a656e09768b58159a42e7cda1851f0c3a.png',
        title: 'Employment Initiative 3',
      },
      {
        id: 4,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1eK9EmR1OVNpspjrqpMKzNCs-h94DEUo_/view?usp=sharing',
        url: '/images/1f1dc702038b1944d5f8162f874bee68929e222a.png',
        title: 'Chief Staff Ade Adeogun',
      },
      {
        id: 5,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1SEIC7D3qLiY1BjR5L7l29-_FtNDNY96Y/view?usp=sharing',
        url: '/images/b7d05d4a656e09768b58159a42e7cda1851f0c3a.png',
        title: 'Chief of Staff to Hon. Ade Adeogun',
      },
      {
        id: 6,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1pDXH5GPLygMC4lUFZ5cO1MijWlE-vzIj/view?usp=sharing',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'HRM Oba Akoko Testimonial',
      },
    ],
  },
  {
    id: 7,
    category: 'artisans_farmers',
    title: '07. SUPPORT FOR ARTISANS AND FARMERS',
    description: 'By providing loans, tools, and agricultural inputs, Adeogun has boosted productivity for farmers and artisans who sustain Akoko\'s economy.',
    tasks: [
      {
        id: 1,
        date: 'JANUARY, 2020.',
        title: 'Distribution of support equipment (in partnership with the Nigeria Ports Authority, NPA) for 150 constituent members of Akoko South East/South West Federal Constituency. Beneficiaries include Fashion Designers, Barbers and Hairdressers.',
        status: 'completed' as const,
      },
      {
        id: 2,
        date: 'SEPTEMBER, 2020.',
        title: 'Distribution of start-up and support equipment (in partnership with the Nigerian Film Corporation, NFC) for 150 members of Akoko South East/South West in Creative Industry. Beneficiaries include Fashion Designers, Hairdressers, Photo & Videographers, Barbers, Music Artistes, Sandcrete Block Makers and Disk Jockeys.',
        status: 'completed' as const,
      },
      {
        id: 3,
        date: 'JUNE, 2021.',
        title: 'Distribution of support equipment (in partnership with Industrial Training Fund, ITF) for 120 constituent members of Akoko South East/South West Federal Constituency. Beneficiaries include Fashion Designers, Carpenters, Event Planners, Aluminum Fabricators and Hairdressers.',
        status: 'completed' as const,
      },
      {
        id: 4,
        date: 'FEBRUARY, 2021.',
        title: 'Provision of farm tools and agrochemicals for One Thousand (1,000) farmers across the Federal Constituency to boost farming and crop production.',
        status: 'completed' as const,
      },
    ],
    mediaItems: [
      {
        id: 1,
        type: 'image' as const,
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Artisans and Farmers Support 1',
      },
      {
        id: 2,
        type: 'video' as const,
        media: 'https://res.cloudinary.com/aliyu-timi/video/upload/v1759231894/artisans_farmers_video.mp4',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Artisans and Farmers Support 2',
      },
      {
        id: 3,
        type: 'image' as const,
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Artisans and Farmers Support 3',
      },
      {
        id: 4,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1NWqfCmlu10t3S5DpOCgBmdmlmxGiEutT/view?usp=sharing',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Agriculture Materials',
      },
      {
        id: 5,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1iYgQq3MWq42vlNw8MUZE5Xhv61HDKZkA/view?usp=sharing',
        url: '/images/1f1dc702038b1944d5f8162f874bee68929e222a.png',
        title: 'Music Production Review - Mr Kehinde Peter',
      },
      {
        id: 6,
        type: 'video' as const,
        media: 'https://drive.google.com/file/d/1t_HVgOv2Llqg_YBNGk3nXM-yDr-zjEaw/view?usp=sharing',
        url: '/images/1ac896e9b089113c026df2c1d596c42534705866.png',
        title: 'Photographer Review - Mr Samson Aboyewa',
      },
    ],
  },
];

// Export individual projects for easy access
export const infrastructureProject = achievementProjects[0];
export const educationProject = achievementProjects[1];
export const welfareProject = achievementProjects[2];
export const electricityProject = achievementProjects[3];
export const humanDevelopmentProject = achievementProjects[4];
export const employmentProject = achievementProjects[5];
export const artisansFarmersProject = achievementProjects[6];