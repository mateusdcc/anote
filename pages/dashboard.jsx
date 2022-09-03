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
      <div className="bg-red-300 bg-green-200 bg-green-300  bg-slate-600 bg-lime-500 bg-sky-600 hidden" />
      <TextEditor />
    </>
  );
}
