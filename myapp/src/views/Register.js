import React, { useState } from "react"
import AuthService from "../services/auth.service"
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Register = () => {

    const [submitted, setSubmitted] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nome, setNome] = useState("")
    const [message, setMessage] = useState("")
    const [regexMessage, setRegexMessage] = useState(true)

  function onChangeEmail(e) {
    e.persist()
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(e.target.value).toLowerCase())){
            setEmail(e.target.value);
        }           
    }


    const onChangePassword = (e) => {
        e.persist()
        if (e.target.value.length >= 6){
          setPassword(e.target.value);
        } 
    }

    const onChangeName = (e) => {
        e.persist()
        if (e.target.value !== ''){
            setNome(e.target.value);
        } 
    }

    const checkRegister = (e) => {
        e.preventDefault();
        if (email && password && nome){
          setSubmitted(true)
          handleRegister()
        } 
        setSubmitted(true)
  
    }


    const handleRegister = () => {

        AuthService.register(email, password, nome).then(
          () => {
              window.location.href = "/home"
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            setMessage(resMessage);
            setSubmitted(true)
            setRegexMessage(false)
          }
        )
      }

    return (
        <>
            <Card className="form-user">  
                <Card.Body>
                    <h1>Sign Up</h1>
                    <Form onSubmit={checkRegister}>
                        
                         <Form.Group>
                            <Form.Control type="text" placeholder="Name" name="nome" onChange={onChangeName}/>
                        </Form.Group>
                        <div className="error-div">
                            {submitted && !nome && <span className='erro-contact'>Enter your Name</span>} 
                        </div>

                        <Form.Group>
                            <Form.Control type="text" placeholder="E-mail" name="email" onChange={onChangeEmail}/>
                        </Form.Group>
                        <div className="error-div">
                            {submitted && !email && <span className='erro-contact'>Incorret E-mail</span>} 
                        </div>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Password" name="password" onChange={onChangePassword}/>
                        </Form.Group>
                        <div className="error-div">
                            {submitted && !password && <span className='erro-contact'>Incorret Password</span>} 
                        </div>

                        <Button className="form-submit" variant="primary" type="submit">
                            Submit
                        </Button>
                        <div className="error-back">
                            {submitted && !regexMessage && <span className='erro-contact'>{message}</span>} 
                        </div>

                        <div className="link">
                            <p><a href="/">Login</a></p>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Register
