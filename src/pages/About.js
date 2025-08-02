import React, { useEffect } from 'react';
import { initReveals } from '../utils/reveal';
import timeline from '../data/timeline';

/**
 * About page displaying the couple's story using a timeline.  A secondary
 * hero banner introduces the section.  Reveals are initialised on mount
 * to animate the section title and timeline items.
 */
function About() {
  useEffect(() => {
    initReveals();
  }, []);

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 className="page-title">Our&nbsp;Story</h1>
          <p className="page-subtitle">
            Every great love has an even greater story. Here is ours.
          </p>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title reveal">Journey of&nbsp;Love</h2>
          <div className="timeline">
            {timeline.map((event) => (
              <div key={event.id} className="timeline-item reveal">
                <div className="timeline-icon">{event.icon}</div>
                <div className="timeline-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  {/* Optionally display the date */}
                  {event.date && (
                    <small style={{ color: 'var(--secondary)', fontStyle: 'italic' }}>
                      {new Date(event.date).toLocaleDateString()}
                    </small>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;