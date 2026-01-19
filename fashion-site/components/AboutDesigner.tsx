// AboutDesigner: Image + story section
export default function AboutDesigner() {
  return (
    <section className="py-20 px-6 bg-brand-background flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
      <img
        src="/dummydata/designer.jpg"
        alt="Designer portrait"
        className="w-70 h-80 object-cover rounded-2xl shadow-xl mb-8 md:mb-0 animate-fade-in"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
      />
      <div className="flex-1">
        <h2 className="text-3xl font-serif font-bold mb-4 text-brand-cta tracking-tight">About the Designer</h2>
        <p className="text-lg text-text-secondary font-sans mb-2">
          With a passion for timeless style and a commitment to perfect fit, our atelier crafts bespoke garments for discerning clients. Each piece is a work of art, blending modern minimalism with classic luxury.
        </p>
        <p className="text-lg text-text-secondary font-sans">
          Discover the story behind every stitch and the vision that drives our pursuit of elegance.
        </p>
      </div>
    </section>
  );
}
