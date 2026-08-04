'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { Star, Sparkles } from 'lucide-react';

interface Review {
  id: number;
  guestName: string;
  rating: number;
  comment: string;
}

export default function GuestReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('/api/guest-reviews')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setReviews(data.reviews);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#06121E] text-slate-100 font-serif flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto font-sans">
          <span className="text-xs text-teal-400 font-semibold uppercase tracking-widest block">Guest Testimonials</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Verified Guest Experiences</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {reviews.map((r) => (
            <div key={r.id} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-serif text-xl font-bold text-white">{r.guestName}</h3>
                <div className="flex text-amber-400 gap-1"><Star className="w-4 h-4 fill-amber-400" /> {r.rating}</div>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed font-sans">{r.comment}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
