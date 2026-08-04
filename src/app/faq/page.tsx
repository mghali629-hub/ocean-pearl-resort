'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const faqs = [
  { q: 'How do I reach Ocean Pearl Maldives from Velana International Airport (MLE)?', a: 'Our resort airport representative will greet you upon arrival and escort you to the Ocean Pearl VIP Seaplane Lounge. The scenic seaplane flight takes 25 minutes directly to our lagoon dock.' },
  { q: 'Is Ocean Pearl an all-inclusive resort?', a: 'We offer both Bed & Breakfast and Full-Board Gourmet All-Inclusive packages which include all meals, premium beverages, wine pairings, and daily non-motorized water sports.' },
  { q: 'What is your cancellation policy for villa bookings?', a: 'Full refund is granted for cancellations made at least 14 days prior to arrival during low season, and 30 days during peak festive periods.' },
  { q: 'What amenities are provided inside the overwater villas?', a: 'All villas include a private infinity plunge pool, overwater hammock, direct lagoon access ladder, Bang & Olufsen audio, and 24/7 personal island butler service.' },
  { q: 'Is Hanifaru Bay manta ray swimming guaranteed?', a: 'Manta ray aggregations occur seasonally between May and November during full moon tidal surges in Baa Atoll. Our marine biologist team monitors daily sight reports.' },
];

export default function OceanPearlFaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col text-gray-800">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-10 font-sans">
        <div className="text-center">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-4 py-1.5 rounded-full border border-[#c9aa71]/30">
            GUEST INFORMATION
          </span>
          <h1 className="text-4xl font-light font-serif mt-4 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-500 text-xs">Everything you need to know about seaplane transfers, all-inclusive dining, and villa amenities.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 font-bold text-gray-800 flex justify-between items-center text-sm">
                <span>{f.q}</span>
                <span className="text-[#c9aa71] font-mono text-xl ml-4 shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-500 text-xs leading-relaxed border-t border-gray-100 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center space-y-2 shadow-sm">
          <h3 className="font-bold text-gray-800 text-base">Have Special Arrival Demands?</h3>
          <p className="text-gray-500 text-xs">Our island concierge desk is available 24/7.</p>
          <Link href="/contact" className="inline-block text-[#1a3a2a] font-bold text-xs hover:underline uppercase tracking-wider">
            Contact Island Concierge →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
