"use client"

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Car, Navigation } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function LocationPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">
      
      {/* Header */}
      <motion.div 
        initial="hidden" animate="visible" variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-playfair font-light mb-6 text-[#19271a]">Kje nas najdete?</h1>
        <p className="text-lg text-[#19271a]/70">
          Obiscite nas salon v mirnem in prijetnem okolju. Poskrbeli smo, da bo vas prihod enostaven in brezskrben.
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        
        {/* Left: Info */}
        <motion.div variants={fadeInUp} className="space-y-10">
          
          <div className="bg-white/40 border border-white/60 p-8 md:p-10 rounded-[32px] backdrop-blur-sm shadow-sm space-y-8">
            <h2 className="text-3xl font-playfair font-semibold text-[#19271a] mb-2">Masazni salon LUNA</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#19271a]/5 flex items-center justify-center flex-shrink-0 text-[#19271a]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#19271a] mb-1">Naslov</h4>
                  <p className="text-lg text-[#19271a]/80 font-medium">Mačkovci 49a</p>
                  <p className="text-[#19271a]/70">9202 Mačkovci, Slovenija</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#19271a]/5 flex items-center justify-center flex-shrink-0 text-[#19271a]">
                  <Car size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#19271a] mb-1">Parkiranje</h4>
                  <p className="text-[#19271a]/70">Brezplacno parkirisce zagotovljeno neposredno pred salonom.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#19271a]/5 flex items-center justify-center flex-shrink-0 text-[#19271a]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#19271a] mb-1">Telefon</h4>
                  <p className="text-lg text-[#19271a]/80 font-medium">041 992 347</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-[#19271a]/10">
              <a 
                href="https://maps.app.goo.gl/8t1dEgrRXcKzXv2k9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#19271a] hover:opacity-70 transition-opacity"
              >
                <Navigation size={18} />
                Navodila za pot
              </a>
            </div>
          </div>
          
        </motion.div>

        {/* Right: Map */}
        <motion.div variants={fadeInUp} className="h-full min-h-[400px] lg:min-h-[600px] w-full relative group">
          <div className="absolute -inset-4 bg-white/20 backdrop-blur-3xl rounded-[40px] border border-white/40 shadow-xl z-0"></div>
          <div className="w-full h-full bg-gray-200 rounded-[30px] overflow-hidden relative shadow-lg z-10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.376264106412!2d16.161508676941388!3d46.783586471126185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa2fc8eebd9a43793%3A0x6afdf0cc2a6bc44b!2sMasa%C5%BEni%20salon%20LUNA!5e1!3m2!1ssl!2ssi!4v1778346012347!5m2!1ssl!2ssi" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </motion.div>

      </motion.div>
    </main>
  );
}