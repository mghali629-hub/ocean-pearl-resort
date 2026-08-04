'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2 } from 'lucide-react';

export default function ResortBookingPage() {
  const [guestName, setGuestName] = useState('');
  const [checkIn, setCheckIn] = useState('2026-09-10');
  const [checkOut, setCheckOut] = useState('2026-09-15');
  const [booked, setBooked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/resort-bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          suiteName: 'Presidential Overwater Sanctuary Villa',
          guestName,
          checkIn,
          checkOut,
        }),
      });
      const data = await res.json();
      if (data.success) setBooked(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 font-serif flex flex-col justify-between">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center font-sans">
          <h1 className="font-serif text-4xl font-bold text-slate-900 mb-2">Direct Villa Reservation Wizard</h1>
          <p className="text-slate-600 text-sm">Select dates and reserve directly in our resort database.</p>
        </div>

        {!booked ? (
          <form onSubmit={handleSubmit} className="font-sans p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-xl">
            <div>
              <label className="text-xs text-slate-500 block mb-1">Primary Guest Name</label>
              <input type="text" required value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder="Lord Sterling" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-500 block mb-1">Check-In Date</label>
                <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900" />
              </div>
              <div>
                <label className="text-xs text-slate-500 block mb-1">Check-Out Date</label>
                <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900" />
              </div>
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-cyan-600 text-white font-bold text-xs uppercase tracking-wider">
              Confirm Direct Villa Booking via API
            </button>
          </form>
        ) : (
          <div className="font-sans p-8 rounded-3xl bg-white border border-cyan-600 text-center space-y-4 shadow-xl">
            <CheckCircle2 className="w-12 h-12 text-cyan-600 mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-slate-900">Reservation Confirmed</h3>
            <p className="text-slate-600 text-sm">Thank you, {guestName}. Check-in confirmed for {checkIn}.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
