import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login success
    localStorage.setItem("isLoggedIn", "true");
    navigate(from, { replace: true });
  };

  return (
    <div style={{ 
      padding: "60px 20px",
      maxWidth: "400px",
      margin: "0 auto",
      textAlign: "center"
    }}>
      <h2 style={{ 
        fontFamily: "'Playfair Display', serif",
        fontSize: "2rem",
        color: "#3c2f2f",
        marginBottom: "30px"
      }}>Admin Login</h2>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        margin: "0 auto",
      }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #e2d9cf",
            fontSize: "1rem",
            boxSizing: "border-box"
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #e2d9cf",
            fontSize: "1rem",
            boxSizing: "border-box"
          }}
        />
        <button 
          type="submit" 
          style={{
            backgroundColor: "#d4b499",
            border: "none",
            color: "#fff",
            padding: "12px 30px",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            width: "100%"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#c4a589"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#d4b499"}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
