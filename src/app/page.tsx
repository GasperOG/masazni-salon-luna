"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Leaf, HeartHandshake, Sparkles } from 'lucide-react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16 space-y-32 overflow-hidden">
      {/* HERO SECTION */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col lg:flex-row items-center gap-16 justify-between pt-8"
      >
        <motion.div variants={fadeInUp} className="flex-1 space-y-8">
          <h2 className="text-5xl lg:text-7xl font-light tracking-wide font-playfair leading-tight text-[#19271a]">
            Masazni salon <br/> <span className="font-semibold">LUNA</span>
          </h2>
          <div className="space-y-2 text-lg lg:text-xl text-gray-700 font-light">
            <p>Salon masaz, nege telesa in sprostitve.</p>
            <p className="text-sm font-medium opacity-70">Jasmina Berke Ficko S.P.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link href="/rezervacije" className="group relative bg-[#19271a] text-[#EBE5D9] px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-sm text-center flex-1 sm:flex-none overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_rgba(25,39,26,0.4)]">
              Rezerviraj termin
            </Link>
            <Link href="/storitve" className="border border-[#19271a] text-[#19271a] px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#19271a]/5 transition-colors duration-300 rounded-sm text-center flex-1 sm:flex-none">
              Oglej si storitve
            </Link>
          </div>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="flex-1 w-full flex justify-end relative">
          {/* Glassmorphism shape behind image */}
          <div className="absolute -inset-4 bg-white/20 backdrop-blur-3xl rounded-[40px] rounded-br-[120px] rounded-tl-[80px] border border-white/40 shadow-2xl z-0"></div>
          <div className="w-full max-w-lg aspect-[4/5] bg-gray-200 rounded-[30px] rounded-br-[100px] rounded-tl-[60px] overflow-hidden relative shadow-lg z-10">
              <div className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470&auto=format&fit=crop')" }}></div>
          </div>
        </motion.div>
      </motion.section>

      {/* O NAS SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="bg-white/40 backdrop-blur-md rounded-[40px] p-12 lg:p-20 text-center max-w-5xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#BEB7A2]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-light mb-10 text-center font-playfair">O nas</h3>
            <div className="text-center space-y-8 text-[#19271a]/80 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>Dobrodosli v Masaznem salonu LUNA, vasem koticku sprostitve, pocitka in nege telesa. Vsaka stranka je pri nas obravnavana z najvecjo mero pozornosti in strokovnosti.</p>
              <p>S kombinacijo klasicnih masaz, nege telesa in sproscujocih tretmajev poskrbimo, da se ob vsakem obisku pocutite bolj lahkotno in pomlajeno.</p>
            </div>
            <p className="text-xl font-medium mt-12 font-playfair text-[#19271a]">Veselimo se vasega obiska!</p>
          </div>
        </div>
      </motion.section>

      {/* ZAKAJ IZBRATI NAS SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-10"
      >
        <div className="text-center mb-16">
          <motion.h3 variants={fadeInUp} className="text-4xl font-light font-playfair mb-4">Zakaj izbrati nas?</motion.h3>
          <motion.p variants={fadeInUp} className="text-[#19271a]/70">Nudimo vam vec kot le masazo.</motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Star, title: "Strokovnost", desc: "Znanje in izkusnje na prvem mestu." },
            { icon: Leaf, title: "Mirno okolje", desc: "Ambient, zasnovan za popoln odklop." },
            { icon: Sparkles, title: "Naravna olja", desc: "Uporaba izbranih in kvalitetnih izdelkov." },
            { icon: HeartHandshake, title: "Individualni pristop", desc: "Prilagodimo se vasim potrebam." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="group bg-white/30 border border-white/50 backdrop-blur-sm p-8 rounded-[24px] hover:bg-white/60 transition-all duration-300 text-center flex flex-col items-center gap-6 shadow-sm hover:shadow-md"
            >
              <div className="w-16 h-16 rounded-full bg-[#19271a]/5 flex items-center justify-center text-[#19271a] group-hover:scale-110 transition-transform duration-300">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-playfair font-semibold text-xl mb-2">{item.title}</h4>
                <p className="text-sm text-[#19271a]/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PRILJUBLJENE STORITVE SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="pb-16"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h3 variants={fadeInUp} className="text-4xl font-light font-playfair mb-4">Priljubljene storitve</motion.h3>
            <motion.p variants={fadeInUp} className="text-[#19271a]/70 max-w-lg">Izberite med najbolj iskanimi tretmaji in si privoscite globoko sprostitev.</motion.p>
          </div>
          <Link href="/storitve" className="text-sm font-bold uppercase tracking-widest border-b border-[#19271a] pb-1 hover:opacity-70 transition-opacity">
            Vse storitve
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { title: "Klasicna masaza", price: "od 45 €", time: "60 min", img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1470&auto=format&fit=crop" },
            { title: "Aromaterapija", price: "od 50 €", time: "60 min", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470&auto=format&fit=crop" },
            { title: "Refleksna masaza", price: "od 40 €", time: "45 min", img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1287&auto=format&fit=crop" }
          ].map((item, i) => (
            <motion.div variants={fadeInUp} key={i} className="group flex flex-col bg-white/40 border border-white/60 rounded-[30px] overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="w-full aspect-[4/3] bg-gray-200 overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${item.img}')` }}></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-playfair font-semibold text-2xl">{item.title}</h4>
                  <span className="bg-[#19271a] text-[#EBE5D9] text-xs font-bold px-3 py-1 rounded-full">{item.price}</span>
                </div>
                <p className="text-[#19271a]/70 text-sm mb-8 flex-1">Sprostitveni tretma, ki pomaga odpraviti misicne napetosti in izboljsa pocutje.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-medium uppercase tracking-widest opacity-60 flex items-center gap-2">
                    <Star size={14} /> {item.time}
                  </span>
                  <Link href="/storitve" className="text-sm font-bold uppercase tracking-wider hover:underline">
                    Vec o tem
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  )
}