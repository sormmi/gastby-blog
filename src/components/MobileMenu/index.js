import React from "react"
import { Link } from "gatsby"
import { MenuWrapper, Nav, OverrideGlobalStyle } from "./MobileMenu.styles"

const MobileMenu = ({ menuOpen, items }) => (
  <>
    <OverrideGlobalStyle menuOpen={menuOpen} />
    <MenuWrapper menuOpen={menuOpen}>
      <Nav>
        {items.map(item => (
          <li key={item.id}>
            <Link to={item.link} activeClassName="active">
              {item.name}
            </Link>
          </li>
        ))
        }
      </Nav>
    </MenuWrapper>
  </>
)

export default MobileMenu
