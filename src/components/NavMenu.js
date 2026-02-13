import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import categories from '@/data/categories.json'
import './NavMenu.scss'

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const history = useHistory()
  const location = useLocation()

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (menuOpen) {
      // Second click → go home & close menu
      setMenuOpen(false)
      history.push('/')
    } else {
      // First click → open menu
      setMenuOpen(true)
    }
  }

  const handleCategoryClick = (slug) => {
    setMenuOpen(false)
    history.push(`/${slug}`)
  }

  const handleOverlayClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <div className="nav-logo" onClick={handleLogoClick}>
        r a
      </div>

      <div
        className={`nav-overlay ${menuOpen ? 'nav-overlay--open' : ''}`}
        onClick={handleOverlayClick}
      >
        <nav className="nav-menu" onClick={(e) => e.stopPropagation()}>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              className={`nav-menu-item ${
                location.pathname.startsWith(`/${cat.slug}`)
                  ? 'nav-menu-item--active'
                  : ''
              }`}
              onClick={() => handleCategoryClick(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}

export default NavMenu
