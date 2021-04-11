import React from "react";
import { NavLink } from "react-router-dom"

import '../styles/components/header.scss'

export const CatHeader = function CatHeader() {
  return (
    <nav>
      <div className="link__box">
        <NavLink
          to="/"
          className="link__item"
          activeClassName="link__selected"
          exact
        >  Все котики </NavLink>
        <NavLink
          to="/favorites"
          className="link__item"
          activeClassName="link__selected"
          exact
        >  Любимые котики </NavLink>
      </div>
    </nav>
  )
}
