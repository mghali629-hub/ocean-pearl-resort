'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const photos = [
  { title:'Sunset over the South Lagoon', src:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', tag:'LAGOON' },
  { title:'Coral Lagoon Bar at Twilight', src:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', tag:'BAR & LOUNGE' },
  { title:'Pearl Overwater Grill Glass Floor', src:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', tag:'FINE DINING' },
  { title:'Presidential Villa Infinity Pool', src:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', tag:'ACCOMMODATION' },
  { title:'Manta Ray Morning Safari', src:'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80', tag:'EXCURSIONS' },
  { title:'Coral Spa Overwater Suite', src:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', tag:'WELLNESS' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col text-gray-800">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-4 py-1.5 rounded-full border border-[#c9aa71]/30">
            VISUAL PARADISE
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">Resort Photo Gallery</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base">Explore the turquoise lagoons, overwater villas, and pristine marine sanctuaries of Ocean Pearl Maldives.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {photos.map((p,i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-60 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage:`url('${p.src}')` }} />
              <div className="p-4 flex justify-between items-center">
                <h3 className="text-xs font-light text-gray-700 font-serif">{p.title}</h3>
                <span className="text-[10px] font-bold text-[#c9aa71] bg-[#c9aa71]/10 px-2 py-0.5 rounded">{p.tag}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center font-sans pt-4">
          <Link href="/rooms" className="inline-block bg-[#1a3a2a] text-white font-bold text-xs px-8 py-3 rounded-xl hover:bg-[#25523b] transition-colors uppercase tracking-wider">
            Explore Villa Options & Rates →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
