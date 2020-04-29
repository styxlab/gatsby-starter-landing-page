import React from "react"

import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
//import "../styles/button.css"

const Button = ({ children }) => (
  <button
    style={{
      padding: ".5rem 2.5rem",
      color: COLORS.lightWhite,
      fontWeight: 700,
      background: GRADIENT,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
      boxShadow: "0px 5px 20px -2px rgba(121, 211, 255, 0.25)",
      transition: "all 0.5s ease-in-out",
      fontSize: "1.4rem",
    }}
  >
    {children}
  </button>
)

export default Button
