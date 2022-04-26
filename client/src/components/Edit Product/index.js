import React from 'react';
import {ProductCard} from '../../components/';
import {Button} from 'react-bootstrap';
import { tempProductData } from '../../tempProductData';
import './editProduct.css';

function EditProduct () {
   
    return (
                    <>  
                        <div className="d-flex justify-content-center">
                            <Button >Add Product</Button>

                        </div>
                        <ProductCard productData={tempProductData} />
                    </>
                    
    )
}

export default EditProduct;