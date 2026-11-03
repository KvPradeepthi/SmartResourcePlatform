import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Validate public env vars explicitly with fallback
const publicSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ztkmubjupvfzwdjzyxes.supabase.co';
const publicSupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0a211Ymp1cHZmd3pkanp5eGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2MjAwMDAwMDAsImV4cCI6MTkzNTU2NjAwMH0.dummy';

export const supabase = createClient(publicSupabaseUrl, publicSupabaseAnonKey);

let supabaseAdminInstance: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (typeof window !== 'undefined') {
    throw new Error(
      'getSupabaseAdmin must only be used in server-side code (API routes, server actions, middleware, or SSR).'
    );
  }

  if (supabaseAdminInstance) {
    return supabaseAdminInstance;
  }

  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || publicSupabaseAnonKey;

  supabaseAdminInstance = createClient(publicSupabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return supabaseAdminInstance;
}

export function createSupabaseAdmin(): SupabaseClient {
  return getSupabaseAdmin();
}

export function resetSupabaseAdmin(): void {
  supabaseAdminInstance = null;
}
