/*
 * Data module exporting an array of gallery images.  Each object
 * contains the imported source and alt text for an image.  To add new
 * photos, import the file at the top of this module and push a new
 * entry into the array.  Alternatively, replace the static imports
 * with URLs fetched from a third‑party API.
 */

import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    alt: 'Dreamy hearts',
  },
  {
    id: 2,
    src: gallery2,
    alt: 'Cosmic hearts',
  },
  {
    id: 3,
    src: gallery3,
    alt: 'Sparkling heart',
  },
];

export default galleryImages;