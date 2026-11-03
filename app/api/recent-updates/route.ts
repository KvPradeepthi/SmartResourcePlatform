import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
  return NextResponse.json([
    {
      id: 'upd_1',
      title: 'Compiler Design Unit 3 Notes Added',
      date: '01 September 2026',
      description: 'Handwritten and typed notes for Unit 3 Syntax Directed Translation are now available.',
    },
    {
      id: 'upd_2',
      title: 'DBMS Mid-1 Previous Year Question Papers',
      date: '28 August 2026',
      description: 'Solved previous 3 years Mid-1 question papers uploaded for IT & CSE branches.',
    },
    {
      id: 'upd_3',
      title: 'Academic Timetable & Lab Batches Finalized',
      date: '20 August 2026',
      description: 'Updated class timetable and lab schedules for Semester 2.',
    },
  ])
}
