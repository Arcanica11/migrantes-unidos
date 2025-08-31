// src/lib/supabase/server.js
import { createServerClient } from "@supabase/ssr";
// OJO: Ya no importamos 'cookies' de 'next/headers' aquí

// La función ahora ACEPTA el cookieStore como argumento
export function createClient(cookieStore) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    process.env.WEBSITE_SLUG,

    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        // Nota: Para una web pública que solo lee datos, los métodos 'set' y 'remove' no son estrictamente necesarios,
        // pero es buena práctica dejarlos por si en el futuro se añade autenticación.
        set(name, value, options) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name, options) {
          cookieStore.delete({ name, ...options });
        },
      },
    }
  );
}
