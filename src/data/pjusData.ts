import { LoanProduct, SocialProject, BeneficiaryStory, BranchOffice } from '../types';

export const ORG_INFO = {
  name: "PRAGATI - PJUS",
  fullName: "Pragati Jubo Unnayan Sangstha (PJUS)",
  domain: "Pjus-bd.org",
  motto: "Empowering Grassroots Communities, Sustaining Livelihoods",
  estYear: 1998,
  mraRegNo: "MRA-00214-04128-00512",
  ngoAffairsBureauReg: "FDO/R-1489",
  phone: "+880 1711-892415",
  telephone: "+880 2-48119022",
  email: "info@pjus-bd.org",
  supportEmail: "loan@pjus-bd.org",
  address: "House 24/A, Road 09, Block C, Mirpur-1, Dhaka-1216, Bangladesh",
  regionalOffice: "Hospital Road, Monirampur, Jashore-7440, Khulna Division, Bangladesh",
  workingHours: "Sunday – Thursday: 9:00 AM – 5:00 PM (BST)"
};

export const LOAN_PRODUCTS: LoanProduct[] = [
  {
    id: 'jagoron',
    name: 'Jagoron (Rural Microcredit)',
    bengaliName: 'জাগরণ ঋণ',
    tagline: 'Empowering rural women micro-entrepreneurs to initiate and expand self-employment.',
    minAmount: 10000,
    maxAmount: 100000,
    defaultAmount: 40000,
    tenureWeeks: 46,
    tenureMonths: 12,
    interestRateAnnual: 12.5, // MRA flat equivalent rate
    purpose: ['Cottage industries', 'Tailoring & embroidery', 'Small grocery (mudir dokan)', 'Poultry & goat rearing'],
    eligibility: ['Women aged 18 to 58 years', 'Valid National ID (NID)', 'Permanent resident of operating village / ward', 'Member of local Samity group'],
    features: ['No collateral or mortgage required', 'Doorstep weekly doorstep installment', 'Free financial literacy counseling', 'Includes group life risk welfare assistance'],
    icon: 'Users'
  },
  {
    id: 'agrosor',
    name: 'Agrosor (Microenterprise Loan)',
    bengaliName: 'অগ্রসর ক্ষুদ্র উদ্যোগ',
    tagline: 'Growth capital for expanding small businesses, trade, and wholesale merchants.',
    minAmount: 50000,
    maxAmount: 500000,
    defaultAmount: 120000,
    tenureWeeks: 50,
    tenureMonths: 18,
    interestRateAnnual: 12.0,
    purpose: ['Hardware & electrical stores', 'Wholesale food grain trading', 'Light engineering workshops', 'Commercial fisheries & hatchery'],
    eligibility: ['Active business operating for at least 1 year', 'Trade license or local ward commissioner certificate', 'Valid NID and guarantor signature'],
    features: ['Flexible monthly installment options', 'Fast-track 72-hour loan appraisal', 'Rebate on timely repayments', 'Capacity-building advisory from PJUS field officers'],
    icon: 'Briefcase'
  },
  {
    id: 'sufolon',
    name: 'Sufolon (Seasonal Agriculture & Livestock)',
    bengaliName: 'সুফলন কৃষি ঋণ',
    tagline: 'Tailored seasonal financing for marginal farmers aligned with crop and livestock cycles.',
    minAmount: 15000,
    maxAmount: 200000,
    defaultAmount: 60000,
    tenureWeeks: 44,
    tenureMonths: 12,
    interestRateAnnual: 11.5,
    purpose: ['Aman & Boro paddy cultivation', 'High-yield dairy cow purchase', 'Vegetable farming & seed purchase', 'Aquaculture and pond leasing'],
    eligibility: ['Tenant farmers, marginal cultivators, or livestock owners', 'Access to cultivable land or dairy shed', 'Age 18 - 62'],
    features: ['Lump-sum post-harvest repayment grace', 'Technical guidance by PJUS agricultural field specialists', 'Livestock health vaccination support', 'Subsidized fertilizer access'],
    icon: 'Sprout'
  },
  {
    id: 'buniad',
    name: 'Buniad (Ultra-Poor Rehabilitation)',
    bengaliName: 'বুনিয়াদ চরম দরিদ্র ঋণ',
    tagline: 'Concessional livelihood support and asset transfer for destitute and disaster-affected families.',
    minAmount: 5000,
    maxAmount: 35000,
    defaultAmount: 15000,
    tenureWeeks: 46,
    tenureMonths: 12,
    interestRateAnnual: 8.0,
    purpose: ['Rickshaw/van acquisition', 'Vegetable cart vending', 'Duck & chicken hatcheries', 'Emergency household stabilization'],
    eligibility: ['Landless households with monthly income < ৳8,000', 'Female-headed distressed households', 'Elderly or physically vulnerable breadwinners'],
    features: ['Zero service fee during initial 4 weeks', 'Paired with free healthcare and child schooling', 'Daily/weekly nominal micro-savings incentive', 'Direct asset grant matching'],
    icon: 'ShieldCheck'
  },
  {
    id: 'sahos',
    name: 'Sahos (Disaster Emergency Credit)',
    bengaliName: 'সাহস দুর্যোগকালীন ঋণ',
    tagline: 'Rapid liquidity injection to rebuild livelihoods and shelters after floods, cyclones, or storms.',
    minAmount: 10000,
    maxAmount: 50000,
    defaultAmount: 25000,
    tenureWeeks: 40,
    tenureMonths: 10,
    interestRateAnnual: 9.0,
    purpose: ['Emergency house repairs', 'Replacing lost livestock or boats', 'Re-planting flooded crops', 'Re-stocking damaged small shops'],
    eligibility: ['Families in official flood or cyclone impacted catchment areas', 'Existing or new PJUS community members'],
    features: ['Disbursed within 24 hours of field verification', 'Immediate 2-month repayment holiday', 'Complimentary water purification tablets & food package', 'Zero processing levy'],
    icon: 'Flame'
  }
];

