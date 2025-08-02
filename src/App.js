import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import global styles.  The CSS defines the colour palette, layouts,
// animations and responsive rules for the entire site.  It is loaded here
// once and applies to all pages.
import './index.css';

// Shared components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FloatingHearts from './components/FloatingHearts';

// Page components
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';

/**
 * The root component for the React version of the Love Theme site.
 *
 * It renders a persistent navigation bar, floating hearts animation and
 * footer around the different pages using React Router.  Each page
 * encapsulates its own content and logic.  Global styling is applied via
 * index.css which defines variables, resets and section layouts.
 */
function App() {
  return (
    <>
      {/* Floating hearts appear on every page */}
      <FloatingHearts />
      {/* Navigation bar */}
      <NavBar />
      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* Contact page has been removed */}
      </Routes>
      {/* Site footer */}
      <Footer />
    </>
  );
}

export default App;