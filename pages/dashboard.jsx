import TextEditor, { NoteSideBar } from "../components/TextEditor";
import { supabase } from "../utils/supabaseClient";
import { useEffect } from "react";

export default function Editor() {
  useEffect(() => {
    if (!supabase.auth.user()) {
      window.location.href = "/login";
    }
  });
  return (
    <>
      <TextEditor />
    </>
  );
}
