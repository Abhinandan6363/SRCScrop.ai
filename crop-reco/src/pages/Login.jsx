import React, { useState } from "react";

export default function Login({ onLogin, goToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyhkYKf_NQjsU6D0XqjnzTKyGUCoaMG1dJKzde4lFMb-eNR7AWMdkFQvB2Ibt8kB0ecJw/exec";

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("action", "login");
    formData.append("Email", email);
    formData.append("Password", password);

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((msg) => {
        console.log("Server Response:", msg);

        if (msg === "Login Success") {
          alert("Login Successful!");
          onLogin(); // Switch to Dashboard
        } else {
          alert("Invalid Email or Password");
        }
      })
      .catch((err) => alert("Error: " + err));
  };

  return (
    <div className="h-screen flex items-center justify-center bg-green-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          className="w-full border px-3 py-2 mb-4 rounded-lg bg-blue-50"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full border px-3 py-2 mb-4 rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-green-600 text-white py-2 rounded-lg">
          Login
        </button>

        <p className="text-sm mt-4 text-center">
          Don't have an account?{" "}
          <span
            className="text-green-600 cursor-pointer"
            onClick={goToSignup}
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}
