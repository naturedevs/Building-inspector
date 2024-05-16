import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import { ReactTabulator, reactFormatter } from "react-tabulator";
import toast from 'react-hot-toast';
import axios from 'axios';
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { YesNoModal } from '../../components/ui/modal/YesNo';
import { ActionColumn } from '../../components/ui/tabulator/ActionColumn';
import { Role } from './types';
// import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

import { API_ROUTES } from "../../utils/constants"

interface RoleListViewProps { }
const data = [
   { id: 1, value: "Admin" },
   { id: 2, value: "Vadett Summers", position: "UI Developer", office: "Japan", age: 28, salary: "$270,750" },
   { id: 3, value: "Lisbon Mox", position: "Junior Lecturer", office: "San Deigo", age: 45, salary: "$286,000" },
   { id: 4, value: "Medric Belly", position: "Javascript Developer", office: "Eden Gards", age: 25, salary: "$1,060" },
   { id: 5, value: "Ayri Satovu", position: "Senior Engineer", office: "Elitr stet", age: 25, salary: "$262,700" },
   { id: 6, value: "Billie William", position: "Software Engineer", office: "Paris", age: 52, salary: "$472,000" },
   { id: 7, value: "Merrod Sailor", position: "Sales Assosiative", office: "Sydney", age: 35, salary: "$237,500" },
];

const RoleListView: FC<RoleListViewProps> = () => {
   const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalPages] = useState(1);
   const [roles, setRoles] = useState<Role[]>([]);   
   const [selectedRole, setSelectedRole] = useState<Role>();
   const [loading, setLoading] = useState(false);  
   const [showDeleteAlertModal, setShowDeleteAlertModal] = useState(false);
   const [showUserFormModal, setShowUserFormModal] = useState(false);
   const [deleting, setDeleting] = useState(false);

   useEffect(() => {
      fetchRoles();
   },[])

   const fetchRoles = async () => {
      setLoading(true);
      fetch(API_ROUTES.GET_ROLE_LIST, {
         method: "GET"
      })
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setRoles(data);
         setLoading(false);
      })
      .catch((error) => {
         console.log(error);
         setLoading(false);
         toast.error(error.message);
      });
   };

   const handleAction = (type:string, data:any) => {
      console.log("handleStateChange");
      setSelectedRole(data);
      if(type == "delete"){
         setShowDeleteAlertModal(true);
      }else if(type == "edit"){
         setShowUserFormModal(true);
      }
   };

   const handleDeleteAlertModalOK = () => {
      console.log("handleDeleteAlertModalOK");
      console.log(selectedRole?._id);
      setDeleting(true);
      if(!selectedRole){
         toast.error("Something went wrong, none user is selected");
         return;
      }
      axios.post(API_ROUTES.DELETE_ROLE,{
         id:selectedRole._id
      })
      .then(response => {
         console.log(response.data);
         if(response.data == "success"){
            toast.success("The role is successfully deleted");
            fetchRoles();
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

	const handlePageChange = (page:any) => {
      console.log("page")
      console.log(page)
		setCurrentPage(page);
	};

   const columns:any= [
      { title:"No", field:"No", width:80, formatter:"rownum", headerSort:false},
      { title: "Title", field: "value", minWidth:200, sorter: "string"},
      { title: 'Actions', width:120, field: 'action', hozAlign: 'center',headerSort:false, formatter: reactFormatter(<ActionColumn handleAction={handleAction}/>) }
   ];
   return (
   <div className='main-container container-fluid mt-3'>
      <Row>
         <Col xl={12}>
            <Card className="custom-card">
                  <Card.Header>
                     <Card.Title>
                     Roles
                     </Card.Title>
                  </Card.Header>
                  <Card.Body>
                  <div className="table-responsive  ">
                     <ReactTabulator className="table-hover table-bordered"
                        data={data}
                        columns={columns} 
                        options={{pagination: 'local',
                           paginationSize: pageSize,
                           paginationSizeSelector: [ 20, 50, 100], // Define available page sizes
                           paginationInitialPage: currentPage,
                           paginationButtonCount: 5, // Number of pagination buttons to display
                           paginationDataReceived: { last_page: totalPages },
                           paginationDataSent: { page: currentPage, size: pageSize }}}
                           onPageChange={(data:any) => handlePageChange(data.page)} />
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
         content={'Are you sure to delete this role?'} 
         handleOK={handleDeleteAlertModalOK}
      />
   </div>
)
};

export default RoleListView;
