import "./App.css"
import { Route , Routes  } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"

import ScrollToTop from "./components/ScrollToTop"
import PremiumContact from "./pages/premiumContact"



 
function App() {
  return (
    <div className="flex min-h-screen flex-col items-center  bg-black w-full">
      <NavBar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={< PremiumContact/>}/>
        <Route path="*" element={<HomePage/>}/>
     </Routes>
      <Footer/>
 
    </div>
  )
}
 
export default App