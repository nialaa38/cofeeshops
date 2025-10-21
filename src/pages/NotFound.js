import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section 
      className="page notfound" 
      style={{ 
        padding: "60px 20px",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto"
      }}
    >
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "2.5rem",
        color: "#3c2f2f",
        marginBottom: "20px"
      }}>
        Oops! Seems like you've wandered off the menu
      </h2>
      <p style={{
        fontSize: "1.1rem",
        lineHeight: "1.6",
        color: "#5a4c43",
        marginBottom: "30px"
      }}>
        Don't worry, even our baristas take a wrong turn sometimes! 
        Let's help you find your way back to something delicious.
      </p>
      <div style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        <Link 
          to="/"
          style={{
            backgroundColor: "#d4b499",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            transition: "background-color 0.3s ease"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#c4a589"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#d4b499"}
        >
          Return Home
        </Link>
        <Link 
          to="/menu"
          style={{
            backgroundColor: "#f3e5d8",
            color: "#3c2f2f",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            transition: "background-color 0.3s ease"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#e8d5c4"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#f3e5d8"}
        >
          Browse Our Menu
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
