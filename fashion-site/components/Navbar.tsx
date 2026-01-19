// Navbar: Minimal, elegant, mobile-first navigation with sticky and fade-in effect

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/appointment", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // lock body scroll when mobile menu is open
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "";
      };
    }
    return () => {};
  }, [open]);
  return (
    <nav className="sticky top-0 z-50 bg-brand-background/90 dark:bg-black/80 backdrop-blur border-b border-brand-secondary dark:border-zinc-800 shadow-lg animate-fade-in-down" style={{backgroundColor: 'rgba(255, 248, 238, 0.9)', borderBottom: '1px solid rgba(0,0,0,0.06)'}}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20 md:h-16" style={{minHeight: 64}}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-serif text-2xl md:text-3xl font-bold tracking-tight text-gray-900 hover:text-brand-cta transition-colors select-none">
          <span className="inline-block w-8 h-8 bg-brand-cta rounded-full mr-2 shadow-inner" aria-hidden />
          Tailored
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="flex flex-col items-start px-2 py-1">
              <span className={`text-lg font-serif transition-colors duration-200 ${pathname === link.href ? 'text-brand-cta font-semibold' : 'text-gray-700 hover:text-brand-cta'}`}>{link.label}</span>
              <span className={`block h-0.5 bg-brand-cta mt-1 transition-all ${pathname === link.href ? 'w-6' : 'w-0'}`} aria-hidden />
            </Link>
          ))}
        </div>
        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-3 rounded-xl hover:bg-brand-card dark:hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-gold transition-all"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        {/* Mobile Nav Drawer */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black/40 dark:bg-black/70 flex justify-end md:hidden" onClick={() => setOpen(false)}>
            <div id="mobile-menu" className="w-64 bg-brand-background dark:bg-black h-full shadow-lg p-8 flex flex-col gap-6 animate-fade-in-down" onClick={e => e.stopPropagation()}>
              <button className="self-end mb-4 p-2 rounded-lg hover:bg-brand-card dark:hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-gold" onClick={() => setOpen(false)}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-lg font-serif px-2 py-3 rounded-md hover:bg-gray-50">
                  <div className={`${pathname === link.href ? 'text-brand-cta font-semibold' : 'text-gray-800'}`}>{link.label}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
