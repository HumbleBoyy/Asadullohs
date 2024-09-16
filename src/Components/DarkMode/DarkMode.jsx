import { useEffect } from "react"
import { useState } from "react"
import { MdSunny } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
const DarkMode = () => {
    const [theme, setTheme] = useState('light')

    useEffect(()=> {
        document.documentElement.setAttribute('data-theme', theme)
    },[theme])

    const toggleTheme = () => {
         setTheme(theme === 'light' ? 'dark' : 'light');
    }
  return (
    <>
      <button onClick={toggleTheme}>
         {theme === 'light' ? <MdNightlight /> : <MdSunny />}
      </button>
    </>
  )
}

export default DarkMode
