import React from "react"

import DayIcon from "images/daymode.svg"
import NightIcon from "images/nightmode.svg"
import { ImgButton } from "./ModeButton.styles"

const ModeButton = ({ lightMode, setLightMode }) => (
  <ImgButton
    src={lightMode ? DayIcon : NightIcon}
    alt="mode"
    onClick={() => setLightMode(prev => !prev)}
  />
)

export default ModeButton
