"use client"

import { motion } from 'framer-motion'
import { Phone, Mail, Send, Loader2 } from 'lucide-react'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">
      
      {/* Header */}
      <motion.div 
        initial="hidden" animate="visible" variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-playfair font-light mb-6 text-[#19271a]">Stopite v stik</h1>
        <p className="text-lg text-[#19271a]/70">
          Imate vprasanje ali zelite dodatne informacije? Z veseljem vam bomo pomagali pri izbiri pravega tretmaja.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
      >
        
        {/* Left: Contact Form */}
        <motion.div variants={fadeInUp} className="bg-white/40 border border-white/60 p-8 md:p-12 rounded-[32px] backdrop-blur-sm shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#BEB7A2]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
          
          <div className="relative z-10">
            {submitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#19271a] rounded-full flex items-center justify-center text-[#EBE5D9] mb-4">
                  <Send size={24} />
                </div>
                <h3 className="text-2xl font-playfair font-semibold">Sporocilo poslano!</h3>
                <p className="text-[#19271a]/70">Hvala za vase sporocilo. Odgovorili vam bomo v najkrajsem moznem casu.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-bold uppercase tracking-widest border-b border-[#19271a] pb-1"
                >
                  Poslji novo sporocilo
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold tracking-wide uppercase text-[#19271a]/70 ml-1">Ime in priimek</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-white/50 border border-white/80 rounded-xl p-4 focus:outline-none focus:border-[#19271a]/30 focus:bg-white shadow-inner transition-all" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold tracking-wide uppercase text-[#19271a]/70 ml-1">E-naslov</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-white/50 border border-white/80 rounded-xl p-4 focus:outline-none focus:border-[#19271a]/30 focus:bg-white shadow-inner transition-all" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold tracking-wide uppercase text-[#19271a]/70 ml-1">Zadeva</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full bg-white/50 border border-white/80 rounded-xl p-4 focus:outline-none focus:border-[#19271a]/30 focus:bg-white shadow-inner transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold tracking-wide uppercase text-[#19271a]/70 ml-1">Sporocilo</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full bg-white/50 border border-white/80 rounded-xl p-4 focus:outline-none focus:border-[#19271a]/30 focus:bg-white shadow-inner transition-all resize-none" 
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#19271a] text-[#EBE5D9] py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-black transition-colors disabled:opacity-70 flex justify-center items-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Posiljanje...</>
                  ) : (
                    <><Send size={18} /> Poslji sporocilo</>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Right: Info */}
        <motion.div variants={fadeInUp} className="space-y-12 lg:pl-10 flex flex-col justify-center">
          
          <div>
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-[#19271a]">Neposredni kontakt</h3>
            <p className="text-[#19271a]/70 mb-10 leading-relaxed max-w-md">
              Ce preferirate oseben pogovor, smo vam na voljo preko telefona ali elektronske poste v casu nasih delovnih ur.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white border border-white/60 shadow-sm flex items-center justify-center text-[#19271a] group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#19271a]/60">Poklicite nas</p>
                  <a href="tel:041992347" className="text-2xl font-playfair hover:opacity-70 transition-opacity">041 992 347</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white border border-white/60 shadow-sm flex items-center justify-center text-[#19271a] group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#19271a]/60">Pisite nam</p>
                  <a href="mailto:info@salon-luna.si" className="text-xl font-playfair hover:opacity-70 transition-opacity">info@salon-luna.si</a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-[#19271a]/10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#19271a]/60 mb-6">Sledite nam</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/masaznisalonluna/?locale=sl_SI" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#19271a] text-[#EBE5D9] flex items-center justify-center hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
        </motion.div>

      </motion.div>
    </main>
  );
}