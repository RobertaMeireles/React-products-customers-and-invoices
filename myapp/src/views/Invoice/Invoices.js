import React, {useState, useEffect} from 'react'
import services from "../../services/user.service"
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const Invoices = () => {

    const [invoices, setInvoices] = useState([])

    const getInvoices = () => {
        services.getAll(`invoices`)
        .then(response => {
            setInvoices(response.data.invoices)
            console.log(response.data.invoices)
        })
        .catch(error => {
            console.error(error)
        })
    }

    useEffect (() =>{

        getInvoices()

    },[])

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
                                    <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {invoices.map((invoice) => (
                                    <tr key={invoice.id}>
                                        <td>{invoice.id}</td>
                                        <td>{invoice.cliente}</td>
                                        <td><a href={'/invoice/'+ invoice.id}>
                                            <i className="fas fa-info-circle"></i></a>
                                        </td>
                                    </tr>
                                ))}
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