export const SOCIAL_PROJECTS: SocialProject[] = [
  {
    id: 'wash-climate',
    title: 'Clean Water & Delta Climate Resilience (WASH)',
    category: 'WASH & Climate',
    summary: 'Installing solar-powered deep tube wells and rainwater harvesting units in coastal and saline-prone regions.',
    impactMetrics: '42,000+ people access safe drinking water daily',
    description: 'In the coastal delta belt of Khulna and Satkhira, high soil salinity leaves thousands of families without drinkable water. PRAGATI - PJUS builds community-managed solar reverse-osmosis filtration plants and high-capacity rainwater harvesting units in rural schools and community centers.',
    keyActivities: [
      'Construction of 38 community rainwater reservoirs',
      'Installation of 65 deep tube wells with arsenic testing',
      'School hygiene clubs educating 12,000 students on sanitation',
      'Distribution of home water purification kits to flood-prone areas'
    ],
    location: 'Satkhira, Khulna & Bagerhat Coastal Belts',
    beneficiariesCount: '42,000+ Rural Residents',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    status: 'Active'
  },
  {
    id: 'maternal-health',
    title: 'Maternal & Child Health Outreach Program',
    category: 'Healthcare',
    summary: 'Mobile healthcare clinics delivering antenatal checkups, safe delivery care, and child immunization in remote villages.',
    impactMetrics: '18,500+ mothers and infants supported annually',
    description: 'Bridging the healthcare divide for rural mothers who cannot afford district hospital transport. PJUS operates specialized mobile medical vans equipped with ultrasound scanners, rapid blood testing, and registered community midwives.',
    keyActivities: [
      'Fortnightly satellite clinics across 45 remote union parishads',
      'Free distribution of iron, folic acid, and essential prenatal vitamins',
      'Trained 120 traditional birth attendants (Dais) in safe delivery hygiene',
      '24/7 emergency toll-free medical hotline for rural mothers'
    ],
    location: 'Jashore, Jhenaidah & Magura Districts',
    beneficiariesCount: '18,500+ Mothers & Infants',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
    status: 'Active'
  },
  {
    id: 'rural-education',
    title: 'Light of Hope: Child Education & Stipends',
    category: 'Education',
    summary: 'Preventing child school dropouts through evening remedial coaching, learning kits, and merit scholarships.',
    impactMetrics: '6,400+ primary & junior school students enrolled',
    description: 'Many children of day-laborers and marginal farmers drop out before grade 8 to assist family income. PJUS runs neighborhood "Anondo Pathshala" evening coaching centers to help first-generation learners master Bengali, Math, and English, coupled with monthly stipends.',
    keyActivities: [
      '32 neighborhood non-formal learning centers in union parishads',
      'Free schoolbags, notebooks, geometry sets, and uniforms every semester',
      'Monthly attendance stipend for girl students to prevent child marriage',
      'Parent-teacher awareness circles on the value of secondary education'
    ],
    location: 'Dhaka Slum Periphery & Rural Jashore',
    beneficiariesCount: '6,400+ Children',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
    status: 'Active'
  },
  {
    id: 'vocational-training',
    title: 'Youth Technical & Vocational Skills Institute',
    category: 'Skill Training',
    summary: 'Empowering unemployed youth with certified skills in garment tailoring, electrical wiring, computer literacy, and mechanics.',
    impactMetrics: '4,200+ youth placed in self-employment or formal jobs',
    description: 'PJUS Vocational Training Center bridges the unemployment gap by providing 3-to-6 month intensive practical courses aligned with national technical education boards, paired with starter equipment toolkits.',
    keyActivities: [
      'Advanced apparel design, sewing, and industrial machine operation',
      'Solar installation and domestic electrician certifications',
      'Digital literacy: Microsoft Office, graphics basics, and e-commerce freelancing',
      'Job placement fairs and seed capital loans for graduate startups'
    ],
    location: 'Central Institute, Jashore & Dhaka Training Hub',
    beneficiariesCount: '4,200+ Graduates',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    status: 'Active'
  },
  {
    id: 'disaster-response',
    title: 'Emergency Flood & Cyclone Relief Shield',
    category: 'Emergency Relief',
    summary: 'Rapid response distribution of food rations, dry clothes, shelter materials, and medical supplies during national emergencies.',
    impactMetrics: '85,000+ relief packages distributed during crises',
    description: 'Bangladesh faces frequent climate shocks. Whenever floods breach river embankments or severe cyclones strike the Bay of Bengal, PJUS disaster response teams deploy within 6 hours with food packets, baby nutrition, and temporary shelter tarpaulins.',
    keyActivities: [
      'Pre-positioned dry food stocks and medical kits in vulnerable coastal nodes',
      'Emergency boat rescue operations in submerged char villages',
      'Post-cyclone water disinfection and community pond de-salinization',
      'Direct cash grants for rebuilding devastated roof shelters'
    ],
    location: 'Southern Coastal Districts & Northern Flood Plains',
    beneficiariesCount: '85,000+ Disaster Survivors',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=80',
    status: 'Expanding'
  }
];

