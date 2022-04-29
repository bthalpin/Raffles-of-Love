import React,{useState} from 'react';
import {Card,Button,Form} from 'react-bootstrap';
import {useMutation} from '@apollo/client';
import {UPDATE_CHARITY} from '../../utils/mutations';

function EditCharity ({charityInfo,handleModalClose}) {
    const [charityName,setCharityName] = useState(charityInfo.name)
    const [charityImage,setCharityImage] = useState(charityInfo.image)
    const [charityDescription,setCharityDescription] = useState(charityInfo.description)
    const [charityWebsite,setCharityWebsite] = useState(charityInfo.website)
    const [updateCharity, {data}] = useMutation(UPDATE_CHARITY);
    
    const saveCharity=(e)=>{
        e.preventDefault()
        updateCharity({variables:{charityId:charityInfo._id,name:charityName,image:charityImage,description:charityDescription,website:charityWebsite}})
        
        
        // dispatch({
        // type:UPDATE_USER_INFO,
        // user:{userName:name,email,location:`${street}|${city}|${states}|${zip}`}
        // })
           
        handleModalClose()
        // setPassword('')
    }

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
                                {charityInfo.image==='Enter Image URL'?
                                <Form.Group className="py-2" controlId="formCharityImage">
                                    <Form.Label>Enter Image URL</Form.Label>
                                    <Form.Control onChange={(e)=>setCharityImage(e.target.value)} type="text" placeholder='Enter URL' value={charityImage} />
                                    
                                </Form.Group>
                                :<img src={charityInfo.image} alt={charityInfo.name}></img>}
                            </p>
                            
                                <Form.Group className="py-2" controlId="formCharityDescription">
                                    <Form.Label>Charity Description</Form.Label>
                                    <Form.Control onChange={(e)=>setCharityDescription(e.target.value)} type="text" placeholder={charityDescription} value={charityDescription} />
                                    
                                </Form.Group>
                           
                                <Form.Group className="py-2" controlId="formCharityWebsite">
                                    <Form.Label>Charity Website</Form.Label>
                                    <Form.Control onChange={(e)=>setCharityWebsite(e.target.value)} type="text" placeholder={charityWebsite} value={charityWebsite} />
                                    
                                </Form.Group>
                            
                            <Button onClick={saveCharity}>Save</Button><Button className="mx-3 btn-secondary" onClick={handleModalClose}>Cancel</Button>
                            
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