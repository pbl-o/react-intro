
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'

// Botones usan props, cards usa props via destructuring

function App() {


  return (
    <>
      <MyNavbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
