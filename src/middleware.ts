import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/guest-portal') || pathname.startsWith('/booking/confirm')) {
    const token = request.cookies.get('next-auth.session-token') || request.cookies.get('oceanpearl-token');
    if (!token) {
      const loginUrl = new URL('/booking', request.url);
      loginUrl.searchParams.set('callbackUrl', encodeURIComponent(pathname));
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/guest-portal/:path*', '/booking/confirm/:path*'],
};
