import React,{useState} from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import {Form,Button} from 'react-bootstrap';
function Login () {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const [login, {error,data}] = useMutation(LOGIN);




    // 
    // 
    // ADD ERROR FOR FAILED LOGIN
    // 
    const handleSubmit= async (e)=>{
        e.preventDefault()

        try {
            const {data} = await login({
                variables:{email,password}
            })
            setErrorMessage('')
            Auth.login(data.login.token);
        } catch (error) {
            setErrorMessage('Unable to Log In')
            console.error(error)
        }
        console.log(email,password)
        setEmail('')
        setPassword('')
    }
    return (
            <Form className="p-4" onSubmit={handleSubmit}>
                <Form.Group className="py-2" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" value={email} autoFocus />
                    <Form.Text className="text-muted">
                        We won't share your email
                    </Form.Text>
                </Form.Group>
                <Form.Group className="py-2" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" value={password} />
                    {/* <Form.Text className="text-muted">
                        We won't share your name
                    </Form.Text> */}
                </Form.Group>
                <Button className="mt-4" variat="primary" type="submit">
                    Submit
                </Button>
                
                <div className="text-danger">{errorMessage}</div>
            </Form>
    )
}

export default Login;