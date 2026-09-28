import React, { useState } from 'react';
import { Share2, MessageCircle, Copy, Check, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhatsAppWidget: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { language } = useLanguage();

  const currentUrl = typeof window !== 'undefined' 
    ? (window.location.origin.includes('run.app') ? window.location.href : 'https://ais-pre-sftunv5ki2l7qf6jd3pugd-926269607988.asia-southeast1.run.app')
    : 'https://ais-pre-sftunv5ki2l7qf6jd3pugd-926269607988.asia-southeast1.run.app';

  const shareText = language === 'bn'
    ? `প্রগতি - পিজেইউএস (PRAGATI - PJUS) এনজিও ও ক্ষুদ্রঋণ সংস্থার অফিসিয়াল ওয়েবসাইট: ${currentUrl}`
    : `Official portal of PRAGATI - PJUS (NGO & Microfinance Organization): ${currentUrl}`;

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  const whatsappChatUrl = `https://wa.me/8801711892415?text=${encodeURIComponent(
    language === 'bn' 
      ? 'আসসালামু আলাইকুম, আমি প্রগতি পিজেইউএস ক্ষুদ্রঋণ/সামাজিক প্রকল্প সম্পর্কে জানতে চাই।'
      : 'Hello, I would like to inquire about PRAGATI PJUS microfinance and social projects.'
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Share & Chat Popover */}
      {expanded && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 animate-in fade-in slide-in-from-bottom-3 duration-200 text-slate-800">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                <MessageCircle className="w-4 h-4 fill-white" />
              </div>
              <span className="font-extrabold text-sm text-slate-900">
                {language === 'bn' ? 'হোয়াটসঅ্যাপ সেবা ও শেয়ার' : 'WhatsApp Share & Chat'}
              </span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {/* Share to WhatsApp */}
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>{language === 'bn' ? 'হোয়াটসঅ্যাপে শেয়ার করুন' : 'Share on WhatsApp'}</span>
            </a>

            {/* Direct WhatsApp Chat with Helpline */}
            <a
              href={whatsappChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-[#0056b3] hover:bg-[#004494] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{language === 'bn' ? 'হেল্পলাইনে সরাসরি চ্যাট' : 'Chat on WhatsApp Helpline'}</span>
            </a>

            {/* Copy Web Link */}
            <button
              type="button"
              onClick={handleCopy}
              className="w-full py-2 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#28a745]" />
                  <span className="text-[#28a745]">{language === 'bn' ? 'লিংক কপি হয়েছে!' : 'Link Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'ওয়েবসাইট লিংক কপি করুন' : 'Copy Website Link'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="group flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-hidden ring-4 ring-[#25D366]/20"
        title="WhatsApp Share & Chat"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-white" />
        </div>
        <span className="hidden sm:inline font-bold">
          {language === 'bn' ? 'হোয়াটসঅ্যাপ' : 'WhatsApp'}
        </span>
      </button>
    </div>
  );
};
