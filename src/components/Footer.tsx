import Link from 'next/link';

const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#BEB7A2] text-[#19271a] mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Slogan */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold tracking-widest font-playfair">LUNA</h2>
              <p className="text-[10px] tracking-widest uppercase mt-1 opacity-80">Masazni salon</p>
            </Link>
            <p className="text-sm opacity-80 font-medium leading-relaxed max-w-xs">
              Vas koticek sprostitve, pocitka in nege telesa. Dovolite si cas zase.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase">Hitre povezave</h3>
            <ul className="space-y-2 text-sm font-medium opacity-80">
              <li><Link href="/storitve" className="hover:opacity-100 hover:underline transition-all">Storitve</Link></li>
              <li><Link href="/rezervacije" className="hover:opacity-100 hover:underline transition-all">Rezervacije</Link></li>
              <li><Link href="/lokacija" className="hover:opacity-100 hover:underline transition-all">Lokacija</Link></li>
              <li><Link href="/kontakt" className="hover:opacity-100 hover:underline transition-all">Kontakt</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase">Kontakt</h3>
            <ul className="space-y-2 text-sm font-medium opacity-80">
              <li>041 992 347</li>
              <li>info@salon-luna.si</li>
              <li>Mačkovci 49a, 9202 Mačkovci</li>
            </ul>
          </div>

          {/* Column 4: Hours & Socials */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase">Delovni cas</h3>
            <ul className="space-y-2 text-sm font-medium opacity-80">
              <li>Pon - Pet: 08:00 - 20:00</li>
              <li>Sob: 08:00 - 13:00</li>
              <li>Ned in prazniki: Zaprto</li>
            </ul>
            <div className="flex gap-4 pt-4">
              <Link href="https://www.facebook.com/masaznisalonluna/?locale=sl_SI" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all">
                <FacebookIcon size={20} />
              </Link>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-[#19271a]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium opacity-70">
          <p>Copyright LUNA 2026. Vse pravice pridrzane.</p>
          <p>Izdelava spletnih strani: Gašper Šooš</p>
        </div>
      </div>
    </footer>
  );
}