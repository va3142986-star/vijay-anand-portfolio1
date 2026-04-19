import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Curious Compass',
    role: 'Nature and Geography YouTube Channel',
    text: 'The animations in the short video he edited was on point. He keep editing minimal yet effective, so that viewers get the best experience from the video.',
    avatar: 'https://lh3.googleusercontent.com/d/1pQVvNp0WpCpwoNUeAcnR8TGJJdAiRkPe=w400',
  },
  {
    name: "The User's Perspective",
    role: 'Tech Creator',
    text: 'Editing is storytelling, and he truly understand the soul of a narrative. Every cut feels intentional and emotionally resonant.',
    avatar: 'https://lh3.googleusercontent.com/d/1Y2A2OkJudLbzBjuuXwner4oYfGTCSsN-=w400',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-cinematic-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Voices from the <span className="text-cinematic-gold">Edit Suite</span></h2>
            <p className="text-white/50">High-praise from industry leaders, visionary filmmakers, and world-class creators.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-cinematic-black border border-white/5 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-white/5" />
              <p className="text-white/70 italic mb-8 leading-relaxed relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-cinematic-gold/20" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-tight">{t.name}</h4>
                  <p className="text-[10px] text-cinematic-gold font-mono uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
