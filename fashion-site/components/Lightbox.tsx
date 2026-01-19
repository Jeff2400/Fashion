"use client";
import { useEffect, useState } from "react";

export default function Lightbox({ images, startIndex, onClose }: {
  images: Array<{ src: string; name?: string; category?: string }>;
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose]);

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }
  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  const img = images[index];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6" onClick={onClose}>
      <div className="relative max-w-[90vw] max-h-[90vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <button aria-label="Previous" onClick={prev} className="absolute left-2 md:left-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
          ‹
        </button>
        <img src={img.src} alt={img.name || `Image ${index + 1}`} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-lg" />
        <button aria-label="Next" onClick={next} className="absolute right-2 md:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
          ›
        </button>

        <button aria-label="Close" onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
          ✕
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
          {img.name} {img.category ? ` — ${img.category}` : ""} ({index + 1}/{images.length})
        </div>
      </div>
    </div>
  );
}
