import React from "react";
import logo from '../images/LogoJungle.png'
import '../style/header.css'

const Header = () => {
  return(
    <header>
      <img src={logo} alt="logo la maison jungle" className="lmjLogo" />
      <h1>La maison jungle</h1>
    </header>
  )
}

export default Header