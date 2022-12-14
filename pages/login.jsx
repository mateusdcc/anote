import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Link from "next/link";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      setMessage("Logged in successfully!");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    } catch (error) {
      setMessage(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const user = supabase.auth.user();
    if (user) {
      window.location.href = "/dashboard";
    }
  }, []);

  return (
    <div className="flex items-center justify-center w-screen min-h-screen  overflow-y-clip">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleLogin(email, password);
                }
              }}
            />
          </div>
          <label className="label">
            <a className="label-text-alt">{message}</a>
          </label>
          <div className="form-control mt-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email, password);
              }}
              disabled={loading}
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
