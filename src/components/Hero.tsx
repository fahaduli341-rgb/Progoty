import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, TrendingUp, Users, CheckCircle2, Calculator } from 'lucide-react';
import { ORG_INFO } from '../data/pjusData';
import { PJUSLogo } from './PJUSLogo';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onOpenApply: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply, onNavigate }) => {
  const { language, toBengaliNumber } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-100">
      {/* Subtle organic background patterns */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#0056b3]/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#28a745]/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Inspiring Copy & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Accreditation / Legitimacy kicker */}
            <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-slate-700 bg-white border border-slate-200/90 shadow-2xs rounded-lg px-3 py-1.5">
              <span className="flex h-2 w-2 rounded-full bg-[#28a745] animate-pulse" />
              <span className="text-[#0056b3] font-bold">{t.heroBadge}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-mono">
                {language === 'bn' ? `সনদ: ${toBengaliNumber(ORG_INFO.mraRegNo)}` : `Reg: ${ORG_INFO.mraRegNo}`}
              </span>
            </div>

            {/* Inspiring Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              {t.heroTitlePart1}{' '}
              <span className="text-[#0056b3]">{t.heroTitlePart2}</span>{' '}
              {language === 'bn' ? '—' : ''} <span className="text-[#28a745]">{t.heroTitlePart3}</span>.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {t.heroSubtitle}
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#28a745] shrink-0" />
                <span>{t.heroCheck1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#28a745] shrink-0" />
                <span>{t.heroCheck2}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#28a745] shrink-0" />
                <span>{t.heroCheck3}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#28a745] shrink-0" />
                <span>{t.heroCheck4}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenApply()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0056b3] hover:bg-[#004494] text-white font-bold text-base shadow-sm transition-all duration-150 transform hover:-translate-y-0.5"
              >
                <span>{t.heroCtaApply}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('calculator')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white border border-slate-300 hover:border-[#0056b3] text-slate-800 hover:text-[#0056b3] font-bold text-base shadow-2xs transition-colors"
              >
                <Calculator className="w-4 h-4 text-[#0056b3]" />
                <span>{t.heroCtaCalc}</span>
              </button>

              <button
                onClick={() => onNavigate('social-projects')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-slate-600 hover:text-[#28a745] font-bold text-sm transition-colors"
              >
                <span>{t.heroCtaProjects}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Trust Footnote */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 border-t border-slate-200/60">
              <ShieldCheck className="w-4 h-4 text-[#0056b3] shrink-0" />
              <span>
                {language === 'bn'
                  ? `এনজিও বিষয়ক ব্যুরো নিবন্ধন: ${toBengaliNumber(ORG_INFO.ngoAffairsBureauReg)} এবং মাইক্রোক্রেডিট রেগুলেটরি অথরিটি (এমআরএ) সনদপ্রাপ্ত।`
                  : `Registered with NGO Affairs Bureau Bangladesh (Reg: ${ORG_INFO.ngoAffairsBureauReg}) and licensed by Microcredit Regulatory Authority.`}
              </span>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Showcase with Official Logo Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt="Rural female entrepreneur supported by PRAGATI PJUS microfinance"
                  className="w-full h-80 sm:h-96 object-cover object-top"
                  loading="eager"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                {/* Overlaid Logo Emblem on Top Left of photo */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-2 shadow-md flex items-center gap-2 border border-slate-100">
                  <PJUSLogo size={38} />
                  <div className="leading-none pr-1">
                    <div className="text-[11px] font-extrabold text-[#0056b3]">প্রগতি পিজেইউএস</div>
                    <div className="text-[9px] font-semibold text-[#28a745] mt-0.5">PRAGATI - PJUS</div>
                  </div>
                </div>

                {/* Overlaid Beneficiary Quote */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#28a745] bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded">
                      {language === 'bn' ? 'তৃণমূল সাফল্যের চিত্র' : 'Grassroots Impact Story'}
                    </span>
                    <span className="text-xs text-slate-300">
                      {language === 'bn' ? '· মণিরামপুর, যশোর' : '· Jashore District'}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold leading-snug">
                    {t.heroStorySnippet}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {t.heroStoryAuthor}
                  </p>
                </div>
              </div>

              {/* Floating Quick Stat Card 1: Disbursed Amount */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0056b3] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-900 leading-none">
                    {t.heroStatDisbursed}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                    {t.heroStatDisbursedLabel}
                  </div>
                </div>
              </div>

              {/* Floating Quick Stat Card 2: 10,000+ Families */}
              <div className="absolute -bottom-5 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-[#28a745] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-900 leading-none">
                    {language === 'bn' ? '১০,০০০+' : '10,000+'}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                    {t.heroStatFamiliesLabel}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
