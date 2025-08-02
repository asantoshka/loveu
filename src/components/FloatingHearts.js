import React, { useEffect, useState } from 'react';

/**
 * Floating hearts animation component.  When mounted, it generates a fixed
 * number of heart elements with random positions, sizes, colours and
 * animation durations.  The CSS defined in index.css handles the
 * floating animation.  The component uses pointer-events: none to
 * ensure underlying interactions are not blocked.
 */
function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate hearts once on mount
    const numHearts = 18;
    const colours = ['#ff9aa2', '#ffb3c1', '#ffccd5', '#ffc5e1'];
    const generated = [];
    for (let i = 0; i < numHearts; i++) {
      generated.push({
        id: i,
        left: Math.random() * 100, // percentage
        size: Math.floor(Math.random() * 20) + 20, // 20–40px
        duration: Math.random() * 8 + 12, // 12–20s
        delay: Math.random() * -20, // negative delay spreads the start times
        colour: colours[Math.floor(Math.random() * colours.length)],
      });
    }
    setHearts(generated);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            color: h.colour,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;