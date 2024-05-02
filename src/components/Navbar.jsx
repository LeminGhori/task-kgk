import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/images/header_logo.png';
import "./index.scss"
import { NavLink } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import CartPopup from './CartPopup'; // Import your CartPopup component

function NavbarComponent() {
    const [showCartPopup, setShowCartPopup] = useState(false);

    const toggleCartPopup = () => {
        setShowCartPopup(!showCartPopup);
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary nav-box-contenar sticky-top">
                <Container className='d-flex justify-content-between'>
                    <NavLink to="/">
                        <img src={Logo} className='logo-img' alt="Logo" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='media-flex-center'>
                        <Nav className="me-auto align-items-center">
                            <NavLink href="/" className='color-blue d-flex '><div className='d-flex mb-2 mr-2'>
                                Surat Gujarat
                            </div><LocationOnIcon /></NavLink>
                            <NavLink href="/" className='color-blue'><SearchIcon /></NavLink>
                            <NavLink href="/" className='color-blue' onClick={toggleCartPopup}><ShoppingCartIcon /></NavLink>
                            <NavLink href="/" className='color-blue'><FavoriteBorderIcon /></NavLink>
                            <NavLink href="/" className='color-blue'><LogoutIcon /></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showCartPopup && <CartPopup toggleCartPopup={toggleCartPopup} />}
        </>
    )
}

export default NavbarComponent;
