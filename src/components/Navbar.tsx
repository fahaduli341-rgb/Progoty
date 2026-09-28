import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight, ShieldCheck, Globe } from 'lucide-react';
import { ORG_INFO } from '../data/pjusData';
import { PJUSLogo } from './PJUSLogo';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  onOpenApply: (productName?: string, amount?: number) => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, toBengaliNumber } = useLanguage();
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navHome, id: 'home' },
    { name: t.navAbout, id: 'about' },
    { name: t.navMicrofinance, id: 'microfinance' },
    { name: t.navSocial, id: 'social-projects' },
    { name: t.navCalculator, id: 'calculator' },
    { name: t.navImpact, id: 'impact' },
    { name: t.navContact, id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-[#0056b3] text-white text-xs border-b border-blue-900/20 py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 md:gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-blue-100">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#28a745]" />
              <span className="font-medium text-white">{t.topbarMra}</span>{' '}
              <span className="font-mono">{language === 'bn' ? toBengaliNumber(ORG_INFO.mraRegNo) : ORG_INFO.mraRegNo}</span>
            </span>
            <span className="hidden sm:inline text-blue-300/60">|</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#28a745]" />
              <span>{t.topbarHelpline} {language === 'bn' ? toBengaliNumber(ORG_INFO.phone) : ORG_INFO.phone}</span>
            </span>
            <span className="hidden lg:inline text-blue-300/60">|</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#28a745]" />
              <span>{ORG_INFO.email}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-blue-100">
            <span className="hidden sm:inline">{t.topbarExperience}</span>
            <span className="hidden sm:inline text-blue-300/60">·</span>
            
            {/* Language Switcher in Header */}
            <div className="inline-flex items-center bg-blue-950/60 rounded-md p-0.5 border border-blue-400/30">
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                  language === 'bn' 
                    ? 'bg-[#28a745] text-white shadow-2xs' 
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                  language === 'en' 
                    ? 'bg-[#28a745] text-white shadow-2xs' 
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                English
              </button>
            </div>

            <span className="font-semibold text-white tracking-wide bg-blue-800/80 px-2 py-0.5 rounded text-[10px]">
              {ORG_INFO.domain.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-200 border-b border-slate-200/80 ${scrolled ? 'py-2 bg-white/95 backdrop-blur-md shadow-sm' : 'py-3 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo with the user's uploaded official emblem */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            {/* Official PJUS Logo Emblem from User Upload */}
            <div className="relative p-0.5 shrink-0 transition-transform duration-200 group-hover:scale-105">
              <PJUSLogo size={52} />
            </div>

            <div className="leading-tight">
              <div className="flex items-baseline gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#0056b3]">
                  {language === 'bn' ? 'প্রগতি' : 'PRAGATI'}
                </span>
                <span className="font-bold text-xl tracking-tight text-[#28a745]">
                  {language === 'bn' ? 'পিজেইউএস' : 'PJUS'}
                </span>
              </div>
              <div className="text-[11px] font-medium text-slate-500 tracking-wider uppercase -mt-0.5">
                {language === 'bn' ? 'এনজিও ও ক্ষুদ্রঋণ সংস্থা' : 'NGO & Microfinance'} · <span className="text-slate-800 font-semibold">{ORG_INFO.domain}</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md relative ${
                    isActive 
                      ? 'text-[#0056b3] font-bold bg-blue-50/70' 
                      : 'text-slate-600 hover:text-[#0056b3] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0056b3] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:border-[#0056b3] hover:text-[#0056b3] bg-slate-50 hover:bg-white transition-colors"
              title="Toggle Bangla / English"
            >
              <Globe className="w-3.5 h-3.5 text-[#0056b3]" />
              <span>{language === 'bn' ? 'EN' : 'বাং'}</span>
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="text-xs font-semibold text-slate-700 hover:text-[#0056b3] px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              {t.navBranchLocator}
            </button>

            <button
              onClick={() => onOpenApply()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#28a745] hover:bg-[#218838] text-white font-bold text-sm shadow-sm transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden focus:ring-2 focus:ring-[#28a745]/40"
            >
              <span>{t.navApply}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Mobile Lang Button */}
            <button
              onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
              className="px-2 py-1 rounded bg-blue-50 text-[#0056b3] text-xs font-extrabold border border-blue-200"
            >
              {language === 'bn' ? 'EN' : 'বাং'}
            </button>

            <button
              onClick={() => onOpenApply()}
              className="px-3 py-1.5 rounded-md bg-[#28a745] text-white text-xs font-bold shadow-xs"
            >
              {t.navApply}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0056b3] hover:bg-slate-100 rounded-md focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
            
            {/* Language Selection in Mobile Menu */}
            <div className="flex items-center justify-between p-2.5 mb-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              <span className="font-bold text-slate-700 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#0056b3]" />
                <span>ভাষা / Language:</span>
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => setLanguage('bn')}
                  className={`px-3 py-1 rounded font-bold ${language === 'bn' ? 'bg-[#28a745] text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
                >
                  বাংলা
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded font-bold ${language === 'en' ? 'bg-[#28a745] text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-blue-50 text-[#0056b3] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#28a745] hover:bg-[#218838] text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2"
              >
                <span>{t.navApply} (Microloan / Membership)</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 space-y-1 mt-3">
                <div className="font-semibold text-slate-900">{t.topbarHelpline}</div>
                <div className="flex items-center gap-2 text-slate-700 font-mono">
                  <Phone className="w-3.5 h-3.5 text-[#0056b3]" />
                  <span>{language === 'bn' ? toBengaliNumber(ORG_INFO.phone) : ORG_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-[#0056b3]" />
                  <span>{ORG_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
