import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://itlgqwcrdmhltkntrwjd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0bGdxd2NyZG1obHRrbnRyd2pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NDIzOTUsImV4cCI6MjA2NjQxODM5NX0.0L6D8BcHQ01GBXez9nPKxDGOyz1wdqClwokROTBfEq8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
