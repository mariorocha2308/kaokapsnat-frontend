import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let cookieSession = request.cookies.get('isAuthenticated')?.value

  if(!cookieSession && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/auth',request.url))
  }
  
  if (cookieSession && request.nextUrl.pathname === '/auth') {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/auth', '/'],
}