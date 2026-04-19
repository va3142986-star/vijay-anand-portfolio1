import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, X } from 'lucide-react';

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="showreel" className="py-24 bg-cinematic-dark relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cinematic-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-cinematic-gold tracking-[0.5em] uppercase mb-4 block">
              The Master Tape
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6">2026 Showreel</h2>
            <p className="max-w-xl mx-auto text-white/50">
              A 90-second journey through my most impactful work, highlighting narrative flow, visual style, and technical expertise.
            </p>
          </motion.div>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {/* Movie-style Frame */}
          <div className="relative aspect-video rounded-2xl overflow-hidden ring-4 ring-white/5 group-hover:ring-cinematic-gold/30 transition-all duration-700 shadow-[0_0_100px_rgba(0,0,0,0.8)]">
             {isPlaying ? (
               <div className="absolute inset-0 bg-black">
                 <iframe
                   src="https://drive.google.com/file/d/1LCn8xnRuCp1u2UdscGvWwL1ZXzEw6VeL/preview"
                   className="w-full h-full border-none"
                   allow="autoplay; fullscreen"
                 ></iframe>
                 <button 
                   onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
                   className="absolute top-6 right-6 p-2 bg-black/50 hover:bg-black rounded-full text-white transition-colors z-[60]"
                 >
                   <X />
                 </button>
               </div>
             ) : (
               <>
                 <img 
                   src="https://lh3.googleusercontent.com/d/1tyc3pqXp4ad9EX2lS_TNz-TbV_P7qZIa=w1920" 
                   alt="Showreel Poster" 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                   referrerPolicy="no-referrer"
                 />
                 
                 {/* Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-cinematic-gold flex items-center justify-center rounded-full shadow-[0_0_50px_rgba(255,184,0,0.3)] group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-10 h-10 md:w-14 md:h-14 text-black fill-current ml-2" />
                    </div>
                 </div>

                 {/* Film Grain & Overlays */}
                 <div className="cinematic-overlay opacity-40" />
                 
                 {/* Text Overlay (credits style) */}
                 <div className="absolute bottom-10 left-10 p-4 border-l-2 border-cinematic-gold">
                    <div className="font-mono text-[10px] uppercase text-cinematic-gold tracking-widest mb-1">Starring</div>
                    <div className="text-xl font-bold uppercase tracking-tighter">Selected Works of 2026</div>
                 </div>
               </>
             )}
          </div>
          
          {/* Floating Accents */}
          {!isPlaying && (
            <>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cinematic-orange/10 blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cinematic-gold/10 blur-3xl animate-pulse" />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
