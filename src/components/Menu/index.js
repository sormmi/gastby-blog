import React from "react"
import { Link } from "gatsby"
import { Nav } from "./Menu.styles"

const Menu = ({ items }) => (
    <Nav>
      {items.map(menu => (
        <li key={menu.id}>
          <Link to={menu.link} activeClassName="active">
            {menu.name}
          </Link>
        </li>
        )
      )}
    </Nav>
  )

export default Menu
