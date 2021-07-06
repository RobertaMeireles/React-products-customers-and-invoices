import React, {useState, useEffect} from 'react'
import axios from "axios"
import authHeader from "../../services/auth-header"
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'


const Products = () => {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('http://localhost:5000/api/products', { headers: authHeader() })
        .then(response => {
            setProducts(response.data.products)
        })
        .catch(error => {
            console.error(error)
        })
    }

    useEffect (() =>{

        getProducts()

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
                        {/* <div>
                            <select >
                                <option value="0">Selecione uma opção</option>
                                {products.map(product => (<option key={product.id} value={product.id}>{product.designacao}</option>))}
                            </select>
                        </div> */}

                            <h1>Products</h1>
                            <Button href="/product/create" variant="primary">Create</Button>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Update / Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.designacao}</td>
                                        <td><a href={'/api/products/update/'+ product.id}><i className="fas fa-edit update"></i></a><a href={'/product/delete/'+ product.id}><i className="fas fa-times-circle delete"></i></a></td>
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

export default Products



