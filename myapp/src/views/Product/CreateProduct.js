import React, { useState } from "react"
import services from "../../services/user.service"
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateProduct = () => {

    const [submitted, setSubmitted] = useState(false)
    const [designation, setDesignation] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')

    const checkFields = (e) => {
        e.preventDefault()
        if (designation && description &&  category && price){
            createProduct()
            setSubmitted(false)
        }else {
            setSubmitted(true)
        }
    }

    const createProduct = () => {
        services.create('products', 
            {
                designacao: designation,
                descricao: description,
                preco: price,
                id_categoria: category
            })
        .then((res) => {
            if (res) {
                alert(`Product registrated.`)
                window.location.href = "/home"
            }
            }).catch((error) => {
            console.error(error)
            alert(`A problem occurred in the registration, try again later.`)
            window.location.href = "/home"
        })
    }

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
                            <h1>New Product</h1>
                            <Form className="form-itens" onSubmit={checkFields}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Name" name="designacao" onChange={(e) => setDesignation(e.target.value)} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="text" placeholder="Description" name="descricao" onChange={(e) => setDescription(e.target.value)}/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select" name="id_categoria" onChange={(e) => setCategory(e.target.value)}>
                                    <option value="" name={category} disabled selected>Choose your option</option>
                                    <option value="1">Processors</option>
                                    <option value="2">Memories</option>
                                    <option value="3">Hard Drives</option>
                                    <option value="4">Boxes</option>
                                    <option value="5">Motherboards</option>   
                                    <option value="6">Monitor</option>
                                    <option value="7">Peripherals</option>
                                    <option value="8">Power Supplies</option>
                                    <option value="9">Drives</option>
                                    <option value="10">Graphics Cards</option>
                                    <option value="11">Sound Cards</option>
                                    <option value="12">NetWork</option>
                                    <option value="13">Notebook</option>
                                    <option value="14">Tablets</option>
                                    <option value="15">Smartphones</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="number" placeholder="Price (€)" name="preco" onChange={(e) => setPrice(e.target.value)}/>
                                </Form.Group>
        
                                <Button className="form-submit" variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Button variant="danger" type="submit">
                                    Cancel
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

export default CreateProduct
