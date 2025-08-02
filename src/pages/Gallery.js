import React, { useEffect, useState } from 'react';
import { initReveals } from '../utils/reveal';

// Default images defined locally.  These are used as a fallback when
// no external data is loaded.  The array can be replaced at runtime
// by images fetched from Google Drive.
import galleryImages from '../data/gallery';

/**
 * Gallery page that showcases three pictures with a lightbox view.  When
 * clicked, a full‑size version of the image appears in an overlay.
 */
function Gallery() {
  // Track whether the lightbox is open and which image is displayed
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  // State containing the list of images to display.  Defaults to the
  // statically imported images but may be replaced with data fetched
  // from Google Drive via environment variables.
  const [images, setImages] = useState(galleryImages);

  useEffect(() => {
    async function fetchDriveImages() {
      const apiKey = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;
      const folderId = process.env.REACT_APP_DRIVE_FOLDER_ID;
      if (apiKey && folderId) {
        try {
          const query = encodeURIComponent(`'${folderId}' in parents and mimeType contains 'image/'`);
          // Request additional fields: thumbnailLink and webContentLink may
          // provide direct access to image content.
          const fields = encodeURIComponent('files(id,name,thumbnailLink,webContentLink)');
          const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=${fields}&key=${apiKey}`;
          const res = await fetch(url);
          if (!res.ok) throw new Error('Failed to fetch drive images');
          const data = await res.json();
          const driveImgs = data.files.map((file, idx) => {
            // Prefer the webContentLink if present (it points directly to the file),
            // otherwise fall back to the thumbnailLink or the uc link.
            let src;
            if (file.webContentLink) {
              // Remove export param if present for embedding
              src = file.webContentLink.replace(/&export=download/, '');
            } else if (file.thumbnailLink) {
              // Remove size modifiers to get the full image
              src = file.thumbnailLink.replace(/=s\d+/, '=s0');
            } else {
              src = `https://drive.google.com/uc?export=view&id=${file.id}`;
            }
            return {
              id: idx + 1,
              src,
              alt: file.name,
            };
          });
          if (driveImgs.length > 0) setImages(driveImgs);
        } catch (err) {
          console.error('Error fetching images from Drive:', err);
          // Keep static images on error
        }
      }
      // Initialise scroll reveal after images have been set
      initReveals();
    }
    fetchDriveImages();
  }, []);

  const openLightbox = (img) => {
    setCurrentImg(img);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg(null);
    document.body.style.overflow = '';
  };

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero gallery-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 className="page-title">Our&nbsp;Gallery</h1>
          <p className="page-subtitle">
            A glimpse into our world of love and beauty.
          </p>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title reveal">Memories&nbsp;Captured</h2>
          <div className="gallery-grid">
            {images.map((img) => (
              <div key={img.id} className="gallery-item reveal">
                <img
                  src={img.src}
                  alt={img.alt}
                  onClick={() => openLightbox(img.src)}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="lightbox-overlay open" onClick={(e) => {
          // Only close when clicking the overlay, not the image
          if (e.target === e.currentTarget) closeLightbox();
        }}>
          <span className="lightbox-close" onClick={closeLightbox}>
            &times;
          </span>
          <img
            src={currentImg}
            alt="Full size"
            style={{ maxHeight: '80%', maxWidth: '90%' }}
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
          />
        </div>
      )}
    </main>
  );
}

export default Gallery;