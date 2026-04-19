import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-filming-with-a-retro-camera-34553-preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Grain & Dark Overlay */}
        <div className="absolute inset-0 bg-cinematic-black/60 backdrop-blur-[2px]" />
        <div className="cinematic-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="font-display text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-cinematic-gold glow-text px-4 py-1 border border-cinematic-gold/30 rounded-full inline-block mb-6">
            Editing Is Storytelling
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-8">
            Crafting Stories <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-cinematic-gold/80">
              Frame by Frame
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-medium mb-10 leading-relaxed">
            Professional Video Editor specializing in Cinematic Storytelling, high-end Color Grading, and narrative-driven motion design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#showreel" className="btn-cinematic btn-primary flex items-center gap-3">
            <Play className="w-5 h-5 fill-current" />
            Watch Showreel
          </a>
          <a href="#work" className="btn-cinematic btn-outline flex items-center gap-3 group">
            View Work
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[30px] h-[50px] border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cinematic-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
