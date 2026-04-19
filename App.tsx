/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Showreel from './Showreel';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

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
