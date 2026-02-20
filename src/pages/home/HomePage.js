import React, { useState, useEffect, useRef, useCallback } from "react"
import { Link } from "react-router-dom"
import articles from "@dick/data/articles.json"
import "./HomePage.scss"

const ITEMS_PER_LOAD = 10

const HomePage = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD)
  const sentinelRef = useRef(null)

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_LOAD, articles.length))
  }, [])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      },
      { rootMargin: "200px" }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [loadMore])

  const visibleArticles = articles.slice(0, visibleCount)

  return (
    <div className="home-page">
      <div className="home-scroll-container">
        {visibleArticles.map((article) => (
          <Link
            key={article.slug}
            to={`/${article.category}/${article.slug}`}
            className="home-thumbnail-item"
          >
            <img
              src={article.thumbnail}
              alt={article.caption}
              className="home-thumbnail-img"
              loading="lazy"
            />
          </Link>
        ))}
        {visibleCount < articles.length && (
          <div ref={sentinelRef} className="home-load-sentinel" />
        )}
      </div>
    </div>
  )
}

export default HomePage
