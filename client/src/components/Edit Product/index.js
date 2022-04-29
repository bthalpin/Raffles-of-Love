import React from 'react';
import {ProductCard} from '../../components/';
import {Button} from 'react-bootstrap';
import { tempProductData } from '../../tempProductData';
import {SINGLE_CHARITY,PRODUCTS_BY_CHARITY} from '../../utils/queries';
import { useQuery } from '@apollo/client';
import './editProduct.css';

function EditProduct ({charityId}) {
    const {loading,data} = useQuery(PRODUCTS_BY_CHARITY,{
        variables:{charityId:charityId},
    });
    console.log(data)
    return (
                    <>  
                        <div className="d-flex justify-content-center">
                            <Button >Add Product</Button>

                            </div>
                        {data?.productsByCharity?.length?
                        
                        <ProductCard productData={data.productsByCharity} />
                        :
                        <p className="text-center m-3">No Products</p>}
                    </>
                    
    )
}

export default EditProduct;