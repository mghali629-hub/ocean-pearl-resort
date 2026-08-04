'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function DiningDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col text-gray-800">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8 font-sans">
        <div>
          <Link href="/dining" className="text-xs text-[#c9aa71] font-bold hover:underline mb-4 block">← Back to Dining Venues</Link>
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-3 py-1 rounded-full border border-[#c9aa71]/30">
              OVERWATER FINE DINING
            </span>
            <span className="text-xs text-gray-500">Hours: 18:30 – 23:00 · Dress: Island Elegant</span>
          </div>
          <h1 className="text-4xl font-light font-serif mt-3 mb-2">The Pearl Overwater Grill</h1>
          <p className="text-gray-500 text-sm">Executive Chef: Laurent Dubois · Sommelier: Jean-Luc Moreau</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-light font-serif text-gray-800">Gastronomic Experience</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Suspended over the turquoise lagoon, The Pearl features glass floor panels allowing guests to watch reef sharks and stingrays glide below while dining on dry-aged Wagyu and day-boat Maldivian lobster paired with rare vintages.
          </p>

          <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6 text-center text-xs">
            <div><span className="text-gray-400 block">Cuisine Type</span><strong className="text-gray-800">Seafood & Wagyu Grill</strong></div>
            <div><span className="text-gray-400 block">Wine Cellar</span><strong className="text-gray-800">1,200 Vintage Labels</strong></div>
            <div><span className="text-gray-400 block">Seating</span><strong className="text-[#c9aa71]">Overwater Glass Floor</strong></div>
          </div>

          <div className="pt-2">
            <button className="w-full bg-[#c9aa71] text-black font-bold text-xs py-3.5 rounded-xl hover:bg-[#b89860] transition-colors uppercase tracking-wider">
              CONFIRM DINING RESERVATION
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
