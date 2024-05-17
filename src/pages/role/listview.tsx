import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
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
import { RoleForm } from './Form';
// import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

import { API_ROUTES } from "../../utils/constants"

interface RoleListViewProps { }
const data1 = [
   { _id: 1, title: "Admin" },
   { _id: 2, title: "Vadett Summers", position: "UI Developer", office: "Japan", age: 28, salary: "$270,750" },
   { _id: 3, title: "Lisbon Mox", position: "Junior Lecturer", office: "San Deigo", age: 45, salary: "$286,000" },
   { _id: 4, title: "Medric Belly", position: "Javascript Developer", office: "Eden Gards", age: 25, salary: "$1,060" },
   { _id: 5, title: "Ayri Satovu", position: "Senior Engineer", office: "Elitr stet", age: 25, salary: "$262,700" },
   { _id: 6, title: "Billie William", position: "Software Engineer", office: "Paris", age: 52, salary: "$472,000" },
   { _id: 7, title: "Merrod Sailor", position: "Sales Assosiative", office: "Sydney", age: 35, salary: "$237,500" },
];

const RoleListView: FC<RoleListViewProps> = () => {
   const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalPages] = useState(1);
   const [roles, setRoles] = useState<Role[]>([]);   
   const [selectedRole, setSelectedRole] = useState<Role>();
   const [loading, setLoading] = useState(false);  
   const [showDeleteAlertModal, setShowDeleteAlertModal] = useState(false);
   const [showRoleFormModal, setShowRoleFormModal] = useState(false);
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
         setShowRoleFormModal(true);
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
         _id:selectedRole._id
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

   const handleAddRole = () => {
      setSelectedRole(undefined);
      setShowRoleFormModal(true);
   }

   const columns:any= [
      { title:"No", field:"No", width:80, formatter:"rownum", headerSort:false},
      { title: "Title", field: "title", minWidth:200, sorter: "string"},
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
                     <div className="input-group mb-3 flex flex-row-reverse">
                        <Button className="btn btn-primary rounded-1" onClick={handleAddRole}>
                           Add Role
                        </Button>
                     </div>
                     <div className="table-responsive  " >
                        <ReactTabulator className="table-hover table-bordered"
                           data={roles}
                           columns={columns} 
                           options={{pagination: 'local',
                              paginationSize: pageSize,
                              paginationSizeSelector: [ 20, 50, 100], // Define available page sizes
                              paginationInitialPage: currentPage,
                              paginationButtonCount: 5, // Number of pagination buttons to display
                              paginationDataReceived: { last_page: totalPages },
                              paginationDataSent: { page: currentPage, size: pageSize }}}
                        />
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
         content={`Are you sure to delete ${selectedRole?.title}?`} 
         handleOK={handleDeleteAlertModalOK}
      />
      <RoleForm 
         modalShow={showRoleFormModal}
         setModalShow={setShowRoleFormModal}
         role={selectedRole}
         updateRoles={fetchRoles}
      />
   </div>
)
};

export default RoleListView;
