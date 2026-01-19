import HeroSection from "../components/HeroSection";
import AboutDesigner from "../components/AboutDesigner";
import FeaturedGallery from "../components/FeaturedGallery";
import HowItWorks from "../components/HowItWorks";
import Testimonial, { testimonials } from "../components/Testimonial";

export default function Home() {
  return (
    <main className="bg-brand-background min-h-screen flex flex-col gap-24 md:gap-32 pb-16">
      {/* Hero Section */}
      <HeroSection />
      {/* About the Designer */}
      <AboutDesigner />
      {/* Featured Designs Gallery */}
      <FeaturedGallery />
      {/* How It Works */}
      <HowItWorks />
      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 w-full">
        <h2 className="text-3xl font-serif font-bold text-center mb-6 text-brand-cta">Client Testimonials</h2>
        <p className="text-center text-gray-600 mb-8">Real words from clients who've experienced our bespoke service.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0,3).map((t, i) => (
            <Testimonial key={i} quote={t.quote} author={t.author} role={t.role} avatar={t.avatar} />
          ))}
        </div>
      </section>
    </main>
  );
}
