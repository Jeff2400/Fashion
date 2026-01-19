// HeroSection: Full-screen hero with background image, headline, subtext, and CTAs
export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center bg-brand-background overflow-hidden">
      <img
        src="/dummydata/hero-fashion.jpg"
        alt="Designer at work"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 z-0 animate-fade-in"
        style={{ filter: 'brightness(0.92) blur(1px)' }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-20 backdrop-blur-sm bg-black/40 rounded-3xl border border-white/10 shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-serif font-extrabold mb-4 text-white drop-shadow-lg" style={{ letterSpacing: '-0.03em' }}>
          <span className="text-white">Tailored </span>
          <span className="text-brand-cta">Elegance</span>
          <span className="text-white">, Made Just for You</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 font-sans">
          Bespoke fashion • Perfect fit • Timeless style
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/appointment" className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-brand-cta text-white text-base md:text-lg font-semibold shadow-lg hover:bg-brand-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-cta focus:ring-offset-2">
            Book Measurement Appointment
          </a>
          <a href="/gallery" className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 text-white text-base md:text-lg font-semibold bg-white/10 shadow hover:bg-white/20 transition-all duration-200">
            View Collection
          </a>
        </div>
      </div>
    </section>
  );
}
