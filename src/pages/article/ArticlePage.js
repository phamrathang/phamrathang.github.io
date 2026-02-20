import React, { useState } from "react"
import { useParams } from "react-router-dom"
import articles from "@/data/articles.json"
import Lightbox from "@/components/Lightbox"
import "./ArticlePage.scss"

const ArticlePage = () => {
  const { categorySlug, articleSlug } = useParams()
  const [leftIndex, setLeftIndex] = useState(0)
  const [rightIndex, setRightIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [lightboxSet, setLightboxSet] = useState(null) // 'left' or 'right'

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

  const leftImages = article.images?.topLeft || []
  const rightImages = article.images?.bottomRight || []

  const handleImageClick = (e, set) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const isLeftSide = clickX < rect.width / 2

    if (set === "left") {
      if (isLeftSide) {
        setLeftIndex((prev) => (prev <= 0 ? leftImages.length - 1 : prev - 1))
      } else {
        setLeftIndex((prev) => (prev >= leftImages.length - 1 ? 0 : prev + 1))
      }
    } else {
      if (isLeftSide) {
        setRightIndex((prev) => (prev <= 0 ? rightImages.length - 1 : prev - 1))
      } else {
        setRightIndex((prev) => (prev >= rightImages.length - 1 ? 0 : prev + 1))
      }
    }
  }

  const openLightbox = (set, index) => {
    setLightboxSet(set)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    setLightboxSet(null)
  }

  const goPrev = () =>
    setLightboxIndex((prev) => (prev <= 0 ? lightboxSet.length - 1 : prev - 1))
  const goNext = () =>
    setLightboxIndex((prev) => (prev >= lightboxSet.length - 1 ? 0 : prev + 1))

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
        {article.completedAt && (
          <p>
            <b>Completed:</b> {article.completedAt}
          </p>
        )}
        {article.location && (
          <p>
            <b>Location:</b> {article.location}
          </p>
        )}
        <p>{article.content}</p>
      </section>

      {/* ── Bottom: Two Image Sets ── */}
      <section className="article-images">
        {/* Left / Top set */}
        {leftImages.length > 0 && (
          <div className="article-image-set article-image-left-set">
            <div
              className="article-image-wrapper"
              onClick={(e) => handleImageClick(e, "left")}
            >
              <img
                src={leftImages[leftIndex]}
                alt={`${article.title} — ${leftIndex + 1}`}
                className="article-image-item"
              />
              <button
                className="article-zoom-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  openLightbox(leftImages, leftIndex)
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </button>
              <div className="article-image-counter">
                {leftIndex + 1} / {leftImages.length}
              </div>
            </div>
          </div>
        )}

        {/* Right / Bottom set */}
        {rightImages.length > 0 && (
          <div className="article-image-set article-image-right-set">
            <div
              className="article-image-wrapper"
              onClick={(e) => handleImageClick(e, "right")}
            >
              <img
                src={rightImages[rightIndex]}
                alt={`${article.title} — ${rightIndex + 1}`}
                className="article-image-item"
              />
              <button
                className="article-zoom-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  openLightbox(rightImages, rightIndex)
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </button>
              <div className="article-image-counter">
                {rightIndex + 1} / {rightImages.length}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxSet}
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
