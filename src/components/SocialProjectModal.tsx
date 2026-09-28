import React from 'react';
import { X, CheckCircle2, MapPin, Users, ArrowRight } from 'lucide-react';
import { SocialProject } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface SocialProjectModalProps {
  project: SocialProject | null;
  onClose: () => void;
  onPartnerClick: (projectTitle: string) => void;
}

export const SocialProjectModal: React.FC<SocialProjectModalProps> = ({
  project,
  onClose,
  onPartnerClick
}) => {
  const { language, toBengaliNumber } = useLanguage();

  if (!project) return null;

  const getTitle = () => {
    if (language === 'en') return project.title;
    switch (project.id) {
      case 'wash-climate': return 'সুপেয় পানি ও ডেল্টা জলবায়ু সহনশীলতা (WASH)';
      case 'maternal-health': return 'ভ্রাম্যমাণ মা ও শিশু স্বাস্থ্যসেবা কর্মসূচি';
      case 'rural-education': return 'আশার আলো: অবহেলিত শিশুদের শিক্ষা ও উপবৃত্তি';
      case 'vocational-training': return 'যুব কারিগরি ও আইসিটি দক্ষতা উন্নয়ন ইনস্টিটিউট';
      case 'disaster-response': return 'জরুরি বন্যা ও প্রাকৃতিক দুর্যোগকালীন ত্রাণ সহায়তা';
      default: return project.title;
    }
  };

  const getDescription = () => {
    if (language === 'en') return project.description;
    switch (project.id) {
      case 'wash-climate': 
        return 'খুলনা ও সাতক্ষীরার উপকূলীয় চরাঞ্চলে মাটির অতিরিক্ত লবণাক্ততার কারণে হাজারো পরিবার তীব্র সুপেয় পানির সংকটে ভোগে। প্রগতি পিজেইউএস সৌরচালিত রিভার্স অসমোসিস প্ল্যান্ট এবং স্কুল-কমিউনিটিতে বৃষ্টির পানি সংরক্ষণাগার স্থাপন করে সুপেয় পানি নিশ্চিত করছে।';
      case 'maternal-health':
        return 'গ্রামীণ মায়েরা সময়মতো জেলা হাসপাতালে পৌঁছাতে পারেন না। পিজেইউএস ভ্রাম্যমাণ মেডিক্যাল ভ্যানে আল্ট্রাসনোগ্রাম, রক্তের জরুরি পরীক্ষা এবং প্রশিক্ষিত ধাত্রী দ্বারা প্রত্যন্ত ইউনিয়নে প্রসবপূর্ব ও প্রসবোত্তর স্বাস্থ্যসেবা প্রদান করছে।';
      case 'rural-education':
        return 'দিনমজুর পরিবারের শিশুরা অভাবের কারণে প্রাথমিক স্তর পেরোনোর আগেই ঝরে পড়ে। পিজেইউএস আনন্দ পাঠশালা সান্ধ্যকালীন কোচিংয়ের মাধ্যমে তাদের মাতৃভাষা বাংলা, গণিত ও বিজ্ঞানে দক্ষ করে তোলে এবং মাসিক উপবৃত্তি প্রদান করে।';
      case 'vocational-training':
        return 'যশোর ও ঢাকায় অবস্থিত পিজেইউএস টেকনিক্যাল ইনস্টিটিউটে ৩ থেকে ৬ মাসের ব্যবহারিক কোর্সের মাধ্যমে বেকার যুবকদের তৈরি পোশাক ডিজাইন, ইন্ডাস্ট্রিয়াল সেলাই, সোলার ইনস্টলেশন ও কম্পিউটার ফ্রিল্যান্সিংয়ে দক্ষ করে কর্মসংস্থান নিশ্চিত করা হচ্ছে।';
      case 'disaster-response':
        return 'ঘূর্ণিঝড় বা নদীভাঙন দেখা দিলে পিজেইউএস জরুরি রেসকিউ টিম মাত্র ৬ ঘণ্টার মধ্যে বোট নিয়ে পানিবন্দী মানুষের কাছে শুকনো খাবার, শিশুখাদ্য, বিশুদ্ধ পানির বড়ি ও জরুরি নগদ অর্থ পৌঁছে দেয়।';
      default: return project.description;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Image */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-[#28a745] bg-black/50 px-2.5 py-0.5 rounded">
              {project.category} · {language === 'bn' ? 'চলমান প্রকল্প' : project.status}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold mt-1.5 leading-snug">
              {getTitle()}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Key Quick Badges */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0056b3] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">
                  {language === 'bn' ? 'কর্মএলাকা' : 'Catchment Region'}
                </span>
                <span className="font-bold text-slate-800">{project.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#28a745] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">
                  {language === 'bn' ? 'সুবিধাভোগীর সংখ্যা' : 'Beneficiary Reach'}
                </span>
                <span className="font-bold text-slate-800 font-mono">
                  {language === 'bn' ? toBengaliNumber(project.beneficiariesCount) : project.beneficiariesCount}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {language === 'bn' ? 'প্রকল্পের প্রেক্ষাপট ও বাস্তব চ্যালেঞ্জ' : 'Program Overview & Grassroots Challenge'}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {getDescription()}
            </p>
          </div>

          {/* Key Activities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {language === 'bn' ? 'মাঠপর্যায়ের প্রধান কার্যক্রম:' : 'Core Interventions & Field Activities:'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyActivities.map((act, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-[#28a745] shrink-0 mt-0.5" />
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500 font-medium">
              {language === 'bn' ? 'প্রধানমন্ত্রীর কার্যালয়ের এনজিও বিষয়ক ব্যুরো অনুমোদিত' : 'Registered NGO Affairs Bureau Project'}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 flex-1 sm:flex-initial"
              >
                {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onPartnerClick(project.title);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#28a745] hover:bg-[#218838] text-white text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 flex-1 sm:flex-initial transition-colors"
              >
                <span>{language === 'bn' ? 'প্রকল্পে সহায়তা বা যুক্ত হন' : 'Partner with this Initiative'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
