import React,{useState} from 'react';
import {Card,Button,Form} from 'react-bootstrap';


function EditCharity ({charityInfo,handleModalClose}) {
   const [charityName,setCharityName] = useState(charityInfo.name)
   const [charityDescription,setCharityDescription] = useState(charityInfo.description)
   const [charityWebsite,setCharityWebsite] = useState(charityInfo.website)

    return (
        
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                <Form.Group className="py-2" controlId="formCharityName">
                                    <Form.Label>Charity Name</Form.Label>
                                    <Form.Control onChange={(e)=>setCharityName(e.target.value)} type="text" placeholder={charityName} value={charityName} autoFocus />
                                    
                                </Form.Group>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                <img src={charityInfo.image}></img>
                            </p>
                            
                                <Form.Group className="py-2" controlId="formCharityDescription">
                                    <Form.Label>Charity Description</Form.Label>
                                    <Form.Control onChange={(e)=>setCharityDescription(e.target.value)} type="text" placeholder={charityDescription} value={charityDescription} />
                                    
                                </Form.Group>
                           
                                <Form.Group className="py-2" controlId="formCharityWebsite">
                                    <Form.Label>Charity Website</Form.Label>
                                    <Form.Control onChange={(e)=>setCharityWebsite(e.target.value)} type="text" placeholder={charityWebsite} value={charityWebsite} />
                                    
                                </Form.Group>
                            
                            <Button>Save</Button><Button className="mx-3 btn-secondary" onClick={handleModalClose}>Cancel</Button>
                            
                        </Card.Body>
                    </Card>
                    
    )
}

export default EditCharity;

// {/* <Form className="p-4" onSubmit={handleSubmit}>
//                 <Form.Group className="py-2" controlId="formEmail">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" value={email} autoFocus />
//                     <Form.Text className="text-muted">
//                         We won't share your email
//                     </Form.Text>
//                 </Form.Group>
//                 <Form.Group className="py-2" controlId="formPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" value={password} />
//                     {/* <Form.Text className="text-muted">
//                         We won't share your name
//                     </Form.Text> */}
//                 </Form.Group>
//                 <Button className="mt-4" variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form> */}