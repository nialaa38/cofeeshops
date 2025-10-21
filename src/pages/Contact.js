import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // simulate async submit then navigate to thank you page
    setTimeout(() => {
      setSubmitted(false);
      navigate("/thankyou");
    }, 600);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section
        className="contact-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#3c2f2f",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1>Get in Touch</h1>
        <p style={{ maxWidth: "600px", margin: "10px auto" }}>
          We’d love to hear from you — whether you’re craving your favorite
          latte or planning an event.
        </p>
      </section>

      {/* Contact Information */}
      <section
        style={{
          textAlign: "center",
          padding: "50px 20px",
          lineHeight: "1.8",
        }}
      >
        <h2>Contact Information</h2>
        <p>📍 <strong>123 Brew Street, Manila, Philippines</strong></p>
        <p>
          📞 <a href="tel:+63212345678" style={{ color: "#3c2f2f", textDecoration: "none" }}>(02) 1234-5678</a>
        </p>
        <p>
          ✉️ <a href="mailto:hello@coffeeclub.ph" style={{ color: "#3c2f2f", textDecoration: "none" }}>hello@coffeeclub.ph</a>
        </p>
        <p>⏰ <strong>Mon–Sun | 7:00 AM – 9:00 PM</strong></p>
      </section>

      {/* Map Section */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2>Find Us</h2>
        <p>🗺️ Find us in the heart of the city — one sip away from your next favorite coffee.</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <iframe
            title="Coffee Haven Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.848650184391!2d121.01370607485326!3d14.706882575564245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7c5274a5f0f%3A0xd1f58c713cb567c2!2sManila!5e0!3m2!1sen!2sph!4v1697364235123!5m2!1sen!2sph"
            width="80%"
            height="350"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Contact Form */}
      <section
        style={{
          backgroundColor: "#fdfaf6",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2>Send Us a Message</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            margin: "30px auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #e2d9cf",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #e2d9cf",
            }}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject (optional)"
            value={formData.subject}
            onChange={handleChange}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #e2d9cf",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #e2d9cf",
              resize: "none",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: "#d4b499",
              border: "none",
              color: "#fff",
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Send Message
          </button>

          {submitted && (
            <p style={{ color: "#3c2f2f", marginTop: "10px" }}>
              ✅ Thank you! We’ll get back to you soon.
            </p>
          )}
        </form>
      </section>

      {/* Social Media Section */}
      <section
        style={{
          textAlign: "center",
          padding: "40px 20px 80px",
        }}
      >
        <h2>Connect With Us</h2>
        <p>Follow us @coffeeclubph for our latest brews & behind-the-bar moments!</p>
        <div style={{ marginTop: "15px" }}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#3c2f2f", textDecoration: "none" }}
          >
            🌐 Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#3c2f2f", textDecoration: "none" }}
          >
            📸 Instagram
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#3c2f2f", textDecoration: "none" }}
          >
            🎵 TikTok
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
