import React, { useState } from "react"
import services from "../../services/user.service"
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateCustomer = () => {

    const [submitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [adress, setAdress] = useState('')
    const [zipCode, setZipCode] = useState('')

    const checkFields = (e) => {
        e.preventDefault()
        if (name && age &&  adress && zipCode){
            createCustomer()
            setSubmitted(false)
        }else {
            setSubmitted(true)
        }
    }

    const createCustomer = () => {
        services.create('customers', 
            {
                nome: name,
                idade: age,
                morada: adress,
                cod_postal: zipCode
            })
        .then((res) => {
            if (res) {
                alert(`Customer registrated.`)
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
                            <h1>New Customer</h1>
                            <Form className="form-itens" onSubmit={checkFields}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Name" name="nome" onChange={(e) => setName(e.target.value)}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="number" placeholder="Age" name="idade" onChange={(e) => setAge(e.target.value)}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="text" placeholder="Adress" name="morada" onChange={(e) => setAdress(e.target.value)}/>
                                </Form.Group>

                                <Form.Group name="id_cod_postal" controlId="exampleForm.ControlSelect1" >
                                    <Form.Control as="select" name="cod_postal" onChange={(e) => setZipCode(e.target.value)}>
                                        <option value="" disabled selected>City</option>
                                        <option value="1500">Lisboa</option>
                                        <option value="2350">Torres Novas</option>
                                        <option value="4000">Porto</option>
                                        <option value="8500">Portimão</option>
                                    </Form.Control>
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

export default CreateCustomer