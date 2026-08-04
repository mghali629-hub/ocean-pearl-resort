'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { Compass, Palmtree, Anchor, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface Activity {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch('/api/activities')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setActivities(data.activities);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#06121E] text-slate-100 font-serif flex flex-col justify-between">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto font-sans">
          <span className="text-xs text-teal-400 font-semibold uppercase tracking-widest block">Island Expeditions</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Private Marine & Lagoon Excursions</h1>
          <p className="text-slate-300 text-sm">Manta ray night diving, deep-sea submarine trench exploration, and sunset yacht cruises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          {activities.map((act) => (
            <div key={act.id} className="rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden flex flex-col justify-between">
              <img src={act.image} alt={act.name} className="h-56 w-full object-cover" />
              <div className="p-6 space-y-4 font-sans">
                <span className="px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-mono text-[10px] font-bold uppercase">{act.category}</span>
                <h3 className="font-serif text-xl font-bold text-white">{act.name}</h3>
                <span className="font-mono text-xl font-bold text-teal-400 block">{act.price}</span>
                <Link href="/booking" className="w-full py-3 rounded-xl bg-slate-800 hover:bg-teal-500 hover:text-slate-950 font-bold text-xs uppercase text-center block">
                  Book Excursion
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
