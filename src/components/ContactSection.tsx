import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';
import { ORG_INFO, BRANCH_OFFICES } from '../data/pjusData';
import { BranchOffice } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ContactSection: React.FC = () => {
  const { language, toBengaliNumber } = useLanguage();
  const t = TRANSLATIONS[language];

  const [selectedBranchId, setSelectedBranchId] = useState<string>('dhaka-co');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Microfinance Loan Inquiry',
    branch: 'Central Head Office (Dhaka)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  const activeBranch: BranchOffice = 
    BRANCH_OFFICES.find((b) => b.id === selectedBranchId) || BRANCH_OFFICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const code = `PJUS-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryCode(code);
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      category: 'Microfinance Loan Inquiry',
      branch: 'Central Head Office (Dhaka)',
      message: ''
    });
  };

  const getBranchDisplayName = (b: BranchOffice) => {
    if (language === 'en') return b.name;
    switch (b.id) {
      case 'dhaka-co': return 'কেন্দ্রীয় প্রধান কার্যালয় (মিরপুর, ঢাকা)';
      case 'monirampur': return 'মণিরামপুর আঞ্চলিক শাখা (যশোর)';
      case 'kalaroa': return 'কলারোয়া শাখা ও সেবা কেন্দ্র (সাতক্ষীরা)';
      case 'keshabpur': return 'কেশবপুর কৃষি ঋণ ইউনিট (যশোর)';
      case 'jhenaidah': return 'ঝিনাইদহ সদর শাখা';
      case 'bagerhat': return 'বাগেরহাট উপকূলীয় ওয়াশ ও সেবা কেন্দ্র';
      default: return b.name;
    }
  };

  const getBranchTabName = (b: BranchOffice) => {
    if (language === 'en') return b.name.replace(' Branch', '').replace(' Unit', '').replace(' Center', '');
    switch (b.id) {
      case 'dhaka-co': return 'ঢাকা প্রধান কার্যালয়';
      case 'monirampur': return 'মণিরামপুর (যশোর)';
      case 'kalaroa': return 'কলারোয়া (সাতক্ষীরা)';
      case 'keshabpur': return 'কেশবপুর';
      case 'jhenaidah': return 'ঝিনাইদহ';
      case 'bagerhat': return 'বাগেরহাট';
      default: return b.name;
    }
  };

  const getBranchAddress = (b: BranchOffice) => {
    if (language === 'en') return b.address;
    switch (b.id) {
      case 'dhaka-co': return 'বাড়ি ২৪/এ, রোড ০৯, ব্লক সি, মিরপুর-১, ঢাকা-১২১৬';
      case 'monirampur': return 'পিজেইউএস ভবন, হাসপাতাল রোড, মণিরামপুর বাজার, যশোর';
      case 'kalaroa': return 'সিনেমা হল মোড়, কলারোয়া পৌরসভা, সাতক্ষীরা';
      case 'keshabpur': return 'কলেজ রোড, কেশবপুর উপজেলা কমপ্লেক্স সংলগ্ন, যশোর';
      case 'jhenaidah': return 'হামদাহ বাসস্ট্যান্ড, পোস্ট অফিস রোড, ঝিনাইদহ সদর';
      case 'bagerhat': return 'পুরাতন কোর্ট রোড, বাগেরহাট সদর';
      default: return b.address;
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0056b3] mb-2">
            {t.contactTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Quick Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0056b3] flex items-center justify-center mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {language === 'bn' ? 'সরাসরি হটলাইন' : 'Direct Helpline'}
            </div>
            <div className="font-mono font-extrabold text-slate-900 text-sm mt-1">
              {language === 'bn' ? toBengaliNumber(ORG_INFO.phone) : ORG_INFO.phone}
            </div>
            <div className="text-xs text-slate-500 mt-0.5 font-mono">
              {language === 'bn' ? `ল্যান্ডলাইন: ${toBengaliNumber(ORG_INFO.telephone)}` : `Landline: ${ORG_INFO.telephone}`}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-green-50 text-[#28a745] flex items-center justify-center mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {language === 'bn' ? 'অফিসিয়াল ইমেইল' : 'Official Email'}
            </div>
            <div className="font-extrabold text-slate-900 text-sm mt-1">{ORG_INFO.email}</div>
            <div className="text-xs text-slate-500 mt-0.5">Loans: {ORG_INFO.supportEmail}</div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0056b3] flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {language === 'bn' ? 'কেন্দ্রীয় সচিবালয়' : 'Central Secretariat'}
            </div>
            <div className="font-bold text-slate-900 text-xs mt-1 leading-snug">
              {language === 'bn' 
                ? 'বাড়ি ২৪/এ, রোড ০৯, ব্লক সি, মিরপুর-১, ঢাকা-১২১৬'
                : 'House 24/A, Road 09, Block C, Mirpur-1, Dhaka-1216'}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-green-50 text-[#28a745] flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {language === 'bn' ? 'কার্যসময়' : 'Office Hours'}
            </div>
            <div className="font-bold text-slate-900 text-xs mt-1">
              {language === 'bn' ? 'রবি – বৃহস্পতি: সকাল ৯:০০ – বিকাল ৫:০০' : 'Sun – Thu: 9:00 AM – 5:00 PM'}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {language === 'bn' ? 'শুক্রবার ও সরকারি ছুটির দিন বন্ধ' : 'Closed on Friday & Govt Holidays'}
            </div>
          </div>

        </div>

        {/* Form & Branch Directory Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">{t.contactFormTitle}</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {t.contactFormSubtitle}
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-14 h-14 bg-[#28a745] text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-emerald-900">
                    {t.formSuccessTitle}
                  </h4>
                  <p className="text-xs text-emerald-700 mt-1 max-w-md mx-auto leading-relaxed">
                    {t.formSuccessDesc}
                  </p>
                  <div className="inline-block mt-3 px-3 py-1.5 bg-white border border-emerald-300 rounded font-mono font-bold text-[#0056b3] text-sm">
                    {inquiryCode}
                  </div>
                </div>
                <p className="text-xs text-slate-600">
                  {language === 'bn'
                    ? `আমাদের প্রতিনিধি আপনার দেওয়া নম্বর (${toBengaliNumber(formData.phone)})-এ দ্রুত যোগাযোগ করবেন।`
                    : `A program officer from the selected branch will contact you at ${formData.phone}.`}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:text-[#0056b3] rounded-lg text-xs font-bold shadow-2xs hover:bg-slate-50 transition-colors"
                >
                  {t.formReset}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.formFullName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'bn' ? 'যেমন: মোহাম্মদ রহিম' : 'e.g. Mohammad Rahim'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0056b3] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.formPhone}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="017XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0056b3] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.formEmail}
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0056b3] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.formCategory}
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0056b3] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 focus:outline-hidden bg-white"
                    >
                      <option value="Microfinance Loan Inquiry">
                        {language === 'bn' ? 'ক্ষুদ্রঋণ সংক্রান্ত তথ্য ও আবেদন' : 'Microfinance Loan Inquiry'}
                      </option>
                      <option value="Social Project Partnership / CSR">
                        {language === 'bn' ? 'সামাজিক প্রকল্প অংশীদারিত্ব / সিএসআর' : 'Social Project Partnership / CSR'}
                      </option>
                      <option value="Donation / Grant Assistance">
                        {language === 'bn' ? 'অনুদান ও মানবিক সহায়তা' : 'Donation / Grant Assistance'}
                      </option>
                      <option value="Branch Visit / Samity Membership">
                        {language === 'bn' ? 'সমিতির সদস্যপদ ও শাখা পরিদর্শনের অনুরোধ' : 'Branch Visit / Samity Membership'}
                      </option>
                      <option value="General Query">
                        {language === 'bn' ? 'সাধারণ প্রশ্ন ও জিজ্ঞাসা' : 'General Query'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.formBranch}
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0056b3] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 focus:outline-hidden bg-white"
                  >
                    {BRANCH_OFFICES.map((b) => (
                      <option key={b.id} value={`${b.name} (${b.district})`}>
                        {getBranchDisplayName(b)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.formMessage}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={language === 'bn' ? 'আপনার জিজ্ঞাসা বা উদ্যোগের বিবরণ সংক্ষেপে লিখুন...' : 'Describe your inquiry, business purpose, or how we can assist you...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0056b3] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-6 rounded-lg bg-[#0056b3] hover:bg-[#004494] text-white font-bold text-sm shadow-xs flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                  >
                    {submitting ? (
                      <span>{t.formSubmitting}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.formSubmit}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#28a745]" />
                  <span>
                    {language === 'bn'
                      ? 'আপনার ব্যক্তিগত তথ্যের নিরাপত্তা শতভাগ সংরক্ষিত।'
                      : 'Your privacy is protected. Data is kept strictly confidential under PJUS policy.'}
                  </span>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Branch Directory & Office Locator (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#0056b3]" />
                  <h3 className="font-bold text-base text-slate-900">{t.branchDirectoryTitle}</h3>
                </div>
                <span className="text-xs font-bold text-[#28a745] bg-green-50 px-2 py-0.5 rounded">
                  {language === 'bn' ? '১৮টি ফিল্ড সেন্টার' : '18 Field Centers'}
                </span>
              </div>

              {/* Branch quick tabs */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {BRANCH_OFFICES.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBranchId(b.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedBranchId === b.id
                        ? 'bg-[#0056b3] text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {getBranchTabName(b)}
                  </button>
                ))}
              </div>

              {/* Active Branch Detailed Card */}
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 space-y-3 mt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0056b3] bg-blue-100 px-2 py-0.5 rounded">
                      {activeBranch.type}
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-base mt-1.5">
                      {getBranchDisplayName(activeBranch)}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {activeBranch.district}, {activeBranch.division}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-blue-200/50">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#0056b3] shrink-0 mt-0.5" />
                    <span>{getBranchAddress(activeBranch)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#28a745] shrink-0" />
                    <span className="font-medium font-mono">{activeBranch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#0056b3] shrink-0" />
                    <span>{activeBranch.email}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 pt-1 font-medium">
                    {language === 'bn' ? 'দায়িত্বপ্রাপ্ত কর্মকর্তা:' : 'Branch Officer:'} {activeBranch.manager}
                  </div>
                </div>
              </div>

              {/* Static Map Visual Representation */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 h-44 bg-slate-100">
                <iframe
                  title="Branch Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.0097778939!2d90.3372881!3d23.8043644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c9d6981881%3A0x1d467784f1837894!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                  className="w-full h-full border-0 pointer-events-none opacity-85"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-bold text-slate-700 shadow-xs">
                  {activeBranch.district} {language === 'bn' ? 'অঞ্চল' : 'Region'}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
