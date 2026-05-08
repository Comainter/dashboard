// middleware.ts (root of project, same level as app/)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const session = request.cookies.get('session')
  
  // If accessing protected route without session, redirect to login
  if (!session && request.nextUrl.pathname.startsWith('/repositeries')) {
    console.log('No session, redirecting to login')
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  // If has session and trying to access login, redirect to dashboard
  if (session && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/repositeries', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/repositeries/:path*', '/login'],
}