import React from 'react';
import Product from '../../components';

function Profile () {
    const tempUserData = {
        name:'User name',
        email:'user@gmail.com',
        street:'101 Some st',
        address:'City, State'
    }
    return (
            <div>
                <h2>My raffles</h2>
                <Product />
            </div>
    )
}

export default Profile;