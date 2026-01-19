export default function ShopPage() {
  const products = [
    { id: 1, name: "Silk Evening Gown", price: "$1200", image: "/look1.jpg" },
    { id: 2, name: "Minimalist Blazer", price: "$650", image: "/look2.jpg" },
    { id: 3, name: "Luxury Trench Coat", price: "$900", image: "/look3.jpg" },
  ];
  return (
    <main className="min-h-screen bg-cream py-16 px-4">
      <h1 className="text-4xl font-serif font-bold text-center mb-12 text-black">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 flex flex-col animate-fade-in"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover mb-4"
            />
            <div className="px-6 pb-6 flex-1 flex flex-col justify-between">
              <h2 className="font-serif text-xl font-semibold mb-2">{product.name}</h2>
              <div className="text-lg font-medium text-gold mb-4">{product.price}</div>
              <button className="w-full py-2 rounded-lg bg-black text-white font-semibold shadow hover:bg-gold hover:text-black transition-all border border-black">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
