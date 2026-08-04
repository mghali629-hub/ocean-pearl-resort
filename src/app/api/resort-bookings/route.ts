import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { suiteName, guestName, checkIn, checkOut } = body;

    const booking = await prisma.resortBooking.create({
      data: {
        suiteName,
        guestName,
        checkIn,
        checkOut,
      },
    });

    return NextResponse.json({ success: true, booking });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
