import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ExternalLink, X, Maximize2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'UDTA PANCHHI',
    category: 'MUSIC',
    thumbnail: 'https://lh3.googleusercontent.com/d/14cXmCC1I_8GCMNvax9qBrcD3hGMbPWXJ=w1000',
    video: 'https://drive.google.com/file/d/19EYlhbQdo7ImL7-e0HJ-pSn1OzQdD56-/preview',
    tools: ['Davinci Resolve', 'After Effects'],
    isDrive: true,
  },
  {
    id: 2,
    title: 'THE CHESSBOARD',
    category: '3D ANIMATION',
    thumbnail: 'https://lh3.googleusercontent.com/d/190vYEihlVBWG67QylciazYGQ_PotkAMf=w1000',
    video: 'https://drive.google.com/file/d/1cFOqOBgXLcb_4C4fPaAeC0-bvcuvImip/preview',
    tools: ['Davinci Resolve', 'Blender'],
    isDrive: true,
  },
  {
    id: 3,
    title: 'ANIMAL BATTLE',
    category: 'YOUTUBE SHORTS',
    thumbnail: 'https://lh3.googleusercontent.com/d/1iHfzOyq_NrUO6gLBHX8jfbP9MjmNPvOf=w1000',
    video: 'https://drive.google.com/file/d/1nD391UnpBmK6TUqSDOALJNBXhc1SWYCR/preview',
    tools: ['Davinci Resolve', 'After Effects', 'Google Veo', 'Adobe Express'],
    isDrive: true,
  },
  {
    id: 4,
    title: 'Silent Wilderness',
    category: 'NATURE FILM',
    thumbnail: 'https://drive.google.com/thumbnail?id=1AFvvP9LFbTC43puPU73i07OJiyGwZDAK&sz=w1000',
    video: 'https://drive.google.com/file/d/1AFvvP9LFbTC43puPU73i07OJiyGwZDAK/preview',
    tools: ['Davinci Resolve'],
    isDrive: true,
  },
  {
    id: 5,
    title: 'Tech Review',
    category: 'YOUTUBE VIDEO',
    thumbnail: 'https://lh3.googleusercontent.com/d/1TpAzQKRQi6yCan0-JE104RVThJyPCivq=w1000',
    video: 'https://drive.google.com/file/d/16aezQjukTUHh8HILAIX-nWdUvbnjvw0l/preview',
    tools: ['Davinci Resolve', 'Premiere Pro'],
    isDrive: true,
  },
  {
    id: 6,
    title: 'TRAVEL GUIDE',
    category: 'EXPLAINER VIDEO',
    thumbnail: 'https://lh3.googleusercontent.com/d/12JWcL57QYUO7IdGbnOhoyUbrHt1VKw2v=w1000',
    video: 'https://www.youtube.com/embed/E8M0FjoZ81k',
    tools: ['Davinci Resolve', 'Google Veo'],
    isDrive: true,
  },
];

const filters = [
  'ALL',
  'MUSIC',
  '3D ANIMATION',
  'YOUTUBE SHORTS',
  'NATURE FILM',
  'YOUTUBE VIDEO',
  'EXPLAINER VIDEO'
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24 bg-cinematic-black">
      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-cinematic-gold text-white hover:text-black rounded-full transition-all duration-300 backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
              
              <iframe
                src={selectedVideo}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-xs text-cinematic-gold tracking-[0.3em] uppercase mb-4 block">
              Selected Works
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              Portfolio
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 border rounded-full text-[10px] font-display font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-cinematic-gold border-cinematic-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                    : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => {
                  if (project.isDrive) {
                    setSelectedVideo(project.video);
                  }
                }}
                className="group relative cursor-pointer"
              >
              <div className="relative aspect-video overflow-hidden rounded-xl bg-cinematic-dark ring-1 ring-white/10 group-hover:ring-cinematic-gold/50 transition-all duration-500 shadow-2xl">
                {/* Thumbnail */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${hoveredId === project.id && !project.isDrive ? 'opacity-0' : 'opacity-100'}`}
                  referrerPolicy="no-referrer"
                />
                
                {/* Video Hover Preview (Non-Drive) */}
                {hoveredId === project.id && !project.isDrive && (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Play Button Overlay (For Drive/Modal items) */}
                {project.isDrive && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="p-5 bg-cinematic-gold/90 rounded-full scale-75 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                      <Play className="w-8 h-8 text-black fill-current" />
                    </div>
                  </div>
                )}

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cinematic-gold uppercase tracking-[0.2em]">
                      {project.category}
                    </span>
                    <Play className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-4">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 2).map((tool) => (
                      <span key={tool} className="text-[9px] px-2 py-0.5 border border-white/20 rounded-full uppercase tracking-wider text-white/60">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="p-2 bg-cinematic-gold rounded-full text-black">
                     <ExternalLink className="w-4 h-4" />
                   </div>
                </div>
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <button className="btn-cinematic btn-outline text-xs tracking-[0.2em]">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
}
