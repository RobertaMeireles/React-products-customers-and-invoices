import React from 'react'
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const CreateInvoice = () => {
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
                            <Form className="form-itens">

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                    <option name="selectedUser"  value="" disabled selected>Customer </option>
                                    <option value="1">User 1</option>
                                    <option value="2">User 2</option>
                                    <option value="3">User 3</option>
                                    <option value="4">User 4</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                    <option name="selectedProduct" value="" disabled selected>Product </option>
                                    <option value="1">Prod 1</option>
                                    <option value="2">Prod 2</option>
                                    <option value="3">Prod 3</option>
                                    <option value="4">Prod 4</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="number" placeholder="Quantity" />
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

export default CreateInvoice