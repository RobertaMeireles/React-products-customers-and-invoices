import React from 'react'
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const Invoices = () => {
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <div className="card-flex">
                <div>
                    <SiderBar></SiderBar>
                </div>
                <div className = "card-div">
                    <Card>
                        <Card.Body>
                            <h1>Invoices</h1>
                            <Button href="/invoice/create" variant="primary">Create</Button>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Update / Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td><i className="fas fa-times-circle delete"></i></td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td><i className="fas fa-times-circle delete"></i></td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td>Larry the Bird</td>
                                    <td><i className="fas fa-times-circle delete"></i></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Invoices