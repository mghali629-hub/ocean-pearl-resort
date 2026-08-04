'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Waves } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Island Story' },
    { href: '/rooms', label: 'Villas & Suites' },
    { href: '/booking', label: 'Booking' },
    { href: '/dining', label: 'Dining' },
    { href: '/amenities', label: 'Amenities' },
    { href: '/spa', label: 'Pearl Spa' },
    { href: '/activities', label: 'Reef & Excursions' },
    { href: '/weddings', label: 'Weddings' },
    { href: '/honeymoon', label: 'Honeymoon' },
    { href: '/experiences', label: 'Sunset Cruises' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/guest-reviews', label: 'Guest Feedback' },
    { href: '/virtual-tour', label: '360 Island Tour' },
    { href: '/sustainability', label: 'Coral Trust' },
    { href: '/blog', label: 'Island Journal' },
    { href: '/faq', label: 'Resort FAQ' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#06121E]/90 backdrop-blur-xl border-b border-teal-500/20 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-teal-500/20">
            <Waves className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block">OCEAN PEARL</span>
            <span className="text-[9px] tracking-[0.25em] text-teal-400 font-sans font-semibold uppercase block -mt-1">Private Island Resort</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold py-2">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors whitespace-nowrap py-1 ${pathname === link.href ? 'text-cyan-400 border-b-2 border-cyan-400 font-bold' : 'text-zinc-100 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
          {navLinks.length > 5 && (
            <div className="relative group py-1">
              <button className="flex items-center gap-1.5 text-zinc-100 hover:text-white font-semibold text-sm transition-colors cursor-pointer py-1">
                <span>More</span>
                <span className="text-[10px] opacity-80">▼</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-56 bg-black border border-zinc-700 rounded-2xl shadow-2xl p-2 hidden group-hover:block group-focus-within:block z-50">
                <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto no-scrollbar">
                  {navLinks.slice(5).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-zinc-100 hover:bg-zinc-800 hover:text-white transition-colors block whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        <Link
          href="/booking"
          className="font-sans px-4 py-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider shadow-lg transition-all shrink-0"
        >
          Reserve Villa
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#030910] border-t border-teal-500/20 py-12 text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
            <Waves className="w-5 h-5 text-teal-400" /> OCEAN PEARL RESORT
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Ultra-luxury private island sanctuary, overwater villas, and Michelin culinary dining.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-white font-bold mb-3 uppercase text-xs tracking-wider">Accommodations</h4>
          <ul className="space-y-2">
            <li><Link href="/rooms" className="hover:text-teal-400">Overwater Sunset Villas</Link></li>
            <li><Link href="/rooms" className="hover:text-teal-400">Beachfront Pool Suites</Link></li>
            <li><Link href="/rooms" className="hover:text-teal-400">Presidential Ocean Reserve</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white font-bold mb-3 uppercase text-xs tracking-wider">Experiences</h4>
          <ul className="space-y-2">
            <li><Link href="/spa" className="hover:text-teal-400">Pearl Wellness Spa</Link></li>
            <li><Link href="/activities" className="hover:text-teal-400">House Reef Snorkeling</Link></li>
            <li><Link href="/experiences" className="hover:text-teal-400">Private Sunset Cruises</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white font-bold mb-3 uppercase text-xs tracking-wider">Island Concierge</h4>
          <p className="text-slate-400">Seaplane Transfer Desk:</p>
          <p className="text-teal-400 font-bold mt-1 text-sm">+1 (800) PEARL-ISLAND</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
        <div>© 2026 All rights reserved.</div>
        <div>
          <a
            href="https://devmaster.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white font-medium transition-colors cursor-pointer"
          >
            <span>Powered by</span>
            <span className="font-bold text-cyan-400 hover:underline">DevMaster</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
