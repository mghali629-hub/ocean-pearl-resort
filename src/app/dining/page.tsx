'use client';
import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

interface DiningSpot { id: number; name: string; cuisine: string; hours: string; image: string; desc: string; }

export default function DiningPage() {
  const [venues, setVenues] = useState<DiningSpot[]>([
    { id: 1, name: 'The Pearl Overwater Grill', cuisine: 'Fresh Seafood & Wagyu Steaks', hours: '18:30 – 23:00', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', desc: 'Overwater glass-floor dining experience serving day-boat catches and Japanese Wagyu.' },
    { id: 2, name: 'Coral Lagoon Bar', cuisine: 'Tiki Cocktails & Tapas', hours: '10:00 – 01:00', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80', desc: 'Swim-up infinity pool bar with mixologist-crafted tropical infusions and Mediterranean tapas.' },
  ]);
  useEffect(() => { fetch('/api/dining').then(r => r.json()).then(d => Array.isArray(d) && d.length && setVenues(d)).catch(() => {}); }, []);

  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col text-gray-800">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-sans font-semibold">CULINARY EXCELLENCE</span>
          <h1 className="text-5xl font-light mt-3 mb-3">Dining & Gastronomy</h1>
          <p className="text-gray-500 font-sans max-w-xl mx-auto">Michelin-starred culinary talent, sustainable farm-to-table dining, and overwater glass-floor restaurants.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {venues.map(v => (
            <div key={v.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${v.image}')` }} />
              <div className="p-6">
                <span className="text-xs text-[#c9aa71] font-bold uppercase">{v.cuisine}</span>
                <h3 className="text-2xl font-serif font-light text-gray-800 mt-1 mb-2">{v.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{v.desc}</p>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <span className="text-xs text-gray-400">🕒 {v.hours}</span>
                  <Link href={`/dining/${v.id}`} className="bg-[#1a3a2a] text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-[#25523b] transition-colors">
                    Reserve Table
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
