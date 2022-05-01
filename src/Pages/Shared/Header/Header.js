import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Rentiger</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#inventory">Inventory</Nav.Link>
                            <Nav.Link href="home#sale">Sale</Nav.Link>
                            <Nav.Link href="home#collection">Collection</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Link to='/manageinventory'>
                                        <button className='btn btn-link text-decoration-none'>Manage Items</button>
                                    </Link>
                                    :
                                    ''}
                            {
                                user ?
                                    <Link to='/additem'>
                                        <button className='btn btn-link text-decoration-none'>Add Item</button>
                                    </Link>
                                    :
                                    ''}
                            {
                                user ?
                                    <Link to='/myitems'>
                                        <button className='btn btn-link text-decoration-none'>My items</button>
                                    </Link>
                                    :
                                    ''}
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-decoration-none' onClick={handleLogOut}>Log Out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;