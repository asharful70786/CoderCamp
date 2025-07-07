
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import TechStack from '../components/TechStack';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import OurProcess from './OurProcess';
import GrowthSection from './GrowthSection';
import WhatWeDo from './WhatWeDo';
import ProcessStrip from '../components/ProcessStrip';
import ContactInvite from '../components/ContactInvite';
import ProjectShowcase from '../components/ProjectShowcase';
import OwnerBanner from '../components/OwnerBanner';

 function HomePage() {
  return (
     <div className="bg-[#0c0c0c] text-white min-h-screen font-sans w-full">

      <HeroSection />
      <ProcessStrip />
      <WhatWeDo />
      <TechStack /> 
       <ProjectShowcase />  
     
      <GrowthSection />
      <Services />
        <OwnerBanner />  
      <OurProcess />
     
      <ContactForm />
      <Testimonials />
      <ContactInvite />
   
    </div>
  );
}


export default HomePage;
