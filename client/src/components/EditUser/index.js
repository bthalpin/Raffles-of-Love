import React,{useState} from 'react';
import {Form,Button,Card} from 'react-bootstrap';
import { useStoreContext } from "../../utils/GlobalState";
import {UPDATE_USER_INFO} from '../../utils/actions';
import './editUser.css';

function EditUser ({update,setEditUser,updateUser,handleDeleteShow}) {
    const [state, dispatch] = useStoreContext();
    const [name,setName] = useState(state.user.userName)
    const [email,setEmail] = useState(state.user.email)
    const [password,setPassword] = useState('')
    const splitLocation = state.user.location.split('|')
    const [street,setStreet] = useState(splitLocation[0])
    const [city,setCity] = useState(splitLocation[1])
    const [states,setState] = useState(splitLocation[2])
    const [zip,setZip] = useState(splitLocation[3])

    const handleSubmit=(e)=>{
        e.preventDefault()
        updateUser({variables:{userName:name,email,password,location:`${street}|${city}|${states}|${zip}`}})
        setEmail('')
        
        dispatch({
        type:UPDATE_USER_INFO,
        user:{userName:name,email,location:`${street}|${city}|${states}|${zip}`}
        })
           
        setEditUser(false)
        // setPassword('')
    }

    return (

                                
                            
        <Form className="editUserConatiner" onSubmit={handleSubmit}>
        <Card className="editUserCard">
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
            
            <div className="d-flex justify-content-between">
                <div className="mt-4">
                    <Button className="m-1" variant="primary" type="submit">
                        Save
                    </Button>
                    <Button className="m-1" onClick={()=>setEditUser(false)} variant="secondary" type="submit">
                        Cancel
                    </Button>

                </div>
                <Button className='btn-danger mt-4 mb-1' onClick={handleDeleteShow}>Delete User</Button>
              </div>
            
                                    </Card.Body>
                                    </Card>

        </Form>
    )
}

export default EditUser;