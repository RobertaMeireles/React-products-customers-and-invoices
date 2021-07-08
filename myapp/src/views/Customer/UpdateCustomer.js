import React, {useState, useEffect} from 'react'
import services from "../../services/user.service"
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const UpdateCustomer = (props) => {

    const initialCustomer = { 
        id: null,
        nome: "", 
        idade: "", 
        morada: "", 
        cod_postal: ""
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

    const handleInputChange = e => {
        const { name, value } = e.target
        setCurrentCustomer({ ...currentCustomer, [name]: value })
    }

    const updateCustomer = () => {
        services.update(`customers/update/${currentCustomer.id}`, currentCustomer)
        .then((res) => {
            alert(`Customer updated.`)
            return res.data
          }).catch((error) => {
            console.error(error)
            alert(`A problem occurred in the update, try again later.`)
        })
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
                            <h1>Update Customer</h1>
                            <Form className="form-itens" onSubmit={updateCustomer}>
                                <Form.Group>
                                    <Form.Control type="text" name="nome"
                                     defaultValue={currentCustomer.nome}
                                     onChange={handleInputChange}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="text" name="idade"
                                    defaultValue={currentCustomer.idade} 
                                    onChange={handleInputChange}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="text" name="morada"
                                    defaultValue={currentCustomer.morada}
                                    onChange={handleInputChange}/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1" >
                                    <Form.Control as="select" 
                                    name="cod_postal" 
                                    value={currentCustomer.cod_postal}
                                    onChange={handleInputChange}>
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

export default UpdateCustomer