import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navbar.css'
import { Link } from 'react-router-dom';

export default function NavbarTo(props) {
  console.log(props)
  return (
    <>

      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <div className="nav_img"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={Link}  to={props.home}>Home</Nav.Link>
            <Nav.Link as={Link} to={props.about}>About Us</Nav.Link>
            <Nav.Link as={Link} to={props.contact}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to={props.chat}>{props.chating}</Nav.Link>
            <Nav.Link as={Link} to={props.setting}>Setting</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
