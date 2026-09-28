import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  ChevronDown, 
  ChevronUp, 
  Users, 
  Leaf, 
  Compass, 
  FileCheck2
} from 'lucide-react';
import { ORG_INFO, CORE_VALUES, FAQ_ITEMS } from '../data/pjusData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const AboutSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { language, toBengaliNumber } = useLanguage();
  const t = TRANSLATIONS[language];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getFaqData = (idx: number, fallback: { q: string; a: string }) => {
    if (language === 'en') return fallback;
    const bnFaqs = [
      {
        q: 'প্রগতি - পিজেইউএস থেকে ক্ষুদ্রঋণ পেতে কী কী যোগ্যতা প্রয়োজন?',
        a: 'আমাদের কর্মএলাকার ১৮ থেকে ৫৮ বছর বয়সী যেকোনো স্থায়ী বাসিন্দা, যার কোনো আয়বর্ধক উদ্যোগ বা বৈধ জীবিকার পরিকল্পনা এবং জাতীয় পরিচয়পত্র (এনআইডি) আছে, তিনি স্থানীয় পিজেইউএস সমবায় সমিতিতে যুক্ত হয়ে ঋণ নিতে পারেন। সাধারণ ঋণের জন্য কোনো জমি বন্ধক বা ব্যাংকের জামানত প্রয়োজন হয় না।'
      },
      {
        q: 'ঋণ পরিশোধের নিয়ম ও সার্ভিস চার্জের হার কেমন?',
        a: 'আমাদের ক্ষুদ্রঋণ বাংলাদেশ মাইক্রোক্রেডিট রেগুলেটরি অথরিটি (এমআরএ)-এর বিধিমালা অনুযায়ী পরিচালিত। নির্ধারিত বার্ষিক ফ্ল্যাট সমতুল্য হার ১১.৫% থেকে ১২.৫% এর মধ্যে সীমাবদ্ধ। ঋণগ্রহীতার সুবিধা অনুযায়ী সাধারণত ৪৪ থেকে ৪৬ সপ্তাহের কিস্তিতে অথবা ক্ষুদ্র উদ্যোক্তা ঋণে মাসিক কিস্তিতে পরিশোধ করা যায়।'
      },
      {
        q: 'সামাজিক প্রকল্পে কোনো দাতা সংস্থা বা করপোরেট প্রতিষ্ঠান সহায়তা করতে পারে?',
        a: 'হ্যাঁ! প্রগতি পিজেইউএস প্রধানমন্ত্রীর কার্যালয়ের এনজিও বিষয়ক ব্যুরো অনুমোদিত (নিবন্ধন: FDO/R-1489)। আমরা বিভিন্ন দেশি-বিদেশি উন্নয়ন সহযোগী, পিকেএসএফ এবং সিএসআর ফান্ডের সাথে সুপেয় পানি, মা ও শিশু স্বাস্থ্য এবং দুর্যোগ মোকাবিলায় যৌথভাবে প্রকল্প বাস্তবায়ন করে থাকি।'
      },
      {
        q: 'অনলাইনে কীভাবে আবেদন করব বা মাঠ কর্মকর্তার সাথে যোগাযোগ হবে কীভাবে?',
        a: 'এই ওয়েবসাইটের ঋণ ক্যালকুলেটর ব্যবহার করে ‘আবেদন করুন’ বাটনে ক্লিক করে ফরমটি পূরণ করুন। আবেদন জমা দেওয়ার ২৪ থেকে ৪৮ ঘণ্টার মধ্যে আপনার নিকটস্থ পিজেইউএস শাখার মাঠ কর্মকর্তা আপনার সাথে ফোনে যোগাযোগ করে আপনার বসতবাড়ি বা ব্যবসা প্রতিষ্ঠানে এসে প্রয়োজনীয় প্রক্রিয়া সম্পন্ন করবেন।'
      }
    ];
    return bnFaqs[idx] || fallback;
  };

  const getCoreValue = (idx: number, fallback: typeof CORE_VALUES[0]) => {
    if (language === 'en') return fallback;
    const bnValues = [
      {
        title: 'স্বচ্ছতা ও এমআরএ অনুশাসন',
        desc: 'মাইক্রোক্রেডিট রেগুলেটরি অথরিটির আইন শতভাগ মেনে প্রতিটি সদস্যের সুস্পষ্ট পাসবুক হিসাব ও গোপন চার্জমুক্ত সেবা।'
      },
      {
        title: 'তৃণমূল নারী ক্ষমতায়ন',
        desc: 'আমাদের মোট ঋণ পোর্টফোলিওর ৮৮% সরাসরি গ্রামীণ নারীদের হাতে পৌঁছে দেওয়া হয়, যা পরিবারে তাদের মর্যাদা বৃদ্ধি করে।'
      },
      {
        title: 'পরিবেশ ও জলবায়ু সচেতনতা',
        desc: 'উপকূলীয় লবণাক্ত চরাঞ্চলে সুপেয় পানির প্ল্যান্ট, সৌরশক্তি এবং লবণাক্ততাসহিষ্ণু শস্য উৎপাদনে বিশেষ প্রণোদনা।'
      },
      {
        title: 'ঋণ নির্ভরতা থেকে স্থায়ী স্বাবলম্বিতা',
        desc: 'আমাদের উদ্দেশ্য শুধু ঋণ দেওয়া নয়; বরং ব্যবসায়িক পরামর্শ দিয়ে সদস্য পরিবারকে স্থায়ী উদ্যোক্তা হিসেবে গড়ে তোলা।'
      }
    ];
    return bnValues[idx] || fallback;
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0056b3] mb-2">
            {t.aboutTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.aboutTitle}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {t.aboutSubtitle}
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Vision */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 to-white border border-blue-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0056b3] text-white flex items-center justify-center mb-5 shadow-xs">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.visionTitle}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.visionDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-200/50 text-xs font-bold text-[#0056b3]">
              {language === 'bn' ? 'স্বাবলম্বিতা · সমতা · মানবিক মর্যাদা' : 'Self-Reliance · Inclusion · Dignity'}
            </div>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-white border border-emerald-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#28a745] text-white flex items-center justify-center mb-5 shadow-xs">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.missionTitle}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.missionDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200/50 text-xs font-bold text-[#28a745]">
              {language === 'bn' ? 'ক্ষমতায়ন · ন্যায়সঙ্গত ঋণ · সামাজিক স্বাস্থ্য' : 'Empowerment · Ethical Credit · Community Health'}
            </div>
          </div>

        </div>

        {/* Legal Standing & Regulatory Framework */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 mb-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-400 uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'bn' ? 'আইনি স্বীকৃতি ও সরকারি অনুমোদন' : 'Statutory Compliance & Legal Standing'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t.govSectionTitle}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.govSectionDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-xs text-slate-400">
                    {language === 'bn' ? 'ক্ষুদ্রঋণ নিয়ন্ত্রক সংস্থা:' : 'Microfinance Authority:'}
                  </div>
                  <div className="font-bold text-sm text-white mt-0.5">Microcredit Regulatory Authority (MRA)</div>
                  <div className="text-xs text-emerald-400 font-mono mt-1">
                    {language === 'bn' ? `সনদ: ${toBengaliNumber(ORG_INFO.mraRegNo)}` : `Lic. ${ORG_INFO.mraRegNo}`}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-xs text-slate-400">
                    {language === 'bn' ? 'এনজিও বিষয়ক ব্যুরো:' : 'NGO Affairs Bureau:'}
                  </div>
                  <div className="font-bold text-sm text-white mt-0.5">
                    {language === 'bn' ? 'প্রধানমন্ত্রীর কার্যালয়, বাংলাদেশ' : "Prime Minister's Office, Bangladesh"}
                  </div>
                  <div className="text-xs text-emerald-400 font-mono mt-1">
                    {language === 'bn' ? `নিবন্ধন: ${toBengaliNumber(ORG_INFO.ngoAffairsBureauReg)}` : `Reg. ${ORG_INFO.ngoAffairsBureauReg}`}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {language === 'bn' ? 'সুশাসন ও নিরীক্ষার মানদণ্ড:' : 'Audited Governance Standards:'}
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#28a745] shrink-0 mt-0.5" />
                  <span>
                    {language === 'bn'
                      ? 'এমআরএ তালিকাভুক্ত সনদপ্রাপ্ত চার্টার্ড অ্যাকাউন্ট্যান্ট ফার্ম দ্বারা বার্ষিক বাহ্যিক নিরীক্ষা।'
                      : 'Annual external financial audit by chartered accountants approved by MRA.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#28a745] shrink-0 mt-0.5" />
                  <span>
                    {language === 'bn'
                      ? 'মানিলন্ডারিং প্রতিরোধ ও স্বচ্ছ অর্থায়ন নীতিমালার শতভাগ বাস্তবায়ন।'
                      : 'Strict anti-money laundering (AML) and counter-terrorism financing protocols.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#28a745] shrink-0 mt-0.5" />
                  <span>
                    {language === 'bn'
                      ? 'সার্ভিস চার্জের হার এমআরএ ঘোষিত সর্বোচ্চ সীমার মধ্যে সর্বদা সংরক্ষিত।'
                      : 'Transparent interest rates capped within MRA specified ceilings.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#28a745] shrink-0 mt-0.5" />
                  <span>
                    {language === 'bn'
                      ? 'অভিজ্ঞ সমাজকর্মী ও উন্নয়ন বিশেষজ্ঞদের নিয়ে গঠিত গণতান্ত্রিক নির্বাহী কমিটি।'
                      : 'Elected General Body and Executive Committee comprising social development experts.'}
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              {language === 'bn' ? 'আমাদের মৌলিক মূলবোধ' : 'Our Foundational Principles'}
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              {language === 'bn' 
                ? 'যা প্রতিটি মাঠ কর্মকর্তা ও প্রাতিষ্ঠানিক সিদ্ধান্তে প্রতিফলিত হয়।' 
                : 'Guiding every field officer, loan appraisal, and humanitarian intervention.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((rawVal, idx) => {
              const val = getCoreValue(idx, rawVal);
              return (
                <div key={idx} className="p-6 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0056b3] flex items-center justify-center mb-4">
                    {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 1 && <Users className="w-5 h-5" />}
                    {idx === 2 && <Leaf className="w-5 h-5" />}
                    {idx === 3 && <Compass className="w-5 h-5" />}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0056b3]">
              {language === 'bn' ? 'সচরাচর জিজ্ঞাসা ও স্পষ্টীকরণ' : 'Transparency & Clarifications'}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {language === 'bn' ? 'সাধারণ প্রশ্নোত্তর (FAQ)' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((rawFaq, idx) => {
              const faq = getFaqData(idx, rawFaq);
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl border border-slate-200/90 bg-white overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-[#0056b3] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#0056b3] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
