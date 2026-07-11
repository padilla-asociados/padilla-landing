'use client';

import HeroComponent from './components/HeroComponent';
import AboutComponent from './components/AboutComponent';
import TeamComponent from './components/TeamComponent';
import AlliesComponent from './components/AlliesComponent';
import ServicesComponent from './components/ServicesComponent';
import ContactComponent from './components/ContactComponent';
import { useScrollReveal } from './hooks/useScrollReveal';
import WhatsAppButton from './components/WhatsAppButton';
import NavMenu from './components/NavMenu';

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <NavMenu />
      <WhatsAppButton />
      <HeroComponent />
      <AboutComponent />
      <TeamComponent />
      <AlliesComponent />
      <ServicesComponent />
      <ContactComponent />
    </main>
  );
}