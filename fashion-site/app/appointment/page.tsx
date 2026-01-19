"use client";
import AppointmentForm from "./form";
import { useState } from "react";

export default function AppointmentPage() {
  const [booked, setBooked] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-cream py-16 px-4">
      <div className="w-full max-w-md p-10 rounded-2xl shadow-lg bg-white animate-fade-in">
        <h1 className="text-3xl font-serif font-bold mb-8 text-center text-black">
          {booked ? "Appointment Booked" : "Book an Appointment"}
        </h1>
        <AppointmentForm onSubmitted={() => setBooked(true)} />
      </div>
    </main>
  );
}
