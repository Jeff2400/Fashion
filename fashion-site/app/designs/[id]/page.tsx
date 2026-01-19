import { notFound } from "next/navigation";

const designs = [
  { id: "1", name: "Silk Evening Gown", desc: "A flowing silk gown with elegant drape.", image: "/look1.jpg", details: "Handmade from the finest silk, this gown features a minimalist silhouette and subtle luxury details." },
  { id: "2", name: "Minimalist Blazer", desc: "A sharp, tailored blazer for all occasions.", image: "/look2.jpg", details: "Expertly tailored for a perfect fit, this blazer is a staple for any luxury wardrobe." },
  { id: "3", name: "Luxury Trench Coat", desc: "A classic trench with modern lines.", image: "/look3.jpg", details: "A modern take on a classic, crafted from premium materials for timeless style." },
];

export default function DesignDetailPage({ params }: { params: { id: string } }) {
  const design = designs.find((d) => d.id === params.id);
  if (!design) return notFound();
  return (
    <main className="min-h-screen bg-brand-background py-12 px-4 flex flex-col items-center">
      <img src={design.image} alt={design.name} className="w-full max-w-xl h-96 object-cover rounded-2xl shadow-lg mb-8" />
      <h1 className="text-3xl font-serif font-bold mb-2 text-brand-cta tracking-tight">{design.name}</h1>
      <p className="text-text-secondary text-lg mb-4 max-w-xl text-center">{design.desc}</p>
      <div className="bg-brand-card rounded-2xl shadow p-6 max-w-xl w-full">
        <h2 className="font-semibold text-xl mb-2 text-text-primary">Details</h2>
        <p className="text-text-primary">{design.details}</p>
        <div className="mt-6 flex gap-4">
          <a href="/appointment" className="px-5 py-3 rounded-lg bg-brand-cta text-white font-semibold shadow hover:bg-brand-primary transition">Book Appointment for This Design</a>
        </div>
      </div>
    </main>
  );
}