export const IMPACT_STATISTICS = [
  {
    value: '10,000+',
    label: 'Families Uplifted',
    subtext: 'Direct beneficiaries through microcredit & social welfare programs across Bangladesh.',
    icon: 'Users'
  },
  {
    value: '50+',
    label: 'Active Field Projects',
    subtext: 'Spanning microcredit, mother-child health, clean water, and disaster mitigation.',
    icon: 'CheckCircle2'
  },
  {
    value: '৳85+ Cr',
    label: 'Microfinance Disbursed',
    subtext: 'Transparent, zero-hidden-fee capital injected into rural micro-enterprises.',
    icon: 'TrendingUp'
  },
  {
    value: '98.6%',
    label: 'Sustainable Recovery Rate',
    subtext: 'Demonstrating grassroots trust, sound borrower ethics, and field advisory.',
    icon: 'ShieldCheck'
  },
  {
    value: '88%',
    label: 'Women Beneficiaries',
    subtext: 'Empowering female heads of household to lead village enterprises and economic decisions.',
    icon: 'HeartHandshake'
  },
  {
    value: '18',
    label: 'Branch & Service Centers',
    subtext: 'Dedicated regional offices serving rural unions, chars, and semi-urban hubs.',
    icon: 'Building2'
  }
];

export const BENEFICIARY_STORIES: BeneficiaryStory[] = [
  {
    id: 'morsheda',
    name: 'Morsheda Begum',
    role: 'Dairy Farm Owner & Cooperative Leader',
    village: 'Dhulgram, Monirampur',
    district: 'Jashore',
    loanOrProgram: 'Jagoron & Sufolon Agri-Credit',
    quote: 'With a ৳35,000 initial loan from PJUS, I bought my first dairy cow. Today I own seven Holstein cows and employ four village women.',
    story: 'Morsheda lived in a thatch-roof house with three school-going children. When her husband fell sick, PJUS provided her with Jagoron credit and livestock vaccination training. Today, she supplies 60 liters of milk daily to local sweetmakers and has built a brick home.',
    growthSummary: 'Income grew from ৳4,000/mo to ৳48,000/mo',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'abdul-halim',
    name: 'Abdul Halim Howlader',
    role: 'Organic Agro & Mustard Oil Producer',
    village: 'Kalaroa',
    district: 'Satkhira',
    loanOrProgram: 'Agrosor Microenterprise Loan',
    quote: 'Commercial banks turned me away for lack of land deeds. PJUS field officers trusted my work ethic and processed my loan in 3 days.',
    story: 'Abdul Halim runs an indigenous cold-press mustard oil mill. Through two cycles of PJUS Agrosor enterprise capital (৳1,50,000), he mechanized his grinding unit and now supplies bottled organic mustard oil across three neighboring upazila markets.',
    growthSummary: 'Expanded to 3 wholesale bazaar outlets',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kulsum-akter',
    name: 'Kulsum Akter',
    role: 'Tailoring Boutique & Sewing Trainer',
    village: 'Bagharpara',
    district: 'Jashore',
    loanOrProgram: 'PJUS Vocational Institute + Jagoron Loan',
    quote: 'PJUS not only taught me sewing free of cost; they gave me the microcredit to buy 3 sewing machines and start my own workshop.',
    story: 'A victim of early widowhood, Kulsum enrolled in PJUS three-month vocational garment training course. After graduating, she took a ৳25,000 microloan. She now stitches festival dresses and school uniforms for three unions.',
    growthSummary: 'Trained 45 other underprivileged young girls',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  }
];

