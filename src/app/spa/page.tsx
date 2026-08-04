'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { Sparkles, Heart, Clock, Award } from 'lucide-react';
import Link from 'next/link';

interface SpaService {
  id: number;
  name: string;
  duration: string;
  price: string;
  description: string;
}

export default function SpaPage() {
  const [services, setServices] = useState<SpaService[]>([]);

  useEffect(() => {
    fetch('/api/spa-services')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setServices(data.services);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#06121E] text-slate-100 font-serif flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto font-sans">
          <span className="text-xs text-teal-400 font-semibold uppercase tracking-widest block">Holistic Wellness</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Overwater Spa Sanctuary</h1>
          <p className="text-slate-300 text-sm">Glass-floor treatment rooms overlooking coral reefs with marine algae therapies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {services.map((s) => (
            <div key={s.id} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-2 font-serif">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-bold text-white">{s.name}</h3>
                  <span className="font-sans font-bold text-teal-400 text-xl">{s.price}</span>
                </div>
                <span className="text-xs font-mono text-slate-400 font-sans block flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-teal-400" /> {s.duration}</span>
                <p className="font-sans text-slate-300 text-xs leading-relaxed">{s.description}</p>
              </div>

              <Link href="/booking" className="w-full py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-xs uppercase tracking-wider text-center block">
                Reserve Therapy Session
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
