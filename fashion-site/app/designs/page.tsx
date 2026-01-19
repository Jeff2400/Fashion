export default function DesignsPage() {
  const designs = [
    { id: 1, name: "Silk Evening Gown", desc: "A flowing silk gown with elegant drape.", image: "/look1.jpg" },
    { id: 2, name: "Minimalist Blazer", desc: "A sharp, tailored blazer for all occasions.", image: "/look2.jpg" },
    { id: 3, name: "Luxury Trench Coat", desc: "A classic trench with modern lines.", image: "/look3.jpg" },
  ];
  return (
    <main className="min-h-screen bg-cream py-16 px-4">
      <h1 className="text-4xl font-serif font-bold text-center mb-12 text-black">Designs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {designs.map((design) => (
          <a
            key={design.id}
            href={`/designs/${design.id}`}
            className="block rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 animate-fade-in"
          >
            <img
              src={design.image}
              alt={design.name}
              className="w-full h-72 object-cover mb-4"
            />
            <div className="px-6 pb-6">
              <h2 className="font-serif text-xl font-semibold mb-2">{design.name}</h2>
              <p className="text-gray-600 text-sm">{design.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
