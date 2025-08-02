/*
 * Data module exporting an array of timeline events for the journey
 * section.  Each object in the array represents a milestone in the
 * couple's story.  New events can be added here or loaded from a
 * third‑party API to extend the timeline without modifying the
 * presentation layer.
 */

const timeline = [
  {
    id: 1,
    icon: '🤝',
    title: 'When We Met',
    description:
      'A chance encounter blossomed into a friendship that paved the way for something extraordinary. Our story began on an ordinary day that turned into a life-changing moment.',
    date: '2021-02-14',
  },
  {
    id: 2,
    icon: '💞',
    title: 'Falling in Love',
    description:
      'Through shared dreams, laughter and tears, our bond grew stronger. What started as friendship became a deep affection that neither of us could ignore.',
    date: '2021-08-01',
  },
  {
    id: 3,
    icon: '💍',
    title: 'Together Forever',
    description:
      'We promised to nurture our love and stand by each other through every season. Our hearts beat as one, facing the future hand in hand.',
    date: '2022-05-20',
  },
];

export default timeline;