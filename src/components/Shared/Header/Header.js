import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
const Header = () => {
    return (
        <Navbar sticky="top"  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container  >
                <Navbar.Brand as={Link} to="/">
                    <img style={{ width: '150px' }} 
                    src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/about">About me</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='fs-5 font-weight-bold'
                            as={Link} 
                            to='/login'>
                                <span style={{ color: '#ffffff' }}>Login</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/Signup'>
                            <span 
                            style={{ backgroundColor: '#f5f6fa', color: '#222f3e' }} 
                            className=' px-2 py-1  font-weight-bold fs-5 rounded-1'>Sign Up
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;