import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { LinkShortener } from "./pages/LinkShortener"
import { QRGenerator } from "./pages/QRGenerator"
import { Footer } from "./components/Footer"

function App() {
 

  return (
    <>
   <BrowserRouter >
    <div className=" min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path = "/" element = {<LinkShortener/>}></Route>
        <Route path = "/qr" element = {<QRGenerator/>}></Route>
      </Routes>
    </main>
    <Footer/>
    </div>
   </BrowserRouter>
    </>
  )
}

export default App
