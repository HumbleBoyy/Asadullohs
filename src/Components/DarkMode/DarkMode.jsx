import { useEffect } from "react"
import { useState } from "react"
import { MdSunny } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
import './darkMode.css'
const DarkMode = () => {
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
         {theme === 'light' ? <MdNightlightRound className="darkIcon"/> : <MdSunny className="lightIcon"/>}
      </button>
    </>
  )
}

export default DarkMode
