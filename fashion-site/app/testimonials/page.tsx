import Testimonial, { testimonials } from "../../components/Testimonial";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen py-16 px-6 bg-brand-cream">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-center mb-8 text-brand-cta">What Clients Say</h1>
        <p className="text-center text-gray-600 mb-12">Real feedback from discerning clients who trust our bespoke tailoring.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Testimonial key={i} quote={t.quote} author={t.author} role={t.role} avatar={t.avatar} />
          ))}
        </div>
      </div>
    </main>
  );
}
