import React from 'react'
import "../styles.scss"
import logoLemoncode from "../assets/logo.png"

export const Logo = () => {
  return (
    <section>
      <img src={logoLemoncode} alt="Lemoncode's Logo" className="container__logo" />
    </section>
  )
}


