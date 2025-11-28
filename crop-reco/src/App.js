import React, { useState } from "react";
import "./App.css";        // ✅ ADD THIS LINE
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  if (isLoggedIn) return <Dashboard />;

  return showSignup ? (
    <Signup goToLogin={() => setShowSignup(false)} />
  ) : (
    <Login
      onLogin={() => setIsLoggedIn(true)}
      goToSignup={() => setShowSignup(true)}
    />
  );
}
