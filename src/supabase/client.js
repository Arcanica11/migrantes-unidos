// src/lib/supabase/client.js
import { createClient } from '@supabase/supabase-js'

// Cliente genérico para hacer consultas públicas desde el servidor.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)