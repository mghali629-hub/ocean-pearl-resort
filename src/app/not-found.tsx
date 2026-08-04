'use client';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#061523] text-slate-100 flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="w-20 h-20 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 text-3xl font-black mb-6">
          404
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Island Haven Not Found</h1>
        <p className="text-slate-400 text-xs max-w-md mb-8">
          The overwater villa, spa treatment reservation, or island excursion page you requested could not be located.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-colors"
          >
            Return to Resort
          </Link>
          <Link
            href="/rooms"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-teal-400 font-bold rounded-xl text-xs uppercase tracking-wider border border-slate-800 transition-colors"
          >
            Explore Villas
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
