import React from 'react';
import {Card,Container,Button} from 'react-bootstrap';
import './product.css';

function Product () {
    const tempProducts = [
        {
            name:"Product Name",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
        },
        {
            name:"Product Name",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "

        },
        {
            name:"Product Name",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "

        },
        {
            name:"Product Name",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "

        },
        {
            name:"Product Name",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "

        },
        {
            name:"Product Name",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "

        },
    ]
    return (
            <Container className="d-flex flex-wrap justify-content-around m-auto">
                {tempProducts.map((product,index)=>{
                    return (
                        <Card className="productCard m-2 p-3 text-center" key={index}>
                            <Card.Title>{product.name}</Card.Title>
                            <img className="productImage" src='/logo192.png' alt='logo'></img>
                            {/* <Card.Body>{product.description}</Card.Body>
                            <Button>Buy Ticket</Button> */}
                        </Card>

                    )
                })}

            </Container>
    )
}

export default Product;