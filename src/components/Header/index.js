import React, { useState, useContext } from "react"
import { Link } from "gatsby"

import { useSiteConfigQuery } from "hooks/useSiteConfigQuery"
import { HeaderWrapper, Logo } from "./Header.styles"
import Menu from "../Menu"
import Hamburger from "../Hamburger"
import MobileMenu from "../MobileMenu"
import { ModeContext } from "context/ModeProvider"
import ModeButton from "../ModeButton"

const Header = ({ siteTitle = '' }) => {
  const siteConfig = useSiteConfigQuery();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useContext(ModeContext)

  return (
    <HeaderWrapper>

      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} items={siteConfig.menu}/>
      <Menu items={siteConfig.menu} />

      <Link to={"/"}>
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle}/>
      </Link>

      <ModeButton lightMode={lightMode} setLightMode={setLightMode} />

    </HeaderWrapper>
  )
}

export default Header
