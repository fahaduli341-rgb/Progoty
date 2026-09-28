import React from 'react';
import { 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  HeartHandshake, 
  Building2
} from 'lucide-react';
import { IMPACT_STATISTICS, BENEFICIARY_STORIES } from '../data/pjusData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ImpactNumbers: React.FC = () => {
  const { language, toBengaliNumber } = useLanguage();
  const t = TRANSLATIONS[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-6 h-6 text-[#0056b3]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#28a745]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#0056b3]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#28a745]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#0056b3]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#28a745]" />;
      default: return <Users className="w-6 h-6 text-[#0056b3]" />;
    }
  };

  const getStatValue = (val: string) => {
    if (language === 'en') return val;
    switch (val) {
      case '10,000+': return '১০,০০০+';
      case '50+': return '৫০+';
      case '৳85+ Cr': return '৳৮৫+ কোটি';
      case '98.6%': return '৯৮.৬%';
      case '88%': return '৮৮%';
      case '18': return '১৮টি';
      default: return toBengaliNumber(val);
    }
  };

  const getStatLabel = (idx: number, fallback: string) => {
    if (language === 'en') return fallback;
    const bnLabels = [
      'স্বাবলম্বী পরিবার',
      'মাঠপর্যায়ের প্রকল্প',
      'বিতরণকৃত ক্ষুদ্রঋণ',
      'টেকসই আদায়ের হার',
      'নারী উদ্যোক্তা',
      'আঞ্চলিক শাখা ও কেন্দ্র'
    ];
    return bnLabels[idx] || fallback;
  };

  const getStatSubtext = (idx: number, fallback: string) => {
    if (language === 'en') return fallback;
    const bnSubs = [
      'ক্ষুদ্রঋণ ও সামাজিক উন্নয়ন কর্মসূচির মাধ্যমে দারিদ্র্যসীমা অতিক্রম করেছে।',
      'স্বাস্থ্য, নিরাপদ পানি, শিক্ষা ও জলবায়ু সহনশীলতা নিয়ে বিস্তৃত।',
      'সহজ শর্তে ও স্বচ্ছ ব্যবস্থাপনায় তৃণমূল পর্যায়ে বিতরণ করা হয়েছে।',
      'ঋণগ্রহীতাদের শতভাগ সততা ও নিয়মিত মাঠ যোগাযোগের দৃষ্টান্ত।',
      'পরিবারের আর্থিক সিদ্ধান্ত ও আয়বর্ধক কাজে সরাসরি নারীর নেতৃত্ব।',
      'খুলনা, যশোর, সাতক্ষীরা ও ঢাকায় সরাসরি মাঠপর্যায়ের কার্যালয়।'
    ];
    return bnSubs[idx] || fallback;
  };

  const getStoryData = (story: typeof BENEFICIARY_STORIES[0]) => {
    if (language === 'en') return story;
    if (story.id === 'morsheda') {
      return {
        ...story,
        name: 'মোর্শেদা বেগম',
        role: 'ডেইরি খামারী ও গ্রাম সমবায় নেত্রী',
        village: 'ধুলগ্রাম, মণিরামপুর',
        district: 'যশোর',
        loanOrProgram: 'জাগরণ ও সুফলন কৃষি ঋণ',
        quote: 'পিজেইউএস থেকে ৩৫,০০০ টাকা ঋণ নিয়ে প্রথম গাভী কিনি। আজ আমার ৭টি হলস্টেইন গাভী রয়েছে এবং চারজন নারীর কর্মসংস্থান করেছি।',
        story: 'মোর্শেদার পরিবার ছনের ঘরে বাস করত। স্বামী অসুস্থ হলে পিজেইউএস তাকে ক্ষুদ্রঋণ ও গাভী পালনের প্রশিক্ষণ দেয়। আজ তিনি প্রতিদিন ৬০ লিটার দুধ বিক্রি করে পাকা বাড়ি নির্মাণ করেছেন।',
        growthSummary: 'মাসিক আয় ৪,০০০ টাকা থেকে ৪৮,০০০ টাকায় বৃদ্ধি'
      };
    }
    if (story.id === 'abdul-halim') {
      return {
        ...story,
        name: 'আব্দুল হালিম হাওলাদার',
        role: 'ঘানিভাঙা খাঁটি সরিষার তেল উৎপাদক',
        village: 'কলারোয়া',
        district: 'সাতক্ষীরা',
        loanOrProgram: 'অগ্রসর ক্ষুদ্র উদ্যোগ ঋণ',
        quote: 'জমি বন্ধক ছাড়া ব্যাংক ঋণ দেয়নি। পিজেইউএস আমাদের কাজ দেখে ৩ দিনের মধ্যে ঋণ অনুমোদন করেছে।',
        story: 'আব্দুল হালিম কাঠের ঘানিতে সরিষার তেল তৈরি করতেন। পিজেইউএস অগ্রসর ঋণের মাধ্যমে (৳১,৫০,০০০) তিনি মোটরচালিত ঘানি বসিয়ে আজ তিনটি পাইকারি বাজারে খাঁটি তেল সরবরাহ করছেন।',
        growthSummary: '৩টি পাইকারি বাজারে দোকান সম্প্রসারণ'
      };
    }
    if (story.id === 'kulsum-akter') {
      return {
        ...story,
        name: 'কুলসুম আক্তার',
        role: 'বুটিক ও সেলাই প্রশিক্ষণ কেন্দ্র',
        village: 'বাঘারপাড়া',
        district: 'যশোর',
        loanOrProgram: 'পিজেইউএস কারিগরি ইনস্টিটিউট + জাগরণ ঋণ',
        quote: 'পিজেইউএস শুধু বিনামূল্যে সেলাই শেখায়নি, ৩টি সেলাই মেশিন কিনতে সহজ ঋণও দিয়েছে।',
        story: 'অল্প বয়সে বিধবা হয়ে চরম অসহায় অবস্থায় পড়েন কুলসুম। পিজেইউএস কারিগরি কেন্দ্র থেকে ৩ মাসের কোর্স সম্পন্ন করে ২৫ হাজার টাকা ঋণ নেন। আজ তিনি গ্রামের মেয়েদের সেলাই শেখান।',
        growthSummary: '৪৫ জন অসহায় মেয়েকে বিনামূল্যে প্রশিক্ষণ দান'
      };
    }
    return story;
  };

  return (
    <section id="impact" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#28a745] mb-2">
            {t.impactTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.impactTitle}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {t.impactSubtitle}
          </p>
        </div>

        {/* Impact Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-16">
          {IMPACT_STATISTICS.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:bg-white transition-all text-center flex flex-col justify-between"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-white shadow-2xs border border-slate-100 flex items-center justify-center mb-3">
                {getIcon(stat.icon)}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {getStatValue(stat.value)}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1 leading-snug">
                  {getStatLabel(idx, stat.label)}
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 leading-relaxed border-t border-slate-200/50 pt-2">
                {getStatSubtext(idx, stat.subtext)}
              </p>
            </div>
          ))}
        </div>

        {/* Voices from the Ground: Beneficiary Impact Stories */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0056b3]">
                {t.impactStoriesTag}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                {t.impactStoriesTitle}
              </h3>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              {language === 'bn' ? 'যশোর ও খুলনা অঞ্চল থেকে বাস্তব সাক্ষ্য' : 'Verified Case Audits · Southwestern Bangladesh'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {BENEFICIARY_STORIES.map((rawStory) => {
              const story = getStoryData(rawStory);
              return (
                <div 
                  key={story.id}
                  className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <div className="text-base font-bold">{story.name}</div>
                        <div className="text-xs text-slate-300 font-medium">
                          {story.village}, {story.district}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="text-xs font-bold text-[#0056b3]">
                        {story.role}
                      </div>

                      <div className="relative pl-3 border-l-2 border-[#28a745]">
                        <p className="text-xs italic text-slate-700 leading-relaxed">
                          "{story.quote}"
                        </p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {story.story}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#28a745]">{story.growthSummary}</span>
                    <span className="text-[11px] text-slate-500 font-medium">{story.loanOrProgram}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
