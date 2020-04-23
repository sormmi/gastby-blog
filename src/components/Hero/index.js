import React from "react"
import { Link } from "gatsby"
import { useHeroQuery } from "hooks/useHeroQuery"
import BGImage from "components/BGImage"
import { HeroWrapper, TextWrapper } from "./Hero.styles"

const Hero = () => {
  const { heroImage, heroImageText, heroImageBtnText, heroImageBtnLink } = useHeroQuery()

  return (
    <HeroWrapper>
      <BGImage fluid={heroImage.childImageSharp.fluid} title={heroImageText} >
        <TextWrapper>
          <h2>{heroImageText}</h2>
          <Link to={heroImageBtnLink}>
            <button>{heroImageBtnText}</button>
          </Link>
        </TextWrapper>
      </BGImage>
    </HeroWrapper>
  )
}

export default Hero
