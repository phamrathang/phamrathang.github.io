import React, { useEffect, useCallback } from 'react'
import './Lightbox.scss'

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext, title }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          ×
        </button>

        <button className="lightbox-arrow lightbox-arrow--left" onClick={onPrev}>
          ‹
        </button>

        <div className="lightbox-image-wrap">
          <img
            src={images[currentIndex]}
            alt={`${title} — ${currentIndex + 1}`}
            className="lightbox-img"
          />
        </div>

        <button className="lightbox-arrow lightbox-arrow--right" onClick={onNext}>
          ›
        </button>

        <div className="lightbox-indicator">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

export default Lightbox
