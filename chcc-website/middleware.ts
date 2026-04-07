import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PREVIEW_PASSWORD = process.env.PREVIEW_PASSWORD || 'chcc2025review'
const COOKIE_NAME = 'chcc_preview_auth'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow the auth endpoint itself through
  if (pathname === '/api/preview-auth') {
    return NextResponse.next()
  }

  // Check for valid auth cookie
  const authCookie = request.cookies.get(COOKIE_NAME)
  if (authCookie?.value === PREVIEW_PASSWORD) {
    return NextResponse.next()
  }

  // Not authenticated — show the password gate page
  const url = request.nextUrl.clone()
  url.pathname = '/preview-login'
  url.searchParams.set('from', pathname)
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - /preview-login (the gate page itself)
     * - /api/preview-auth (the auth endpoint)
     * - /_next/* (Next.js internals)
     * - /favicon.ico, /robots.txt, static assets
     */
    '/((?!preview-login|api/preview-auth|_next|favicon|robots|.*\\..*).*)' ,
  ],
}
