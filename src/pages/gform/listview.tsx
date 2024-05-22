import { FC, useEffect, useState } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { ReactTabulator, reactFormatter } from "react-tabulator";
import toast from 'react-hot-toast';

import { ActionColumn } from '../../components/ui/tabulator/ActionColumn';
import { YesNoModal } from '../../components/ui/modal/YesNo';
import { GFormI } from "./types";
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import "../../assets/css/tabulator.css";
import { GForm } from './Form';
import { API_ROUTES, MSG } from "../../utils/constants"

interface GFormListViewProps { }

const GFormListView: FC<GFormListViewProps> = () => {
   const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalPages] = useState(1);
   const [items, setItems] = useState<GFormI[]>([]);
   const [filterdItems, setFilteredItems] = useState<GFormI[]>([]);
   const [selectedItem, setSelectedItem] = useState<GFormI>();
   const [loading, setLoading] = useState(false);
   const [showDeleteAlertModal, setShowDeleteAlertModal] = useState(false);
   const [showItemFormModal, setShowItemFormModal] = useState(false);
   const [deleting, setDeleting] = useState(false);
   const [searchKey, setSearchKey] = useState("");

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
         setItems(data);
         setFilteredItems(data);
         setLoading(false);
      })
      .catch((error) => {
         toast.error(error.message);
         setLoading(false);
      });
   };

   const handleSearch = () => {
      setFilteredItems(items.filter(item => {
         if(searchKey == ""){
            return true;
         }
         if(item._id.includes(searchKey)){
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
         setShowItemFormModal(true);
      }
   };

   const handleAddItem = () => {
      setSelectedItem(undefined);
      setShowItemFormModal(true);
   }

   const handleDeleteAlertModalOK = async () => {
      console.log("handleDeleteAlertModalOK");
      console.log(selectedItem?._id);
      setDeleting(true);
      if(!selectedItem){
         toast.error("Something went wrong, none item is selected");
         setDeleting(false);
         return;
      }

      fetch(API_ROUTES.FORM_API + `/${selectedItem._id}`, {
         method: "DELETE",
      })
      .then((res) => res.json())
      .then((result) => {
         console.log(result);
         fetchItems();
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
      { title: "Name", field: "name", minWidth:200, sorter: "string"},
      { title: 'Actions', width:120, field: 'action', hozAlign: 'center',headerSort:false, formatter: reactFormatter(<ActionColumn handleAction={handleAction}/>) }
   ];

   return (
   <div className='main-container container-fluid mt-3'>
      <Row>
         <Col xl={12}>
            <Card className="custom-card">
                  <Card.Header>
                     <Card.Title>
                        GForms
                     </Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <div className="table-responsive  ">
                        {
                           loading ? MSG.LOADING : items.length == 0 ? MSG.NO_DATA:
                           <div>
                              <div className="input-group mb-3 flex justify-content-center justify-content-sm-between">
                                 <div className='input-group w-50 py-1' style={{minWidth:250}}>
                                    <Form.Control type="text" className='flex-grow-0' style={{minWidth:200}} value={searchKey} onChange={(d) => setSearchKey(d.target.value)} placeholder="" />
                                    <Button className="btn btn-primary rounded" onClick={handleSearch}>
                                       <i className="fa fa-search" aria-hidden="true"></i>
                                    </Button>
                                 </div>
                                 <button onClick={handleAddItem} className="btn btn-primary rounded-1 my-1" >
                                    Add GForm
                                 </button>
                              </div>
                              
                              <div className="" >
                                 <ReactTabulator className="table-hover table-bordered"
                                    data={filterdItems}
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
         content={`Are you sure to delete ${selectedItem?._id}?`} 
         handleOK={handleDeleteAlertModalOK}
      />
      <GForm 
         item={selectedItem}
         modalShow={showItemFormModal}
         setModalShow={setShowItemFormModal}
         updateItems={fetchItems}
         key={"gform"}
      />
   </div>
)
};

export default GFormListView;
