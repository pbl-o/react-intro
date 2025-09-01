import  Container  from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import conversor from '../utils/conversor.js'


 const MyNavbar = () => {

  const total = 55000
  const token = false
  return (
       <Navbar expand="lg" className="bg-dark w-100 d-flex justify-content-between px-4 " variant='dark' >
        <Container fluid> 
        <Navbar.Brand href="#home">Pizzería Ticcino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='w-100'>
            <div className='d-flex flex-column flex-lg-row'>
            <Nav.Link href="#home">🍕Home</Nav.Link>
            <Nav.Link  href="#link">{token ? '🔐Logout' : '🔐Login' }</Nav.Link>
            <Nav.Link href="#link">{token ? '🔐Profile' : '🔐Register' }</Nav.Link>
            </div>

            <div className='ms-auto'>
            <Nav.Link > 🛒 Total:  {conversor(total)}</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        </Container> 
    </Navbar>
  )
}


export default MyNavbar