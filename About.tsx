import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { label: 'Years Experience', value: '02+' },
  { label: 'Projects Completed', value: '100+' },
  { label: 'Happy Clients', value: '20+' },
  { label: 'YouTube Channels', value: '4' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  const filter = useTransform(scrollYProgress, [0.2, 0.8], ["grayscale(100%)", "grayscale(0%)"]);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-cinematic-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with dramatic masking */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <motion.img
                src="https://lh3.googleusercontent.com/d/1xH_ycSBK-9xBj7lsm0PMLaHQcIqQo8j5=w1000"
                alt="Professional Editor at Work"
                style={{ filter }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-transparent to-transparent opacity-60" />
            </div>
            {/* Visual Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-cinematic-gold/40" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-cinematic-gold/40" />
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Where Technical Precision <br /> Meets <span className="text-cinematic-gold">Raw Emotion</span>
              </h2>
              <div className="w-20 h-1 bg-cinematic-gold mb-8" />
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                I believe that every frame has a purpose. My journey in video editing started with a fascination for how invisible cuts can evoke profound feelings. Over the last 2 years, I've transformed raw footage into compelling narratives for many independent creators.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Specializing in fast-paced commercial editing and cinematic storytelling, I use the latest tools in the industry to bring your vision to life.
              </p>
            </motion.div>

            {/* Credits Style Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="font-mono text-xs text-cinematic-gold tracking-[0.2em] mb-1 uppercase opacity-70">
                    {stat.label}
                  </div>
                  <div className="text-3xl font-display font-black tracking-tighter">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
