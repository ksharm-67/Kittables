import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://supabase.com/dashboard/project/kiemquphvjafewvynwyf'
const supabaseAnonKey = 'sb_publishable_REe4LtH--GZNePw4Zu97kw_SjIqoIMx'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)