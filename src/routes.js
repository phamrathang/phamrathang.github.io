import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavMenu from '@/components/NavMenu'
import HomePage from '@/pages/home/HomePage'
import CategoryPage from '@/pages/category/CategoryPage'
import ArticlePage from '@/pages/article/ArticlePage'

const Routes = () => (
  <Router>
    <NavMenu />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:categorySlug" component={CategoryPage} />
      <Route exact path="/:categorySlug/:articleSlug" component={ArticlePage} />
    </Switch>
  </Router>
)

export default Routes
