import React from 'react'
import { NavLink } from 'react-router-dom'

// links
import links from '../utils/links'

const NavLinks = ({toggleSidebar}) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, text, path, icon } = link

        return (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            key={id}
            to={path}
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
