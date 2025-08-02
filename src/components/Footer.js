import React from 'react';

/**
 * Site footer shown at the bottom of every page.  Displays the current
 * year dynamically so it remains up-to-date.
 */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; <span>{year}</span> Love Theme. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;