import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.match('/')) {
    // return NextResponse.redirect(new URL('/auth', request.url))
  }
}
