import React from 'react';
import {ProductCard} from '../../components';
import { tempProductData } from '../../tempProductData';
import {Card,Container,Button} from 'react-bootstrap';
import './profile.css';

function Profile () {
    const tempUserData = {
        name:'Brian',
        email:'user@gmail.com',
        street:'101 Some st',
        address:'City, State'
    }
    return (
            <div className="profilePage">
                <Container className="my-4 profileInfoContainer" sm={9}>

                    <Card>
                        <Card.Header>
                            <Card.Title>
                                {tempUserData.name}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                {tempUserData.email}
                            </p>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                {tempUserData.street}
                            </p>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                {tempUserData.address}
                            </p>
                            <Button>Edit</Button>
                            
                        </Card.Body>
                    </Card>
                </Container>
                <h2>My raffles</h2>
                <ProductCard productData={tempProductData}/>
            </div>
    )
}

export default Profile;