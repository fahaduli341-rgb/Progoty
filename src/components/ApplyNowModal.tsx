import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft, 
  Coins, 
  AlertCircle 
} from 'lucide-react';
import { LOAN_PRODUCTS, BRANCH_OFFICES } from '../data/pjusData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface ApplyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialAmount?: number;
}

export const ApplyNowModal: React.FC<ApplyNowModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  initialAmount
}) => {
  const { language, toBengaliNumber } = useLanguage();
  const t = TRANSLATIONS[language];

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    loanProduct: initialProduct || 'Jagoron (Rural Microcredit)',
    amount: initialAmount || 40000,
    tenureType: 'weekly',
    fullName: '',
    phone: '',
    nid: '',
    dob: '',
    district: 'Jashore',
    branch: 'Monirampur Regional Branch',
    profession: 'Small Grocery Shop',
    monthlyIncome: '18000',
    address: '',
    agreed: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [appId, setAppId] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, loanProduct: initialProduct }));
    }
    if (initialAmount) {
      setFormData((prev) => ({ ...prev, amount: initialAmount }));
    }
  }, [initialProduct, initialAmount]);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitting(true);
      setTimeout(() => {
        const id = `PJUS-APP-${Math.floor(100000 + Math.random() * 900000)}`;
        setAppId(id);
        setSubmitting(false);
        setSubmitted(true);
      }, 800);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  const formatMoney = (val: number) => {
    const formatted = val.toLocaleString();
    return language === 'bn' ? toBengaliNumber(formatted) : formatted;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0056b3] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Coins className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight">
                {t.modalTitle}
              </h3>
              <p className="text-xs text-blue-100">
                {t.modalSub}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicators */}
        {!submitted && (
          <div className="bg-slate-50 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#0056b3]' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 1 ? 'bg-[#0056b3] text-white' : 'bg-slate-200'}`}>
                {language === 'bn' ? '১' : '1'}
              </span>
              <span>{language === 'bn' ? 'স্কিম ও পরিমাণ' : 'Loan Program'}</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-200" />
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#0056b3]' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 2 ? 'bg-[#0056b3] text-white' : 'bg-slate-200'}`}>
                {language === 'bn' ? '২' : '2'}
              </span>
              <span>{language === 'bn' ? 'আবেদনকারী' : 'Applicant Info'}</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-200" />
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-[#0056b3]' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 3 ? 'bg-[#0056b3] text-white' : 'bg-slate-200'}`}>
                {language === 'bn' ? '৩' : '3'}
              </span>
              <span>{language === 'bn' ? 'পেশা ও শাখা' : 'Branch & Livelihood'}</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-green-50 text-[#28a745] rounded-full flex items-center justify-center mx-auto ring-8 ring-green-50/50">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-slate-900">
                  {t.modalSuccessTitle}
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                  {language === 'bn' 
                    ? `আপনার কাঙ্ক্ষিত ৳${formatMoney(formData.amount)} টাকার আবেদনটি পিজেইউএস সিস্টেমে নথিভুক্ত হয়েছে।`
                    : `Your loan application for ৳${formatMoney(formData.amount)} has been registered in the PJUS MIS system.`}
                </p>
                <div className="mt-3 inline-block bg-slate-100 border border-slate-300 rounded-lg px-4 py-2 font-mono font-bold text-sm text-[#0056b3]">
                  {appId}
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 text-left text-xs space-y-2">
                <div className="font-bold text-[#0056b3] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{language === 'bn' ? 'পরবর্তী করণীয় ও মাঠ কর্মকর্তার ভিজিট:' : 'Next Steps by PJUS Field Officer:'}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>
                    {language === 'bn'
                      ? `আমাদের মাঠ কর্মকর্তা আগামী ২৪-৪৮ ঘণ্টার মধ্যে ${formData.phone} নম্বরে ফোন করবেন।`
                      : `Our field credit officer will phone you within 24–48 hours at ${formData.phone}.`}
                  </li>
                  <li>
                    {language === 'bn'
                      ? 'কর্মকর্তা আপনার বর্তমান ঠিকানায় এসে সংক্ষিপ্ত তথ্য যাচাই ও সমিতিতে নিবন্ধন সম্পন্ন করবেন।'
                      : 'They will arrange a brief doorstep verification at your residence or business premises.'}
                  </li>
                  <li>
                    {language === 'bn'
                      ? 'প্রয়োজনীয় কাগজপত্র প্রস্তুত রাখুন: এনআইডি/জন্ম সনদের ফটোকপি এবং ২ কপি পাসপোর্ট সাইজ ছবি।'
                      : 'Keep ready: 1 photocopy of your NID/Birth Certificate and 2 passport photos.'}
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-3 rounded-xl bg-[#28a745] hover:bg-[#218838] text-white font-bold text-sm shadow-xs transition-colors"
              >
                {t.modalClose}
              </button>
            </div>
          ) : (
            <form onSubmit={handleNext}>
              
              {/* STEP 1: Loan Program & Desired Amount */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.modalSelectScheme}
                    </label>
                    <select
                      value={formData.loanProduct}
                      onChange={(e) => setFormData({ ...formData, loanProduct: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0056b3] focus:ring-2 focus:ring-blue-100 text-sm font-semibold text-slate-900 bg-white"
                    >
                      {LOAN_PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.name}>
                          {language === 'bn' && prod.bengaliName ? prod.bengaliName : prod.name} (সর্বোচ্চ ৳{formatMoney(prod.maxAmount)})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.modalReqAmount}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 font-bold text-slate-400">৳</span>
                      <input
                        type="number"
                        required
                        min={5000}
                        max={500000}
                        step={1000}
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                        className="w-full pl-8 pr-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0056b3] focus:ring-2 focus:ring-blue-100 text-base font-bold text-slate-900 font-mono"
                      />
                    </div>
                    <div className="flex gap-2 mt-2">
                      {[20000, 40000, 75000, 100000].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setFormData({ ...formData, amount: amt })}
                          className={`px-2 py-1 text-xs rounded border font-bold ${formData.amount === amt ? 'bg-blue-50 border-[#0056b3] text-[#0056b3]' : 'bg-slate-50 border-slate-200 text-slate-600'}`}
                        >
                          ৳{language === 'bn' ? toBengaliNumber((amt / 1000).toFixed(0)) + ' হাজার' : (amt / 1000).toFixed(0) + 'k'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.modalRepayFreq}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={`p-3 rounded-lg border flex items-center gap-2 cursor-pointer ${formData.tenureType === 'weekly' ? 'border-[#28a745] bg-green-50/60' : 'border-slate-200'}`}>
                        <input
                          type="radio"
                          name="tenureType"
                          value="weekly"
                          checked={formData.tenureType === 'weekly'}
                          onChange={() => setFormData({ ...formData, tenureType: 'weekly' })}
                          className="accent-[#28a745]"
                        />
                        <span className="text-xs font-bold text-slate-800">
                          {language === 'bn' ? 'সাপ্তাহিক (৪৬ কিস্তি)' : 'Weekly (46 Weeks)'}
                        </span>
                      </label>
                      <label className={`p-3 rounded-lg border flex items-center gap-2 cursor-pointer ${formData.tenureType === 'monthly' ? 'border-[#0056b3] bg-blue-50/60' : 'border-slate-200'}`}>
                        <input
                          type="radio"
                          name="tenureType"
                          value="monthly"
                          checked={formData.tenureType === 'monthly'}
                          onChange={() => setFormData({ ...formData, tenureType: 'monthly' })}
                          className="accent-[#0056b3]"
                        />
                        <span className="text-xs font-bold text-slate-800">
                          {language === 'bn' ? 'মাসিক (১২-২৪ মাস)' : 'Monthly (12-24 Mos)'}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      {language === 'bn' 
                        ? 'আবেদনের জন্য কোনো জামানত বা অগ্রিম ফি প্রদান করতে হয় না।' 
                        : 'No deposit fee or collateral mortgage is required to initiate an application.'}
                    </span>
                  </div>
                </div>
              )}

              {/* STEP 2: Applicant Details */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.modalApplicantName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'bn' ? 'যেমন: মোছাঃ ফাতেমা বেগম' : 'e.g. Fatima Begum'}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0056b3] text-sm text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0056b3] text-sm text-slate-900 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t.modalNid}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'bn' ? '১০ বা ১৭ সংখ্যার এনআইডি' : '10 or 17 digit NID'}
                        value={formData.nid}
                        onChange={(e) => setFormData({ ...formData, nid: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0056b3] text-sm text-slate-900 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.modalAddress}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'bn' ? 'গ্রাম / ওয়ার্ড / ডাকঘর / উপজেলা' : 'Village / Road / Ward / Post Office'}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0056b3] text-sm text-slate-900"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Livelihood Purpose & Branch */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t.modalProfession}
                      </label>
                      <select
                        value={formData.profession}
                        onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-900 bg-white"
                      >
                        <option value="Dairy & Cattle Rearing">{language === 'bn' ? 'ডেইরি ও গাভী পালন' : 'Dairy & Cattle Rearing'}</option>
                        <option value="Agriculture & Paddy Cultivation">{language === 'bn' ? 'কৃষি ও ধান/শস্য চাষ' : 'Agriculture & Paddy Cultivation'}</option>
                        <option value="Small Grocery Shop (Mudir Dokan)">{language === 'bn' ? 'মুদি ও খুচরা দোকান' : 'Small Grocery Shop (Mudir Dokan)'}</option>
                        <option value="Tailoring & Handicrafts">{language === 'bn' ? 'সেলাই ও হস্তশিল্প' : 'Tailoring & Handicrafts'}</option>
                        <option value="Poultry & Hatchery">{language === 'bn' ? 'পোল্ট্রি ও হাঁস-মুরগি খামার' : 'Poultry & Hatchery'}</option>
                        <option value="Fisheries & Aquaculture">{language === 'bn' ? 'মৎস্য চাষ' : 'Fisheries & Aquaculture'}</option>
                        <option value="Van/Rickshaw/Small Transport">{language === 'bn' ? 'ভ্যান/রিকশা/ক্ষুদ্র পরিবহন' : 'Van/Rickshaw/Small Transport'}</option>
                        <option value="Other Microenterprise">{language === 'bn' ? 'অন্যান্য ক্ষুদ্র ব্যবসা' : 'Other Microenterprise'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t.modalMonthlyIncome}
                      </label>
                      <input
                        type="number"
                        placeholder="15000"
                        value={formData.monthlyIncome}
                        onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.modalNearestBranch}
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-900 bg-white"
                    >
                      {BRANCH_OFFICES.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name} ({b.district})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600">
                      <input
                        type="checkbox"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                        className="mt-0.5 accent-[#0056b3]"
                        required
                      />
                      <span>
                        {t.modalAgree}
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{t.modalBack}</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 rounded-xl bg-[#0056b3] hover:bg-[#004494] text-white font-bold text-sm shadow-xs flex items-center gap-1.5 transition-colors disabled:opacity-75"
                >
                  {submitting ? (
                    <span>{language === 'bn' ? 'আবেদন জমা হচ্ছে...' : 'Submitting...'}</span>
                  ) : step < 3 ? (
                    <>
                      <span>{t.modalNext}</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>{t.modalSubmitBtn}</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
