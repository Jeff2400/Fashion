// HowItWorks: 3-step process section
const steps = [
  {
    title: "Book Appointment",
    desc: "Schedule a private session for measurements and consultation.",
    icon: "📅",
  },
  {
    title: "Take Measurements",
    desc: "Our expert will take precise measurements for a perfect fit.",
    icon: "📏",
  },
  {
    title: "Design & Delivery",
    desc: "Collaborate on your design and receive your bespoke garment.",
    icon: "🧵",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-brand-background">
      <h2 className="text-3xl font-serif font-bold mb-10 text-center text-brand-cta tracking-tight">How It Works</h2>
      <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto justify-center">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="flex-1 flex flex-col items-center bg-white rounded-2xl shadow p-8 animate-fade-in"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-serif font-semibold mb-2 text-black">{step.title}</h3>
            <p className="text-zinc-700 text-base text-center font-sans">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
