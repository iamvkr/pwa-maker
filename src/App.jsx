import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormView from './components/FormView'
import Navbar from './components/Navbar'
import CanvasView from './components/CanvasView'
import Details from './components/Details'

function App() {
  return(
    <>
    <Navbar/>
    <FormView/>
    <CanvasView/>
    <Details/>
    </>
  )
}

export default App
