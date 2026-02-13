import React from 'react'
import { Link } from 'react-router-dom'
import articles from '@/data/articles.json'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-scroll-container">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/${article.category}/${article.slug}`}
            className="home-thumbnail-item"
          >
            <img
              src={article.thumbnail}
              alt={article.caption}
              className="home-thumbnail-img"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage
