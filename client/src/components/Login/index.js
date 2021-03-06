import React,{useState} from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import { idbPromise } from '../../utils/helpers';

import Auth from '../../utils/auth';

import {Form,Button} from 'react-bootstrap';
import './login.css';

function Login () {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const [login] = useMutation(LOGIN);

    async function clearCart() {
        const cart = await idbPromise('cart', 'get');
          cart.forEach((item) => {
            idbPromise('cart', 'delete', item);
          });
        }
  
    const handleSubmit= async (e)=>{
      e.preventDefault()
      try {
          const {data} = await login({
              variables:{email,password}
          })
          setErrorMessage('')
          clearCart()
          Auth.login(data.login.token);
      } catch (error) {
          setErrorMessage('Unable to Log In')
          console.error(error)
      }
      setEmail('')
      setPassword('')
    }

    return (
            <Form className="loginContainer" onSubmit={handleSubmit}>
                <Form.Group className="py-2" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" value={email} autoFocus />
                </Form.Group>

                <Form.Group className="py-2" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" value={password} />
                </Form.Group>

                <Button className="mt-4" variat="primary" type="submit">
                    Submit
                </Button>
                
                <div className="text-danger">{errorMessage}</div>

            </Form>
    )
}

export default Login;