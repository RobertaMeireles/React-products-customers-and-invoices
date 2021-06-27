import React, { useState } from "react"
import AuthService from "../services/auth.service"
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Login = () => {

  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [regexMessage, setRegexMessage] = useState(true)


  function onChangeEmail(event) {
    event.persist()
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(event.target.value).toLowerCase())){
            setEmail(event.target.value);
        }           
    }

    const onChangePassword = (e) => {
      e.persist()
      if (e.target.value.length >= 6){
        setPassword(e.target.value);
      } 
    }


    const checkLogin = (e) => {
      e.preventDefault();
      if (email && password){
        setSubmitted(true)
        handleLogin()
      } 
      setSubmitted(true)

    }


  const handleLogin = () => {

      AuthService.register(email, password).then(
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
                <Card.Body >
                    <h1>Login</h1>
                    <Form onSubmit={checkLogin}>

                        <Form.Group>
                            <Form.Control type="text" name="email" placeholder="Email" onChange={onChangeEmail} />
                        </Form.Group>
                        <div className="error-div">
                            {submitted && !email && <span className='erro-contact'>Incorret E-mail</span>} 
                        </div>

                        <Form.Group>
                            <Form.Control type="text" name="password" placeholder="Password" onChange={onChangePassword}/>
                        </Form.Group>
                        <div className="error-div">
                            {submitted && !password && <span className='erro-contact'>Incorret Password</span>} 
                        </div>

                        <Button variant="primary" type="submit">Submit</Button>
                        <div className="error-back">
                            {submitted && !regexMessage && <span className='erro-contact'>{message}</span>} 
                        </div>
                
                       <div className="link">
                         <p><a href="/register">Sign Up</a></p>
                       </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Login
