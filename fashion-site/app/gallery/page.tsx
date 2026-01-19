"use client";
import { useState } from "react";
import Lightbox from "../../components/Lightbox";

export default function GalleryPage() {
  const images = [
    { src: "/dummydata/gallery/look1.jpg", name: "Silk Gown", category: "Bridal" },
    { src: "/dummydata/gallery/look2.jpg", name: "Minimalist Blazer", category: "Ready-to-Wear" },
    { src: "/dummydata/gallery/look3.jpg", name: "Luxury Trench", category: "Custom" },
    { src: "/dummydata/gallery/look4.jpg", name: "Evening Dress", category: "Bridal" },
    { src: "/dummydata/gallery/look5.jpg", name: "Classic Suit", category: "Ready-to-Wear" },
    { src: "/dummydata/gallery/look6.jpg", name: "Statement Coat", category: "Custom" },
  ];

  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const col0: number[] = [];
  const col1: number[] = [];
  const col2: number[] = [];
  images.forEach((_, i) => {
    const mod = i % 3;
    if (mod === 0) col0.push(i);
    if (mod === 1) col1.push(i);
    if (mod === 2) col2.push(i);
  });

  function openAt(i: number) {
    setStartIndex(i);
    setOpen(true);
  }

  return (
    <main className="min-h-screen bg-brand-cream py-16 px-4">
      <h1 className="text-4xl font-serif font-bold text-center mb-12 text-brand-cta">Lookbook</h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-6">
          {col0.map((idx) => {
            const img = images[idx];
            return (
              <figure key={img.src} onClick={() => openAt(idx)} className="cursor-pointer rounded-2xl overflow-hidden bg-brand-card border border-transparent hover:border-brand-accent transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl relative h-80 md:h-[45vh]">
                <img src={img.src} alt={img.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <figcaption className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                  <div className="backdrop-blur-sm bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-t-lg p-3 pointer-events-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white text-lg font-serif font-semibold">{img.name}</div>
                        <div className="text-brand-accent text-sm mt-1">{img.category}</div>
                      </div>
                      <button className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cta text-white text-sm font-medium shadow hover:bg-brand-primary transition-colors pointer-events-auto">View</button>
                    </div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="flex flex-col gap-6">
          {col1.map((idx) => {
            const img = images[idx];
            return (
              <figure key={img.src} onClick={() => openAt(idx)} className="cursor-pointer rounded-2xl overflow-hidden bg-brand-card border border-transparent hover:border-brand-accent transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl relative h-80 md:h-[45vh]">
                <img src={img.src} alt={img.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <figcaption className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                  <div className="backdrop-blur-sm bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-t-lg p-3 pointer-events-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white text-lg font-serif font-semibold">{img.name}</div>
                        <div className="text-brand-accent text-sm mt-1">{img.category}</div>
                      </div>
                      <button className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cta text-white text-sm font-medium shadow hover:bg-brand-primary transition-colors pointer-events-auto">View</button>
                    </div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="flex flex-col gap-6">
          {col2.map((idx) => {
            const img = images[idx];
            return (
              <figure key={img.src} onClick={() => openAt(idx)} className="cursor-pointer rounded-2xl overflow-hidden bg-brand-card border border-transparent hover:border-brand-accent transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl relative h-80 md:h-[45vh]">
                <img src={img.src} alt={img.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <figcaption className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                  <div className="backdrop-blur-sm bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-t-lg p-3 pointer-events-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white text-lg font-serif font-semibold">{img.name}</div>
                        <div className="text-brand-accent text-sm mt-1">{img.category}</div>
                      </div>
                      <button className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cta text-white text-sm font-medium shadow hover:bg-brand-primary transition-colors pointer-events-auto">View</button>
                    </div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {open && <Lightbox images={images} startIndex={startIndex} onClose={() => setOpen(false)} />}
    </main>
  );
}
