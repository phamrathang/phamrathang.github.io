import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import articles from '@/data/articles.json'
import Lightbox from '@/components/Lightbox'
import './ArticlePage.scss'

const ArticlePage = () => {
  const { categorySlug, articleSlug } = useParams()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const article = articles.find(
    (a) => a.slug === articleSlug && a.category === categorySlug
  )

  if (!article) {
    return (
      <div className="article-page article-not-found">
        <p>Article not found.</p>
      </div>
    )
  }

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const goPrev = () =>
    setLightboxIndex((prev) =>
      prev <= 0 ? article.images.length - 1 : prev - 1
    )
  const goNext = () =>
    setLightboxIndex((prev) =>
      prev >= article.images.length - 1 ? 0 : prev + 1
    )

  return (
    <div className="article-page">
      {/* ── Top: Title ── */}
      <header className="article-header">
        <div className="article-header-spacer" />
        <h1 className="article-title">{article.title}</h1>
        <div className="article-header-spacer" />
      </header>

      {/* ── Middle: Content ── */}
      <section className="article-content">
        <p>{article.content}</p>
      </section>

      {/* ── Bottom: Images (vertical scroll, click to zoom) ── */}
      <section className="article-images">
        <div className="article-images-track">
          {article.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${article.title} — ${i + 1}`}
              className="article-image-item"
              onClick={() => openLightbox(i)}
            />
          ))}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={article.images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          title={article.title}
        />
      )}
    </div>
  )
}

export default ArticlePage
