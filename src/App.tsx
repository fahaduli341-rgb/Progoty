import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DualServicesGrid } from './components/DualServicesGrid';
import { LoanCalculator } from './components/LoanCalculator';
import { ImpactNumbers } from './components/ImpactNumbers';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ApplyNowModal } from './components/ApplyNowModal';
import { SocialProjectModal } from './components/SocialProjectModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { SocialProject } from './types';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedProductForApply, setSelectedProductForApply] = useState<string | undefined>(undefined);
  const [selectedAmountForApply, setSelectedAmountForApply] = useState<number | undefined>(undefined);
  
  const [activeProjectModal, setActiveProjectModal] = useState<SocialProject | null>(null);

  const handleOpenApply = (productName?: string, amount?: number) => {
    setSelectedProductForApply(productName);
    setSelectedAmountForApply(amount);
    setApplyModalOpen(true);
  };

  const handleCloseApply = () => {
    setApplyModalOpen(false);
    setSelectedProductForApply(undefined);
    setSelectedAmountForApply(undefined);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePartnerWithProject = (projectTitle: string) => {
    handleNavigate('contact');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#fcfdfd] text-slate-800 flex flex-col font-sans">
        
        {/* Navigation Bar */}
        <Navbar 
          onOpenApply={handleOpenApply}
          onNavigate={handleNavigate}
          activeSection={activeSection}
        />

        <main className="flex-1">
          {/* Hero Section */}
          <Hero 
            onOpenApply={() => handleOpenApply()}
            onNavigate={handleNavigate}
          />

          {/* Dual Services Grid (Side-by-side: NGO Social Welfare Projects & Microfinance Loans) */}
          <DualServicesGrid 
            onOpenApply={handleOpenApply}
            onOpenProjectModal={(proj) => setActiveProjectModal(proj)}
            onNavigate={handleNavigate}
          />

          {/* Interactive Loan Repayment Calculator */}
          <LoanCalculator 
            onOpenApply={(prodName, amount) => handleOpenApply(prodName, amount)}
          />

          {/* Impact Numbers & Beneficiary Transformation */}
          <ImpactNumbers />

          {/* About PRAGATI - PJUS (Vision, Mission, Governance, MRA Compliance, FAQs) */}
          <AboutSection />

          {/* Contact Us & Branch Directory */}
          <ContactSection />
        </main>

        {/* Professional Footer */}
        <Footer 
          onNavigate={handleNavigate}
          onOpenApply={handleOpenApply}
        />

        {/* Apply Now Interactive Modal */}
        <ApplyNowModal 
          isOpen={applyModalOpen}
          onClose={handleCloseApply}
          initialProduct={selectedProductForApply}
          initialAmount={selectedAmountForApply}
        />

        {/* Social Project Details Modal */}
        <SocialProjectModal 
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
          onPartnerClick={handlePartnerWithProject}
        />

        {/* Floating WhatsApp Share & Chat Widget */}
        <WhatsAppWidget />

      </div>
    </LanguageProvider>
  );
}
