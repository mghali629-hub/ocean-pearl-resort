'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function HoneymoonPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[55vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540541338537-1220059a0fbb?w=1600&q=80')" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative text-center text-white px-4">
            <span className="text-xs tracking-widest font-sans font-semibold text-[#c9aa71] uppercase">Romance & Luxury</span>
            <h1 className="text-5xl font-light mt-3 mb-3">Honeymoon at Ocean Pearl</h1>
            <p className="text-white/80 text-lg max-w-lg mx-auto">Begin forever in paradise — where seclusion, romance, and world-class luxury unite</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-16">
          {/* Inclusions */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-3">Honeymoon Inclusions</h2>
            <p className="text-gray-500">Every honeymoon package is crafted to create lifelong memories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { icon: '🛏️', label: 'Overwater Suite', desc: '5 or 7 nights in our award-winning overwater bungalows' },
              { icon: '🍾', label: 'Champagne & Flowers', desc: 'Private terrace decorated on arrival with Moët & roses' },
              { icon: '💆', label: 'Couples Spa', desc: 'Signature 90-min Ocean Pearl couples massage and ritual' },
              { icon: '🌅', label: 'Sunrise Breakfast', desc: 'Private sunrise breakfast on your overwater deck daily' },
              { icon: '🚤', label: 'Private Excursions', desc: 'Snorkeling, sunset cruise, and private island picnic' },
              { icon: '🍽️', label: 'Candlelit Dinner', desc: 'Private beach dinner under the stars for two' },
              { icon: '📸', label: 'Photography', desc: 'Professional couples photo session in paradise' },
              { icon: '🎁', label: 'Curated Gifts', desc: 'Bespoke welcome amenity and nightly turndown gift' },
            ].map((inc, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{inc.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{inc.label}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{inc.desc}</p>
              </div>
            ))}
          </div>

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { name: 'Coral Honeymoon', nights: '5 Nights', price: 'From $4,200/couple', suite: 'Lagoon-View Suite', color: 'border-gray-200' },
              { name: 'Pearl Prestige', nights: '7 Nights', price: 'From $7,800/couple', suite: 'Overwater Bungalow', color: 'border-[#c9aa71]', badge: 'MOST ROMANTIC' },
            ].map((pkg, i) => (
              <div key={i} className={`border-2 ${pkg.color} rounded-3xl p-8 relative bg-white shadow-sm`}>
                {pkg.badge && <span className="absolute -top-3 left-6 bg-[#c9aa71] text-black text-xs font-bold px-4 py-1 rounded-full">{pkg.badge}</span>}
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{pkg.name}</h3>
                <div className="text-gray-400 text-sm mb-1">{pkg.nights} · {pkg.suite}</div>
                <div className="text-2xl font-bold text-gray-900 mb-6">{pkg.price}</div>
                <a href="/booking" className="block text-center bg-[#1a3a2a] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#0f2920] transition-colors">RESERVE NOW</a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
