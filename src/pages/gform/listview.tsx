import { FC, useEffect, useState } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { ReactTabulator, reactFormatter } from "react-tabulator";
import toast from 'react-hot-toast';

import { ActionColumn } from '../../components/ui/tabulator/ActionColumn';
import { DeleteModal } from '../../components/ui/modal/deleteModal';

import { GFormI } from "./types";
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import "../../assets/css/tabulator.css";
import { GForm } from './Form';
import { API_ROUTES, MSG } from "../../utils/constants"

interface GFormListViewProps { }

const GFormListView: FC<GFormListViewProps> = () => {

   const [items, setItems] = useState<GFormI[]>([]);
   const [filteredItems, setFilteredItems] = useState<GFormI[]>([]);
   const [selectedItem, setSelectedItem] = useState<GFormI>();

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
      fetch(API_ROUTES.FORM_API, {
         method: "GET"
      })
      .then((response) => response.json())
      .then((data : GFormI[]) => {
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
         if(searchStr == ""){
            return true;
         }
         if(item.name.includes(searchStr)){
            return true;
         }
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
   }

   const handleDeleteItem = async () => {

      if(!selectedItem){
         toast.error("Something went wrong");
         return;
      }

      fetch(API_ROUTES.FORM_API + `/${selectedItem._id}`, {
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
      { title: "Name", field: "name", minWidth:200, sorter: "string"},
      { title: 'Actions', width:120, field: 'action', hozAlign: 'center',headerSort:false, formatter: reactFormatter(<ActionColumn handleAction={handleAction}/>) }
   ];

   return (
   <div className='main-container container-fluid mt-3'>
      <Row>
         <Col xl={12}>
            <Card className="custom-card">
               <Card.Body>
                  <div className="input-group mb-3 flex justify-content-center justify-content-sm-between">
                     <div className='input-group w-50 py-1' style={{minWidth:250}}>
                        <Form.Control type="text" className='flex-grow-0' style={{minWidth:200}} value={searchStr} onChange={(d) => setSearchStr(d.target.value)} placeholder="" />
                        <Button className="btn btn-primary rounded" onClick={handleSearchItem}>
                           <i className="fa fa-search" aria-hidden="true"></i>
                        </Button>
                     </div>
                     <button onClick={handleAddItem} className="btn btn-primary rounded-1 my-1" >
                        Add GForm
                     </button>
                  </div>
                  <div className="table-responsive">
                     {
                        isLoading ? MSG.LOADING : items.length == 0 ? MSG.NO_DATA:
                        <ReactTabulator 
                           className="table-hover table-bordered"
                           data={filteredItems}
                           columns={columns} 
                           options={{
                              pagination: 'local',
                              paginationSize: pageSize,
                              paginationSizeSelector: [20, 50, 100],
                              paginationInitialPage: currentPage,
                              paginationButtonCount: 3,
                              paginationDataReceived: { last_page: totalPages },
                              paginationDataSent: { page: currentPage, size: pageSize },
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

      <GForm 
         item={selectedItem}
         modalShow={isFormModalVisible}
         setModalShow={setFormModalVisible}
         updateItems={fetchItems}
         key={"gform"}
      />
   </div>
)
};

export default GFormListView;
