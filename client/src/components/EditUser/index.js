import React,{useState} from 'react';
import {Form,Button,Card} from 'react-bootstrap';
import { useStoreContext } from "../../utils/GlobalState";

function EditUser ({update,setEditUser}) {
    const [state, dispatch] = useStoreContext();
    const [name,setName] = useState(state.user.name)
    const [email,setEmail] = useState(state.user.email)
    // const [password,setPassword] = useState(state.user.password)
    const [street,setStreet] = useState(state.user.street)
    const [city,setCity] = useState(state.user.city)
    const [states,setState] = useState(state.user.states)
    const [zip,setZip] = useState(state.user.zip)

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,email,street,city,state,zip)
        setEmail('')
        // setPassword('')
    }

    return (

                                
                            
        <Form className="p-4" onSubmit={handleSubmit}>
        <Card>
                        <Card.Header>
                            <Card.Title>
            <Form.Group className="py-2" controlId="editUserFormName">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" value={name} autoFocus />
               
            </Form.Group>
                            </Card.Title>
                                    </Card.Header>
                                            <Card.Body>                
            <Form.Group className="py-2" controlId="editUserFormEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" value={email}/>
            </Form.Group>
            {/* <Form.Group className="py-2" controlId="editUserFormPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" value={password} />
              
            </Form.Group> */}
            <Form.Group className="py-2" controlId="editUserFormStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control onChange={(e)=>setStreet(e.target.value)} type="text" placeholder="Enter Street Address" value={street} />
                
            </Form.Group>
            <div className="d-flex justify-content-between">
                <Form.Group className="py-2 address" controlId="editUserFormCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={(e)=>setCity(e.target.value)} type="text" placeholder="Enter City" value={city} />
                   
                </Form.Group>
                <Form.Group className="py-2 address" controlId="editUserFormState">
                    <Form.Label>State</Form.Label>
                    <Form.Control onChange={(e)=>setState(e.target.value)} type="text" placeholder="Enter State" value={states} />
                   
                </Form.Group>
                <Form.Group className="py-2 zip" controlId="editUserFormZip">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control onChange={(e)=>setZip(e.target.value)} type="text" placeholder="Enter Zip Code" value={zip} />
                   
                </Form.Group>
            </div>
            
            <Button onClick={()=>setEditUser(false)}className="mt-4" variant="primary" type="submit">
                Save
            </Button>
            
            
                                    </Card.Body>
                                    </Card>

        </Form>
    )
}

export default EditUser;