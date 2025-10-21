import React from "react";
import "../App.css"; // Use only App.css as per your setup
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content">
      {/* 🌟 Hero Section */}
      <section className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80"
          alt="Coffee Shop Hero"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Brewed with Passion, Served with Love</h1>
          <p className="hero-subtext">
            Discover the aroma, taste, and warmth of every cup.
          </p>
          <Link to="/menu" className="hero-button">
            View Our Menu
          </Link>
        </div>
      </section>

      {/* ☕ Welcome Message */}
      <section className="welcome-section">
        <h2>Welcome to The Coffee Club</h2>
        <p>
          At The Coffee Club, we believe coffee is more than just a drink —
          it’s an experience. Our cozy space, expert baristas, and carefully
          selected beans create the perfect atmosphere to relax, work, or catch
          up with friends.
        </p>
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
          alt="Coffee Shop Interior"
          className="welcome-image"
        />
      </section>

      {/* 🍰 Featured Menu or Specials */}
      <section className="featured-section">
        <h2>Our Featured Favorites</h2>
        <div className="featured-items">
          <div className="featured-card">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80"
              alt="Latte"
            />
            <h3>Signature Latte</h3>
            <p>Rich espresso topped with creamy milk and latte art perfection.</p>
          </div>

          <div className="featured-card">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80"
              alt="Cappuccino"
            />
            <h3>Classic Cappuccino</h3>
            <p>Bold espresso with a perfect balance of frothy milk.</p>
          </div>

          <div className="featured-card">
            <img
              src="https://images.unsplash.com/photo-1597528673850-e27492b0335f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
              alt="Butter Croissant"
            />
            <h3>Butter Croissant</h3>
            <p>Flaky, golden, and freshly baked every morning.</p>
          </div>
        </div>
        <Link to="/menu" className="featured-button">
          See Full Menu
        </Link>
      </section>

      {/* 💬 Testimonials */}
      <section className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>
              “The Coffee Club is my daily escape — amazing coffee and the
              friendliest staff!”
            </p>
            <span>- Maria D.</span>
          </div>
          <div className="testimonial-card">
            <p>
              “Their lattes are perfection! I love the relaxing vibe and the
              music.”
            </p>
            <span>- James R.</span>
          </div>
          <div className="testimonial-card">
            <p>
              “A hidden gem! Cozy interior, great pastries, and excellent
              service.”
            </p>
            <span>- Bianca S.</span>
          </div>
        </div>
      </section>

      {/* ✉️ Newsletter / Loyalty Program */}
      <section className="newsletter-section">
        <h2>Join Our Coffee Club</h2>
        <p>Stay updated with our latest brews, events, and special offers.</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
