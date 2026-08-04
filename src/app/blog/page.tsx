'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const posts = [
  { slug: 'coral-reef-restoration-2026', title: 'Protecting Paradise: 4,200 Coral Fragments Regrown in Baa Atoll', date: 'July 25, 2026', author: 'Dr. Samuel Vance (Marine Biologist)', category: 'ECO-SUSTAINABILITY', excerpt: 'How our offshore nursery frames have achieved a 94% survival rate for staghorn and brain coral species.' },
  { slug: 'maldivian-stargazing-guide', title: 'Night Astronomy & Stargazing from Overwater Hammocks', date: 'July 08, 2026', author: 'Clara Sterling', category: 'ISLAND LIFE', excerpt: 'Zero light pollution in Baa Atoll allows breathtaking views of the Milky Way core and Southern Cross.' },
];

export default function OceanBlogPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col text-gray-800">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-4 py-1.5 rounded-full border border-[#c9aa71]/30">
            ISLAND DISPATCHES
          </span>
          <h1 className="text-5xl font-light font-serif mt-4 mb-3">Ocean Pearl Journal</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">Dispatches on coral reef restoration, night astronomy, and tropical island conservation.</p>
        </div>

        <div className="space-y-6 font-sans">
          {posts.map((p) => (
            <div key={p.slug} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#c9aa71] bg-[#c9aa71]/10 px-3 py-1 rounded-full uppercase">{p.category}</span>
                <span className="text-xs text-gray-400">{p.date} · By {p.author}</span>
              </div>
              <h2 className="text-2xl font-light text-gray-800 font-serif">{p.title}</h2>
              <p className="text-gray-500 text-xs leading-relaxed">{p.excerpt}</p>
              <div className="pt-2">
                <Link href={`/blog/${p.slug}`} className="inline-block text-[#1a3a2a] font-bold text-xs hover:underline uppercase tracking-wider">
                  Read Journal Entry →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
