import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [filter, setFilter] = useState("All");

  const menuItems = [
    { category: "Hot", name: "Espresso", desc: "Strong and bold, our classic espresso shot.", price: "₱90", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
    { category: "Hot", name: "Caramel Latte", desc: "Espresso with steamed milk and caramel syrup.", price: "₱160", img: "https://media.istockphoto.com/id/2199031977/photo/caramel-latte-coffee-or-coffee-or-hot-coffee-latte-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZVA1DPO_Sy-767MOZRk0bf3l2paPPMq69SDMZh-pUbA=" },
    { category: "Cold", name: "Iced Mocha", desc: "A sweet blend of espresso, milk, and chocolate.", price: "₱170", img: "https://plus.unsplash.com/premium_photo-1726804881341-bfc9554ad94f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aWNlZCUyMG1vY2hhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
    { category: "Cold", name: "Iced Americano", desc: "Smooth espresso poured over chilled water and ice.", price: "₱140", img: "https://images.unsplash.com/photo-1595520519770-15d19939e648?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWNlZCUyMGFtZXJpY2Fub3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" },
    { category: "Pastries", name: "Chocolate Croissant", desc: "Flaky and buttery, filled with rich chocolate.", price: "₱120", img: "https://images.unsplash.com/photo-1631129023315-7ef0e76faaed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlJTIwY3JvaXNzYW50fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
    { category: "Pastries", name: "Blueberry Muffin", desc: "Soft and fluffy muffin bursting with blueberries.", price: "₱110", img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZWJlcnJ5JTIwbXVmZmlufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
  ];

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  const bestSellers = [
    "https://images.unsplash.com/photo-1595520519770-15d19939e648?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWNlZCUyMGFtZXJpY2Fub3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZWJlcnJ5JTIwbXVmZmlufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "https://media.istockphoto.com/id/2199031977/photo/caramel-latte-coffee-or-coffee-or-hot-coffee-latte-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZVA1DPO_Sy-767MOZRk0bf3l2paPPMq69SDMZh-pUbA=",
  ];

  return (
    <div className="menu-page">
      {/* Hero / Banner */}
      <section
        className="menu-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#3c2f2f",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h1>Our Menu</h1>
        <p>Freshly brewed, baked, and served daily.</p>
      </section>

      {/* Filter Buttons */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        {["All", "Hot", "Cold", "Pastries"].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            style={{
              backgroundColor: filter === btn ? "#d4b499" : "#f3e5d8",
              border: "none",
              padding: "10px 20px",
              margin: "0 5px",
              borderRadius: "20px",
              cursor: "pointer",
              color: "#3c2f2f",
              fontWeight: "500",
              transition: "0.3s",
            }}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div
        className="menu-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "50px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="menu-card"
            style={{
              backgroundColor: "#fffaf5",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "10px 0" }}>{item.name}</h3>
              <p style={{ fontSize: "0.9rem", color: "#5a4c43" }}>{item.desc}</p>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>{item.price}</p>
              <div style={{ marginTop: 12 }}>
                {/* Link to dynamic menu item detail. We'll use index+1 as id to match MenuItemDetails data */}
                <Link to={`/menu/${index + 1}`} style={{ textDecoration: "none", color: "#3c2f2f" }}>
                  View details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Best Sellers Gallery */}
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2>✨ Best Sellers ✨</h2>
        <div
          className="best-sellers"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {bestSellers.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Best seller ${i + 1}`}
              style={{
                width: "280px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
