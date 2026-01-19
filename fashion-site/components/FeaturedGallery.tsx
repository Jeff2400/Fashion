// FeaturedGallery: Gallery grid for home page
const featured = [
  { id: 1, name: "Silk Gown", image: "/dummydata/gallery/look1.jpg" },
  { id: 2, name: "Minimalist Blazer", image: "/dummydata/gallery/look2.jpg" },
  { id: 3, name: "Luxury Trench", image: "/dummydata/gallery/look3.jpg" },
];

export default function FeaturedGallery() {
  return (
    <section className="py-20 px-6 bg-brand-background">
      <h2 className="text-3xl font-serif font-bold mb-10 text-center text-brand-cta tracking-tight">Featured Designs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {featured.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 group relative animate-fade-in"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <span className="text-white text-lg font-serif font-semibold">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
