import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
// ***import for logo when added. add logo to styles in assets***
// *** add this above Co name in between the Navbar.Brand **<img src={logo} alt="Company Logo"/>**
// import logo from '../assets/styles/logo.jpg';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>
                {/* <img className='logo' src={logo} alt="MGV Rentals"/> */}
                Mgv Rentals
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to='/cart'>
                        <Nav.Link>
                            <FaShoppingCart/>Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                        <Nav.Link><FaUser/>Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header