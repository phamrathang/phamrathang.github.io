import React from "react"
import { HashRouter, Route, Routes, Navigate } from "react-router-dom"

import NavMenu from "@dick/components/NavMenu"
import HomePage from "@dick/pages/home/HomePage"
import CategoryPage from "@dick/pages/category/CategoryPage"
import ArticlePage from "@dick/pages/article/ArticlePage"

const Router = () => (
  <HashRouter>
    <NavMenu />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/:categorySlug" element={<CategoryPage />} />
      <Route
        exact
        path="/:categorySlug/:articleSlug"
        element={<ArticlePage />}
      />
      {/* Not Found */}
      <Route element={() => <Navigate to="/" />} />
    </Routes>
  </HashRouter>
)

export default Router
