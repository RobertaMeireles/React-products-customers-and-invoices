import React, {useState, useEffect} from 'react'
import axios from "axios"
import authHeader from "../../services/auth-header"
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const Cutomers = () => {

    const [customers, setCustomers] = useState([])

    const getCutomers = () => {
        axios.get('http://localhost:5000/api/customers', { headers: authHeader() })
        .then(response => {
            setCustomers(response.data.customers)
        })
        .catch(error => {
            console.error(error)
        })
    }

    useEffect (() =>{

        getCutomers()

    },[])

    return (
        <>
            <header>
                <Header></Header>
            </header>
            <div  className="card-flex">
                <div>
                    <SiderBar></SiderBar>
                </div>
                <div className = "card-div">
                    <Card>
                        <Card.Body>
                            <h1>Customers</h1>
                            <Button href="/customer/create" variant="primary">Create</Button>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Update / Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {customers.map((customer) => (
                                    <tr key={customer.id}>
                                        <td>{customer.id}</td>
                                        <td>{customer.nome}</td>
                                        <td><a href={'/customer/update/'+ customer.id}><i className="fas fa-edit update"></i></a><a href={'/customer/delete/'+ customer.id}><i className="fas fa-times-circle delete"></i></a></td>
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

export default Cutomers