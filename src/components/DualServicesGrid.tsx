import React from 'react';
import { 
  Heart, 
  Coins, 
  ArrowRight, 
  Check, 
  Droplet, 
  BookOpen, 
  Briefcase, 
  Flame, 
  Sprout, 
  Calculator,
  Compass,
  Users,
  ShieldCheck
} from 'lucide-react';
import { LOAN_PRODUCTS, SOCIAL_PROJECTS } from '../data/pjusData';
import { SocialProject } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface DualServicesGridProps {
  onOpenApply: (productName?: string) => void;
  onOpenProjectModal: (project: SocialProject) => void;
  onNavigate: (sectionId: string) => void;
}

export const DualServicesGrid: React.FC<DualServicesGridProps> = ({
  onOpenApply,
  onOpenProjectModal,
  onNavigate
}) => {
  const { language, toBengaliNumber } = useLanguage();
  const t = TRANSLATIONS[language];

  // Bengali specific translations for social projects
  const getProjectTitle = (proj: SocialProject) => {
    if (language === 'en') return proj.title;
    switch (proj.id) {
      case 'wash-climate': return 'সুপেয় পানি ও ডেল্টা জলবায়ু সহনশীলতা (WASH)';
      case 'maternal-health': return 'ভ্রাম্যমাণ মা ও শিশু স্বাস্থ্যসেবা কর্মসূচি';
      case 'rural-education': return 'আশার আলো: অবহেলিত শিশুদের শিক্ষা ও উপবৃত্তি';
      case 'vocational-training': return 'যুব কারিগরি ও আইসিটি দক্ষতা উন্নয়ন ইনস্টিটিউট';
      case 'disaster-response': return 'জরুরি বন্যা ও প্রাকৃতিক দুর্যোগকালীন ত্রাণ সহায়তা';
      default: return proj.title;
    }
  };

  const getProjectSummary = (proj: SocialProject) => {
    if (language === 'en') return proj.summary;
    switch (proj.id) {
      case 'wash-climate': return 'উপকূলীয় লবণাক্ত অঞ্চলে সৌরচালিত গভীর নলকূপ ও বৃষ্টির পানি সংরক্ষণাগার স্থাপন।';
      case 'maternal-health': return 'দূরবর্তী গ্রামে মোবাইল মেডিক্যাল ভ্যানের মাধ্যমে মা ও শিশুর সার্বক্ষণিক স্বাস্থ্য পরীক্ষা ও ওষুধ।';
      case 'rural-education': return 'ঝরে পড়া রোধে আনন্দ পাঠশালায় সান্ধ্যকালীন কোচিং, বই-খাতা ও দরিদ্র কন্যাশিশুদের উপবৃত্তি।';
      case 'vocational-training': return 'বেকার যুবকদের জন্য পোশাক সেলাই, ইলেকট্রিক্যাল ওয়্যারিং ও কম্পিউটার প্রশিক্ষণ।';
      case 'disaster-response': return 'বন্যা ও ঘূর্ণিঝড়ে জরুরি শুকনো খাবার, খাবার স্যালাইন, বিশুদ্ধ পানি ও নগদ অনুদান।';
      default: return proj.summary;
    }
  };

  const getLoanName = (loan: typeof LOAN_PRODUCTS[0]) => {
    if (language === 'bn' && loan.bengaliName) {
      return loan.bengaliName;
    }
    return loan.name;
  };

  const getLoanTagline = (loan: typeof LOAN_PRODUCTS[0]) => {
    if (language === 'en') return loan.tagline;
    switch (loan.id) {
      case 'jagoron': return 'পল্লী নারীদের ক্ষুদ্র কুটির শিল্প ও ক্ষুদ্র ব্যবসা পরিচালনার জন্য জামানতবিহীন ঋণ।';
      case 'agrosor': return 'স্থানীয় মুদি, পাইকারি ও খুচরা দোকানের সম্প্রসারণে স্বল্প সুদে সহজ ঋণ।';
      case 'sufolon': return 'ফসল চাষ, ডেইরি গাভী ও পোল্ট্রি খামারীদের জন্য মৌসুমভিত্তিক সহজ পরিশোধযোগ্য ঋণ।';
      case 'buniad': return 'অসহায় ও চরম দরিদ্র পরিবারের জীবিকা পুনর্বাসনে বিশেষ সুবিধাজনক অনুদান ও ঋণ।';
      default: return loan.tagline;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0056b3] mb-2">
            {t.dualHeaderTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.dualTitle}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {t.dualSubtitle}
          </p>
        </div>

        {/* Dual Large Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 1: NGO Social Welfare Projects (Leaf Green Palette #28a745) */}
          <div 
            id="social-projects" 
            className="flex flex-col rounded-2xl bg-white border-2 border-emerald-100 hover:border-[#28a745]/50 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
          >
            {/* Top Banner Stripe */}
            <div className="bg-gradient-to-r from-[#28a745] to-emerald-700 px-6 sm:px-8 py-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-white">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-emerald-100 uppercase">
                      {t.pillar1Tag}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {t.pillar1Title}
                    </h3>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-emerald-50 leading-relaxed">
                {t.pillar1Desc}
              </p>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              {/* Highlighted Initiatives List */}
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {language === 'bn' ? 'চলমান সামাজিক কর্মসূচি:' : 'Active Community Welfare Initiatives:'}
                </div>

                <div className="space-y-3">
                  {SOCIAL_PROJECTS.slice(0, 4).map((project) => (
                    <div 
                      key={project.id}
                      onClick={() => onOpenProjectModal(project)}
                      className="group p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all cursor-pointer flex items-start gap-3.5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-100/70 text-[#28a745] flex items-center justify-center shrink-0 mt-0.5">
                        {project.category === 'WASH & Climate' && <Droplet className="w-4 h-4" />}
                        {project.category === 'Healthcare' && <Heart className="w-4 h-4" />}
                        {project.category === 'Education' && <BookOpen className="w-4 h-4" />}
                        {project.category === 'Skill Training' && <Briefcase className="w-4 h-4" />}
                        {project.category === 'Emergency Relief' && <Flame className="w-4 h-4" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors truncate">
                            {getProjectTitle(project)}
                          </h4>
                          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded shrink-0">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                          {getProjectSummary(project)}
                        </p>
                        <div className="mt-2 text-[11px] font-semibold text-[#28a745] flex items-center gap-1">
                          <span>{language === 'bn' ? toBengaliNumber(project.impactMetrics) : project.impactMetrics}</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500 group-hover:text-emerald-700 underline font-normal">
                            {language === 'bn' ? 'বিস্তারিত দেখুন' : 'View details'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Features & Governance */}
              <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#28a745]" />
                  <span>{language === 'bn' ? 'এনজিও বিষয়ক ব্যুরো অনুমোদিত' : 'NGO Affairs Bureau Reg.'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#28a745]" />
                  <span>{language === 'bn' ? 'সম্পূর্ণ বিনামূল্যে সেবা' : 'Zero-cost community access'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#28a745]" />
                  <span>{language === 'bn' ? 'নিয়মিত ফ্রি মেডিক্যাল ক্যাম্প' : 'Regular field medical visits'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#28a745]" />
                  <span>{language === 'bn' ? 'স্বচ্ছ অডিট ও হিসাবরক্ষণ' : 'Transparent public audits'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onOpenProjectModal(SOCIAL_PROJECTS[0])}
                  className="flex-1 py-3 px-4 rounded-lg bg-[#28a745] hover:bg-[#218838] text-white text-sm font-bold shadow-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>{t.pillar1Action}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="py-3 px-4 rounded-lg border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-800 text-sm font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{t.pillar1Partner}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Card 2: Microfinance & Small Business Loans (Royal Blue Palette #0056b3) */}
          <div 
            id="microfinance" 
            className="flex flex-col rounded-2xl bg-white border-2 border-blue-100 hover:border-[#0056b3]/50 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
          >
            {/* Top Banner Stripe */}
            <div className="bg-gradient-to-r from-[#0056b3] to-blue-800 px-6 sm:px-8 py-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-white">
                    <Coins className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-blue-200 uppercase">
                      {t.pillar2Tag}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {t.pillar2Title}
                    </h3>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-blue-100 leading-relaxed">
                {t.pillar2Desc}
              </p>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              {/* Highlighted Microloan Schemes */}
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {language === 'bn' ? 'প্রধান ক্ষুদ্রঋণ কর্মসূচি (এমআরএ অনুমোদিত):' : 'Core Loan Programs (MRA Approved):'}
                </div>

                <div className="space-y-3">
                  {LOAN_PRODUCTS.slice(0, 4).map((loan) => (
                    <div 
                      key={loan.id}
                      onClick={() => onOpenApply(loan.name)}
                      className="group p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-blue-50/40 hover:border-blue-200 transition-all cursor-pointer flex items-start gap-3.5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-[#0056b3] flex items-center justify-center shrink-0 mt-0.5">
                        {loan.id === 'jagoron' && <Users className="w-4 h-4" />}
                        {loan.id === 'agrosor' && <Briefcase className="w-4 h-4" />}
                        {loan.id === 'sufolon' && <Sprout className="w-4 h-4" />}
                        {loan.id === 'buniad' && <ShieldCheck className="w-4 h-4" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors truncate">
                            {getLoanName(loan)}
                          </h4>
                          <span className="text-[11px] font-bold text-[#0056b3] bg-blue-100/80 px-2 py-0.5 rounded shrink-0 font-mono">
                            {language === 'bn' 
                              ? `৳${toBengaliNumber((loan.minAmount / 1000).toFixed(0))}হাজার - ৳${toBengaliNumber((loan.maxAmount / 1000).toFixed(0))}হাজার`
                              : `৳${(loan.minAmount / 1000).toFixed(0)}k - ৳${(loan.maxAmount / 1000).toFixed(0)}k`}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                          {getLoanTagline(loan)}
                        </p>
                        <div className="mt-2 text-[11px] text-slate-500 flex items-center gap-2">
                          <span>
                            {language === 'bn'
                              ? `মেয়াদ: ${toBengaliNumber(loan.tenureWeeks)} সপ্তাহ / ${toBengaliNumber(loan.tenureMonths)} মাস`
                              : `Tenure: ${loan.tenureWeeks} wks / ${loan.tenureMonths} mos`}
                          </span>
                          <span className="text-slate-300">·</span>
                          <span className="text-[#0056b3] font-bold group-hover:underline">
                            {language === 'bn' ? 'আবেদন করুন →' : 'Apply now →'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Features & Financial Safety */}
              <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0056b3]" />
                  <span>{language === 'bn' ? 'জমির দলিল বা মর্টগেজ মুক্ত' : 'No land deeds or mortgage'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0056b3]" />
                  <span>{language === 'bn' ? 'দোরগোড়ায় সাপ্তাহিক কিস্তি আদায়' : 'Doorstep weekly collection'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0056b3]" />
                  <span>{language === 'bn' ? 'সদস্য জীবন ও স্বাস্থ্য কল্যাণ সুবিধা' : 'Full borrower life security'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0056b3]" />
                  <span>{language === 'bn' ? 'দ্রুত ৪৮-৭২ ঘণ্টায় ঋণ ছাড়' : 'Fast 48-72hr field appraisal'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onNavigate('calculator')}
                  className="flex-1 py-3 px-4 rounded-lg bg-[#0056b3] hover:bg-[#004494] text-white text-sm font-bold shadow-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Calculator className="w-4 h-4" />
                  <span>{t.pillar2Action}</span>
                </button>
                <button
                  onClick={() => onOpenApply()}
                  className="py-3 px-4 rounded-lg border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-[#0056b3] text-sm font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{t.pillar2Apply}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Synergy Statement */}
        <div className="mt-12 bg-slate-50 border border-slate-200/80 rounded-xl p-5 sm:p-6 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-[#0056b3] flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{t.synergyTitle}</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                {t.synergyDesc}
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('about')}
            className="shrink-0 text-xs font-bold text-[#0056b3] hover:underline flex items-center gap-1"
          >
            <span>{t.synergyLink}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
