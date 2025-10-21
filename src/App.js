import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MenuItemDetails from "./pages/MenuItemDetails";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Order from "./pages/Order";
import Admin from "./pages/Admin";
import DashboardSection from "./pages/Admin/DashboardSection";
import MenuManagementSection from "./pages/Admin/MenuManagementSection";
import OrdersManagementSection from "./pages/Admin/OrdersManagementSection";
import SettingsSection from "./pages/Admin/SettingsSection";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">The Coffee Club</h1>
      <nav>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/admin">Admin</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 The Coffee Club. All rights reserved.</p>
      <p>Crafted with ☕ & love — Inspired by classic café aesthetics.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:itemId" element={<MenuItemDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Admin with nested routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashboardSection />} />
            <Route path="menu" element={<MenuManagementSection />} />
            <Route path="orders" element={<OrdersManagementSection />} />
            <Route path="settings" element={<SettingsSection />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
