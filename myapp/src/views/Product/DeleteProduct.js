import React, {useState, useEffect} from 'react'
import services from "../../services/user.service"
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const DeleteProduct = (props) => {

    const initialProduct = { 
        id: null,
        designacao: "", 
        descricao: "", 
        preco: "", 
        id_categoria: ""
    }

    const [currentProduct, setCurrentProduct] = useState(initialProduct)

    const getProduct = (id) => {
        services.getId(`products/id/${id}`)
        .then(response => {
            setCurrentProduct(response.data.product)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const deleteProduct = () => {
        services.deleteId(`products/delete/${currentProduct.id}`, currentProduct)
        .then(() => {
            alert(`Product deleted.`)
          }).catch(() => {
            alert(`A problem occurred in the deleted, try again later.`)
        })
        props.history.push("/home")
    }

    useEffect (() =>{

        getProduct(props.match.params.id)

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
                            <h1>New Product</h1>
                            <Form className="form-itens" onSubmit={deleteProduct}>
                                <Form.Group>
                                    <Form.Control type="text"                                  
                                    name="designacao" 
                                    disabled="disabled"
                                    defaultValue={currentProduct.designacao} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="text"
                                    name="descricao"
                                    disabled="disabled"
                                    defaultValue={currentProduct.descricao}
                                    />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select" disabled="disabled"
                                        name="id_categoria" 
                                        value={currentProduct.id_categoria}>
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
                                    <Form.Control type="number" 
                                        name="preco"
                                        disabled="disabled"
                                        defaultValue={currentProduct.preco} />
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

export default DeleteProduct
