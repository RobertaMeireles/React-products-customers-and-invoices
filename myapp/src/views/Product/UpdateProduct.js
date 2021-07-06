import React, {useState, useEffect} from 'react'
import axios from "axios"
import authHeader from "../../services/auth-header"
import Header from '../../components/Header'
import SiderBar from '../../components/SideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const UpdateProduct = (props) => {

    const initialProduct = { 
        id: null,
        designacao: "", 
        descricao: "", 
        preco: "", 
        id_categoria: ""
    }
    const [currentId, setCurrentId] = useState('')
    const [currentProduct, setCurrentProduct] = useState(initialProduct)

    const handleInputChange = e => {
        const { name, value } = e.target
        setCurrentProduct({ ...currentProduct, [name]: value })
    };

    const getProduct = (id) => {   
        setCurrentId(id)
        axios.get(`http://localhost:5000/api/products/id/${id}`, { headers: authHeader() })
        .then(response => {
            setCurrentProduct(response.data.product)
        })
        .catch(error => {
            console.error(error)
        })
    }
  
    const updateProduct = (e) => {
        axios.put(`http://localhost:5000/api/products/update/${currentId}`, currentProduct , { headers: authHeader() })
        .then(response => {
            console.log(response.data)
        })
        .catch(e => {
            console.error(e);
        });
      };
      
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
                            {currentProduct ? (
                            <Form className="form-itens" onSubmit={updateProduct}>
                                <Form.Group>
                                    <Form.Control type="text" 
                                    name="designacao" 
                                    defaultValue={currentProduct.designacao}
                                    onChange={handleInputChange}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="text" name="descricao" 
                                    defaultValue={currentProduct.descricao}
                                    onChange={handleInputChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select" 
                                                  name="id_categoria" 
                                                  value={currentProduct.id_categoria}
                                                  onChange={handleInputChange}
                                                  >
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
                                    defaultValue={currentProduct.preco}
                                    onChange={handleInputChange}
                                    />

                                </Form.Group>
                                

                                <Button className="form-submit" variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Button variant="danger" type="button">
                                    Cancel
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

export default UpdateProduct