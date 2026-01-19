"use client";
import { useState } from "react";
import Link from "next/link";

export default function AppointmentForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", date: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmitted) onSubmitted();
  }

  if (submitted) {
    return (
      <div className="bg-success/90 text-black font-medium rounded-xl py-6 px-4 shadow-lg animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
        
        <ul className="text-left space-y-2 mb-6">
          <li><strong>Name:</strong> {form.name || "—"}</li>
          <li><strong>Email:</strong> {form.email || "—"}</li>
          <li><strong>Date:</strong> {form.date || "—"}</li>
          {form.notes && <li><strong>Notes:</strong> {form.notes}</li>}
        </ul>
        <p className="text-sm text-black/80 mb-4">Thanks — we've recorded your request. Details below:</p>
        <div className="flex gap-3">
          <Link href="/" className="inline-block px-4 py-2 rounded-lg bg-white text-black font-semibold shadow hover:opacity-95">Back to Home</Link>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", email: "", date: "", notes: "" });
            }}
            className="inline-block px-4 py-2 rounded-lg bg-black text-white font-semibold shadow hover:opacity-95"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        className="w-full border-b border-brand-secondary focus:border-brand-cta outline-none py-3 px-2 bg-transparent placeholder-brand-secondary text-brand-cta text-lg rounded-none"
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="w-full border-b border-brand-secondary focus:border-brand-cta outline-none py-3 px-2 bg-transparent placeholder-brand-secondary text-brand-cta text-lg rounded-none"
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        className="w-full border-b border-brand-secondary focus:border-brand-cta outline-none py-3 px-2 bg-transparent placeholder-brand-secondary text-brand-cta text-lg rounded-none"
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <textarea
        className="w-full border-b border-brand-secondary focus:border-brand-cta outline-none py-3 px-2 bg-transparent placeholder-brand-secondary text-brand-cta text-lg rounded-none"
        name="notes"
        placeholder="Notes (optional)"
        value={form.notes}
        onChange={handleChange}
        rows={3}
      />
      <button
        type="submit"
        className="w-full py-3 mt-2 rounded-xl bg-brand-cta text-black font-semibold shadow-lg hover:bg-brand-primary transition-all text-lg"
      >
        Book Appointment
      </button>
    </form>
  );
}
