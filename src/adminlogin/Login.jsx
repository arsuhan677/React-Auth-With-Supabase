import React, { useState } from "react";
import { useNavigate } from "react-router";
import supabase from "../Utils/supabase";
// import supabase from "../Utils/supabase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const adminUser = "arsuhan677@gmail.com";

  const handleSignIn = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      alert(error.message);
      console.log("signin error", error);
      return;
    }
    if (data.user) {
      console.log("login success", data);
      if (data.user.email === adminUser) {
        navigate("/admin");
        return;
      }
      navigate("/");
      // navigate("/softzino");
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignIn}
        className="bg-white p-8 rounded-xl shadow-lg w-120"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login Page</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter admin email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter password"
            required
          />
        </div>

        <p>
          Don't have any account?{" "}
          <span onClick={() => navigate("/register")} className="text-red-600 cursor-pointer">
            register
          </span>
        </p>

        <button
          type="submit"
          className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-md font-medium hover:bg-blue-700 duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
