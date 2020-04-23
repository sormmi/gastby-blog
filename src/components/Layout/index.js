import React, {useContext} from "react"
import { ThemeProvider} from "styled-components"

import { useMetadataQuery } from "hooks/useMetadataQuery"

import { GlobalStyles, lightTheme, darkTheme} from "styles/GlobalStyles"
import Header from "components/Header"
import { ModeContext } from "context/ModeProvider"

const Layout = ({ children }) => {

  const data = useMetadataQuery();
  const [lightMode] = useContext(ModeContext);

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
