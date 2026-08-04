'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col text-gray-800">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-4 py-1.5 rounded-full border border-[#c9aa71]/30">
            OUR ISLAND HERITAGE
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">Luxury in Harmony with Nature</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Ocean Pearl Resort is a carbon-neutral private island sanctuary located in the UNESCO Biosphere Reserve of Baa Atoll, Maldives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-sans">
          {[
            { stat: '100%', label: 'Offshore Solar Powered' },
            { stat: 'UNESCO', label: 'Baa Atoll Biosphere' },
            { stat: '0%', label: 'Single-Use Plastics' },
            { stat: '24/7', label: 'Island Butler Service' },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
              <div className="text-3xl font-light text-[#c9aa71] font-serif">{s.stat}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {[
            { title: '100% Solar Powered', desc: 'Operating on a 2.4MW offshore floating solar array and wave tide generators.' },
            { title: 'UNESCO Biosphere Location', desc: 'Direct access to Hanifaru Bay manta ray and whale shark feeding grounds.' },
            { title: 'Zero Single-Use Plastics', desc: 'Fully plastic-free resort operations since 2020 with in-house glass desalination bottling.' },
          ].map((m, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-3">
              <h3 className="text-xl font-light text-gray-800 font-serif">{m.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#c9aa71]/30 rounded-3xl p-8 text-center space-y-4 font-sans shadow-sm">
          <h2 className="text-2xl font-light text-gray-800 font-serif">Reserve Your Private Island Stay</h2>
          <p className="text-gray-500 text-xs max-w-md mx-auto">Includes 25-minute VIP seaplane transfers and daily overwater breakfast.</p>
          <Link href="/booking" className="inline-block bg-[#1a3a2a] text-white font-bold text-xs px-8 py-3 rounded-xl hover:bg-[#25523b] transition-colors uppercase tracking-wider">
            Check Villa Availability
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
