import React from 'react';
import {ProductCard} from '../../components';
import { tempProductData } from '../../tempProductData';

import {Card} from 'react-bootstrap';

function Profile () {
    const tempUserData = {
        name:'User name',
        email:'user@gmail.com',
        street:'101 Some st',
        address:'City, State'
    }
    return (
            <div>
                <Card>
                    <Card.Header>

                    </Card.Header>
                </Card>
                <h2>My raffles</h2>
                <ProductCard productData={tempProductData} />
            </div>
    )
}

export default Profile;