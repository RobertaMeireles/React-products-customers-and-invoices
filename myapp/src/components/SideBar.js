import React from 'react'
import Nav from 'react-bootstrap/Nav'

const SideBar = () => {
    return (
        <div className="side" >
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link className="side-bar" href="/products">Products <i className="fas fa-shopping-cart"></i></Nav.Link>
                <Nav.Link className="side-bar" href="/customers">Customers <i className="fas fa-user"></i></Nav.Link>
                <Nav.Link className="side-bar" href="/invoices">Invoices <i className="fas fa-file-invoice-dollar"></i></Nav.Link>
                <Nav.Link className="side-bar" href="/">Logout <i className="fas fa-sign-out-alt"></i></Nav.Link>
            </Nav>
        </div>
    )
}


export default SideBar;