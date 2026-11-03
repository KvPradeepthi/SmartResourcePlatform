import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  return NextResponse.json({
    totalUsers: 534,
    lastUpdated: new Date().toISOString()
  });
}
