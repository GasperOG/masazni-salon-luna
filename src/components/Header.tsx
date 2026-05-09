"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { href: "/storitve", label: "Storitve" },
    { href: "/rezervacije", label: "Rezervacije" },
    { href: "/lokacija", label: "Lokacija" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  // Animation configurations
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-[#BEB7A2]/90 backdrop-blur-md shadow-md border-b border-[#19271a]/10" 
          : "bg-[#BEB7A2] border-b border-[#19271a]/20"
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between transition-all duration-500 ease-out ${
          isScrolled ? "h-16" : "h-24"
        }`}
      >
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-4 group"
          onMouseEnter={() => setIsLogoAnimating(true)}
          onMouseLeave={() => setIsLogoAnimating(false)}
        >
          <motion.div 
            animate={isLogoAnimating ? { scale: 1.05, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full border-2 border-[#19271a] flex items-center justify-center relative overflow-hidden bg-[#2C382A] shadow-sm transform transition-all duration-500 group-hover:shadow-md"
          >
             <span className="text-[#EBE5D9] text-xs font-medium tracking-widest">LUNA</span>
          </motion.div>
          <motion.div 
            animate={isLogoAnimating ? { scale: 1.02 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col relative"
          >
            <motion.h1 
              animate={isLogoAnimating ? { y: -4, letterSpacing: "0.3em" } : { y: 0, letterSpacing: "0.1em" }}
              transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
              className="text-xl font-medium tracking-widest text-[#19271a] group-hover:opacity-80 transition-opacity duration-500"
            >
              LUNA
            </motion.h1>
            <motion.p 
              animate={isLogoAnimating ? { y: 4, letterSpacing: "0.2em" } : { y: 0, letterSpacing: "0.1em" }}
              transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
              className="text-[10px] tracking-widest text-[#19271a] uppercase group-hover:opacity-80 transition-opacity duration-500"
            >
              Masazni salon
            </motion.p>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <motion.nav 
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-2 lg:gap-4 text-sm font-medium"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <motion.div key={link.href} variants={navItemVariants}>
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={link.href} 
                    className={`block px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg transition-all duration-300 border-2 ${
                      isActive 
                        ? "border-[#19271a] text-[#19271a] font-bold shadow-sm bg-[#19271a]/5" 
                        : "border-transparent text-[#19271a] hover:border-[#19271a]/20 hover:bg-[#19271a]/5 hover:shadow-sm"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.nav>

        {/* Mobile Menu Toggle */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-[#19271a]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} className="transition-transform duration-500" /> : <Menu size={28} className="transition-transform duration-500" />}
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full overflow-hidden bg-[#BEB7A2]/95 backdrop-blur-md shadow-xl border-b border-[#19271a]/20"
          >
            <nav className="flex flex-col px-4 pt-4 pb-8 space-y-4 text-sm font-medium text-center">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={isActive
                        ? "mx-auto w-3/4 block px-4 py-3 bg-[#19271a] text-[#BEB7A2] rounded shadow-md" 
                        : "mx-auto w-3/4 block text-[#19271a] py-3 hover:bg-[#19271a]/5 rounded transition-all duration-500"}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}