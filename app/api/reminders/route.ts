import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const fallbackReminders = [
  {
    id: 'rem-1',
    title: 'DBMS Assignment 1: SQL Queries Submission',
    dueDate: '08 September 2026',
    due_date: '2026-09-08',
    description: 'Submit the completed queries on ER Modeling, Views, and Joins via the college portal.',
    iconType: 'calendar',
    icon_type: 'calendar',
    status: 'active'
  },
  {
    id: 'rem-2',
    title: 'Compiler Design Mid-1 Examination',
    dueDate: '12 September 2026',
    due_date: '2026-09-12',
    description: 'Syllabus: Unit 1 (Lexical Analysis) & Unit 2 (Parsing Tables LR/LALR). Timings: 10:00 AM - 12:00 PM.',
    iconType: 'alert',
    icon_type: 'alert',
    status: 'active'
  },
  {
    id: 'rem-3',
    title: 'DBMS Lab Internal Assessment Schedule',
    dueDate: '15 September 2026',
    due_date: '2026-09-15',
    description: 'Laboratory batch allocations and execution schedules published for Section A & B.',
    iconType: 'clock',
    icon_type: 'clock',
    status: 'active'
  },
  {
    id: 'rem-4',
    title: 'Web Technologies Mini-Project Topic Selection',
    dueDate: '20 September 2026',
    due_date: '2026-09-20',
    description: 'Submit team members (max 3) and proposed web app abstract to the subject coordinator.',
    iconType: 'calendar',
    icon_type: 'calendar',
    status: 'active'
  }
];

export async function GET() {
  return NextResponse.json(fallbackReminders);
}
