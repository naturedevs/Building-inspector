import { FC, useEffect, useState, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import { ReactTabulator, reactFormatter } from "react-tabulator";
import toast from 'react-hot-toast';
import axios from 'axios';

import { ActionColumn } from '../../components/ui/tabulator/ActionColumn';
import { YesNoModal } from '../../components/ui/modal/YesNo';
import { GFormI } from "./types";
// import { GForm } from './Form';
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import "../../assets/css/tabulator.css";

import { API_ROUTES } from "../../utils/constants"

interface GFormListViewProps { }

const GFormListView: FC<GFormListViewProps> = () => {
   const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalPages] = useState(1);
   const [gforms, setGForms] = useState<GFormI[]>([]);
   const [filterdGForms, setFilteredGForms] = useState<GFormI[]>([]);
   const [selectedGForm, setSelectedGForm] = useState<GFormI>();
   const [loading, setLoading] = useState(false);   
   const paginationRef = useRef(null);
   const [showDeleteAlertModal, setShowDeleteAlertModal] = useState(false);
   const [showGFormFormModal, setShowGFormFormModal] = useState(false);
   const [deleting, setDeleting] = useState(false);
   const [searchKey, setSearchKey] = useState("");

   useEffect(() => {
      fetchGForms();
   },[])

   const fetchGForms = async () => {
      setLoading(true);
      fetch(API_ROUTES.GET_USER_LIST, {
         method: "GET"
      })
      .then((response) => response.json())
      .then((data : GFormI[]) => {
         console.log(data);
         setGForms(data);
         setFilteredGForms(data.filter(user => {
            if(searchKey == ""){
               return true;
            }
            if(user.username.includes(searchKey)){
               return true;
            }
            if(user.email.includes(searchKey)){
               return true;
            }
            return false;
         }));
         setLoading(false);
      })
      .catch((error) => {
         console.log(error);
         toast.error(error.message);
         setLoading(false);
      });
   };

   const handleSearch = () => {
      setFilteredGForms(gforms.filter(user => {
         if(searchKey == ""){
            return true;
         }
         if(user.username.includes(searchKey)){
            return true;
         }
         if(user.email.includes(searchKey)){
            return true;
         }
         return false;
      }));
   }

   const handleAction = (type:string, data:any) => {
      console.log("handleStateChange");
      console.log(data)
      setSelectedGForm(data);
      if(type == "delete"){
         setShowDeleteAlertModal(true);
      }else if(type == "edit"){
         setShowGFormFormModal(true);
      }
   };

   const handleAddGForm = () => {
      setSelectedGForm(undefined);
      setShowGFormFormModal(true);
   }

   const handleDeleteAlertModalOK = async () => {
      console.log("handleDeleteAlertModalOK");
      console.log(selectedGForm?._id);
      setDeleting(true);
      if(!selectedGForm){
         toast.error("Something went wrong, none user is selected");
         setDeleting(false);
         return;
      }
      axios.post(API_ROUTES.DELETE_USER,{
         id:selectedGForm._id
      })
      .then(response => {
         console.log(response.data);
         if(response.data == "success"){
            toast.success("The user is successfully deleted");
            fetchGForms();
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

   const dataTable = useMemo(()=>{
      return (
         <ReactTabulator className="table-hover table-bordered"
            data={filterdGForms}
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
      )
   }, [filterdGForms]);

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
                        {loading?
                        "Loading...":
                        <div>
                           <div className="input-group mb-3 flex justify-content-between">
                              <div className='input-group w-50'>
                                 <Form.Control type="text" className='w-50 flex-grow-0' value={searchKey} onChange={(d) => setSearchKey(d.target.value)} placeholder="" />
                                 <Button className="btn btn-primary rounded" onClick={handleSearch}>
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                 </Button>
                              </div>
                              <Link to={`${import.meta.env.BASE_URL}gform/create`} className="btn btn-primary rounded-1" >
                                 Add GForm
                              </Link>
                           </div>
                           
                           <div className="" >
                              {dataTable}
                           </div>
                           {/* <div ref={paginationRef} id="paginationContainer"> */}
                           {/* </div> */}
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
         content={`Are you sure to delete ${selectedGForm?.username}?`} 
         handleOK={handleDeleteAlertModalOK}
      />
   </div>
)
};

export default GFormListView;
