'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const experiences = [
  { id: 1, title: 'Private Manta Ray & Whale Shark Safari', duration: '4 Hours', desc: 'Guided speedboat expedition with resident marine biologists to swim alongside gentle ocean giants.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80' },
  { id: 2, title: 'Sunset Catamaran Champagne Cruise', duration: '2.5 Hours', desc: 'Sail into Maldivian sunsets on our luxury 50ft catamaran with free-flowing Dom Pérignon.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80' },
];

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col text-gray-800">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-4 py-1.5 rounded-full border border-[#c9aa71]/30">
            ISLAND ADVENTURES
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">Curated Experiences</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">Bespoke Maldivian excursions designed for underwater enthusiasts, couples, and families.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {experiences.map(e => (
            <div key={e.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${e.image}')` }} />
              <div className="p-6 space-y-3">
                <span className="text-xs text-[#c9aa71] font-bold uppercase tracking-widest block">{e.duration}</span>
                <h3 className="text-2xl font-serif font-light text-gray-800">{e.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{e.desc}</p>
                <div className="pt-2">
                  <Link href={`/activities/${e.id}`} className="bg-[#1a3a2a] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#25523b] transition-colors inline-block uppercase tracking-wider">
                    Book Activity Details →
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
