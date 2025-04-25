import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Proyects from "./components/Proyects"
import Technologies from "./components/Technologies"



function App() {

  return (
    <div className="bg-gray-900 text-white min-h-screen w-full overflow-x-hidden scroll-smooth bg-scroll">
      <div className="text-white min-h-screen mx-auto max-w-screen-xl scroll-smooth">
        <Header/>
        <Main/>
        <Technologies/>
        <Proyects/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
