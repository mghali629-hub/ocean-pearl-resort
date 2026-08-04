import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const rooms = await prisma.roomSuite.findMany({ select: { id: true } });
  return rooms.map((r) => ({ id: String(r.id) }));
}

export default async function RoomDetailPage({ params }: { params: { id: string } }) {
  const room = await prisma.roomSuite.findUnique({ where: { id: Number(params.id) } });
  if (!room) notFound();

  const amenities = [
    { icon: '🌊', text: 'Private infinity plunge pool' },
    { icon: '🛁', text: 'Marble soaking bathtub' },
    { icon: '🌅', text: 'Panoramic ocean views' },
    { icon: '🍾', text: 'Champagne on arrival' },
    { icon: '🛎️', text: '24/7 butler service' },
    { icon: '🌿', text: 'Organic bath amenities' },
    { icon: '🎵', text: 'Bose sound system' },
    { icon: '📺', text: '75" 4K smart television' },
    { icon: '🍳', text: 'Gourmet minibar & kitchenette' },
    { icon: '🧘', text: 'Complimentary yoga mat' },
  ];

  const policies = [
    { label: 'Check-in', value: '3:00 PM' },
    { label: 'Check-out', value: '12:00 PM' },
    { label: 'Cancellation', value: 'Free up to 7 days' },
    { label: 'Pets', value: 'Not permitted' },
    { label: 'Smoking', value: 'Non-smoking only' },
  ];

  return (
    <main style={{ background: '#fafaf8', minHeight: '100vh', fontFamily: "'Georgia', serif" }}>
      {/* Hero Gallery */}
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', height: '70vh', gap: '3px' }}>
        <div style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1400&q=80') center/cover`, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px' }}>
          <Link href="/rooms" style={{ position: 'absolute', top: '100px', left: '40px', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', background: 'rgba(0,0,0,0.3)', padding: '8px 16px', borderRadius: '20px' }}>← All Suites</Link>
          <span style={{ background: 'rgba(201,170,113,0.9)', color: '#000', padding: '4px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', letterSpacing: '2px', display: 'inline-block', marginBottom: '12px', width: 'fit-content' }}>PREMIUM SUITE</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '400', margin: '0 0 8px', lineHeight: '1.2' }}>{room.name}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>👥 Up to {room.guests} guests · 📐 {room.sqm} sq m</p>
        </div>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '3px' }}>
          <div style={{ background: `url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80') center/cover` }} />
          <div style={{ background: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80') center/cover` }} />
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 5%', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '60px' }}>
        {/* Left */}
        <div>
          {/* Quick Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '50px' }}>
            {[
              { icon: '👥', label: 'Guests', value: room.guests },
              { icon: '📐', label: 'Size', value: `${room.sqm} sqm` },
              { icon: '⭐', label: 'Rating', value: '5.0/5' },
            ].map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '14px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid rgba(201,170,113,0.2)' }}>
                <div style={{ fontSize: '1.8rem' }}>{s.icon}</div>
                <div style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '1.2rem', margin: '8px 0 4px' }}>{s.value}</div>
                <div style={{ color: '#888', fontSize: '12px', letterSpacing: '1px' }}>{s.label.toUpperCase()}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '400', color: '#1a1a1a', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(201,170,113,0.4)' }}>About This Suite</h2>
            <p style={{ lineHeight: '1.9', color: '#555', fontSize: '1.05rem' }}>{room.description}</p>
            <p style={{ lineHeight: '1.9', color: '#555', marginTop: '16px' }}>
              Experience unparalleled luxury in our {room.name}. Every detail has been thoughtfully curated to create an intimate sanctuary where the boundaries between indoor luxury and outdoor paradise seamlessly dissolve.
            </p>
          </section>

          {/* Amenities */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '400', color: '#1a1a1a', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(201,170,113,0.4)' }}>Suite Amenities</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {amenities.map((a) => (
                <div key={a.text} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <span style={{ fontSize: '1.3rem' }}>{a.icon}</span>
                  <span style={{ color: '#444', fontSize: '0.9rem' }}>{a.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Policies */}
          <section style={{ background: '#fff', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Suite Policies</h2>
            {policies.map((p, i) => (
              <div key={p.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < policies.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <span style={{ color: '#777', fontSize: '14px' }}>{p.label}</span>
                <span style={{ fontWeight: '600', color: '#1a1a1a', fontSize: '14px' }}>{p.value}</span>
              </div>
            ))}
          </section>
        </div>

        {/* Right - Booking Card */}
        <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
          <div style={{ background: '#fff', borderRadius: '20px', padding: '36px', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', border: '1px solid rgba(201,170,113,0.3)' }}>
            <p style={{ color: '#888', fontSize: '12px', letterSpacing: '2px', marginBottom: '6px' }}>NIGHTLY RATE FROM</p>
            <p style={{ fontSize: '2.5rem', fontWeight: '700', color: '#c9aa71', margin: '0 0 4px' }}>{room.price}</p>
            <p style={{ color: '#aaa', fontSize: '13px', marginBottom: '28px' }}>per night · taxes included</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <div>
                <label style={{ color: '#555', fontSize: '12px', fontWeight: '600', letterSpacing: '1px' }}>CHECK-IN</label>
                <input type="date" style={{ display: 'block', width: '100%', background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '10px', padding: '12px 16px', color: '#333', marginTop: '6px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ color: '#555', fontSize: '12px', fontWeight: '600', letterSpacing: '1px' }}>CHECK-OUT</label>
                <input type="date" style={{ display: 'block', width: '100%', background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '10px', padding: '12px 16px', color: '#333', marginTop: '6px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ color: '#555', fontSize: '12px', fontWeight: '600', letterSpacing: '1px' }}>GUESTS</label>
                <select style={{ display: 'block', width: '100%', background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '10px', padding: '12px 16px', color: '#333', marginTop: '6px', fontSize: '14px', outline: 'none' }}>
                  {[1, 2, 3, 4].map(n => <option key={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                </select>
              </div>
            </div>
            <Link href="/booking" style={{ display: 'block', background: 'linear-gradient(135deg, #c9aa71, #a8864a)', color: '#000', textAlign: 'center', padding: '16px', borderRadius: '12px', textDecoration: 'none', fontWeight: '700', letterSpacing: '1px', marginBottom: '14px' }}>
              RESERVE THIS SUITE
            </Link>
            <p style={{ textAlign: 'center', color: '#999', fontSize: '12px' }}>Free cancellation · Best rate guarantee</p>
          </div>
        </div>
      </div>
    </main>
  );
}
