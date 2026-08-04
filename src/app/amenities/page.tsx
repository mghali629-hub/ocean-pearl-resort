'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const amenities = [
  { icon:'🏊', title:'Infinity Lagoon Pool (1,200 sqm)', desc:'Olympic-length freeform infinity pool facing the south lagoon with swim-up cocktail bar, private cabanas, and butler service.' },
  { icon:'💆', title:'Coral Spa & Hydrotherapy Centre', desc:'10 overwater treatment suites with glass-floor panels, infrared dry saunas, mineral salt floatation tanks, and Thai herbal compress treatments.' },
  { icon:'🚁', title:'Private Helipad & Seaplane Dock', desc:'Direct VIP seaplane transfers from Velana International in 25 minutes. Private helicopter charters for inter-island excursions.' },
  { icon:'🎾', title:'Sports & Recreation', desc:'Two floodlit tennis courts, a half-basketball court, championship croquet lawn, and a 350m beachside jogging circuit.' },
  { icon:'🤿', title:'Dive & Watersports Centre', desc:'PADI 5-Star dive centre with guided reef dives, freediving certification, jet ski hire, and kitesurfing lessons.' },
  { icon:'📚', title:'The Pearl Library & Cinema', desc:'Air-conditioned library with 800 curated titles and an outdoor cinema screening nightly films under the stars.' },
];

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col text-gray-800">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-4 py-1.5 rounded-full border border-[#c9aa71]/30">
            RESORT FACILITIES
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">Resort Amenities</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base">Every facility at Ocean Pearl is designed to surpass your expectations of tropical luxury.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {amenities.map((a,i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <span className="text-4xl block">{a.icon}</span>
              <h3 className="text-xl font-light text-gray-800 font-serif">{a.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center font-sans pt-4">
          <Link href="/booking" className="inline-block bg-[#1a3a2a] text-white font-bold text-xs px-8 py-3 rounded-xl hover:bg-[#25523b] transition-colors uppercase tracking-wider">
            Book Resort Stay & Experience Amenities
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
