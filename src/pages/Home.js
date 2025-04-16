// File: pages/Home.jsx
import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header className="hero-section">
        <h1>Welcome to <span className="highlight">CodeVerse</span></h1>
        <p>Your one-stop destination to become a coding pro!</p>
        <Link to="/courses" className="cta-button">Explore Courses</Link>
      </header>

      <section className="features-section">
        <h2>🚀 Learn Faster with Powerful Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>👨‍💻 Interactive Courses</h3>
            <p>Hands-on lessons with real coding challenges to solidify your skills.</p>
          </div>
          <div className="feature-card">
            <h3>🧠 Practice Quizzes</h3>
            <p>Test your understanding with auto-graded quizzes at every step.</p>
          </div>
          <div className="feature-card">
            <h3>💬 Student Forum</h3>
            <p>Ask questions, share solutions, and grow with a supportive community.</p>
          </div>
          <div className="feature-card">
            <h3>🛒 Buy What You Need</h3>
            <p>Buy individual courses or add them to your cart for later – no pressure!</p>
          </div>
          <div className="feature-card">
            <h3>📈 Track Progress</h3>
            <p>See what you’ve completed, what’s next, and stay motivated.</p>
          </div>
          <div className="feature-card">
            <h3>🎓 Learn at Your Own Pace</h3>
            <p>All content is self-paced and accessible anytime, anywhere.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>🌟 What Learners Say</h2>
        <blockquote>
          “CodeVerse helped me go from zero to confident coder in just a few weeks!”
        </blockquote>
        <p>- A Happy Student</p>
      </section>

      <footer className="home-footer-promo">
        <h2>Ready to start your coding journey?</h2>
        <Link to="/courses" className="cta-button">Get Started Now</Link>
      </footer>
    </motion.div>
  );
}

export default Home;
