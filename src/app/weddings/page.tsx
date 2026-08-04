'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function OceanWeddingsPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] font-serif flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1600&q=80')" }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative text-center text-white px-4">
            <span className="text-xs tracking-widest font-sans font-semibold text-[#c9aa71] uppercase">Ocean Pearl Resort</span>
            <h1 className="text-5xl font-light mt-3 mb-3">Your Perfect Wedding</h1>
            <p className="text-white/80 text-lg">Celebrate your love story on the shores of paradise</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-16">
          {/* Packages */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-3">Wedding Packages</h2>
            <p className="text-gray-500">Tailored to create your dream celebration</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { name: 'Pearl Ceremony', price: 'From $8,500', guests: 'Up to 20 guests', features: ['Beach or garden ceremony', 'Bridal suite for 2 nights', 'Floral arrangements', 'Wedding cake', 'Champagne toast', 'Dedicated coordinator'] },
              { name: 'Ocean Dream', price: 'From $18,000', guests: 'Up to 60 guests', features: ['Private beach ceremony', 'Overwater suite for 3 nights', 'Custom floral design', 'Seated dinner reception', 'Live acoustic entertainment', 'Spa packages for couple', 'Wedding photographer'], highlight: true },
              { name: 'Grand Coral', price: 'From $38,000', guests: 'Up to 150 guests', features: ['Exclusive resort buyout option', 'Presidential suite for 5 nights', 'Michelin-level catering', 'Full band & DJ', 'Videography & photography', 'Pre-wedding spa retreat', 'Customized décor'] },
            ].map((pkg, i) => (
              <div key={i} className={`rounded-3xl p-7 ${pkg.highlight ? 'bg-[#1a3a2a] text-white' : 'bg-white border border-gray-100 shadow-sm'}`}>
                <h3 className={`text-lg font-semibold mb-1 ${pkg.highlight ? 'text-[#c9aa71]' : 'text-gray-800'}`}>{pkg.name}</h3>
                <div className={`text-2xl font-bold mb-1 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</div>
                <div className={`text-xs mb-5 ${pkg.highlight ? 'text-white/60' : 'text-gray-400'}`}>{pkg.guests}</div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, j) => <li key={j} className={`text-sm flex items-center gap-2 ${pkg.highlight ? 'text-white/80' : 'text-gray-600'}`}><span className="text-[#c9aa71]">✓</span>{f}</li>)}
                </ul>
                <a href="#inquiry" className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${pkg.highlight ? 'bg-[#c9aa71] text-black hover:bg-[#b89860]' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>Request Quote</a>
              </div>
            ))}
          </div>

          {/* Inquiry Form */}
          <div id="inquiry" className="bg-white border border-gray-100 shadow-sm rounded-3xl p-10">
            <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">Start Your Wedding Journey</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[['Your Name', 'text'], ['Partner\'s Name', 'text'], ['Email Address', 'email'], ['Phone Number', 'tel'], ['Preferred Date', 'date'], ['Number of Guests', 'number']].map(([label, type], i) => (
                <div key={i}>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">{label}</label>
                  <input type={type} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9aa71]/40" />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Tell Us Your Dream</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9aa71]/40 resize-none" placeholder="Describe your vision..." />
              </div>
              <div className="md:col-span-2 text-center">
                <button type="submit" className="bg-[#1a3a2a] text-white font-semibold px-12 py-4 rounded-xl hover:bg-[#0f2920] transition-colors text-sm tracking-wider">SUBMIT WEDDING INQUIRY</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
