import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Top navigation bar for the Love Theme site.  Uses React Router NavLink
 * components to provide active link styling based on the current URL.
 */
function NavBar() {
  // State to manage whether the mobile navigation menu is open
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu.  When a link is clicked the menu is also
  // closed to improve the UX on small screens.
  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container nav-container">
        <NavLink to="/" className="logo" onClick={handleLinkClick}>
          Love&nbsp;Theme
        </NavLink>
        {/* Navigation links: always rendered, but hidden on mobile until opened */}
        <nav className="nav">
          <ul className={isOpen ? 'nav-list open' : 'nav-list'}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                onClick={handleLinkClick}
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Hamburger button for mobile view placed after nav to ensure correct alignment */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default NavBar;