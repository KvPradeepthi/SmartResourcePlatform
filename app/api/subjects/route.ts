import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  return NextResponse.json({
    subjects: [
      { code: 'DBMS', name: 'Database Management Systems', resource_type: 'resources' },
      { code: 'CD', name: 'Compiler Design', resource_type: 'resources' },
      { code: 'WT', name: 'Web Technologies', resource_type: 'resources' },
      { code: 'CN', name: 'Computer Networks', resource_type: 'resources' },
      { code: 'AI', name: 'Artificial Intelligence', resource_type: 'resources' },
      { code: 'DBMS_LAB', name: 'DBMS Laboratory', resource_type: 'records' }
    ]
  });
}
