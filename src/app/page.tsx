'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palmtree,
  Calendar,
  CheckCircle2,
  Star,
  Sparkles,
  MapPin,
  Compass,
  ArrowRight,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { Header, Footer } from '@/components/Header';

interface Room {
  id: number;
  name: string;
  price: string;
  guests: string;
  sqm: string;
  image: string;
  description: string;
}

export default function OceanPearlHomePage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [guestName, setGuestName] = useState('');
  const [checkIn, setCheckIn] = useState('2026-09-10');
  const [checkOut, setCheckOut] = useState('2026-09-15');
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    fetch('/api/rooms')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setRooms(data.rooms);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleBooking = async (e: React.FormEvent) => {
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
    <div className="min-h-screen bg-[#06121E] text-slate-100 font-serif selection:bg-teal-500 selection:text-black flex flex-col justify-between">
      <Header />

      <main className="flex-1 space-y-20">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1800&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-[#06121E]/50 to-black/30" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-teal-500/40 backdrop-blur-md text-teal-400 font-sans text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-4 h-4 text-teal-400" /> Private Maldives Island Atoll
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight">
              Where Ocean Horizons Meet Pure Serenity
            </h1>
            <p className="font-sans text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Glass-bottom overwater villas, underwater Michelin dining, seaplane transfers, and marine biologist coral conservation.
            </p>

            <div className="pt-6 font-sans flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#booking"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-500/20 hover:brightness-110 transition-all text-center"
              >
                Book Villa Direct
              </a>
              <Link
                href="/rooms"
                className="px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all text-center"
              >
                Explore Accommodations
              </Link>
            </div>
          </div>
        </section>

        {/* Villa Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-sans text-teal-400 text-xs font-semibold uppercase tracking-widest block mb-2">Overwater Havens</span>
            <h2 className="font-serif text-4xl font-bold text-white">Private Villa Collection</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden flex flex-col justify-between">
                <div className="relative h-72 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-teal-400 font-bold font-sans text-xs border border-teal-500/30">
                    {room.price}
                  </div>
                </div>
                <div className="p-6 space-y-4 font-sans">
                  <div className="flex justify-between items-baseline font-serif">
                    <h3 className="text-2xl font-bold text-white">{room.name}</h3>
                    <span className="text-xs font-mono text-slate-400">{room.sqm}</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">{room.description}</p>
                  <Link href="/booking" className="w-full py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-xs uppercase tracking-wider text-center block">
                    Reserve Villa
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking" className="max-w-3xl mx-auto px-4">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-teal-500/40 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="text-center space-y-2 font-sans">
              <span className="text-xs text-teal-400 font-semibold uppercase tracking-widest block">Direct Concierge Booking</span>
              <h2 className="font-serif text-3xl font-bold text-white">Confirm Your Island Sanctuary</h2>
            </div>

            {!booked ? (
              <form onSubmit={handleBooking} className="font-sans space-y-4">
                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block">Primary Guest Name</label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Lady Victoria Vance"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-teal-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-1 block">Check-In</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-1 block">Check-Out</label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-500/20"
                >
                  Confirm Direct Villa Reservation via API
                </button>
              </form>
            ) : (
              <div className="font-sans p-6 rounded-2xl bg-slate-950 border border-teal-500 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-teal-400 mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-white">Villa Booking Saved in Database</h3>
                <p className="text-slate-300 text-xs">Thank you, {guestName}. Check-in set for {checkIn}.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
