import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// For simplicity we'll reuse the same static menu data as in Menu.js
const MENU = [
  { id: "1", category: "Hot", name: "Espresso", desc: "Strong and bold, our classic espresso shot.", price: "₱90", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
  { id: "2", category: "Hot", name: "Caramel Latte", desc: "Espresso with steamed milk and caramel syrup.", price: "₱160", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80" },
  { id: "3", category: "Cold", name: "Iced Mocha", desc: "A sweet blend of espresso, milk, and chocolate.", price: "₱170", img: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3f?auto=format&fit=crop&w=600&q=80" },
  { id: "4", category: "Cold", name: "Iced Americano", desc: "Smooth espresso poured over chilled water and ice.", price: "₱140", img: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=600&q=80" },
  { id: "5", category: "Pastries", name: "Chocolate Croissant", desc: "Flaky and buttery, filled with rich chocolate.", price: "₱120", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
  { id: "6", category: "Pastries", name: "Blueberry Muffin", desc: "Soft and fluffy muffin bursting with blueberries.", price: "₱110", img: "https://images.unsplash.com/photo-1606312619349-3f4eabf8e2b4?auto=format&fit=crop&w=600&q=80" },
];

function MenuItemDetails() {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const item = MENU.find((m) => m.id === itemId) || null;

  if (!item) {
    return (
      <section style={{ padding: 40 }}>
        <h2>Item not found</h2>
        <p>We couldn't find the menu item you're looking for.</p>
      </section>
    );
  }

  return (
    <section style={{ 
      padding: "60px 20px",
      maxWidth: "1000px",
      margin: "0 auto"
    }}>
      <div style={{ 
        display: "flex", 
        gap: "40px", 
        alignItems: "flex-start",
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "30px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}>
        <div style={{ flex: "0 0 450px" }}>
          <img 
            src={item.img} 
            alt={item.name} 
            style={{ 
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }} 
          />
        </div>
        <div style={{ flex: 1, paddingTop: "20px" }}>
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.5rem",
            color: "#3c2f2f",
            marginBottom: "15px"
          }}>{item.name}</h2>
          <p style={{ 
            color: "#5a4c43", 
            fontSize: "1.1rem",
            lineHeight: "1.6",
            marginBottom: "20px"
          }}>{item.desc}</p>
          <p style={{ 
            fontWeight: "700", 
            fontSize: "1.5rem",
            color: "#3c2f2f",
            marginBottom: "30px"
          }}>{item.price}</p>
          <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
            <button
              onClick={() => navigate(-1)}
              style={{ 
                padding: "12px 24px",
                backgroundColor: "#f3e5d8",
                border: "none",
                borderRadius: "8px",
                color: "#3c2f2f",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#e8d5c4"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#f3e5d8"}
            >
              ← Back
            </button>
            <button 
              style={{ 
                padding: "12px 30px",
                backgroundColor: "#d4b499",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                flex: 1
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#c4a589"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#d4b499"}
            >
              Add to Order
            </button>
          </div>
          {/* Additional details section */}
          <div style={{ 
            marginTop: "40px",
            padding: "20px",
            backgroundColor: "#fdfaf6",
            borderRadius: "12px"
          }}>
            <h3 style={{ 
              color: "#3c2f2f",
              marginBottom: "10px",
              fontSize: "1.2rem"
            }}>Category</h3>
            <p style={{ color: "#5a4c43" }}>{item.category}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuItemDetails;