export const BRANCH_OFFICES: BranchOffice[] = [
  {
    id: 'dhaka-co',
    name: 'Central Head Office',
    type: 'Central Office',
    address: 'House 24/A, Road 09, Block C, Mirpur-1, Dhaka-1216',
    district: 'Dhaka',
    division: 'Dhaka Division',
    phone: '+880 2-48119022 / +880 1711-892415',
    manager: 'Md. Nazrul Islam (Executive Director)',
    email: 'dhaka@pjus-bd.org'
  },
  {
    id: 'monirampur',
    name: 'Monirampur Regional Branch',
    type: 'Regional Branch',
    address: 'PJUS Bhaban, Hospital Road, Monirampur Bazar',
    district: 'Jashore',
    division: 'Khulna Division',
    phone: '+880 1712-445890',
    manager: 'Farhana Parveen (Regional Manager)',
    email: 'monirampur@pjus-bd.org'
  },
  {
    id: 'kalaroa',
    name: 'Kalaroa Service Branch',
    type: 'Regional Branch',
    address: 'Cinema Hall Mor, Kalaroa Pouroshova',
    district: 'Satkhira',
    division: 'Khulna Division',
    phone: '+880 1715-992134',
    manager: 'Kazi Mahbubur Rahman (Area Manager)',
    email: 'kalaroa@pjus-bd.org'
  },
  {
    id: 'keshabpur',
    name: 'Keshabpur Agriculture Unit',
    type: 'Area Office',
    address: 'College Road, Keshabpur Upazila Complex',
    district: 'Jashore',
    division: 'Khulna Division',
    phone: '+880 1720-334189',
    manager: 'Subrata Roy (Program Coordinator)',
    email: 'keshabpur@pjus-bd.org'
  },
  {
    id: 'jhenaidah',
    name: 'Jhenaidah Sadar Branch',
    type: 'Regional Branch',
    address: 'Hamdah Bus Stand, Post Office Road',
    district: 'Jhenaidah',
    division: 'Khulna Division',
    phone: '+880 1718-556721',
    manager: 'Sultana Razia (Branch Manager)',
    email: 'jhenaidah@pjus-bd.org'
  },
  {
    id: 'bagerhat',
    name: 'Bagerhat Coastal WASH Center',
    type: 'Area Office',
    address: 'Old Court Road, Bagerhat Sadar',
    district: 'Bagerhat',
    division: 'Khulna Division',
    phone: '+880 1713-778842',
    manager: 'Tariqul Alam (Field Officer)',
    email: 'bagerhat@pjus-bd.org'
  }
];

