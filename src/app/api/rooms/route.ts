import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    let rooms = await prisma.roomSuite.findMany();
    if (rooms.length === 0) {
      const initialRooms = [
        {
          name: 'Presidential Overwater Sanctuary Villa',
          price: '$2,400',
          guests: 'Up to 4 Guests',
          sqm: '280 sqm',
          image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
          description: 'Private infinity pool, direct lagoon ocean staircase, personal butler.',
        },
      ];
      await prisma.roomSuite.createMany({ data: initialRooms });
      rooms = await prisma.roomSuite.findMany();
    }
    return NextResponse.json({ success: true, rooms });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
