import React, {useEffect, useState} from 'react';
import {EditCharity,EditUser,RaffleTicket, MyCharity,AddProduct} from '../../components';
import {USER} from '../../utils/queries';
import Auth from '../../utils/auth';
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

   
    const [street,city,states,zip] = state.user.location.split('|')
   

    return (
            <div className="profilePage">
              <h1 className='display-2 text-center'>Hello {state.user.userName}</h1>
              
                <Container className="userContainer my-4 " >
                    {editUser?
                    <EditUser setEditUser={setEditUser} updateUser={updateUser} handleDeleteShow={handleDeleteShow}/>
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
                                <span>Zip Code:</span>{zip}
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
                <Container className="my-5 border-top">
                <h3 className="text-center">My Charity</h3>
                <MyCharity charityInfo={state.user.charity} handleEditShow={handleEditShow}/>
                

                <AddProduct charityId={state.user.charity._id} handleModalClose={()=>setShowEdit(false)}/>
                
               
                
                <Modal show={showEdit} onHide={handleEditClose} size="lg">
                <Modal.Header closeButton >
                  Raffles of Love
                </Modal.Header>
                <Modal.Body>
      
                
      
                <Tabs
                    id="charity-tab"
                    activeKey={editKey}
                    onSelect={(k) => setEditKey(k)}
                    className="mb-3 d-flex"
                  > 
                  
      
                    <Tab.Pane eventKey="charity" title="Charity Information">
                      <EditCharity charityInfo={state.user.charity} handleModalClose={()=>setShowEdit(false)} />
                    </Tab.Pane>
                    {/* 
                    FUTURE DEVELOPMENT - ADD EDIT PRODUCT TAB
                    <Tab.Pane eventKey="product" title="Charity Products">
                      
                    </Tab.Pane> */}
                  
                  
                  </Tabs>
                
                </Modal.Body>
                  
              </Modal>

              </Container>
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
                  
              </Modal>
              
            </div>
            
    )
}


export default Profile;


