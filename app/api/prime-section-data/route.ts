import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
  return NextResponse.json({
    data: {
      notes: {
        'DATABASE MANAGEMENT SYSTEMS': [
          { id: 'p_n_1', title: 'Unit 1: Quick Revision Notes', url: '/docs/dbms-unit1-notes.pdf', unitNumber: 1 },
          { id: 'p_n_2', title: 'Unit 2: SQL & Relational Calculus Cheat Sheet', url: '/docs/dbms-unit2-sql.pdf', unitNumber: 2 },
          { id: 'p_n_3', title: 'Unit 3: Normalization & Indexing Summary', url: '/docs/dbms-unit3-normalization.pdf', unitNumber: 3 },
        ],
        'COMPILER DESIGN': [
          { id: 'p_n_4', title: 'Unit 1: Lexical Analysis Formulas', url: '/docs/cd-unit1-lexical.pdf', unitNumber: 1 },
          { id: 'p_n_5', title: 'Unit 2: Parsing Tables (LR/LALR) Notes', url: '/docs/cd-unit2-parsing.pdf', unitNumber: 2 },
        ],
      },
      assignments: {
        'DATABASE MANAGEMENT SYSTEMS': [
          { id: 'p_a_1', title: 'Assignment 1 Solutions', url: '/docs/dbms-assignment1-solutions.pdf', unitNumber: 1 },
        ],
      },
      papers: {
        'DATABASE MANAGEMENT SYSTEMS': [
          { id: 'p_p_1', title: '2025 Mid-1 Question Paper', url: '/docs/dbms-mid1-2025.pdf', unitNumber: 1 },
          { id: 'p_p_2', title: '2024 End Semester Exam Paper', url: '/docs/dbms-sem-end-2024.pdf', unitNumber: 2 },
        ],
        'COMPILER DESIGN': [
          { id: 'p_p_3', title: '2025 Mid-1 Question Paper', url: '/docs/cd-mid1-2025.pdf', unitNumber: 1 },
        ],
      },
    },
    triggeringSubjects: ['Database Management Systems', 'Compiler Design'],
  })
}
