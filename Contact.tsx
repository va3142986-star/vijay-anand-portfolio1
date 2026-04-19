import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email me directly.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-cinematic-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cinematic-gold/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-6">Let's Create <br /> <span className="text-cinematic-gold">Cinematically.</span></h2>
              <p className="text-white/50 text-lg max-w-md">Ready to take your project to the next level? Drop me a line and let's craft something unforgettable.</p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'business.vijay.anand@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'India' },
                { icon: Phone, label: 'Direct', value: 'Available upon request' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-full group-hover:border-cinematic-gold transition-colors">
                    <item.icon className="w-5 h-5 text-cinematic-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-white/30 block">{item.label}</span>
                    <span className="text-lg font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cinematic-dark p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative"
          >
             {/* Corner Decorative */}
             <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-cinematic-gold/20 rounded-tr-3xl" />
             
             <form className="space-y-6" onSubmit={handleSubmit}>
               {isSubmitted ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="text-center py-12 flex flex-col items-center gap-4"
                 >
                   <CheckCircle2 className="w-16 h-16 text-cinematic-gold" />
                   <h3 className="text-2xl font-bold uppercase">Message Received</h3>
                   <p className="text-white/50">Thank you for reaching out. I'll review your cinematic vision and get back to you soon.</p>
                   <button 
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-cinematic-gold hover:underline font-mono text-xs uppercase tracking-widest"
                   >
                     Send another message
                   </button>
                 </motion.div>
               ) : (
                 <>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-[10px] uppercase font-mono tracking-widest text-white/50 ml-1">Name</label>
                       <input 
                        name="name"
                        type="text" 
                        required
                        className="w-full bg-cinematic-black border border-white/10 rounded-xl px-4 py-4 focus:border-cinematic-gold outline-none transition-all" 
                        placeholder="John Doe" 
                       />
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] uppercase font-mono tracking-widest text-white/50 ml-1">Email</label>
                       <input 
                        name="email"
                        type="email" 
                        required
                        className="w-full bg-cinematic-black border border-white/10 rounded-xl px-4 py-4 focus:border-cinematic-gold outline-none transition-all" 
                        placeholder="john@example.com" 
                       />
                     </div>
                   </div>
                   
                   <div className="space-y-2">
                     <label className="text-[10px] uppercase font-mono tracking-widest text-white/50 ml-1">Project Type</label>
                     <select 
                      name="projectType"
                      className="w-full bg-cinematic-black border border-white/10 rounded-xl px-4 py-4 focus:border-cinematic-gold outline-none transition-all appearance-none cursor-pointer"
                     >
                       <option>Music Video</option>
                       <option>Commercial Ad</option>
                       <option>Documentary</option>
                       <option>YouTube / Content</option>
                     </select>
                   </div>

                   <div className="space-y-2">
                     <label className="text-[10px] uppercase font-mono tracking-widest text-white/50 ml-1">Message</label>
                     <textarea 
                      name="message"
                      rows={4} 
                      required
                      className="w-full bg-cinematic-black border border-white/10 rounded-xl px-4 py-4 focus:border-cinematic-gold outline-none transition-all resize-none" 
                      placeholder="Tell me about your cinematic vision..." 
                     />
                   </div>

                   {error && (
                     <p className="text-red-500 text-xs font-mono">{error}</p>
                   )}

                   <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-cinematic btn-primary flex items-center justify-center gap-3 py-5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                     {isSubmitting ? (
                       <>Processing... <Loader2 className="w-5 h-5 animate-spin" /></>
                     ) : (
                       <>Send Message <Send className="w-5 h-5" /></>
                     )}
                   </button>
                 </>
               )}
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
