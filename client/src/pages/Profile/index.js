import React, {useState} from 'react';
import {ProductCard,EditCharity,EditProduct} from '../../components';
import { tempProductData } from '../../tempProductData';
import {Card,Container,Button,Modal,Tabs,Tab} from 'react-bootstrap';
import './profile.css';

function Profile () {
    const [showEdit, setShowEdit] = useState(false);
    const [editKey, setEditKey] = useState('charity');
    const handleEditClose = () => setShowEdit(false);
    const handleEditShow = () => {
        setEditKey('charity')
        setShowEdit(true)
    };
    const tempUserData = {
        name:'Brian',
        email:'user@gmail.com',
        street:'101 Some st',
        address:'City, State',
        website:'www.google.com',
        charityId:1
    }
    const tempCharityData = {
        _id:1,
        name:'Charity Name',
        description:'Some charity information',
        image:'/logo192.png',
        website:'www.google.com',

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
                <h2 className="text-center">My raffles</h2>
                <ProductCard productData={tempProductData}/>
                {tempUserData.charityId===tempCharityData._id?
                <>
                <Button className="charityButton" onClick={()=>handleEditShow()}>Edit Charity Info</Button>
                </>
                :<></>
                }
               
                {/* <Container className="my-4">

                    
                </Container>
                <h2 className="text-center">Products Sold by My Charity</h2>
                <ProductCard productData={tempProductData}/>
                 */}
                
                <Modal show={showEdit} onHide={handleEditClose} size="lg">
                <Modal.Header closeButton >
                  CHARITY
                </Modal.Header>
                <Modal.Body>
      
                {/* <Tab.Container> */}
      
                <Tabs
                    id="charity-tab"
                    activeKey={editKey}
                    onSelect={(k) => setEditKey(k)}
                    className="mb-3 d-flex"
                  > 
                  {/* <Tab.Content> */}
      
                    <Tab.Pane eventKey="charity" title="Charity Information">
                      <EditCharity charityInfo={tempCharityData} handleModalClose={()=>setShowEdit(false)} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="product" title="Charity Products">
                      <EditProduct handleModalClose={()=>setShowEdit(false)}/>
                    </Tab.Pane>
                  {/* </Tab.Content> */}
                  
                  </Tabs>
                {/* </Tab.Container> */}
                </Modal.Body>
                  {/* <Modal.Title>Login</Modal.Title>
                <Login handleModalClose={()=>setShow(false)} /> */}
              </Modal>
              
            </div>
    )
}

export default Profile;


