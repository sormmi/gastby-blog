import React from "react"
import ModeProvider from "context/ModeProvider"

export const wrapRootElement = ({ element }) => {
  return (
    <ModeProvider>
      { element }
    </ModeProvider>
  )
}
