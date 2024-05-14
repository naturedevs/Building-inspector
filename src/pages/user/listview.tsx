import { FC, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import { ReactTabulator, reactFormatter } from "react-tabulator";
import toast from 'react-hot-toast';

import { ActionColumn } from '../../components/ui/tabulator/ActionColumn';
import { YesNoModal } from '../../components/ui/modal/YesNo';
import { getUsers, deleteUser } from '../../apis/user';
import { User } from "./types";
import { UserForm } from './Form';
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import "../../assets/css/tabulator.css";

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
      setLoading(true);
      getUsers()
      .then(users => {
         setUsers(users)
         setLoading(false);
      })
      .catch(error =>{
         toast.error(error.message);
         setLoading(false);              
      })
   },[])

   const handleAction = (type:string, data:any) => {
      console.log("handleStateChange");
      setSelectedUser(data);
      if(type == "delete"){
         setShowDeleteAlertModal(true);
      }else if(type == "edit"){
         setShowUserFormModal(true);
      }
   };

   const handleDeleteAlertModalOK = () => {
      console.log("handleDeleteAlertModalOK");
      console.log(selectedUser?.id);
      setDeleting(true);
      if(!selectedUser){
         toast.error("Something went wrong, none user is selected");
         return;
      }
      deleteUser(selectedUser.id)
      .then(res => {
         setDeleting(false);
         if(res == "success"){
            toast.success("The user successfully deleted.");
         }else{
            toast.error(res);
         }
         setShowDeleteAlertModal(false);
      })
      .catch(error => {
         setDeleting(false);
         toast.error(error.message);
         setShowDeleteAlertModal(false);
      })
   }

   const columns:any= [
      { title:"No", field:"No", width:80, formatter:"rownum", headerSort:false},
      { title: "Name", field: "name", minWidth:200, sorter: "string", headerFilter: 'input'},
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
   <div className='main-container container-fluid'>
      <div className="page-header">
         <div className="flex-grow-1 py-2-5">
            <h4 className="page-title mb-1">Users</h4>
            <nav aria-label="breadcrumb">
               <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to={`${import.meta.env.BASE_URL}dashboard/`} className="text-primary">CRM</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Users</li>
               </ol>
            </nav>
         </div>
      </div>
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
      />

   </div>
)
};

export default UserListView;
