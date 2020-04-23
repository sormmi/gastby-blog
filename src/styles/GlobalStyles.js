import { createGlobalStyle } from "styled-components"
import MuliRegular from "fonts/Muli-Regular.woff"
import MuliBlack from "fonts/Muli-Black.woff"

export const colors = {
  white: "#fff",
  darkGray: "#1a1c20",
  deepDarkGray: "#404040",
  blueShade1: "#215973",
  blueShade2: "#6fadc6",
  blueShade3: "#d1e1e9"
}

export const lightTheme = {
  colors: {
    background: colors.white,
    menuBackground: colors.blueShade3,
    textDark: colors.blueShade1,
    textMain: colors.blueShade2,
    textSecondary: colors.deepDarkGray
  }
}

export const darkTheme = {
  colors: {
    background: colors.darkGray,
    menuBackground: colors.blueShade1,
    textDark: colors.blueShade3,
    textMain: colors.blueShade2,
    textSecondary: colors.blueShade3
  }
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }
  
  @font-face {
    font-family: "Muli Regular";
    src: local("Muli Reqular"), local("MuliRegular"), url(${MuliRegular}) format("woff");
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Muli Black";
    src: local("Muli Black"), local("MuliBlack"), url(${MuliBlack}) format("woff");
    font-weight: 300;
    font-style: normal;
  }
  
  body {
    background: ${ props => props.theme.colors.background };
    color: ${ props => props.theme.colors.textSecondary };
    font-family: "Muli Reqular", Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0 20px 80px 20px;
    transition: all 0.5s ease;
  }
  
  main {
    max-width: 960px;
    margin: 40px auto;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${ props => props.theme.colors.textMain };
    font-family: "Muli Black", Arial, Helvetica, sans-serif;
    transition: all 0.5s ease;
    letter-spacing: 1px;
  }
  
  h2 {
    font-size: 1rem;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  h3 {
    font-size: 1.8rem;
    letter-spacing: 1.5px;
    margin: 30px 0 -15px 0;
    
    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.2;
    
    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
`

