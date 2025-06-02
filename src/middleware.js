import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Skip processing for static files, API routes, and Next.js internal routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  // Create response and add headers
  const response = NextResponse.next();

  // Add pathname to headers for server components
  response.headers.set('x-pathname', pathname);

  // Set language headers
  if (pathname.startsWith('/ar')) {
    response.headers.set('x-language', 'ar');
  } else {
    response.headers.set('x-language', 'fa');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
