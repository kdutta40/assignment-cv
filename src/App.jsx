import './App.css'
import Nav from './Components/Nav/Nav'
import React, { useState, useEffect } from "react"; 
import Home from './Components/Home/Home'
import About from './Components/About/About';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isHomePage , setIsHomePage]=useState(true);
  const [isAboutPage, setIsAboutPage]=useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const changeToHomePage = () =>{
    setIsAboutPage(false);
    setIsHomePage(true);
  }
  const changeToAboutPage = () =>{
    setIsHomePage(false);
    setIsAboutPage(true);
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <nav>
        <Nav toggleTheme={toggleTheme} changeToHomePage={changeToHomePage} changeToAboutPage={changeToAboutPage} mode={darkMode} />
      </nav>
      {isHomePage ?<Home  mode= {darkMode}/> :<About mode={darkMode}/>}

    </div>
  )
}

export default App
