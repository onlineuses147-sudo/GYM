/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Trainers from './components/Trainers';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import BMICalculator from './components/BMICalculator';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <main className="bg-dark-900 min-h-screen font-sans selection:bg-brand-primary selection:text-dark-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Trainers />
      <Facilities />
      <Testimonials />
      <Pricing />
      <BMICalculator />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}


