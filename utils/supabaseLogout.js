import { supabase } from "./supabaseClient";

export default function supabaseLogout() {
  supabase.auth.signOut().then(() => {
    window.location.href = "/login";
  });
}
