'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function OceanVirtualTourPage() {
  const highlights = [
    { title: 'Presidential Overwater Suite', duration: '4:20', preview: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80' },
    { title: 'Coral Spa & Wellness Centre', duration: '3:15', preview: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80' },
    { title: 'Lagoon-Side Infinity Pool', duration: '2:50', preview: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80' },
    { title: 'Pearl Dining — Main Restaurant', duration: '3:40', preview: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80' },
    { title: 'Private Beach & Watersports', duration: '5:00', preview: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80' },
    { title: 'Gardens & Arrival Experience', duration: '2:30', preview: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80' },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-sans font-semibold">Explore from Anywhere</span>
          <h1 className="text-4xl font-light mt-3 mb-3 text-gray-800">Virtual Resort Tour</h1>
          <p className="text-gray-500 font-sans max-w-xl mx-auto">Step inside Ocean Pearl without leaving home. Explore every corner of our resort through immersive video and 360° photography.</p>
        </div>

        {/* Main Feature Video */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl" style={{ aspectRatio: '16/9', background: "url('https://images.unsplash.com/photo-1540541338537-1220059a0fbb?w=1400&q=80') center/cover" }}>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110">
              <span className="text-3xl ml-1">▶️</span>
            </button>
          </div>
          <div className="absolute bottom-6 left-6 text-white">
            <div className="text-xs font-sans font-bold text-[#c9aa71] uppercase tracking-widest mb-1">Full Resort Tour</div>
            <div className="text-xl font-light">Ocean Pearl Maldives — 18:30 min</div>
          </div>
        </div>

        {/* Tour Videos Grid */}
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">Explore By Area</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {highlights.map((tour, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all">
              <div className="h-44 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${tour.preview}')` }} />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                  <span className="text-lg ml-0.5">▶</span>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="font-sans text-sm font-semibold">{tour.title}</div>
                <div className="font-sans text-xs text-white/70">{tour.duration}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 360 CTA */}
        <div className="bg-[#1a3a2a] rounded-3xl p-8 text-center text-white">
          <h2 className="text-2xl font-light mb-2">Experience in 360°</h2>
          <p className="text-white/70 font-sans text-sm mb-6">Compatible with VR headsets and all modern browsers. No download required.</p>
          <button className="bg-[#c9aa71] text-black font-sans font-bold px-8 py-3 rounded-xl hover:bg-[#b89860] transition-colors">LAUNCH 360° EXPERIENCE</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
