import React, {useEffect, useState} from 'react';
import {ProductCard,EditCharity,EditProduct,EditUser,RaffleTicket, MyCharity} from '../../components';
import {USER} from '../../utils/queries';
import Auth from '../../utils/auth';
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
    const [confirmDelete,setConfirmDelete] = useState(false)
    const handleDeleteClose = () => setConfirmDelete(false)
    const handleDeleteShow = () => setConfirmDelete(true)
    const [showEdit, setShowEdit] = useState(false);
    const [editKey, setEditKey] = useState('charity');
    const handleEditClose = () => setShowEdit(false);
    const handleEditShow = () => {
        setEditKey('charity')
        setShowEdit(true)
    };

    const {loading,data} = useQuery(USER)
    // const productInfo = useQuery
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

    const deleteUser = async () => {
      await removeUser()
      Auth.logout()

    }

    const tempUserData = state.user;
    const tempCharityData = Object.values(state.charities).flatMap(item=>item)
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
    console.log(state, "THIS IS MINE")

    return (
            <div className="profilePage">
              <h1 className='display-2 text-center helloProfile'>Hello {state.user.userName}</h1>
              <div>
                <Button className='btn-danger' onClick={handleDeleteShow}>DELETE USER</Button>
              </div>
                <Container className="my-4 profileInfoContainer" >
                    {editUser?
                    <EditUser setEditUser={setEditUser} updateUser={updateUser}/>
                    :
                    <Card className="profileCardFull">
                        <Card.Header  className ="profileCard">
                            <Card.Title className="profileCardTitle">
                                {state.user.userName}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="profileBody">
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                               <span>Email Address:</span> {state.user.email}
                            </p>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                               <span>Street:</span> {street}
                            </p>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                <span>City:</span> {city}
                            </p>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                <span>State:</span>{states}
                            </p>
                            <p className="profileInfo p-1 d-flex justify-content-between align-items-center">
                                <span>Zipe Code:</span>{zip}
                            </p>
                            <Button onClick={()=>setEditUser(true)}>Edit</Button>
                            
                        </Card.Body>
                    </Card>
                    
                    }

                    
                </Container>
                <h2 className="text-center">My raffles</h2>
                {state?.user?.tickets?.length?
                <RaffleTicket tickets={state.user.tickets}/>
                
                :
                <p className="text-center">No Raffle Tickets Yet</p>}
                {state.user.charity?
                <>
                <Button className="charityButton" onClick={()=>handleEditShow()}>Edit Charity Info</Button>
                <h3 className="text-center">My Charity</h3>
                <MyCharity charityInfo={state.user.charity}/>
                
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
                      <EditCharity charityInfo={state.user.charity} handleModalClose={()=>setShowEdit(false)} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="product" title="Charity Products">
                      <EditProduct charityId={state.user.charity._id}handleModalClose={()=>setShowEdit(false)}/>
                    </Tab.Pane>
                  {/* </Tab.Content> */}
                  
                  </Tabs>
                {/* </Tab.Container> */}
                </Modal.Body>
                  {/* <Modal.Title>Login</Modal.Title>
                <Login handleModalClose={()=>setShow(false)} /> */}
              </Modal>

              </>
                :<></>
                }

                <Modal show={confirmDelete} onHide={handleDeleteClose} size="sm">
                <Modal.Header closeButton >
                  Confirm Delete
                </Modal.Header>
                <Modal.Body>
      
                <div>Are you sure you want to delete?</div>
                <Button className="btn-danger" onClick={deleteUser}>Confirm</Button><Button onClick={handleDeleteClose} className="btn-secondary">Cancel</Button>
                </Modal.Body>
                  {/* <Modal.Title>Login</Modal.Title>
                <Login handleModalClose={()=>setShow(false)} /> */}
              </Modal>
              
            </div>
            
    )
}


export default Profile;


