import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const restaurants = await prisma.restaurant.findMany();
    return NextResponse.json(restaurants);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
