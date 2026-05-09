"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Banknote, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const services = [
  {
    title: "Klasicna masaza - cela",
    desc: "Celostna masaza celega telesa, ki sprosca misice in izboljsuje prekrvavitev in splosno pocutje. Zmanjsuje stres in napetost v telesu.",
    time: "60 min",
    price: "45 €",
    img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1470&auto=format&fit=crop",
    id: "klasicna-cela"
  },
  {
    title: "Klasicna masaza - delna",
    desc: "Masaza izbranega dela telesa (npr. hrbet in vrat), kjer se najpogosteje pojavljajo napetosti, vozli in bolecine zaradi drze ali stresa.",
    time: "30 min",
    price: "25 €",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470&auto=format&fit=crop",
    id: "klasicna-delna"
  },
  {
    title: "Sprostitvena masaza obraza",
    desc: "Nezna in pomirjujoca masaza obraza ter dekolteja za sprostitev obraznih misic, bolj svez videz koze in lajsanje glavobolov.",
    time: "20 min",
    price: "20 €",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470&auto=format&fit=crop",
    id: "masaza-obraza"
  },
  {
    title: "Aromaterapija",
    desc: "Sproscujoca masaza z uporabo posebej izbranih etericnih olj, ki blagodejno vplivajo na zivcni sistem in globinsko pomirijo.",
    time: "60 min",
    price: "50 €",
    img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1287&auto=format&fit=crop",
    id: "aromaterapija"
  },
  {
    title: "Refleksna masaza stopal",
    desc: "Stimulacija refleksnih tock na stopalih z namenom sproscanja, regeneracije celotnega telesa in uravnovecanja notranjih organov.",
    time: "45 min",
    price: "40 €",
    img: "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=1470&auto=format&fit=crop",
    id: "refleksna-stopal"
  },
  {
    title: "Antistresna masaza",
    desc: "Kombinacija tehnik, osredotocena predvsem na ledveni del in ramenski obroc za takojsnje lajsanje simptomov stresa in preobremenjenosti.",
    time: "45 min",
    price: "35 €",
    img: "https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?q=80&w=1470&auto=format&fit=crop",
    id: "antistresna"
  }
];

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">
      
      {/* Header */}
      <motion.div 
        initial="hidden" animate="visible" variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-playfair font-light mb-6 text-[#19271a]">Nase storitve</h1>
        <p className="text-lg text-[#19271a]/70">
          Odkrijte paleto sprostitvenih masaz in tretmajev, ki so posebej zasnovani za povrnitev energije, 
          odpravljanje napetosti in popolno razvajanje vasega telesa in duha.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        {services.map((service, i) => (
          <motion.div 
            key={i} variants={fadeInUp}
            className="flex flex-col bg-white/40 border border-white/60 rounded-[32px] overflow-hidden hover:shadow-xl hover:bg-white/60 transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full aspect-[4/3] relative overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                style={{ backgroundImage: `url('${service.img}')` }}
              ></div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-playfair font-semibold mb-3 text-[#19271a]">{service.title}</h3>
              <p className="text-[#19271a]/70 text-sm mb-6 flex-1 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="flex items-center justify-between mb-8 text-[#19271a]">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Clock size={18} className="opacity-60" />
                  <span>{service.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold bg-[#EBE5D9] px-3 py-1 rounded-full border border-[#19271a]/10">
                  <Banknote size={16} className="opacity-70" />
                  <span>{service.price}</span>
                </div>
              </div>

              {/* Button */}
              <Link 
                href={`/rezervacije?service=${service.id}`}
                className="group flex items-center justify-center gap-2 w-full bg-[#19271a] text-[#EBE5D9] py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                Rezerviraj zdaj
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </main>
  );
}