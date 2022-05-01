import React from 'react';
import {Card,Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useStoreContext } from "../../utils/GlobalState";
import './myCharity.css'

function MyCharity ({charityInfo,handleEditShow}) {
    
    return (
        <div className="">
           
            <Container className="myCharityContainer d-flex flex-wrap justify-content-around my-5 mx-auto">
                
                        
                        <Card className=" m-2 p-3 text-center">
                            <Card.Title>{charityInfo.name}</Card.Title>
                            <div className="myImages">
                                <div className="my-1">
                                    <img className="myCharityImage" src={charityInfo.logo}/>
                                    
                                </div>
                                <div className="my-1">
                                    <img className="myCharityImage" src={charityInfo.image}/>

                                </div>

                            </div>
                            <Card.Body>{charityInfo.description}</Card.Body>
                            <Card.Footer><a href={charityInfo.website}>{charityInfo.website}</a></Card.Footer>
                            <Button className="charityButton" onClick={()=>handleEditShow()}>Edit Charity Info</Button>
                        </Card>
                        
                       
            </Container>
            
        </div>

                    
                

    )
}

export default MyCharity;