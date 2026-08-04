'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function ActivityDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col text-gray-800">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8 font-sans">
        <div>
          <Link href="/activities" className="text-xs text-[#c9aa71] font-bold hover:underline mb-4 block">← Back to Resort Activities</Link>
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-3 py-1 rounded-full border border-[#c9aa71]/30">
              MARINE EXPEDITION
            </span>
            <span className="text-xs text-gray-500">Duration: 4 Hours · Private Speedboat</span>
          </div>
          <h1 className="text-4xl font-light font-serif mt-3 mb-2">Private Manta Ray & Whale Shark Safari</h1>
          <p className="text-gray-500 text-sm">Guided by Resident Marine Biologist Team · Hanifaru Bay Biosphere Reserve</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-light font-serif text-gray-800">Expedition Details</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Embark on a private speed-charter to Hanifaru Bay Biosphere Reserve accompanied by our resident marine biologist team. Snorkel with feeding manta rays and gentle whale sharks in crystal-clear turquoise waters. Includes pro underwater photo capture.
          </p>

          <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6 text-center text-xs">
            <div><span className="text-gray-400 block">Provided Gear</span><strong className="text-gray-800">Scubapro Snorkel & Fins</strong></div>
            <div><span className="text-gray-400 block">Group Size</span><strong className="text-gray-800">Private (Up to 6 Guests)</strong></div>
            <div><span className="text-gray-400 block">Media Included</span><strong className="text-[#c9aa71]">4K Underwater Photo/Video</strong></div>
          </div>

          <div className="pt-2">
            <button className="w-full bg-[#c9aa71] text-black font-bold text-xs py-3.5 rounded-xl hover:bg-[#b89860] transition-colors uppercase tracking-wider">
              BOOK PRIVATE SAFARI ($480 / GUEST)
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
