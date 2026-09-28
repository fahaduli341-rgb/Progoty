export interface LoanProduct {
  id: string;
  name: string;
  bengaliName?: string;
  tagline: string;
  minAmount: number;
  maxAmount: number;
  defaultAmount: number;
  tenureWeeks: number;
  tenureMonths: number;
  interestRateAnnual: number; // e.g. 12.5% flat standard
  purpose: string[];
  eligibility: string[];
  features: string[];
  icon: string;
}

export interface SocialProject {
  id: string;
  title: string;
  category: 'Healthcare' | 'Education' | 'WASH & Climate' | 'Skill Training' | 'Emergency Relief';
  summary: string;
  impactMetrics: string;
  description: string;
  keyActivities: string[];
  location: string;
  beneficiariesCount: string;
  image: string;
  status: 'Active' | 'Expanding' | 'Annual';
}

export interface BeneficiaryStory {
  id: string;
  name: string;
  role: string;
  village: string;
  district: string;
  loanOrProgram: string;
  quote: string;
  story: string;
  growthSummary: string;
  image: string;
}

export interface BranchOffice {
  id: string;
  name: string;
  type: 'Central Office' | 'Regional Branch' | 'Area Office';
  address: string;
  district: string;
  division: string;
  phone: string;
  manager: string;
  email: string;
}

export interface ApplicationFormData {
  fullName: string;
  phone: string;
  nidOrBirthCert: string;
  dob: string;
  district: string;
  branch: string;
  loanProgram: string;
  requestedAmount: number;
  tenureType: 'weekly' | 'monthly';
  businessType: string;
  monthlyHouseholdIncome: string;
  purposeNote: string;
}
