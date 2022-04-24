import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';

function Register () {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [street,setStreet] = useState('')
    const [address,setAddress] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,email,password,street,address)
        setEmail('')
        setPassword('')
    }

    return (
        <Form className="p-4" onSubmit={handleSubmit}>
            <Form.Group className="py-2" controlId="registerFormName">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" value={name} autoFocus />
                {/* <Form.Text className="text-muted">
                    We won't share your email
                </Form.Text> */}
            </Form.Group>
            <Form.Group className="py-2" controlId="registerFormEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" value={email}/>
                {/* <Form.Text className="text-muted">
                    We won't share your email
                </Form.Text> */}
            </Form.Group>
            <Form.Group className="py-2" controlId="registerFormPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" value={password} />
                {/* <Form.Text className="text-muted">
                    We won't share your name
                </Form.Text> */}
            </Form.Group>
            <Form.Group className="py-2" controlId="registerFormStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control onChange={(e)=>setStreet(e.target.value)} type="text" placeholder="Enter Street Address" value={street} />
                {/* <Form.Text className="text-muted">
                    We won't share your name
                </Form.Text> */}
            </Form.Group>
            <Form.Group className="py-2" controlId="registerFormAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="Enter City, State" value={address} />
                {/* <Form.Text className="text-muted">
                    We won't share your name
                </Form.Text> */}
            </Form.Group>
            <Button className="mt-4" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Register;