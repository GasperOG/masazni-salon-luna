"use client"

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DayPicker } from 'react-day-picker'
import { format, isSameDay, addDays, isBefore, startOfToday } from 'date-fns'
import { sl } from 'date-fns/locale'
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, CheckCircle2, Loader2, ArrowRight } from 'lucide-react'
import 'react-day-picker/dist/style.css'
import { useSearchParams } from 'next/navigation'

// We will use standard Tailwind + inline active styles for DayPicker
const css = `
  .rdp { margin: 0; --rdp-cell-size: 45px; --rdp-accent-color: #19271a; --rdp-background-color: #f3ede4;}
  .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover { color: #EBE5D9; border-radius: 50%; opacity: 1; }
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) { background-color: rgba(25, 39, 26, 0.05); border-radius: 50%; }
  .rdp-day_selected { background-color: #19271a !important; font-weight: bold; }
`;

function ReservationForm() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get('service') || '';
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1); // 1: Date/Time, 2: Details, 3: Success
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock available times
  const timeSlots = ["10:00", "11:30", "13:00", "15:00", "16:30", "18:00"];
  // Randomly disable some slots to simulate Firebase DB output
  const disabledSlots = ["11:30", "15:00"]; 

  const handleNextStep = () => {
    if (selectedDate && selectedTime) setStep(2);
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here we would typically:
    // 1. Add doc to Firebase Firestore 'appointments'
    // 2. Call an API logic to send via Resend
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setStep(3); // Success step
  };

  return (
    <>
      <style>{css}</style>
      
      {/* Step Indicator */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
          <span className={`transition-opacity ${step >= 1 ? 'text-[#19271a]' : 'opacity-30'}`}>1. Termin</span>
          <span className="w-8 h-[1px] bg-[#19271a] opacity-20"></span>
          <span className={`transition-opacity ${step >= 2 ? 'text-[#19271a]' : 'opacity-30'}`}>2. Podatki</span>
          <span className="w-8 h-[1px] bg-[#19271a] opacity-20"></span>
          <span className={`transition-opacity ${step === 3 ? 'text-[#19271a]' : 'opacity-30'}`}>3. Potrditev</span>
        </div>
      </div>

      <div className="bg-white/40 border border-white/60 rounded-[40px] shadow-sm backdrop-blur-sm overflow-hidden relative">
        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#19271a]/10"
            >
              {/* Left: Calendar */}
              <div className="flex-1 p-8 md:p-12 flex flex-col items-center">
                <h3 className="text-xl font-playfair font-semibold mb-6 w-full max-w-[320px] flex items-center justify-between">
                  Izberite datum <CalendarIcon size={20} className="opacity-50" />
                </h3>
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => { setSelectedDate(date); setSelectedTime(null); }}
                  locale={sl}
                  disabled={[{ before: startOfToday() }, { dayOfWeek: [0, 6] }]} 
                  className="bg-transparent"
                />
              </div>

              {/* Right: Time Slots */}
              <div className="flex-1 p-8 md:p-12">
                <h3 className="text-xl font-playfair font-semibold mb-6 flex items-center justify-between">
                  Izberite uro <Clock size={20} className="opacity-50" />
                </h3>
                
                {!selectedDate ? (
                  <div className="h-48 flex items-center justify-center border-2 border-dashed border-[#19271a]/10 rounded-2xl">
                    <p className="text-[#19271a]/50 text-sm font-medium">Najprej izberite datum</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                      {timeSlots.map((time) => {
                        const isDisabled = disabledSlots.includes(time);
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            disabled={isDisabled}
                            onClick={() => setSelectedTime(time)}
                            className={`py-4 rounded-xl text-sm font-bold tracking-widest transition-all ${
                              isDisabled 
                                ? 'bg-black/5 text-[#19271a]/30 cursor-not-allowed line-through'
                                : isSelected
                                  ? 'bg-[#19271a] text-[#EBE5D9] shadow-md scale-105'
                                  : 'bg-white border text-[#19271a] border-[#19271a]/20 hover:border-[#19271a] hover:bg-[#19271a]/5'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                    
                    <div className="pt-6 border-t border-[#19271a]/10 flex justify-end">
                      <button 
                        onClick={handleNextStep}
                        disabled={!selectedTime}
                        className="bg-[#19271a] text-[#EBE5D9] px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest disabled:opacity-50 hover:bg-black transition-all flex items-center gap-2"
                      >
                        Nadaljuj <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
              className="p-8 md:p-12 max-w-2xl mx-auto"
            >
              <button 
                onClick={() => setStep(1)}
                className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 mb-8 border-b border-[#19271a] pb-1"
              >
                Nazaj na izbiro termina
              </button>

              <div className="bg-white rounded-2xl p-6 mb-8 border border-[#19271a]/10 flex justify-between items-center shadow-sm">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Izbran termin</p>
                  <p className="font-playfair text-lg font-semibold">{selectedDate ? format(selectedDate, 'dd. MMMM yyyy', { locale: sl }) : ''} ob {selectedTime}</p>
                </div>
                <button onClick={() => setStep(1)} className="w-10 h-10 rounded-full bg-[#19271a]/5 flex items-center justify-center hover:bg-[#19271a]/10 transition-colors">
                   <Clock size={16} />
                </button>
              </div>

              <form onSubmit={handleConfirm} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest ml-2 flex items-center gap-2"><User size={14} /> Ime in priimek</label>
                  <input required type="text" className="w-full bg-white/50 border border-white/80 rounded-xl p-4 focus:outline-none focus:border-[#19271a]/30 shadow-inner" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest ml-2 flex items-center gap-2"><Phone size={14} /> Telefon</label>
                  <input required type="tel" className="w-full bg-white/50 border border-white/80 rounded-xl p-4 focus:outline-none focus:border-[#19271a]/30 shadow-inner" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest ml-2 flex items-center gap-2"><Mail size={14} /> E-naslov</label>
                  <input required type="email" className="w-full bg-white/50 border border-white/80 rounded-xl p-4 focus:outline-none focus:border-[#19271a]/30 shadow-inner" />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#19271a] text-[#EBE5D9] mt-8 py-5 rounded-xl text-sm font-bold uppercase tracking-widest disabled:opacity-50 hover:bg-black transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Obdelujem...</> : 'Potrdi rezervacijo'}
                </button>
              </form>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="p-12 md:p-20 flex flex-col items-center justify-center text-center space-y-6 max-w-xl mx-auto"
            >
              <div className="w-24 h-24 bg-[#19271a] rounded-full flex items-center justify-center text-[#EBE5D9] mb-4 shadow-lg shadow-[#19271a]/20">
                <CheckCircle2 size={48} strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl font-playfair font-semibold">Uspesna rezervacija!</h2>
              <p className="text-lg opacity-80 leading-relaxed">
                Vasa zahteva za rezervacijo dne <strong className="font-semibold">{selectedDate ? format(selectedDate, 'dd.MM.yyyy') : ''} ob {selectedTime}</strong> je bila zacasno potrjena.
              </p>
              <div className="bg-[#19271a]/5 border border-[#19271a]/10 rounded-2xl p-6 mt-6 w-full text-sm opacity-80">
                Preverite vas e-poštni predal, saj smo vam posredovali sporocilo s potrditvenim linkom.
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </>
  );
}

export default function BookingPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-playfair font-light mb-6 text-[#19271a]">Rezervacija termina</h1>
        <p className="text-lg text-[#19271a]/70">
          Izberite prost termin, ki vam najbolje ustreza. Vse rezervacije je potrebno potrditi preko e-poste.
        </p>
      </motion.div>

      <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loader2 className="animate-spin text-[#19271a]/20 w-12 h-12" /></div>}>
        <ReservationForm />
      </Suspense>

    </main>
  );
}