import { NextRequest, NextResponse } from 'next/server'

const PREVIEW_PASSWORD = process.env.PREVIEW_PASSWORD || 'chcc2025review'
const COOKIE_NAME = 'chcc_preview_auth'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { password } = body

  if (password !== PREVIEW_PASSWORD) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(COOKIE_NAME, PREVIEW_PASSWORD, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  })

  return response
}
