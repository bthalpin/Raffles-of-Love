import React,{useState} from 'react';
import {Card,Button,Form} from 'react-bootstrap';
import {useMutation} from '@apollo/client';
import {UPDATE_CHARITY} from '../../utils/mutations';

function EditCharity ({charityInfo,handleModalClose}) {
    const [charityName,setCharityName] = useState(charityInfo.name)
    const [charityMission,setCharityMission] = useState(charityInfo.mission)
    const [charityLogo,setCharityLogo] = useState(charityInfo.logo)
    const [charityImage,setCharityImage] = useState(charityInfo.image)
    const [charityYoutube,setCharityYoutube] = useState(charityInfo.youtube)
    const [charityDescription,setCharityDescription] = useState(charityInfo.description)
    const [charityWebsite,setCharityWebsite] = useState(charityInfo.website)
    const [updateCharity] = useMutation(UPDATE_CHARITY);
    
    const saveCharity=(e)=>{
        e.preventDefault()
        updateCharity({variables:{charityId:charityInfo._id,
                                    name:charityName,
                                    image:charityImage,
                                    description:charityDescription,
                                    website:charityWebsite,
                                    mission:charityMission,
                                    logo:charityLogo,
                                    youtube:charityYoutube,
                                }})
        
        
        handleModalClose()
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
                                <Form.Group className="py-2" controlId="formCharityLogo">
                                    <Form.Label>Enter Logo URL</Form.Label>
                                    <Form.Control onChange={(e)=>setCharityLogo(e.target.value)} type="text" placeholder='Enter Logo URL' value={charityLogo} />
                                </Form.Group>
                                                               
                                <Form.Group className="py-2" controlId="formCharityImage">
                                    <Form.Label>Enter Image URL</Form.Label>
                                    <Form.Control onChange={(e)=>setCharityImage(e.target.value)} type="text" placeholder='Enter Image URL' value={charityImage} />
                                </Form.Group>
                                                                
                                <Form.Group className="py-2" controlId="formCharityYoutube">
                                    <Form.Label>Enter Youtube Link</Form.Label>
                                    <Form.Control onChange={(e)=>setCharityYoutube(e.target.value)} type="text" placeholder='Enter Youtube Link' value={charityYoutube} />
                                    <Form.Text className="text-muted">
                                        Select embed link and enable privacy enhance mode from youtube
                                    </Form.Text>
                                </Form.Group>
                                                            
                                <Form.Group className="py-2" controlId="formCharityDescription">
                                    <Form.Label>Charity Description</Form.Label>
                                    <Form.Control onChange={(e)=>setCharityDescription(e.target.value)} type="text" placeholder={charityDescription} value={charityDescription} />
                                </Form.Group>
                           
                                <Form.Group className="py-2" controlId="formCharityWebsite">
                                    <Form.Label>Charity Website</Form.Label>
                                    <Form.Control onChange={(e)=>setCharityWebsite(e.target.value)} type="text" placeholder={charityWebsite} value={charityWebsite} />
                                </Form.Group>

                                <Form.Group className="py-2" controlId="formCharityMission">
                                    <Form.Label>Charity Mission</Form.Label>
                                    <Form.Control onChange={(e)=>setCharityMission(e.target.value)} type="text" placeholder={charityMission} value={charityMission} />
                                </Form.Group>
                            
                            <Button onClick={saveCharity}>Save</Button><Button className="mx-3 btn-secondary" onClick={handleModalClose}>Cancel</Button>
                            
                        </Card.Body>
                    </Card>
                    
    )
}

export default EditCharity;

