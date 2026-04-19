import { motion } from 'motion/react';
import { Scissors, Palette, Film, Video, Tv } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Precision Editing',
    description: 'Seamless cuts and narrative flow that keeps your audience hooked from the first frame.',
  },
  {
    icon: Palette,
    title: 'Color Grading',
    description: 'Dramatic and high-end color correction to establish the perfect mood for your story.',
  },
  {
    icon: Film,
    title: 'Motion Graphics',
    description: 'Title sequences and visual effects that add a layer of professional polish.',
  },
  {
    icon: Tv,
    title: 'Commercial Ads',
    description: 'Fast-paced, high-energy edits designed to convert and leave a lasting brand impression.',
  },
  {
    icon: Video,
    title: 'Social Media',
    description: 'Dynamic Short-form content optimized for TikTok, Reels, and YouTube Shorts.',
  },
  {
    icon: Film,
    title: 'Sound Design',
    description: 'Immersive audio environments and perfect rhythm between sound and visual.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cinematic-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4">The Toolkit</h2>
            <div className="w-24 h-1 bg-cinematic-gold mx-auto mb-6" />
            <p className="text-white/40 max-w-lg mx-auto">
              End-to-end post-production services tailored for brands, creators, and filmmakers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-cinematic-dark border border-white/5 rounded-2xl group hover:border-cinematic-gold/30 transition-all hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cinematic-gold group-hover:text-black transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
