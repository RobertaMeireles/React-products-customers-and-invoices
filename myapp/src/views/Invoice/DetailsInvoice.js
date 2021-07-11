import React, {useState, useEffect} from 'react'
import services from "../../services/user.service"
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

const DetailsInvoices = (props) => {

    const initialInvoice = { 
        id: null,
        cliente: "", 
        invoiceLines: [{
            designacao: "",
            quantidade: ""
            }
        ]
    }

    const [currentInvoice, setCurrentInvoice] = useState([initialInvoice])

    const getInvoices = (id) => {
        services.getId(`invoices/id/${id}`)
        .then(response => {
            setCurrentInvoice(response.data.invoice)
            console.log(response.data.invoice)
        })
        .catch(error => {
            console.error(error)
        })
    }

    useEffect (() =>{

        getInvoices(props.match.params.id)

    },[props.match.params.id])


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
                            
                            <h1>Invoice {currentInvoice.id}</h1>
                            {currentInvoice.invoiceLines ? (
                            <Form className="form-itens">
                                <Form.Group>
                                    <Form.Control type="text" name="cliente" disabled="disabled"
                                     defaultValue={currentInvoice.cliente}/>
                                </Form.Group>

                                {/* <Form.Group>
                                    <Form.Control type="text" name="designacao"
                                     defaultValue={currentInvoice.invoiceLines[0].designacao}/>
                                </Form.Group>  */}


                                <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Product</th>  
                                        <th>Quantity</th>  
                                    </tr>
                                </thead>
                                <tbody>
                                {currentInvoice.invoiceLines.map((element, index) => (
                                    <tr key={element.id}>
                                        <td>{element.designacao}</td>
                                        <td>{element.quantidade}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>

                                <Button variant="primary" type="button">
                                    <a  className="link-form" href="/home">Home</a>
                                </Button>
                            </Form>
                            ) : (
                                <div>
                                    <h1>Loading...</h1>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default DetailsInvoices