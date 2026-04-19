import { Instagram, Youtube, Linkedin, Film } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-cinematic-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm overflow-hidden border border-cinematic-gold translate-y-[-2px]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1xH_ycSBK-9xBj7lsm0PMLaHQcIqQo8j5=w100" 
                  alt="Vijay Anand"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-black text-3xl tracking-tighter uppercase">
                 Vijay <span className="text-cinematic-gold">Anand</span>
              </span>
            </div>
            <p className="text-white/40 max-w-xs text-sm uppercase font-mono tracking-widest">
              Professional Video Editor SPECIALIZING IN CINEMATIC NARRATIVES.
            </p>
          </div>

          <div className="flex gap-8">
            {[
              { icon: Instagram, href: '#', label: 'Instagram' },
              { icon: Youtube, href: '#', label: 'YouTube' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-cinematic-gold hover:text-cinematic-gold transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
          <p className="text-white/30 text-[10px] uppercase font-mono tracking-[0.2em]">
            © 2026 Vijay Anand. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-white/30 text-[10px] uppercase font-mono tracking-[0.2em]">
            <a href="#" className="hover:text-cinematic-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cinematic-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
