import React from 'react';
import { Container, Nav, Navbar, Spinner, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';
import logo from '../../../images/logo.png'
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <Spinner animation="border" />
                </div>
            </div>
        );
        
    }
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                        {user ?
                            <>
                                <h6 className='text-light text-capitalize mx-2 mt-2'>{user?.displayName}</h6>
                                <button
                                    onClick={() => signOut(auth)}
                                    style={{ backgroundColor: '#fdee18', color: '#222f3e' }}
                                    className='border-0 fs-5 rounded-1'> logout</button>
                            </>
                            :
                            <>
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
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;