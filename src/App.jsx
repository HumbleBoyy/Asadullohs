import { ToastContainer } from "react-toastify"
import ModeDark from "./Components/DarkMode/ModeDark"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import images from "./assets/images"
import Modales from "./Components/Modal/Modales"
import Footer from "./Components/Footer/Footer"




const App = () => {
  return (
    <>
      <Home/>
      <Modales/>
      <Footer/>
    </>
  )
}

export default App
