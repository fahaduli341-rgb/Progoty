import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  ShieldCheck, 
  Coins, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { LOAN_PRODUCTS } from '../data/pjusData';
import { LoanProduct } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface LoanCalculatorProps {
  onOpenApply: (productName: string, amount: number) => void;
}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({ onOpenApply }) => {
  const { language, toBengaliNumber } = useLanguage();
  const t = TRANSLATIONS[language];

  const [selectedProductId, setSelectedProductId] = useState<string>('jagoron');
  const [loanAmount, setLoanAmount] = useState<number>(40000);
  const [frequency, setFrequency] = useState<'weekly' | 'monthly'>('weekly');
  const [monthlyTenure, setMonthlyTenure] = useState<number>(12);
  const [showAmortization, setShowAmortization] = useState<boolean>(false);

  const currentProduct: LoanProduct = useMemo(() => {
    return LOAN_PRODUCTS.find((p) => p.id === selectedProductId) || LOAN_PRODUCTS[0];
  }, [selectedProductId]);

  const handleProductChange = (productId: string) => {
    setSelectedProductId(productId);
    const prod = LOAN_PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      if (loanAmount < prod.minAmount) {
        setLoanAmount(prod.minAmount);
      } else if (loanAmount > prod.maxAmount) {
        setLoanAmount(prod.maxAmount);
      }
    }
  };

  const calculations = useMemo(() => {
    const rate = currentProduct.interestRateAnnual;
    let totalInstallments = 46;
    let totalTenureMonths = 12;

    if (frequency === 'weekly') {
      totalInstallments = currentProduct.tenureWeeks;
      totalTenureMonths = 12;
    } else {
      totalTenureMonths = monthlyTenure;
      totalInstallments = monthlyTenure;
    }

    const serviceCharge = Math.round(loanAmount * (rate / 100) * (totalTenureMonths / 12));
    const totalRepayable = loanAmount + serviceCharge;
    const installmentAmount = Math.ceil(totalRepayable / totalInstallments);

    const principalRatio = Math.round((loanAmount / totalRepayable) * 100);
    const chargeRatio = 100 - principalRatio;

    return {
      serviceCharge,
      totalRepayable,
      installmentAmount,
      totalInstallments,
      totalTenureMonths,
      principalRatio,
      chargeRatio,
      rate
    };
  }, [loanAmount, currentProduct, frequency, monthlyTenure]);

  const sampleSchedule = useMemo(() => {
    const rows = [];
    let balance = calculations.totalRepayable;
    const perInst = calculations.installmentAmount;
    const today = new Date();

    for (let i = 1; i <= 5; i++) {
      const instDate = new Date(today);
      if (frequency === 'weekly') {
        instDate.setDate(today.getDate() + i * 7);
      } else {
        instDate.setMonth(today.getMonth() + i);
      }
      balance = Math.max(0, balance - perInst);
      rows.push({
        installmentNo: i,
        date: instDate.toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        amount: perInst,
        remaining: balance
      });
    }
    return rows;
  }, [calculations, frequency, language]);

  const presetAmounts = useMemo(() => {
    const min = currentProduct.minAmount;
    const max = currentProduct.maxAmount;
    const step = (max - min) / 4;
    return [
      min,
      Math.round((min + step) / 5000) * 5000,
      Math.round((min + step * 2) / 5000) * 5000,
      Math.round((min + step * 3) / 5000) * 5000,
      max
    ];
  }, [currentProduct]);

  const formatMoney = (val: number) => {
    const formatted = val.toLocaleString();
    return language === 'bn' ? toBengaliNumber(formatted) : formatted;
  };

  const productNameDisplay = language === 'bn' && currentProduct.bengaliName 
    ? currentProduct.bengaliName 
    : currentProduct.name;

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0056b3] bg-blue-100/60 px-3 py-1 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.calcTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.calcTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {t.calcSubtitle}
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Configuration Controls (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            {/* Step 1: Select Loan Program */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                {t.calcStep1}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {LOAN_PRODUCTS.map((prod) => {
                  const isSelected = prod.id === selectedProductId;
                  const displayName = language === 'bn' && prod.bengaliName 
                    ? prod.bengaliName 
                    : prod.name.split(' (')[0];

                  return (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => handleProductChange(prod.id)}
                      className={`text-left p-3 rounded-xl border text-sm transition-all flex flex-col justify-between ${
                        isSelected 
                          ? 'border-[#0056b3] bg-blue-50/80 ring-1 ring-[#0056b3]' 
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-bold ${isSelected ? 'text-[#0056b3]' : 'text-slate-800'}`}>
                          {displayName}
                        </span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded font-mono ${
                          isSelected ? 'bg-[#0056b3] text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {language === 'bn' ? toBengaliNumber(prod.interestRateAnnual) : prod.interestRateAnnual}%
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 font-mono">
                        ৳{formatMoney(prod.minAmount)} – ৳{formatMoney(prod.maxAmount)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Loan Amount Slider & Input */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="loan-slider" className="text-sm font-bold text-slate-900">
                  {t.calcStep2}
                </label>
                <div className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-500">৳</span>
                  <input
                    type="number"
                    value={loanAmount}
                    min={currentProduct.minAmount}
                    max={currentProduct.maxAmount}
                    step={1000}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (!isNaN(val)) setLoanAmount(val);
                    }}
                    className="w-28 text-right font-extrabold text-base text-[#0056b3] bg-transparent focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Slider Input */}
              <input
                id="loan-slider"
                type="range"
                min={currentProduct.minAmount}
                max={currentProduct.maxAmount}
                step={1000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0056b3]"
              />

              {/* Min - Max Labels */}
              <div className="flex justify-between text-xs text-slate-500 font-mono">
                <span>{language === 'bn' ? 'নূন্যতম:' : 'Min:'} ৳{formatMoney(currentProduct.minAmount)}</span>
                <span>{language === 'bn' ? 'সর্বোচ্চ:' : 'Max:'} ৳{formatMoney(currentProduct.maxAmount)}</span>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {presetAmounts.map((amt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setLoanAmount(amt)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md border transition-colors ${
                      loanAmount === amt 
                        ? 'bg-[#0056b3] text-white border-[#0056b3]' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    ৳{language === 'bn' ? toBengaliNumber((amt / 1000).toFixed(0)) + ' হাজার' : (amt / 1000).toFixed(0) + 'k'}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Repayment Frequency & Tenure */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-sm font-bold text-slate-900">
                {t.calcStep3}
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFrequency('weekly')}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all text-left flex items-center justify-between ${
                    frequency === 'weekly'
                      ? 'border-[#28a745] bg-green-50/70 text-slate-900 ring-1 ring-[#28a745]'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="font-bold flex items-center gap-1.5">
                      <span>{t.calcWeekly}</span>
                      <span className="text-[10px] bg-[#28a745] text-white px-1.5 py-0.2 rounded font-bold">
                        {t.calcWeeklyRecommended}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {language === 'bn' 
                        ? `${toBengaliNumber(currentProduct.tenureWeeks)} কিস্তি (দোরগোড়ায়)` 
                        : `${currentProduct.tenureWeeks} Installments (Doorstep)`}
                    </div>
                  </div>
                  {frequency === 'weekly' && <CheckCircle2 className="w-5 h-5 text-[#28a745]" />}
                </button>

                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all text-left flex items-center justify-between ${
                    frequency === 'monthly'
                      ? 'border-[#0056b3] bg-blue-50/70 text-slate-900 ring-1 ring-[#0056b3]'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="font-bold">{t.calcMonthly}</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {t.calcMonthlyDesc}
                    </div>
                  </div>
                  {frequency === 'monthly' && <CheckCircle2 className="w-5 h-5 text-[#0056b3]" />}
                </button>
              </div>

              {frequency === 'monthly' && (
                <div className="p-3 bg-blue-50/40 rounded-lg border border-blue-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">
                    {language === 'bn' ? 'মেয়াদ নির্ধারণ করুন:' : 'Tenure Duration:'}
                  </span>
                  <div className="flex gap-2">
                    {[12, 18, 24].map((months) => (
                      <button
                        key={months}
                        type="button"
                        onClick={() => setMonthlyTenure(months)}
                        className={`px-3 py-1 rounded font-bold ${
                          monthlyTenure === months
                            ? 'bg-[#0056b3] text-white'
                            : 'bg-white text-slate-700 border border-slate-200'
                        }`}
                      >
                        {language === 'bn' ? `${toBengaliNumber(months)} মাস` : `${months} Months`}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Scheme Highlights */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70 text-xs text-slate-600 space-y-1.5">
              <div className="font-bold text-slate-800">
                {productNameDisplay} — {language === 'bn' ? 'সুবিধাসমূহ:' : 'Highlights:'}
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                {currentProduct.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Panel: Repayment Breakdown Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-blue-100 shadow-md p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            {/* Header Badge */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {t.calcSummaryTitle}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#28a745] bg-green-50 px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {t.calcMraBadge}
                </span>
              </div>

              {/* Big Installment Highlight */}
              <div className="mt-4 p-5 rounded-xl bg-gradient-to-br from-[#0056b3] to-[#004494] text-white shadow-sm">
                <div className="text-xs text-blue-200 font-medium">
                  {t.calcEstimatedInstallment} ({frequency === 'weekly' ? t.calcWeekly : t.calcMonthly})
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
                  ৳{formatMoney(calculations.installmentAmount)}
                  <span className="text-sm font-normal text-blue-200 ml-1">
                    / {frequency === 'weekly' ? (language === 'bn' ? 'সপ্তাহ' : 'week') : (language === 'bn' ? 'মাস' : 'month')}
                  </span>
                </div>
                <div className="text-xs text-blue-100 mt-2 flex items-center justify-between border-t border-blue-400/30 pt-2">
                  <span>{t.calcTotalInstallments}</span>
                  <span className="font-bold text-white font-mono">
                    {language === 'bn' ? toBengaliNumber(calculations.totalInstallments) : calculations.totalInstallments} {t.calcTimes}
                  </span>
                </div>
              </div>
            </div>

            {/* Breakdown Line Items */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">{t.calcPrincipal}</span>
                <span className="font-bold text-slate-900 font-mono">৳{formatMoney(loanAmount)}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">
                  {t.calcServiceCharge} ({language === 'bn' ? toBengaliNumber(calculations.rate) : calculations.rate}%)
                </span>
                <span className="font-bold text-slate-900 font-mono">৳{formatMoney(calculations.serviceCharge)}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">{t.calcWelfareCharge}</span>
                <span className="font-bold text-[#28a745]">{t.calcFreeWelfare}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">{t.calcHiddenFee}</span>
                <span className="font-bold text-[#28a745]">{t.calcNoHiddenFee}</span>
              </div>
              <div className="flex justify-between py-2 text-base font-extrabold text-[#0056b3]">
                <span>{t.calcTotalRepayable}</span>
                <span className="font-mono">৳{formatMoney(calculations.totalRepayable)}</span>
              </div>
            </div>

            {/* Visual Ratio Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>{t.calcRatioPrincipal} ({language === 'bn' ? toBengaliNumber(calculations.principalRatio) : calculations.principalRatio}%)</span>
                <span>{t.calcRatioCharge} ({language === 'bn' ? toBengaliNumber(calculations.chargeRatio) : calculations.chargeRatio}%)</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
                <div 
                  className="bg-[#0056b3] h-full"
                  style={{ width: `${calculations.principalRatio}%` }}
                />
                <div 
                  className="bg-[#28a745] h-full"
                  style={{ width: `${calculations.chargeRatio}%` }}
                />
              </div>
            </div>

            {/* Toggle Amortization Schedule */}
            <div>
              <button
                type="button"
                onClick={() => setShowAmortization(!showAmortization)}
                className="w-full text-xs font-bold text-slate-600 hover:text-[#0056b3] flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <span>{showAmortization ? t.calcToggleHide : t.calcToggleSchedule}</span>
                {showAmortization ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showAmortization && (
                <div className="mt-3 overflow-x-auto border border-slate-200 rounded-lg animate-in fade-in duration-200">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                      <tr>
                        <th className="py-2 px-3">#</th>
                        <th className="py-2 px-3">{language === 'bn' ? 'তারিখ' : 'Date'}</th>
                        <th className="py-2 px-3 text-right">{language === 'bn' ? 'কিস্তি' : 'Payment'}</th>
                        <th className="py-2 px-3 text-right">{language === 'bn' ? 'অবশিষ্ট' : 'Remaining'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono">
                      {sampleSchedule.map((row) => (
                        <tr key={row.installmentNo} className="hover:bg-slate-50/50">
                          <td className="py-2 px-3 font-bold text-slate-900">
                            {language === 'bn' ? toBengaliNumber(row.installmentNo) : row.installmentNo}
                          </td>
                          <td className="py-2 px-3 text-slate-600 font-sans">{row.date}</td>
                          <td className="py-2 px-3 text-right font-bold text-[#0056b3]">৳{formatMoney(row.amount)}</td>
                          <td className="py-2 px-3 text-right text-slate-600">৳{formatMoney(row.remaining)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Apply Button */}
            <button
              onClick={() => onOpenApply(currentProduct.name, loanAmount)}
              className="w-full py-3.5 px-4 rounded-xl bg-[#28a745] hover:bg-[#218838] text-white font-extrabold text-sm shadow-md transition-all duration-150 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>{t.calcApplyThis} (৳{formatMoney(loanAmount)})</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.calcIndicative}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
