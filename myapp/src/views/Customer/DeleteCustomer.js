import React, {useState, useEffect} from 'react'
import services from "../../services/user.service"
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const DeleteCustomer = (props) => {

    const initialCustomer = { 
        id: null,
        nome: "", 
        idade: "", 
        morada: "", 
        id_cod_postal: ""
    }

    const [currentCustomer, setCurrentCustomer] = useState(initialCustomer)

    const getCustomer = (id) => {
        services.getId(`customers/id/${id}`)
        .then(response => {
            setCurrentCustomer(response.data.customer)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const deleteCustomer = () => {
        services.deleteId('Customer',`customers/delete/${currentCustomer.id}`, currentCustomer)
        props.history.push("/home")
    }

    useEffect (() =>{

        getCustomer(props.match.params.id)

    },[props.match.params.id])

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
                            <Form className="form-itens" onSubmit={deleteCustomer}>
                                <Form.Group>
                                    <Form.Control type="text" name="nome"
                                    disabled="disabled"
                                    defaultValue={currentCustomer.nome}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="text" name="idade" 
                                    disabled="disabled"
                                    defaultValue={currentCustomer.idade}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="text" name="morada" 
                                    disabled="disabled"
                                    defaultValue={currentCustomer.morada}/>
                                </Form.Group>

                                <Form.Group name="id_cod_postal" controlId="exampleForm.ControlSelect1" >
                                    <Form.Control as="select" value={currentCustomer.id_cod_postal} disabled="disabled">
                                        <option value="1500">Lisboa</option>
                                        <option value="2350">Torres Novas</option>
                                        <option value="4000">Porto</option>
                                        <option value="8500">Portimão</option>
                                    </Form.Control>
                                </Form.Group>

                                <Button className="form-submit" variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Button variant="danger" type="button">
                                    <a  className="link-form" href="/home">Cancel</a>
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default DeleteCustomer