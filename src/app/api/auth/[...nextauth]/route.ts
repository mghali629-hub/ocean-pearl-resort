import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    user: {
      id: 'usr_opr_guest_771',
      name: 'Sophia Sterling',
      email: 's.sterling@private-guest.com',
      villa: 'Presidential Overwater Villa #101',
      status: 'CHECKED_IN',
    },
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      token: 'opr_jwt_resort_9901827',
      user: {
        id: 'usr_opr_guest_771',
        email: body.email || 'guest@oceanpearl.com',
        status: 'RESERVED',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid guest authentication payload' }, { status: 400 });
  }
}
