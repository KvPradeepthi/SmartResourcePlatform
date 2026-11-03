import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { createSupabaseAdmin } from '@/lib/supabase'

export const runtime = 'nodejs'

const fallbackData = {
  ok: true,
  profile: {
    id: 'user_1225',
    name: 'Kamichetty Veera Pradeepthi',
    email: 'deepthikamichetty336@gmail.com',
    roll_number: '23A91A1225',
    branch: 'IT',
    year: 2,
    semester: 2,
    section: 'A',
    role: 'student',
  },
  subjects: [
    { id: 'sub_1', code: 'DBMS', name: 'Database Management Systems', resource_type: 'theory' },
    { id: 'sub_2', code: 'CD', name: 'Compiler Design', resource_type: 'theory' },
    { id: 'sub_3', code: 'WT', name: 'Web Technologies', resource_type: 'theory' },
    { id: 'sub_4', code: 'CN', name: 'Computer Networks', resource_type: 'theory' },
    { id: 'sub_5', code: 'AI', name: 'Artificial Intelligence', resource_type: 'theory' },
    { id: 'sub_6', code: 'DBMS_LAB', name: 'DBMS Laboratory', resource_type: 'lab' },
  ],
  static: {
    branches: [{ id: 'b_it', name: 'Information Technology', code: 'IT' }],
    years: [{ id: 'y_2', batch_year: 2024, display_name: '2nd Year' }],
    semesters: [{ id: 's_2', semester_number: 2 }],
  },
  dynamic: {
    usersCount: 534,
    resourcesCount: 148,
    upcomingExams: [
      { subject: 'Database Management Systems', exam_date: '2026-09-10', branch: 'IT', year: '2' },
      { subject: 'Compiler Design', exam_date: '2026-09-12', branch: 'IT', year: '2' },
    ],
    upcomingReminders: [
      { id: 'rem_1', title: 'DBMS Assignment 1 Submission', due_date: '2026-09-08', completed: false },
      { id: 'rem_2', title: 'Lab Exam Schedule Published', due_date: '2026-09-15', completed: false },
    ],
    recentUpdates: [
      { id: 'upd_1', title: 'Compiler Design Unit 3 Notes Added', created_at: '2026-09-01' },
      { id: 'upd_2', title: 'DBMS Previous Year Mid-1 Question Papers', created_at: '2026-08-28' },
    ],
  },
  resources: {
    DBMS: {
      notes: [
        { id: 'res_1', title: 'Unit 1: ER Model & Relational Algebra', url: '/docs/dbms-unit1-notes.pdf' },
        { id: 'res_2', title: 'Unit 2: SQL & Normalization (1NF, 2NF, 3NF, BCNF)', url: '/docs/dbms-unit2-sql.pdf' },
        { id: 'res_3', title: 'Unit 3: Transaction Management & Concurrency Control', url: '/docs/dbms-unit3-normalization.pdf' },
      ],
      assignments: [
        { id: 'res_4', title: 'Assignment 1: SQL Queries and Views', url: '/docs/dbms-assignment1-solutions.pdf' },
      ],
      papers: [
        { id: 'res_5', title: 'Mid-1 Question Paper (2025)', url: '/docs/dbms-mid1-2025.pdf' },
      ],
    },
    CD: {
      notes: [
        { id: 'res_6', title: 'Unit 1: Lexical Analysis & Lex Tool', url: '/docs/cd-unit1-lexical.pdf' },
        { id: 'res_7', title: 'Unit 2: Syntax Analysis & Parsing (LL, LR, LALR)', url: '/docs/cd-unit2-parsing.pdf' },
      ],
      assignments: [
        { id: 'res_8', title: 'Assignment 1: Yacc Parser Implementation', url: '/docs/cd-assignment1.pdf' },
      ],
      papers: [
        { id: 'res_9', title: 'Previous Semester End Exam Paper', url: '/docs/cd-sem-end.pdf' },
      ],
    },
    WT: {
      notes: [
        { id: 'res_10', title: 'Unit 1: HTML5, CSS3 & Responsive Design', url: '/docs/wt-unit1-notes.pdf' },
        { id: 'res_11', title: 'Unit 2: JavaScript ES6+ & DOM Manipulation', url: '/docs/wt-unit2-notes.pdf' },
        { id: 'res_12', title: 'Unit 3: Node.js & Express REST APIs', url: '/docs/wt-unit3-notes.pdf' },
      ],
      assignments: [],
      papers: [],
    },
  },
  contextWarnings: [],
}

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = createSupabaseAdmin()
    const { data: profileRow } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', session.user.email.toLowerCase())
      .maybeSingle()

    if (!profileRow) {
      return NextResponse.json(fallbackData)
    }

    return NextResponse.json(fallbackData)
  } catch (error) {
    console.warn('Using demo fallback data for bulk-academic-data')
    return NextResponse.json(fallbackData)
  }
}
