import React, {useState, useEffect} from 'react'
import axios from "axios"
import authHeader from "../../services/auth-header"
import services from "../../services/user.service"
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const CreateInvoice = () => {

    const [submitted, setSubmitted] = useState(false)

    const [products, setProducts] = useState([])
    const [customers, setCustomers] = useState([])

    const [customer, setCustomer] = useState('')
    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState('')

    const getCutomers = () => {
        services.getAll('customers')
        .then(response => {
            setCustomers(response.data.customers)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const getProducts = () => {
        services.getAll('products')
        .then(response => {
            setProducts(response.data.products)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const checkFields = (e) => {
        e.preventDefault()
        if (customer && product &&  quantity){
            createInvoice()
            setSubmitted(false)
        }else {
            setSubmitted(true)
        }
    }

    const createInvoice = () => {
        services.create('Invoice','invoices', 
        {
            id_cliente: customer,
            invoiceLines: [
                {
                    id_produto: product,
                    quantidade: quantity,
                }
            ]
        })
    }
        
    useEffect (() =>{

        getProducts()
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
                            <h1>New Invoice</h1>
                            <Form className="form-itens" onSubmit={checkFields} >

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" onChange={(e) => setCustomer(e.target.value)}>
                                <option value="" disabled selected >Customer</option>
                                {customers.map(customer => (<option key={customer.id} value={customer.id}>{customer.nome}</option>))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" onChange={(e) => setProduct(e.target.value)}>
                                <option value="" disabled selected >Product</option>
                                {products.map(product => (<option key={product.id} value={product.id}>{product.designacao}</option>))}
                                </Form.Control>
                            </Form.Group>

                                <Form.Group>
                                    <Form.Control type="number" placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)}/>
                                </Form.Group>

                                <Button className="form-submit" variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Button variant="danger" type="button">
                                    <a  className="link-form" href="/home">Cancel</a>
                                </Button>
                            </Form>
                            { submitted && <span className='erro-contact'>All fields are required.</span>} 
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default CreateInvoice