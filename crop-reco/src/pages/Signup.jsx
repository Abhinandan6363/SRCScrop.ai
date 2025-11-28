import React, { useState } from "react";

export default function Signup({ goToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyhkYKf_NQjsU6D0XqjnzTKyGUCoaMG1dJKzde4lFMb-eNR7AWMdkFQvB2Ibt8kB0ecJw/exec";

  const handleSignup = (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("action", "signup");
    formData.append("FullName", name);
    formData.append("Email", email);
    formData.append("Password", password);

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((msg) => {
        alert(msg);
        setName("");
        setEmail("");
        setPassword("");
        goToLogin();
      })
      .catch((err) => alert("Error: " + err));
  };

  return (
    <div className="h-screen flex items-center justify-center bg-green-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <input
          className="w-full border px-3 py-2 mb-4 rounded-lg"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="w-full border px-3 py-2 mb-4 rounded-lg"
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
          Signup
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <span className="text-green-600 cursor-pointer" onClick={goToLogin}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
