import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initReveals } from '../utils/reveal';

/**
 * Home page of the Love Theme site.  Contains the hero banner,
 * feature highlights and a list of romantic quotes.  On mount it
 * initialises reveal animations for elements with the class 'reveal'.
 */
function Home() {
  useEffect(() => {
    initReveals();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="hero-title">Celebrate&nbsp;Love</h1>
          <p className="hero-subtitle">
            A modern story of romance, passion and endless possibilities.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Our Story
            </Link>
            <Link to="/gallery" className="btn btn-secondary">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
          <div className="container">
            <h2 className="section-title reveal">Cherish Every Moment</h2>
            <p className="section-subtitle reveal">
              Discover what makes our love unique and timeless.
            </p>
            <div className="features-grid">
              <div className="feature-card reveal">
                <div className="feature-icon">❤️</div>
                <h3 className="feature-title">Pure Romance</h3>
                <p className="feature-text">
                  Experience the magic of genuine affection and heartfelt
                  connection.
                </p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">🎵</div>
                <h3 className="feature-title">Shared Moments</h3>
                <p className="feature-text">
                  Every memory is a melody – soft, sweet and unforgettable.
                </p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">💍</div>
                <h3 className="feature-title">Forever&nbsp;Commitment</h3>
                <p className="feature-text">
                  A promise to grow, learn and cherish each other everyday.
                </p>
              </div>
            </div>
          </div>
      </section>

      {/* Quotes Section */}
      <section className="quotes" id="quotes">
        <div className="container">
          <h2 className="section-title reveal">Words of&nbsp;Love</h2>
          <div className="quotes-list">
            <blockquote className="quote-item reveal">
              “Love doesn’t make the world go around. Love is what makes the
              ride worthwhile.”<span className="quote-author">
                {' '}— Franklin P. Jones
              </span>
            </blockquote>
            <blockquote className="quote-item reveal">
              “The best thing to hold onto in life is each other.”<span className="quote-author">
                {' '}— Audrey Hepburn
              </span>
            </blockquote>
            <blockquote className="quote-item reveal">
              “We loved with a love that was more than love.”<span className="quote-author">
                {' '}— Edgar Allan Poe
              </span>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;