export const CORE_VALUES = [
  {
    title: 'Transparency & MRA Compliance',
    desc: 'Operated strictly under Microcredit Regulatory Authority (MRA) standards with transparent passbooks and zero hidden charges.',
    icon: 'Shield'
  },
  {
    title: 'Grassroots Gender Inclusion',
    desc: '88% of our microcredit portfolio directly empowers female breadwinners, ensuring family nutrition and female child education.',
    icon: 'Users'
  },
  {
    title: 'Climate-Conscious Development',
    desc: 'Integrating safe water, solar micro-grids, and salt-tolerant agriculture into coastal communities facing environmental shifts.',
    icon: 'Leaf'
  },
  {
    title: 'Self-Reliant Graduation',
    desc: 'We do not foster endless debt loops; our financial training is structured to graduate members to self-sustained business owners.',
    icon: 'Compass'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'How does someone qualify for a PRAGATI - PJUS microloan?',
    a: 'Any permanent resident of our operating unions aged 18-58 who has a viable income-generating idea or micro-business and a valid National ID (NID) can join a local PJUS Samity. No property deed, deed mortgage, or bank guarantor is required for standard microcredit.'
  },
  {
    q: 'What is the repayment schedule and service charge?',
    a: 'Our loans follow official Microcredit Regulatory Authority (MRA) guidelines with standard declining or flat equivalent rates (11.5% to 12.5%). Repayments can be made in weekly installments (usually 44 to 46 weeks) or monthly installments for larger enterprise loans.'
  },
  {
    q: 'Can corporate donors or NGOs partner with PJUS on social projects?',
    a: 'Yes! PRAGATI - PJUS is registered with the NGO Affairs Bureau of Bangladesh (Reg. FDO/R-1489) and regularly partners with national and international donors, CSR funds, and local development agencies in healthcare, WASH, and disaster relief.'
  },
  {
    q: 'How can I apply online or reach a loan officer?',
    a: 'You can use the interactive Loan Calculator on this website and click "Apply Now". Once submitted, a PJUS Field Credit Officer from your nearest branch will contact you within 24–48 hours to visit your doorstep and guide your Samity enrolment.'
  }
];
