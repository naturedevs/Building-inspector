import { FC, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import { ReactTabulator, reactFormatter } from "react-tabulator";
import toast from 'react-hot-toast';
import axios from 'axios';

import { ActionColumn } from '../../components/ui/tabulator/ActionColumn';
import { YesNoModal } from '../../components/ui/modal/YesNo';
import { deleteUser } from '../../apis/user';
import { User } from "./types";
import { UserForm } from './Form';
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import "../../assets/css/tabulator.css";

import { API_ROUTES } from "../../utils/constants"

interface UserListViewProps { }

const UserListView: FC<UserListViewProps> = () => {
   const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalPages] = useState(1);
   const [users, setUsers] = useState<User[]>([]);
   const [selectedUser, setSelectedUser] = useState<User>();
   const [loading, setLoading] = useState(false);   
   const paginationRef = useRef(null);
   const [showDeleteAlertModal, setShowDeleteAlertModal] = useState(false);
   const [showUserFormModal, setShowUserFormModal] = useState(false);
   const [deleting, setDeleting] = useState(false);

   useEffect(() => {
      fetchUsers();
   },[])

   const fetchUsers = async () => {
      setLoading(true);
      fetch(API_ROUTES.GET_USER_LIST, {
         method: "GET"
      })
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setUsers(data);
         setLoading(false);
      })
      .catch((error) => {
         console.log(error);
         setLoading(false);
      });
   };

   const handleAction = (type:string, data:any) => {
      console.log("handleStateChange");
      console.log(data)
      setSelectedUser(data);
      if(type == "delete"){
         setShowDeleteAlertModal(true);
      }else if(type == "edit"){
         setShowUserFormModal(true);
      }
   };

   const handleDeleteAlertModalOK = async () => {
      console.log("handleDeleteAlertModalOK");
      console.log(selectedUser?._id);
      setDeleting(true);
      if(!selectedUser){
         toast.error("Something went wrong, none user is selected");
         setDeleting(false);
         return;
      }
      axios.post(API_ROUTES.DELETE_USER,{
         id:selectedUser._id
      })
      .then(response => {
         console.log(response.data);
         if(response.data == "success"){
            toast.success("The user is successfully deleted");
            fetchUsers();
         }else{
            toast.error(response.data);
         }
         setDeleting(false);
         setShowDeleteAlertModal(false);
      })
      .catch(error => {
         console.log(error);
         toast.error(error.message);
         setDeleting(false);
      });
   }

   const columns:any= [
      { title:"No", field:"No", width:80, formatter:"rownum", headerSort:false},
      { title: "Name", field: "username", minWidth:200, sorter: "string", headerFilter: 'input'},
      { title: "Email", field: "email", minWidth:200, sorter: "string", headerFilter: 'input'},
      { title: "Role", field: "role", minWidth:200,
         sorter: (a: string[], b: string[]) => a.toString().localeCompare(b.toString()),      
         formatter: MultiValueFormatter,
         formatterParams: { style: 'PILL' }
      },
      { title: "Created_at", field: "created_at", minWidth:200, sorter:'string' },
      { title: 'Actions', width:120, field: 'action', hozAlign: 'center',headerSort:false, formatter: reactFormatter(<ActionColumn handleAction={handleAction}/>) }
   ];

   return (
   <div className='main-container container-fluid mt-3'>
      <Row>
         <Col xl={12}>
            <Card className="custom-card">
                  <Card.Header>
                     <Card.Title>
                        Users
                     </Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <div className="table-responsive  ">
                        {loading?
                        "Loading...":
                        users.length == 0 ?
                        "No users found.":
                        <div>
                           <div className="input-group mb-3">
                              <Form.Control type="text" placeholder="" />
                              <Button className="btn btn-primary">
                                 <i className="fa fa-search" aria-hidden="true"></i>
                              </Button>
                           </div>
                           <ReactTabulator className="table-hover table-bordered"
                              data={users}
                              columns={columns} 
                              options={{pagination: 'local',
                                 paginationSize: pageSize,
                                 paginationSizeSelector: [20, 50, 100], // Define available page sizes
                                 paginationInitialPage: currentPage,
                                 paginationButtonCount: 3, // Number of pagination buttons to display
                                 paginationDataReceived: { last_page: totalPages },
                                 paginationDataSent: { page: currentPage, size: pageSize },
                                 paginationElement: paginationRef.current
                                 // paginationElement: "#paginationContainer"
                              }}
                           />
                           <div ref={paginationRef} id="paginationContainer">
                           </div>
                        </div>
                        }
                     </div>
                  </Card.Body>
            </Card>
         </Col>
      </Row>
      <YesNoModal 
         modalShow={showDeleteAlertModal} 
         setModalShow={setShowDeleteAlertModal} 
         title={"Confirm"} 
         type={"danger"}
         content={'Are you sure to delete this user?'} 
         handleOK={handleDeleteAlertModalOK}
      />
      <UserForm
         user={selectedUser} 
         modalShow={showUserFormModal} 
         setModalShow={setShowUserFormModal}
         updateUsers={fetchUsers}
      />

   </div>
)
};

export default UserListView;
