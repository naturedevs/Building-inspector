import { FC, useEffect, useState } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import { ReactTabulator, reactFormatter } from "react-tabulator";
import toast from 'react-hot-toast';

import { ActionColumn } from '../../components/ui/tabulator/ActionColumn';
import { YesNoModal } from '../../components/ui/modal/YesNo';
import { User } from "./types";
import { UserForm } from './Form';
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import "../../assets/css/tabulator.css";

import { API_ROUTES, MSG } from "../../utils/constants"

interface UserListViewProps { }

const UserListView: FC<UserListViewProps> = () => {

   const [items, setItems] = useState<User[]>([]);
   const [filteredItems, setFilteredItems] = useState<User[]>([]);
   const [selectedItem, setSelectedItem] = useState<User>();

   const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalPages] = useState(1);
   
   const [loading, setLoading] = useState(false);   
   const [showDeleteAlertModal, setShowDeleteAlertModal] = useState(false);
   const [showUserFormModal, setShowUserFormModal] = useState(false);
   const [deleting, setDeleting] = useState(false);
   const [searchKey, setSearchKey] = useState("");

   useEffect(() => {
      fetchUsers();
   },[])

   const fetchUsers = async () => {
      setLoading(true);
      fetch(API_ROUTES.USER_API, {
         method: "GET"
      })
      .then((response) => response.json())
      .then((data : User[]) => {
         setItems(data);
         setFilteredItems(data);
         setLoading(false);
      })
      .catch((error) => {
         console.log(error);
         toast.error(error.message);
         setLoading(false);
      });
   };

   const handleSearch = () => {
      setFilteredItems(items.filter(item => {
         if(searchKey == ""){
            return true;
         }
         if(item.username.includes(searchKey)){
            return true;
         }
         if(item.email.includes(searchKey)){
            return true;
         }
         return false;
      }));
   }

   const handleAction = (type:string, data:any) => {
      console.log("handleStateChange");
      console.log(data)
      setSelectedItem(data);
      if(type == "delete"){
         setShowDeleteAlertModal(true);
      }else if(type == "edit"){
         setShowUserFormModal(true);
      }
   };

   const handleAddUser = () => {
      setSelectedItem(undefined);
      setShowUserFormModal(true);
   }

   const handleDeleteAlertModalOK = async () => {
      console.log("handleDeleteAlertModalOK");
      console.log(selectedItem?._id);
      setDeleting(true);
      if(!selectedItem){
         toast.error("Something went wrong, none user is selected");
         setDeleting(false);
         return;
      }

      fetch(API_ROUTES.USER_API + `/${selectedItem._id}`, {
         method: "DELETE",
      })
      .then((res) => res.json())
      .then((result) => {
         console.log(result);
         fetchUsers();
         setDeleting(false);
         setShowDeleteAlertModal(false);
      })
      .catch((error) => {
         console.log(error);
         toast.error(error.message);
         setDeleting(false);
      });
   }

   const columns:any= [
      { title:"No", field:"No", width:80, formatter:"rownum", headerSort:false},
      { title: "Name", field: "username", minWidth:200, sorter: "string"},
      { title: "Email", field: "email", minWidth:200, sorter: "string"},
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
               <Card.Body>
                  <div className="table-responsive">
                     {
                        loading ? MSG.LOADING : items.length == 0 ? MSG.NO_DATA:
                        <div>
                           <div className="input-group mb-3 flex justify-content-between">
                              <div className='input-group w-50'>
                                 <Form.Control type="text" className='w-50 flex-grow-0' value={searchKey} onChange={(d) => setSearchKey(d.target.value)} placeholder="" />
                                 <Button className="btn btn-primary rounded" onClick={handleSearch}>
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                 </Button>
                              </div>
                              <Button className="btn btn-primary rounded-1" onClick={handleAddUser}>
                                 Add User
                              </Button>
                           </div>
                           <div className="" >
                              <ReactTabulator className="table-hover table-bordered"
                                 data={filteredItems}
                                 columns={columns} 
                                 options={{pagination: 'local',
                                    paginationSize: pageSize,
                                    paginationSizeSelector: [20, 50, 100], // Define available page sizes
                                    paginationInitialPage: currentPage,
                                    paginationButtonCount: 3, // Number of pagination buttons to display
                                    paginationDataReceived: { last_page: totalPages },
                                    paginationDataSent: { page: currentPage, size: pageSize },
                                 }}
                              />
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
         content={`Are you sure to delete ${selectedItem?.username}?`} 
         handleOK={handleDeleteAlertModalOK}
      />
      <UserForm
         user={selectedItem} 
         modalShow={showUserFormModal} 
         setModalShow={setShowUserFormModal}
         updateUsers={fetchUsers}
      />

   </div>
)
};

export default UserListView;
