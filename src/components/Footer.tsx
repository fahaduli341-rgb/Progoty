import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  ArrowRight, 
  Check 
} from 'lucide-react';
import { ORG_INFO, LOAN_PRODUCTS, SOCIAL_PROJECTS } from '../data/pjusData';
import { PJUSLogo } from './PJUSLogo';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenApply: (productName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenApply }) => {
  const [emailSub, setEmailSub] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);
  const { language, toBengaliNumber } = useLanguage();
  const t = TRANSLATIONS[language];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub.trim()) {
      setSubSuccess(true);
      setTimeout(() => {
        setEmailSub('');
      }, 3000);
    }
  };

  const getLoanName = (prod: typeof LOAN_PRODUCTS[0]) => {
    if (language === 'bn' && prod.bengaliName) return prod.bengaliName;
    return prod.name.split(' (')[0];
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Brand Info & Mission (4 cols) with Official Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <PJUSLogo size={52} />
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  {language === 'bn' ? 'প্রগতি' : 'PRAGATI'}
                </span>{' '}
                <span className="font-extrabold text-xl tracking-tight text-[#28a745]">
                  {language === 'bn' ? 'পিজেইউএস' : 'PJUS'}
                </span>
                <div className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                  {ORG_INFO.domain}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {t.footerDesc}
            </p>

            {/* Statutory Registrations */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs space-y-1.5 font-mono">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-sans">
                  {language === 'bn' ? 'এমআরএ সনদ নং:' : 'MRA License:'}
                </span>
                <span className="text-emerald-400 font-bold">
                  {language === 'bn' ? toBengaliNumber(ORG_INFO.mraRegNo) : ORG_INFO.mraRegNo}
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-sans">
                  {language === 'bn' ? 'এনজিও ব্যুরো নিবন্ধন:' : 'NGO Affairs Bureau:'}
                </span>
                <span className="text-emerald-400 font-bold">
                  {language === 'bn' ? toBengaliNumber(ORG_INFO.ngoAffairsBureauReg) : ORG_INFO.ngoAffairsBureauReg}
                </span>
              </div>
            </div>
          </div>

          {/* Microfinance Schemes (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footerLoanCol}
            </h4>
            <ul className="space-y-2 text-xs">
              {LOAN_PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <button
                    onClick={() => onOpenApply(prod.name)}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {getLoanName(prod)}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="text-[#28a745] hover:underline font-bold flex items-center gap-1"
                >
                  <span>{t.navCalculator}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Social Welfare Projects (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footerSocialCol}
            </h4>
            <ul className="space-y-2 text-xs">
              {SOCIAL_PROJECTS.map((proj) => (
                <li key={proj.id}>
                  <button
                    onClick={() => onNavigate('social-projects')}
                    className="text-slate-400 hover:text-white transition-colors text-left line-clamp-1"
                  >
                    {proj.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('impact')}
                  className="text-blue-400 hover:underline font-bold flex items-center gap-1"
                >
                  <span>{language === 'bn' ? '১০,০০০+ সফলতার গল্প দেখুন' : 'View 10,000+ Impact Stories'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footerDigestCol}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'bn' 
                ? 'বার্ষিক অডিট প্রতিবেদন ও মাঠপর্যায়ের মানবিক বুলেটিন পেতে ইমেইল সাবস্ক্রাইব করুন।' 
                : 'Subscribe for audited development reports, field dispatches, and partnership briefs.'}
            </p>

            {subSuccess ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-800 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#28a745]" />
                <span>
                  {language === 'bn' 
                    ? 'ধন্যবাদ! আপনি সফলভাবে সাবস্ক্রাইব করেছেন।' 
                    : 'Thank you! You are subscribed to PJUS updates.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder={language === 'bn' ? 'আপনার ইমেইল লিখুন' : 'Enter official email'}
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#0056b3]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-lg bg-[#0056b3] hover:bg-[#004494] text-white text-xs font-bold transition-colors"
                >
                  {language === 'bn' ? 'সাবস্ক্রাইব করুন' : 'Subscribe'}
                </button>
              </form>
            )}

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#28a745]" />
                <span className="font-mono">
                  {language === 'bn' ? `হটলাইন: ${toBengaliNumber(ORG_INFO.phone)}` : `Helpline: ${ORG_INFO.phone}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0056b3]" />
                <span>{ORG_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {ORG_INFO.fullName}. {t.footerRights}{' '}
            <span className="text-slate-300 font-semibold">{ORG_INFO.domain}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>{language === 'bn' ? 'মাইক্রোক্রেডিট রেগুলেটরি অথরিটি (এমআরএ) বিধিমালাসম্মত' : 'MRA Rules Compliant'}</span>
            <span>·</span>
            <span>
              {language === 'bn' 
                ? `এনজিও বিষয়ক ব্যুরো রেজি: ${toBengaliNumber(ORG_INFO.ngoAffairsBureauReg)}` 
                : `NGO Affairs Bureau Reg. ${ORG_INFO.ngoAffairsBureauReg}`}
            </span>
            <span>·</span>
            <span>{language === 'bn' ? 'ঋণগ্রহীতা সুরক্ষা নীতিমালাভুক্ত' : 'Borrower Protection Charter'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
