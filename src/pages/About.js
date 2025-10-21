import React from "react";
import "../App.css";

const About = () => {
  return (
    <div className="content">
      {/* ❤️ Introduction / Story Summary */}
      <section className="about-intro">
        <h2>Our Story</h2>
        <p>
          At The Coffee Club, we believe every cup tells a story. What started as a
          small neighborhood café has grown into a cozy destination for coffee
          lovers, dreamers, and creatives alike. From the aroma of freshly ground
          beans to the sound of friendly chatter, every visit is meant to feel
          like home.
        </p>
      </section>

      {/* ☕ The Full Story / Our Journey */}
      <section className="about-journey">
        <h2>Our Journey</h2>
        <p>
          Founded in 2015, The Coffee Club began as a small café with a simple goal:
          to share our passion for great coffee and good company. Inspired by the
          warmth of community gatherings, our name reflects the welcoming space we
          wanted to create — a “club” where everyone belongs.
        </p>
        <p>
          Over the years, we’ve grown from a humble corner shop into a local favorite,
          known for our signature blends, comforting pastries, and friendly faces.
          From our first espresso machine to our newest cold brew line, our journey
          continues to be fueled by love, laughter, and the joy of sharing coffee.
        </p>

        <div className="journey-images">
          <img
            src="https://images.unsplash.com/photo-1553292218-4892c2e7e1ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwYmFyaXN0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
            alt="Old Coffee Shop"
          />
          <img
            src="https://images.unsplash.com/photo-1515860734122-e0d771b36d3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwYmFyaXN0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
            alt="Founders"
          />
          <img
            src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwc2hvcCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
            alt="Modern Interior"
          />
        </div>
      </section>

      {/* 👨‍🍳 Mission and Values */}
      <section className="about-mission">
        <h2>Our Mission & Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>☕ Quality</h3>
            <p>We only brew ethically sourced, high-quality beans — freshly roasted to perfection.</p>
          </div>
          <div className="value-card">
            <h3>🤝 Community</h3>
            <p>We aim to create a welcoming space where everyone can connect, unwind, and belong.</p>
          </div>
          <div className="value-card">
            <h3>🌍 Sustainability</h3>
            <p>We care for the planet through eco-friendly practices and partnerships with local farmers.</p>
          </div>
        </div>
      </section>

      {/* 🌱 Our Coffee / Roasting Philosophy */}
      <section className="about-coffee">
        <h2>Our Coffee Philosophy</h2>
        <p>
          Every bean we brew has a journey — from the hands of dedicated farmers to
          your favorite cup. We source our coffee from sustainable farms that share
          our values of quality and care.
        </p>
        <p>
          Our baristas are trained in precise brewing techniques, ensuring that every
          espresso shot, pour-over, and cold brew captures the essence of the bean.
          Whether you prefer bold, rich flavors or smooth, balanced notes, our blends
          are crafted to bring joy in every sip.
        </p>
        <img
          src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1000&q=80"
          alt="Coffee Beans"
          className="coffee-image"
        />
      </section>
    </div>
  );
};

export default About;
