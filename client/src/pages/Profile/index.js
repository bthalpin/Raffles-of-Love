import React, {useEffect, useState} from 'react';
import {ProductCard,EditCharity,EditProduct,EditUser} from '../../components';
import {USER} from '../../utils/queries';
// import { tempProductData } from '../../tempProductData';
import { UPDATE_USER,REMOVE_USER } from '../../utils/mutations';
import { useQuery,useMutation } from '@apollo/client';
import { useStoreContext } from "../../utils/GlobalState";
import {Card,Container,Button,Modal,Tabs,Tab} from 'react-bootstrap';
import './profile.css';
import { UPDATE_USER_INFO } from '../../utils/actions';

function Profile () {
    const [state, dispatch] = useStoreContext();
    const [editUser,setEditUser] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [editKey, setEditKey] = useState('charity');
    const handleEditClose = () => setShowEdit(false);
    const handleEditShow = () => {
        setEditKey('charity')
        setShowEdit(true)
    };

    const {loading,data} = useQuery(USER)
    const [updateUser, results] = useMutation(UPDATE_USER)
    const [removeUser, result] = useMutation(REMOVE_USER)

    useEffect(()=>{
      if (data) {
        dispatch({
          type:UPDATE_USER_INFO,
          user:data.user
        })
      }
    },[data])
    console.log(state.user,'STATE')
    const tempUserData = state.user;
    const tempCharityData = state.charities[0]
    const tempProductData = state.products
    // const tempUserData = {
    //     name:'Brian',
    //     email:'user@gmail.com',
    //     street:'101 Some st',
    //     address:'City, State',
    //     website:'www.google.com',
    //     charityId:1
    // }
    // const tempCharityData = {
    //     _id:1,
    //     name:'Charity Name',
    //     description:'Some charity information',
    //     image:'/logo192.png',
    //     website:'www.google.com',

    // }
    const [street,city,states,zip] = state.user.location.split('|')
    return (
            <div className="profilePage">
              <Button onClick={removeUser}>DELETE USER</Button>
                <Container className="my-4 profileInfoContainer" >
                    {editUser?
                    <EditUser setEditUser={setEditUser} updateUser={updateUser}/>
                    :
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                {state.user.userName}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                {state.user.email}
                            </p>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                {street}
                            </p>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                {city}
                            </p>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                {states}
                            </p>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                {zip}
                            </p>
                            <Button onClick={()=>setEditUser(true)}>Edit</Button>
                            
                        </Card.Body>
                    </Card>
                    
                    }

                    
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


