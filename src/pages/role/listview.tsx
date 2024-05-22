import { FC, useState, useEffect } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { ReactTabulator, reactFormatter } from "react-tabulator";
import toast from 'react-hot-toast';
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import { DeleteModal } from '../../components/ui/modal/deleteModal';
import { ActionColumn } from '../../components/ui/tabulator/ActionColumn';
import { Role } from './types';
import { RoleForm } from './Form';

import { API_ROUTES, MSG } from "../../utils/constants"

interface RoleListViewProps { }

const RoleListView: FC<RoleListViewProps> = () => {

   const [items, setItems] = useState<Role[]>([]);   
   const [selectedItem, setSelectedItem] = useState<Role>();

   const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalPages] = useState(1);
   
   const [isLoading, setLoading] = useState(false);  
   const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
   const [isFormModalVisible, setFormModalVisible] = useState(false);

   useEffect(() => {
      fetchItems();
   },[])

   const fetchItems = async () => {
      setLoading(true);
      fetch(API_ROUTES.ROLE_API, {
         method: "GET"
      })
      .then((response) => response.json())
      .then((data) => {
         setItems(data);
         setLoading(false);
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

   const handleAction = (type:string, data:any) => {
      setSelectedItem(data);
      if(type == "delete"){
         setDeleteModalVisible(true);
      }
      else if(type == "edit"){
         setFormModalVisible(true);
      }
   };

   const handleDeleteItem = () => {
      console.log(selectedItem?._id);
      if(!selectedItem){
         toast.error("Something went wrong");
         return;
      }
      fetch(API_ROUTES.ROLE_API + `/${selectedItem._id}`, {
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
      { title:"No", field:"No", width:80, formatter:"rownum", headerSort:false},
      { title: "Title", field: "name", minWidth:200, sorter: "string"},
      { title: 'Actions', width:120, field: 'action', hozAlign: 'center',headerSort:false, formatter: reactFormatter(<ActionColumn handleAction={handleAction}/>) }
   ];
   return (
   <div className='main-container container-fluid mt-3'>
      <Row>
         <Col xl={12}>
            <Card className="custom-card">
               <Card.Body>
                  <div className="input-group mb-3 flex flex-row-reverse">
                     <Button className="btn btn-primary rounded-1" onClick={handleAddItem}>
                        Add Role
                     </Button>
                  </div>
                  <div className="table-responsive">
                     {
                        isLoading ? MSG.LOADING : items.length == 0 ? MSG.NO_DATA:
                        <ReactTabulator className="table-hover table-bordered"
                           data={items}
                           columns={columns} 
                           options={{
                              pagination: 'local',
                              paginationSize: pageSize,
                              paginationSizeSelector: [ 20, 50, 100],
                              paginationInitialPage: currentPage,
                              paginationButtonCount: 5,
                              paginationDataReceived: { last_page: totalPages },
                              paginationDataSent: { page: currentPage, size: pageSize }
                           }}
                        />
                     }
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

      <RoleForm 
         modalShow={isFormModalVisible}
         setModalShow={setFormModalVisible}
         role={selectedItem}
         updateRoles={fetchItems}
      />

   </div>
)
};

export default RoleListView;
