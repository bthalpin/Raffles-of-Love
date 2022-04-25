import React from 'react';
import {ProductCard} from '../../components';
import { tempProductData } from '../../tempProductData';

import {Container} from 'react-bootstrap';

function Profile () {
    const tempUserData = {
        name:'User name',
        email:'user@gmail.com',
        street:'101 Some st',
        address:'City, State'
    }
    return (
            <Container className="mt-5" >
                
                <h2 className="text-center">All Raffles</h2>
                <ProductCard productData={tempProductData} />
            </Container>
    )
}

export default Profile;