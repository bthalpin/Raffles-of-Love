import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
function Login () {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
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
            </Form>
    )
}

export default Login;