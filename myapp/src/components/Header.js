import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Header () {
    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <Navbar.Brand href="/">Project Products</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className="nav-bar" href="/products">Products</Nav.Link>
                <Nav.Link className="nav-bar" href="/customers">Customers</Nav.Link>
                <Nav.Link className="nav-bar" href="/invoices">Invoice</Nav.Link>
                <Nav.Link className="nav-bar" href="/">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Header
