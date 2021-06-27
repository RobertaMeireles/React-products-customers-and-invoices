import React from 'react'
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const CreateCustomer = () => {
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
                            <Form className="form-itens">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Name" name="nome"/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="text" placeholder="Age" name="idade" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="text" placeholder="Adress" name="morada" />
                                </Form.Group>

                                <Form.Group name="id_cod_postal" controlId="exampleForm.ControlSelect1" >
                                    <Form.Control as="select">
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="" disabled selected>Zip Code</option>
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
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default CreateCustomer