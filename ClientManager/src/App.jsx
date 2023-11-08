import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"
import { Clients } from "./pages/Clients/Clients"
import { Home } from "./pages/Home/Home"


function App() {

  return (
    <>
      <div className='text-neutral-500 h-full w-screen text-center font-semibold text-xl'>
        <Navbar/>

        <Home/>
        <Clients/>

        <Footer/>
      </div>

    </>
  )
}

export default App
