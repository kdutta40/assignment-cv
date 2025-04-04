import React from 'react'
import styles from './Nav.module.css'
import whiteIcon from "../../assets/white_icon.png"
import blackIcon from "../../assets/black_icon.svg"
import sunIcon from "../../assets/sun.png"; 
import moonIcon from "../../assets/moon.png";
const Nav = ({toggleTheme ,changeToHomePage , changeToAboutPage, mode}) => {
  return (
    <div className={styles.container}>
        <div className={styles.name}>
            <img src={mode ?whiteIcon :blackIcon} alt="" />
            <h1>
                <b>ANISH KUMAR SINHA</b>
            </h1>
        </div>
        <div className={styles.list}>
            <ul>
                <li onClick={changeToHomePage}><b>Home</b></li>
                <li onClick={changeToAboutPage}><b>About</b></li>
                <li><b>Resume</b></li>
                <li><b>Skills</b></li>
                <li><b>Projects</b></li>
                <li><b>Contact</b></li>
            </ul>
            <img src={mode ?sunIcon :moonIcon }  onClick={toggleTheme} alt="" />
        </div>
    </div>
  )
}

export default Nav