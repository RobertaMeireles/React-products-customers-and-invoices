import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Register = () => {
    return (
        <>
            <Card>  
                <Card.Body>
                    <h1>Login</h1>
                    <Form className="form-itens">
                         <Form.Group>
                            <Form.Control type="text" placeholder="Name" name="name"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Email" name="email"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Password" name="password-acesso"/>
                        </Form.Group>

                        <Button className="form-submit" variant="primary" type="submit">
                            Submit
                        </Button>
                        {/* TODO erro */}
                        {/* TODO link login */}
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Register