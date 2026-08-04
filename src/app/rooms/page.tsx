'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

export default function RoomsPage() {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    fetch('/api/rooms')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setRooms(data.rooms);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 font-serif flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center space-y-2">
          <span className="font-sans text-cyan-700 text-xs uppercase tracking-widest font-semibold">Accommodations</span>
          <h1 className="text-4xl font-bold text-slate-900">Luxury Suites & Overwater Villas</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xl flex flex-col justify-between">
              <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
              <div className="p-6 space-y-4 font-sans">
                <div className="flex justify-between items-baseline font-serif">
                  <h3 className="text-2xl font-bold text-slate-900">{room.name}</h3>
                  <span className="text-cyan-700 font-extrabold text-xl">{room.price}</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">{room.description}</p>
                <Link href={`/booking?suite=${encodeURIComponent(room.name)}`} className="w-full py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs uppercase tracking-wider text-center block">
                  Reserve Villa
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
