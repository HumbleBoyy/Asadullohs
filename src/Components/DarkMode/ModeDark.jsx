import { useEffect } from "react"
import { useState } from "react"
import { MdSunny } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
import './darkMode.css'
import { GiMoon } from "react-icons/gi";

const ModeDark = () => {
    
    const [theme, setTheme] = useState(localStorage.getItem('theme' || 'light'))

    useEffect(()=> {
        document.documentElement.setAttribute('data-theme', theme)


        localStorage.setItem('theme', theme)
    },[theme])

    const toggleTheme = () => {
         setTheme(theme === 'light' ? 'dark' : 'light');
    }
  return (
    <>
      <button onClick={toggleTheme} className="darkBtn">
         {theme === 'light' ? <GiMoon className="darkIcon"/> : <MdSunny className="lightIcon"/>}
      </button>
    </>
  )
}
export default ModeDark




