/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Showreel from './components/Showreel';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative overflow-x-hidden selection:bg-cinematic-gold selection:text-black">
      {/* Film Grain Overlay */}
      <div className="grain" />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Showreel />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
