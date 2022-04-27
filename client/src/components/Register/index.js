import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import {useMutation} from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './register.css';

function Register () {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [street,setStreet] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('')
    const [zip,setZip] = useState('')

    const [addUser,{error,data}] = useMutation(ADD_USER);

    const handleSubmit= async (e)=>{
        e.preventDefault()

        try {
            const {data} = await addUser({
                variables:{
                    userName:name,email,password,location:`${street}|${city}|${state}|${zip}`
                }
            });
            Auth.login(data.addUser.token)
        } catch (error) {
            console.error(error)
        }
        console.log(name,email,password,street,city,state,zip)
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
            <div className="d-flex justify-content-between">
                <Form.Group className="py-2 address" controlId="registerFormCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={(e)=>setCity(e.target.value)} type="text" placeholder="Enter City" value={city} />
                    {/* <Form.Text className="text-muted">
                        We won't share your name
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="py-2 address" controlId="registerFormState">
                    <Form.Label>State</Form.Label>
                    <Form.Control onChange={(e)=>setState(e.target.value)} type="text" placeholder="Enter State" value={state} />
                    {/* <Form.Text className="text-muted">
                        We won't share your name
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="py-2 zip" controlId="registerFormZip">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control onChange={(e)=>setZip(e.target.value)} type="text" placeholder="Enter Zip Code" value={zip} />
                    {/* <Form.Text className="text-muted">
                        We won't share your name
                    </Form.Text> */}
                </Form.Group>
            </div>
            
            <Button className="mt-4" variant="primary" type="submit">
                Submit
            </Button>
            
        </Form>
    )
}

export default Register;