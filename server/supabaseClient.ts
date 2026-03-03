import type {SupabaseClient} from '@supabase/supabase-js';
import {createClient} from '@supabase/supabase-js';

import type {Database} from '../src/types/supabase';
import {assert} from '../src/utils/assert';

const {NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY} = process.env;

export const getSupabaseClient = (): SupabaseClient<Database> => {
  assert(NEXT_PUBLIC_SUPABASE_URL, 'NEXT_PUBLIC_SUPABASE_URL is not defined');
  assert(SUPABASE_SERVICE_ROLE_KEY || NEXT_PUBLIC_SUPABASE_ANON_KEY, 'Supabase key is not defined');
  return createClient<Database>(
    NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY || NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
};
