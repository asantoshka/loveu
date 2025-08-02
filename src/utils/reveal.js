/**
 * Adds scroll reveal animations to elements with the class 'reveal'.
 * Elements will fade and slide into view as they enter the viewport.
 *
 * This function mirrors the behaviour of the vanilla JavaScript
 * implementation in the original site.  It is exported as a utility
 * so pages can invoke it on mount.
 */
export function initReveals() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || revealEls.length === 0) {
    // Fallback: show all elements immediately on older browsers
    revealEls.forEach((el) => el.classList.add('reveal-show'));
    return;
  }
  revealEls.forEach((el) => el.classList.add('hidden'));
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden');
          entry.target.classList.add('reveal-show');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  revealEls.forEach((el) => observer.observe(el));
}