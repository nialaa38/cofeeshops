import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function Admin() {
  // Dashboard sample data
  const [stats] = useState({
    ordersToday: 12,
    revenue: "₱4,520",
    topItems: ["Caramel Latte", "Espresso", "Chocolate Croissant"],
    newMessages: 3,
  });

  // Menu management data
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Espresso", category: "Hot Drinks", price: "₱90", status: "Available" },
    { id: 2, name: "Iced Mocha", category: "Cold Drinks", price: "₱170", status: "Available" },
    { id: 3, name: "Blueberry Muffin", category: "Pastries", price: "₱110", status: "Out of Stock" },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: "",
  });

  // Orders data
  const [orders] = useState([
    { id: "ORD001", customer: "Maria Santos", items: "Caramel Latte, Croissant", total: "₱270", status: "Pending", date: "2025-10-18" },
    { id: "ORD002", customer: "Juan Dela Cruz", items: "Espresso", total: "₱90", status: "Completed", date: "2025-10-17" },
  ]);

  // Handle new menu item form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.category || !newItem.price) return;
    const newId = menuItems.length + 1;
    setMenuItems([...menuItems, { id: newId, ...newItem, status: "Available" }]);
    setNewItem({ name: "", category: "", description: "", price: "", image: "" });
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="admin-page" style={{ padding: "40px 20px", color: "#3c2f2f" }}>
      {/* Header / Admin Nav & logout */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div>
          <h1>Admin</h1>
        </div>
        <div>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#d4b499",
              border: "none",
              padding: "10px 20px",
              borderRadius: "20px",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "600",
              marginLeft: 12,
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard Overview */}
      <section>
        <h1>Dashboard Overview</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3>☕ Today’s Orders</h3>
            <p style={cardNum}>{stats.ordersToday}</p>
          </div>
          <div style={cardStyle}>
            <h3>💰 Total Revenue</h3>
            <p style={cardNum}>{stats.revenue}</p>
          </div>
          <div style={cardStyle}>
            <h3>🏆 Top-Selling Items</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {stats.topItems.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
          <div style={cardStyle}>
            <h3>💌 New Messages</h3>
            <p style={cardNum}>{stats.newMessages}</p>
          </div>
        </div>
      </section>

      {/* Menu Management */}
      <section style={{ marginTop: "60px" }}>
        <h2>Menu Management</h2>

        {/* Add New Item Form */}
        <form
          onSubmit={handleAddItem}
          style={{
            marginTop: "20px",
            backgroundColor: "#fffaf5",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Add New Item</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
            <input name="name" value={newItem.name} onChange={handleChange} placeholder="Name" required style={inputStyle} />
            <input name="category" value={newItem.category} onChange={handleChange} placeholder="Category" required style={inputStyle} />
            <input name="price" value={newItem.price} onChange={handleChange} placeholder="Price" required style={inputStyle} />
            <input name="image" value={newItem.image} onChange={handleChange} placeholder="Image URL (optional)" style={inputStyle} />
            <textarea name="description" value={newItem.description} onChange={handleChange} placeholder="Description" style={{ ...inputStyle, flex: "1 1 100%", height: "80px" }}></textarea>
            <button
              type="submit"
              style={{
                backgroundColor: "#d4b499",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                color: "#fff",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              ➕ Add Item
            </button>
          </div>
        </form>

        {/* Menu Table */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)} style={deleteBtn}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Orders Management */}
      <section style={{ marginTop: "60px" }}>
        <h2>Orders Management</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.customer}</td>
                <td>{o.items}</td>
                <td>{o.total}</td>
                <td>{o.status}</td>
                <td>{o.date}</td>
                <td>
                  <button style={actionBtn}>Mark Completed</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      
    </div>
  );
}

/* === Inline Style Constants === */
const cardStyle = {
  backgroundColor: "#fffaf5",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const cardNum = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "#6c4f3d",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const inputStyle = {
  flex: "1",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #e2d9cf",
};

const deleteBtn = {
  backgroundColor: "#d76c6c",
  border: "none",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "6px",
  cursor: "pointer",
};

const actionBtn = {
  backgroundColor: "#d4b499",
  border: "none",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "6px",
  cursor: "pointer",
};

export default Admin;
