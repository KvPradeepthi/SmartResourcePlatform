import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  return NextResponse.json({
    profile: {
      id: 'user_1225',
      name: 'Kamichetty Veera Pradeepthi',
      email: 'deepthikamichetty336@gmail.com',
      roll_number: '23A91A1225',
      branch: 'IT',
      year: 2,
      semester: 2,
      section: 'A',
      role: 'student'
    }
  });
}
