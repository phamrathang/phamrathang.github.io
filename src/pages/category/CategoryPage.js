import React from 'react'
import { Link, useParams } from 'react-router-dom'
import articles from '@/data/articles.json'
import categories from '@/data/categories.json'
import './CategoryPage.scss'

const CategoryPage = () => {
  const { categorySlug } = useParams()

  const category = categories.find((c) => c.slug === categorySlug)
  const filtered = articles.filter((a) => a.category === categorySlug)

  if (!category) {
    return (
      <div className="category-page category-not-found">
        <p>Category not found.</p>
      </div>
    )
  }

  return (
    <div className="category-page">
      <header className="category-header">
        <div className="category-header-spacer" />
        <h1 className="category-title">{category.name}</h1>
      </header>

      <div className="category-scroll-container">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            to={`/${categorySlug}/${article.slug}`}
            className="category-card"
          >
            <div className="category-card-image-wrap">
              <img
                src={article.thumbnail}
                alt={article.caption}
                className="category-card-img"
              />
            </div>
            <span className="category-card-caption">{article.caption}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
