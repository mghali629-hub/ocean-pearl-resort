'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function OceanSustainabilityPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1">
        <div className="text-center mb-14">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-sans font-semibold">Environmental Leadership</span>
          <h1 className="text-4xl font-light mt-3 mb-3 text-gray-800">Luxury in Harmony with Nature</h1>
          <p className="text-gray-500 font-sans max-w-2xl mx-auto">Ocean Pearl is the Maldives' first carbon-neutral luxury resort. Every experience we create is designed to protect the very paradise that makes it extraordinary.</p>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { stat: '100%', label: 'Solar-powered operations' },
            { stat: '0', label: 'Single-use plastics' },
            { stat: '4,200', label: 'Coral fragments regrown annually' },
            { stat: 'Carbon\nNeutral', label: 'Certified since 2023' },
          ].map((m, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-[#1a3a2a] mb-1 whitespace-pre-line leading-tight">{m.stat}</div>
              <div className="text-xs text-gray-500 font-sans">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {[
            { icon: '🌊', title: 'Coral Reef Restoration', desc: 'Our Marine Biologist team operates a coral nursery with 4,200+ coral fragments. Guests may sponsor and name their own coral, tracked for years via GPS tags.' },
            { icon: '☀️', title: 'Renewable Energy', desc: '100% of resort power comes from our 2.4MW offshore solar array and tide-powered generators. We have eliminated diesel generators entirely since 2022.' },
            { icon: '🐢', title: 'Marine Life Protection', desc: 'Ocean Pearl is a certified sea turtle sanctuary. We participate in WWF\'s Marine Protected Area program and conduct nightly turtle monitoring patrols.' },
            { icon: '🥗', title: 'Farm-to-Table', desc: 'Our 1.2-acre aquaponics garden produces 68% of all resort vegetables. Excess produce is donated to local island communities weekly.' },
            { icon: '💧', title: 'Zero Freshwater Waste', desc: 'Advanced desalination and rainwater collection eliminate reliance on mainland freshwater. All wastewater is treated and reused for irrigation.' },
            { icon: '🌿', title: 'Plastic-Free Policy', desc: 'Since 2020, not a single piece of single-use plastic is used anywhere in the resort — from amenities to packaging to kitchen operations.' },
          ].map((p, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-4">
              <span className="text-3xl shrink-0">{p.icon}</span>
              <div><h3 className="font-semibold text-gray-800 mb-2">{p.title}</h3><p className="text-gray-500 font-sans text-sm leading-relaxed">{p.desc}</p></div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-[#1a3a2a] rounded-3xl p-8 text-white text-center">
          <h2 className="text-2xl font-light mb-6">Our Certifications</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['EarthCheck Gold', 'Green Globe Certified', 'Rainforest Alliance', 'PADI Green Star', 'B Corp Certified'].map((cert, i) => (
              <span key={i} className="bg-white/10 border border-white/20 text-white/90 text-xs font-sans font-semibold px-5 py-2 rounded-full">{cert}</span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
