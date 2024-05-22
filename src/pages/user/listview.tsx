import { FC, useEffect, useState } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import { ReactTabulator, reactFormatter } from "react-tabulator";
import toast from 'react-hot-toast';

import { ActionColumn } from '../../components/ui/tabulator/ActionColumn';
import { YesNoModal } from '../../components/ui/modal/YesNo';
import { DeleteModal } from '../../components/ui/modal/deleteModal';
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
   
   const [isLoading, setLoading] = useState(false);   
   const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
   const [isFormModalVisible, setFormModalVisible] = useState(false);
   
   const [searchStr, setSearchStr] = useState("");

   useEffect(() => {
      fetchItems();
   },[])

   const fetchItems = async () => {
      setLoading(true);
      fetch(API_ROUTES.USER_API, {
         method: "GET"
      })
      .then((response) => response.json())
      .then((data : User[]) => {
         setLoading(false);
         setItems(data);
         setFilteredItems(data);
      })
      .catch((error) => {
         setLoading(false);
         toast.error(error.message);
      });
   };

   const handleAddItem = () => {
      setSelectedItem(undefined);
      setFormModalVisible(true);
   }

   const handleSearchItem = () => {
      setFilteredItems(items.filter(item => {
         if(searchStr == "") return true;
         if(item.username.includes(searchStr)) return true;
         if(item.email.includes(searchStr)) return true;
         return false;
      }));
   }

   const handleAction = (type:string, data:any) => {
      setSelectedItem(data);
      if(type == "delete"){
         setDeleteModalVisible(true);
      }
      if(type == "edit"){
         setFormModalVisible(true);
      }
   };

   const handleDeleteItem = async () => {

      console.log(selectedItem?._id);
      if(!selectedItem){
         toast.error("Something went wrong, none user is selected");
         return;
      }

      fetch(API_ROUTES.USER_API + `/${selectedItem._id}`, {
         method: "DELETE",
      })
      .then((res) => res.json())
      .then((result) => {
         console.log(result);
         setDeleteModalVisible(false);
         fetchItems();
      })
      .catch((error) => {
         console.log(error);
         toast.error(error.message);
      });
   }
   
   const columns:any= [
      { title:"No", field:"No", width:80, formatter:"rownum", headerSort:false },
      { title: "Name", field: "username", minWidth:200, sorter: "string" },
      { title: "Email", field: "email", minWidth:200, sorter: "string" },
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
                     <div>
                        <div className="input-group mb-3 flex justify-content-between">
                           <div className='input-group w-50'>
                              <Form.Control type="text" className='w-50 flex-grow-0' value={searchStr} onChange={(d) => setSearchStr(d.target.value)} placeholder="" />
                              <Button className="btn btn-primary rounded" onClick={handleSearchItem}>
                                 <i className="fa fa-search" aria-hidden="true"></i>
                              </Button>
                           </div>
                           <Button className="btn btn-primary rounded-1" onClick={handleAddItem}>
                              Add User
                           </Button>
                        </div>
                        <div className="" >
                        {
                           isLoading ? MSG.LOADING : items.length == 0 ? MSG.NO_DATA:
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
                        }
                        </div>
                     </div>
                  </div>
               </Card.Body>
            </Card>
         </Col>
      </Row>

      <DeleteModal 
         visible={isDeleteModalVisible} 
         setVisible={setDeleteModalVisible}
         handleDelete={handleDeleteItem}
      />

      <UserForm
         user={selectedItem} 
         modalShow={isFormModalVisible} 
         setModalShow={setFormModalVisible}
         updateUsers={fetchItems}
      />

   </div>
)
};

export default UserListView;
