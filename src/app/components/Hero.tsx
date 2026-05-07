export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-placeholder.jpg')" }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 tracking-tight">
          Masažni salon LUNA
        </h1>
        <p className="text-xl md:text-2xl text-secondary-light mb-10 font-light">
          Vaše zavetišče miru in sprostitve v Mačkovcih
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#narocanje" 
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-300 w-full sm:w-auto text-lg"
          >
            Naročite se
          </a>
          <a 
            href="#cenik" 
            className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-md transition-colors duration-300 w-full sm:w-auto text-lg"
          >
            Cenik
          </a>
        </div>
      </div>
    </section>
  );
}
